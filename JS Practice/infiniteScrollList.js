/*
Infinite Scroll List (Advanced)
Problem Statement

Create a React component that implements infinite scrolling. The component should load additional items when the user scrolls to the bottom of the page.

Requirements
1. Initially load 10 items.
2. When the user scrolls near the bottom, load the next 10 items.
3. Continue loading more items on each scroll until all data is loaded.
4. Avoid unnecessary re-renders and multiple API calls.
5. Use React Hooks (useEffect) to handle scroll events.

Concepts Tested
- React Hooks (useEffect, useState)
- Scroll Event Handling
- Pagination
- Performance Optimization
*/

import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const fetchItems = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();
    setItems((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (bottom) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h2>Infinite Scroll List</h2>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px"
          }}
        >
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
