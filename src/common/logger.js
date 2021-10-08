const { createLogger, transports, format } = require('winston')

const config = require('./config')

let temp
if (config.app.environment === 'production') {
  temp = [
    new transports.File({
      filename: config.app.combinedLogPathFile || 'logs/combined.log'
    }),
    new transports.File({
      filename: config.app.errorLogPathFile || 'logs/error.log',
      level: 'error'
    })
  ]
} else {
  temp = [new transports.Console()]
}

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'consumer' },
  transports: temp
})

module.exports = logger
