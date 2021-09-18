import express from "express";
import { resolve } from "path";

const PORT = 3000;

import { render } from "./react-renderer";
const routes = ["/", "/product-list","/product-detail"];

const app = express();

app.get("*", render(routes));

app.use(express.static(resolve(__dirname, "../../build")));
app.use(express.static(resolve(__dirname, "../../public")));

app.use(render(routes));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
