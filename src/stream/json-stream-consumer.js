const fs = require('fs')
const { parser: jsonParser } = require('stream-json')
const { streamArray } = require('stream-json/streamers/StreamArray')
const delay = require('../common/delay')

const execute = async (path, cb) => {
  const stream = fs.createReadStream(path)

  const parsedStream = stream.pipe(jsonParser()).pipe(streamArray())

  for await (const chunk of parsedStream) {
    await delay.execute(300) // Delay simulator
    await cb(chunk.value)
  }
}

module.exports = {
  execute
}
