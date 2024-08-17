import oldCheerio from 'cheerio-rc';
import * as newCheerio from 'cheerio-1';

const HTML = '<html><head></head><body><div></div></body></html>';

console.log(oldCheerio.load(HTML).html());
console.log(newCheerio.load(HTML).html());

console.log(oldCheerio.load(HTML, { recognizeSelfClosing: true }).html());
console.log(newCheerio.load(HTML, { xml: { recognizeSelfClosing: true } }).html());
