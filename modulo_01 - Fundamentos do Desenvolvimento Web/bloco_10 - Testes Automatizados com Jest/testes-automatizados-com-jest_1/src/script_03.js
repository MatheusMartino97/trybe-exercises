const techList = (techs, name) => techs.length ? techs.sort().map(tech => ({ tech, name })) : 'Vazio!'

module.exports = techList
