const singleNodeTree = {
    value: 1,
    children: []
};
  
  // Small tree: root with 3 children
const smallTree = {
    value: 1,
    children: [
      { value: 2, children: [] },
      { value: 3, children: [] },
      { value: 4, children: [] }
    ]
};
  
// Medium tree: multiple levels, varying number of children
const mediumTree = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          { value: 5, children: [] },
          { value: 6, children: [] }
        ]
      },
      {
        value: 3,
        children: [
          { value: 7, children: [] }
        ]
      },
      {
        value: 4,
        children: [
          { value: 8, children: [] },
          { value: 9, children: [] },
          { value: 10, children: [] }
        ]
      }
    ]
};
  
// Large tree: deep nesting, uneven distribution
const largeTree = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          {
            value: 6,
            children: [
              { value: 11, children: [] },
              { value: 12, children: [] },
              { value: 13, children: [] }
            ]
          }
        ]
      },
      {
        value: 3,
        children: [
          {
            value: 7,
            children: [
              {
                value: 14,
                children: [
                  { value: 15, children: [] }
                ]
              }
            ]
          }
        ]
      },
      {
        value: 4,
        children: []
      },
      {
        value: 5,
        children: [
          { value: 8, children: [] },
          {
            value: 9,
            children: [
              { value: 16, children: [] }
            ]
          },
          { value: 10, children: [] }
        ]
      }
    ]
};
  
// Special cases
const specialCasesTrees = {
// Tree with duplicate values
duplicateValues: {
value: 1,
children: [
        {
          value: 2,
          children: [
            { value: 1, children: [] },
            { value: 2, children: [] }
          ]
        },
        { value: 1, children: [] }
      ]
    },
    
    // Tree with non-numeric values
    mixedTypes: {
      value: "root",
      children: [
        {
          value: "A",
          children: [
            { value: true, children: [] },
            { value: 123, children: [] }
          ]
        },
        {
          value: { id: 1 },
          children: []
        }
      ]
    }
};
  
// Test data sets for specific operations
const traversalExpectedResults = {
    preorderMediumTree: [1, 2, 5, 6, 3, 7, 4, 8, 9, 10],
    postorderMediumTree: [5, 6, 2, 7, 3, 8, 9, 10, 4, 1],
    levelOrderMediumTree: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};
  
export {
    singleNodeTree,
    smallTree,
    mediumTree,
    largeTree,
    specialCasesTrees,
    traversalExpectedResults
};