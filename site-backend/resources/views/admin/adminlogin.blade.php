@include('admin.include.header')

<div class="logo-block" style="text-align: center;">
                      <!-- <a class="logo" href=""> -->
					  <!-- <img src="images/orgnization/" style="width:158px;height:33px;"> -->
                        <img class="f-logo" src="https://www.aestiva.in/images/aestiva-icon.png" alt="logo">
                    </a>
                </div>

<div class="log-w3">
	<div class="w3layouts-main">
		<h2>Sign In Now</h2>
			<form method="post" action="{{url('/admin/user-login')}}">
			<input type="hidden" name="_token" value="{{ csrf_token() }}">
				<input type="email" class="ggg" autocomplete="off" name="email" placeholder="Email" required="">
				<input type="password" class="ggg" autocomplete="off" name="password" placeholder="Password" required="">
				<div class="clearfix"></div>
				<input type="submit" name="login" value="submit">
			</form>	
	</div>
</div>


@include('admin.include.footer')