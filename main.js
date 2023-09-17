// import { increase as increase1 } from "./counter.js";
// import { increase, getCount } from "./counter";

import * as counter from "./counter.js";
counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount());
