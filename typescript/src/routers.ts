import express from "express";
import { BuilderController } from "./controllers/BuilderController";
import { FactoryController } from "./controllers/FactoryController";
import { SingletonController } from "./controllers/SingletonController";
import { Product } from "./patterns/Builder";


const routers = express.Router();

routers.get("/singleton", async (request, response) => {
    try {
        const comparation: String = SingletonController.execute();
        return response.status(200).send({response: comparation})

    } catch(err) {
        return response.status(400).send({ err: err});
    }
});

routers.get("/builder", async (request, response) => {
    try {
        const comparation: Product[] = BuilderController.execute();
        return response.status(200).send({response: comparation})

    } catch(err) {
        return response.status(400).send({ err: err});
    }
});

routers.post("/factory", async (request, response) => {
    try {
        const typePolygon = request.body.typePolygon;
        const NumberOfSides: Number = FactoryController.execute(typePolygon);
        return response.status(200).send({response: NumberOfSides})

    } catch(err) {
        return response.status(400).send({ err: err});
    }
});

export { routers };