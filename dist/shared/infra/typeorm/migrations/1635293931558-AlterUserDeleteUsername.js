"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterUserDeleteUsername1635293931558 = void 0;

var _typeorm = require("typeorm");

class AlterUserDeleteUsername1635293931558 {
  async up(queryRunner) {
    await queryRunner.dropColumn("users", "username");
  }

  async down(queryRunner) {
    await queryRunner.addColumn("users", new _typeorm.TableColumn({
      name: "username",
      type: "varchar",
      isNullable: true
    }));
  }

}

exports.AlterUserDeleteUsername1635293931558 = AlterUserDeleteUsername1635293931558;