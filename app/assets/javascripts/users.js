$(function() {
  function addUser(user){
    let html = `
      <div class="chat-group-user.clearfix">
          <p class="chat-group-user__name">${user.name}</p>
          <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
        </div>
      `;
      $('#user-search-result').append(html);
  }

  function addNoUser() {
    let html = `
    <div class="chat-group-user.clearfix">
      <p class="chat-group-user__name">ユーザーが見つかりません</p>
    </div>
    `;
    $('#user-search-result').append(html);
  }

  function addDeleteUser(name, id) {
    let html = `
    <div class="ChatMember.clearfix" id="${id}">
      <p class="ChatMember__name">${name}</p>
      <div class="ChatMember__remove ChatMember__button" data-user-id="${id}" data-user-name="${name}">削除</div>
    </div>`;
    $('.js-add-user').append(html);
  }

  function addMember(userId) {
    let html = `<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
    $(`#${userId}`).append(html);
 
  }
  $('#user-search-field').on("keyup", function(){
    let input = $('#user-search-field').val();
    let url = '/users'
    $.ajax({
      type: 'GET',
      url: url,
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $('#user-search-result').empty();
      
      if (users.length !== 0) {
        users.forEach(function(users){
          addUser(users);
        });
      } else if (input.length == 0) {
          return false;
        }else {
          addNoUser();
        }
      })
      .fail(function(){
        alert('通信エラー')
      });
    });
    $(document).on("click", ".chat-group-user__btn--add", function() {
      const userName = $(this).attr("data-user-name");
      const userId = $(this).attr("data-user-id");
        $(this).parent().remove();
      addDeleteUser(userName, userId);
      addMember(userId);
    });
    $(document).on("click", ".ChatMember__button", function() {
      $(this).parent().remove();
    });
  });