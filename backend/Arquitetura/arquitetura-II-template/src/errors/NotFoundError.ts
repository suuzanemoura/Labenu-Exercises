import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError{
    constructor(
        message: string = "Dados não encontrados"
    ){
        super(404, message)
    }
}