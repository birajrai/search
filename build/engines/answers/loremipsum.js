"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
async function request(query) {
    if (query.toLowerCase().includes("lorem ipsum"))
        return {
            answer: {
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
        };
    else
        return {};
}
exports.request = request;
