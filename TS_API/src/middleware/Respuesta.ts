import { Request } from "express";

class Respuesta{
    private params: any;
    private message: String;
    private sign: String;

    constructor(req: Request, message: String, sign: String){
        this.params=req.params;
        this.message=message;
        this.sign=sign;
    }
}

export default Respuesta;