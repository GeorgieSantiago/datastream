<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConfigurationController extends Controller
{

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
     * */
    public function store(Request $request)
    {
        //Store configuration settings here
    }

    public function edit()
    {

    }

    public function destroy()
    {

    }
}
