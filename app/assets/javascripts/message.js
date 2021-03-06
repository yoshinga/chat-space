$(function() {
  function buildMessage(message){
    var image = (message.image) ? `<img class= "lower-message__image" src=${message.image} >` : "";
    let html = `<div class="message" data-id="${message.id}">
                <div class="message__upper-info__talker">
                  ${ message.user_name }
                    <div class="message__upper-info__date">
                      ${message.created_at}
                    </div>
                </div>
                <div class="message__text">
                  <p class="lower-message__content">
                    ${message.content}
                  </p>
                  <p>
                    ${image}
                  </p>
                  </div>`;
    return html;
  };
  $('#new_message').on("submit", function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      type:'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildMessage(data);
      $(".messages").append(html);
      $('.form__submit').prop('disabled', false);
      $(".messages").animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')
      $(".new_message")[0].reset();
    })
    .fail(function(){
      alert('メッセージが送れませんでした');
      $('.form__submit').prop('disabled', false);
    })
  });

  let reloadMessages = function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {

      last_message_id = $('.message:last').data('id');
      $.ajax({
        url: 'api/messages',
        type:"get",
        dataType:'json',
        data:{id: last_message_id}
      })
      .done(function(messages){
        let insertHTML = '';
        messages.forEach(function(message) {
          insertHTML = buildMessage(message)
          $(".messages").append(insertHTML);
          $(".messages").animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')
          
        })
        
      })
      .fail(function(){
        alert('通信エラー')
      });
    };
  };
    setInterval(reloadMessages, 5000);
});

