import { Request, Response, NextFunction, Router } from "express";
import IController from "../Interfaces/controller.interface";
import Respuesta from "../middleware/Respuesta";

class Calculadora implements IController {
    public path: string;
    public router: Router;

    constructor() {
        this.router = Router();
        this.path = "/calc";
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get(`${this.path}`, this.getPrincipal);
        this.router.get(`${this.path}/sum/:v1/:v2`, this.getSum);
        this.router.get(`${this.path}/div/:v1/:v2`, this.getDiv);
    }

    private getPrincipal(req: Request, res: Response): void {
        res.status(200).json({
            msg: "API para calculadora"
        })
    }

    private getSum(req: Request, res: Response, next: NextFunction): void {

        let val1 = Number(req.params.v1);
        let val2 = Number(req.params.v2);

        if (isNaN(val1) || isNaN(val2)) {
            next(new Error("Ambos valores deben de ser un numero"));
            return;
        }

        if (val1 < 0 || val2 < 0) {
            next(new Respuesta(req, "Ambos valores deben de ser mayores a 0", "Firmado por TypeScript"));
            return;
        }

        res.status(200).json({
            result: val1 + val2
        })

    }

    private getDiv(req: Request, res: Response, next: NextFunction): void {

        let val1 = Number(req.params.v1);
        let val2 = Number(req.params.v2);

        if (isNaN(val1) || isNaN(val2)) {
            next(new Error("Ambos valores deben de ser un numero"));
            return;
        }

        if (val2===0) {
            next(new Respuesta(req, "Denominador no puede se 0", "Firmado por TypeScript"));
            return;
        }

        res.status(200).json({
            result: val1 / val2
        })

    }

}

export default Calculadora;