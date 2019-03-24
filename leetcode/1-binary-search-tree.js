function Node(data, left = null, right = null) {
  this.data = data;
  this.left = null;
  this.right = null;

  return this;
}

function BinarySearchTree() {
  this.root = null;

  /**
   * @param {number} data
   */
  this.addNode = data => {
    if (!this.root) {
      this.root = new Node(data);
      return true;
    }

    const searchTree = node => {
      if (data < node.data) {
        if (!node.left) {
          node.left = new Node(data);
          return true;
        }
        return searchTree(node.left);
      }
      if (data > node.data) {
        if (!node.right) {
          node.right = new Node(data);
          return true;
        }
        return searchTree(node.right);
      }
    };

    searchTree(this.root);
  };

  /**
   * @param {number[]} dataArray
   */
  this.addNodes = dataArray => {
    dataArray.forEach(data => {
      this.addNode(data);
    });
  };

  /**
   * @param {number} data
   */
  this.find = data => {
    let current = this.root;
    while (current && data !== current.data) {
      if (data < current.data) {
        current = current.left;
      }
      if (data > current.right) {
        current = current.right;
      }
    }
    return current.data || null;
  };

  this.findHeight = () => {
    let current = this.root;
    let maxHeight = 0;

    const traverse = (node, currentHeight = 0) => {
      if (node.left) {
        if (currentHeight + 1 > maxHeight) {
          maxHeight = currentHeight + 1;
        }
        traverse(node.left, currentHeight + 1);
      }

      if (node.right) {
        if (currentHeight + 1 > maxHeight) {
          maxHeight = currentHeight + 1;
        }
        traverse(node.right, currentHeight + 1);
      }

      return maxHeight;
    };

    return traverse(this.root, 1);
  };

  this.findMax = () => {
    let current = this.root;
    while (!current.left) {
      current = current.left;
    }
    return current.left;
  };

  this.findMin = () => {
    let current = this.root;
    while (!current.right) {
      current = current.right;
    }
    return current.right;
  };

  return this;
}

const binarySearchTree = new BinarySearchTree();

// binarySearchTree.addNode(50);
// binarySearchTree.addNode(17);
// binarySearchTree.addNode(33);
// binarySearchTree.addNode(100);

binarySearchTree.addNodes([50, 17, 33, 100]);

console.log(binarySearchTree.findHeight());

console.log(JSON.stringify(binarySearchTree, null, 2));
