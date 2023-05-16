const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { ClientRequest } = require("http");
/* global deletedTodo */

const router = express.Router();

const client = new PrismaClient();

// nft 생성
router.post("/", async (req, res) => {
  try {
    //req 받아서 구조분해 todo, userId
    const { nft, userId } = req.body;

    //받아온 값이 없을 경우 400에러
    if (!nft || !userId) {
      return res.status(400).json({
        ok: false,
        error: "error!",
      });
    }
    const user = await client.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!user) {
      return res.status(400).json({ ok: false, error: "Not exist user." });
    }
    const newTodo = await client.todo.create({
      data: {
        nft,
        isDone: false,
        userId: user.id,
      },
    });

    res.send({ ok: true, todo: newTodo });
  } catch (error) {
    console.error(error);
  }
});

// 투두 조회
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { skip } = req.body;

    if (!userId) {
      return res.status(400).json({ ok: false, error: "error!" });
    }

    const todos = await client.todo.findMany({
      where: {
        userId: parseInt(userId),
      },
      orderBy: {
        createAt: "desc",
      },
      //몇개 스킵
      //   skip: parseInt(skip),
      //   //출력 갯수
      //   take: 3,
    });

    if (!todos) {
      return res.status(400).json({
        ok: false,
        error: "Not exist user.",
      });
    }
    console.log(todos);
    res.json({ ok: true, todos });
  } catch (error) {
    console.error(error);
  }
});

// // 투두 완료
// router.put("/:id/done", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateTodo = await client.todo.update({
//       where: {
//         id: parseInt(id),
//       },
//       data: {
//         isDone: !updateTodo.isDone,
//       },
//     });
//     console.log(updateTodo);
//     res.json({ ok: true, updateTodo });
//   } catch (error) {
//     console.error(error);
//   }
// });

// 투두 완료
router.put("/:id/done", async (req, res) => {
  try {
    //id params로 받고
    const { id } = req.params;
    const { userId } = req.body;

    //id를 기준으로 todo 테이블에서 조회해서existTodo
    const existTodo = await client.todo.findUnique({
      where: {
        //문자열로 들어오기 때문에 parseInt();
        id: parseInt(id),
      },
    });

    //조회값이 없으면
    if (!existTodo) {
      //에러 출력
      return res.status(400).json({ ok: false, error: "Not exist todo." });
    }
    if (existTodo.userId !== parseInt(userId)) {
      return res.status(400).json({ ok: false, error: "U R not todo owner." });
    }

    //요청한 데이터를 id값을 기준으로 todo 테이블에 isDone 상태 업데이트
    const updatedTodo = await client.todo.update({
      where: {
        id: parseInt(id),
      },
      data: {
        isDone: !existTodo.isDone,
      },
    });

    //결과 반환
    res.json({ ok: true, todo: updatedTodo });
  } catch (error) {
    console.error(error);
  }
});

// 투두 삭제
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    // console.log(id);
    console.log(userId);

    //todo에 id가 존재하는지 체크
    const existTodo = await client.todo.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!existTodo) {
      return res.status(400).json({ ok: false, error: "Not!" });
    }
    //존재하는 userId인지 체크
    if (existTodo.userId !== parseInt(userId)) {
      return res.status(400).json({ ok: false, error: "U R not todo owner." });
    }
    const deletedTodo = await client.todo.delete({
      where: {
        data: { id: parseInt(id) },
        // id: parseInt(userId),
      },
    });
    console.log(deletedTodo);
  } catch (error) {
    console.error(error);
  }

  res.json({ ok: true, todo: deletedTodo });
});

// 투두 삭제
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId } = req.body;

//     const existTodo = await client.todo.findUnique({
//       where: {
//         id: parseInt(id),
//       },
//     });

//     if (!existTodo) {
//       return res.status(400).json({ ok: false, error: "Not exist todo." });
//     }
//     if (existTodo.userId !== parseInt(userId)) {
//       return res.status(400).json({ ok: false, error: "U R not todo owner." });
//     }

//     const deletedTodo = await client.todo.delete({
//       where: {
//         id: parseInt(id),
//       },
//     });

//     res.json({ ok: true, todo: deletedTodo });
//   } catch (error) {
//     console.error(error);
//   }
// });
module.exports = router;
