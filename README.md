# whitescape.js

Escape whitespace characters (CommonJS, AMD and browser global compatible)

It is useful when you need to display significant whitespace, for example when [visualizing parser grammars](http://dundalek.com/GrammKit/#whitespace%20%3D%20%28'%5Cb'%20%2F%20'%5Ct'%20%2F%20'%5Cn'%20%2F%20'%5Cv'%20%2F%20'%5Cf'%20%2F%20'%5Cr'%20%2F%20'%5CuFEFF'%20%2F%20'%5Cu00A0'%29%2B). Code points were extracted from [ECMAScript spec](http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4) and [Wikipedia list](http://en.wikipedia.org/wiki/Whitespace_character).

## Usage

`npm install whitescape`

```javascript
var whitescape = require('whitescape');

whitescape('\b\t\n\v\f\r');
  // => "\\b\\t\\n\\v\\f\\r"
  // supports js escape sequences

whitescape('\uFEFF\u00A0');
  // => "\\uFEFF\\u00A0"
  // and also various unicode whitespace
```

Usage without a module loader:

```html
<script src="whitescape.js"></script>

<script type="text/javascript">
  whitescape('\b\t\n\v\f\r');
</script>
```

## Advanced

Whitescape does not escape space character by default. You can customize this behavior with:

```javascript
whitescape.characters[' '] = '\\u0020';
```

## Tests

```
npm install
npm test
```
