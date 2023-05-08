import { convertDate } from "../src/exercicio2"

describe("Testes do exercicio2.ts", () => {

    test("", () => {
        const result = convertDate("2022/09/26")

        expect(result).toBe("26/09/2022")
    })
})