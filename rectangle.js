/* global Rectangle, validate, isLegalKey, $forkMeGH, $bszPageFooter: true */
$(() => {
  let $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      isPassValidate = false;

  $forkMeGH.show('https://github.com/wangding/rectangle');
  $bszPageFooter.show('body');

  $width.focusout(() => {
    let result = validate($width.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $widthValidate.html('宽度' + result.reason);
      $width.select();
    } else {
      $widthValidate.html('');
    }
  });

  $width.keypress((e) => {
    if(!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
      e.preventDefault();
    }
  });

  $height.focusout(() => {
    let result = validate($height.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $heightValidate.html('高度' + result.reason);
      $height.select();
    } else {
      $heightValidate.html('');
    }
  });

  $height.keypress(function(e) {
    if(!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
      e.preventDefault();
    }
  });

  $btnCal.click(() => {
    if(!isPassValidate) return;

    let w = $width.val(),
        h = $height.val();

    let r = new Rectangle(w, h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
