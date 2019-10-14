const dbConnection = require('./../db_connection')

const getNumberPledgesCategory = (categoryName) => {
  return dbConnection
    .query('select * from pledge inner join category on pledge.category_id =category.category_id ')
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getNumberPledgesCategory
