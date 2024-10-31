export default class GenericTreeNode {
    constructor(key, value, parent = null) {
        this.key = key
        this.value = value;
        this.parent = parent;
        this.children = [];
    }

    addChildren(node) {

    }
}