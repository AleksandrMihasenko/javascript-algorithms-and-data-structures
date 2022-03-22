document.body.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    const checked = event.target.checked;

    traverse(event.target, (child) => {
      child.checked = checked;
    });
  }
});

function traverse(root, callback) {
  if (root.type === 'checkbox') {
    callback(root);

    const next = root.parentNode.children[1];

    if (next && next.classList.contains('tree')) {
      traverse(next, callback);
    }
  } else {
    Array.from(root.children).forEach((child) => {
      traverse(child, callback);
    });
  }
}
