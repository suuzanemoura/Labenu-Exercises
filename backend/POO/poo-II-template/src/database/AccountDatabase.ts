import { TAccountDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
    public static TABLE_ACCOUNTS = "accounts"

    public async findAccounts():Promise<TAccountDB[]>{
        const accountsDB: TAccountDB[] = await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS)    
        return accountsDB
    }

    public async findAccountById(id: string):Promise<TAccountDB | undefined>{
        const [accountDB]: TAccountDB[] | undefined[] = await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS).where({id: id})

        return accountDB
    }

    public async insertAccount(newAccount:TAccountDB):Promise<void>{
        await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS).insert(newAccount)
    }

    public async editBalanceAccount(newBalance:number, id:string):Promise<void>{
        await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS).update({balance: newBalance}).where({id: id})
    }
}