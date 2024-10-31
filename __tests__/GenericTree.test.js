import GenericTree from '../src/GenericTree/GenericTree.js';
import { singleNodeTree } from '../__fixtures__/GenericTreeData.js';

describe('Tree Construction', () => {
    test('should construct single node tree', () => {
        const tree = new GenericTree(singleNodeTree);
        const root = tree.getRoot();
        expect(tree.getValue(root)).toBe(1);
    })
})