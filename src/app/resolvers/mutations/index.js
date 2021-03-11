let mutations={

}

const modules = [
  require('./auth'), 
  require('./user'),
  require('./news'),
  require('./opening'),
  require('./course'),
  require('./talk'),
  require('./book'),
  require('./these'),
  require('./publication'),
  require('./member'),
  require('./upcoming'),
  require('./project'),
]

modules.forEach((module) => {
  mutations = { ...mutations, ...module }
})

module.exports = { ...mutations }
