import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const listRole = [
  {
    id: 1,
    name: "user",
  },
  {
    id: 2,
    name: "admin",
  },
  {
    id: 3,
    name: "super admin",
  },
];

export const seeder_user_role = async () => {
    for(let item of listRole){
        await prisma.masterRole.upsert({
            where: {
                id: item.id
            },
            create: item,
            update: {
                name: item.name
            }
        })
    }

    console.log("seeder user role success")
};




