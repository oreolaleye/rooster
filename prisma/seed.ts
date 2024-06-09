import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const company1 = await prisma.company.upsert({
    where: { id: 1 },
    update: {},
    create: {
      contactEmail: 'company1@email.io',
      name: 'Company 1',
      address: '1234, somewhere on earth',
      phoneNumber: '1234567890',
      users: {
        create: {
          email: 'user1@company1.com',
          name: 'User1',
        },
      },
    },
  })
  const company2 = await prisma.company.upsert({
    where: { id: 2 },
    update: {},
    create: {
      contactEmail: 'company2@email.io',
      name: 'Company 2',
      address: '4321, somewhere else on earth',
      phoneNumber: '0987654321',
      users: {
        create: {
          email: 'user2@company2.com',
          name: 'User2',
        },
      },
    },
  })

  const availability1 = await prisma.availability.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: 1,
      day: 1,
      hours: 8,
      startAt: '9AM',
      endAt: '5PM',
    },
  });

  const availability2 = await prisma.availability.upsert({
    where: { id: 2 },
    update: {},
    create: {
      userId: 2,
      day: 2,
      hours: 6,
      startAt: '9AM',
      endAt: '3PM',
    },
  });
  console.log({ company1, company2, availability1, availability2 })
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