const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const client = new PrismaClient();
// 유저생성
router.post("/", async (req, res) => {
  try {
    const { account } = req.body;

    const existUser = await client.user.findUnique({
      where: {
        account,
      },
    });
    if (existUser) {
      return res
        .status(400)
        .json({ ok: false, error: "Already exist account." });
    }
    console.log(existUser);
    // 비동기 함수로 만들어서 데이터 받기
    const user = await client.user.create({
      data: {
        account,
      },
    });
    console.log(user);

    res.json({ ok: true, user });
  } catch (error) {
    console.error(error);
  }
});

//유저 조회
router.get("/:account", async (req, res) => {
  try {
    const { account } = req.params;

    const user = await client.user.findUnique({
      where: {
        account,
      },
    });

    if (!user) {
      return res.status(400).json({
        ok: false,
        error: "Not exist user.",
      });
    }

    console.log(account);
    res.json({ ok: true, user });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
