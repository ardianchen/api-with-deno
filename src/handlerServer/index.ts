// import { red, yellow, cyan, green } from "https://deno.land/std/fmt/colors.ts";
// import { lookup } from "https://deno.land/x/media_types/mod.ts"; 
// import { bodyReader } from "https://deno.land/x/std/http/_io.ts";
// type Middleware = Handler | PathHandler;
// type Handler = (req: Request, res: Response, next: Next) => Promise<void>;
// type Next = () => Promise<void>;
// export function simpleLog(): Handler {
//   return async (req, res, next) => {
//     await next();
//     if (!res) {
//       console.log(req.method, req.url);
//     } else if (res.status >= 500) {
//       console.log(red(res.status + ""), req.method, req.url);
//       if (req.error) {
//         console.log(red(req.error + ""));
//       }
//     } else if (res.status >= 400) {
//       console.log(yellow(res.status + ""), req.method, req.url);
//     } else if (res.status >= 300) {
//       console.log(cyan(res.status + ""), req.method, req.url);
//     } else if (res.status >= 200) {
//       console.log(green(res.status + ""), req.method, req.url);
//     }
//   };