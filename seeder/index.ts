import prompts from "prompts";
import { seeder_user_role } from "./seeder_role";

const main = () => {
  prompts({
    name: "pilihan",
    type: "autocomplete",
    message: "pilih menu",
    choices: [
      {
        title: "seeder user role",
        value: "1",
      },
    ],
  }).then(({ pilihan }) => {
    if (pilihan == 1) seeder_user_role();
  });
};

main();
