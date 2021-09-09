/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/about/index.js":
/*!*******************************!*\
  !*** ./blocks/about/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('dwb/about-block', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('About', 'dwb'),
  icon: 'editor-quote',
  category: 'text',
  attributes: {
    text: {
      type: 'array',
      source: 'children',
      selector: 'p'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string' //source: 'attribute',
      //selector: 'img',
      //attribute: 'src',

    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        text = _props$attributes.text,
        mediaID = _props$attributes.mediaID,
        mediaURL = _props$attributes.mediaURL,
        setAttributes = props.setAttributes;

    var onChangeText = function onChangeText(value) {
      setAttributes({
        text: value
      });
    };

    var onSelectImage = function onSelectImage(media) {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id
      });
    };

    var removeMedia = function removeMedia() {
      setAttributes({
        mediaID: 0,
        mediaURL: ''
      });
    };

    var blockStyle = {
      background: mediaURL != 0 ? 'url("' + mediaURL + '") no-repeat center center fixed' : 'none'
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image-wrap",
      style: blockStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: mediaID ? 'image-button' : 'button button-large',
          onClick: open
        }, !mediaID ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Upload Image', 'dwb') : '');
      }
    })), mediaID != 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Replace image', 'awp'),
      value: mediaID,
      onSelect: onSelectImage,
      allowedTypes: ['image'],
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: open,
          isSecondary: true,
          className: "replace-image"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Replace image', 'dwb'));
      }
    })), mediaID != 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true,
      className: "remove-image"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove image', 'dwb')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "about-text-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "text-inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Sample text', 'dwb'),
      value: text,
      onChange: onChangeText
    })))));
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        text = _props$attributes2.text,
        mediaURL = _props$attributes2.mediaURL;
    var blockStyle = {
      background: mediaURL != 0 ? 'url("' + mediaURL + '") no-repeat center center fixed' : 'none'
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image-wrap",
      style: blockStyle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "about-text-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "text-inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "p",
      value: text
    }))));
  }
});

/***/ }),

/***/ "./blocks/home-grid/index.js":
/*!***********************************!*\
  !*** ./blocks/home-grid/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);






 // This is the component markup.
// The parameters must match what is returned from calls to withSelect and withDispatch in the compose method below.

var RenderPosts = function RenderPosts(_ref) {
  var posts = _ref.posts;
  if (null === posts) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Spinner"], null);
  console.log(posts);
  var termOptions = posts.map(function (post) {
    return {
      label: post.title.raw,
      value: post.id
    };
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Posts', 'dwb'),
    value: 2,
    onChange: function onChange(value) {
      return console.log(value);
    },
    options: termOptions
  });
}; // This is the "actual" component, 
// together with the markup and data.
// You can add withDispatch as another argument to the compose function and return an object of methods to access in Render.


var Posts = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (scopedSelect) {
  var _scopedSelect = scopedSelect('core'),
      getEntityRecords = _scopedSelect.getEntityRecords;

  return {
    posts: getEntityRecords('postType', 'post', {
      per_page: 3
    })
  };
}))(RenderPosts); // Export this component to use as JSX elsewhere 
// i.e. <Posts />

/* harmony default export */ __webpack_exports__["default"] = (Posts);
/*
const PostList = ( props ) => {
console.log('PostList');
console.log(props);

  return(<>Post Info will be displayed here</>
    // Post Info will be displayed here
  )
}


const applyWithSelect = withSelect((select, props) => {
    console.log(select('core').getEntityRecords('postType', 'post', {per_page: 2}));
    
    return {foo: 'bar', posts: []}
});
*/

/**
* Use compose to return the result of withSelect to Edit({...})
* @see https://developer.wordpress.org/block-editor/packages/packages-compose/
*/

/*
export default compose(
    applyWithSelect,
)(PostList);
*/

/*
export default withSelect( (select, ownProps ) => {
console.log('foo');    
    const { getEntityRecords } = select( 'core ');
    const postQuery = {
        per_page: 3
    }
console.log(getEntityRecords('postType', 'post', postQuery ));  
    return {
        postList: getEntityRecords('postType', 'post', postQuery ),
    }
})(PostList)
*/

/*
const getPosts = (props) => {
    let postList = [];
    
console.log('getposts');
withSelect( (select, ownProps ) => {
console.log('withSelect');    
    const { getEntityRecords } = select( 'core ');
    const postQuery = {
        per_page: 10
    }
    
    postList = getEntityRecords('postType', 'post', postQuery );
})
    
    return {postList}
}


const PostList = (props) => {
console.log(props);    
    const posts = getPosts();
console.log(posts);    
    return (
        <div>PostList</div>
    )
}
*/

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])('dwb/home-grid-block', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Home Grid', 'dwb'),
  icon: 'smiley',
  category: 'common',
  attributes: {},
  edit: function edit(props) {
    var className = props.className;

    _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(props.attributes);

    var setAttributes = props.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Posts, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "blockType"));
  },
  save: function save(props) {
    var className = props.className;

    _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(props.attributes);

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('DigiWatt Plugin – Nothing to see here.', 'dwb'));
  }
});

/***/ }),

/***/ "./blocks/index.js":
/*!*************************!*\
  !*** ./blocks/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagline */ "./blocks/tagline/index.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./blocks/about/index.js");
/* harmony import */ var _home_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-grid */ "./blocks/home-grid/index.js");




/***/ }),

/***/ "./blocks/tagline/index.js":
/*!*********************************!*\
  !*** ./blocks/tagline/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('dwb/tagline-block', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tagline', 'dwb'),
  icon: 'dashicons-format-quote',
  category: 'text',
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: 'h1'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    },
    bg_color: {
      type: 'string',
      default: '#8ed2fc'
    }
  },
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        title = _props$attributes.title,
        mediaID = _props$attributes.mediaID,
        mediaURL = _props$attributes.mediaURL,
        bg_color = _props$attributes.bg_color,
        setAttributes = props.setAttributes;

    var onChangeTitle = function onChangeTitle(value) {
      setAttributes({
        title: value
      });
    };

    var onSelectImage = function onSelectImage(media) {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id
      });
    };

    var onChangeBGColor = function onChangeBGColor(hexColor) {
      setAttributes({
        bg_color: hexColor
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
      key: "setting"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "digiwatt-tagline-controls"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("fieldset", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("legend", {
      className: "blocks-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background color', 'gutenpride')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"] // Element Tag for Gutenberg standard colour selector
    , {
      onChange: onChangeBGColor
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className,
      style: {
        backgroundColor: bg_color
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "tagline-image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      onSelect: onSelectImage,
      allowedTypes: "image",
      value: mediaID,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: mediaID ? 'image-button' : 'button button-large',
          onClick: open
        }, !mediaID ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Upload Image', 'dwb') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: mediaURL,
          alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('tagline-image', 'dwb')
        }));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "h1",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tagline', 'dwb'),
      value: title,
      onChange: onChangeTitle
    })));
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        title = _props$attributes2.title,
        mediaURL = _props$attributes2.mediaURL,
        bg_color = _props$attributes2.bg_color;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className,
      style: {
        backgroundColor: bg_color
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "tagline-wrapper"
    }, mediaURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "image-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "tagline-image",
      src: mediaURL,
      alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('tagline image', 'dwb')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "title-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "h1",
      value: title
    }))));
  }
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

module.exports = _objectDestructuringEmpty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map