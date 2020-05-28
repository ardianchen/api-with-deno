// kita menginstall third party library mysql dari web deno.land
import { Client } from "https://deno.land/x/mysql/mod.ts";

// kita buat koneksi dengan mengisi keterangan db
export const client = await new Client().connect({
  hostname: Deno.env.get('host') || "secret",
  username: Deno.env.get('username') || "secret",
  db: Deno.env.get('dbname') || "secret",
  password: Deno.env.get('pass') || "secret",
});