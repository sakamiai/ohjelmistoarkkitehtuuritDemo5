"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const jquery_1 = __importDefault(require("jquery"));
class Node {
    constructor(name) {
        this.name = name;
    }
    getSize() {
        return 0;
    }
}
class File extends Node {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
    getSize() {
        return this.size;
    }
}
class Directory extends Node {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
    getSize() {
        let totalSize = 0;
        for (const child of this.children) {
            totalSize += child.getSize();
        }
        return totalSize;
    }
}
(0, jquery_1.default)(document).ready(function () {
    start();
});
function start() {
    const subSubDirectory = new Directory("SubSubdirectory");
    subSubDirectory.addChild(new File("fileX", 500));
    subSubDirectory.addChild(new File("fileY", 1000));
    const subDirectory = new Directory("Subdirectory");
    subDirectory.addChild(new File("file1", 300));
    subDirectory.addChild(new File("file2", 400));
    subDirectory.addChild(subSubDirectory);
    const directory = new Directory("MainDirectory");
    directory.addChild(subDirectory);
    console.log("Total size of MainDirectory:", directory.getSize());
    (0, jquery_1.default)("#koko").text(directory.getSize());
}
exports.start = start;
