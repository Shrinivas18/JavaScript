// Fetch data from an array of URLs using map() + Promise.all()

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

const fetchData = async () => {
  try {
    const responses = await Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json))
    );
    console.log(responses);
  } catch (e) {
    console.log("Error: ", e);
  }
};

fetchData();
