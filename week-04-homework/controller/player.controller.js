import players from '../model/player.model.js'

const creatplayer = (req, res) => {
    const { name, speed, shouting, grade } = req.body;
    players.push({
      name: name,
      speed: speed,
      shouting: shouting,
      grade: grade,
    });
    res.status(200).json({ message: "플레이어 추가 완료" });
  }

const getplayer = (req, res) => {
  res.status(200).json({ players });
}

const updateplayer = (req, res) => {
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
}

const deleteplayer = (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < players.length) {
    players.splice(index, 1);
    res.status(200).json({ message: "플레이어가 삭제되었습니다." });
  } else {
    res.status(404).json({ message: "플레이어가 없습니다." });
  }
}

export {creatplayer, getplayer, updateplayer, deleteplayer}