import { countries } from "./countries.js";

const name = process.argv[2];
const code = process.argv[3];

if (!name || !code) {
  console.log("Faltou o name ou o code esperado");
} else {
  const newCountry = {
    name,
    code,
  };
  countries.push(newCountry);
  console.log(countries[countries.length - 1]);
  console.log(countries);
}
