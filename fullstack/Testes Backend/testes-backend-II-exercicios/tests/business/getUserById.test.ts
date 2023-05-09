import { UserBusiness } from "../../src/business/UserBusiness"
import { GetUserByIdSchema } from "../../src/dtos/user/getUserById.dto"
import { USER_ROLES } from "../../src/models/User"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando getUsers", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  )

  test("Deve retornar um user", async () => {
    const input = GetUserByIdSchema.parse({
        id: "id-mock-astrodev",
        token: "token-mock-astrodev"
    })

    const output = await userBusiness.getUserById(input)

    expect(output).toEqual(
      {
        user: {
          id: "id-mock-astrodev",
          name: "Astrodev",
          email: "astrodev@email.com",
          createdAt: expect.any(String),
          role: USER_ROLES.ADMIN
        }
      }
    )
  })

})