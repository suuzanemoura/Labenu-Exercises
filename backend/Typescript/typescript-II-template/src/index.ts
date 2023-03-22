/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades nickname e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

//1.1
type TPerson = {
    id: number | string,
    name: string,
    email: string,
    password: string,
    role: ROLE
}

//1.2
type TAdminAccount = {
    nickName: string,
    permission: true
}

type TNormalAccount = {
    nickName: string,
    permission: false
}


/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 

//2.1
enum ROLE { //valores pré-definidos (que não podem serem mudados)
    ADMIN = "Admin",
    NORMAL = "Normal"
}
//2.2
type TPersonAdmin = TPerson & TAdminAccount
type TPersonNormal = TPerson & TNormalAccount
//1.3
const userAdmin: TPersonAdmin = {
    id: 1,
    name: "Suzane",
    email: "suzane@gmail.com",
    password: "Su123456",
    role: ROLE.ADMIN,
    nickName: "Su",
    permission: true
}

const userNormal: TPersonNormal = {
    id: 2,
    name: "Bryan",
    email: "bryan@gmail.com",
    password: "Bryan123456",
    role: ROLE.NORMAL,
    nickName: "Kairin",
    permission: false
}

//2.3

const arrayPersonRole: Array<TPersonAdmin | TPersonNormal> = [userAdmin, userNormal]
const arrayPersonRoles: (TPersonAdmin | TPersonNormal)[] = [userAdmin, userNormal]

console.log(arrayPersonRoles)