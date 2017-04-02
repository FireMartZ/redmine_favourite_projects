$(function(){
	var str = $('#project_quick_jump_box option:first').text();
	$('#project_quick_jump_box option:first').text("").val("");

	$('#project_quick_jump_box').select2({
		placeholder: str
	});
});