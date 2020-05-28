import { Router } from "https://deno.land/x/oak/mod.ts";
import book from "../controllers/books.ts";
const router = new Router();
router.get(
  '/books', book.getAllBooks
  )

export default router;