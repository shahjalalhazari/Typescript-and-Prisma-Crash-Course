import { PrismaClient } from '@prisma/client'

const prima = new PrismaClient()

async function main() {
    // Create User
    const user = await prisma.user.create({
        data: {
            name: "Shahjalal",
            email: "shahjalal@gmail.com"
        }
    })

    console.log(user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })