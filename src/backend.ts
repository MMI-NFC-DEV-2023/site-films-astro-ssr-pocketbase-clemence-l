import Pocketbase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-typegen";

export const pb = new Pocketbase("http://127.0.0.1:8090/") as TypedPocketBase;

// export const pb = new Pocketbase(
//   import.meta.env.VITE_URL_POCKETBASE
// ) as TypedPocketBase;
// pb.autoCancellation(false);
