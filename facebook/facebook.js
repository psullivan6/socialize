/*
 * Facebook - Feed Dialog
 * http://bit.ly/fb-fd
 *
 * Include this in the head as well:
 * <script src='http://connect.facebook.net/en_US/all.js'></script>
 */

$('.sZ-facebook').click(function(){

	FB.init({appId: "FACEBOOK_APP_ID", status: true, cookie: true});

	var me = $(this);	// JavaScript 201 - Use $(this) in a variable so that it doesn't request the same element multiple times

	// calling the API ...
	var obj = {
		method: 'feed',
		link: me.attr('data-link'),			// This is an attribute of the above link tag, edit its contents above
		picture: me.attr('data-image'),		// This is an attribute of the above link tag, edit its contents above
		name: me.attr('data-title'),			// This is an attribute of the above link tag, edit its contents above
		caption: me.attr('data-caption'),		// This is an attribute of the above link tag, edit its contents above
		description: me.attr('data-description')	// This is an attribute of the above link tag, edit its contents above
	};

	function callback(response) {
		if (response && response.post_id) {
			// It was successfully posted, so do something here
		} else {
			// It failed, so do something else here
		}
	}

	FB.ui(obj, callback);

	return false;	// JavaScript 201 - Return false so that the link tag doesn't execute its native href attribute

});