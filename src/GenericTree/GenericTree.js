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

    getChildren() {
        if (!node) return [];
        return node.children;
    }

    isEmpty() {
        return this.root === null;
    }

    levelOrderTraversal() {

    }

    preOrderTraversal() {

    }

    postOrderTraversal() {

    }
}