$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	})

	event.stopPropagation();
});

$("ul").on("click","li",function(){
	
	if($(this).css("color")=="rgb(128, 128, 128)"){
		$(this).css("color","black");
		$(this).css("text-decoration","none");
	}
	else{
	$(this).css("color","gray");
	$(this).css("text-decoration","Line-through");
}
});
$("input[type='text'").keypress(function(event){
	if(event.which===13){
		var abc=$(this).val();
		$(this).val("");
	   $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+abc+"</li>");
	}
	});
var ab=$(".fa-plus")
$(ab).click(function() {
	$("input[type='text'").fadeToggle();
});

