const dbConnection = require('./../db_connection')

const deletePledgeToUser = (userId, pledgeId) => {
  return dbConnection
    .query(
      'DELETE FROM pledge_to_user WHERE pledge_id = $1 AND user_id =$2',
      [userId, pledgeId]
    )
}

module.exports = deletePledgeToUser
