/* exported Rectangle, validate, roundFractional, isLegalKey */
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

/**
 * 检查按键是否合法
 *
 * @param key 键盘按键
 * @param content 文本框中已有的内容（字符串）
 * @param pos 文本框中光标位置
 * @returns {bool} 按键是否合法，true 合法，false 非法
 */
function isLegalKey(key, content, pos) {
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(key)) {
    return false;
  }

  if(key === '.') {
    if(pos === 0 || content.indexOf('.') !== -1) return false;

    if(pos === 1 && content.substring(0,1) === '-') return false;
  }

  if(key === 'e') {
    if(pos === 0 || content.indexOf('e') !== -1 
        || content.indexOf('E') !== -1) return false;

    if(pos === 1 && content.substring(0,1) === '-') return false;
  }

  if(key === 'E') {
    if(pos === 0 || content.indexOf('e') !== -1 
        || content.indexOf('E') !== -1) return false;

    if(pos === 1 && content.substring(0,1) === '-') return false;
  }

  return true;
}
