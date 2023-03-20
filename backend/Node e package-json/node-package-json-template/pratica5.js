const name = process.argv[2];
const age = process.argv[3];

if (!name || !age) {
  console.log("Faltou o nome ou a idade esperada");
} else {
  console.log(
    `Olá, ${name}. Você tem ${age} anos. Em sete anos você terá ${
      Number(age) + 7
    } anos.`
  );
}
