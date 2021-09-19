import express from "express";
import { resolve } from "path";

const PORT = 3000;

import { render } from "./react-renderer";
const routes = ["/", "/product-list","/product-detail"];

const router = express.Router();

const app = express();

router.get("*", render(routes));

app.use(express.static(resolve(__dirname, "../build")));
app.use(express.static(resolve(__dirname, "../public")));

app.use(render(routes));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
