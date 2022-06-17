const { Pos } = require("./src/index");

const pos = new Pos(100, 200);
console.log(pos.dist(pos.clone()))