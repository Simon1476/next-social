import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

let prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.CURRENT_ENV == "production") {
  prisma = new PrismaClient();
} else {
  globalForPrisma.prisma = prisma;
}

export default prisma;

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
