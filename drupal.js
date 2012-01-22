/**
 * Log in to a Drupal site.
 *
 * @param data
 *   Array containing url, pass and user. URL should be to endpoint.
 * @param successFunction
 *   A callback function invoked when the login was successful.
 * @param errorFunction
 *   A callback function invoked when the login was unsuccessful.
 */

function drupalServicesLogin(data, successFunction, errorFunction) {
	if (typeof successFunction == 'undefined') {
		var successFunction = drupalServicesAwesome;
	};
	if (typeof errorFunction == 'undefined') {
		var errorFunction = drupalServicesDarned;
	};
	var url = data['url'] + '/user/login.json'
	var post = {
		"username": data['user'],
		"password": data['pass']
	}
	$.ajax({
        url: url,
        type: "POST",
		data: post,
		success: function(data) {
			successFunction(data);
		},
		error: function(data) {
			errorFunction(data);
		}
	});
}

/**
 * Log out of a Drupal site.
 *
 * @param url
 *   URL to services endpoint at Drupal instance.
 * @param successFunction
 *   A callback function invoked when the logout was successful.
 * @param errorFunction
 *   A callback function invoked when the logout was unsuccessful.
 */
function drupalServicesLogout(url, successFunction, errorFunction) {
	if (typeof successFunction == 'undefined') {
		var successFunction = drupalServicesAwesome;
	};
	if (typeof errorFunction == 'undefined') {
		var errorFunction = drupalServicesDarned;
	};
	var url = url + '/user/logout.json';
	$.ajax({
        url: url,
        type: "POST",
		success: function(data) {
			successFunction(data);
		},
		error: function(data) {
			errorFunction(data);
		}
	})
}

/**
 * Post a node to a Drupal site.
 *
 * @param node
 *   A populated node object.
 * @param url
 *   URL to services endpoint at Drupal instance.
 * @param successFunction
 *   A callback function invoked when the login was successful.
 * @param errorFunction
 *   A callback function invoked when the login was unsuccessful.
 */
function drupalServicesPostNode(node, url, successFunction, errorFunction) {
	if (typeof successFunction == 'undefined') {
		var successFunction = drupalServicesAwesome;
	};
	if (typeof errorFunction == 'undefined') {
		var errorFunction = drupalServicesDarned;
	};
	var url = url + '/node.json';
	$.ajax({
        url: url,
        type: "POST",
		data: node,
		success: function(data) {
			successFunction(data);
		},
		error: function(data) {
			errorFunction(data);
		}
	});
}

function drupalServicesAwesome(data) {
	console.log(data);
}
function drupalServicesDarned(data) {
	console.log(data);
}