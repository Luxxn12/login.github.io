import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const userGet = async (req: NextApiRequest, res: NextApiResponse) => {
    const {userId} = req.query
    const data = await prisma.user.findUnique({
        where: {
            id: Number(userId)
        }
    })

    res.status(200).json(data)
}

export default userGet