import { Router, RouterContext } from "./deps.ts";

const router = new Router();

router.get('/', (ctx: RouterContext) => {
    ctx.response.body = "Hello World 1";
});

export default router;