import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    // CREATE USER
    /**
    const user = await prisma.user.create({
        data: {
        name: 'Shahjalal Hazari',
        email: 'shahjalal.hazari@example.com',
        },
    });
    
    // console.log(user);
    */


    // GET ALL USERS
    const users = await prisma.user.findMany();
    console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });