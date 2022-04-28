const AWS = require('aws-sdk')
const config = require('../../config')

function sendEmail() {
  console.log('test')
  AWS.config.update({
    accessKeyId: config.aws.access,
    secretAccessKey: config.aws.secret,
    region: config.aws.region
  })

  const params = {
    Source: 'flemanoreply@protonmail.com',
    Destination: {
      ToAddresses: [
        'francamaradev@gmail.com'
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
          Charset: 'UTF-8',
          Data: 'HTML_FORMAT_BODY'
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'TEXT_FORMAT_BODY'
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Test email'
      }
    },
  }

  new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise()
}



module.exports = sendEmail
