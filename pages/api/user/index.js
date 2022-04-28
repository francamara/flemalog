import { PrismaClient } from '@prisma/client'
import sendEmail from '../../../helpers/mail'

export default function handler(req, res) {
  if (req.method === 'GET') {
    sendEmail()
    res.status(200).json({ message: 'Success' })
  }
}
