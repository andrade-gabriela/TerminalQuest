import fs from "fs";
import { v4 as uuid } from "uuid";

export function AddItem(task, desc) {
  let rawData = fs.readFileSync("List.json");
  let Data = JSON.parse(rawData);

  Data["Tasks"].push(task);

  //JSON.stringify({
  //   Task: item,
  //   id: uuid(),
  // })
  fs.writeFileSync("List.json", JSON.stringify(Data));
}
