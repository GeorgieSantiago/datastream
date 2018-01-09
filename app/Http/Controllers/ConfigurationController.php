<?php

namespace App\Http\Controllers;
use App\Deployment;
use Illuminate\Http\Request;

class ConfigurationController extends Controller
{
    public $configure = [];

    public function index()
    {

        return view('configure.index');
    }

    public function create()
    {

    }
    /*
     *  @param Request $request
     *  @return false
     *  @description store enviorment settings
     * */
    public function store(Request $request)
    {
        $all = $request->request;
        foreach ($all as $key => $value)
        {
          if($key == '_token')
          {
            continue;
          }
          $test = config(['token' => '12345']);
          dd($test);
        }
    }

    public function buildStatus()
    {
      $deploy = new Deployment;
    }

    public function edit()
    {

    }

    public function destroy()
    {

    }
}
