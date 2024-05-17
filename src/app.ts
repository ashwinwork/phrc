import * as cors from "cors";
import * as express from "express";
import userRouter from "./routes/user";
import adminRouter from './routes/admin'; 
import websiteRouter from './routes/website';
import cookieParser = require("cookie-parser");
import path = require("path");
const app = express();

app.set("static", path.join(__dirname, "static"));
app.set('view engine', 'ejs');
app.set('views', 'src/static')
app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'static/src/static')));


app.use("/",websiteRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);


app.use(express.urlencoded({ extended: true }));

// this is for 404
// app.use(function (req, res, next) {
//   res.status(404).send(" route not found");
// });

export default app;