var fbloginreg = (function(){
	var $ = $j;
	return {
		revokeAllPerm:function(){
			var options = {
				url: ""
			}
			$.ajax(options)
		},
		asyncInit:function(){
				FB.Event.subscribe('auth.authResponseChange', function(response) {
				// Here we specify what we do with the response anytime this event occurs. 
				if (response.status === 'connected') {
				  fbloginreg.login_response = response
				} else if (response.status === 'not_authorized') {
				  // In this case, the person is logged into Facebook, but not into the app, so we call
				  // FB.login() to prompt them to do so. 
				  // In real-life usage, you wouldn't want to immediately prompt someone to login 
				  // like this, for two reasons:
				  // (1) JavaScript created popup windows are blocked by most browsers unless they 
				  // result from direct interaction from people using the app (such as a mouse click)
				  // (2) it is a bad experience to be continually prompted to login upon page load.
				  FB.login();
				} else {
				  // In this case, the person is not logged into Facebook, so we call the login() 
				  // function to prompt them to do so. Note that at this stage there is no indication
				  // of whether they are logged into the app. If they aren't then they'll see the Login
				  // dialog right after they log in to Facebook. 
				  // The same caveats as above apply to the FB.login() call here.
				  FB.login();
				}
			  }); 
		},
		init:function(){ 
			window.fbAsyncInit = function() {
				FB.init({
					appId      : '177325695802962', // App ID
					channelUrl : '//www.closer2oxford.ro/channel.html', // Channel File
					status     : true, // check login status
					cookie     : true, // enable cookies to allow the server to access the session
					xfbml      : true  // parse XFBML
				});

				// Additional init code here
				fbloginreg.asyncInit()
			};
		}
	}
})();
// Load the SDK asynchronously
(function(d){
	 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	 if (d.getElementById(id)) {return;}
	 js = d.createElement('script'); js.id = id; js.async = true;
	 js.src = "//connect.facebook.net/en_US/all.js";
	 ref.parentNode.insertBefore(js, ref);
}(document));
  
	

$j(document).ready(fbloginreg.init)