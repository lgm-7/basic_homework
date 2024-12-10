import express from "express";
import {creatplayer, getplayer, deleteplayer, updateplayer} from "../controller/player.controller.js"


const router = express.Router();

//플레이어 추가
router.post("/player", creatplayer);

//플레이어 조회
router.get("/player", getplayer);

//플레이어 이름제외 정보수정
router.patch("/player/:index", updateplayer);

//플레이어 삭제
router.delete("/player/:index", deleteplayer);

export default router;
