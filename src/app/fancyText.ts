// Utility functions to convert English letters and numbers to stylized Unicode
// Bold Serif, Bold Sans, Italic Serif, Italic Sans

function mapChars(text: string, baseMap: Record<string, string>): string {
  return text.split('').map(char => baseMap[char] || char).join('');
}

// Unicode code points for A-Z, a-z, 0-9 in different styles
// Reference: https://coolsymbol.com/cool-fancy-text-generator.html

// Bold Serif
const boldSerifMap: Record<string, string> = {};
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((c, i) => boldSerifMap[c] = String.fromCodePoint(0x1D400 + i));
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c, i) => boldSerifMap[c] = String.fromCodePoint(0x1D41A + i));
'0123456789'.split('').forEach((c, i) => boldSerifMap[c] = String.fromCodePoint(0x1D7CE + i));

// Bold Sans
const boldSansMap: Record<string, string> = {};
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((c, i) => boldSansMap[c] = String.fromCodePoint(0x1D5D4 + i));
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c, i) => boldSansMap[c] = String.fromCodePoint(0x1D5EE + i));
'0123456789'.split('').forEach((c, i) => boldSansMap[c] = String.fromCodePoint(0x1D7EC + i));

// Italic Serif
const italicSerifMap: Record<string, string> = {};
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((c, i) => italicSerifMap[c] = String.fromCodePoint(0x1D434 + i));
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c, i) => italicSerifMap[c] = String.fromCodePoint(0x1D44E + i));
// Numbers do not have italic serif, so keep as is
'0123456789'.split('').forEach((c) => italicSerifMap[c] = c);

// Italic Sans
const italicSansMap: Record<string, string> = {};
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((c, i) => italicSansMap[c] = String.fromCodePoint(0x1D608 + i));
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c, i) => italicSansMap[c] = String.fromCodePoint(0x1D622 + i));
'0123456789'.split('').forEach((c, i) => italicSansMap[c] = String.fromCodePoint(0x1D7EC + i)); // Use bold sans numbers for italic sans

export function toBoldSerif(text: string): string {
  return mapChars(text, boldSerifMap);
}
export function toBoldSans(text: string): string {
  return mapChars(text, boldSansMap);
}
export function toItalicSerif(text: string): string {
  return mapChars(text, italicSerifMap);
}
export function toItalicSans(text: string): string {
  return mapChars(text, italicSansMap);
}