
$(function() {
  function buildMessage(message){
    let html = `<div class="message">
                  <div class="message__upper-info__talker">
                    ${ message.user_name }
                      <div class="message__upper-info__date">
                        ${message.time}            
                      </div>
                  </div>
                  <div class="message__text">
                    <p class="lower-message__content">
                      ${message.content}                     
                    </p>
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on("submit", function(e) {
    e.preventDefault();
    let formData = new FormData(this)
    let url = $(this).attr('action');
    $.ajax({
      type:'POST',
      url: url,
      data: formData,
      datatype:  'json',
      processData: false,
      contentType: false
    })
    .fail(function(){
      alert('メッセージが送れませんでした');
      $('.form__submit').prop('disabled', false);
    })
    .done(function(data){
      let html = buildMessage(data);
      $(".messages").append(html);
      $('.form__submit').prop('disabled', false);
      $(".messages").animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')
      $(".form__message").val('');
      $(".form__message")[0].reset();
    })
  });
});

12334