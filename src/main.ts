import { rehypeUnwrap } from "../deps.ts";

/**
 * Unwraps leading and trailing line breaks from inline nodes
 * into closest ancestor where branch is not first or last child
 */
const rehypeUnwrapLinebreaks = [[rehypeUnwrap, {
  childTest: (node) => node?.tagName == "br",
  parentTest: (node) => ["em", "span", "strong"].includes(node?.tagName),
}]];

export default rehypeUnwrapLinebreaks;
