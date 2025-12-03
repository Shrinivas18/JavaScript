/*
You are given three arrays: one containing user IDs, one with user names, and another with the corresponding user images. Your task is to combine these three arrays into a 
single array of objects, where each object represents a user with their ID, name, and image.

Objectives
1. Function Creation: Write a function named createUserObjects that takes three arrays as parameters: ids, names, and images.
2. Map Function Usage: Inside the function, use the map method to create an array of user objects. Each object should contain three properties:

    - id (from the ids array)
    - name (from the names array)
    - image (from the images array)

3. Mapping Logic: Ensure that the mapping aligns the first elements of all arrays into the first object, the second elements into the second object, and so on. 
4. Return Value: The function should return an array of user objects.

Input:
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
createUserObjects(ids,names,images);

Output:
[
  { id: 1, name: 'John', image: 'john.jpg' },
  { id: 2, name: 'Jane', image: 'jane.jpg' },
  { id: 3, name: 'Alice', image: 'alice.jpg' }
]
*/

const createUserObjects = (ids, names, images) => {
  return ids.map((element, index) => {
    return {
      id: element,
      name: names[index],
      image: images[index],
    };
  });
};

const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
console.log( createUserObjects(ids, names, images));
