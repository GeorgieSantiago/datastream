<!DOCTYPE html>
<html class=''>
<head>
    <script src='//production-assets.codepen.io/assets/editor/live/console_runner-079c09a0e3b9ff743e39ee2d5637b9216b3545af0de366d4b9aad9dc87e26bfd.js'></script>
    <script src='//production-assets.codepen.io/assets/editor/live/events_runner-73716630c22bbc8cff4bd0f07b135f00a0bdc5d14629260c3ec49e5606f98fdd.js'></script>
    <script src='//production-assets.codepen.io/assets/editor/live/css_live_reload_init-2c0dc5167d60a5af3ee189d570b1835129687ea2a61bee3513dee3a50c115a77.js'></script>
    <meta charset='UTF-8'>
    <meta name="robots" content="noindex">
    <link rel="shortcut icon" type="image/x-icon"
          href="//production-assets.codepen.io/assets/favicon/favicon-8ea04875e70c4b0bb41da869e81236e54394d63638a1ef12fa558a4a835f1164.ico"/>
    <link rel="mask-icon" type=""
          href="//production-assets.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg"
          color="#111"/>
    <link rel="canonical" href="https://codepen.io/rupok/pen/PwrmXN?q=page&limit=all&type=type-pens"/>

    <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js'></script>
    <link rel='stylesheet prefetch'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css'>
    <style class="cp-pen-styles">* {
            transition: all 500ms ease-out;
            -webkit-transition: all 500ms ease-out;
        }
    </style>
    <link rel="stylesheet" href={{asset('css/panel.css')}}>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

</head>
<body>
<div class="ct" id="t1">
    <div class="ct" id="t2">
        <div class="ct" id="t3">
            <div class="ct" id="t4">
                <section>
                    <ul>
                        <a href="#t1">
                            <li class="icon fa fa-home" id="uno"></li>
                        </a>
                        <a href="#t2">
                            <li class="icon fa fa-keyboard-o" id="dos"></li>
                        </a>
                        <a href="#t3">
                            <li class="icon fa fa-coffee" id="tres"></li>
                        </a>
                        <a href="#t4">
                            <li class="icon fa fa-dribbble" id="cuatro"></li>
                        </a>
                    </ul>
                    <div class="page" id="p1">
                        @yield('home')
                    </div>
                    <div class="page" id="p2">
                        @yield('configuration')
                    </div>
                    <div class="page" id="config2">
                        @yield('configuration2')
                    </div>
                    <div class="page" id="p3">
                        @yield('status')
                    </div>
                    <div class="page" id="p4">
                        @yield('account')
                    </div>
                </section>

            </div>
        </div>
    </div>
</div>
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

@yield('scripts')
</body>
</html>
