"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersion = void 0;
const child_process_1 = require("child_process");
const getVersion = () => {
    try {
        const lastTagCommitHash = (0, child_process_1.execSync)('git rev-list --tags --max-count=1').toString().trim();
        const lastTag = (0, child_process_1.execSync)(`git describe --tags ${lastTagCommitHash}`).toString().trim();
        return lastTag;
    }
    catch (error) {
        console.error('Unable to get Git version:', error);
        return '1.0.0';
    }
};
exports.getVersion = getVersion;
