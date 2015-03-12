(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.whitescape = factory();
  }
}(this, function() {
  // Codes taken from http://en.wikipedia.org/wiki/Whitespace_character
  var codes = ['0009', '000A', '000B', '000C', '000D', '0020', '0085', '00A0', '1680', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '200A', '2028', '2029', '202F', '205F', '3000', '180E', '200B', '200C', '200D', '2060', 'FEFF'];
  
  var chars = {};
  for (var i = 0; i < codes.length; i += 1) {
    chars[String.fromCharCode(parseInt(codes[i], 16))] = '\\u' + codes[i];
  }
  
  // Override by sequences from http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
  // Table 4 — String Single Character Escape Sequences
  var override = {
    '\b': '\\b', // \u0008 backspace <BS>
    '\t': '\\t', // \u0009 horizontal tab <HT>
    '\n': '\\n', // \u000A line feed (new line) <LF>
    '\v': '\\v', // \u000B vertical tab <VT>
    '\f': '\\f', // \u000C form feed <FF>
    '\r': '\\r', // \u000D carriage return
    // allow space and do not escape it
    ' ' : ' ',   // \u0020 
  };
  for (var c in override) {
    if (override.hasOwnProperty(c)) chars[c] = override[c];
  }
  
  init(chars);
  
  function whitescape(str) {
    return ('' + str).replace(whitescape.regex, function(c) {
      return whitescape.characters[c] || c;
    });
  }
  
  function init(obj) {
    var chars = [];
    for (var c in obj) {
      if (obj.hasOwnProperty(c)) chars.push(c);
    }
    whitescape.regex = new RegExp('[' + chars.join('') + ']', 'g');
    whitescape.characters = obj;
  }
  whitescape.init = init;
  
  return whitescape;
}));
