@extends('layouts.main')

@section('home')
    <div>RMI Stream</div>

    <div class="container">
        @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
        @endif
        <div class="row">
            <div class="col-sm-4">
                <div class="panel panel-pink">
                    <div class="panel-heading">Panel Pink</div>
                    <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta
                        varius enim, ut lacinia nisl bibendum ut. Donec viverra sodales.
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="panel panel-blue">
                    <div class="panel-heading">Panel Blue</div>
                    <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta
                        varius enim, ut lacinia nisl bibendum ut. Donec viverra sodales.
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="panel panel-yellow">
                    <div class="panel-heading">Panel Green</div>
                    <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta
                        varius enim, ut lacinia nisl bibendum ut. Donec viverra sodales.
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('configuration')
    <div class="container">
    <!--<div class="corner">
            <div class="row form-group product-chooser">
                <h1>Choose a Database</h1>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div onclick="dataObject.setDatabase('mysql')"
                         style="background-image: url({{asset('img/mysql-image.png')}});"
                         class="offer offer-success offer-image">
                        <div class="shape">
                            <div class="shape-text">
                                MySQL
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div onclick="dataObject.setDatabase('mongo')"
                         style="background-image: url({{asset('img/mongodb.png')}});"
                         class="offer offer-success offer-image">
                        <div class="shape">
                            <div class="shape-text">
                                MongoDB
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div onclick="dataObject.setDatabase('oracle')"
                         style="background-image: url({{asset('img/oracle.png')}});"
                         class="offer offer-success offer-image">
                        <div class="shape">
                            <div class="shape-text">
                                Oracle
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row form-group product-chooser">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div onclick="dataObject.setDatabase('access')"
                         style="background-image: url({{asset('img/access.png')}});"
                         class="offer offer-success offer-image">
                        <div class="shape">
                            <div class="shape-text">
                                Access
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div onclick="dataObject.setDatabase('maria')"
                         style="background-image: url({{asset('img/mariadb.png')}});"
                         class="offer offer-success offer-image">
                        <div class="shape">
                            <div class="shape-text">
                                MariaDB
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div onclick="dataObject.setDatabase('postgres')"
                         style="background-image: url({{asset('img/postgres.png')}});"
                         class="offer offer-success offer-image">
                        <div class="shape">
                            <div class="shape-text">
                                Postgres
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="btn btn-primary" href="#next2">Next<i class="fa glyphicon-fast-forward"></i></a>
        </div>-->
        <div class="row">
            <div class="col-md-4">
                <form class="form-configuration " method="POST" action="{{route('init')}}">
                    <h4>Configure and Run</h4>
                    {{csrf_field()}}
                    <div class="form-group">
                        <label>Choos a Database</label>
                        <select class="form-control" name="database">
                            <option value="mysql">MySQL</option>
                            <option value="mariadb">MariaDB</option>
                            <option value="mongodb">MongoDB</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Database Host</label><br>
                        <input type="password" name="db_host" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Database Username</label><br>
                        <input type="password" value="" name="db_username" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Database Password</label><br>
                        <input type="password" value="" name="db_username" class="form-control">
                    </div>
                    <input type="hidden" value="honeypot">
                    <input type="submit" class="btn btn-primary" value="Run">
                </form>
            </div>
            <div class="col-md-4">
                <form class="form-configuration" method="POST" action="{{route('configure.store')}}">
                    <h4 style="color: black;">Bucket List</h4>
                    {{csrf_field()}}
                    <div class="form-group">
                        <label>Limit</label><br>
                        <input type="number" value="" name="limit" class="form-control">
                    </div>
                    <!--Dynamically fill this from the API-->
                    <div class="form-group">
                        <label>Authorization Token</label><br>
                        <input type="text" value="" name="auth_token" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Bucket ID</label><br>
                        @if(isset($bucketId))
                            <input type="text" value="" name="bucket_id" class="form-control">
                        @else
                            <input type="text" value="" name="bucket_id" class="form-control">
                        @endif
                    </div>
                    <input type="hidden" value="honeypot">
                    <input type="submit" class="btn btn-primary" value="Update">
                </form>
            </div>
        </div>


    </div>
@endsection
<!--end of configuration area-->

@section('status')
    <p>Status Page</p>
@endsection

@section('account')
    <p>Account Page</p>
@endsection

@section('scripts')
    <script src="{{asset('js/dataObject.js')}}"></script>
@endsection
