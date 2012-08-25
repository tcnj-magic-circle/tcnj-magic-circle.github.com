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
	if (!token['expiration'] || token['expiration'] <= (new Date()).getTime()){
	    // token expired/ may have expired; get a new one
	    obtain_token();
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
    localstorage.setItem('token_value', params['access_token']);
    localstorage.setItem('token_expiration', 
			 (new Date()).getTime + params['expires_in']-2);
}
// -------


function obtain_token() {
    var request = {
	response_type:'token',
	client_id:'827519299479-g8vtg60pb7ruj1ree1mooa5u67425fvt' + 
	    '.apps.googleusercontent.com',
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