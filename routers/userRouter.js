import { Router } from "express";
import { userHandle } from "../services/userService.js";
import console_logger from "../middlewares/console_logger.js";

const userRouter = Router();

userRouter.post("/user/create", async (req, res, next) => {
  try {
    const { name, id } = req.body;
    const NEW_USER = await userHandle.addUser({ name, id });

    res.status(201).send({ NEW_USER });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

userRouter.get("/user/id", async (req, res, next) => {
  try {
    const { oid } = req.body;
    const id = await userHandle.getId({ oid });

    if (!id) throw Error("There is no count field in that user data");

    res.status(201).send({ id });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

userRouter.post("/user/update", async (req, res, next) => {
  try {
    const { oid, id } = req.body;
    const updated = await userHandle.updateId({ oid, id });

    res.status(201).send({ updated });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

export { userRouter };
