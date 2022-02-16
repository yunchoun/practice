// 서브메뉴 효과를 개별로 넣어줌
$("nav > ul > li").mouseover(function(){
    $(this).find("ul.sub").stop().slideDown(200);
 });
 $("nav > ul > li").mouseout(function(){
    $(this).find("ul.sub").stop().slideUp(200);
 });



// 한번에 서브메뉴가 열리게함
// $("nav > ul > li").mouseover(function(){
//     $("ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function(){
//     $("ul.sub").stop().slideUp(200);
// });




// width 값 100% 로 서브메뉴가 열림
// $("nav > ul > li").mouseover(function (){
//     $(".nav_bg,ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function () {
//     $(".nav_bg,ul.sub").stop().slideUp(200);
// });