const express = require('express')
const path = require('path')
const config = require('./common/config')
const logger = require('./common/logger')
const jsonStream = require('./stream/json-stream-consumer')
const csvStream = require('./stream/csv-stream-consumer')

const app = express()
app.use(express.json())
app.get('/json', async (_, res) => {
  await jsonStream.execute(path.resolve(__dirname, '..', 'files', 'MOCK_DATA.json'), (data) => console.log(data))
  return res.send('ok')
})
app.get('/csv', async (_, res) => {
  await csvStream.execute(path.resolve(__dirname, '..', 'files', 'MOCK_DATA.csv'), (data) => console.log(data))
  res.send('ok')
})

app.listen(config.app.port, async () => {
  logger.info(`server.js - Servidor rodando na porta ${config.app.port}`)
})
