import express from "express";
import routers from "./routers.js";

const app = express();

app.use(express.json()); //body데이터를 json으로 변환

app.use("/api", routers);

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
