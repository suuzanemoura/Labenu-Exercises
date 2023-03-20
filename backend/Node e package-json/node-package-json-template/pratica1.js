import { countries } from "./countries.js";

const query = process.argv[2];

if (!query) {
  console.log("Faltou o argumento esperado");
} else {
  const result = countries.find((country) =>
    country.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log(result);
}
