
$(function(){

    

    /* loading page, con1 이어지는 효과 */

    setTimeout(function(){
        $('.white').stop().animate({
            color:'white'
        },500)
    },200);

    setTimeout(function(){
        $('.load-wrap').addClass('hidden');
    },1550)

    setTimeout(function(){
        $('video')[0].play();
    },2300)


    /* 메인 화면 텍스트 나오기 */
    setTimeout(function(){
        $('.up-text').addClass('on');
        
    },2700);

    setTimeout(function(){
        $('.btn').addClass('on');
        $('.load-wrap').css({display:'none'});
    },3300)


    /* 햄버거바 누르면 나오는 메뉴페이지 */
    let hamClick = 0;

    $('.ham-wrap').click(function(){

        $('.ham-wrap').toggleClass('on');

        if(hamClick == 0){
            $('.menu-wrap').addClass('on');
            setTimeout(function(){
                $('.menu-inner').addClass('on');
            },150)


            $('body').css({backgroundColor:'#f2f2f2'});

            $('header').css({
                overflow:'visible'
            });

            hamClick = 1;
        }
        else{
            $('.menu-inner').removeClass('on');
            setTimeout(function(){
                $('.menu-wrap').removeClass('on');
            },150)

            $('body').css({backgroundColor:'transparent'});


            //모바일 header overflow 시간차
            setTimeout(function(){
                $('header').css({
                    overflow:'hidden'
                });
            },400);
            

            hamClick = 0;
        }
        
    })


   

    /*  con3 웹툰 슬라이드 마우스에 따라 움직임 */
    $('body').mousemove(function(e){
        let posX = e.pageX;
        let posY = e.pageY;

        $('.slide1 li').css({
            left:posX/30 + 'px',
            right:posY/30 + 'px'
        })

    })


    /* pc버전, con4 : service 마우스 올리면 나오는 효과 */

    $(window).resize(function() {
        if($(window).width() > 1220) {
            $('.con4-content-list-box').mouseover(function(){
                $(this).siblings('.con4-content-list-title').css({display:'none'});
                $(this).siblings('.con4-content-list-text').addClass('on');
                $(this).addClass('on');
               
            })
        
            $('.con4-content-list-box').mouseout(function(){
                $(this).siblings('.con4-content-list-title').css({display:'block'});
                $(this).siblings('.con4-content-list-text').removeClass('on');  
                $(this).removeClass('on');
            })
        } 
    })
    .resize();

    
    
    /* con5 : business 두번째 항목 mouseover 했을 때 */

    $('.busi2-list li:nth-of-type(1)').mouseover(function(){
        $('.busi2-list li').removeClass('on2');
        $('.busi2-list li').addClass('on1');
    })

    $('.busi2-list li:nth-of-type(2)').mouseover(function(){
        $('.busi2-list li').removeClass('on1');
        $('.busi2-list li').addClass('on2');
    })

    $('.busi2-list li').mouseover(function(){
        $('.busi2-list li').removeClass('on');
        $(this).addClass('on');   
    })

   
   






    /* 스크롤 이벤트 */
    $(window).scroll(function(){

        let scroll = $(window).scrollTop();

        
        let con2 = $('.con2').offset().top;
        let con3 = $('.con3').offset().top;
        let con4 = $('.con4').offset().top;
        let con5 = $('.con5').offset().top;

        let con6 = $('.con6').offset().top;
        let con7 = $('.con7').offset().top;


        /* 스크롤하면 헤더 나옴 */
        $('header').stop().animate({opacity:1},100);

        /* 햄버거바 메뉴 누르면 해당하는 위치로 이동 */
        $('.menu-list li').click(function(){
            $('.ham-wrap').removeClass('on');
            $('.menu-inner').removeClass('on');
            setTimeout(function(){
                $('.menu-wrap').removeClass('on');
            },150)
    
            $('body').css({backgroundColor:'transparent'});
    
            hamClick = 0;
    
            let idx = $(this).index();
            if(idx == 0){
                $('html').stop().animate({scrollTop:con2+'px'},1200);
            }
            else if(idx == 1){
                $('html').stop().animate({scrollTop:con4 + 10 + 'px'},1200);
            }
            else if(idx == 2){
                $('html').stop().animate({scrollTop:con5 + 10 + 'px'},1200);
            }
            else if(idx == 3){
                $('html').stop().animate({scrollTop:con6 + 10 + 'px'},1200);
            }
            else if(idx == 4){
                $('html').stop().animate({scrollTop:con7 + 'px'},1200);
            }


    
    
        })

        /* 햄버거바 색상 변화 */

        if(scroll < con2){
            $('.ham-wrap').removeClass('black');
        }
        else if(scroll > con2 && scroll < con4){
            $('.ham-wrap').addClass('black');
        }
        else if(scroll > con4 && scroll < con5){
            $('.ham-wrap').removeClass('black');
        }

        else if(scroll > con5 && scroll < con6){
            $('.ham-wrap').addClass('black');
        }
        else if(scroll > con6){
            $('.ham-wrap').removeClass('black');
        }
       
        

        /* con2 스크롤에 따라 각 글자 나오고 변화 */

        if(scroll > con2 +50){
            $('.con2-text1').addClass('on');
        }
        else{
            $('.con2-text1').removeClass('on');
        }

        if(scroll > con2 +300){
            $('.con2-text2').addClass('on');
        }
        else{
            $('.con2-text2').removeClass('on');
        }

        if(scroll > con2 +500){
            $('.con2-text3').addClass('on');
        }
        else{
            $('.con2-text3').removeClass('on');
        }

        if(scroll > con2 + 600){
            $('.con2-inner>p').addClass('on');
        }
        else{
            $('.con2-inner>p').removeClass('on');
        }

        if(scroll > con2 + 700){
            $('.con2-text4').addClass('on');
        }
        else{
            $('.con2-text4').removeClass('on');
        }

        if(scroll > con2 + 900){
            $('.con2-text5').addClass('on');
        }
        else{
            $('.con2-text5').removeClass('on');
        }

        if(scroll > con2 + 1100){
            $('.con2-text6').addClass('on');
        }
        else{
            $('.con2-text6').removeClass('on');
        }



        /* con3 웹툰 슬라이드 */

        if(scroll > con3 - 1500 ){
            $('.slide1').css({
                left:scroll/3+'px'
            })
            $('.bar').css({
                right:scroll/4+'px'
            })

        }

        /* 태블릿 버전, 웹툰 슬라이드  */
        $(window).resize(function() {
            if($(window).width() < 1220 && $(window).width() > 768) {
                if(scroll > con3 - 1500 ){
                    $('.slide1').css({
                        left: -400 + scroll/3+'px'
                    })
                    $('.bar').css({
                        right:scroll/4+'px'
                    })
        
                }
            } 

            
            else if($(window).width() < 768) {
                if(scroll > con3 - 1500 ){
                    $('.slide1').css({
                        left: -400 + scroll/3+'px'
                    })
                    $('.bar').css({
                        right:scroll/4+'px'
                    })
        
                }
            } 
            
        })
        .resize();




        /* con4 service li 스크롤에 따라 오른쪽으로 */

        //pc 
        $(window).resize(function() {
            if($(window).width() > 1220) {
                if(scroll > con4 - 2000){
                    $('.con4-content-list li').eq(0).css({
                        left: scroll/16 + 'px'
                    })
                    $('.con4-content-list li').eq(1).css({
                        left: scroll/12 + 'px'
                    });
        
                    //13
                    $('.con4-content-list li').eq(2).css({
                        left: scroll/20 + 'px'
                    })


                    $('.con4-content-list-title').css({display:'block'})
                    
                }
            }
            else{
                $('.con4-content-list li').css({
                    left:'0px'
                });
            } 
        })
        .resize();
        

       

        let service1 = $('.service1').offset().top;
        let service2 = $('.service2').offset().top;
        let service3 = $('.service3').offset().top;

        /* 스크롤에 따라 service 순번 바뀜 */

        if(scroll > service1 - 550){
            $('.con4-num').text('01');
        }

        if(scroll > service2 - 550){
            $('.con4-num').text('02');
        }
        if(scroll > service3 - 550){
            $('.con4-num').text('03');
        }


        if(scroll > service1 - 700){
            $('.service1').addClass('on');
           
        }
        if(scroll > service2 - 700){
            $('.service2').addClass('on');
            
        }
        if(scroll > service3 - 700){
            $('.service3').addClass('on');
            
        }

        /* business 스크롤에 따른 효과 */

        let busi1 = $('.business1').offset().top;
        let busi2 = $('.business2').offset().top;

        if(scroll > busi1 - 500){
            $('.business1').addClass('on');
        }

        if(scroll > busi2 - 500){
            $('.business2').addClass('on');
        }


        /* con6 스크롤 되면 video 크기 줄어듦 */
        if(scroll > con6 + 500){
            $('.video-wrap').addClass('on');
        }
        else{
            $('.video-wrap').removeClass('on');
        }

        if(scroll > con6 + 800){
            $('.con6 .text-wrap').addClass('on');

        }
        else{
            $('.con6 .text-wrap').removeClass('on');

        }

        if(scroll > con6 + 1000){
            $('.con6-text1').addClass('on');
        }
        else{
            $('.con6-text1').removeClass('on');
        }

        if(scroll > con6 + 1200){
            $('.con6-text2').addClass('on');
        }
        else{
            $('.con6-text2').removeClass('on');
        }

        if(scroll > con6 + 1400){
            $('.con6-text3').addClass('on');
        }
        else{
            $('.con6-text3').removeClass('on');
        }

        if(scroll > con6 + 1600){
            $('.con6 .btn').addClass('on');
        }
        else{
            $('.con6 .btn').removeClass('on');
        }


        /* con7 스크롤 효과 */

        if(scroll > con7 - 300){
            $('.con7').addClass('on');
            setTimeout(function(){
                $('.con7-inner .title-wrap h2').stop().animate({top:"0px"},500,"easeOutBounce");
            },200)
            
            
        }
        


        
    })

})