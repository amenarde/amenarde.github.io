$(document).ready(function(){
    function hide_all() {
      $(".student_content").hide();
      $(".balloon_content").hide();
      $(".gridless_content").hide();
      $(".um_content").hide();
      $(".build_content").hide();
    }

    function size_all() {
      $(".student_content").css({'top' : ($(".main_wrapper").height() + $(".main_wrapper").position().top + (($(window).height()/100)*7) + 'px')});
      $(".balloon_content").css({'top' : ($(".main_wrapper").height() + $(".main_wrapper").position().top + (($(window).height()/100)*7) + 'px')});
      $(".gridless_content").css({'top' : ($(".main_wrapper").height() + $(".main_wrapper").position().top + (($(window).height()/100)*7) + 'px')});
      $(".um_content").css({'top' : ($(".main_wrapper").height() + $(".main_wrapper").position().top + (($(window).height()/100)*7) + 'px')});
      $(".build_content").css({'top' : ($(".main_wrapper").height() + $(".main_wrapper").position().top + (($(window).height()/100)*7) + 'px')});
    }

    size_all();
    hide_all();

    $(window).resize(function() {
      size_all();
    });

    $("#circle").click(function(){
      size_all();
    });

    $("#student").click(function(){
      $(".balloon_content").hide();
      $(".gridless_content").hide();
      $(".um_content").hide();
      $(".build_content").hide();
      $(".student_content").fadeToggle();
      size_all();
    });

  $("#balloon").click(function(){
    $(".student_content").hide();
    $(".gridless_content").hide();
    $(".um_content").hide();
    $(".build_content").hide();
    $(".balloon_content").fadeToggle();
    size_all();
  });

  $("#gridless").click(function(){
    $(".balloon_content").hide();
    $(".student_content").hide();
    $(".um_content").hide();
    $(".build_content").hide();
    $(".gridless_content").fadeToggle();
    size_all();
  });

  $("#genome").click(function(){
    $(".balloon_content").hide();
    $(".gridless_content").hide();
    $(".student_content").hide();
    $(".build_content").hide();
    $(".um_content").fadeToggle();
    size_all();
  });

  $("#build").click(function(){
    $(".balloon_content").hide();
    $(".gridless_content").hide();
    $(".um_content").hide();
    $(".student_content").hide();
    $(".build_content").fadeToggle();
    size_all();
  });

});
