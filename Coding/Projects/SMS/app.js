const sms = require('nexmo');

const nex = new sms({
  apiKey: '78a7b9bc',
  apiSecret: '0xUqlH9o30WKXNtD'
})

nex.message.sendSms('Kilometres', '447460741964', 'Oi Oi')
