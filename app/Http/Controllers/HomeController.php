<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth as Auth;
use App\Http\Controllers\PackageController as Package;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        // $buckets = $this->getBucketList(Auth::user()->email);
        return view('home', compact('user', 'buckets'));
    }

    private function getBucketList($email)
    {
        dd($email);
    }

    public function createTables(Request $request)
    {
        new Package($request, true);
    }

    /**
     * @param Request $request
     * @return Request
     *
     * Store configuration settings for executing the build
     */
    public function store(Request $request)
    {

    }

    /*
     * @params Request $data
     * @returns Results (bool)
     * Update configuration settings for executing the build
     * */
    public function update(Request $data)
    {

    }

    /*
     * @param User::id $id
     * @returns bool
     * Destroy configuration settings for executing the build
     * */
    public function destroy($id)
    {

    }
}
