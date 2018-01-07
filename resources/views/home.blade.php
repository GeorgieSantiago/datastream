@extends('layouts.main')

@section('home')
    <div>RMI Stream</div>

    <div>
        @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
        @endif
    </div>

@endsection

@section('configuration')
    <div class="container">
        <div class="row form-group product-chooser">
            <h1>Choose a Database</h1>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div style="background-image: url({{asset('img/mysql-image.png')}});"
                     class="offer offer-success offer-image">
                    <div class="shape">
                        <div class="shape-text">
                            MySQL
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div style="background-image: url({{asset('img/mongodb.png')}});"
                     class="offer offer-success offer-image">
                    <div class="shape">
                        <div class="shape-text">
                            MongoDB
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div style="background-image: url({{asset('img/oracle.png')}});"
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
                <div style="background-image: url({{asset('img/access.png')}});"
                     class="offer offer-success offer-image">
                    <div class="shape">
                        <div class="shape-text">
                            Access
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div style="background-image: url({{asset('img/mariadb.png')}});"
                     class="offer offer-success offer-image">
                    <div class="shape">
                        <div class="shape-text">
                            MariaDB
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div style="background-image: url({{asset('img/postgres.png')}});"
                     class="offer offer-success offer-image">
                    <div class="shape">
                        <div class="shape-text">
                            Postgres
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
<!--end of configuration area-->


@section('status')

@endsection

@section('account')

@endsection

@section('scripts')
    <script src="{{asset('js/dataObject.js')}}" ></script>
@endsection
