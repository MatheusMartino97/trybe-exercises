const isParamMissing = (param) => !param

const returnParamMissingObject = (type, param) => ({
  type,
  message: `Favor incluir o parâmetro: ${ param.toUpperCase() }.`
})

module.exports = {
  isParamMissing,
  returnParamMissingObject
}