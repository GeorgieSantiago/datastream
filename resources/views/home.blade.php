@extends('layouts.main')

@section('home')
    <div>RMI Stream</div>

    <div class="container">
        @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
        @endif
        <div class="row panel-text">
            <div class="col-sm-4">
                <div class="panel panel-pink">
                    <div class="panel-heading"><h4>Deployment Status: </h4></div>
                    <div class="panel-body">
                      @if(isset($deployment))
                        <p class="bg-primary">Table Deployed</p>
                      @else
                      <p class="bg-danger">No Deployment</p>
                      @endif
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="panel panel-blue">
                    <div class="panel-heading"><h4>Vendor List: </h4></div>
                    <div class="panel-body">
                      @if(isset($vendorList))
                      <ul class="panel-list">
                        @foreach($vendorList as $vendor)
                          <li>{{$vendor->name}}</li>
                          @endforeach
                      </ul>
                    @else
                    <p class="bg-danger">No Vendor Data. Please contact RMInnovations to have your data synced!</p>
                      @endif
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="panel panel-yellow">
                    <div class="panel-heading"><h4>Products: </h4></div>
                    <div class="panel-body">
                      @if(isset($simpleProductList))
                      <p class="bg-primary">Simple Products <span class="pull-right">{{$simpleProductList->count}}</span></p>
                      @else
                      <p class="bg-primary">Configurable Products: <span class="pull-right">0</span></p>
                      @endif
                      @if(isset($configProductList))
                      <p class="bg-primary">Simple Products <span class="pull-right">{{$configProductList->count}}</span></p>
                      @else
                      <p class="bg-primary">Simple Products: <span class="pull-right">0</span></p>
                      @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('configuration')
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <form class="form-configuration " method="POST" action="{{route('configure.store')}}">
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
                            <input type="text" value="" name="bucket" class="form-control">
                        @else
                            <input type="text" value="" name="bucket" class="form-control">
                        @endif
                    </div>
                    <input type="hidden" value="honeypot">
                    <input type="submit" class="btn btn-primary" value="Update">
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
                            <input type="text" value="" name="bucket" class="form-control">
                        @else
                            <input type="text" value="" name="bucket" class="form-control">
                        @endif
                    </div>
                    <input type="hidden" value="honeypot">
                    <input type="submit" class="btn btn-primary" value="Update">
                </form>
            </div>
        </div>
        <div class="row">
          <table class="panel-table table table-bordered bg-default">
            <h4 style="color: white !important;">Preset Configurations</h4>
            <tr>
              <th>Name</th>
              <th>Created By</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
            @if(isset($presets))
              @foreach($presets as $preset)
                <tr>
                  <td class="table-item" >{{$preset['name']}}</td>
                  <td class="table-item" >{{$preset['created_by']}}</td>
                  <td class="table-item" >{{$preset['description']}}</td>
                  <td class="table-item" >{{$preset['created_at']}}</td>
                  <td class="table-item" >{{$preset['updated_at']}}</td>
                  <td class="table-item"><a href="#" class="btn  btn-info">Activate</a> <a href="#" class="btn-spacing btn btn-danger">Delete</a></td>
                </tr>
              @endforeach
            @else
            <tr>
              <td class="table-item" >No Data</td>
              <td class="table-item" >No Data</td>
              <td class="table-item" >No Data</td>
              <td class="table-item" >No Data</td>
              <td class="table-item" >No Data</td>
              <td class="table-item"><a href="#" class="btn  btn-info">Activate</a> <a href="#" class="btn-spacing btn btn-danger">Delete</a></td>
            </tr>
            @endif
          </table>
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
