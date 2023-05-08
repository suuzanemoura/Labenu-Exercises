import { users } from "../src/exercicio3"

describe("Testes do exercicio3.ts", () => {

    test("", () => {
        expect(users.find((user) => user.name === "Astrodev")).toMatchObject({
            name: "Astrodev",
          });
    })

})