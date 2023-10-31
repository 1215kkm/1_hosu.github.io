$(document).ready(function(){
    $('.over01').delay(1400).animate({top:'0',opacity:'1'},1800);
    $('.over02').delay(1000).animate({top:'0',opacity:'1'},1800);
    $('.over03').delay(1800).animate({top:'0',opacity:'1'},1800);
    
    
    
    
    
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
})


$(window).scroll(function(){
//    var [이름]짓기 = .section.스크롤위치(offset().top);
//    만약에 if html의 스크롤 위치가 [이름]보다 커질 경우 또는 같을 경우..scroll
//    움직여라 or 나타나라 or class를 추가해라 등등

    
    var phs = $('.section02').offset().top-800;
    
    if($('html,body').scrollTop() > phs ){
       $('.section02 ul').addClass('on');
       } else{
           $('.section02 ul').removeClass('on');
       }
    
    
})





$(function(){
    $('.view_video01').click(function(){
        $('#video_wrap01').show();
        $('html,body').css({position:'',overflow:'hidden'});
        $('#youtube-player').attr("src","https://www.youtube.com/embed/hmE9f-TEutc?rel=0&amp;showinfo=0?amp;autoplay=1");
    })
    $('#video_wrap01 button').click(function(){
        $('#video_wrap01').hide();
        $('html,body').css({position:'',overflow:''});
        $('#youtube-player').attr("src","");
    })
   
    
    $('.view_video02').click(function(){
        $('#video_wrap02').show();
        $('html,body').css({position:'',overflow:'hidden'});
        $('#youtube-player2').attr("src","https://www.youtube.com/embed/7C2z4GqqS5E?rel=0&amp;showinfo=0?amp;autoplay=1");
    })
    $('#video_wrap02 button').click(function(){
        $('#video_wrap02').hide();
        $('html,body').css({position:'',overflow:''});
        $('#youtube-player2').attr("src","");
    })
    
  
    $('.view_video03').click(function(){
        $('#video_wrap03').show();
        $('html,body').css({position:'',overflow:'hidden'});
        $('#youtube-player3').attr("src","https://www.youtube.com/embed/MBdVXkSdhwU?rel=0&amp;showinfo=0?amp;autoplay=1");
    })
    $('#video_wrap03 button').click(function(){
        $('#video_wrap03').hide();
        $('html,body').css({position:'',overflow:''});
        $('#youtube-player3').attr("src","");
    })
    
    
  
})

