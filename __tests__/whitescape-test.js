jest.dontMock('../whitescape');

describe('Escape whitespace', function() {
   
 it('escapes special sequences', function() {
   var whitescape = require('../whitescape');
   expect(whitescape('\b\t\n\v\f\r')).toBe('\\b\\t\\n\\v\\f\\r');
   expect(whitescape('hello\tworld\n')).toBe('hello\\tworld\\n');
 });
 
 it('escapes unicode code points', function() {
   var whitescape = require('../whitescape');
   expect(whitescape('\uFEFF\u00A0')).toBe('\\uFEFF\\u00A0');
 });
 
 it('does not escape space by default', function() {
   var whitescape = require('../whitescape');
   expect(whitescape(' ')).toBe(' ');
 });
 
 it('allows to customize characters', function() {
   var whitescape = require('../whitescape');
   whitescape.characters[' '] = '\\u0020';
   expect(whitescape(' ')).toBe('\\u0020');
 });

});