import { PrismaClient } from "@prisma/client";

let: PrismaClient;

if(process.env.NODE_ENV === 'production'){
   prisma = new PrismaClient(); 
}else{
    let globalWithPrisma
}