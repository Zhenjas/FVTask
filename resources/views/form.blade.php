<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">
    <title>Form</title>
    <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/css/pikaday.css" />
</head>
<body>

@if(session()->has('message'))
    <div class="alert-success">
        {{ session()->get('message') }}
    </div>
@endif
    
<div class="box fixToCenter">
    <div class="state-wrapper">
        <div class="state">
            <p>Step 1: Personal details</p>
        </div>
    </div>
    <form id="clientForm" method="post" action="/store">
        {{ csrf_field() }}
        <div id="inner1" class="inner">
            <div class="field">
                <label for="firstname">First name</label>
                <input type="text" class="group1" name="firstname">
                <span id="firstname" class="validity"></span>
            </div>
            <div class="field">
                <label for="lastname">Surname</label>
                <input type="text" class="group1" name="lastname">
                <span id="lastname" class="validity"></span>
            </div>
            <div class="field">
                <label for="gender">Gender</label>
                <select class="group1" name="gender">
                  <option disabled selected value>-----</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
                <span id="gender" class="validity"></span>
            </div>
            <div class="field">
                <label for="datebritch">Date of britch</label>
                <input type="text" id="datebritch-picker" class="group1" name="datebritch" autocomplete="off"/>
                <span id="datebritch" class="validity"></span>
            </div>
            <div class="b-wrapper clear">
                <button type="button" id="btn1">Next ></button>
            </div>
        </div>  
        <div class="state-wrapper">
            <div class="state">
                <p>Step 2: Contact information</p>
            </div>
        </div>
        <div id="inner2" class="inner inner-close">
            <div class="field">
                <label for="email">Email address:</label>
                <input type="text" class="group2" name="email">
                <span id="email" class="validity"></span>
            </div>
            <div class="field">
                <label for="telephone">Mobile phone:</label>
                <input type="text" class="group2" name="telephone">
                <span id="telephone" class="validity"></span>
            </div>
            <div class="b-wrapper clear">
                <button type="button" id="btn2">Next ></button>
            </div>
        </div>  
        <div class="state-wrapper">
            <div class="state">
                <p>Step 3: Comments</p>
            </div>
        </div>
        <div id="inner3" class="inner inner-close">
            <div class="field">
                <label for="comments">Comments:(Optional)</label>
                <input type="text" class="comments-size" id="comments" name="comments">
                <span class="validity"></span>
            </div>
            <div class="b-wrapper clear">
                <button>Send form</button>
            </div>
        </div>
    </form>  
</div>

@if ($errors->any())
    <div class="error-alert">
            @foreach ($errors->all() as $error)
                <p>{{ $error }}</p>
            @endforeach
            <button>Close</button>
    </div>
@endif

<script type="text/javascript" src="/js/moment.min.js"></script>
<script type="text/javascript" src="/js/pikaday.js"></script>
<script type="text/javascript" src="/js/app.js"></script>

</body>
</html>
