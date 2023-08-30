const MongoClient = require('mongodb').MongoClient
let client = null

async function connect(){
  if(client)
    client = new MongoClient(process.env_MONGO_CONNECTION)
  
    await client.connection
  return client.db(process.env.DATABASE)
}

async function disconnect(){
  if(!client) return true
  await client.close()
  client = null
  return true
}

module.exports = { connect, disconnect }