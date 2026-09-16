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
    /**
    const users = await prisma.user.findMany();
    console.log(users);
     */

    // CREATE ARTICLE ASSOCIATE WITH USER
    /** 
    const article = await prisma.article.create({
        data: {
            title: "My First Article",
            content: "This is the content of my first article.",
            author: {
                connect: {
                    id: 2
                }
            }
        }
    });

    console.log(article);
    */

    // GET ALL ARTICLES
    /**
    const articles = await prisma.article.findMany();
    console.log(articles);
     */

    // CREATE USER AND ARTICLE IN A SINGLE TRANSACTION
    /**
    const user = await prisma.user.create({
        data: {
            name: "Sarah Smith",
            email: "sarah.smith@example.com",
            articles: {
                create: {
                    title: "Sarah's First Article",
                    content: "This is the content of Sarah's first article."
                }
            }
        }
    });

    console.log(user);
     */

    // GET ALL THE USERS AND THEIR ARTICLES
    /**
    const users = await prisma.user.findMany({
        include: {
            articles: true
        }
    });
    users.forEach((user) => {
        console.log(`User: ${user.name}, Email: ${user.email}`);
        console.log("Articles:");
        user.articles.forEach((article) => {
            console.log(`- Title: ${article.title}. Content: ${article.content}`);
        })
        console.log("\n");
    })
    */

    // UPDATE USER
    /**
    const user = await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: "John Doe Updated",
        }
    });
    
    console.log(user);
    */

    // DELETE ARICLE
    const article = await prisma.article.delete({
        where: { id: 2 }
    });
    const articles = await prisma.article.findMany();

    console.log(articles);

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });