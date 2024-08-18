<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>401 Unauthorized</title>
<style>
body{font-family: Arial, Helvetica, sans-serif;font-size:.95rem;color:#333}

.unauthorized{width:600px;margin:20px auto;padding: 40px;text-align: center;}
.unauthorized .pic{margin:80px 0;}
.unauthorized h3{color:#86449b;font-size:24px;}
</style>
</head>
<body>

    
<div class="unauthorized">
<img src="http://digilantern.co/subscription/images/logo.png" alt="" width="180">

<div class="pic"><img src="http://digilantern.co/subscription/images/unauthorized.png" alt="unauthorized"></div>
<h3>No authorization found</h3>
<p>This page is not publically available.<br>
    To access it please login first.<br><br></p>

<a class="waves-effect waves-light btn mr-1" href="{{url('/admin/login')}}">GO TO LOGIN</a>

</div>


</body>
</html>