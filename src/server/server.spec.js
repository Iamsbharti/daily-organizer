import { addNewtask, updateTask } from "./server";

(async function testFunc() {
  await addNewtask({
    name: "mongo-db task",
    id: "35124353",
  });
  await updateTask({
    id: "35124353",
    name: "saghsgf-mongo-db-task",
  });
})();
