$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html, body').animate({
    scrollTop: target.offset().top -90
    }, 500);
    return false;
    }
    }
    });
    });
    $(function(){
      $(".submenu").hide();
      $(".gnb>li").mouseenter(function(){
          $(this).children(".submenu").stop().slideDown();
      });
      $(".gnb>li").mouseleave(function(){
          $(this).children(".submenu").stop().slideUp();
      });
  });
    // gnb e
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    const targets = gsap.utils.toArray(".split"); 
    targets.forEach(target => {{
            let SplitClient = new SplitType(target, { type: "lines, words, chars" });
            let chars = SplitClient.chars;
  
            gsap.from(chars, {
                y: 0.5,
                opacity: 0,
                duration: 1.5,
                ease: "expo.out",
                stagger: {
                    amount: 1,
                    from: "random"
                },
                scrollTrigger: {
                    trigger: target,
                    start: "top 80%",
                    end: "+=400",
                    markers: false
                }
            });
        }
    });
  });
  // company e
  
  $(document).ready(function() {
      $("#top").click(function() {
          $('html, body').animate({scrollTop:0}, '300');
      });
  });
  // top e
  
  $(function(){
    $(".sub_pl > ul > li > .plus").click(function(){
        var $this = $(this);
        var $pulsBox = $this.next(".puls_box");
  
        // 슬라이드 토글 적용
        $pulsBox.slideToggle(300);
  
        // 다른 열려 있는 .puls_box는 닫음
        $(".puls_box").not($pulsBox).slideUp(300);
    });
  });
  // support e
  
  