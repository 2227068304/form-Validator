import regular from './regular'

const userCheck = function (rule, value, callback) {
  let reg = regular.special
  if (reg.test(reg)) {
    callback(new Error('用户名不能包含特殊字符'))
  } else {
    callback()
  }
}
const cellphoneCheck = function ((rule, value, callback)
{
  let reg = regular.cellphone
  if (reg.test(reg)) {
    callback(new Error('非有效电话号码！'))
  } else {
    callback()
  }
}
export {
  userCheck,
  cellphoneCheck
}
