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

        html, body, section, .page {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            transition: all 1s cubic-bezier(.5, -0.005, 0.2, 1) !important;
            -webkit-transition: all 1s cubic-bezier(.5, -0.005, 0.2, 1) !important;
            color: #fff;
            background: #374046;
            overflow: hidden;
        }

        section {
            width: 400%;
        }

        .page {
            position: absolute;
            padding: 1% 0 0 2.7%;        }

        #p1 {
            left: 0;
        }

        #p2 {
            left: 100%;
            background: #FF5722;
        }

        #p3 {
            left: 200%;
            background: #593C1F;
        }

        #p4 {
            left: 300%;
            background: deeppink;
        }

        ul {
            position: fixed;
            z-index: 1;
        }

        #t1:target .page#p1 {
            transform: translateX(0);
        }

        #t2:target .page#p2 {
            transform: translateX(-90%);
        }

        #t3:target .page#p3 {
            transform: translateX(-190%);
        }

        #t4:target .page#p4 {
            transform: translateX(-290%);
        }

        #t2:target .page#p1,
        #t3:target .page#p1,
        #t4:target .page#p1 {
            background: black;
        }

        #t2:target .page#p1 .icon,
        #t3:target .page#p1 .icon,
        #t4:target .page#p1 .icon {
            -webkit-filter: blur(3px);
            filter: blur(3px);
        }

        .icon {
            color: #fff;
            font-size: 32px;
            display: block;
        }

        ul .icon:hover {
            opacity: 0.6;
        }

        #p1 .icon .title {
            margin-bottom: 20px;
        }

        #t2:target ul .icon,
        #t3:target ul .icon,
        #t4:target ul .icon {
            transform: scale(.6);
            transition-delay: .25s;
        }

        #t2:target #dos {
            transform: scale(1.2) !important;
        }

        #t3:target #tres {
            transform: scale(1.2) !important;
        }

        #t4:target #cuatro {
            transform: scale(1.2) !important;
        }

        ul {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            /*right: 0;*/
            margin: auto;
            height: 280px;
            width: 10%;
            padding: 0;
            text-align: center;
        }

        ul li {
            margin: 30px 0;
        }

        a {
            text-decoration: none;
            font-family: open sans, sans-serif;
        }

        .title, .hint {
            font-family: open sans, sans-serif;
            display: block;
        }

        .title {
            font-size: 30px;
        }

        .hint {
            font-size: 13px;
        }

        .hint a {
            color: #EFFF06;
            transition: all 250ms easet-out;
        }

        .hint a:hover {
            color: #FFF;
        }

        .page .icon {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 10%;
            left: 0;
            width: 270px;
            height: 170px;
            margin: auto;
            text-align: center;
            font-size: 80px;
            transform: translateX(360%);
            line-height: 1.3;
        }

        .page#p1 .icon {
            height: 220px;
        }

        .page#p1 .icon {
            transform: translateX(0) !important;
        }

        #t2:target .page#p2 .icon {
            transform: translateX(0) !important;
            transition-delay: 1s;
        }

        #t3:target .page#p3 .icon {
            transform: translateX(0) !important;
            transition-delay: 1s;
        }

        #t4:target .page#p4 .icon {
            transform: translateX(0) !important;
            transition-delay: 1s;
        }

        .credit {
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
            font-size: 10px;
        }

        .credit a {
            color: #fff
        }

        .inner-panel img{
            max-width: 200px;
        }
        .shape{
            border-style: solid; border-width: 0 70px 40px 0; float:right; height: 0px; width: 0px;
            -ms-transform:rotate(360deg); /* IE 9 */
            -o-transform: rotate(360deg);  /* Opera 10.5 */
            -webkit-transform:rotate(360deg); /* Safari and Chrome */
            transform:rotate(360deg);
        }
        .offer{
            background:#fff; border:1px solid #ddd; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); margin: 15px 0; overflow:hidden;
        }
        .offer:hover {
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
            -o-transform: scale(1.1);
            transform:rotate scale(1.1);
            -webkit-transition: all 0.4s ease-in-out;
            -moz-transition: all 0.4s ease-in-out;
            -o-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
        }
        .shape {
            border-color: rgba(255,255,255,0) #d9534f rgba(255,255,255,0) rgba(255,255,255,0);
        }
        .offer-radius{
            border-radius:7px;
        }
        .offer-danger {	border-color: #d9534f; }
        .offer-danger .shape{
            border-color: transparent #d9534f transparent transparent;
        }
        .offer-success {	border-color: #5cb85c; }
        .offer-success .shape{
            border-color: transparent #5cb85c transparent transparent;
        }
        .offer-default {	border-color: #999999; }
        .offer-default .shape{
            border-color: transparent #999999 transparent transparent;
        }
        .offer-primary {	border-color: #428bca; }
        .offer-primary .shape{
            border-color: transparent #428bca transparent transparent;
        }
        .offer-info {	border-color: #5bc0de; }
        .offer-info .shape{
            border-color: transparent #5bc0de transparent transparent;
        }
        .offer-warning {	border-color: #f0ad4e; }
        .offer-warning .shape{
            border-color: transparent #f0ad4e transparent transparent;
        }

        .shape-text{
            color:#fff; font-size:12px; font-weight:bold; position:relative; right:-40px; top:2px; white-space: nowrap;
            -ms-transform:rotate(30deg); /* IE 9 */
            -o-transform: rotate(360deg);  /* Opera 10.5 */
            -webkit-transform:rotate(30deg); /* Safari and Chrome */
            transform:rotate(30deg);
        }
        .offer-content{
            padding:0 20px 10px;
        }
        @media (min-width: 487px) {
            .container {
                max-width: 750px;
            }
            .col-sm-6 {
                width: 50%;
            }
        }
        @media (min-width: 900px) {
            .container {
                max-width: 970px;
            }
            .col-md-4 {
                width: 33.33333333333333%;
            }
        }

        @media (min-width: 1200px) {
            .container {
                max-width: 1170px;
            }

            .col-lg-3 {
                width: 25%;
            }
        }
        .inner-panel{
            background: #3f7f7f;
            width: 33% !important;
            min-height: 196px !important;
            -webkit-background-size: cover;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .inner-panel:hover{
            opacity: 0.6;
            content: 'Select';
            max-height: 150px;
        }

        .offer-image{
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 185px;
        }

    </style>
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