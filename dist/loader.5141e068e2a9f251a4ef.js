/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./load-data.js":
/*!**********************!*\
  !*** ./load-data.js ***!
  \**********************/
/***/ (() => {

eval("//import 'pag.js';\r\n\r\nconst table = document.getElementsByClassName('table')[0];\r\nconst wrapper = document.getElementById(\"content\");\r\n\r\nconst urlJson =\r\n  \"http://localhost:8080/api/region/24\";\r\n\r\nfunction fetchData() {\r\n  fetch(urlJson)\r\n    .then((data) => data.json())\r\n    .then((jsonData) => populate(jsonData))\r\n    .catch((e) => {\r\n      wrapper.innerText = \"Error: \" + e + \" going to use demo data\";      \r\n    });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", fetchData, false);\r\n\r\nfunction dom(tag, text) {\r\n  let r = document.createElement(tag);\r\n  if (text) r.innerText = text;\r\n  return r;\r\n}\r\n\r\nfunction append(parent, child) {\r\n  parent.appendChild(child);\r\n  return parent;\r\n}\r\n\r\nfunction populate(json) {\r\n  if (json.length === 0) return;\r\n  let keys = Object.keys(json[0]);\r\n  \r\n  //values\r\n  const makeRow = (acc, row) =>\r\n    append(acc, keys.map((k) => dom(\"td\", row[k])).reduce(append, dom(\"tr\")));\r\n  json.reduce(makeRow, table);\r\n  wrapper.appendChild(table);\r\n}\r\n\r\n\r\n/*\r\nlet urlJson = \"http://localhost:8080/api/region/24\";\r\nconst table = document.getElementsByClassName('table')[0];\r\n//console.log(table);\r\n\r\nfunction createNode(element) {\r\n    return document.createElement(element);\r\n}\r\n\r\nfunction append(parent, el) {\r\n  return parent.appendChild(el);\r\n}\r\n\r\n\r\nlet status = function (response) {\r\n    if (response.status !== 200) {\r\n      return Promise.reject(new Error(response.statusText))\r\n    }\r\n    return Promise.resolve(response)\r\n  }\r\n  let jDason = function (response) {\r\n    return response.json()\r\n  }\r\n\r\nfetch (urlJson)\r\n.then(status)\r\n  .then(jDason)\r\n  .then(function (data) {\r\n    console.log(\"dasdsa\", data);\r\n    //return data.map(function(meta) {\r\n      /*let tr = document.createElement('tr');\r\n      let td = document.createElement('td');\r\n      for(let i=0;i<4;i++){\r\n\r\n      }\r\n      td.innerHTML = `${data.country} ${data.city}`;\r\n      append(tr, td);\r\n      append(table, tr);  */   \r\n    //})\r\n    //console.log('data', data.city)\r\n  /*})\r\n  .catch(function (error) {\r\n    console.log('error', error)\r\n  })*/\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./load-data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./load-data.js"]();
/******/ 	
/******/ })()
;