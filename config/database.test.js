'use-strict'
const { test, expect } = require('@jest/globals')
const database = require('./database')

test('Connection Database', async () => {
  const connection = await database.connect()
  expected(connection).toBeTruthy()
})

test('Disconnecting Database', async () => {
  const isDisconnected = await database.disconnected()
  expected(isDisconnected).toBeTruthy()
})