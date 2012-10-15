# Facebook   
==============
- JavaScript click function tied into Facebook's JS [Feed Dialog](http://bit.ly/fb-fd)   
- Regular link tag that is a fallback for no JS   
*make sure that the class (or id) of the link tag matches the JS click function*   


## Notes   
>[http://on.fb.me/XeLCl1](http://on.fb.me/XeLCl1)   
>_This is in reference to the facebook.com/sharer.php? share link_   
>"Facebook deprecated the Share button on February 28, which means they no longer recommend its use in applications or on external web sites. The share button still works as of now, but Facebook will de-prioritize maintenance of the feature."   

## Variables   
	FACEBOOK_APP_ID			The number assigned to your facebook app   
	SHARE_LINK_HERE			The link of the item to be shared   
	SHARE_IMAGE_HERE		The image of the item to be shared (this will show up in the timeline next to the post)   
	SHARE_TITLE_HERE		The tile of the ietm to be shared   
	SHARE_CAPTION_HERE		The "subtitle" of the item to be shared   
	SHARE_DESCRIPTION_HERE	OK, you get the idea   
	
	*Use only for the regular link, not the JS*   
	SHARE_REDIRECT_URI		This is the URI where the user will be taken after successfully sharing   