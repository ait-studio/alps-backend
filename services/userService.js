import { User } from "../db/index.js";
import console_logger from "../middlewares/console_logger.js";

class userHandle {
  static async addUser({ name, id }) {
    if (!name)
      console_logger(
        "Service Error",
        "UserService : no name for addUser method",
        true
      );
    else if (!id)
      console_logger(
        "Service Error",
        "UserService : no id for addUser method",
        true
      );
    // Skipped user validating
    const NEW_USER = {
      name,
      id,
    };
    const CREATED_USER = await User.create({ USER: NEW_USER });
    console_logger("Service Info", "UserService : user created", false);
    console.log(CREATED_USER);

    return true;
  }
  static async getId({ oid }) {
    if (!oid)
      console_logger(
        "Service Error",
        "UserService : no oid for getId method",
        true
      );

    const USER = await User.findByOid({ oid });

    if (!USER?.id) {
      console_logger(
        "Service Error",
        "UserService : There is no id field at USER data",
        true
      );
      console.log("User info : ", USER);
      return false;
    }

    return USER.id;
  }
  static async updateId({ oid, id }) {
    if (!oid)
      console_logger(
        "Service Error",
        "UserService : no oid for updateName method",
        true
      );
    if (!id)
      console_logger(
        "Service Error",
        "UserService : no name for updateName method",
        true
      );

    const UPDATED = await User.updateId({ oid, id });
    if (!UPDATED) console_logger("Service Error", "Update name failed", true);
    return UPDATED;
  }
}

export { userHandle };
