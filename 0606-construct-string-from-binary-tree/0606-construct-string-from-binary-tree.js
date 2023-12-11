var tree2str = function (root) {
  if (!root) {
    return "";
  }

  let result = root.val.toString();
  const left = tree2str(root.left);
  const right = tree2str(root.right);

  if (!left && !right) {
    return result;
  }

  result += `(${left})`;

  if (right) {
    result += `(${right})`;
  }

  return result;
};
