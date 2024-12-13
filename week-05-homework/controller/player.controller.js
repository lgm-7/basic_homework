import { prisma } from "../uts/prisma/index.js";

const creatplayer = async (req, res) => {
  const { name, speed, shooting, grade } = req.body;
  await prisma.players.create({
    data: {
      name,
      speed,
      shooting,
      grade,
    },
  });
  res.status(200).json({ message: "플레이어 추가 완료" });
};

const getplayer = async (req, res) => {
  const players = await prisma.players.findMany();
  res.status(200).json({ players });
};

const updateplayer = async (req, res) => {
  const id = req.params.id;
  const { speed, shooting, grade } = req.body;

  const player = await prisma.players.findUnique({
    where: {
      id: +id,
    },
  });
  if (!player) {
    res.status(404).json({ message: "플레이어가 없습니다." });
  }
  await prisma.players.update({
    where: {
      id: player.id,
    },
    data: {
      speed: speed,
      shooting: shooting,
      grade: grade,
    },
  });
  res.status(200).json({ message: "플레이어 정보가 변경되었습니다." });
};

const deleteplayer = async (req, res) => {
  const id = req.params.id;
  const player = await prisma.players.findUnique({
    where: {
      id: +id,
    },
  });
  if (!player) {
    res.status(404).json({ message: "플레이어가 없습니다." });
  }
  await prisma.players.delete({
    where: {
      id: player.id,
    },
  });
  res.status(200).json({ message: "플레이어가 삭제되었습니다." });
};

export { creatplayer, getplayer, updateplayer, deleteplayer };
