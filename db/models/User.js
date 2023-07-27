import { UserModel } from "../schemas/user.js";

class User {
  static async create({ USER }) {
    const NEW_USER = await UserModel.create(USER);
  }
  static async findByOid({ oid }) {
    const USER = await UserModel.findOne({ _id: oid });
    return USER;
  }
  static async findByid({ id }) {
    const USER = await UserModel.findOne({ id: id });
    return USER;
  }
  static async updateId({ oid, id }) {
    const FILTER = { _id: oid };
    const UPDATE = {
      $set: { id },
    };
    const OPTION = { returnOriginal: false };

    const UPDATED = await UserModel.findOneAndUpdate(FILTER, UPDATE, OPTION);

    console.log(UPDATED);

    return UPDATED;
  }
}

export { User };
