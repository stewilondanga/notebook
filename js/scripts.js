function storeUserScribble(id) {
    var scribble01 = document.getElementById('scribble01').innerHTML;

		localStorage.setItem('userScribble',scribble);
}




var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
