### DOM stand for document object model. But what is it?

- So to answer that. When a browser is loaded, it creates DOM of the page. This DOM represents all the elements of the page being loaded by the browser.
- This representation is like a tree of objects, allowing developers to interact and manipulate with the content, structure, and styling of the page.
- The DOM organizes the HTML or XML document as a tree structure where each element, attribute, and text becomes a node.

```
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

The structure will be as:

```
Document
├── html
    ├── head
    │   └── title
    │       └── "Page Title"
    ├── body
        ├── h1
        │   └── "Hello, World!"
        └── p
            └── "This is a paragraph."
```

### Application | Usages

- Dynamically update webpage content without reloading (e.g., adding new items to a list).
- Change styles or attributes of elements (e.g., toggle dark mode).
- Add event listeners for user interactions (e.g., clicks, form submissions).
- Create animations or effects by manipulating the structure or attributes of elements.
