const fs = require('fs')
const csvParser = require('csv-parser')

const execute = async (path, cb) => {
  const stream = fs.createReadStream(path)

  const parsedStream = stream.pipe(csvParser())

  for await (const chunk of parsedStream) {
    await cb(chunk)
  }
}

module.exports = {
  execute
}
