const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ALTERO ARQUIVO schema.prisma
// EXECUTO
/*
npx prisma migrate save --name init --experimental
npx prisma migrate up --experimental
npx prisma generate   // para atualizar typescript
*/

async function store() {
  const user = await prisma.usuarios.create({
    data: {
      nome: "Andreas",
      email: "andreaslutz@msn.com",
      idade: 33
    }
  });
  console.log(user);
}

async function update() {
  try {
    const user = await prisma.usuarios.update({
      where: { id: 3 },
      data: { nome: "Rafaelli", email: "rafaellism@hotmail.com" }
    });
    console.log(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao atualizar o registro" });
  }
}

async function list() {
  try {
    const user = await prisma.usuarios.findMany({
      where: { nome: "Andreas" }
    });
    console.log(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao atualizar o registro" });
  }
}

module.exports = { store, update, list };
