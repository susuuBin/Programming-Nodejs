jQuery(document).ready(function ($) {
  var $form_modal = $('.user-modal'),
  $form_login = $form_modal.find('#login'),
  $form_signup = $form_modal.find('#signup'),
  $form_forgot_password = $form_modal.find('#reset-password'),
  $form_modal_tab = $('.switcher'),
  $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
  $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
  $forgot_password_link = $form_login.find('.form-bottom-message a'),
  $back_to_login_link = $form_forgot_password.find('.form-bottom-message a'),
  $main_nav = $('.main-nav');
  var password =  $form_signup.find("#pwd").val();
  var repeatPassword = $form_signup.find("#repeatPwd").val();

//  //open modal
//  $main_nav.on('click', function (event) {

//   if ($(event.target).is($main_nav)) {
//     // on mobile open the submenu
//     $(this).children('ul').toggleClass('is-visible');
//   } else {
//     // on mobile close submenu
//     $main_nav.children('ul').removeClass('is-visible');
//     //show modal layer
//     $form_modal.addClass('is-visible');
//     //show the selected form
//     $(event.target).is('.signup') ? signup_selected() : login_selected();
//   }

// });

$form_modal.addClass('is-visible');
//show the selected form
login_selected();


  // $('.user-modal').on('click', function (event) {
  //   if ($(event.target).is($form_modal) || $(event.target).is('.close-form')) {
  //     $form_modal.removeClass('is-visible');
  //   }
  // });
  $(document).keyup(function (event) {
    if (event.which == '27') {
      $form_modal.removeClass('is-visible');
    }
  });

  //switch from a tab to another
  $form_modal_tab.on('click', function (event) {
    event.preventDefault();
    $(event.target).is($tab_login) ? login_selected() : signup_selected();
  });

  //hide or show password
  $('.hide-password').on('click', function () {
    var $this = $(this),
    $password_field = $this.prev('input');

    'password' == $password_field.attr('type') ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
    'Show' == $this.text() ? $this.text('Hide') : $this.text('Show');
    //focus and move cursor to the end of input field
    $password_field.putCursorAtEnd();
  });

  //show forgot-password form 
  $forgot_password_link.on('click', function (event) {
    event.preventDefault();
    forgot_password_selected();
  });

  //back to login from the forgot-password form
  $back_to_login_link.on('click', function (event) {
    event.preventDefault();
    login_selected();
  });

  function login_selected() {
    $form_login.addClass('is-selected');
    $form_signup.removeClass('is-selected');
    $form_forgot_password.removeClass('is-selected');
    $tab_login.addClass('selected');
    $tab_signup.removeClass('selected');
  }

  function signup_selected() {
    $form_login.removeClass('is-selected');
    $form_signup.addClass('is-selected');
    $form_forgot_password.removeClass('is-selected');
    $tab_login.removeClass('selected');
    $tab_signup.addClass('selected');
  }

  function forgot_password_selected() {
    $form_login.removeClass('is-selected');
    $form_signup.removeClass('is-selected');
    $form_forgot_password.addClass('is-selected');
  }

  //REMOVE THIS - it's just to show error messages 
  // $form_login.find('input[name="submit"]').on('click', function (event) {
  //   event.preventDefault();
  //   $form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
  // });

   if(password != repeatPassword){
    $form_signup.find("#pwd").on('click', function (event) {
      event.preventDefault();
      $form_signup.find("#repeatPwd").toggleClass('has-error').next('span').toggleClass('is-visible');
      alert(password + " " + repeatPassword);
    });
   }

  if (!Modernizr.input.placeholder) {
    $('[placeholder]').focus(function () {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    }).blur(function () {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function () {
      $(this).find('[placeholder]').each(function () {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      });
    });
  }
});

/* 로그인 유효성 체크 */
function check(){ 
  var id = document.getElementById("member_id");
  var pwd = document.getElementById("pwd");

  if(id.value == ""){
    Swal.fire({
      icon: 'error',
      title: '아이디 오류',
      text: '아이디를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    id.focus();
    return false;
  }

  if(pwd.value == ""){
    Swal.fire({
      icon: 'error',
      title: '비밀번호 오류',
      text: '비밀번호를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    pwd.focus();
    return false;
  }
};

/* 회원가입 유효성 검사 */
function checkAll(){ 
  var sign = document.signup;

  if (sign.member_id.value == ""){
    Swal.fire({
      icon: 'error',
      title: '아이디 오류',
      text: '아이디를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      sign.member_id.focus();
    }, 0);
    return false;
  }

  if(sign.pwd.value == ""){
    Swal.fire({
      icon: 'error',
      title: '비밀번호 오류',
      text: '비밀번호를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      sign.pwd.focus();
    }, 0);
    return false;
  }

  if(sign.repeatPwd.value == ""){
    Swal.fire({
      icon: 'error',
      title: '비밀번호 재확인 오류',
      text: '비밀번호 재확인을 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      sign.repeatPwd.focus();
    }, 0);
    return false;
  }

  /* 비밀번호 일치 */
  if(sign.pwd.value != sign.repeatPwd.value){
    Swal.fire({
      icon: 'error',
      title: '비밀번호 재확인 오류',
      text: '비밀번호가 틀렸습니다. 다시 한 번 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    return false;
  }

  if(sign.name.value == ""){
    Swal.fire({
      icon: 'error',
      title: '성함 오류',
      text: '성함을 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      sign.name.focus();
    }, 0);
    return false;
  }

  /* 전화번호 유효성 */
  // if(sign.phone.value == ""){
    //   Swal.fire({
    //     icon: 'error',
    //     title: '전화번호 오류',
    //     text: '전화번호를 입력해 주세요.',
    //     confirmButtonColor: '#F7C800',
    //     confirmButtonText: '돌아가기'
    //   });
    //   setTimeout(function(){
    //     sign.phone.focus();
    //   }, 0);
    //   return false;
    // }
    
  /* 생년월일 유효성 */
  var yearIdx = $("#year option").index($("#year option:selected"));
  console.log(yearIdx);

  if(yearIdx == 91){
    Swal.fire({
      icon: 'error',
      title: '생년월일 오류',
      text: '태어나신 년도를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    return false;
  }

  var monthIdx = $("#month option").index($("#month option:selected"));
  console.log(monthIdx);

  if(monthIdx == 12){
    Swal.fire({
      icon: 'error',
      title: '생년월일 오류',
      text: '태어나신 월을 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    return false;
  }

  var dayIdx = $("#day option").index($("#day option:selected"));
  console.log(dayIdx);

  if(dayIdx == 31){
    Swal.fire({
      icon: 'error',
      title: '생년월일 오류',
      text: '태어나신 날짜를 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    return false;
  }

  if(sign.animal.value == ""){
    Swal.fire({
      icon: 'error',
      title: '애완동물 오류',
      text: '키우고 계시는 애완동물을 입력해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    setTimeout(function(){
      sign.animal.focus();
    }, 0);
    return false;
  }

  /* 셀렉트 박스 유효성 검사 */
  var cityIdx = $("#add_city option").index( $("#add_city option:selected") );
  console.log(cityIdx);

  if(cityIdx < 1){
    Swal.fire({
      icon: 'error',
      title: '사는 지역 오류',
      text: '사는 지역을 선택해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    return false;
  }

  var guIdx = $("#addr_gu option").index( $("#addr_gu option:selected") );
  console.log(guIdx);

  if(guIdx < 1){
    Swal.fire({
      icon: 'error',
      title: '사는 군이나 도 오류',
      text: '사는 군이나 도를 선택해 주세요.',
      confirmButtonColor: '#F7C800',
      confirmButtonText: '돌아가기'
    });
    return false;
  }
  
  /* 이미지 업로드 유효성 검사 */
  var imgFile = $('#imgFile').val();
  var maxSize = 5 * 1024 * 1024;
  var fileSize;

if($('#imgFile').val() == "") {
  Swal.fire({
    icon: 'error',
    title: '이미지 업로드 오류',
    text: '프로필로 설정하실 이미지를 업로드 해 주세요.',
    confirmButtonColor: '#F7C800',
    confirmButtonText: '돌아가기'
  });
  $("#imgFile").focus();
    return false;
  }
};