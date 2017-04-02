$(function(){
	var str = $('#project_quick_jump_box option:first').text();
	$('#project_quick_jump_box option:first').text("").val("");

	$('#project_quick_jump_box').select2({
		placeholder: str
	});

    // Close the select box when closing the responsive flyout
    $('.js-flyout-menu-toggle-button').on('click', function(e) {
        if($('html').hasClass('flyout-is-active')) {
            $('#wrapper2').on('click', function(e){
                if(!$('html').hasClass('flyout-is-active')) {
                    $('#project_quick_jump_box').select2("close");
                }
            })
        }
    });
});

