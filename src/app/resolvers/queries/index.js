let queries = {

}

const modules = [
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
  require('./media'),
]

modules.forEach((module) => {
  queries = { ...queries, ...module }
})

module.exports = { ...queries }
