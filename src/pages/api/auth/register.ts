import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient

const register = async ( req: NextApiRequest, res:NextApiResponse) => {
    if (req.method == "POST") {
        const body = req.body

        const cekEmail = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })

        if (cekEmail) return res.status(403).end()

        await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password,
            }
        })

        res.status(201).end()
    }
}
export default register