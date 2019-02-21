//Check Off Specific task By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//remove a specific task
$("ul").on("click", "span", function(){
	$(this).parents("li").fadeOut(500, function(){
		$(this).remove();
	});
});

//adding new task on clicking enter
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newTask = $(this).val();
		if(newTask!=""){
			//create new li
			$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i> </span>" + newTask + "</li>");
			$(this).val("");
			$("#clear").removeClass("button-display");	
		}else{
			alert("Text-Field is empty!");
		}
	}
});

$("#clear").on("click", function(){
	$("ul").empty();
	$("input[type='text']").val("");
	$(this).addClass("button-display");
	});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})