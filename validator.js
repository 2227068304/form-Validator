import regular from './regular'

const userCheck = function (rule, value, callback) {
  let reg = regular.special
  if (!reg.test(value)) {
    callback(new Error('用户名不能包含特殊字符'))
  } else {
    callback()
  }
}
const passwordCheck = function (rule, value, callback) {
  let reg = regular.twoPassword
  if (!reg.test(value)) {
    callback(new Error('密码至少含有字母、数字、特殊字符中的两种'))
  } else {
    callback()
  }
}
const cellphoneCheck = function (rule, value, callback) {
  let reg = regular.cellphone
  if (!reg.test(value)) {
    callback(new Error('非有效电话号码！'))
  } else {
    callback()
  }
}
export {
  userCheck,
  cellphoneCheck,
  passwordCheck
}
