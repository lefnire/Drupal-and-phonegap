function login() {
	var pass = $('#password').val();
	var user = $('#user').val();
	var url = url + '/user/login.json'
	var data = {
		"username": user,
		"password": pass
	}
	url = $('#enpoint').val() + '/user/login.json';
	$.ajax({
        url: url,
        type: "POST",
		data: data,
		success: function() {
			alert('Sucessfully logged in');
		}
	})
}
function logout(url) {
	var url = url + '/user/logout.json'
	$.ajax({
        url: url,
        type: "POST",
		success: function() {
			alert('Sucessfully logged out');
		}
	})
}
