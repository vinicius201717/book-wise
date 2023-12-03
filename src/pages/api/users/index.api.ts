import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, email } = req.body

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  })

  console.log(user)

  return res.status(201).send(user)
}
