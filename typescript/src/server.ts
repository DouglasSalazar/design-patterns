
import express, { Express }  from "express";
import cors from "cors";
import { routers } from "./routers";

const port = 3000;
const app : Express = express();

app.use(express.json());
app.use(cors());

app.use(routers);

app.listen(port, () => console.log(`Running on port ${port}`))