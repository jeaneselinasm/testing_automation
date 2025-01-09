const midtransClient = require('midtrans-client')

const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: 'SERVER_KEY',
    clientKey: 'CLIENT_KEY'
})

module.exports = snap