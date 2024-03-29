import $ from "jquery";

class Node {
    constructor(public name: string) {}

    getSize(): number {
        return 0;
    }
}

class File extends Node {
    constructor(name: string, public size: number) {
        super(name);
    }

    getSize(): number {
        return this.size;
    }
}

class Directory extends Node {
    private children: Node[] = [];

    addChild(child: Node): void {
        this.children.push(child);
    }

    getSize(): number {
        let totalSize = 0;
        for (const child of this.children) {
            totalSize += child.getSize();
        }
        return totalSize;
    }
}

$( document ).ready(function() {
    start();
});

export function start(): void {
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
    
    $("#koko").text(directory.getSize());
}