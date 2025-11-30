import express , {Request, Response} from "express";
import dotenv from "dotenv";
import path from "path";
const app = express()
const port = 5000;

dotenv.config({ path: path.join(process.cwd(), ".env") });
// parser
app.use(express.json());
// app.use(express.urlencoded());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Next level!')
})

app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.status(201).json({
        success: true,
        message: "Api is working",
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
