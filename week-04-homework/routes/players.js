import express from "express";

const players = [
  { name: "차범근", speed: 100, shouting: 100, grade: "s" },
  { name: "메시", speed: 100, shouting: 100, grade: "s" },
  { name: "호날두", speed: 100, shouting: 100, grade: "s" },
];
const router = express.Router();

router.post("/player", async (req, res) => {
  const { name, speed, shouting, grade } = req.body;
  players.push({
    name: name,
    speed: speed,
    shouting: shouting,
    grade: grade,
  });
  res.status(200).json({ message: "플레이어 추가 완료" });
});

router.get("/player", async (req, res) => {
  res.status(200).json({ players });
});

router.put("/player/:index", async (req, res) => {
  const index = req.params.index;
  const { speed, shouting, grade } = req.body;

  if (index >= 0 && index < players.length) {
    players[index] = {
      name: players[index].name,
      speed: speed,
      shouting: shouting,
      grade: grade,
    };
    res.status(200).json({ message: "플레이어 정보가 변경되었습니다." });
  } else {
    res.status(404).json({ message: "플레이어가 없습니다." });
  }
});

router.delete("/player/:index", async (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < players.length) {
    players.splice(index, 1);
    res.status(200).json({ message: "플레이가 삭제되었습니다." });
  } else {
    res.status(404).json({ message: "플레이어가 없습니다." });
  }
});

export default router;
