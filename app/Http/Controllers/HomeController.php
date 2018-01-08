<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth as Auth;
use App\Http\Controllers\PackageController as ;


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
        $buckets = $this->getBucketList(Auth::user()->email);
        return view('home', compact('user' , 'buckets'));
    }

    private function getBucketList($email)
    {
        $url = 'apps.rminno.com/api/bucket?where=';
        $params = '{"email": "' . $email .'"}';
        $auth = '&isVendobucketrWebsite=true';
        $myBuckets = $url . $params . $auth;
        $bucketData = file_get_contents($myBuckets);
        dd($bucketData);
    }
}
