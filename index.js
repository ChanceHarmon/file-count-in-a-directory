'use strict'

dirCount = [];

const findFile = (node, fileCount = 0) => {
  if (node.left && node.right && (current.value === file) === true) {
    fileCount = filecCount + 1
  }
  while (node.left || node.right) {
    findFile(node.left, fileCount);
    findFile(node.right, fileCount);
  }
  return findFile.fileCount.push(dirCount)
}

const compareFiles = (dirCount) => {
  if (dirCount.length < 1) {
    return false
  } if (dirCount.value[0] === dirCount.value[1]) {
    return true;
  }
  else {
    return false;
  }

}

