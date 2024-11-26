"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weight = void 0;
exports.request = request;
exports.autoComplete = autoComplete;
const parser_1 = require("../../parser");
async function request(query) {
    return await (0, parser_1.parseResultList)('https://www.google.com/search?nfpr=1&q=' + encodeURIComponent(query), {
        resultItemPath: 'div.g',
        titlePath: 'h3.LC20lb',
        hrefPath: 'div.yuRUbf > a[href], h3.H1u2de > a[href]',
        contentPath: 'div.IsZvec',
        featuredSnippetPath: '.c2xzTb',
        featuredSnippetContentPath: '.hgKElcm, .X5LH0c, .LGOjhe, .iKJnec',
        featuredSnippetTitlePath: '.g > div > div a > h3',
        featuredSnippetHrefPath: '.g > div > div a',
        suggestionPath: 'a.gL9Hy'
    });
}
async function autoComplete(query) {
    if (!query.trim())
        return [];
    const data = await (0, parser_1.requestJSON)('https://suggestqueries.google.com/complete/search?output=firefox&client=firefox&hl=US-en&q=' + query);
    return data[1];
}
exports.weight = 1.05;
