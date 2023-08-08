import { Request, Response, NextFunction, Router } from "express";
import IController from "../Interfaces/controller.interface";
import cookieParser from "cookie-parser";


class Authentication implements IController {
    path: string;
    router: Router;

    constructor() {
        this.path = "/auth"
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/login`, this.login)
        this.router.get(`${this.path}/verify`, this.middle, this.verifyLogin)
        this.router.get(`${this.path}/logout`, this.logout)
    }

    private login(req: Request, res: Response, next: NextFunction) {
        
        if (req.body.user === "dgg" && req.body.password === "123") {
            res
            .status(200)
            .cookie("algo", "valor de la cookie", {
                maxAge: 60000,
                expires: new Date(Date.now() + 60000),
            })
            .json({
                msg: "ok"
            });
        } else {
            res.status(401)
            .json({
                msg: "Incorrecto"
            }); 
        }
    }

    private verifyLogin(req: Request, res: Response, next: NextFunction) {

        
            res.status(200)
            .json({
                response: "La sesion esta activa " + req.headers.cookie
            })
        
    }
    
    private logout(req: Request, res: Response, next: NextFunction){
        res.status(200)
        .clearCookie("algo")
            .json({
                response: "Ok "
            })
    }

    private middle(req: Request, res: Response, next: NextFunction) {
        console.log(req.headers.cookie)
        if(req.cookies.algo)
            next()
        else
            res.json({
                msg: "no autorizado"
            })
    }

}

export default Authentication;