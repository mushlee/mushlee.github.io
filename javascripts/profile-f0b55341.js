$(function(){$(".door_back").bind("click",function(){var n=$(this);n.hasClass("open")?n.removeClass("open"):n.addClass("open"),n.next().slideToggle()})});