import { stringToNumber } from "../src/exercicio1"

describe("Testes do exercicio1.ts", () => {

    test("", () => {
        const result = stringToNumber("10")

        expect(result).toBe(10)
    })

    test("", () => {
        const result = stringToNumber("55.5")

        expect(typeof result).toBe("number")

    })

})