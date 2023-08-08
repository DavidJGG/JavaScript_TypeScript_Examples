import express from "express";
import IController from "./Interfaces/controller.interface";
import bodyParser from "body-parser";
import { errorMiddleware, respuestaMiddleware } from "./middleware/error.middleware";

class App {

    private app: express.Application;

    constructor(controllers: IController[]) {
        this.app = express();

        this.initMiddlewares();
        this.initializeControllers(controllers);
        this.postMiddleWares();
    }

    private initializeControllers(controllers: IController[]):void{
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        })
    }

    private initMiddlewares(){
        //this.app.use(bodyParser)
        this.app.use(express.json())
    }

    private postMiddleWares(){
        this.app.use(errorMiddleware)
        this.app.use(respuestaMiddleware)
    }

    public startServer():void {
        let PORT = process.env.PORT;
        this.app.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`)
        })
    }

    public getServer(): express.Application {
        return this.app;
    }
}

export default App;