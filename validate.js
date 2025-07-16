const fs = require("fs");
const path = require("path");

function checkController() {
  const controllerPath = path.join(
    __dirname,
    "src",
    "todos",
    "todo.controller.js"
  );
  const content = fs.readFileSync(controllerPath, "utf-8");
  let errors = [];

  if (content.includes("sendResponse(res, 201")) {
    errors.push("getTodos uses wrong status code 201.");
  }
  if (content.includes("sendResponse(res, 400")) {
    errors.push("createTodo uses wrong status code 400.");
  }
  if (content.includes("sendResponse(res, 204")) {
    errors.push("deleteTodo uses wrong status code 204.");
  }
  if (!content.includes("async") && content.includes("createTodo")) {
    errors.push("createTodo is missing async/await.");
  }
  if (!content.includes("try") && content.includes("updateTodo")) {
    errors.push("updateTodo is missing error handling.");
  }
  return errors;
}

function checkService() {
  const servicePath = path.join(__dirname, "src", "todos", "todo.service.js");
  const content = fs.readFileSync(servicePath, "utf-8");
  let errors = [];
  if (content.includes("// Logic error: does not update the todo")) {
    errors.push("updateTodo does not actually update the todo.");
  }
  if (content.includes("// Logic error: does not remove the todo")) {
    errors.push("deleteTodo does not actually remove the todo.");
  }
  return errors;
}

function main() {
  let errors = [];
  errors = errors.concat(checkController());
  errors = errors.concat(checkService());
  if (errors.length === 0) {
    console.log("No mistakes found.");
  } else {
    console.log("Mistakes detected:");
    errors.forEach((e) => console.log("- " + e));
  }
}

main();
