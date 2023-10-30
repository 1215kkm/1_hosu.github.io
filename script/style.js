/*오른쪽 하단 top버튼을 누르면 위로 올라가도록, 상단에 있을 경우 사라지고 안보이게*/
$(window).scroll(function(){
    if($(this).scrollTop()>=400){
        $('.gotop').fadeIn()
    } else {
        $('.gotop').fadeOut()
    }
    
    $('.gotop').click(function(){
        $('html,body').stop().animate({scrollTop:'0'},1000)/*부드럽게, animate사용시 꼬부랑괄호 써야함/ 숫자는 위치를 나타냄 ,1000는 올라가는 속도(1초=1000)*/
    });
    
})




//햄버거바 클릭하면 엑스자되는 효과
var burger = $('.menu-trigger');

burger.each(function(index){
    var $this = $(this);
    
    $this.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active-' + (index+1));
    })
});



//햄버거 버튼 누르면 모달,메뉴 나오고 사라지도록.
$(document).ready(function(){
    
    $(".ham, .modal").click(function(){
        $(".modal").toggleClass('modal_active');
        $('.ham').toggleClass('ham_color')
        $(".menu_side").toggleClass('active');
    })
    

})


$(document).ready(function(){
    $('.aside .right .text, .right_contact .close, .contact .button').click(function(){
        $('.right_contact').toggleClass('contact_form');
        return false/*<-#태그를 무용지물로 만드는 소스. 맨위로 올라가는 것 방지*/
    }) 

})





//웰컴투~ 글자 웨이브
$(document).ready(function(){
           $(".tagline").letterfx({"fx":"wave","letter_end":"rewind","timing":"60","fx_duration":"300ms"}); 
        })




//어바웃미 사진 플립효과
var $cards = $('.card-object'),
    $faceButtons = $('.face');

$faceButtons.on('click', flipCard);

function flipCard(event) {
  event.preventDefault();
  
  var $btnFace = $(this),
      $card = $btnFace.parent('.card-object');
  
  if( $card.hasClass('flip-in') ) {
    closeCards();
  } else {
    closeCards();
    openCard($card);
  }
  
}

function closeCards() {
  $cards.each( function() {
    $(this)
      .filter('.flip-in')
      .removeClass('flip-in')
      .queue( function() {
        // Force reflow hack
        var reflow = this.offsetHeight;
        $(this)
          .addClass('flip-out')
          .dequeue();
      })
      
  });
}

function openCard($card) {
  $card
    .removeClass('flip-out')
    .queue( function() {
      // Force reflow hack
      var reflow = this.offsetHeight;
      $(this)
        .addClass('flip-in')
        .dequeue();
    });
    
}




//스크롤위치에 따라 나타나고 사라지기
$(window).scroll(function(){
//    var [이름]짓기 = .section.스크롤위치(offset().top);
//    만약에 if html의 스크롤 위치가 [이름]보다 커질 경우 또는 같을 경우..scroll
//    움직여라 or 나타나라 or class를 추가해라 등등

    
    var phs = $('.work .piece').offset().top-1000;
    
    if($('html,body').scrollTop() > phs ){
       $('.work .piece').addClass('on');
       } else{
           $('.work .piece').removeClass('on');
       }
    
    
})






//클릭시 원하는 페이지로 스크롤 이동.

    $(document).ready(function(){
        $('.header li,.menu_side li').click(function(){
            
            var gogogo = $($(this).attr("data-hoosu")).offset().top;
            
            $('html, body').animate({scrollTop:gogogo});
            return false
        })
    })
    




//클릭한 메뉴 표시
    $(document).ready(function(){
        
        $('.header li').eq(0).addClass('on');
        
//        $('.header li').click(function(){
////            $('.header li').removeClass('on');
//            $(this).addClass('on').siblings().removeClass('on');
//        })
//        
        
        
        
        
        //스크롤위치에 따라 나타나고 사라지기
        $(window).scroll(function(){
        //    

            var htmlP = $('html,body').scrollTop();
            var mainP = $('.main').offset().top;
            var aboutP = $('.about').offset().top;
            var workP = $('.work').offset().top;
            var contactP = $('.contact').offset().top;


            if( htmlP >= mainP ) {
                $('.header li').eq(0).addClass('on').siblings().removeClass('on');;
            } 
            if (htmlP >= aboutP){
                $('.header li').eq(1).addClass('on').siblings().removeClass('on');;
            } 
            if (htmlP >= workP){
                $('.header li').eq(2).addClass('on').siblings().removeClass('on');;
            } 
            if (htmlP >= contactP - 800){
                $('.header li').eq(3).addClass('on').siblings().removeClass('on');;
            } 

        })


        
        
    })







