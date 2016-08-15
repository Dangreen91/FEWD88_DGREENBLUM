// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

var picture = $('#bigimage')

$('.thumb').click(function () {
	var newSrc = $(this).attr('src')
	picture.attr('src', newSrc)
})