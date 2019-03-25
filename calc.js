/* exported Rectangle, validate, roundFractional */
function Rectangle(width, height) {
  var w = Number(width),
      h = Number(height);

  this.area = function() {
    return roundFractional(w * h, 2);
  };

  this.perimeter = function() {
    return roundFractional(2 * (w + h), 2);
  };

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
}

/**
 * 对数据进行合法性校验
 *
 * @param msg 被验证的信息
 * @returns result 有两个字段
 *          isOK boolean 验证通过为 true，验证不通过为 false
 *          reason 验证不通过的理由
 */
function validate(data) {
  var result = {
    isOK: false,
    reason: ''
  };

  if(data === '') {
    result.reason = '不能为空！';
    return result;
  }

  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)) {
    result.reason = '必须是数值';
    return result;
  }

  if(Number(data) < 0) {
    result.reason = '必须大于零';
    return result;
  }

  result.isOK = true;
  return result;
}
