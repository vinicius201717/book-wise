import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).end()
    return
  }

  const { category } = req.query

  if (typeof category !== 'string') {
    res.status(400).json({ error: 'Invalid name parameter' })
    return
  }

  try {
    const categoryId = await prisma.category.findFirst({
      where: {
        name: category,
      },
    })

    if (categoryId === null) {
      res.status(404).json({ error: 'Category not found' })
      return
    }

    const data = await prisma.post.findMany({
      include: {
        category: true,
        assessments: true,
      },
      where: {
        categoryId: categoryId.id,
      },
    })

    res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
