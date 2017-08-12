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

// $(document).on('turbolinks:load', function() {
//   window.alert('JavaScriptを外部ファイルから読み込む');
// });

// $(document).on('turbolinks:load',function(){
//   $(document).on('keyup','#modalbtn',function(e){
//     e.preventDefault();
//     var input = $.trim($(this).val());
//   })
//   $(function(data){
//     $('#modal').find('#img').
//   })
// })



$(document).on('turbolinks:load', function() {
  $('.grid').masonry({
      columnWidth: 0
  });
});


$(document).on('turbolinks:render', function() {
  $('.grid').masonry({
      columnWidth: 0
  });
});


$(function(){

  // $("#modal").each(function(){
  //   $(this).attr("id","#{@pin.id}");
  // });

  // var pin_id = pin.attr("data-pin-id");

  $("#modalbtn").click(function(){
    $("body").append("#bg")
    $("body").append("#modal")
    $("#modal").attr("data-pin-id")

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

    $("#tooltip").css("top", $(this).offset().top - $("#sherepin").height() - 20 );
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


// $(function(){
//   $("#box").hover(function(){
//     $("#btns").fadeIn();
//     // $("#text")fadeIn();
//   });
// });
