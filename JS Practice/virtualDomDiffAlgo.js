/*
🧩 Problem: Build a Simple Virtual DOM Diff Algorithm
🎯 Objective

Implement a simplified Virtual DOM diffing algorithm in JavaScript.

Your goal is to compare:

An old virtual DOM tree

A new virtual DOM tree

And generate a list of patch operations needed to transform the old tree into the new one.
*/

function isText(node) {
  return typeof node === "string";
}

function diffProps(oldProps = {}, newProps = {}) {
  const patches = {};

  for (let key in newProps) {
    if (newProps[key] !== oldProps[key]) {
      patches[key] = newProps[key];
    }
  }

  for (let key in oldProps) {
    if (!(key in newProps)) {
      patches[key] = null;
    }
  }

  return patches;
}

function diff(oldNode, newNode, path = []) {
  const patches = [];

  if (!newNode) {
    patches.push({ type: "REMOVE", path });
    return patches;
  }

  if (!oldNode) {
    patches.push({ type: "ADD", path, node: newNode });
    return patches;
  }

  if (isText(oldNode) && isText(newNode)) {
    if (oldNode !== newNode) {
      patches.push({ type: "TEXT", path, value: newNode });
    }
    return patches;
  }

  if (oldNode.type !== newNode.type) {
    patches.push({ type: "REPLACE", path, node: newNode });
    return patches;
  }

  const propPatches = diffProps(oldNode.props, newNode.props);
  if (Object.keys(propPatches).length > 0) {
    patches.push({ type: "PROPS", path, props: propPatches });
  }

  const maxLength = Math.max(
    oldNode.children.length,
    newNode.children.length
  );

  for (let i = 0; i < maxLength; i++) {
    patches.push(
      ...diff(
        oldNode.children[i],
        newNode.children[i],
        path.concat(i)
      )
    );
  }

  return patches;
}
