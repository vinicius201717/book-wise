import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const books = await prisma.post.findMany({
    include: {
      assessments: true,
    },
  })

  return res.status(200).send(books)
}
