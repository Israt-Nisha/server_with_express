import express , {NextFunction, Request, Response} from "express";
import dotenv from "dotenv";
import path from "path";
const app = express()
const port = 5000;

dotenv.config({ path: path.join(process.cwd(), ".env") });
// parser
app.use(express.json());
// app.use(express.urlencoded());

// logger middleware
// const logger = (req: Request, res: Response, next: NextFunction) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
//   next();
// };

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Next level!')
})

app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.status(201).json({
        success: true,
        message: "Api is working",
    })
});


app.get("/users", async (req: Request, res: Response) => {
  try {
    // const result = await pool.query(`SELECT * FROM users`);

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      datails: err,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
