// JavaScript Document

$(function(){
	$(".outer").css("display", "none");//アニメーション中は非表示
	setTimeout(function(){
		$('.first_container').fadeOut();},1500);//約4秒数後
});

$(function(){
 $(".outer").css({opacity:'0'});
 setTimeout(function(){
 $(".outer").css("display", "block");
 $(".outer").stop().animate({opacity:'1'},1500);//1秒かけてコンテンツを表示
 },1500);//約4秒後に
});


$(function() {
$(window).scroll(function(){
var y = $(this).scrollTop();
$('#banner').css('background-position', '0 ' + parseInt( -y / 3 ) + 'px');
$('#banner-content').css('background-position', '-3px' + parseInt( -y / 50 ) + 'px');
});
});

$(function () {
    if(navigator.userAgent.indexOf('Android') > 0){
        $("html").addClass("android");
    }
});

document.addEventListener('DOMContentLoaded', function () {
  // @media screen and (max-width: 780px) と同じ
  var mql = window.matchMedia('screen and (max-width: 500px)');

  function checkBreakPoint(mql) {
    if (mql.matches) {
      $(".none").addClass("on");
    } else {
      $(".none").removeClass("on");
    }
  }

  // ブレイクポイントの瞬間に発火
  mql.addListener(checkBreakPoint);

  // 初回チェック
  checkBreakPoint(mql);
});

$(function(){
	
var navBtn=$('.on');
navBtn.hide();

//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>100){

		//---- 画面を80pxスクロールしたら、ボタンを表示する
		navBtn.fadeIn();
	  	}else{
		//---- 画面が80pxより上なら、ボタンを表示しない
		navBtn.fadeOut();
	  } 
	});

});


//■page topボタン
$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>1000){

		//---- 画面を80pxスクロールしたら、ボタンを表示する
		topBtn.fadeIn();
	  	}else{
		//---- 画面が80pxより上なら、ボタンを表示しない
		topBtn.fadeOut();
	  } 
	});

	// ◇ボタンをクリックしたら、スクロールして上に戻る
	topBtn.click(function(){
	  $('body,html').animate({
	  scrollTop: 0},500);
	  return false;
	});
});


$(function(){
	//タブをクリックしたら
	$(".tab-menu__tab").on("touchstart",function(){
		
		//クリックされたタブが何番めか取得し、index変数に代入
		let index = $(".tab-menu__tab").index(this);
	//	console.log(index);

		//コンテンツを全て非表示にする(.hideをつける)
		$(".tab-menu__body").addClass("hide");
		
		//クリックされたタブと同じ番号のコンテンツから.hideをとる
		$(".tab-menu__body").eq(index).removeClass("hide");
		$(".tab-menu__body").eq(index).removeClass("tab-menu__body02");

		
		//全てのタブから、アクティブである事を示す__tab-activをとる
		$(".tab-menu__tab").removeClass("tab-menu__tab-active");
		//クリックされたタブに、アクティブである事を示す__tab-activeをつける
		$(this).addClass("tab-menu__tab-active");
		
	});
});

$(function(){
	//タブをクリックしたら
	$(".tab-menu__tab01").on("touchstart",function(){
		
		//クリックされたタブが何番めか取得し、index変数に代入
		let index = $(".tab-menu__tab01").index(this);
	//	console.log(index);

		//コンテンツを全て非表示にする(.hideをつける)
		$(".tab-menu__body").addClass("hide");
		
		//クリックされたタブと同じ番号のコンテンツから.hideをとる
		$(".tab-menu__body").eq(index).removeClass("hide");
		$(".tab-menu__body").eq(index).removeClass("tab-menu__body02");

		
		//全てのタブから、アクティブである事を示す__tab-activをとる
		$(".tab-menu__tab01").removeClass("tab-menu__tab-active01");
		//クリックされたタブに、アクティブである事を示す__tab-activeをつける
		$(this).addClass("tab-menu__tab-active01");
		
	});
});

$(function(){
var maxHeight = 0;
//もしdivがmaxHeightの値より大きい場合はdivの高さを全部合わせる
$(".box_title").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});
//divの高さを取得する
$(".box_title").height(maxHeight);
});

$(function(){
var maxHeight = 0;
//もしdivがmaxHeightの値より大きい場合はdivの高さを全部合わせる
$(".box_text").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});
//divの高さを取得する
$(".box_text").height(maxHeight);
});

$(function(){
var maxHeight = 0;
//もしdivがmaxHeightの値より大きい場合はdivの高さを全部合わせる
$(".box_course").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});
//divの高さを取得する
	$.when (
		$(".box_course").height(maxHeight)
		).done(	
$(".box_course").css("height", maxHeight / 2 + "px")
)	
});
$(function(){
var maxHeight = 0;
//もしdivがmaxHeightの値より大きい場合はdivの高さを全部合わせる
$(".box_text_course").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	$(".box_text_course").css("margin-top", 20 + "px")
});
});
$(function(){
var maxHeight = 0;
//もしdivがmaxHeightの値より大きい場合はdivの高さを全部合わせる
$(".box_course02").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});
//divの高さを取得する
	$.when (
		$(".box_course02").height(maxHeight)
		).done(	
$(".box_course02").css("height", maxHeight / 2 + 100 + "px")
)	
});
$(function(){
var maxHeight = 0;
//もしdivがmaxHeightの値より大きい場合はdivの高さを全部合わせる
$(".box_course03").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});
//divの高さを取得する
	$.when (
		$(".box_course03").height(maxHeight)
		).done(	
$(".box_course03").css("height", maxHeight / 2 + 180 + "px")
)	
});
$(function(){
var maxHeight = 0;
//もしdivがmaxHeightの値より大きい場合はdivの高さを全部合わせる
$(".box_text_course").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	$(".box_text_course").css("margin-top", 20 + "px")
});
});

$(function(){
var maxHeight = 0;
//もしdivがmaxHeightの値より大きい場合はdivの高さを全部合わせる
$(".tab_menu__headarea").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});
//divの高さを取得する
$(".tab_menu__headarea").height(maxHeight);
});


$(function(){
	var $slider_container = $('.slider-container'),
    $slider = $('.slider');

	$slider.slick({
		appendArrows: $slider_container,
		// FontAwesomeのクラスを追加
		prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
		nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
		autoplay: true,
		autoplaySpeed: 7000,
		dots: true
	});
});
$("document").ready(function(){
  $('.top_slick').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    dots: true,
    arrows: false,
	  adaptiveHeight: true,
    centerMode: true,
    centerPadding: '20%'
  });
}); 
$(function(){
  $(window).scroll(function (){
    $('.fadeinUp').each(function(){
      var imgPos = $(this).offset().top;   
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + 130){
        $(this).addClass('scrollin');
      }
    });
  });
});

$(function(){
  $(window).scroll(function (){
    $('.fadeinUp02').each(function(){
      var imgPos = $(this).offset().top;   
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + 280){
        $(this).addClass('scrollin');
      }
    });
  });
});


$(function(){
			
	
	$(".menu_btn").click(function(){
		// 変数　$btn_tri に .btn-trigger を代入
let $btn_tri = $(".btn-trigger");
		let $nav = $(".navigation");
		
		if($btn_tri.hasClass("active")){
			// when()内の処理が終わってからdone()内の処理が実行
			// when()内では行末に；をつけない
			$.when(
				//メニューが開いているとき
				$nav.slideUp(500)
			).done(function(){
				$nav.css("display" , "")
			})
			
			 $btn_tri.removeClass("active");
		} else {
			// メニューが閉じている時
			// メニューを開く
			$nav.slideDown(500);
			 $btn_tri.addClass("active");
		}
		
	
		
		
		if($(".menu").hasClass("active")){
			// when()内の処理が終わってからdone()内の処理が実行
			// when()内では行末に；をつけない
			$.when(
				//メニューが開いているとき
				$nav.slideUp(500)
			).done(function(){
				$nav.css("display" , "")
			})
			
			 $(".menu").removeClass("active");
		} else {
			// メニューが閉じている時
			// メニューを開く
			$nav.slideDown(500);
			 $(".menu").addClass("active");
		}
		
	});
	
	
});	
$(function(){
		$("#header a").click(function(){
			$.when(
				$(".navigation").slideUp(500),
						
			).done(function(){			
			$(".navigation").css("display" , "")
			})
				
			$(".menu").removeClass("active");
			$(".btn-trigger").removeClass("active");
	

		});
});

$(function () {
 var headerHeight = 77; //ヘッダの高さ
 $('a[href^="#"]').click(function(){
     var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHeight; //ヘッダの高さ分位置をずらす
     $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
   });
});
	 