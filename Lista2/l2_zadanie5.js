function BST(key, left, right) {
    this.key = key;
    this.left = left || null;
    this.right = right || null;
  }
  
  BST.prototype[Symbol.iterator] = function* () {
    if (this.left) {
      yield* this.left[Symbol.iterator]();
    }
    yield this.key;
    if (this.right) {
        yield* this.right[Symbol.iterator]();
    }
  };
  

  const binaryTree = new BST(10,
    new BST(7,
      new BST(1),
      new BST(8)),
    new BST(12,
      new BST(11),
      new BST(15))
  );
  
  for (const key of binaryTree) {
    console.log(key);
  }
  