// Import Application dan Router dari library oak dr deno.land
import { Application, ApplicationOptions } from "https://deno.land/x/oak/mod.ts";
// import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
import router from "../routes/index.ts";

const app = new Application();
// const apps = new expressive.App();
// app.use(errorMiddleware);
// apps.use(expressive.simpleLog())
app.use(router.routes());
app.use(router.allowedMethods());
// app.use(notFound);

export default app