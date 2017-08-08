// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require masonry/jquery.masonry
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .



// function masonryAllTheThings(){
//   $('.transitions-enabled').imageLoaded(function(){
//     $('.transitions-enabled').masonry({
//       itemSelector : '.box',
//       isAnimated: true,
//       isFitWidth: true
//     });
//   });
// }


// $(document).ready(masonryAllTheThings);
// $(document).on('page:road',masonryAllTheThings)


// $(window).load(function(){
//   var $pins = $('.transitions-enabled');
//   $pins.imagesLoaded( function(){
//     $pins.masonry({
//       itemSelector : '.box'
//       isAnimated : true
//     });
//   });
// });




$(document).on('turbolinks:load', function() {
// $(document).on('turbolinks:request-start', function() {
// $(document).on('turbolinks:render', function() {
  $(window).load(function() {
    $('.grid').masonry({
        columnWidth: 0
    });
  });
});

// # ページ切り替え時（初回ページは対象外）
// $(document).on('turbolinks:render', function() {
//   //ページ切り替え後にさせたい処理
// });

// # ページ遷移前
// $(document).on('turbolinks:request-start', function() {
//   ページ遷移前にさせたい処理
// });

$(function(){
  $("#modalbtn").click(function(){
    $("body").append("#bg")
    $("body").append("#modal")

    $("#bg").fadeIn();
    $("#modal").fadeIn();

    $("#bg").click(function(){
      $(this).fadeOut(function(){
        $(this).remove();
      });
      ("#modal").fadeOut(function(){
        $(this).remove();
      });
    });
    return false;
  });
});


$(function(){
  $("#sherepin").click(function(){
    $("body").append('#tooltip');

    $("#tooltip").css("top", $(this).offset().top - $("#sherepin").height() - 30 );
    $("#tooltip").css("left", $(this).offset().left - ($("#tooltip").width() - $(this).width())/2.5);

    $("#tooltip").fadeIn();

    $("#tooltip").click(function(){
      $(this).fadeOut(function(){
        $(this).remove();
      });
    });
    return false;
  });
});

