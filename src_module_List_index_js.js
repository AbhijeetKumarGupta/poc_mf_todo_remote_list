"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpoc_mf_todo_remote_list"] = self["webpackChunkpoc_mf_todo_remote_list"] || []).push([["src_module_List_index_js"],{

/***/ "./src/components/todoCard/index.js":
/*!******************************************!*\
  !*** ./src/components/todoCard/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/components/todoCard/style.js\");\n\n\nconst Card = props => {\n  const {\n    handleRemove,\n    handleMarkAsDoneOrOpen,\n    handleView\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.CardWrapper, {\n    isComplete: props?.data?.completed\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.TodoMessage, null, props?.data?.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.ButtonContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.RemoveButton, {\n    id: `${props?.data?.id}`,\n    onClick: handleRemove\n  }, \"Remove\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.DoneButton, {\n    id: `${props?.data?.id}`,\n    disabled: props?.data?.completed,\n    onClick: e => handleMarkAsDoneOrOpen(e, true)\n  }, \"Mark as done\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.OpenButton, {\n    id: `${props?.data?.id}`,\n    disabled: !props?.data?.completed,\n    onClick: e => handleMarkAsDoneOrOpen(e, false)\n  }, \"Mark as open\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.ViewButton, {\n    id: `${props?.data?.id}`,\n    onClick: e => handleView(e, `/poc_module_federation_todo_host/${e.target.id}`),\n    disabled: props?.data?.isDummy,\n    isDummy: props?.data?.isDummy\n  }, \"View\", props?.data?.isDummy ? '(Dummy Data)' : '')));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://poc_mf_todo_remote_list/./src/components/todoCard/index.js?");

/***/ }),

/***/ "./src/components/todoCard/style.js":
/*!******************************************!*\
  !*** ./src/components/todoCard/style.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ButtonContainer: () => (/* binding */ ButtonContainer),\n/* harmony export */   CardWrapper: () => (/* binding */ CardWrapper),\n/* harmony export */   DoneButton: () => (/* binding */ DoneButton),\n/* harmony export */   OpenButton: () => (/* binding */ OpenButton),\n/* harmony export */   RemoveButton: () => (/* binding */ RemoveButton),\n/* harmony export */   TodoMessage: () => (/* binding */ TodoMessage),\n/* harmony export */   ViewButton: () => (/* binding */ ViewButton)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  display: flex;\n  border-radius: 10px;\n  width: 20%;\n  color: white;\n  height: 100px;\n  padding: 10px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  overflow-y: scroll;\n  gap: 5px;\n  background-color: ${props => props?.isComplete ? 'green' : '#4b9cd3'} !important;\n`;\nconst TodoMessage = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  color: white;\n  width: 95%;\n`;\nconst ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  display: flex !important;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n\n  button{\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-bottom: 5px;\n    width: 100%;\n  }\n`;\nconst RemoveButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n  background-color: lightsalmon;\n`;\nconst DoneButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n  background-color: lightgreen;\n`;\nconst OpenButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n  background-color: lightgoldenrodyellow;\n`;\nconst ViewButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n  background-color: white;\n  cursor: ${props => props?.isDummy ? 'not-allowed' : 'pointer'} !important;\n`;\n\n//# sourceURL=webpack://poc_mf_todo_remote_list/./src/components/todoCard/style.js?");

/***/ }),

/***/ "./src/module/List/index.js":
/*!**********************************!*\
  !*** ./src/module/List/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/module/List/style.js\");\n/* harmony import */ var _components_todoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/todoCard */ \"./src/components/todoCard/index.js\");\n\n\n\nfunction List(props) {\n  const {\n    todoData,\n    setTodoData,\n    backupTodoData,\n    setBackupTodoData,\n    handleView\n  } = props;\n  const getUpdatedData = (id, value) => {\n    const updatedDoneDataTD = todoData.map(item => {\n      if (Number(item?.id) === Number(id)) {\n        item.completed = value;\n      }\n      return item;\n    });\n    const updatedDoneDataBTD = backupTodoData.map(item => {\n      if (Number(item?.id) === Number(id)) {\n        item.completed = value;\n      }\n      return item;\n    });\n    return {\n      updatedDoneDataTD,\n      updatedDoneDataBTD\n    };\n  };\n  const handleRemove = e => {\n    const payload = e.target.id;\n    setTodoData(prev => prev.filter(item => Number(item?.id) !== Number(payload)));\n    setBackupTodoData(prev => prev.filter(item => Number(item?.id) !== Number(payload)));\n    e.preventDefault();\n  };\n  const handleMarkAsDoneOrOpen = (e, value) => {\n    const {\n      updatedDoneDataTD,\n      updatedDoneDataBTD\n    } = getUpdatedData(e.target.id, value);\n    setTodoData(updatedDoneDataTD);\n    setBackupTodoData(updatedDoneDataBTD);\n    e.preventDefault();\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, todoData?.length > 0 ? todoData.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_todoCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: item?.id,\n    data: item,\n    handleRemove: handleRemove,\n    handleMarkAsDoneOrOpen: handleMarkAsDoneOrOpen,\n    handleView: handleView\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.EmptyList, null, \"\\\"No todo's found!\\\"\"));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack://poc_mf_todo_remote_list/./src/module/List/index.js?");

/***/ }),

/***/ "./src/module/List/style.js":
/*!**********************************!*\
  !*** ./src/module/List/style.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmptyList: () => (/* binding */ EmptyList)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst EmptyList = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    color: red;\n`;\n\n//# sourceURL=webpack://poc_mf_todo_remote_list/./src/module/List/style.js?");

/***/ })

}]);