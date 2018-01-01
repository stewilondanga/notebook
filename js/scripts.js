function storeUserScribble(id) {
    var scribble01 = document.getElementById('scribble01').innerHTML;

		localStorage.setItem('userScribble',scribble);
}

function getUserScribble() {
    if ( localStorage.getItem('userScribble')) {
      var scribble = localStorage.getItem('userScribble');
    }
    else {
      var scribble01 = 'You can scribble directly on this sticky... and I will also remember your message the next time you visit my blog!';
    }

		document.getElementById('scribble01').innerHTML = scribble01;
 }

 function clearLocal() {
	 clear: localStorage.clear();
	 return false;
 }

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
