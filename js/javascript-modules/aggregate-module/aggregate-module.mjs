// Aggregate module: mengumpulkan export dari beberapa module
// agar cukup di-import melalui satu file.
export { sayHello } from "../named-export/say.mjs";
export { Movie } from "../class-module/class.mjs";
export { company } from "../multiple-export/multiple.mjs";
