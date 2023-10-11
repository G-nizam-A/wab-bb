const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  // await prisma.contact.create({
  //   data: {
  //     name: 'Alice',
  //     phone: 12345678,
  //    },
  // });
  // await prisma.contact.create({
  //   data: {
  //     name: 'Alice',
  //     phone: 1234256790,
  //   },
  // })

  // const post = await prisma.contact.update({
  //   where: { phone: 1234256790 },
  //   data: { name:'nizam' },
  // })
  
  // const postDelete = await prisma.contact.delete({
  //   where: { phone: 1234256790 }
  // })


  // const allUsers = await prisma.contact.findMany()
  // console.log(allUsers)
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

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
