# README

Rehype plugin that unwraps leading and trailing line breaks `<br>` from inline nodes



## Features

- unwraps leading and trailing line breaks `<br>` from inline nodes
- inline nodes currently used: `<em>`, `<strong>`, `<a>`



## Example

```js
import { unified, rehypeParse, rehypeStringify } from "./deps.ts";
import rehypeUnwrap from "./src/main.ts";

const result = (await unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeUnwrapLinebreak)
  .use(rehypeStringify)
  .process(`<div><span><strong>Lorem ipsum<br></strong></span></div>`))
  .toString();
console.log(result);
```

Before

```html
<strong>foo </strong>bar
```

After

```html
<strong>foo</strong> bar
```
