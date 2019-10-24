const dbConnection = require('./../db_connection')

const deletePledgeToUser = (userId, pledgeId) => {
  return dbConnection
    .query(
      'DELETE FROM pledge_to_user WHERE user_id =$1 AND pledge_id = $2 ',
      [userId, pledgeId]
    )
}
const updateUserPledgeEnroll = pledgeId => {
  return dbConnection.query(
    'UPDATE pledge SET number_of_enrollement = number_of_enrollement - 1 WHERE pledge_id =$1',
    [pledgeId]
  )
}

module.exports = { deletePledgeToUser, updateUserPledgeEnroll }
