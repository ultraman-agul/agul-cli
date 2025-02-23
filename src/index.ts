import { Command } from "commander";
import { version } from "../package.json";
import { create } from "./command/create";
import { update } from "./command/update";

// 这里我们用 agul 当作我的指令名称
// 命令行中使用 agul xxx 即可触发
const program = new Command("agul");

// .vesion 表示可以使用 -V --version 参数查看当前SDK版本
// 我们直接使用 package.json 中的 version 即可
program.version(version, "-v --version");

program
  .command("update")
  .description("更新脚手架 agul-cli")
  .action(async () => {
    await update();
  });

program
  .command("create")
  .description("创建一个项目模板")
  .argument("[]", "项目名称")
  .action(async (name) => {
    create(name);
  });

program.parse(); // 解析命令行参数
