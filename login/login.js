// --- PARAMETER PARSING CODE ---
var params = {};
var queryString = location.hash.substring(1);
var regex = /([^&=]+)=([^&]*)/g;
var m;
while (m = regex.exec(queryString)) 
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
// -------

var token = {};

// --- SESSION STATE CODE ---
if (!params['state']) {
    // no 'state' parameter passed; look for saved session
    if (token['value'] = localStorage.getItem('token_value')) {
	token['expiration'] = localStorage.getItem('token_expiration');
	if (!token['expiration'] || token['expiration'] <= (new Date()).getTime()/1000 || !localStorage.getItem('token_email')) {
	    // token expired / may have expired / missing info; get a new one
	    localStorage.removeItem('token_email');
	    obtain_token();
	} else {
	    load_stored_user();
	}
    } else {
	// no token found; get one
	obtain_token();
    }
}
if (params['state'] == 'authorized') {
    if (params['error'])
	window.location.assign("/");
    // extract and store the new token
    localStorage.setItem('token_value', params['access_token']);
    localStorage.setItem('token_expiration', 
			 int((new Date()).getTime()/1000) + 
			 params['expires_in']-2);
    $.getJSON("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+params['access_token'], function(data, textStatus, jqXHR) {
	if (!data['email'] || data.email.indexOf("@apps.tcnj.edu") < 0) {
	    // not a valid TCNJ Google Apps account; NOPE!
	    localStorage.removeItem('token_value');
	    localStorage.removeItem('token_expiration');
	    $('#login').html("<b>Error: Must log in with a valid TCNJ Google Apps account.</b>");
	} else {
	    localStorage.setItem('token_email', data.email);
	    load_stored_user();
	}
    });
}
// -------



function load_stored_user() {
    $('#login').html("<h1>Welcome, " + 
		     localStorage.getItem('token_email') + 
		     "</h1>");
}


function obtain_token() {
    var request = {
	response_type:'token',
	client_id:'471784770457.apps.googleusercontent.com',
	redirect_uri:'http%3A%2F%2Ftcnj-magic-circle.github.com%2Flogin',
	// https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email
	// https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile
	scope:'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email',
	state:'authorized',
	approval_prompt:'auto'
    }
    var requestString = "https://accounts.google.com/o/oauth2/auth" + 
	"?response_type="+request.response_type + 
	"&client_id="+request.client_id + 
	"&redirect_uri="+request.redirect_uri + 
	"&scope="+request.scope + 
	"&state="+request.state + 
	"&approval_prompt="+request.approval_prompt;
    window.location.replace(requestString); // not using w.l.assign(_)
}