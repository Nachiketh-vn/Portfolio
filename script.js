$(".home,.about,.services,.portfolio,.contact").on({
    "mouseover":function(){
    $(this).css("background-color","#c3003e");    //here this means .home
    },

    "mouseout":function(){
    $(this).css("background-color","");}    //here this means .home

});

$(".skills").css("background-color","#c3003e").css("border-radius","7px").css("padding","3px");
$(".skills-contents").css("display","block");

$(".skills").on({
    "click":function(){
    $(".education,.experence").css("background-color","");
    $(this).css("background-color","#c3003e").css("border-radius","7px").css("padding","3px");
    $(".skills-contents").css("display","block");
    $(".education-contents,.experence-contents").css("display","none");
    }
});

$(".education").on({
    "click":function(){
    $(".experence,.skills").css("background-color","");
    $(this).css("background-color","#c3003e").css("border-radius","7px").css("padding","3px");
    $(".education-contents").css("display","block");
    $(".skills-contents,.experence-contents").css("display","none");
    }
});

$(".experence").on({
    "click":function(){
    $(".education,.skills").css("background-color","");
    $(this).css("background-color","#ff004f").css("border-radius","7px").css("padding","3px");
    $(".experence-contents").css("display","block");
    $(".education-contents,.skills-contents").css("display","none");
    } 
});

$(".fa-bars").on("click",function(){
    $("nav ul").css("right","0");
});

$(".fa-circle-xmark").on("click",function(){
    $("nav ul").css("right","-200px");
});


var width = screen.width;

if(width < 600){
    $(".name-title").html("<p>Hi, I'm <br><span>Nachiketh</span><br>From India</p>");
}
