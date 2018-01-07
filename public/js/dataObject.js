var email = {{$user->email}}
var dataObject = {

    data: [],
    //make the email dynamic
    init: function(email)
    {
        $.get('apps.rminno.com/api/bucket?where={"email": ""}&isVendobucketrWebsite=true' , function(data){
            this.data['bucket_data'] = data;
        });
    },

    setDatabase : function(db){
        this.data['database_type'] = db;
    },

    setQueryLanguage : function(language){
        this.data['query_language'] = language;
    },

    setUserAccount : function(user){
        this.data['user_account'] = user;
    },

    send : function() {
        console.log(this.data);
    }
};

window.addEventListener('onload' , dataObject.init());
console.log(dataObject.data);

//Data set from api resource /bucket? for username
/*
* [
    {
        "title": "Test Bucket",
        "subtitle": "The testing of a bucket test test",
        "description": "I think its pretty obvious by now",
        "queryType": "dynamic",
        "isActive": true,
        "query": {
            "condition": [
                {
                    "fieldName": "productType",
                    "values": [
                        {
                            "fieldName": "productType",
                            "count": 22316,
                            "parentCount": 2,
                            "fieldType": "text",
                            "value": "configurable",
                            "text": "configurable",
                            "selected": true,
                            "exceptMode": false
                        }
                    ]
                },
                {
                    "fieldName": "collectionName",
                    "values": [
                        {
                            "fieldName": "collectionName",
                            "count": 1,
                            "parentCount": 5490,
                            "fieldType": "text",
                            "value": "3D Floral",
                            "text": "3D Floral",
                            "selected": true,
                            "exceptMode": false
                        },
                        {
                            "fieldName": "collectionName",
                            "count": 12,
                            "parentCount": 5490,
                            "fieldType": "text",
                            "value": "Aberdine",
                            "text": "Aberdine",
                            "selected": true,
                            "exceptMode": false
                        }
                    ]
                }
            ],
            "classList": [
                "583199f0fee39def05ef0ad9",
                "58585b933b9e419c07a4ce9e",
                "585829303b9e419c07a4ce1c",
                "583199f0fee39def05ef0ad9",
                "58585b933b9e419c07a4ce9e",
                "585829303b9e419c07a4ce1c"
            ],
            "classSchema": [
                {
                    "class": [
                        {
                            "title": "rug"
                        }
                    ],
                    "level": 1,
                    "children": [
                        "58319ab9fee39def05ef0adc",
                        "585829303b9e419c07a4ce1c",
                        "58585b933b9e419c07a4ce9e",
                        "58594a37884ebefe191f053b",
                        "58594a63884ebefe191f05bf",
                        "58594a72884ebefe191f05c0",
                        "585af020c3acc73240f894cd",
                        "5a0b6d0019a1d5b345640cff"
                    ],
                    "id": "583199f0fee39def05ef0ad9",
                    "selected": true
                },
                {
                    "class": [
                        {
                            "title": "rug"
                        },
                        {
                            "title": "program"
                        }
                    ],
                    "level": 2,
                    "children": [
                        "585829303b9e419c07a4ce1c",
                        "58594a37884ebefe191f053b",
                        "58594a63884ebefe191f05bf",
                        "58594a72884ebefe191f05c0",
                        "585af020c3acc73240f894cd",
                        "5a0ddfff7c4d2f466dfddf73"
                    ],
                    "id": "58585b933b9e419c07a4ce9e",
                    "selected": true
                },
                {
                    "class": [
                        {
                            "title": "rug"
                        },
                        {
                            "title": "program"
                        },
                        {
                            "title": "area rug"
                        }
                    ],
                    "level": 3,
                    "children": [],
                    "id": "585829303b9e419c07a4ce1c",
                    "selected": true
                }
            ],
            "classSelected": {
                "id": [
                    "585829303b9e419c07a4ce1c"
                ],
                "title": "rug,program,area rug",
                "children": [
                    "583199f0fee39def05ef0ad9",
                    "58585b933b9e419c07a4ce9e",
                    "585829303b9e419c07a4ce1c",
                    "583199f0fee39def05ef0ad9",
                    "58585b933b9e419c07a4ce9e",
                    "585829303b9e419c07a4ce1c"
                ],
                "classList": [
                    "583199f0fee39def05ef0ad9",
                    "58585b933b9e419c07a4ce9e",
                    "585829303b9e419c07a4ce1c"
                ],
                "productClassList": [
                    "585829303b9e419c07a4ce1c"
                ],
                "bucketClassList": [
                    "585829303b9e419c07a4ce1c"
                ],
                "unSelectLeaves": 0
            },
            "initialObject": {
                "583199f0fee39def05ef0ad9": [
                    {
                        "fieldName": "productType",
                        "title": "product type",
                        "condition": {},
                        "depends": [],
                        "order": 0,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "vendorUniqueId",
                        "title": "vendor name",
                        "condition": {},
                        "depends": [],
                        "order": 0,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "collectionName",
                        "title": "collection name",
                        "condition": {},
                        "depends": [],
                        "order": 1,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "designName",
                        "title": "design name",
                        "condition": {},
                        "depends": [],
                        "order": 2,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "brandName",
                        "title": "brand name",
                        "condition": {},
                        "depends": [],
                        "order": 3,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "colorGroupName",
                        "title": "primary color",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "primaryStyleName",
                        "title": "style",
                        "condition": {},
                        "depends": [],
                        "order": 5,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "secondaryStyleName",
                        "title": "sub style",
                        "condition": {},
                        "depends": [],
                        "order": 6,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "shapeName",
                        "title": "shape name",
                        "condition": {},
                        "depends": [],
                        "order": 7,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "standardSize",
                        "title": "standard size",
                        "condition": {},
                        "depends": [],
                        "order": 8,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "actualSize",
                        "title": "actual size",
                        "condition": {},
                        "depends": [],
                        "order": 8,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "primaryMaterialName",
                        "title": "primary material name",
                        "condition": {},
                        "depends": [],
                        "order": 9,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "fieldDesignName",
                        "title": "field design name",
                        "condition": {},
                        "depends": [],
                        "order": 10,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "originCountryName",
                        "title": "origin country name",
                        "condition": {},
                        "depends": [],
                        "order": 11,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "constructionName",
                        "title": "construction name",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "gs1",
                        "title": "upc code",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "sku",
                        "title": "sku code",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "_id",
                        "title": "product id",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isNewArrival",
                        "title": "New Arrival",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isActive",
                        "title": "Active",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isEcommerce",
                        "title": "Ecommerce",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isBestSeller",
                        "title": "Best Seller",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isPending",
                        "title": "Pendding",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isPromotional",
                        "title": "Promotional",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isCloseOut",
                        "title": "Close Out",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isDiscounted",
                        "title": "Discounted",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "baseCost",
                        "title": "base cost",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "mapPrice",
                        "title": "map price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "salePrice",
                        "title": "sale price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "marketPrice",
                        "title": "market price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    }
                ]
            },
            "total": 13,
            "image": ""
        },
        "bucketType": "All",
        "email": "georgies@rminno.com",
        "children": [],
        "state": "created",
        "createdAt": "2017-11-22T17:28:06.844Z",
        "updatedAt": "2017-11-22T17:28:06.844Z",
        "id": "5a15b3a60489de5f20be66e9"
    },
    {
        "title": "Momini Main Bucket",
        "subtitle": "",
        "description": "Rugs from the Momini collection",
        "queryType": "dynamic",
        "isActive": true,
        "query": {
            "condition": [],
            "classList": [
                "583199f0fee39def05ef0ad9",
                "583199f0fee39def05ef0ad9",
                "58319ab9fee39def05ef0adc",
                "585829303b9e419c07a4ce1c",
                "58585b933b9e419c07a4ce9e",
                "58594a37884ebefe191f053b",
                "58594a63884ebefe191f05bf",
                "58594a72884ebefe191f05c0",
                "585af020c3acc73240f894cd",
                "5a0b6d0019a1d5b345640cff"
            ],
            "classSchema": [
                {
                    "class": [
                        {
                            "title": "rug"
                        }
                    ],
                    "level": 1,
                    "children": [
                        "58319ab9fee39def05ef0adc",
                        "585829303b9e419c07a4ce1c",
                        "58585b933b9e419c07a4ce9e",
                        "58594a37884ebefe191f053b",
                        "58594a63884ebefe191f05bf",
                        "58594a72884ebefe191f05c0",
                        "585af020c3acc73240f894cd",
                        "5a0b6d0019a1d5b345640cff"
                    ],
                    "id": "583199f0fee39def05ef0ad9",
                    "selected": true
                }
            ],
            "classSelected": {
                "id": [
                    "583199f0fee39def05ef0ad9"
                ],
                "title": "rug",
                "children": [
                    "583199f0fee39def05ef0ad9",
                    "583199f0fee39def05ef0ad9",
                    "58319ab9fee39def05ef0adc",
                    "585829303b9e419c07a4ce1c",
                    "58585b933b9e419c07a4ce9e",
                    "58594a37884ebefe191f053b",
                    "58594a63884ebefe191f05bf",
                    "58594a72884ebefe191f05c0",
                    "585af020c3acc73240f894cd",
                    "5a0b6d0019a1d5b345640cff"
                ],
                "classList": [
                    "583199f0fee39def05ef0ad9"
                ],
                "productClassList": [
                    "583199f0fee39def05ef0ad9",
                    "58319ab9fee39def05ef0adc",
                    "585829303b9e419c07a4ce1c",
                    "58585b933b9e419c07a4ce9e",
                    "58594a37884ebefe191f053b",
                    "58594a63884ebefe191f05bf",
                    "58594a72884ebefe191f05c0",
                    "585af020c3acc73240f894cd",
                    "5a0b6d0019a1d5b345640cff"
                ],
                "bucketClassList": [
                    "583199f0fee39def05ef0ad9",
                    "58319ab9fee39def05ef0adc",
                    "585829303b9e419c07a4ce1c",
                    "58585b933b9e419c07a4ce9e",
                    "58594a37884ebefe191f053b",
                    "58594a63884ebefe191f05bf",
                    "58594a72884ebefe191f05c0",
                    "585af020c3acc73240f894cd",
                    "5a0b6d0019a1d5b345640cff"
                ],
                "unSelectLeaves": 8
            },
            "initialObject": {
                "583199f0fee39def05ef0ad9": [
                    {
                        "fieldName": "productType",
                        "title": "product type",
                        "condition": {},
                        "depends": [],
                        "order": 0,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "vendorUniqueId",
                        "title": "vendor name",
                        "condition": {},
                        "depends": [],
                        "order": 0,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "collectionName",
                        "title": "collection name",
                        "condition": {},
                        "depends": [],
                        "order": 1,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "designName",
                        "title": "design name",
                        "condition": {},
                        "depends": [],
                        "order": 2,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "brandName",
                        "title": "brand name",
                        "condition": {},
                        "depends": [],
                        "order": 3,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "colorGroupName",
                        "title": "primary color",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "primaryStyleName",
                        "title": "style",
                        "condition": {},
                        "depends": [],
                        "order": 5,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "secondaryStyleName",
                        "title": "sub style",
                        "condition": {},
                        "depends": [],
                        "order": 6,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "shapeName",
                        "title": "shape name",
                        "condition": {},
                        "depends": [],
                        "order": 7,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "standardSize",
                        "title": "standard size",
                        "condition": {},
                        "depends": [],
                        "order": 8,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "actualSize",
                        "title": "actual size",
                        "condition": {},
                        "depends": [],
                        "order": 8,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "primaryMaterialName",
                        "title": "primary material name",
                        "condition": {},
                        "depends": [],
                        "order": 9,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "fieldDesignName",
                        "title": "field design name",
                        "condition": {},
                        "depends": [],
                        "order": 10,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "originCountryName",
                        "title": "origin country name",
                        "condition": {},
                        "depends": [],
                        "order": 11,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "constructionName",
                        "title": "construction name",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "gs1",
                        "title": "upc code",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "sku",
                        "title": "sku code",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "_id",
                        "title": "product id",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isNewArrival",
                        "title": "New Arrival",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isActive",
                        "title": "Active",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isEcommerce",
                        "title": "Ecommerce",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isBestSeller",
                        "title": "Best Seller",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isPending",
                        "title": "Pendding",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isPromotional",
                        "title": "Promotional",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isCloseOut",
                        "title": "Close Out",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isDiscounted",
                        "title": "Discounted",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "baseCost",
                        "title": "base cost",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "mapPrice",
                        "title": "map price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "salePrice",
                        "title": "sale price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "marketPrice",
                        "title": "market price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    }
                ]
            },
            "total": 304973,
            "image": ""
        },
        "bucketType": "All",
        "email": "georgies@rminno.com",
        "children": [],
        "state": "created",
        "createdAt": "2017-11-22T17:31:56.707Z",
        "updatedAt": "2017-11-22T17:31:56.707Z",
        "id": "5a15b48c0489de5f20be66ea"
    },
    {
        "title": "Holiday Theme",
        "subtitle": "This bucket is a holiday collection at 80% off",
        "description": "",
        "queryType": "dynamic",
        "isActive": true,
        "query": {
            "condition": [
                {
                    "fieldName": "primaryStyleName",
                    "values": [
                        {
                            "fieldName": "primaryStyleName",
                            "count": 3550,
                            "parentCount": 64,
                            "fieldType": "text",
                            "value": "Theme",
                            "text": "Theme",
                            "selected": true,
                            "exceptMode": false
                        }
                    ]
                },
                {
                    "fieldName": "secondaryStyleName",
                    "values": [
                        {
                            "fieldName": "secondaryStyleName",
                            "count": 25,
                            "parentCount": 222,
                            "fieldType": "text",
                            "value": "Holiday",
                            "text": "Holiday",
                            "selected": true,
                            "exceptMode": false
                        }
                    ]
                }
            ],
            "classList": [
                "583199f0fee39def05ef0ad9",
                "583199f0fee39def05ef0ad9",
                "58319ab9fee39def05ef0adc",
                "585829303b9e419c07a4ce1c",
                "58585b933b9e419c07a4ce9e",
                "58594a37884ebefe191f053b",
                "58594a63884ebefe191f05bf",
                "58594a72884ebefe191f05c0",
                "585af020c3acc73240f894cd",
                "5a0b6d0019a1d5b345640cff"
            ],
            "classSchema": [
                {
                    "class": [
                        {
                            "title": "rug"
                        }
                    ],
                    "level": 1,
                    "children": [
                        "58319ab9fee39def05ef0adc",
                        "585829303b9e419c07a4ce1c",
                        "58585b933b9e419c07a4ce9e",
                        "58594a37884ebefe191f053b",
                        "58594a63884ebefe191f05bf",
                        "58594a72884ebefe191f05c0",
                        "585af020c3acc73240f894cd",
                        "5a0b6d0019a1d5b345640cff"
                    ],
                    "id": "583199f0fee39def05ef0ad9",
                    "selected": true
                }
            ],
            "classSelected": {
                "id": [
                    "583199f0fee39def05ef0ad9"
                ],
                "title": "rug",
                "children": [
                    "583199f0fee39def05ef0ad9",
                    "583199f0fee39def05ef0ad9",
                    "58319ab9fee39def05ef0adc",
                    "585829303b9e419c07a4ce1c",
                    "58585b933b9e419c07a4ce9e",
                    "58594a37884ebefe191f053b",
                    "58594a63884ebefe191f05bf",
                    "58594a72884ebefe191f05c0",
                    "585af020c3acc73240f894cd",
                    "5a0b6d0019a1d5b345640cff"
                ],
                "classList": [
                    "583199f0fee39def05ef0ad9"
                ],
                "productClassList": [
                    "583199f0fee39def05ef0ad9",
                    "58319ab9fee39def05ef0adc",
                    "585829303b9e419c07a4ce1c",
                    "58585b933b9e419c07a4ce9e",
                    "58594a37884ebefe191f053b",
                    "58594a63884ebefe191f05bf",
                    "58594a72884ebefe191f05c0",
                    "585af020c3acc73240f894cd",
                    "5a0b6d0019a1d5b345640cff"
                ],
                "bucketClassList": [
                    "583199f0fee39def05ef0ad9",
                    "58319ab9fee39def05ef0adc",
                    "585829303b9e419c07a4ce1c",
                    "58585b933b9e419c07a4ce9e",
                    "58594a37884ebefe191f053b",
                    "58594a63884ebefe191f05bf",
                    "58594a72884ebefe191f05c0",
                    "585af020c3acc73240f894cd",
                    "5a0b6d0019a1d5b345640cff"
                ],
                "unSelectLeaves": 8
            },
            "initialObject": {
                "583199f0fee39def05ef0ad9": [
                    {
                        "fieldName": "productType",
                        "title": "product type",
                        "condition": {},
                        "depends": [],
                        "order": 0,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "vendorUniqueId",
                        "title": "vendor name",
                        "condition": {},
                        "depends": [],
                        "order": 0,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "collectionName",
                        "title": "collection name",
                        "condition": {},
                        "depends": [],
                        "order": 1,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "designName",
                        "title": "design name",
                        "condition": {},
                        "depends": [],
                        "order": 2,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "brandName",
                        "title": "brand name",
                        "condition": {},
                        "depends": [],
                        "order": 3,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "colorGroupName",
                        "title": "primary color",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "primaryStyleName",
                        "title": "style",
                        "condition": {},
                        "depends": [],
                        "order": 5,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "secondaryStyleName",
                        "title": "sub style",
                        "condition": {},
                        "depends": [],
                        "order": 6,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "shapeName",
                        "title": "shape name",
                        "condition": {},
                        "depends": [],
                        "order": 7,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "standardSize",
                        "title": "standard size",
                        "condition": {},
                        "depends": [],
                        "order": 8,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "actualSize",
                        "title": "actual size",
                        "condition": {},
                        "depends": [],
                        "order": 8,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "primaryMaterialName",
                        "title": "primary material name",
                        "condition": {},
                        "depends": [],
                        "order": 9,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "fieldDesignName",
                        "title": "field design name",
                        "condition": {},
                        "depends": [],
                        "order": 10,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "originCountryName",
                        "title": "origin country name",
                        "condition": {},
                        "depends": [],
                        "order": 11,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "constructionName",
                        "title": "construction name",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "gs1",
                        "title": "upc code",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "sku",
                        "title": "sku code",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "_id",
                        "title": "product id",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isNewArrival",
                        "title": "New Arrival",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isActive",
                        "title": "Active",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isEcommerce",
                        "title": "Ecommerce",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isBestSeller",
                        "title": "Best Seller",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isPending",
                        "title": "Pendding",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isPromotional",
                        "title": "Promotional",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isCloseOut",
                        "title": "Close Out",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isDiscounted",
                        "title": "Discounted",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "baseCost",
                        "title": "base cost",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "mapPrice",
                        "title": "map price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "salePrice",
                        "title": "sale price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "marketPrice",
                        "title": "market price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    }
                ]
            },
            "total": 25,
            "image": ""
        },
        "bucketType": "Date",
        "email": "georgies@rminno.com",
        "children": [],
        "state": "created",
        "createdAt": "2017-11-24T13:17:38.378Z",
        "updatedAt": "2017-11-24T13:17:38.378Z",
        "id": "5a181bf2fcd5bf4f4026bdd4"
    },
    {
        "title": "Momini Rugs",
        "subtitle": "Momini - Entire collection",
        "description": "",
        "queryType": "dynamic",
        "isActive": true,
        "query": {
            "condition": [
                {
                    "fieldName": "productType",
                    "values": [
                        {
                            "fieldName": "productType",
                            "count": 21505,
                            "parentCount": 2,
                            "fieldType": "text",
                            "value": "configurable",
                            "text": "configurable",
                            "selected": true,
                            "exceptMode": false
                        }
                    ]
                },
                {
                    "fieldName": "vendorUniqueId",
                    "values": [
                        {
                            "fieldName": "vendorUniqueId",
                            "count": 896,
                            "parentCount": 63,
                            "fieldType": "text",
                            "value": "Momeni",
                            "text": "Momeni",
                            "selected": true,
                            "exceptMode": false
                        }
                    ]
                },
                {
                    "fieldName": "isActive",
                    "values": [
                        {
                            "fieldName": "isActive",
                            "count": 0,
                            "parentCount": 2,
                            "fieldType": "boolean",
                            "value": "true",
                            "text": "true",
                            "selected": true
                        }
                    ]
                },
                {
                    "fieldName": "isEcommerce",
                    "values": [
                        {
                            "fieldName": "isEcommerce",
                            "count": 0,
                            "parentCount": 2,
                            "fieldType": "boolean",
                            "value": "true",
                            "text": "true",
                            "selected": true
                        }
                    ]
                }
            ],
            "classList": [
                "583199f0fee39def05ef0ad9",
                "583199f0fee39def05ef0ad9",
                "58319ab9fee39def05ef0adc",
                "585829303b9e419c07a4ce1c",
                "58585b933b9e419c07a4ce9e",
                "58594a37884ebefe191f053b",
                "58594a63884ebefe191f05bf",
                "58594a72884ebefe191f05c0",
                "585af020c3acc73240f894cd",
                "5a0b6d0019a1d5b345640cff"
            ],
            "classSchema": [
                {
                    "class": [
                        {
                            "title": "rug"
                        }
                    ],
                    "level": 1,
                    "children": [
                        "58319ab9fee39def05ef0adc",
                        "585829303b9e419c07a4ce1c",
                        "58585b933b9e419c07a4ce9e",
                        "58594a37884ebefe191f053b",
                        "58594a63884ebefe191f05bf",
                        "58594a72884ebefe191f05c0",
                        "585af020c3acc73240f894cd",
                        "5a0b6d0019a1d5b345640cff"
                    ],
                    "id": "583199f0fee39def05ef0ad9",
                    "selected": true
                }
            ],
            "classSelected": {
                "id": [
                    "583199f0fee39def05ef0ad9"
                ],
                "title": "rug",
                "children": [
                    "583199f0fee39def05ef0ad9",
                    "583199f0fee39def05ef0ad9",
                    "58319ab9fee39def05ef0adc",
                    "585829303b9e419c07a4ce1c",
                    "58585b933b9e419c07a4ce9e",
                    "58594a37884ebefe191f053b",
                    "58594a63884ebefe191f05bf",
                    "58594a72884ebefe191f05c0",
                    "585af020c3acc73240f894cd",
                    "5a0b6d0019a1d5b345640cff"
                ],
                "classList": [
                    "583199f0fee39def05ef0ad9"
                ],
                "productClassList": [
                    "583199f0fee39def05ef0ad9",
                    "58319ab9fee39def05ef0adc",
                    "585829303b9e419c07a4ce1c",
                    "58585b933b9e419c07a4ce9e",
                    "58594a37884ebefe191f053b",
                    "58594a63884ebefe191f05bf",
                    "58594a72884ebefe191f05c0",
                    "585af020c3acc73240f894cd",
                    "5a0b6d0019a1d5b345640cff"
                ],
                "bucketClassList": [
                    "583199f0fee39def05ef0ad9",
                    "58319ab9fee39def05ef0adc",
                    "585829303b9e419c07a4ce1c",
                    "58585b933b9e419c07a4ce9e",
                    "58594a37884ebefe191f053b",
                    "58594a63884ebefe191f05bf",
                    "58594a72884ebefe191f05c0",
                    "585af020c3acc73240f894cd",
                    "5a0b6d0019a1d5b345640cff"
                ],
                "unSelectLeaves": 8
            },
            "initialObject": {
                "583199f0fee39def05ef0ad9": [
                    {
                        "fieldName": "productType",
                        "title": "product type",
                        "condition": {},
                        "depends": [],
                        "order": 0,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "vendorUniqueId",
                        "title": "vendor name",
                        "condition": {},
                        "depends": [],
                        "order": 0,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "collectionName",
                        "title": "collection name",
                        "condition": {},
                        "depends": [],
                        "order": 1,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "designName",
                        "title": "design name",
                        "condition": {},
                        "depends": [],
                        "order": 2,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "brandName",
                        "title": "brand name",
                        "condition": {},
                        "depends": [],
                        "order": 3,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "colorGroupName",
                        "title": "primary color",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "primaryStyleName",
                        "title": "style",
                        "condition": {},
                        "depends": [],
                        "order": 5,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "secondaryStyleName",
                        "title": "sub style",
                        "condition": {},
                        "depends": [],
                        "order": 6,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "shapeName",
                        "title": "shape name",
                        "condition": {},
                        "depends": [],
                        "order": 7,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "standardSize",
                        "title": "standard size",
                        "condition": {},
                        "depends": [],
                        "order": 8,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "actualSize",
                        "title": "actual size",
                        "condition": {},
                        "depends": [],
                        "order": 8,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "primaryMaterialName",
                        "title": "primary material name",
                        "condition": {},
                        "depends": [],
                        "order": 9,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "fieldDesignName",
                        "title": "field design name",
                        "condition": {},
                        "depends": [],
                        "order": 10,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "originCountryName",
                        "title": "origin country name",
                        "condition": {},
                        "depends": [],
                        "order": 11,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "constructionName",
                        "title": "construction name",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "gs1",
                        "title": "upc code",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "sku",
                        "title": "sku code",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "_id",
                        "title": "product id",
                        "condition": {},
                        "depends": [],
                        "order": 12,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "text",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isNewArrival",
                        "title": "New Arrival",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isActive",
                        "title": "Active",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isEcommerce",
                        "title": "Ecommerce",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isBestSeller",
                        "title": "Best Seller",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isPending",
                        "title": "Pendding",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isPromotional",
                        "title": "Promotional",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isCloseOut",
                        "title": "Close Out",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "isDiscounted",
                        "title": "Discounted",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "boolean",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "baseCost",
                        "title": "base cost",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "mapPrice",
                        "title": "map price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "salePrice",
                        "title": "sale price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    },
                    {
                        "fieldName": "marketPrice",
                        "title": "market price",
                        "condition": {},
                        "depends": [],
                        "order": 4,
                        "isFirstLoad": true,
                        "isAllClasses": true,
                        "type": "number",
                        "info": {
                            "id": "57f8ed5ad47f5fd19a592bde",
                            "description": "",
                            "note": "The name of the collection of the items that is typically provided by the vendor (vendorCollectionName). However, editing in thie field might be necessary if the vendor does not allow the original collection name is published publicly. Within one collection, items are supposed to have the same style and price per square foot. Under each collection, there will be several designs.",
                            "businessRules": "%3Cp%3E%3Cspan%3EThese%fields%20will%20be%20used%20according%20to%20the%20given%20priority%3A%3C%2Fspan%3E%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cspan%3E%3Cspan%3EcollectionName%3C%2Fspan%3E%3Cbr%class%3D%_mce_tagged_br%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Eattr_name_collection%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%3E%3Cspan%3Ecollection_name%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Fol%3E",
                            "name": "collectionName",
                            "group": "collection",
                            "type": "text",
                            "class": [],
                            "level": 1,
                            "fieldName": "collectionName",
                            "count": 5632,
                            "filterCount": 3406,
                            "selected": true
                        }
                    }
                ]
            },
            "total": 896,
            "image": ""
        },
        "bucketType": "Menu",
        "email": "georgies@rminno.com",
        "children": [],
        "state": "created",
        "createdAt": "2017-11-29T21:04:52.295Z",
        "updatedAt": "2017-11-29T21:04:52.295Z",
        "id": "5a1f20f40d26f24970043b8a"
    }
]
* */