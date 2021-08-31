$(document).ready(function(){
	$('.category-list .category-item[category="all"]').addClass('category-item-active');
	$('.category-item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);
		$('.category-item').removeClass('category-item-active');
		$(this).addClass('category-item-active');

			$('.product-item').hide();

			$('.product-item[category="'+catProduct+'"]').show();;
	});

	$('.category-item[category="all"]').click(function(){
			$('.product-item').show();
	});
});