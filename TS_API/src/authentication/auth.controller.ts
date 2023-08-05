import { Request, Response, NextFunction, Router } from "express";
import IController from "../Interfaces/controller.interface";


class Authentication implements IController{
    path: string;
    router: Router;

    constructor(){
        this.path = "/auth"
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/login`, this.login)
    }

    private login(req: Request, res: Response, next: NextFunction){
        res.status(200)
        .json({
            response: "simon"
        })
    }

}

export default Authentication;