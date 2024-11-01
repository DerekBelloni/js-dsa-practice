import GenericTree from '../src/GenericTree/GenericTree.js';
import { mediumTree, singleNodeTree, traversalExpectedResults } from '../__fixtures__/GenericTreeData.js';

describe('Tree Construction', () => {
    test('should construct single node tree', () => {
        const tree = new GenericTree(singleNodeTree);
        const root = tree.getRoot();
        expect(tree.getValue(root)).toBe(1);
        expect(tree.getChildren(root.children.length)).toHaveLength(0);
        expect(tree.isEmpty()).toBeFalsy();
    })
});

describe('Pre Order Traversal, Medium Tree', () => {
    test('should return expected traversal result', () => {
        const tree = new GenericTree(mediumTree);
        const root = tree.getRoot();
        const result = tree.preOrderTraversal(root);
        const expectedResult = traversalExpectedResults.preorderMediumTree;
        expect(result).toStrictEqual(expectedResult);
    })
})

describe('Post Order Traversal, Medium Tree', () => {
    test('should return expected traversal result', () => {
        const tree = new GenericTree(mediumTree);
        const root = tree.getRoot();
        const result = tree.postOrderTraversal(root);
        const expectedResult = traversalExpectedResults.postorderMediumTree;
        expect(result).toStrictEqual(expectedResult);
    })
})

describe('Level Order Traversal, Medium Tree', () => {
    test('should return expected traversal result', () => {
        const tree = new GenericTree(mediumTree);
        const root = tree.getRoot();
        const result = tree.levelOrderTraversal(root);
        const expectedResult = traversalExpectedResults.levelOrderMediumTree;
        expect(result).toStrictEqual(expectedResult);
    }) 
})