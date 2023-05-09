import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { SignupSchema } from "../../src/dtos/user/signup.dto"

describe("Testando método login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test ("deve gerar um token ao se registrar", async () => {
        const input = SignupSchema.parse({
            name: "Marcelo",
            email: "marcelo@email.com",
            password: "marcelo123"
        })

        const output = await userBusiness.signup(input)

        expect(output).toEqual({
            message: "Cadastro realizado com sucesso",
            token: "token-mock"
        })
    })
})