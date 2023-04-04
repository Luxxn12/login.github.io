import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from "@prisma/client"
import _, {omit} from "lodash"
const prisma = new PrismaClient

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const body = req.body

        const user = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })

        console.log(user?.password, body.password);

        if (!user) return res.status(403).end()

        if (user.password.toString() === body.password.toString()) {
            return res.status(200).json(_.omit(user, ["password"]))
        } else {
            return res.status(402).end()
        }
    }
}

export default login