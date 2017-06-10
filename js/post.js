$(function() {
    $('pre').addClass('prettyprint linenums'); //添加Google code Hight需要的class

    window.disqus_shortname = 'beiyuu'; // required: replace example with your forum shortname
    $('#disqus_container .comment').on('click',function(){
        $(this).html('加载中...');
        var that = this;
        $.getScript('http://' + disqus_shortname + '.disqus.com/embed.js',function(){$(that).remove()});
    });

    $('.entry a').each(function(index,element){
        var href = $(this).attr('href');
        if(href){
            if(href.indexOf('#') == 0){
            }else if ( href.indexOf('/') == 0 || href.toLowerCase().indexOf('beiyuu.com')>-1 ){
            }else if ($(element).has('img').length){
            }else{
                $(this).attr('target','_blank');
                $(this).addClass('external');
            }
        }
    });

    $.getScript('/js/prettify/prettify.js',function(){
        prettyPrint();
    });

    if(/\#comment/.test(location.hash)){
        $('#disqus_container .comment').trigger('click');
    }

  $(window).scroll( function(event){
    // $("#msg").append( $(this).scrollTop() + '<br>' );
    // console.log('data', event.pageYOffset);
    var data = $(this).scrollTop();
    if(data>0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }

    if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
      // alert("滚动条已经到达底部为" + $(document).scrollTop());
      $('#toBottom').fadeOut();
    } else{
      $('#toBottom').fadeIn();
    }


  });


    $('#toTop').on('click', function (e) {
      e.preventDefault();
      $("body").animate({scrollTop:"0"},600);
    });

  $('#toBottom').on('click', function (e) {
    e.preventDefault();
    $('body').animate({ scrollTop: $(document).height() }, 600);
  });
})
