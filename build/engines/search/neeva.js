"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weight = void 0;
exports.request = request;
const parser_1 = require("../../parser");
async function request(query) {
    return await (0, parser_1.parseResultList)('https://neeva.com/search?q=' + encodeURIComponent(query), {
        // neeva makes us do a redirect if we don't save the cookies
        session: true,
        resultItemPath: '.result-container__wrapper-38pV8',
        titlePath: 'a.lib-doc-title__link-1b9rC[href]',
        hrefPath: 'a.lib-doc-title__link-1b9rC[href]',
        contentPath: '.lib-doc-snippet__component-3ewW6',
        suggestionPath: 'a.result-group-layout__queryCorrectedText-2Uw3R[href]',
    });
}
exports.weight = 1.2;
