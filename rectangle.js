    /**
    * 保留小数点后第 n 位
    *
    * @param x 做近似处理的数
    * @param n 小数点后第 n 位
    * @returns 近似处理后的数
    */
    function roundFractional(x, n) {
      return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }

$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  $btnCal.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());

    var p = 2 * (w + h),
        a = w * h;

    $perimeter.val(roundFractional(p, 3));
    $area.val(roundFractional(a, 3));
  });

});

