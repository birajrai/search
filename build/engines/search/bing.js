"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weight = void 0;
exports.request = request;
const parser_1 = require("../../parser");
async function request(query) {
    return await (0, parser_1.parseResultList)('https://www.bing.com/search?q=' + encodeURIComponent(query), {
        resultItemPath: '#b_results > li.b_algo',
        titlePath: '.b_algo > h2 > a',
        hrefPath: 'cite',
        contentPath: '.b_caption > p',
        suggestionPath: 'li.b_ans > #sp_requery > a[href] > strong',
    });
}
exports.weight = 1.0;
