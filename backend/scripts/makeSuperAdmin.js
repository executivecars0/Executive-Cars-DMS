const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const email = 'executivecars063@gmail.com';
  const user = await prisma.user.update({
    where: { email: email.toLowerCase() },
    data: { role: 'SUPER_ADMIN' }
  });
  console.log(`🎉 User ${user.email} role updated to: ${user.role}`);
}

main()
  .catch((err) => {
    console.error('Error updating user role:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
