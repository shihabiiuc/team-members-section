jQuery(document).ready(function() {
	jQuery('.profile-photo, .name').click(function() {
		jQuery(this).closest('div').find('.popup-outer').fadeIn();
	});

	jQuery('.ui-close').click(function() {
		jQuery(this).parents('div').find('.popup-outer').fadeOut();
	});
});