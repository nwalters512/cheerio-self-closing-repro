import * as oldCheerio from 'cheerio-rc/lib/slim';
import * as newCheerio from 'cheerio-1/slim';

const HTML = '<html><head></head><body><div></div></body></html>';

console.log(oldCheerio.load(HTML).html());
console.log(newCheerio.load(HTML).html());

console.log(oldCheerio.load(HTML, { recognizeSelfClosing: true }).html());
console.log(newCheerio.load(HTML, { xml: { recognizeSelfClosing: true } }).html());
