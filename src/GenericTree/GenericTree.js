import GenericTreeNode from "./GenericTreeNode";

export default class GenericTree {
    constructor(data = null) {
        this.root = data ? this.buildTree(data) : null;
    }

    buildTree(data) {
        const node = new GenericTreeNode(data.value, data.value);

        for (let child of data.children) {
            node.children.push(this.buildTree(child));
        }

        return node;
    }

    add(key, value, parentKey) {

    }

    getRoot() {
        return this.root;
    }

    getValue(node) {
        if (!node) return null;
        return node.value;
    }

    getChildren(node) {
        if (!node) return [];
        return node.children;
    }

    isEmpty() {
        return this.root === null;
    }

    levelOrderTraversal(source) {
        let result = [];
        if (!source.value) {
            return result;
        }
        
        let queue = [];
        let temp = [];

        queue.push(source);
        
        while (queue.length) {
            let n = queue.length;
            for (let i = 0; i < n; i++) {
                let curr = queue.shift();
                temp.push(curr.value);
                for (let child of curr.children) {
                    queue.push(child);
                }
            }
            result.push(...temp);
            temp = [];
        }
        return result;
    }

    preOrderTraversalWalk(source, out) {
        if (!source.value) {
            return out;
        }

        out.push(source.value);

        source.children.forEach((child) => {
            this.preOrderTraversalWalk(child, out);
        });

        return out;
    }

    preOrderTraversal(source) {
        return this.preOrderTraversalWalk(source, []);
    }

    postOrderTraversalWalk(source, out) {
        if (!source.value) {
            return out;
        }

        source.children.forEach((child) => {
            this.postOrderTraversalWalk(child, out);
        })

        out.push(source.value);

        return out;
    }

    postOrderTraversal(source) {
        return this.postOrderTraversalWalk(source, [])
    }
}