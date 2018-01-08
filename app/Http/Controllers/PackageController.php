<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PackageController extends Controller
{
    public $connection;
    public $fieldList = [];
    public $fieldListConfig = [];
    public $fieldListSimple = [];
    public $limit;
    public $url;
    public $port;
    public $token;
    protected $_bucket;
    protected $_classes;


    public $servername;
    public $username;
    public $password;
    public $database;
    public $debug;

    public function __construct($config)
    {

        // set configs to class
        $servername = $this->servername = $config['MYSQL']['servername'];
        $username = $this->username = $config['MYSQL']['username'];
        $password = $this->password = $config['MYSQL']['password'];
        $database = $this->database = $config['MYSQL']['database'];

        $this->limit = $config['API']['limit'];
        $this->url = $config['API']['url'];
        $this->port = $config['API']['port'];
        $this->token = $config['API']['token'];
        $this->_bucket = $config['API']['bucket'];
        $this->_classes = $this->_getClasses();
        $this->debug = (bool)$config['API']['debug'];


        try {
            // connect to PDO
            $this->connection = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            // set the PDO error mode to exception
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            if ($this->debug) echo "<br>Connected to MySql successfully" . "<br/>";
            ob_flush();
        } catch (PDOException $e) {
            if ($this->debug) echo "Connection failed: " . $e->getMessage() . "<br/>";
            ob_flush();
        }

        $integrityBuild = $this->backup();

        $baseProductIntegrity = new dbintegrity($this->connection->query($integrityBuild['rmi']), 'rmi');
        $simpleProductIntegrity = new dbintegrity($this->connection->query($integrityBuild['rmi_single_product']), 'rmi_single_product');
        $configProductIntegrity = new dbintegrity($this->connection->query($integrityBuild['rmi_config_product']), 'rmi_config_product');

        // Drop Tables befor create new table
        $sqlDeleteTable = "DROP TABLE IF EXISTS $database.rmi;";
        $sqlDeleteTable .= "DROP TABLE IF EXISTS $database.rmi_single_product;";
        $this->connection->query($sqlDeleteTable);
        $sqlDeleteTable = "DROP TABLE IF EXISTS $database.rmi_config_product;";
        $this->connection->query($sqlDeleteTable);

        // create new tables
        $sqlCreateTable = "CREATE TABLE $database.rmi (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY) ENGINE=InnoDB;";
        $sqlCreateTable .= "CREATE TABLE $database.rmi_config_product (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY) ENGINE=InnoDB;";
        $sqlCreateTable .= "CREATE TABLE $database.rmi_single_product (
                        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        config_id INT UNSIGNED NOT NULL,
                        FOREIGN KEY (config_id) REFERENCES rmi_config_product(id)
                        ) ENGINE=InnoDB
                        ";
        $this->connection->query($sqlCreateTable);


        $fields = array();

        // fech for create fields
//        $curl = curl_init();
//        curl_setopt_array($curl, array(
//            CURLOPT_PORT => $this->port,
//            CURLOPT_URL => $this->url,
//            CURLOPT_RETURNTRANSFER => true,
//            CURLOPT_ENCODING => "",
//            CURLOPT_MAXREDIRS => 10,
//            CURLOPT_TIMEOUT => 30,
//            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//            CURLOPT_CUSTOMREQUEST => "GET",
//            CURLOPT_HTTPHEADER => array(
//                "x-inno-token: {$this->token}",
//                "x-inno-request: {\"limit\":1}"
//            ),
//        ));
//        curl_setopt($curl, CURLOPT_TIMEOUT, 500);
//        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, false);
//        $result = curl_exec($curl);
//        $err = curl_error($curl);
//        curl_close($curl);
//
//
//        if ($err) return "cURL Error #:" . $err . "<br/>";
//        else if (!$result) return "Result is empty" . "<br/>";
//        else {
//
//            // loop on fields to create table
//            $result = str_replace(',}', '}', $result);
//            $result = str_replace(',]', ']', $result);
//            $response = json_decode($result, true);


        $response = $this->_getNewDataLinkMappedData(0, 1);

        foreach ($response["items"][0]["items"] as $item) {
            foreach ($item AS $key => $value) {
                $fieldName = 'RMI_' . $key;
                if (!in_array($fieldName, $this->fieldList, true)) {
                    array_push($this->fieldList, $fieldName);
                    $this->changeTableField($fieldName);
                }
            }
        }

        // foreach on all items
        foreach ($response["items"][0]["items"] as $item) {
            foreach ($item AS $key => $value) {
                $fieldName = 'RMI_' . $key;
                if (!in_array($fieldName, $this->fieldListSimple, true)) {
                    array_push($this->fieldListSimple, $fieldName);
                    $this->changeTableFieldSimple($fieldName);
                }
            }
        }
//        }

        // foreach on all fields
        foreach ($response["items"][0]["fields"] as $key => $value) {
            $fieldName = 'RMI_' . $key;
            if (!in_array($fieldName, $this->fieldList, true)) {
                array_push($this->fieldList, $fieldName);
                $this->changeTableField($fieldName);
            }
        }
        // foreach on all fields for 2part table
        foreach ($response["items"][0]["fields"] as $key => $value) {
            $fieldName = 'RMI_' . $key;
            if (!in_array($fieldName, $this->fieldListConfig, true)) {
                array_push($this->fieldListConfig, $fieldName);
                $this->changeTableFieldConfig($fieldName);
            }
        }
    }

    // Change fields on RMI table
    private function changeTableField($fieldName)
    {
        $database = $this->database;
        $sqlAddField = "ALTER TABLE $database.rmi ADD $database.rmi.$fieldName text NULL";
        $this->connection->query($sqlAddField);
    }

    // Change fields on RMI CONFIG table

    private function changeTableFieldSimple($fieldName)
    {
        $database = $this->database;
        $sqlAddField = "ALTER TABLE $database.rmi_single_product ADD $database.rmi_single_product.$fieldName text NULL";
        $this->connection->query($sqlAddField);
    }

    // Change fields on RMI SINGLE table

    private function changeTableFieldConfig($fieldName)
    {
        $database = $this->database;
        $sqlAddField = "ALTER TABLE $database.rmi_config_product ADD $database.rmi_config_product.$fieldName text NULL";
        $this->connection->query($sqlAddField);
    }


    // Insert data to database

    public function fetchData($mysqlO)
    {
        $skip = 0;
        do {
            $skip = $this->loader($skip, $mysqlO);

            if ($this->debug) echo "<br>Fetch Next {$this->limit} Configurables After $skip.......<br><hr>";
            ob_flush();

        } while ($skip > 0);
    }

    protected function _getBucketProductsStream($bucketId, $skip = 0, $limit = 100)
    {
        header('Content-Type: application/json');
        $options = ['http' =>
            [
                'method' => 'POST',
                'header' => "Content-Type: application/json\r\n",
            ]
        ];

        $context = stream_context_create($options);
        $url = $this->url . ':80/customApi/vendorproduct/getbucketproduct?isVendorWebsite=1&bucketId=' . $bucketId . '&limit=' . $limit . '&skip=' . $skip;
        $products = file_get_contents($url, false, $context, -1, 536870912);
        $products = json_decode($products, true);

        //die(print_r($products));

        return $products['data'];
    }

    protected function _getNewDataLinkMappedData($skip, $limit)
    {
        return $this->_mapData($this->_getBucketProductsStream($this->_bucket, $skip, $limit));
    }

    protected function _mapData($data)
    {
        $result = [];
        $result['count'] = $data['total'];
        $result['items'] = [];
        foreach ($data['data'] as $product) {
            $item = [];
            $item['_id'] = [
                'vendor_uid' => $product['vendorUniqueId'],
                'collection_name' => $product['collectionName'],
                'design_name' => $product['designName']
            ];

            $item['items'] = $this->_getSimpleItems($product['simpleList']);
            //  print_r($product);
            $item['fields'] = [
                'field_design_name' => $product['fieldDesignName'],
                'child_style_name' => $product['secondaryStyleName'],
                'parent_style_name' => $product['primaryStyleName'],
                'design_name' => $product['designName'],
                'content_name' => $product['primaryMaterialName'],
                'description' => $product['productDescription'],
                'origin_name' => $product['originCountryName'],
                'type_name' => $product['constructionName'],
                'collection_name' => $product['collectionName'],
                'vendor_uid' => $product['vendorUniqueId']
            ];
            //  echo "-------------------------------------------------------------------------------------------";
            //  print_r($item);exit;
            $item['count'] = $product['count'];

            $result['items'][] = $item;
        }

        return $result;
    }

    protected function _getSimpleItems($simpleItems)
    {
        $items = [];
        foreach ($simpleItems as $simpleItem) {
            list($width, $length) = explode('x', strtolower($simpleItem['vendorSizeName']));
            list($widthFeet, $widthInch) = explode("'", str_replace('"', '', $width));
            list($lengthFeet, $lengthInch) = explode("'", str_replace('"', '', $length));
            $items[] = [
                '_id' => $simpleItem['id'],
                '_sku_code' => $simpleItem['sku'],
//              'last_edited'           => $simpleItem[''],
                'unregulated' => $simpleItem['isPublish'],
                'image_not_available' => !$simpleItem['images'][0]['isReal'],
                'new_arrival' => $simpleItem['isNewArrival'],
                'discounted' => $simpleItem['isDiscounted'],
                'dropped' => $simpleItem['isCloseOut'],
                'active' => $simpleItem['isActive'],
                'image_filename' => $simpleProductIntegrity->imageIntegrity($simpleItem['id'], $simpleItem['images'][0]['name']),
//                'price_2'               => $simpleItem['p2'],
//                'price_1'               => $simpleItem['p1'],
                'vendor_cost' => $simpleItem['baseCost'],
                'msrp' => $simpleItem['msrpPrice'],
                'map_price' => $simpleItem['mapPrice'],
                'size_category' => $simpleItem['sizeName'],
                'length_2' => $lengthInch,
                'length_1' => $lengthFeet,
                'width_2' => $widthInch,
                'width_1' => $widthFeet,
                'background_color_name' => $simpleItem['colorGroupName'],
                'vendor_color' => $simpleItem['vendorColorGroupName'],
                'vendor_primary_color' => $simpleItem['primaryColorName'],
                'qty' => $simpleItem['quantity'],
                'category' => $this->_classes[$simpleItem['adminClassOwner']],
                'shape_name' => $simpleItem['shapeName'],
                'vendor_shape' => $simpleItem['vendorShapeName'],
//              'sku_description'       => $simpleItem[''],
                'sku_code' => $simpleItem['sku'],
//              'upc_code'              => $simpleItem['']
            ];
        }
        return $items;
    }


    protected function _getClasses()
    {
//        $filePath = BP . '/var/import/classes_list.log';
//        if (file_exists($filePath)) {
//            $allClasses = unserialize(@file_get_contents($filePath));
//            return $allClasses;
//        }
        $skip = 0;
        $limit = 5;
        $allClasses = [];
        do {
            $response = $this->curl($this->url . ':80/api/adminclass/?limit=' . $limit . '&skip=' . ($skip * $limit), 'GET');
            $classes = json_decode($response, true);
            $classesList = [];
            foreach ($classes as $class) {
                $classesList[$class['id']] = $this->_getClassNameTree($class['class']);
//              $classesList[$class['id']] = $class['class'][0]['title'];
            }
            $allClasses = array_merge($allClasses, $classesList);
            $skip++;
        } while (($skip * $limit) < 30);
        return $allClasses;
    }

    protected function _getClassNameTree($class)
    {
        $name = '';
        foreach ($class as $info) {
            $title = preg_replace('/\s/', '-', ucwords(strtolower($info['title'])));
            $name .= $title . '_';
        }
        return rtrim($name, '_');
    }

    public function curl($url, $method, $params = null)
    {

        $curl = curl_init();
        $config = [
            CURLOPT_PORT => "80",
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $method,
            CURLOPT_HTTPHEADER => [
                "cache-control: no-cache",
                "content-type: application/json",
//              "content-length: 0",
                "token: " . $this->token
                //eyJ0b2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVNXUWlPaUkxT1RabU56WmxNV1l6WWpkbE1UY3pNalZrTXprMk1UUWlMQ0ptYVhKemRHNWhiV1VpT2lKellXVmxaQ0lzSW14aGMzUnVZVzFsSWpvaWIzSmhhbWtpTENKeWIyeGxJam9pY21WMFlXbHNaWElpTENKaGNIQWlPaUprWVhSaGJHbHVheUlzSW1WdFlXbHNJam9pYzJGbFpXUnZjbUZxYVVCbmJXRnBiQzVqYjIwaUxDSnZkMjVsY2tsa0lqcHVkV3hzTENKMlpXNWtiM0p6SWpwYmV5SjJaVzVrYjNJaU9pSlNhWHA2ZVNJc0luWmxibVJ2Y2tsa0lqb2lOVGcwTmpnMVlUZGxZamsxT1dZMVlqRTNOV1JqWVRZd0luMHNleUoyWlc1a2IzSWlPaUpoWkdWemMyOGlMQ0oyWlc1a2IzSkpaQ0k2SWpVNE5EUXhaRGN6TWpGbU1UUXdOR0l4WkRFeE5XUmxNU0o5WFN3aWFXRjBJam94TlRBd056azROalUwZlEuQUhPMFh5SXVkd29KMFgwM1FsLUEtWTF4VTJJVFZ4ZGZlT3BwLXEyT2cyNm84NkFBam14Wk5JcGprX2hDeDVpVHJHamJ5djM1N3M1U1pWdzRCdkdFWUpZclI3M2xONGs4ZmlGV0ZqWmgxTU92M1Q5STN3N19EN3lnclBTOFl3c0h2TjE4djdNdjY1U1k5ZGM3ak5sM2RuOFdoeHBPaklaNXBPbGowWVowcjNIMmNkbGVVVlJLT3Q4dUVDRnJQYmxVUFlXa1IxYXlMenVnbGtiWE9NOGg5eGtNRV9Kd1F5NlhablMyU3oyeUhLaTVpUVlxRlY2aTZuRDQ2QnE4UldORThjN1lzVVRueElfWC1hVklqQkFsZHNiYjV0U2hGUnRIQlVHNVB5N2FxcjQ2UktnNS1PWjdxcUVJNzcwUElRV0pFRnFZWndzemlFQzd0ZXlrcjVCcTB3IiwiYXBwIjoiZGF0YWxpbmsiLCJlbWFpbCI6InNhZWVkb3JhamlAZ21haWwuY29tIn0=
            ]];

        curl_setopt_array($curl, $config);
        /*if ($method == 'GET') {
            $params = 'limit=100000&' . $params;
        }*/
        if ($params) {
            curl_setopt($curl, CURLOPT_POSTFIELDS, $params);
        }

        $response = curl_exec($curl);
        $error = curl_error($curl);

        curl_close($curl);

        if ($error) {
            throw new Exception('cURL Error #:' . $error);
            return;
        }

        return $response;
    }

    // Insert data to config Table

    private function loader($skip, $mysqlO)
    {
        $limit = $this->limit;
//        $curl = curl_init();
//        curl_setopt_array($curl, array(
//            CURLOPT_PORT => $this->port,
//            CURLOPT_URL => $this->url,
//            CURLOPT_RETURNTRANSFER => true,
//            CURLOPT_ENCODING => "",
//            CURLOPT_MAXREDIRS => 10,
//            CURLOPT_TIMEOUT => 30,
//            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//            CURLOPT_CUSTOMREQUEST => "GET",
//            CURLOPT_HTTPHEADER => array(
//                "x-inno-token: {$this->token}",
//                "x-inno-request: {\"limit\":$limit, \"skip\":$skip}"
//            ),
//        ));
//        curl_setopt($curl, CURLOPT_TIMEOUT, 500);
//        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, false);
//        $result = curl_exec($curl);
//        $err = curl_error($curl);
//        curl_close($curl);


//        if ($err) return "cURL Error #:" . $err . "<br/>";
//        else if (!$result) return "Result is empty" . "<br/>";
//        else {
//
//            $result = str_replace(',}', '}', $result);
//            $result = str_replace(',]', ']', $result);
//            $response = json_decode($result, true);

        $response = $this->_getNewDataLinkMappedData($skip, $limit);

        for ($i = 0; $i < count($response["items"]); $i++) {

            //all
            $simplesId = "";
            foreach ($response["items"][$i]["items"] as $item) {
                $simplesId .= strlen($simplesId) > 0 ? "," . $item['_id'] : $item['_id'];
            }

            foreach ($response["items"][$i]["items"] as $item) {


                $additionalFields = array();

                foreach ($response["items"][$i]["fields"] as $key => $value) {
                    $additionalFields[$key] = $value;
                }

                foreach ($response["items"][$i]["_id"] as $key => $value) {
                    $additionalFields[$key] = $value;
                }
                $additionalFields["simples_group"] = $simplesId;

                $item = array_merge($item, $additionalFields);
                $mysqlO->insert($item);
            }

            $additionalFields = array();
            foreach ($response["items"][$i]["fields"] as $key => $value) {
                $additionalFields[$key] = $value;
            }

            $configId = $mysqlO->insertConfig($additionalFields);
            echo "<br>Config Id : $configId <br>";

            foreach ($response["items"][$i]["items"] as $item) {
                $mysqlO->insertSimple($item, $configId);
            }


        }

//        }
        if ($this->debug) echo "<br>Count Of All Configurable Is : {$response["count"]}.......";
        $remain = (int)$response["count"] - ($skip + $limit);
        if ($remain < 0) $remain = 0;
        if ($this->debug) echo "<br>Remaining is : $remain.......";
        return count($response["items"]) == 0 ? -1 : $skip + $limit;
    }


    // Insert data to single Table

    private function insert($item)
    {
        try {
            $database = $this->database;
            $detail = array();
            foreach ($item as $field => $value) {
                if (is_array($value)) {

                    // foreach on fetch items
                    for ($i = 0; $i < count($value); $i++) {
                        // if value is arraY
                        if (is_array($value[$i])) {
                            foreach ($value[$i] as $val2Key => $val2Val) {
                                $fieldName = 'RMI_' . $field . "_" . $i . "_" . $val2Key;
                                $detail['field'][] = $fieldName;
                                if (!in_array($fieldName, $this->fieldList, true)) {
                                    $this->changeTableField($fieldName);
                                    array_push($this->fieldList, $fieldName);
                                }
                                $detail['data'][] = $val2Val;
                            }
                            // if value is not array
                        } else {
                            $fieldName = 'RMI_' . $field . "_" . $i;
                            $detail['field'][] = $fieldName;
                            if (!in_array($fieldName, $this->fieldList, true)) {
                                $this->changeTableField($fieldName);
                                array_push($this->fieldList, $fieldName);
                            }
                            $detail['data'][] = $value[$i];
                        }

                    }

                    // if value is not array
                } else {
                    $fieldName = 'RMI_' . $field;
                    $detail['field'][] = $fieldName;
                    if (!in_array($fieldName, $this->fieldList, true)) {
                        $this->changeTableField($fieldName);
                        array_push($this->fieldList, $fieldName);
                    }

                    $detail['data'][] = $value;
                }

            }

            $fieldlist = implode(',', $detail['field']);
            $dataList = $detail['data'];
            $qs = str_repeat("?,", count($detail['data']) - 1);
            // insert query for new row
            $sql = "insert into $database.rmi($fieldlist) VALUES (${qs}?) ";
            $q = $this->connection->prepare($sql);
            $q->execute($dataList);
        } catch (Exception $e) {
            echo 'Caught exception--All: ', $e->getMessage(), "\n";
        }
    }

    private function insertConfig($item)
    {
        try {
            $database = $this->database;
            $detail = array();
            foreach ($item as $field => $value) {
                if (!is_array($value)) {
                    $fieldName = 'RMI_' . $field;
                    $detail['field'][] = $fieldName;

                    if (!in_array($fieldName, $this->fieldListConfig, true)) {
                        $this->changeTableFieldConfig($fieldName);
                        array_push($this->fieldListConfig, $fieldName);
                    }

                    $detail['data'][] = $value;
                }
            }

            $fieldlist = implode(',', $detail['field']);
            $dataList = $detail['data'];
            $qs = str_repeat("?,", count($detail['data']) - 1);
            $sql = "insert into $database.rmi_config_product($fieldlist) VALUES (${qs}?) ";

            $q = $this->connection->prepare($sql);
            $q->execute($dataList);

            $lastId = $this->connection->lastInsertId();
            return $lastId;
        } catch (Exception $e) {
            echo 'Caught exception--Config: ', $e->getMessage(), "\n";
        }
    }

    private function insertSimple($item, $lastId)
    {
        try {
            $database = $this->database;
            $detail = array();
            foreach ($item as $field => $value) {
                if (is_array($value)) {

                    for ($i = 0; $i < count($value); $i++) {
                        if (is_array($value[$i])) {
                            foreach ($value[$i] as $val2Key => $val2Val) {
                                $fieldName = 'RMI_' . $field . "_" . $i . "_" . $val2Key;
                                $detail['field'][] = $fieldName;
                                if (!in_array($fieldName, $this->fieldListSimple, true)) {
                                    $this->changeTableFieldSimple($fieldName);
                                    array_push($this->fieldListSimple, $fieldName);
                                }
                                $detail['data'][] = $val2Val;
                            }
                        } else {
                            $fieldName = 'RMI_' . $field . "_" . $i;
                            $detail['field'][] = $fieldName;
                            if (!in_array($fieldName, $this->fieldListSimple, true)) {
                                $this->changeTableFieldSimple($fieldName);
                                array_push($this->fieldListSimple, $fieldName);
                            }
                            $detail['data'][] = $value[$i];
                        }
                    }
                } else {
                    $fieldName = 'RMI_' . $field;
                    $detail['field'][] = $fieldName;
                    if (!in_array($fieldName, $this->fieldListSimple, true)) {
                        $this->changeTableFieldSimple($fieldName);
                        array_push($this->fieldListSimple, $fieldName);
                    }

                    $detail['data'][] = $value;
                }

            }

            $detail['field'][] = "config_id";
            $detail['data'][] = $lastId;


            $fieldlist = implode(',', $detail['field']);
            $dataList = $detail['data'];
            $qs = str_repeat("?,", count($detail['data']) - 1);
            $sql = "insert into $database.rmi_single_product($fieldlist) VALUES (${qs}?) ";
            $q = $this->connection->prepare($sql);
            $q->execute($dataList);
        } catch (Exception $e) {
            echo 'Caught exception--Simple: ', $e->getMessage(), "\n";
        }
    }

    /*
    * @params: $url String
    * @returns: false
    * @description: Validate the image url http return value
    */
    public function imageValidator($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        // don't download content
        curl_setopt($ch, CURLOPT_NOBODY, 1);
        curl_setopt($ch, CURLOPT_FAILONERROR, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        if (!empty(curl_exec($ch))) {
            echo "Image $url is good!";
            return true;
        } else {
            $myfile = fopen("error/imagelog.txt", "w");
            $txt = "$url : returned 404 \n";
            fwrite($myfile, $txt);
            fclose($myfile);
        }
    }

    private function backup()
    {
        return [
            'rmi' => "SELECT * FROM " . $this->database . ".rmi",
            'rmi_single_product' => 'SELECT * FROM ' . $this->database . '.rmi_single_product',
            'rmi_config_product' => 'SELECT * FROM ' . $this->database . '.rmi_config_product'
        ];
    }
}


