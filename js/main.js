$(function(){

    // $(document).ready(function(){
    //     $(window).scrollTop(0);
    // })
    

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
    },3300)


    /* 메뉴바 누르면 나오는 메뉴페이지 */
    let hamClick = 0;

    $('.ham-wrap').click(function(){

        if(hamClick == 0){
            $('.menu-wrap').addClass('on');
            setTimeout(function(){
                $('.menu-inner').addClass('on');
            },150)

            hamClick = 1;
        }
        else{
            $('.menu-inner').removeClass('on');
            setTimeout(function(){
                $('.menu-wrap').removeClass('on');
            },150)

            hamClick = 0;
        }
        
    })


    /* 스크롤 이벤트 */
    $(window).scroll(function(){

        let scroll = $(window).scrollTop();

        
        let con2 = $('.con2').offset().top;
        let con3 = $('.con3').offset().top;

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



        /* con3 슬라이드 */

        if(scroll > con3 - 1000 ){
            $('.bar').stop().animate({transform:`translateX(${-50 - scroll/100}px) rotate(-15deg)`})
            $('.slide1').stop().animate({transform:`translateX(${-500 + scroll/100}px) rotate(-15deg)`})

        }


        
    })

})