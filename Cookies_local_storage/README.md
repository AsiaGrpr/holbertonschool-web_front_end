<div align="center">

# Cookies & local storage

![image](../asset/img/cookies.jpeg)

</div>

---

## Resources

Read or watch:

- [Cookies and Javascript]([link](https://www.w3schools.com/js/js_cookies.asp))
- [HTTP Cookies]([link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies))
- [js-cookie]([link](https://github.com/js-cookie/js-cookie))
- [Web storage]([link](https://www.w3schools.com/html/html5_webstorage.asp))


## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, ***without the help of Google***:

### General

  - Understand how to create cookies using Javascript
  - Learn how to set specific settings for the cookiekv
  - Learn how to read cookies with Javascript
  - How to use js-cookie for easy cookie manipulation
  - How to use the browser web storage
  - The differences between local storage and session storage

## Requirements

### General

  - Allowed editors: vi, vim, emacs, Visual Studio Code
  - All your files should end with a new line
  - A README.md file, at the root of the folder of the project, is mandatory
  - Your code should use the js extension
  - All of your code will be compiled/executed on Ubuntu 18.04 using Node 12.x and npm 6.x
  - src/index.js should stay empty - all your Javascript must be in your HTML, inside `<script>` tag

---

In order to realise the different tasks we will use a html file to create the expected visual rendering:

| Task | Html file | Visual objective |
| :---:         |     :---:      |     :---: |
| 0. Create basic cookie | [0.html](./0-index.html) | ![task 0](./asset/task%200.png) |
|1. Create cookie with expiration date and specific path | [1.html](./1-index.html)| Modify the way you are setting cookies to expire in 10 days |
|2. Read cookie | [2.html](./2-index.html) | Create a function `getCookie` and Modify the function `showCookies` |
|3. Delete cookie and mini application | [3.html](./3-index.html) | ![Task 3](./asset/task%203.png)  ![Task 3b](./asset/task%203b.png)|
|4. Use js-cookie |[4.html](./4-index.html) | Use js-cookie for every cookie manipulation |
|5. Local storage |[5.html](./5-index.html)| Let’s build a basic shopping cart |
|6. Session storage | [6.html](./6-index.html) | Reusing the code from the previous task, replace the use of local storage by session storage |
|7. Advanced use of web storage | [7.html](./7-index.html) | ![Task 7](./asset/task%207.gif)|
