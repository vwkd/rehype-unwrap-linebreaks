import {
  assertEquals,
  rehypeParse,
  rehypeStringify,
  unified,
} from "../deps.ts";
import rehypeUnwrapLinebreaks from "./main.ts";

const pipeline = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeUnwrapLinebreaks)
  .use(rehypeStringify);

// see tests of `rehype-unwrap`