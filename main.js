var lib =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/*! exports provided: bmiDescriptions, bandits, books, calcPercentage, cheese, clampRolls, closestMatch, colours, createColour, getAllColours, contentsFetcher, createMagicArmour, createMagicTrinket, createRing, createRoad, createTrap, defineRollDataGetter, magicData, matchFirst, medal, newspaper, objectArrayFetcher, findInContainer, firstCharacter, flora, inventory, lifestyleStandards, linguisticDrift, setRandom, random, setRandomFloat, randomFloat, rollFromTable, createTippy, createTippyWord, createTippyFull, toTitleCase, treasureMap, urlData, weightedRandomFetcher, weightRandom, findInArray, createTavernName, tavernModifiers, tavernRooms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npc_generation_bmiDescriptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./npc-generation/bmiDescriptions */ "./lib/npc-generation/bmiDescriptions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bmiDescriptions", function() { return _npc_generation_bmiDescriptions__WEBPACK_IMPORTED_MODULE_0__["bmiDescriptions"]; });

/* harmony import */ var _src_bandits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/bandits */ "./lib/src/bandits.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bandits", function() { return _src_bandits__WEBPACK_IMPORTED_MODULE_1__["bandits"]; });

/* harmony import */ var _src_books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/books */ "./lib/src/books.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "books", function() { return _src_books__WEBPACK_IMPORTED_MODULE_2__["books"]; });

/* harmony import */ var _src_calcPercentage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/calcPercentage */ "./lib/src/calcPercentage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcPercentage", function() { return _src_calcPercentage__WEBPACK_IMPORTED_MODULE_3__["calcPercentage"]; });

/* harmony import */ var _src_cheese__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/cheese */ "./lib/src/cheese.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cheese", function() { return _src_cheese__WEBPACK_IMPORTED_MODULE_4__["cheese"]; });

/* harmony import */ var _src_clampRolls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/clampRolls */ "./lib/src/clampRolls.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clampRolls", function() { return _src_clampRolls__WEBPACK_IMPORTED_MODULE_5__["clampRolls"]; });

/* harmony import */ var _src_closestMatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/closestMatch */ "./lib/src/closestMatch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closestMatch", function() { return _src_closestMatch__WEBPACK_IMPORTED_MODULE_6__["closestMatch"]; });

/* harmony import */ var _src_colours__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/colours */ "./lib/src/colours.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colours", function() { return _src_colours__WEBPACK_IMPORTED_MODULE_7__["colours"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createColour", function() { return _src_colours__WEBPACK_IMPORTED_MODULE_7__["createColour"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllColours", function() { return _src_colours__WEBPACK_IMPORTED_MODULE_7__["getAllColours"]; });

/* harmony import */ var _src_contentsFetcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/contentsFetcher */ "./lib/src/contentsFetcher.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contentsFetcher", function() { return _src_contentsFetcher__WEBPACK_IMPORTED_MODULE_8__["contentsFetcher"]; });

/* harmony import */ var _src_createMagicArmour__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/createMagicArmour */ "./lib/src/createMagicArmour.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMagicArmour", function() { return _src_createMagicArmour__WEBPACK_IMPORTED_MODULE_9__["createMagicArmour"]; });

/* harmony import */ var _src_createMagicTrinket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/createMagicTrinket */ "./lib/src/createMagicTrinket.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMagicTrinket", function() { return _src_createMagicTrinket__WEBPACK_IMPORTED_MODULE_10__["createMagicTrinket"]; });

/* harmony import */ var _src_createRing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/createRing */ "./lib/src/createRing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRing", function() { return _src_createRing__WEBPACK_IMPORTED_MODULE_11__["createRing"]; });

/* harmony import */ var _src_createRoad__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/createRoad */ "./lib/src/createRoad.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRoad", function() { return _src_createRoad__WEBPACK_IMPORTED_MODULE_12__["createRoad"]; });

/* harmony import */ var _src_createTrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/createTrap */ "./lib/src/createTrap.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTrap", function() { return _src_createTrap__WEBPACK_IMPORTED_MODULE_13__["createTrap"]; });

/* harmony import */ var _src_defineRollDataGetter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/defineRollDataGetter */ "./lib/src/defineRollDataGetter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineRollDataGetter", function() { return _src_defineRollDataGetter__WEBPACK_IMPORTED_MODULE_14__["defineRollDataGetter"]; });

/* harmony import */ var _src_magicData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/magicData */ "./lib/src/magicData.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "magicData", function() { return _src_magicData__WEBPACK_IMPORTED_MODULE_15__["magicData"]; });

/* harmony import */ var _src_matchFirst__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/matchFirst */ "./lib/src/matchFirst.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchFirst", function() { return _src_matchFirst__WEBPACK_IMPORTED_MODULE_16__["matchFirst"]; });

/* harmony import */ var _src_medal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/medal */ "./lib/src/medal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "medal", function() { return _src_medal__WEBPACK_IMPORTED_MODULE_17__["medal"]; });

/* harmony import */ var _src_newspaper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/newspaper */ "./lib/src/newspaper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newspaper", function() { return _src_newspaper__WEBPACK_IMPORTED_MODULE_18__["newspaper"]; });

/* harmony import */ var _src_objectArrayFetcher__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/objectArrayFetcher */ "./lib/src/objectArrayFetcher.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectArrayFetcher", function() { return _src_objectArrayFetcher__WEBPACK_IMPORTED_MODULE_19__["objectArrayFetcher"]; });

/* harmony import */ var _src_findInContainer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/findInContainer */ "./lib/src/findInContainer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findInContainer", function() { return _src_findInContainer__WEBPACK_IMPORTED_MODULE_20__["findInContainer"]; });

/* harmony import */ var _src_firstCharacter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/firstCharacter */ "./lib/src/firstCharacter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "firstCharacter", function() { return _src_firstCharacter__WEBPACK_IMPORTED_MODULE_21__["firstCharacter"]; });

/* harmony import */ var _src_flora__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/flora */ "./lib/src/flora.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flora", function() { return _src_flora__WEBPACK_IMPORTED_MODULE_22__["flora"]; });

/* harmony import */ var _src_inventory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/inventory */ "./lib/src/inventory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inventory", function() { return _src_inventory__WEBPACK_IMPORTED_MODULE_23__["inventory"]; });

/* harmony import */ var _src_lifestyleStandards__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/lifestyleStandards */ "./lib/src/lifestyleStandards.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lifestyleStandards", function() { return _src_lifestyleStandards__WEBPACK_IMPORTED_MODULE_24__["lifestyleStandards"]; });

/* harmony import */ var _src_linguisticDrift__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/linguisticDrift */ "./lib/src/linguisticDrift.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linguisticDrift", function() { return _src_linguisticDrift__WEBPACK_IMPORTED_MODULE_25__["linguisticDrift"]; });

/* harmony import */ var _src_random__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/random */ "./lib/src/random.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRandom", function() { return _src_random__WEBPACK_IMPORTED_MODULE_26__["setRandom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _src_random__WEBPACK_IMPORTED_MODULE_26__["random"]; });

/* harmony import */ var _src_randomFloat__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/randomFloat */ "./lib/src/randomFloat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRandomFloat", function() { return _src_randomFloat__WEBPACK_IMPORTED_MODULE_27__["setRandomFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomFloat", function() { return _src_randomFloat__WEBPACK_IMPORTED_MODULE_27__["randomFloat"]; });

/* harmony import */ var _src_rollFromTable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/rollFromTable */ "./lib/src/rollFromTable.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollFromTable", function() { return _src_rollFromTable__WEBPACK_IMPORTED_MODULE_28__["rollFromTable"]; });

/* harmony import */ var _src_tippy__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/tippy */ "./lib/src/tippy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTippy", function() { return _src_tippy__WEBPACK_IMPORTED_MODULE_29__["createTippy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTippyWord", function() { return _src_tippy__WEBPACK_IMPORTED_MODULE_29__["createTippyWord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTippyFull", function() { return _src_tippy__WEBPACK_IMPORTED_MODULE_29__["createTippyFull"]; });

/* harmony import */ var _src_toTitleCase__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./src/toTitleCase */ "./lib/src/toTitleCase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTitleCase", function() { return _src_toTitleCase__WEBPACK_IMPORTED_MODULE_30__["toTitleCase"]; });

/* harmony import */ var _src_treasureMap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./src/treasureMap */ "./lib/src/treasureMap.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treasureMap", function() { return _src_treasureMap__WEBPACK_IMPORTED_MODULE_31__["treasureMap"]; });

/* harmony import */ var _src_urlData__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./src/urlData */ "./lib/src/urlData.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlData", function() { return _src_urlData__WEBPACK_IMPORTED_MODULE_32__["urlData"]; });

/* harmony import */ var _src_weightedRandomFetcher__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./src/weightedRandomFetcher */ "./lib/src/weightedRandomFetcher.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "weightedRandomFetcher", function() { return _src_weightedRandomFetcher__WEBPACK_IMPORTED_MODULE_33__["weightedRandomFetcher"]; });

/* harmony import */ var _src_weightRandom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./src/weightRandom */ "./lib/src/weightRandom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "weightRandom", function() { return _src_weightRandom__WEBPACK_IMPORTED_MODULE_34__["weightRandom"]; });

/* harmony import */ var _src_findInArray__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./src/findInArray */ "./lib/src/findInArray.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findInArray", function() { return _src_findInArray__WEBPACK_IMPORTED_MODULE_35__["findInArray"]; });

/* harmony import */ var _tavern_createTavernName__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./tavern/createTavernName */ "./lib/tavern/createTavernName.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTavernName", function() { return _tavern_createTavernName__WEBPACK_IMPORTED_MODULE_36__["createTavernName"]; });

/* harmony import */ var _tavern_tavernModifiers__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./tavern/tavernModifiers */ "./lib/tavern/tavernModifiers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tavernModifiers", function() { return _tavern_tavernModifiers__WEBPACK_IMPORTED_MODULE_37__["tavernModifiers"]; });

/* harmony import */ var _tavern_tavernRooms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./tavern/tavernRooms */ "./lib/tavern/tavernRooms.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tavernRooms", function() { return _tavern_tavernRooms__WEBPACK_IMPORTED_MODULE_38__["tavernRooms"]; });










































/***/ }),

/***/ "./lib/npc-generation/bmiDescriptions.ts":
/*!***********************************************!*\
  !*** ./lib/npc-generation/bmiDescriptions.ts ***!
  \***********************************************/
/*! exports provided: bmiDescriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bmiDescriptions", function() { return bmiDescriptions; });
const bmiDescriptions = [
    {
        bmi: 40,
        muscleMass: 6,
        weight: 'morbidly obese'
    },
    {
        bmi: 40,
        muscleMass: 10,
        weight: 'built like a brick shithouse'
    },
    {
        bmi: 40,
        muscleMass: 14,
        weight: 'unbelievably large'
    },
    {
        bmi: 40,
        muscleMass: 18,
        weight: 'impossibly muscular'
    },
    {
        muscleMass: 6,
        bmi: 35,
        weight: 'extremely obese'
    },
    {
        muscleMass: 10,
        bmi: 35,
        weight: 'quite large'
    },
    {
        muscleMass: 14,
        bmi: 35,
        weight: 'built like a wrestler'
    },
    {
        muscleMass: 18,
        bmi: 35,
        weight: 'built like a brick shithouse'
    },
    {
        muscleMass: 6,
        bmi: 28,
        weight: 'beer-bellied'
    },
    {
        muscleMass: 10,
        bmi: 28,
        weight: 'pot-bellied'
    },
    {
        muscleMass: 14,
        bmi: 28,
        weight: 'quite thick and muscular'
    },
    {
        muscleMass: 18,
        bmi: 28,
        weight: 'extremely muscular'
    },
    {
        muscleMass: 6,
        bmi: 32,
        weight: 'round'
    },
    {
        muscleMass: 10,
        bmi: 32,
        weight: 'rather round'
    },
    {
        muscleMass: 14,
        bmi: 32,
        weight: 'quite solidly built'
    },
    {
        muscleMass: 18,
        bmi: 32,
        weight: 'built like a wrestler'
    },
    {
        muscleMass: 6,
        bmi: 30,
        weight: 'a ball of fat'
    },
    {
        muscleMass: 10,
        bmi: 30,
        weight: 'obese'
    },
    {
        muscleMass: 14,
        bmi: 30,
        weight: 'quite fat'
    },
    {
        muscleMass: 18,
        bmi: 30,
        weight: 'fat, but muscular too'
    },
    {
        muscleMass: 6,
        bmi: 29,
        weight: 'rather chubby'
    },
    {
        muscleMass: 10,
        bmi: 29,
        weight: 'chubby'
    },
    {
        muscleMass: 14,
        bmi: 29,
        weight: 'solidly built'
    },
    {
        muscleMass: 18,
        bmi: 29,
        weight: 'built like a brick shithouse'
    },
    {
        muscleMass: 6,
        bmi: 28,
        weight: 'very fat'
    },
    {
        muscleMass: 10,
        bmi: 28,
        weight: 'fat'
    },
    {
        muscleMass: 14,
        bmi: 28,
        weight: 'fat, but muscular'
    },
    {
        muscleMass: 18,
        bmi: 28,
        weight: 'fat, but muscular'
    },
    {
        muscleMass: 6,
        bmi: 27,
        weight: 'overweight'
    },
    {
        muscleMass: 10,
        bmi: 27,
        weight: 'overweight'
    },
    {
        muscleMass: 14,
        bmi: 27,
        weight: 'rather solidly built'
    },
    {
        muscleMass: 18,
        bmi: 27,
        weight: 'wrestler-built'
    },
    {
        muscleMass: 6,
        bmi: 26,
        weight: 'thick'
    },
    {
        muscleMass: 6,
        bmi: 25,
        weight: 'chunky'
    },
    {
        muscleMass: 6,
        bmi: 24,
        weight: 'broad'
    },
    {
        muscleMass: 6,
        bmi: 23,
        weight: 'healthy'
    },
    {
        muscleMass: 6,
        bmi: 22,
        weight: 'lean'
    },
    {
        muscleMass: 6,
        bmi: 21,
        weight: 'thin'
    },
    {
        muscleMass: 6,
        bmi: 20,
        weight: 'rather thin'
    },
    {
        muscleMass: 6,
        bmi: 19,
        weight: 'skinny'
    },
    {
        muscleMass: 6,
        bmi: 18,
        weight: 'lithe'
    },
    {
        muscleMass: 6,
        bmi: 17,
        weight: 'scrawny'
    },
    {
        muscleMass: 6,
        bmi: 16,
        weight: 'weedy'
    },
    {
        muscleMass: 6,
        bmi: 15,
        weight: 'gaunt'
    },
    {
        muscleMass: 6,
        bmi: 15,
        weight: 'bony'
    }
];


/***/ }),

/***/ "./lib/src/bandits.ts":
/*!****************************!*\
  !*** ./lib/src/bandits.ts ***!
  \****************************/
/*! exports provided: bandits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bandits", function() { return bandits; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");
/* harmony import */ var _tippy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tippy */ "./lib/src/tippy.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");



const bandits = {
    create: (town, base) => {
        const bandits = Object.assign({ business: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.business), colours: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.colours), symbol: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.symbol), leader: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.leader), type: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.type), goals: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.goals), weapons: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.weapons), lair: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.lair), fearedBy: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.fearedBy) }, base);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assign"])(bandits, {
            readout: `These bandits are ${bandits.type} whose primary business is ${bandits.business}. Their leader is ${bandits.leader}, who wants ${bandits.goals}. Their symbol is ${bandits.symbol} on a ${bandits.colours} background. They are feared by ${bandits.fearedBy}, and they use ${bandits.weapons}. Their base of operations is ${bandits.lair}`
        });
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assign"])(bandits, {
            tippy: Object(_tippy__WEBPACK_IMPORTED_MODULE_1__["createTippy"])(bandits.readout)
        });
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["assign"])(bandits, {
            tippyWord: Object(_tippy__WEBPACK_IMPORTED_MODULE_1__["createTippyWord"])(bandits.tippy, 'bandits')
        });
        return bandits;
    }
};
const data = {
    business: ["poaching from the sovereign's preserve or a prominent noble’s lands", 'harboring fugitives', 'harassing government officials and nobles who pass along the road', 'robbing caravans carrying gems, precious metals, and exotic goods', 'holding up incoming or outgoing ships or wagons', 'smuggling smokeleaf; a hallucinogenic mushroom', 'smuggling sleepysalt (a downer)', 'smuggling sharpsugar (an upper)', 'smuggling rare antiquities', 'smuggling stolen goods', 'smuggling exotic beasts', 'smuggling foreign harlots', 'smuggling fugitives', 'smuggling slaves', 'serving as muscle for shady merchants and/or brothel-keepers'],
    colours: ['black', 'gold', 'forest green', 'bronze', 'tan', 'khaki', 'brown', 'beaver', 'dark grey', 'gunmetal', 'maroon', 'dark brown', 'chocolate', 'olive green'],
    symbol: ['a skull', 'an arrow', 'a dagger', 'a goblet', 'the moon', 'a star', 'a snake', 'a badger', 'a spider', 'a rat'],
    leader: ['a dangerous megalomaniac', 'a charismatic demagogue', 'a mysterious foreigner', 'a talented thief', 'a member of a prominent family', 'a ruthless killer', 'a femme fatale', 'a charming rogue', 'a dashing swashbuckler', 'a brutish thug'],
    type: ['out-of-work artisans', 'displaced peasants', 'desperate peasants', 'escaped slaves', 'combat veterans', 'foreign refugees', 'goals', 'domination of the region’s trade'],
    goals: ['domination of the region’s trade', 'sabotage of the region’s trade', 'revenge against a rival band of outlaws', 'revenge against the region’s elite', 'a rebellion against the region’s elite', 'equality and freedom for all', 'a wealthy and peaceful retirement', 'violence to slake their bloodlust'],
    weapons: ['wooden clubs', 'over-sized daggers', 'shortbows and arrows', 'longbows and arrows', 'daggers and crossbows', 'axes and knives', 'sticks and stones', 'shortswords', 'brass knuckles', 'daggers and sling shots'],
    lair: ['the residence of a prominent noble', 'the village’s market square', 'a wayside inn', 'a tavern', 'a brothel', 'an old lighthouse', 'an abandoned cabin', 'a waterfall', 'a cave', 'a dense forest'],
    fearedBy: ['ambassadors and tax collectors', 'merchants and peddlers', 'politicians and magistrates', 'guards and sheriffs', 'soldiers and warriors', 'nobles and wealthy travelers', 'knights and loyalists', 'peasants and farmers', 'priests and sages', 'women and children']
};


/***/ }),

/***/ "./lib/src/books.ts":
/*!**************************!*\
  !*** ./lib/src/books.ts ***!
  \**************************/
/*! exports provided: books */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "books", function() { return books; });
const books = {
    normal: [
        'A Study of Elementals: Volume 3: Pain and Tolerance of the Elements',
        'Typhory’s Guide To Abjurations: Rapid Adaptions To Opposing Forces',
        'Notes of Death and Undeath: Vykathar’s Endeavours in the Unholy',
        'The Credits of Lightning and Ice: Shifting Plans and their Collisions',
        'The Basics of Regeneration: Healing in Many instances',
        'Blood and the Foul Arts: Dark Practices of Necromancy',
        'Ethereal and Material: infusing Arcane and Steel',
        'The Warping of Broken Minds: Eteterveil’s Enchanting of the Mad',
        'The Walls That Won’t Change: Transmutation and the Laws of Exchange',
        'Magic in War: Scorched Earth and Seared Minds',
        'Gynthorn’s Research Notes of Arcane Fauna',
        'The Call of the Void: the Draw of the Yawning Nothing',
        'Tides of Chaos: Studies of the Broken Flows',
        'Null Zones: Hythen & Surich’s Research of Anti Magic Zone',
        'Compulsion: the Forcing of a Mind',
        'Seeing Beyond the Sight: Illusionary Hallmarks',
        'A Brief History of the Magically Corrupted Races',
        'Tyven’s Folly of Illusion and Enchantment influence - Vol. 3',
        'To Create and Channel, Evocation and Conjuration: a Study of Flows',
        'Sight Beyond the Realm: Divination Visions of Maliksin',
        'The Dangers of the Shadow Weave: Arch Mage Quilore’s Secret War',
        'The Decay of a Soul: a Study of Resurrection - Vol. 5',
        'A Study of Foci: To Shape Reality Upon the Physical',
        'A Fragile Balance: Nature and It’s Secrets',
        'The Findings of the Wyrm Cult of Asrigah',
        'Eterhen’s Study of Wyvern: the Lesser Dragons',
        'Ethereal Enchantments of Magical Materials: Gyhaki’s Work',
        'Blades of Light in the Howling Night: the Angel’s Decent',
        'The Hungry Abyss: What Lays Beneath Our Fears',
        'Blue Fire’s Wrath: Spell Plague Anthology',
        'Power in the Blood: Elven and Other Fey Descendants',
        'The Mirroring Planes: Fequries Enquiries To the Planes and their Shared Features',
        'A Walk Within the Dead Light of Cold Suns: Tales From the Old Ones',
        'The Study of Gems: Kurin’s Geology - Vol. 7',
        'The Parables of Circles: infinite Lines and Endless Angles. First Prints',
        'Salt and Chalk: the Mundane Script of the Arcane',
        'Chasing Echos: insanity From the Mundane',
        'The Scaled King: Regime of Shadow - Vol. 6',
        'The Winds of Change: From Empire To Dust. Gnome Chronicles 6',
        'Chaotic Minds and Iron Wills: Corruption in Golems',
        'Uses of the Soul: Vol 5: Soul Lightning',
        'Chi: the Energies of Balance',
        'Wyfen’s Advance: a One Man Conquest of the Silver Spires',
        'Tar’tari Tendary: the City of Cosmic Shadows',
        'Secrets and Riddles of the Weave: Vol 14',
        'Shadow and Dust: What Rots and Remains',
        'Fey Unbound: Study of Entrapped Creatures and their Release',
        'Evil’s Horde: Hugar and Juik’s Notes On Demons',
        'Asamokology: the Nature of What Is Fake',
        'Breaking the Cycle: the Written War Against the Gods - Vol. 146',
        'Losing Yourself To Be One: Mind Flayer and the Hive Mind',
        'Stone Eyes: the Myth of Aqytorky'
    ],
    pun: [
        'How to make Illusions and Charm People',
        'The Illithid by Homer',
        'Memoirs of a Genasi',
        "The 7 Habits of Highly Effective Peasants (The sequel to 'The Hunger Games: a True Story')",
        'Diary of a Wimpy Kobold',
        "A Handmaid's Tail: a collection of short stories by notable Tieflings",
        'Ready Mindflayer One',
        'Dragon Turtles All the Way Down',
        'The Lion, the Witch, and the War-forged',
        'Gone with the Healing Wind',
        'To Kill a Manticore',
        'Planar-shifting for People in a Hurry',
        "One Flew Over the Kenku's Nest",
        'The Brothers Dragonbornov',
        'For Whom the Behir Tolls',
        'The Power of Mimics: Why Certain Encounters Have Extraordinary Impact',
        'The Wizard of Ooze',
        'Fight. Club. - A Comprehensive Guide for Barbarians',
        'The Secret Life of Bards',
        'The Giving Treant',
        "Alice's Adventures in the Underdark",
        '50 Shades of Fey',
        'Sense Motive and Sensability',
        'As I Lay at Zero Hit Points',
        'Great Incantations',
        'The Amityville Hook Horror',
        "Dante's Infernal",
        'The Girl with the Dragonborn Tattoo',
        "Lolth's Web",
        'Satyrs and Sensibility',
        'Pride and Prestidigitation',
        'The Constant Scrivener',
        'The Left Hand Casts Darkness',
        'The Cockatrice in the Rye',
        'One Thousand and One Knights',
        'The Grapes of Wraith: Wining and Dining the Undead',
        'The Adventures of Nancy Druid'
    ]
};


/***/ }),

/***/ "./lib/src/calcPercentage.ts":
/*!***********************************!*\
  !*** ./lib/src/calcPercentage.ts ***!
  \***********************************/
/*! exports provided: calcPercentage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcPercentage", function() { return calcPercentage; });
function calcPercentage(target, integer) {
    if (Array.isArray(integer)) {
        return integer.reduce(calc, target);
    }
    return calc(target, integer);
}
function calc(target, integer) {
    return (target / 100) * (100 + integer);
}


/***/ }),

/***/ "./lib/src/cheese.ts":
/*!***************************!*\
  !*** ./lib/src/cheese.ts ***!
  \***************************/
/*! exports provided: cheese */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cheese", function() { return cheese; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");

const cheese = {
    create: () => ({
        colour: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.colours),
        texture: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.textures),
        taste: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.tastes),
        smell: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.smells),
        cost: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.costs)
    })
};
const data = {
    colours: ['pale grey, with dark flecks', 'bright yellow', 'warm yellow', 'spotty yellow', 'pale yellow', 'light green', 'light greenish-yellow', 'white, with blue spots', 'white, with a purple rind', 'yellow, with a black waxy rind', 'dark, almost brown'],
    textures: ['crumbly, with a texture similar to plaster', 'rubbery, and squeaks while you eat it', 'rubbery, and squeaks rather disconcertingly while you eat it', 'crumbly, with bits going everywhere', 'somewhat rubbery', 'somewhat stringy', 'slightly stringy', 'rubbery, like a piece of leather that has been soaking in some greasy sludge', 'soft and spongey, with the occassional... crunch', 'soft, springy, and moist', 'gooey', 'moist and delicious', 'almost liquid once you bite through the rind', 'rock hard', 'mildly grainy', 'slippery', 'melted and gooey'],
    tastes: ['sharp', 'sharp and salty', 'somewhat bland', 'inoffensively mild', "salty, like a cow's salt-lick", 'rich and creamy', 'creamy, with hints of oak', 'strong, slightly salty, and extremely more-ish', 'smokey, with hints of rum', 'smokey, with hints of chili', 'salty, but immediately the spice from the peppers takes over', "bitter, with the rind tasting somewhere between a burnt log and dead bug, but the taste isn't entirely unpleasant", "a warm and smooth creaminess which envelopes your taste buds like a mother's embrace", 'entirely bland', 'incredibly and painfully sour', 'somehow meaty', 'earthy and buttery, like sautéed mushrooms', 'like it has bits of berries mixed in'],
    smells: ["pungent, as if it was the result of somebody's terrible diet decisions", 'somewhat sweet, with a heady aroma', 'like the ass of a cow in cheese form', "like the best parts of a farm's stable", 'like freshly baled hay', 'like freshly cut grass', 'like a lemon tree', 'like fresh cream', 'like a rotting corpse', 'like a roast duck filled with spices', 'like a delicious slice of bread toasted over a fire', 'like a slice of bread left in the fire far too long', 'smoky and savory', "like a halfling's sweaty foot", 'like an open sewer'],
    costs: [1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 9, 10, 10, 10, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
};


/***/ }),

/***/ "./lib/src/clampRolls.ts":
/*!*******************************!*\
  !*** ./lib/src/clampRolls.ts ***!
  \*******************************/
/*! exports provided: clampRolls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampRolls", function() { return clampRolls; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");

/**
 * Clamps every value presented to the 1-100 range.
 * Most useful for rolls.
 */
function clampRolls(rolls) {
    for (const roll of Object(_utils__WEBPACK_IMPORTED_MODULE_0__["keys"])(rolls)) {
        if (rolls[roll] > 100) {
            console.log(`${rolls[roll]} was over 100.`);
            rolls[roll] = 100;
            continue;
        }
        if (rolls[roll] < 1) {
            console.log(`${rolls[roll]} was under 1.`);
            rolls[roll] = 1;
        }
    }
}


/***/ }),

/***/ "./lib/src/closestMatch.ts":
/*!*********************************!*\
  !*** ./lib/src/closestMatch.ts ***!
  \*********************************/
/*! exports provided: closestMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestMatch", function() { return closestMatch; });
/**
 * FIXME: Somebody explain what this function does.
 */
function closestMatch(array, readout, key1, key2, val1, val2) {
    // An approximation of two dimensional arrays, that needs a rework.
    let scale1 = 1;
    let scale2 = 1;
    // Find highest and lowest values for each property in the array.
    let min1 = array[0][key1];
    let min2 = array[0][key2];
    let max1 = array[0][key1];
    let max2 = array[0][key2];
    for (let i = 1; i < array.length; i++) {
        if (min1 > array[0][key1])
            min1 = array[0][key1];
        if (min2 > array[0][key2])
            min2 = array[0][key2];
        if (max1 < array[0][key1])
            max1 = array[0][key1];
        if (max2 < array[0][key2])
            max2 = array[0][key2];
    }
    const range1 = max1 - min1;
    const range2 = max2 - min2;
    // Scale the values so that both ranges have equal weight when determining the "distance" to val1 and val2.
    if (range1 > range2) {
        scale2 = range1 / range2;
    }
    else if (range1 < range2) {
        scale1 = range2 / range1;
    }
    // Find the shortest "distance" from any item in the array to val1 and val2.
    // If multiple items in the array are of the same minimum distance, choose the last one.
    let closest = 0;
    let smallestDistance = calculateDistance(0);
    for (let i = 1; i < array.length; i++) {
        const currentDistance = calculateDistance(i);
        if (currentDistance <= smallestDistance) {
            smallestDistance = currentDistance;
            closest = i;
        }
    }
    return array[closest][readout];
    function calculateDistance(index) {
        const current1 = array[index][key1];
        const current2 = array[index][key2];
        const pos1 = Math.abs(current1 - val1) * scale1;
        const pos2 = Math.abs(current2 - val2) * scale2;
        return pos1 + pos2;
    }
}


/***/ }),

/***/ "./lib/src/colours.ts":
/*!****************************!*\
  !*** ./lib/src/colours.ts ***!
  \****************************/
/*! exports provided: colours, createColour, getAllColours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colours", function() { return colours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColour", function() { return createColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllColours", function() { return getAllColours; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const colours = {
    yellow: {
        properties: {
            isNatural: true,
            isPlant: true,
            isMineral: true,
            isPaint: true
        },
        colour: [
            'ivory',
            'cream',
            'yellow',
            'beige',
            'peridot',
            'citrine',
            'dark yellow',
            'light yellow',
            'bright yellow',
            'pastel yellow',
            'gold',
            'lemon yellow'
        ],
        coloured: [
            'daffodil',
            'lemon',
            'dandelion',
            'straw',
            'brass',
            'banana',
            'canary',
            'corn',
            'gold',
            'cheese',
            'butter',
            'amber'
        ]
    },
    orange: {
        properties: {
            isNatural: true,
            isPlant: false,
            isMineral: false,
            isPaint: true
        },
        colour: [
            'vermillion',
            'ochre',
            'orange',
            'burnt orange',
            'sherbert orange',
            'ginger',
            'amber',
            'light orange',
            'dark orange',
            'bright orange',
            'pastel orange',
            'carrot orange',
            'mahogany',
            'sunglow orange',
            'pumpkin orange'
        ],
        coloured: [
            'orangutan',
            'carrot',
            'tangerine',
            'apricot',
            'sandstone',
            'honey',
            'marmalade',
            'apricot',
            'pumpkin',
            'poppy',
            'marigold'
        ]
    },
    red: {
        properties: {
            isNatural: true,
            isPlant: false,
            isMineral: true,
            isPaint: true
        },
        colour: [
            'red',
            'bright red',
            'fiery red',
            'auburn',
            'crimson',
            'oxblood red',
            'vermillion',
            'maroon',
            'carmine',
            'dark red',
            'light red',
            'pale red',
            'pastel red',
            'apricot',
            'burgundy',
            'blood red',
            'cardinal',
            'coral',
            'pink',
            'mystic red',
            'rose red',
            'scarlet',
            'rust',
            'salmon'
        ],
        coloured: [
            'rose',
            'tomato',
            'blood',
            'fire',
            'rust',
            'coral',
            'apple',
            'chili',
            'raspberry',
            'watermelon',
            'fig',
            'cranberry',
            'cherry',
            'ruby',
            'cardinal'
        ]
    },
    purple: {
        properties: {
            isNatural: false,
            isPlant: false,
            isMineral: true,
            isPaint: false
        },
        colour: [
            'tyrian purple',
            'royal purple',
            'electric purple',
            'purple',
            'mauve',
            'violet',
            'pale purple',
            'dark purple',
            'light purple',
            'bright purple',
            'dull purple',
            'bright violet',
            'lavendar',
            'lilac',
            'pale plum',
            'pastel purple',
            'amethyst'
        ],
        coloured: [
            'thistle',
            'orchid',
            'blackberry',
            'eggplant',
            'lilac',
            'plum',
            'grape',
            'iris',
            'lavendar',
            'amethyst'
        ]
    },
    blue: {
        properties: {
            isNatural: false,
            isPlant: false,
            isMineral: true,
            isPaint: false
        },
        colour: [
            'light blue',
            'blue',
            'dark blue',
            'deep blue',
            'navy blue',
            'cerulean',
            'azure',
            'indigo',
            'turquoise',
            'periwinkle',
            'teal',
            'capri',
            'royal blue',
            'sapphire',
            'pastel blue'
        ],
        coloured: ['denim', 'sapphire', 'sea', 'storm', 'sky', 'peacock', 'topaz']
    },
    green: {
        properties: {
            isNatural: true,
            isPlant: true,
            isMineral: true,
            isPaint: true
        },
        colour: [
            'green',
            'olive',
            'sage',
            'emerald',
            'lime',
            'chartreuse',
            'mint',
            'seafoam green',
            'pear green',
            'apple green',
            'bright green',
            'dark green',
            'forest green',
            'light green',
            'celadon',
            'pastel green'
        ],
        coloured: [
            'seafoam',
            'shamrock',
            'seaweed',
            'pear',
            'pickle',
            'leaf',
            'grass',
            'frog',
            'turtle',
            'moss'
        ]
    },
    brown: {
        properties: {
            isNatural: true,
            isPlant: true,
            isMineral: true,
            isPaint: true
        },
        colour: [
            'brown',
            'umber',
            'chocolate',
            'caramel',
            'burnt butter',
            'mud brown',
            'tan',
            'dark brown',
            'rust brown',
            'sandy brown',
            'bronze',
            'sepia',
            'pastel brown'
        ],
        coloured: [
            'acorn',
            'almond',
            'baked bread',
            'bark',
            'beeswax',
            'coffee',
            'ale',
            'pecan',
            'mocha',
            'cork',
            'wood',
            'tea'
        ]
    },
    black: {
        properties: {
            isNatural: false,
            isPlant: false,
            isMineral: true,
            isPaint: false
        },
        colour: ['onyx', 'ebony', 'charcoal', 'licorice', 'black', 'slate'],
        coloured: [
            'charcoal',
            'licorice',
            'iron',
            'burnt bread',
            'obsidian',
            'crow',
            'soot',
            'ink',
            'raven',
            'storm cloud'
        ]
    },
    white: {
        properties: {
            isNatural: false,
            isPlant: false,
            isMineral: false,
            isPaint: true
        },
        colour: [
            'white',
            'ghost white',
            'pure white',
            'pearl white',
            'floral white',
            'vanilla',
            'seashell',
            'snow white',
            'ivory'
        ],
        coloured: [
            'cloud',
            'eggshell',
            'champagne',
            'bone',
            'snow',
            'tooth',
            'ivory',
            'cotton',
            'dandelion',
            'chalk',
            'swan',
            'milk',
            'sheep',
            'pearl',
            'lotus'
        ]
    }
};
function createColour(filters = {}) {
    const { banned = [] } = filters, properties = __rest(filters, ["banned"]);
    const available = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["keys"])(colours).filter(colour => {
        if (banned.includes(colour)) {
            return false;
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["keys"])(properties).every(property => {
            return colours[colour].properties[property] === properties[property];
        });
    });
    const selected = colours[Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(available)];
    const randomColour = Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(selected.colour);
    const randomColoured = Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(selected.coloured);
    return Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([randomColour, `${randomColoured} coloured`]);
}
/**
 * Returns all available colours and variants.
 */
function getAllColours() {
    return Object.values(colours).reduce((all, colourData) => {
        return all.concat(colourData.colour);
    }, []);
}


/***/ }),

/***/ "./lib/src/contentsFetcher.ts":
/*!************************************!*\
  !*** ./lib/src/contentsFetcher.ts ***!
  \************************************/
/*! exports provided: contentsFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentsFetcher", function() { return contentsFetcher; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");

/**
 * This is the function used to handle random encounters.
 * It needs a lot of work, and will change.
 */
function contentsFetcher(keyTarget, contentsTarget) {
    const key = Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(keyTarget);
    const value = contentsTarget[key];
    if (typeof value === 'function') {
        return value;
    }
    console.error('key:', key);
    console.error('value:', value);
    throw new TypeError('Not a function!');
}


/***/ }),

/***/ "./lib/src/createMagicArmour.ts":
/*!**************************************!*\
  !*** ./lib/src/createMagicArmour.ts ***!
  \**************************************/
/*! exports provided: createMagicArmour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMagicArmour", function() { return createMagicArmour; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");


function createMagicArmour() {
    const types = ['Padded Armour', 'Leather Armour', 'Studded leather Armour', 'Hide Armour', 'Chain shirt', 'Scale mail', 'Breastplate', 'Half plate', 'Ring mail', 'Chain mail', 'Splint Armour', 'Plate Armour', 'Shield'];
    const prefixes = ["Acolyte's", 'Amethyst', 'Arboreal', 'Arid', 'Astute', 'Arctic', "Artisan's", "Barbarian's", "Bard's", 'Blessed', 'Bloodthirsty', "Burglar's", 'Cavernous', 'Cardinal', 'Cerulean', 'Channelling', 'Charitable', 'Civilized', "Climber's", 'Concealing', 'Consecrated', 'Crystalline', "Dancer's", 'Dazzling', "Debtor's", 'Defensive', 'Deflecting', "Delver's", 'Diplomatic', "Druid's", 'Ephemeral', 'Evasive', 'Fair-weather', 'Lying', 'Favored', 'Feinting', 'Fen', 'Flanked', 'First', 'Fresh', 'Forgotten', 'Furious', 'Garnet', 'Glass', 'Granite', 'Grim', 'Harmonious', 'Heroic', 'Histrionic', 'Holy', "Inquisitor's", 'Inspired', 'Invisible', 'Lightweight', 'Loquacious', "Mage Killer's", 'Malachite', 'Masquarading', "Medic's", 'Moonlit', "Mortals'", 'Mournful', 'Obsidian', 'Opal', 'Pious', 'Prairie', "Preacher's", 'Precipice', 'Primeval', 'Reflexive', 'Renaissance', 'Resonant', 'Righteous', 'Regal', 'Runic', 'Sacred', 'Sagacious', "Sage's", "Sailor's", "Scribe's", 'Shading', 'Shadow', "Shepherd's", 'Shifting', 'Silent', 'Solar', 'Spiked', 'Spiritual', 'Subtle', "Surgeon's", 'Tenacious', "Tracker's", 'Trusty', 'Turquoise', 'Twilight', "Undertaker's", 'Unyielding', 'Vanguard', 'Veiled', 'Victorious', 'Vigilant', 'Vile', 'Violent', "War Leader's", 'Warded', "Watcher's", 'Waterborne', 'Winged', "Wizard's", 'Zen', 'Zircon', 'Abyssal', 'Alarming', 'Arborean', 'Arcadian', 'Astral', 'Beastial', "Beastspeaker's", 'Benedictine', 'Blasted', 'Bold', 'Bountiful', 'Bytopian', 'Carcerian', 'Cartographic', 'Chill', 'Clockwork', 'Cloy', 'Compassionate', 'Concordant', "Conjurer's", 'Corrosive', 'Crawling', "Drunkard's", 'Elysian', 'Etherbound', 'Exalting', 'Expeditious', 'Fathoming', 'Feathered', 'Feybound', 'Forgiven', "Fortune Teller's", 'Friendly', 'Gehennan', 'Gracious', 'Hadean', 'Healing', 'Hellish', 'Desperate', 'Leaping', "Liar's", 'Limbo', 'Locating', 'Malediction', 'Manipulating', "Master's", 'Maverick', 'Messenger', 'Meteoric', 'Miraculous', 'Mocking', 'Natural', 'Neutralizing', 'Nourishing', 'Pandemonium', 'Projecting', 'Protective', 'Revealing', 'Riutal', "Sailor's", 'Secret', 'Shadowbound', 'Shielding', "Smith's", 'Sparkling', 'Striding', 'Translucent', "Trickster's", 'Accurate', 'Verdant', 'Windborne', 'Wrathful', 'Thunderous', 'Chained', "Spider's", 'Heliacal', 'Crippling', 'Lunar', "Fatespinner's", 'Rooting', 'Mirrored', 'Vulpine', 'Submerged', 'Comforting', "Brawler's", 'Eagle-eye', 'Lupine', 'Chiropteran', 'Black'];
    const suffixes = ['of the Acolyte', 'of Amethyst', 'of the Woodlands', 'of the Wastelands', 'of the Astute', 'of the North', 'of the Artisan', 'of the Barbarian', 'of the Bard', 'of Blessings', 'of Bloodthirst', 'of the Burglar', 'of the Underdark', 'of the Lodestone', 'of Storms', 'of Channelling', 'of Charity', 'of the Hearth', 'of the Climber', 'of Concealment', 'of Consecration', 'of Crystal', 'of the Dancer', 'of Dazzling', 'of Debts', 'of Defence', 'of Deflection', 'of the Delver', 'of Diplomacy', 'of the Druid', 'of Transience', 'of Evasion', 'of Fair-weather', 'of Falsehoods', 'of the Favored', 'of Feinting', 'of the Glade', 'of the Flanked', 'of Reflexes', 'of Cleansing', 'of the Forgotten', 'of Fury', 'of Garnet', 'of Glass', 'of the Mountain', 'of Coercion', 'of Harmony', 'of Heroes', 'of Histrionics', 'of Faith', 'of the Inquisitor', 'of Inspiration', 'of Invisibility', 'of Mobility', 'of the Silver Tongue', 'of the Mage Killer', 'of Malachite', 'of the Masquarade', 'of the Caduceus', 'of the Moon', 'of Mortals', 'of Sorrow', 'of Obsidian', 'of Opal', 'of the Pious', 'of the Plains', 'of the Preacher', 'of the Crags', 'of the Jungle', 'of Reflexes', 'of the Renaissance', 'of Resonance', 'of Righteousness', 'of Royalty', 'of Runes', 'of the Sacred', 'of Acumen', 'of the Sage', 'of the Sea', 'of the Scribe', 'of Shade', 'of Shadows', 'of the Shepherd', 'of Shifting', 'of the Night', 'of the Sun', 'of Teeth', 'of the Divine', 'of Subtleties', 'of the Surgeon', 'of the Tenacious', 'of the Tracker', 'of Resurgence', 'of Turquoise', 'of Twilight', 'of the Undertaker', 'of the Unyielding', 'of the Vanguard', 'of the Veil', 'of Victory', 'of Vigilance', 'of Villains', 'of Violence', 'of the War Leader', 'of Wards', 'of the Watcher', 'of the Sea', 'of Wings', 'of the Wizard', 'of Zen', 'of Zircon', 'of the Abyss', 'of Alarms', 'of Arborea', 'of Arcadia', 'of the Astral Sea', 'of the Beastlands', 'of Beastspeakers', 'of Benediction', 'of Blasting', 'of Boldness', 'of Bounty', 'of Bytopia', 'of Carceri', 'of Cartography', 'of Chills', 'of Gears', 'of Cloying', 'of Compassion', 'of Concordance', 'of the Conjurer', 'of Dissolving', 'of Vermin', 'of Taverns', 'of Elysium', 'of Ethereal Shores', 'of Exaltation', 'of Expedience', 'of Tongues', 'of Feathers', 'of the Fey', 'of Forgiveness', 'of the Fortune Teller', 'of Friendship', 'of Gehenna', 'of Grace', 'of Hades', 'of Healing', 'of the Nine Hells', 'of Last Chances', 'of Leaping', 'of Lies', 'of Limbo', 'of Locating', 'of Malediction', 'of Manipulation', 'of Servants', 'of the Maverick', 'of Messages', 'of Falling Stars', 'of Miracles', 'of Mockery', 'of Nature', 'of Neutrality', 'of Nourishment', 'of Pandemonium', 'of Projection', 'of Protection', 'of Revelation', 'of Rituals', 'of the Sea', 'of Secrets', 'of the Shadowfell', 'of Shielding', 'of Reparations', 'of Lights', 'of Strides', 'of Translucence', 'of Trickery', 'of Truth', 'of Druidcraft', 'of the Labyrinth Wind', 'of Ysgard', 'of the Rolling Thunder', 'of Chains', 'of the Spider', 'of the Sun', 'of Crippling', 'of the Moon', 'of the Fates', 'of Roots', 'of Mirrors', 'of the Fox', 'of the Depths', 'of Comfort', 'of Brawling', 'of the Eagle', 'of the Wolf', 'of the Bat', 'of Darkness'];
    const properties = [
        'The bearer gains a +1 bonus to Wisdom (Religion) checks',
        'Reduces psychic damage to the bearer by 2',
        'Treat as a +1 armor after the bearer has taken a long rest in a forest. If the bearer leaves the forest, this property becomes temporarily inert',
        'Treat as a +1 armor after the bearer has taken a long rest in a desert. If the bearer leaves the desert, this property becomes temporarily inert',
        'It takes half the time to don or doff this armor than a normal armor of this type',
        'The bearer suffers no harm in temperature as cold as -20 degrees Fahrenheit',
        "This armor is a swiss army knife of enchanted appendages that can take the form of any artisan's tools, from Alchemist's and Brewer's supplies to Weaver's and Woodcarver's tools (see p. 154 of the PHB for a complete set of artisan's tools)",
        'The bearer gains a +1 bonus to Strength (Athletics) checks',
        'The bearer gains +1 to Charisma (Performance) checks',
        'Whenever bearer of this item receives divine healing, they gain an additional 1d4 hit points',
        'The bearer can expend a hit die to turn this into a +1 armor for 1d4 turns',
        'The bearer gains +1 to Dexterity (Sleight of Hand) checks',
        'Treat as a +1 armor after the bearer has taken a long rest in a cave. If the bearer leaves the cave, this property becomes temporarily inert',
        'The wielder can use an action to learn which way is north',
        'Reduces lightning damage to the bearer by 2',
        'Once per day, the bearer may ignore the Verbal and/or Somatic components of a spell they are casting',
        'If the bearer donates 100gp or more to a temple of a goodly deity, this becomes a +1 armor for the next 24 hours. If they go longer than a month without making any such donations, they gain a -1 AC penalty until a suitable donation is made',
        'Treat as a +1 armor after the bearer has taken a long rest in an living urban environment. If the bearer leaves the city, this property becomes temporarily inert',
        'This armor is suited with harnesses, rope, and other climbing tools are readily in reach. The bearer may treat this armor as a climbing kit',
        'The bearer may spend one action assembling components of this armor into a dagger. A person searching the bearer for weapons must make a DC 20 Intelligence (Investigation) check to discover this property',
        'Treat this as a +1 armor when the bearer is being attacked by Undead',
        'Treat as +1 armor until the bearer takes a critical hit, at which point it then loses this property',
        'The bearer gains a +1 bonus to Dexterity (Acrobatics) checks',
        'Once per day, the bearer may spend an action to ignite the magic in this armor, causing it to flare brilliantly. Any creature within a 10 foot radius must use their reaction to shield their eyes or be blinded until the end of their next turn',
        'The first 1 bludgeoning, piercing, or slashing damage from any source is negated. However, the total amount of damage prevented from that day acts as a negative modifier on death saving throws. So, if the armor prevented 5 points of damage that day, the bearer has a -5 penalty on death saving throws',
        'Whenever the bearer takes a dodge action, they may move an additional 5 feet',
        'The bearer may spend their reaction to treat this as +1 armor vs. ranged weapon attacks until the beginning of their next turn',
        "While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward",
        "The bearer gains proficiency in a language of the DM's choice",
        'The bearer gains a +1 bonus to Intelligence (Nature) checks',
        'Once per day, the bearer may spend their reaction to gain their Wisdom modifier to their AC until the beginning of their next turn',
        'Whenever the wearer takes a dodge action, they gain +1 AC until the end of the turn',
        'The bearer may treat this as +1 armor if the bearer has more than half of their maximum hit points',
        'The bearer gains a +1 bonus to Charisma (Deception) checks',
        'Once per day, the bearer may roll a saving throw with advantage',
        'Whenever the bearer uses the help action in combat, they may treat this as a +1 armor until the beginning of their next turn',
        'Treat as a +1 armor after the bearer has taken a long rest in a swamp. If the bearer leaves the swamp, this property becomes temporarily inert',
        'The wearer may treat this as +1 armor if two or more enemies are adjacent to them',
        'The bearer gain a +1 bonus to initiative rolls',
        'This armor never gets dirty and remains odorless, even in the most filthy dungeon',
        'The bearer may spend an action to attempt to ignite the old magic in this armor with a DC 13 Charisma check. If successful, treat this as a +1 armor as long as the bearer maintains concentration on this effect, maximum 10 minutes',
        'Treat as a +1 armor when the bearer is raging',
        'Reduces fire damage to the bearer by 2',
        'The bearer may treat this as +1 armor as long as the bearer is at full health',
        'Any effect that would move the bearer against their will is reduced in distance by 5 feet',
        'The bearer gains a +1 bonus to Charisma (Intimidation) checks if their armor is visible',
        'Attuning to this item takes only 1 minute',
        'The bearer has advantage on saving throws vs. fear',
        'the bearer gains +1 to Charisma (Performance) checks',
        'When the bearer of this item rolls hit dice, they can choose to re-roll them and take the second result',
        'The bearer gains a +1 bonus to Intelligence (Investigation) checks',
        'The bearer regains their Constitution modifier in temporary hit points whenever they gain or use inspiration',
        'Once worn, this armor turns invisible (although not the wearer)',
        'This armor is 10% lighter than normal armor of this type. If it has a Strength requirement to use, it is reduced by 1',
        'The bearer gains +1 to Charisma (Persuasion) checks',
        'The bearer may spend their reaction to treat this as +1 armor vs. spell attacks until the beginning of their next turn',
        'Reduces poison damage to the bearer by 2',
        'The bearer has advantage on skill checks involving disguise kits',
        "Lined with pockets and compartments and stocked with medical supplies, the bearer may treat this armor as a healer's kit",
        'The bearer may treat this as +1 armor when moonlight is shining directly on this armor',
        'At the end of a turn where the bearer failed a death saving throw, the magic within this armor will attempt to stabilize the bearer. It rolls a Wisdom (Medicine) check with a +3 modifier',
        'When an ally falls unconscious in battle, the bearer gains a +1 AC bonus for the next 10 minutes. If that ally stabilizes or awakens, the bearer loses this bonus',
        'Reduces acid damage to the bearer by 2',
        'Reduces cold damage to the bearer by 2',
        'Whenever the bearer shaves their head, treat this as a +1 armor until the end of the day. They must wait a week until they have long enough hair to re-enact this ritual',
        'Treat as a +1 armor after the bearer has taken a long rest in a grassland. If the bearer leaves the grassland, this property becomes temporarily inert',
        'The bearer may extend the range of their Channel Divinity by 5 feet',
        'Treat as a +1 armor after the bearer has taken a long rest in the mountains. If the bearer leaves the mountain, this property becomes temporarily inert',
        'Treat as a +1 armor after the bearer has taken a long rest in a jungle. If the bearer leaves the jungle, this property becomes temporarily inert',
        'If the bearer is first in initiative order, treat this as +1 armor for 1 minute',
        'Once per day, the bearer may gain +1 to any skill check',
        'The bearer can spend an action and 1 ki point to treat this as +1 armor for 1 minute',
        'Treat this as +1 armor during the day when attuned to a good aligned character',
        'This armor is richly decorated and fashionable. Although it retains a hint of the ruggedness of a military garment, it could function as well in a ballroom as the battlefield. To the outside observer, you appear to be keeping an Aristocratic lifestyle expense',
        'Whenever bearer casts a spell, treat this as +1 armor until the beginning of their next turn',
        'The bearer may increase their Lay on Hands hit point pool by 5',
        'The bearer gains +1 to Wisdom (Insight) checks',
        'The bearer gains a +1 bonus to Intelligence (History) checks',
        'Treat as a +1 armor after the bearer has taken a long rest on the high seas. If the bearer leaves the ocean, this property becomes temporarily inert',
        "This armor unfolds to reveal animated appendages that are equipped with writing implements, magnifying glasses, and book stands. The armor aids the bearer in transcription tasks: it knows 3 languages of the DM's choice and halves the amount of time it takes the bearer to copy any text, including spells into spellbooks",
        'The bearer suffers no harm in temperatures as high as 120 degrees Fahrenheit',
        'Treat as a +1 armor when in dim light',
        'The bearer gains a +1 bonus to (Wisdom) Animal Handling checks',
        'The bearer may change minor aspects of the physical appearance of this item',
        'If this armor imposed disadvantage to stealth, it no longer does. Otherwise, the bearer gains a +1 bonus to Dexterity (Stealth) checks',
        'The bearer may treat this as +1 armor when in direct sunlight',
        'Whenever a creature begins their turn grappling or being grappled by the bearer, they take 1d4 piercing damage',
        "This armor is naught but a prayer written on a scrap of vellum, decorated with religious motifs of a particular god. Once per day, the bearer may spend 1 minute to read the prayer out loud, and at the end this armor will manifest and encase the bearer. The armor disappears if you act in any way that is not in accordance to the god's teachings",
        "The bearer gains proficiency in Thieves' Cant",
        'The bearer gains a +1 bonus to Wisdom (Medicine) checks',
        'When the bearer takes a long rest, they gain back one additional hit die',
        'The bearer gains a +1 to Wisdom (Survival) checks',
        'Treat this as +1 armor if the bearer has half their maximum hit points or less',
        'Reduces thunder damage to the bearer by 2',
        'Within 1 hour before or after the rising and setting of the sun, or during a solar eclipse, the armor comes alive with magic and the bearer may treat this as +1 armor',
        'Once deceased, the body wearing this armor cannot be animated or raised from the dead',
        'The bearer may treat this as +1 armor if they have taken damage since the beginning of their last turn. This effect ends at the beginning of their next turn',
        'The bearer may spend their reaction to gain a +1 AC bonus vs. melee weapon attacks until the beginning of their next turn',
        'The wearer gains a +1 bonus to Dexterity (Stealth) checks when taking a hide action',
        "Whenever the bearer kills a creature while wearing this amror, they gain temporary hit points equal to the creature's CR",
        'The bearer gains +2 to their Passive Perception',
        'Treat this as +1 armor at night when attuned to an evil aligned character',
        'The bearer may choose to treat the heavy metal gauntlets of this armor as a Mace',
        'The bearer can use an action to amplify their voice so that it clearly carries for up to 300 feet',
        'The wearer cannot be possessed while wearing this armor',
        'Treat as +1 armor during surprise rounds',
        'The item floats on water or other liquids. Its bearer has advantage on Strength (Athletics) checks to swim',
        'The bearer gains +5 speed',
        'The bearer gains a +1 to Intelligence (Arcana) checks',
        'Treat this as +1 armor for one minute after meditating with it for one minute',
        'Reduces force damage to the bearer by 2',
        'When on the plane of the Abyss, the bearer has advantage on saving throws against Abyssal Corruption. (DMG p. 62)',
        'Contains 1d4 unreplenishable charges of the Alarm spell (1st level)',
        'When on the plane of Arborea, the bearer has advantage on saving throws against the effects of Intense Yearning. (DMG p. 61)',
        'When on the plane of Arcardia, the bearer is unaffected by Planar Vitality (DMG p. 67)',
        'When travelling the Astral Sea, it takes half the number of hours to locate a Color Pool to a specific plane. You have advantage on saving throws vs. the effects of Psychic Wind (DMG p. 47-48)',
        'When on the plane of The Beastlands, the bearer has advantage on saving throws vs. Beast Transformation (DMG p. 60)',
        'Contains 1d4 unreplenishable charges of the Speak with Animals spell (1st level)',
        'Contains 1d4 unreplenishable charges of the Healing Word spell (1st level)',
        'Contains 1d4 unreplenishable charges of the Fire Bolt spell (1st level)',
        'Contains 1d4 unreplenishable charges of the Heroism spell (1st level)',
        'Contains 1d4 unreplenishable charges of the Goodberry spell (1st level)',
        'When on the plane of Bytopia, the bearer has advantage on saving throws against Pervasive Goodwill. (DMG p. 59-60)',
        'When on the plane of Carceri, the bearer knows the direction to the closest secret exit from this prison plane. (DMG p. 63)',
        'On its own volition, the item records a map of the environments that the bearer is exploring, and can magically project it for the bearer to see',
        'Contains 1d4 unreplenishable charges of the Ray of Frost spell (1st level)',
        'When on the plane of Mechanus, the bearer has advantage on saving throws against Imposing Order (DMG p. 66)',
        'The bearer may cast Friends once per day',
        'Contains 1d4 unreplenishable charges of the Cure Wounds spell (1st level)',
        'The bearer has advantage on saving throws vs. Psychic Dissonance when travelling the Outer Planes. (DMG p. 59)',
        'The bearer may cast Prestidigitation once per day',
        'Contains 1d4 unreplenishable charges of the Acid Splash spell (1st level)',
        'The crawling things of the earth, such as insects, snakes, and vermin, are attracted to this item. When placed on the ground, such creatures will scurry toward the item like moths drawn to the flame',
        'The bearer always knows the direction to the closest alcoholic beverage',
        'When on the plane of Elysium, the bearer has advantage on saving throws against the effects of Overwhelming Joy (DMG p. 60)',
        "The bearer can see creatures in the Border Ethereal that overlap with their plane as clearly as if they were fully in the bearer's plane. Such creatures appear as apparitions or ghosts",
        'Contains 1d4 unreplenishable charges of the Bless spell (1st level)',
        'Contains 1d4 unreplenishable charges of the Expeditious Retreat spell',
        'Contains 1d4 unreplenishable charges of the Comprehend Languages spell',
        'Contains 1d4 unreplenishable charges of the Feather Fall spell (1st level)',
        'The bearer knows the general direction to the closest Fey Crossing within a 60 mile radius. (DMG p. 50)',
        'When on the plane of Mount Celestia, the bearer of this item can receive the benefits of Blessed Beneficence regardless of their alignment',
        'Every time you hit by a monster, you glimpse a random image of its future or past',
        'Contains 1d4 unreplenishable charges of the Animal Friendship spell (1st level)',
        'When on the plane of Gehenna, the bearer has advantage on saving throws against Cruel Hindrance. (DMG p. 63)',
        'The bearer may cast Spare the Dying once per day',
        'When on the plane of Hades, the bearer has advantage on saving throws against Vile Transformation. (DMG p. 63)',
        'This item contains 4 weak healing nodes. As an action, a character can use one node to heal 1d4 hit points at touch range. The item regains 1d4 charges at sunrise',
        'When in the Nine Hells, the bearer has advantage on saving throws against Pervasive Evil. (DMG p. 64)',
        'The bearer has advantage on perception checks when searching for items long lost in the the Swamp of Oblivion on the Plane of Earth. (DMG p. 54)',
        'Contains 1d4 unreplenishable charges of the Jump spell (1st level)',
        'Contains 1d4 unreplenishable charges of the Silent Image spell (1st level)',
        'When on the plane of Limbo, the bearer has advantage to Intelligence checks to alter or move non-magical objects within the plane. (DMG p. 61-62)',
        'Once attuned, the bearer always knows the exact location of this item',
        'Contains 1d4 unreplenishable charges of the Bane spell(1st level)',
        'The bearer may cast Mage Hand once per day',
        'Contains 1d4 unreplenishable charges of the Unseen Servant spell (1st level)',
        'The bearer has a +1 bonus to any skill check involving gambling and games of chance (Insight, Sleight of Hand, Investigation, etc)',
        'The bearer may cast Message once per day',
        'Contains 1 unreplenishable charge of Scorching Ray cast at 2nd level',
        'The bearer may cast Thaumaturgy once per day',
        'The bearer may cast Vicious Mockery once per day',
        'Contains 1d4 unreplenishable charges of the Locate Animals or Plants spell (1st level)',
        'Contains 1d4 unreplenishable charges of the Protection from Good and Evil spell (1st level)',
        'The bearer rarely feels hungry, and only needs to consume one-fifth the usual amount of food',
        'When on the plane of Pandemonium, the bearer has advantage on saving throws against the Mad Winds. (DMG p. 62)',
        'The bearer can send messages mentally to willing characters within 30 feet. This communication is one-way only',
        'The bearer may cast Blade Ward once per day',
        'Contains 1d4 unreplenishable charges of the Detect Magic spell (1st level)',
        'Whenever the bearer is casting a spell as a ritual, they have advantage to maintain concentration during the ritual',
        'Treat as a +1 weapon after the bearer has taken a long rest at sea. If the bearer steps on dry land, this property becomes temporarily inert',
        'Contains 1d4 unreplenishable charges of the Illusory Script spell (1st level)',
        'The bearer knows the general direction to the closest Shadow Crossing within a 60 mile radius. They have advantage on saving throws vs. Shadowfell Dispair (DMG p. 51-52)',
        'This item contains 1d4 unreplenishable charges of the Shield spell',
        'The bearer may cast Mending once per day',
        'The bearer may cast Dancing Lights once per day',
        'Contains 1d4 unreplenishable charges of the Longstrider spell (1st level)',
        'The bearer gains an extra level one spell slot, which recovers only after a full moon rises',
        'The bearer may cast Minor Illusion once per day',
        'The bearer may cast True Strike once per day',
        'The bearer may cast Druidcraft once per day',
        'When in the Plane of Air, the bearer can navigate the Labyrinth Wind intuitively, and knows the path to the nearest Earth Mote within 60 miles',
        'When on the plane of Ysgard, the bearer is unaffected by Immortal Wrath. (DMG p. 61)',
        'Contains 1 unreplenishable charge of Shatter cast at 2nd level',
        'Contains 1 unreplenishable charge of Hold Person cast at 2nd level',
        'Contains 1 unreplenishable charge of Web cast at 2nd level',
        'Contains 1 unreplenishable charge of Flaming Sphere cast at 2nd level',
        'Contains 1 unreplenishable charge of Ray of Enfeeblement cast at 2nd level',
        'Contains 1 unreplenishable charge of Moonbeam cast at 2nd level',
        'Contains 1 unreplenishable charge of Augury cast at 2nd level',
        'Contains 1 unreplenishable charge of Entanglement cast at 2nd level',
        'Contains 1 unreplenishable charge of Mirror Image cast at 2nd level',
        'Characters trying to track the bearer have a -1 penalty to their skill checks',
        'Treat as a +1 armor when completely submerged in water',
        'Treat as a +1 armor if the bearer has any levels of exhaustion',
        "Whenever a bearer makes an attack with an improvised weapon, treat as a +1 armor until the beginning of the bearer's next turn",
        'The bearer can clearly see twice as far and gains advantage on Wisdom (perception) checks that use sight',
        'The bearer can detect and distinguish scents like a wolf and gains advantage on Wisdom (Perception) checks that use smell',
        'The bearer can hear a pin drop in a crowded room and gains advantage on Wisdom (Perception) checks that use hearing',
        'Contains 1 unreplenishable charge of Darkness cast at 2nd level.'
    ];
    const prefixArmourRoll = Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(properties.length - 1);
    const suffixArmourRoll = Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(properties.length - 1);
    const armour = {
        type: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(types),
        prefixArmour: prefixes[prefixArmourRoll],
        suffixArmour: suffixes[suffixArmourRoll],
        prefixProperty: properties[prefixArmourRoll],
        suffixProperty: properties[suffixArmourRoll]
    };
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(armour, {
        description: `${armour.prefixProperty}. ${armour.suffixProperty}`,
        name: `${armour.prefixArmour} ${armour.type} ${armour.suffixArmour}`
    });
    return armour;
}


/***/ }),

/***/ "./lib/src/createMagicTrinket.ts":
/*!***************************************!*\
  !*** ./lib/src/createMagicTrinket.ts ***!
  \***************************************/
/*! exports provided: createMagicTrinket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMagicTrinket", function() { return createMagicTrinket; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");


function createMagicTrinket() {
    const types = ['Belt', 'Bracers', 'Circlet', 'Gauntlets', 'Amulet', 'Boots', 'Hat', 'Helm', 'Scabbard', 'Orb', 'Cap', 'Amulet', 'Pendant', 'Medallion', 'Mask', 'Cloak', 'Ring', 'Quiver', 'Tiara', 'Collar', 'Gloves', 'Candlestick', 'Brooch', 'Decorative Dagger', 'Mirror', 'Jade Pyramid', 'Bronze Figurine', 'Dragon Fang Pendant', 'Pawn', 'Puzzlebox', 'Linen Handkerchief', 'Iron Key', 'Cloth Doll', 'Oil Lamp', 'Ale Stine', "Imp's Skull", 'Walking Stick', 'Ingot', 'Meteor Stone Fragment', 'Torch', 'Silver Bell', 'Coin', 'Leather Pouch', 'Quill Pen', 'Scales', 'Gaming Die', 'Small Brass Cage', 'Chime', 'Iron Ring', 'Amulet', 'Emblem', 'Hourglass', 'Padlock', 'Magnifying glass', 'Manacles', 'Perfume Vial', "Miner's Pick", 'Pouch', 'Robes', 'Shovel', 'Signal Whistle', 'Spyglass', 'Vial', 'Waterskin', 'Abacus', 'Crystal', 'Staff', 'Wand', 'Book', 'Glass Bottle', 'Crowbar', 'Totem', 'Flask', 'Tankard', 'Instrument', 'Playing Card Set'];
    const prefixes = ['Abyssal', "Acolyte's", 'Adamantine', 'Adroit', 'Alarming', 'Arborean', 'Arcadian', 'Arctic', 'Arresting', "Assassin's", 'Astral', "Barbarian's", "Bard's", 'Beastial', "Beastspeaker's", 'Benedictine', 'Blasted', 'Blessed', 'Bold', 'Bountiful', "Burglar's", 'Bytopian', 'Carcerian', 'Cardinal', 'Cartographic', 'Channelling', 'Chill', 'Clockwork', 'Cloy', 'Compassionate', 'Concordant', "Conjurer's", 'Corrosive', 'Crawling', "Dancer's", 'Defensive', "Delver's", 'Desperate', "Druid's", "Drunkard's", 'Dynamic', "Eavesdropper's", 'Elysian', 'Etherbound', 'Exalting', 'Expeditious', 'Inaccurate', 'Fathoming', 'Favored', 'Feathered', 'Feybound', 'First', 'Forgiven', "Fortune Teller's", 'Friendly', 'Gehennan', 'Gracious', 'Grim', 'Hadean', 'Harmonious', 'Healing', 'Hellish', 'Heroic', 'Histrionic', 'Holy', 'Iconic', "Inquisitor's", 'Inspired', 'Leaping', "Liar's", 'Limbo', 'Locating', 'Loquacious', 'Malediction', 'Manipulating', "Master's", 'Maverick', 'Messenger', 'Meteoric', 'Mindful', 'Miraculous', 'Mocking', 'Natural', 'Neutralizing', 'Nimble', 'Nourishing', 'Pandemonium', "Preacher's", 'Projecting', 'Protective', "Reaper's", 'Renaissance', 'Revealing', 'Riutal', 'Sacred', 'Sagacious', "Sage's", 'Secret', 'Sentinel', 'Shading', 'Shadowbound', "Shepherd's", 'Shielding', 'Shifting', 'Silent', "Smith's", "Sojourner's", 'Solemn', 'Sparkling', 'Striding', "Surgeon's", 'Tenacious', "Tracker's", 'Translucent', "Trickster's", 'Accurate', 'Unbroken', 'Verdant', 'Victorious', 'Vigilant', 'Vigorous', 'Vital', "War Leader's", 'Waterborne', 'Windborne', "Wizard's", 'Wrathful'];
    const suffixes = ['of the Abyss', 'of the Acolyte', 'of Adamantine', 'of Intellect', 'of Alarms', 'of Arborea', 'of Arcadia', 'of the North', 'of Safety', 'of the Assassin', 'of the Astral Sea', 'of the Barbarian', 'of the Bard', 'of the Beastlands', 'of Beastspeakers', 'of Benediction', 'of Blasting', 'of Blessings', 'of Boldness', 'of Bounty', 'of the Burglar', 'of Bytopia', 'of Carceri', 'of the Lodestone', 'of Cartography', 'of Channelling', 'of Chills', 'of Gears', 'of Cloying', 'of Compassion', 'of Concordance', 'of the Conjurer', 'of Dissolving', 'of Vermin', 'of the Dancer', 'of Defence', 'of the Delver', 'of Last Chances', 'of the Druid', 'of Taverns', 'of the Dynamo', 'of Eavesdropping', 'of Elysium', 'of Ethereal Shores', 'of Exaltation', 'of Expedience', 'of Falsehoods', 'of Tongues', 'of the Favored', 'of Feathers', 'of the Fey', 'of Speed', 'of Forgiveness', 'of the Fortune Teller', 'of Friendship', 'of Gehenna', 'of Grace', 'of Coercion', 'of Hades', 'of Harmony', 'of Healing', 'of the Nine Hells', 'of Heroes', 'of Histrionics', 'of Faith', 'of Symbols', 'of the Inquisitor', 'of Inspiration', 'of Leaping', 'of Lies', 'of Limbo', 'of Locating', 'of the Silver Tongue', 'of Malediction', 'of Manipulation', 'of Servants', 'of the Maverick', 'of Messages', 'of Falling Stars', 'of Mindfulness', 'of Miracles', 'of Mockery', 'of Nature', 'of Neutrality', 'of Agility', 'of Nourishment', 'of Pandemonium', 'of the Preacher', 'of Projection', 'of Protection', 'of the Reaper', 'of the Renaissance', 'of Revelation', 'of Rituals', 'of the Sacred', 'of Acumen', 'of the Sage', 'of Secrets', 'of the Sentinel', 'of Shade', 'of the Shadowfell', 'of the Shepherd', 'of Shielding', 'of Shifting', 'of the Night', 'of Reparations', 'of the Sojouner', 'of Solemnity', 'of Lights', 'of Strides', 'of the Surgeon', 'of the Tenacious', 'of the Tracker', 'of Translucence', 'of Trickery', 'of Truth', 'of Heart', 'of Druidcraft', 'of Victory', 'of Vigilance', 'of Vigor', 'of Vitality', 'of the War Leader', 'of the Sea', 'of the Labyrinth Wind', 'of the Wizard', 'of Ysgard'];
    const properties = [
        'When on the plane of the Abyss, the bearer has advantage on saving throws against Abyssal Corruption. (DMG p. 62)',
        'The bearer gains a +1 bonus to Wisdom (Religion) checks.',
        'The item is indestructible.',
        'The bearer gains +1 bonus to Intelligence saving throws.',
        'Contains 1d4 unreplenishable charges of the Alarm spell (1st level).',
        'When on the plane of Arborea, the bearer has advantage on saving throws against the effects of Intense Yearning. (DMG p. 61)',
        'When on the plane of Arcardia, the bearer is unaffected by Planar Vitality (DMG p. 67)',
        'The bearer suffers no harm in temperature as cold as -20 degrees Fahrenheit.',
        'Once per day, the bearer may use their reaction to reduce fall damage by 1d6 until the end of turn.',
        'The bearer may add their proficiency bonus to damage rolls dealt during surprise rounds.',
        'When travelling the Astral Sea, it takes half the number of hours to locate a Color Pool to a specific plane. You have advantage on saving throws vs. the effects of Psychic Wind (DMG p. 47-48)',
        'The bearer gains a +1 bonus to Strength (Athletics) checks.',
        'The bearer gains +1 to Charisma (Performance) checks.',
        'When on the plane of The Beastlands, the bearer has advantage on saving throws vs. Beast Transformation (DMG p. 60)',
        'Contains 1d4 unreplenishable charges of the Speak with Animals spell (1st level).',
        'Contains 1d4 unreplenishable charges of the Healing Word spell (1st level).',
        'Contains 1d4 unreplenishable charges of the Fire Bolt spell (1st level).',
        'Whenever bearer of this item receives divine healing, they gain an additional 1d4 hit points.',
        'Contains 1d4 unreplenishable charges of the Heroism spell (1st level).',
        'Contains 1d4 unreplenishable charges of the Goodberry spell (1st level).',
        'The bearer gains +1 to Dexterity (Sleight of Hand) checks.',
        'When on the plane of Bytopia, the bearer has advantage on saving throws against Pervasive Goodwill. (DMG p. 59-60)',
        'When on the plane of Carceri, the bearer knows the direction to the closest secret exit from this prison plane. (DMG p. 63)',
        'The wielder can use an action to learn which way is north.',
        'On its own volition, the item records a map of the environments that the bearer is exploring, and can magically project it for the bearer to see.',
        'Once per day, the bearer may ignore the Verbal and/or Somatic components of a spell they are casting.',
        'Contains 1d4 unreplenishable charges of the Ray of Frost spell (1st level).',
        'When on the plane of Mechanus, the bearer has advantage on saving throws against Imposing Order (DMG p. 66)',
        'The bearer may cast Friends once per day.',
        'Contains 1d4 unreplenishable charges of the Cure Wounds spell (1st level).',
        'The bearer has advantage on saving throws vs. Psychic Dissonance when travelling the Outer Planes. (DMG p. 59)',
        'The bearer may cast Prestidigitation once per day.',
        'Contains 1d4 unreplenishable charges of the Acid Splash spell (1st level).',
        'The crawling things of the earth, such as insects, snakes, and vermin, are attracted to this item. When placed on the ground, such creatures will scurry toward the item like moths drawn to the flame.',
        'The bearer gains a +1 bonus to Dexterity (Acrobatics) checks.',
        'Whenever the bearer takes a dodge action, they may move an additional 5 feet.',
        "While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.",
        'The bearer has advantage on perception checks when searching for items long lost in the the Swamp of Oblivion on the Plane of Earth. (DMG p. 54)',
        'The bearer gains a +1 bonus to Intelligence (Nature) checks.',
        'The bearer always knows the direction to the closest alcoholic beverage.',
        'The bearer has +1 to Charisma saving throws.',
        'As long as it is on the same plane, the bearer can hear through this item as if they were present.',
        'When on the plane of Elysium, the bearer has advantage on saving throws against the effects of Overwhelming Joy (DMG p. 60)',
        "The bearer can see creatures in the Border Ethereal that overlap with their plane as clearly as if they were fully in the bearer's plane. Such creatures appear as apparitions or ghosts.",
        'Contains 1d4 unreplenishable charges of the Bless spell (1st level).',
        'Contains 1d4 unreplenishable charges of the Expeditious Retreat spell.',
        'The bearer gains a +1 bonus to Charisma (Deception) checks.',
        'Contains 1d4 unreplenishable charges of the Comprehend Languages spell.',
        'Once per day, the bearer may roll a saving throw with advantage.',
        'Contains 1d4 unreplenishable charges of the Feather Fall spell (1st level).',
        'The bearer knows the general direction to the closest Fey Crossing within a 60 mile radius. (DMG p. 50)',
        'The bearer gain a +1 bonus to initiative rolls',
        'When on the plane of Mount Celestia, the bearer of this item can receive the benefits of Blessed Beneficence regardless of their alignment.',
        'Every time you are hit by a monster, you glimpse a random image of its future or past.',
        'Contains 1d4 unreplenishable charges of the Animal Friendship spell (1st level).',
        'When on the plane of Gehenna, the bearer has advantage on saving throws against Cruel Hindrance. (DMG p. 63)',
        'The bearer may cast Spare the Dying once per day.',
        'The bearer gains a +1 bonus to Charisma (Intimidation) checks if the target can see this item.',
        'When on the plane of Hades, the bearer has advantage on saving throws against Vile Transformation. (DMG p. 63)',
        'Attuning to this item takes only 1 minute.',
        'This item contains 4 weak healing nodes. As an action, a character can use one node to heal 1d4 hit points at touch range. The item regains 1d4 charges at sunrise.',
        'When in the Nine Hells, the bearer has advantage on saving throws against Pervasive Evil. (DMG p. 64)',
        'The bearer has advantage on saving throws vs. fear.',
        'the bearer gains +1 to Charisma (Performance) checks.',
        'When the bearer of this item rolls hit dice, they can choose to re-roll them and take the second result.',
        "The item is inscribed with holy symbols of the God of the DM's choice. A cleric or paladin that serves that god may use this item as a divine focus.",
        'The bearer gains a +1 bonus to Intelligence (Investigation) checks.',
        'The bearer regains their Constitution modifier in temporary hit points whenever they gain or use inspiration.',
        'Contains 1d4 unreplenishable charges of the Jump spell (1st level).',
        'Contains 1d4 unreplenishable charges of the Silent Image spell (1st level).',
        'When on the plane of Limbo, the bearer has advantage to Intelligence checks to alter or move non-magical objects within the plane. (DMG p. 61-62)',
        'Once attuned, the bearer always knows the exact location of this item',
        'The bearer gains +1 to Charisma (Persuasion) checks.',
        'Contains 1d4 unreplenishable charges of the Bane spell(1st level).',
        'The bearer may cast Mage Hand once per day.',
        'Contains 1d4 unreplenishable charges of the Unseen Servant spell (1st level).',
        'The bearer has a +1 bonus to any skill check involving gambling and games of chance (Insight, Sleight of Hand, Investigation, etc).',
        'The bearer may cast Message once per day.',
        'Contains 1 unreplenishable charge of Scorching Ray (1st level).',
        'The bearer gains a +1 bonus to Wisdom saving throws.',
        'The bearer may cast Thaumaturgy once per day.',
        'The bearer may cast Vicious Mockery once per day.',
        'Contains 1d4 unreplenishable charges of the Locate Animals or Plants spell (1st level).',
        'Contains 1d4 unreplenishable charges of the Protection from Good and Evil spell (1st level).',
        'The bearer gains a +1 bonus to Dexterity saving throws.',
        'The bearer rarely feels hungry, and only needs to consume one-fifth the usual amount of food.',
        'When on the plane of Pandemonium, the bearer has advantage on saving throws against the Mad Winds. (DMG p. 62)',
        'The bearer may extend the range of their Channel Divinity by 5 feet.',
        'The bearer can send messages mentally to willing characters within 30 feet. This communication is one-way only.',
        'The bearer may cast Blade Ward once per day.',
        'The bearer has advantage on death saving throws.',
        'Once per day, the bearer may gain +1 to any skill check.',
        'Contains 1d4 unreplenishable charges of the Detect Magic spell (1st level).',
        'Whenever the bearer casts a spell as a ritual, they have advantage to maintain concentration during the ritual.',
        'The bearer may increase their Lay on Hands hit point pool by 5.',
        'The bearer gains +1 to Wisdom (Insight) checks.',
        'The bearer gains a +1 bonus to Intelligence (History) checks.',
        'Contains 1d4 unreplenishable charges of the Illusory Script spell (1st level).',
        'Faintly glows when creatures of a certain race (DMs choice) are within a 100 foot radius.',
        'The bearer suffers no harm in temperatures as high as 120 degrees Fahrenheit.',
        'The bearer knows the general direction to the closest Shadow Crossing within a 60 mile radius. They have advantage on saving throws vs. Shadowfell Dispair (DMG p. 51-52)',
        'The bearer gains a +1 bonus to (Wisdom) Animal Handling checks.',
        'This item contains 1d4 unreplenishable charges of the Shield spell.',
        'The bearer may change minor aspects of the physical appearance of this item.',
        'The bearer gains a +1 bonus to Dexterity (Stealth) checks.',
        'The bearer may cast Mending once per day.',
        'A poem, story, or map that describes a long-forgotten treasure is etched on the surface of the item.',
        'The bearer may spend an action removing all the failed death saving throws from a target within 5 feet of them. The target is still not stabilized.',
        'The bearer may cast Dancing Lights once per day.',
        'Contains 1d4 unreplenishable charges of the Longstrider spell (1st level).',
        'The bearer gains a +1 bonus to Wisdom (Medicine) checks.',
        'When the bearer takes a long rest, they gain back one additional hit die.',
        'The bearer gains a +1 to Wisdom (Survival) checks.',
        'The bearer gains an extra level one spell slot, which recovers only after a full moon rises.',
        'The bearer may cast Minor Illusion once per day.',
        'The bearer may cast True Strike once per day.',
        'The bearer gains a +1 bonus to Constitution saving throws.',
        'The bearer may cast Druidcraft once per day.',
        "Whenever the bearer kills a creature they gain temporary hit points equal to the creature's CR.",
        'The bearer gains +2 to their Passive Perception.',
        'The bearer gains a +1 bonus to Strength saving throws.',
        "The bearer's maximum hit points increases by their constitution modifier while attuned to this item. These hit points are lost when the bearer unattunes the item.",
        'The bearer can use an action to amplify their voice so that it clearly carries for up to 300 feet.',
        'The item floats on water or other liquids. Its bearer has advantage on Strength (Athletics) checks to swim.',
        'When in the Plane of Air, the bearer can navigate the Labyrinth Wind intuitively, and knows the path to the nearest Earth Mote within 60 miles.',
        'The bearer gains a +1 to Intelligence (Arcana) checks.',
        'When on the plane of Ysgard, the bearer is unaffected by Immortal Wrath. (DMG p. 61)'
    ];
    const prefixTrinketRoll = Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(properties.length - 1);
    const suffixTrinketRoll = Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(properties.length - 1);
    const trinket = {
        type: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(types),
        prefixTrinket: prefixes[prefixTrinketRoll],
        suffixTrinket: suffixes[suffixTrinketRoll],
        prefixProperty: properties[prefixTrinketRoll],
        suffixProperty: properties[suffixTrinketRoll]
    };
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(trinket, {
        description: `${trinket.prefixProperty} ${trinket.suffixProperty}`,
        name: `${trinket.prefixTrinket} ${trinket.type} ${trinket.suffixTrinket}`
    });
    return trinket;
}


/***/ }),

/***/ "./lib/src/createRing.ts":
/*!*******************************!*\
  !*** ./lib/src/createRing.ts ***!
  \*******************************/
/*! exports provided: createRing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRing", function() { return createRing; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");


function createRing(base) {
    const ringData = createRingData();
    const ring = Object.assign({ power: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(Object.values(ringData.power)), cost: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(Object.values(ringData.cost)), activation: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(Object.values(ringData.activation)) }, base);
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(ring, {
        works: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
            'perfectly, every time',
            'pretty much every time',
            'every time its used',
            'most of the time with infrequent mishaps',
            'almost always, but sometimes with side effects',
            'fairly well, but always has a side effect',
            'as expected about half the time',
            'only half the time',
            'whenever it is fully charged',
            'occasionally, when the proper conditions are met',
            'infrequently, but well when it does',
            'rarely and unpredictably',
            'every couple of times the user tries to activate it',
            'almost never, and only when it feels like it',
            'only the first time the wearer uses the power',
            'whenever the time is right',
            'well, but at a cost'
        ]),
        material: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
            'gold',
            'white gold',
            'rose gold',
            'tarnished silver',
            'polished silver',
            'sterling silver',
            'gold-plated silver',
            'gold-plated brass',
            'silver-plated brass',
            'gold-plated steel',
            'silver-plated steel',
            'rhodium',
            'black rhodium',
            'brass',
            'black steel',
            // animal bones
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['whale', 'rat', 'dog', 'wolf', 'bear', 'bird', 'cougar', 'gorilla', 'lion', 'fox', 'elephant', 'turtle', 'pig', 'tiger', 'horse', 'deer', 'bat', 'rabbit', 'rhino', 'sheep', 'otter', 'goat', 'hippo', 'coyote', 'giant panda', 'skunk', 'cattle', 'bison', 'emu', 'caragor', 'dire wolf', 'boar', 'elk', 'ram', 'mammoth', 'pegasus', 'unicorn'])} bone`,
            // monster bones
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['kobold', 'goblin', 'ogre', 'giant', 'merfolk', 'bullywug', 'grimlock', 'lizardfolk', 'hobgoblin', 'orc', 'gnoll', 'cockatrice', 'dragon', 'bugbear', 'harpy', 'hippogriff', 'imp', 'satyr', 'centaur', 'ettercap', 'griffon', 'sea hag', 'wererat', 'werewolf', 'wereboar', 'basilisk', 'hell hound', 'manticore', 'minotaur', 'owlbear', 'ettin', 'lamia', 'barbed devil', 'bulette', 'troll', 'xorn', 'chimera', 'drider', 'medusa', 'wyvern', 'vrock', 'oni', 'chain devil', 'hezrou', 'hydra', 'glabrezu', 'behir', 'roc', 'horned devil', 'marilith', 'sphinx', 'balor', 'pit fiend', 'kraken'])} bone`,
            // ivory
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['elephant', 'elephant', 'elephant', 'dire elephant', 'hippo', 'walrus', 'whale', 'hornbill', 'warthog', 'narwhal'])} ivory`,
            'ebony',
            'mahogany wood',
            'walnut wood',
            'birch wood',
            'maple wood',
            'pine wood',
            'oak wood',
            'ash wood',
            'turquoise',
            'jade',
            'iron',
            'copper',
            'platinum',
            'bronze',
            'tungsten',
            'cobalt',
            'titanium',
            'palladium',
            'zirconium',
            'obsidian',
            'quartz'
        ]),
        decoration: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
            'handful of small gemstones arrayed around the band',
            'two small gemstones with a large gemstone in the center',
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['trio of small ', 'trio of large ', 'group of one large and two small flanking ', 'cluster of small ', 'group of several large ', 'small set of ', 'row of ', 'circle of ']) + Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['rose', 'princess', 'emerald', 'square', 'baguette', 'taper', 'fancy', 'heart', 'pear', 'marquise', 'oval', 'round', 'mixed', 'buff top', 'mogul', 'old miners', 'star', 'step'])} cut gemstones`,
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['single large ', 'huge ', 'single small ', 'tiny ', 'very large ', 'very small ']) + Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['rose', 'princess', 'emerald', 'square', 'baguette', 'taper', 'fancy', 'heart', 'pear', 'marquise', 'oval', 'round', 'mixed', 'buff top', 'mogul', 'old miners', 'star', 'step'])} cut gemstone`,
            `cluster of gemstones in the shape of a ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['star', 'sun', 'moon', 'heart'])}`,
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(["snake's", "dragon's", "lion's", "tiger's", "demon's", "devil's", "wolf's", "bear's", "monkey's", "crow's", "eagle's", "hawk's", "vulture's", "fox's", "horse's", "bat's", "rabbit's", "boar's", "medusa's"])} head with gemstones set in its eyes`,
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['snake', 'dragon', 'lion', 'tiger', 'demon', 'devil', 'wolf', 'bear', 'monkey', 'crow', 'eagle', 'hawk', 'vulture', 'fox', 'horse', 'bat', 'rabbit', 'boar'])} skull with gemstones set in its eyes`,
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['floral', 'leafy', 'thorny', 'hexagonal', 'wavy', 'spider-web', 'cross-hatching', 'vine', 'geometric', 'spiral', 'rune', 'starry', 'swirling'])} ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['pattern', 'motif', 'design', 'marking', 'ornamentation'])}`,
            `band like ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['twisting vines', 'rough waves', 'stag horns', 'tree branches', 'rose thorns', 'a craggy mountainside', 'the body of a snake', 'a twisting rope'])}`,
            `phrase written in ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['a Dwarvish script', 'an Elvish script', 'an Infernal script', 'a Draconic script', 'a Celestial script', 'a Common script'])} wrapping around the band`,
            'handful of arcane runes'
        ]),
        gemstone: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
            'diamond',
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['yellow', 'pink', 'champagne', 'green', 'blue', 'orange', 'red', 'chameleon', 'argyle', 'purple', 'violet', 'black', 'gray', 'white'])} diamond`,
            'ruby',
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['fire', 'white', 'black', 'yellow', 'fairy', 'pink', 'crystal', 'honey'])} opal`,
            'emerald',
            'blue sapphire',
            'purple sapphire',
            'orange sapphire',
            'green sapphire',
            'star sapphire',
            'garnet',
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['white', 'black', 'golden', 'pink', 'lavender', 'blue', 'chocolate'])} pearl`,
            'amethyst',
            'topaz',
            'polished amber',
            'moonstone',
            'cut onyx',
            'peridot',
            'quartz',
            'aquamarine',
            'citrine',
            'lapis lazuli',
            'spinel',
            'tanzanite',
            'turquoise',
            'zircon',
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['blue', 'red', 'green', 'yellow', 'pink', 'brown', 'black'])} tourmaline`
        ]),
        intendedowner: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
            'no one in particular',
            `the ringmaker's ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['true love', 'best friend', 'favorite patron', 'ruler who he cared deeply for', 'family member', 'wife', 'husband', 'good friend'])}, but ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['they perished long ago', 'they are no longer on this plane', 'it was never delivered', 'the ringmaker perished before it was gifted away', 'they pawned it during times of trouble', "they pawned it after the ringmaker's death", 'it was stolen during the original delivery'])}`,
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['a Dwarvish', 'an Elvish', 'a Gnomish', 'a Human', 'a Dragonborn', 'a Half-Orc', 'a Drow', 'a Tiefling', 'a Halfling', 'a Half-Elf', 'a Goblin'])} ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['king', 'queen', 'princess', 'prince', 'prince', 'noble', 'duke', 'baron', 'lord', 'lady', 'merchant', 'witch of terrible power', 'gemcutter', 'hero from ancient times', 'knight'])} who ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['used it to gain power', 'used it to gain fame', 'used it to gain wealth', 'used it against their enemies', 'used it to better their town in their time', 'wore it until they died', 'wore it until it was lost during a long journey', 'wore it until it was stolen from them', 'never actually wore the ring', 'gifted it away after a few years'])}`,
            `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['a dark', 'a notorious', 'a legendary', 'a mysterious', 'an ancient', 'a sinister', 'a forgotten', 'a devious', 'an eccentric', 'a powerful', 'a wealthy', 'a conniving', 'an infamous', 'a renowned', 'a famous', 'a heralded', 'a strong-willed', 'a well known', 'a barely known', 'a weak-willed', 'an extremely wealthy'])} ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['sorceress', 'sorcerer', 'wizard', 'mage', 'witch', 'high priest', 'lich', 'rogue', 'fiend', 'warlord', 'explorer', 'bard', 'performer', 'druid', 'warlock', 'monk', 'warrior', 'knight', 'fighter', 'fortune teller', 'gladiator', 'king', 'queen', 'prince', 'princess', 'lord', 'lady', 'duke', 'monarch', 'prophet', 'spellcaster'])} who ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['used it to gain power', 'used it to gain fame', 'used it to gain wealth', 'used it against their enemies', 'used it to better their town in their time', 'wore it until they died', 'wore it until it was lost during a long journey', 'wore it until it was stolen from them', 'never actually wore the ring', 'gifted it away after a few years'])}`
        ]),
        importance: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
            'ancient king',
            'elder dragon',
            'powerful fiend',
            'legendary warrior',
            'notorious giant',
            'well known prophet',
            'powerful spellcaster',
            'heir to a fallen noble house',
            'sitting monarch',
            'fiendish prince',
            'elemental lord',
            'forgotten god',
            'ancient evil being'
        ]),
        setting: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
            'in the centre is a ',
            'the gemstone in the middle is a ',
            'the focal point of the ring is a ',
            'the gems in this ring are mostly ',
            'it is set with ',
            'it has three gems, two cheap quartz gems flanking a',
            'it is bejeweled with a ',
            'the band of this ring is surrounded with ',
            'in the middle of the ring sits a huge ',
            'the middle of the ring has a large cluster of '
        ]),
        cut: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
            'rose',
            'princess',
            'emerald',
            'square',
            'baguette',
            'taper',
            'fancy',
            'heart',
            'pear',
            'marquise',
            'oval',
            'round',
            'mixed',
            'buff top',
            'mogul',
            'old miners',
            'star',
            'step'
        ])
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(ring, {
        firstOutputs: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
            `This ring is made of ${ring.material} which is decorated with <<print setup.articles.output("${ring.decoration}")>>. It was intended for ${ring.intendedowner}. The ring grants the power to ${ring.power}.<blockquote>This ring works ${ring.works}, and works best ${ring.activation}. It grants the power to ${ring.power}, ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['but', 'however'])} ${ring.cost}.</blockquote>`,
            `This ring is made of ${ring.material}, and ${ring.setting} ${ring.cut} cut ${ring.gemstone}. It was intended for ${ring.intendedowner}. The ring grants the power to ${ring.power}.<blockquote>This ring works ${ring.works}, and works best ${ring.activation}. It grants the power to ${ring.power}, ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['but', 'however'])} ${ring.cost}.</blockquote>`
        ]),
        secondOutputs: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
            `This one's made of ${ring.material} which is decorated with <<print setup.articles.output("${ring.decoration}")>>. It was intended for ${ring.intendedowner}. The ring grants the power to ${ring.power}.<blockquote>This ring works ${ring.works}, and works best ${ring.activation}. It grants the power to ${ring.power}, ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['but', 'however'])} ${ring.cost}.</blockquote>`,
            `This one's made of ${ring.material}, and ${ring.setting} ${ring.cut} cut ${ring.gemstone}. It was intended for ${ring.intendedowner}. The ring grants the power to ${ring.power}.<blockquote>This ring works ${ring.works}, and works best ${ring.activation}. It grants the power to ${ring.power}, ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['but', 'however'])} ${ring.cost}.</blockquote>`
        ])
    });
    return ring;
}
const createRingData = () => ({
    power: {
        'absorb': `absorb ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['fire damage', 'lightning damage', 'memories', 'souls', 'spells', 'water'])}`,
        'attract': `attract ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['birds', 'ghosts', 'members of the opposite sex', 'rats', 'snakes', 'stirges'])}`,
        'avoid': `avoid ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['former lovers', 'sobriety', 'trap triggers', 'trolls', 'vampires', 'werewolves'])}`,
        'bolster': `avoid ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['agility and reflexes', 'awareness and senses', 'confidence and self-esteem', 'health and toughness', 'intellect and problem-solving skills', 'strength and endurance'])}`,
        'cast a spell': `cast a spell ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['at random', "prepared and stored in the ring by the ring's creator'", 'prepared and stored in the ring by you', 'that creates a disguise', 'that restores lost hit points', 'that grants invisibility'])}`,
        'conjure a swarm of': `conjure a swarm of ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['bats', 'parrots', 'ravens', 'rats', 'spiders', 'zombies'])}`,
        'control': `control ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['demons', 'dwarves', 'elves', 'flames', 'human minds', 'weather'])}`,
        'disappear': `disappear ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['into a hole in the earth', 'in a flash of light', 'to a nearby tree', 'in a shimmering mist', 'in a swirl of shadows', 'in a wisp of smoke'])}`,
        'detect the nearest': `detect the nearest ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['corpse', 'dragon', 'piece of gold', 'living creature', 'poisonous plant', 'undead'])}`,
        'move': `move like a ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['dolphin', 'burrowing badger', 'gust of wind', 'jackrabbit', 'ooze', 'spider'])}`,
        'predict': `predict ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['deaths', 'fluctuations in the price of grain', 'future catastrophes', 'military victories', 'storms', 'winning horses'])}`,
        'regain': `regain ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['expended spell slots', 'lost dignity', 'lost hitpoints', 'lost gold', 'lost time', 'used torches', 'used arrows', 'a single small lost item'])}`,
        'resist': `resist ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['diseases', 'mind-affecting charms', 'persuasion', 'poisons', 'psionic powers', 'seduction'])}`,
        'see': `see ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['faraway places', "into others' dreams", 'invisible creatures and objects', 'people dear to you', 'through the eyes of an owl', 'through the eyes of a corpse'])}`,
        'talk to a': `talk to a ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['dear friend or lover', 'long-dead person', 'recently deceased person', 'snake', 'spider', 'wolf'])}`,
        'summon': `summon ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['an angel', 'a demon', 'a devil', 'a djinni', 'an efreet', 'a pack of wolves'])}`,
        'teleport': `teleport ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['up to ten feet', 'to another room nearby', 'to a well-known temple', 'to a previously prepared teleportation circle', 'to the presence of a powerful fiend', 'to an ancient crypt'])}`
    },
    cost: {
        temporary: `upon activation, it causes temporary ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['chills all over', 'fatigue', 'flatulence', 'head-splitting headaches', 'nausea', 'unsightly and rapid hair growth'])}`,
        chronic: `while attuned, it causes permanent ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['blurred vision', 'blindness', 'loss of the power of speech', 'painful scarring and deformity', 'poor wound healing', 'tumorous growths and deformities', 'debilitating nausea'])}`,
        mental: `it brings on ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['anxiety', 'bad dreams', 'compulsive behavior (drinking, smoking, scratching, hygiene, etc.)', 'insomnia', 'a short temper', 'weight gain (stress eating)'])} while it is being worn`,
        attention: `it attracts the attention of ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['aberrations', 'dragons', 'fiends', 'ghosts and wraiths', 'spiders', 'snakes', 'zombies and wights', 'devils', 'demons', 'liches'])}`,
        accompanied: `activation of its powers is occasionally accompanied by ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['a blizzard', 'earthquakes', 'rapid plant growth', 'thick fog', 'thunderstorms', 'volcanic eruptions'])}`
    },
    activation: {
        'on a particular plane': `when worn in ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['the celestial realm', 'the fiendish realm', 'the mortal world', 'the realm of death', 'the realm of dreams and magic', 'the realm of shadow and death', 'the ethereal plane', 'the astral plane', 'the elemental planes', 'the air elemental plane', 'the fire elemental plane', 'the earth elemental plane', 'the water elemental plane', 'the Upper planes', 'the Lower planes', 'Elysium', 'the Beastlands', 'Bytopia', 'Mount Celestia', 'Arborea', 'Arcadia', 'Ysgard', 'Mechanus', 'Limbo', 'Acheron', 'the Nine Hells', 'Gehenna', 'Hades', 'Carceri', 'the Abyss', 'Pandemonium'])}`,
        'when worn by a': `when worn by a ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['dwarf', 'half-dragon', 'high elf', 'serpentfolk', 'shadowfolk', 'wood elf', 'gnome', 'human', 'half-elf', 'half-orc', 'orc', 'halfling', 'tiefling'])}`,
        'sunlight': Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['in full sunlight', "while it's sunny", 'during a sunny day', 'under the light of the sun']),
        'moonlight': `when worn under a ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['full moon', 'half-moon', 'waxing crescent moon', 'waning crescent moon', 'moon', 'moon', 'moon', 'moon', 'blood moon', 'blue moon', 'harvest moon', 'new moon'])}`,
        'underground': Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['underground', 'beneath the earth', 'under the ground']),
        'starlight': Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['under starlight', 'under the starlight', 'while the stars shine above', 'beneath the stars'])
    }
});


/***/ }),

/***/ "./lib/src/createRoad.ts":
/*!*******************************!*\
  !*** ./lib/src/createRoad.ts ***!
  \*******************************/
/*! exports provided: createRoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoad", function() { return createRoad; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");


function createRoad(options) {
    const type = Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['trail', 'path', 'path', 'road', 'road', 'road']);
    const noEncounter = Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([true, true, true, false, false]);
    const road = Object.assign({ type,
        noEncounter }, options);
    switch (type) {
        case 'trail':
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(road, {
                descriptiveType: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(["hunter's trail", 'animal trail', 'dirt trail']),
                traffic: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['which seems to have been recently used', 'which is overgrown with weeds', 'that has blood spatters in the grass which indicate a recent hunt', 'with canopy trees providing shade overhead']),
                encounter: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['the border patrol', 'a travelling peddler', 'a hunting party', 'another adventuring party', 'some escaped convicts', 'a group of bandits operating a toll road', 'an itinerant priest', 'a dead body', 'a small merchant caravan', 'a diseased animal corpse', 'a group of dwarves', 'a solitary hunter', 'a handful of farmers', 'a solitary bandit', 'an injured knight', 'a party of raiders', 'a ranger', '[monster encounter]', '[monster encounter]', 'some herdsmen', 'a band of robbers', 'some particularly dense overgrowth', 'some tribesmen', 'a hermit', 'the undead'])
            });
            break;
        case 'path':
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(road, {
                descriptiveType: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['simple path', 'overgrown dirt path', 'riding path']),
                traffic: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['which looks to be desolate and abandoned', 'dotted with hoof prints', 'with heavy boot prints in the dirt', 'with the occasional burnt out campfire on the side']),
                encounter: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['the road wardens', 'a merchant caravan', 'a work gang heading home', 'another adventuring party', 'some escaped convicts', 'some of the local militia', 'a pair of travelling clerics', 'some grave robbers', 'a traveling peddler', 'some farmers', 'a plague-infested cabin', 'a hunting party', 'some farmers', 'some bandits', 'an adventurer on a horse', 'a band of mercenaries', 'a solitary troubadour', 'a mounted messenger', 'some berserkers', 'some robbers', '[monster encounter]', 'some tribesmen', 'a caravan of gypsies', 'the undead', 'some raiders'])
            });
            break;
        case 'road':
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(road, {
                descriptiveType: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['crossroads', 'droveway', 'patrol road', 'dirt road', 'busy droveway', 'busy dirt road', 'military road', 'cobblestone road', 'busy cobblestone road', 'crumbling cobblestone road', 'paved road', 'busy paved road', 'crumbling paved road']),
                traffic: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['which is dotted with dead campsites where many a weary traveler has mad camp for the night', ', occassionally passing a patrol shack', 'that has plenty of wheel tracks', 'that has road markers and signage dotted every now and then', 'that has checkpoints or guard posts every couple of miles', 'which seems to have been marred by time or, perhaps warfare', 'which passes a tavern that seems to be doing very well']),
                encounter: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['a marching army', 'a merchant caravan', 'a wedding party', 'another adventuring party', 'a group of pilgrims', 'some escaped convicts', 'a funeral procession', 'a plague cart', 'some farmers', 'a knight errant', 'a wounded knight', 'a lone horse, trotting the other way', 'a band of mercenaries', 'a traveling theatre troupe', 'a courier', 'some beggars', 'a caravan of slavers', 'a traveling lady', 'some robbers', 'a caravan of gypsies', 'a lone zombie'])
            });
            break;
        default: throw new Error(`Invalid road type "${type}".`);
    }
    if (noEncounter) {
        return `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['You walk along the ', 'You trudge along the ', 'Making your way across the countryside on the ', 'You make your way along the ', 'You walk along the ']) + road.descriptiveType}, ${road.traffic}.`;
    }
    else {
        return `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['You walk along the ', 'You trudge along the ', 'Making your way across the countryside on the ', 'You make your way along the ', 'You walk along the ']) + road.descriptiveType}, ${road.traffic}${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([' until you come across ', ' and encounter ', ' and cross paths with ', ' and come across ', ' and see in the distance ', ' and spy in the distance ']), `. ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['Turning the corner, you come across ', 'Then, in the distance, you see ', 'You walk for a while, and then come across ', 'You walk for a few more minutes, until you come across ', 'You walk along for a while, and then encounter '])}`])}${road.encounter}.`;
    }
}


/***/ }),

/***/ "./lib/src/createTrap.ts":
/*!*******************************!*\
  !*** ./lib/src/createTrap.ts ***!
  \*******************************/
/*! exports provided: createTrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTrap", function() { return createTrap; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");


function createTrap() {
    const types = ['mechanical', 'arcane', 'mechanical', 'arcane', 'indirect'];
    const trap = {
        type: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(types)
    };
    switch (trap.type) {
        case 'mechanical':
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(trap, {
                trigger: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'trip wire',
                    'pressure plate',
                    'opening a door',
                    'lifting the lid on a chest',
                    'grabbing a certain rung of a ladder',
                    'removing an object from it’s resting place',
                    'touching anything in the room, including the floor',
                    'breaking the beam of a light source',
                    'disturbing a source of water in the room',
                    'pulling on a suspicious looking rope hanging from the ceiling'
                ]),
                signal: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'gears can be heard grinding from inside the walls',
                    'a low boom is heard that echoes out through the dungeon',
                    'a high pitched whirring can be heard',
                    'various ticking sounds are heard',
                    'a quick release of steam followed by a bang',
                    'a low rumbling that shakes the room for a moment',
                    'a single click emanates from the trap',
                    'the sound of chains sliding across stone',
                    'a thumping sound that starts slow and begins picking up speed',
                    'nothing. There’s just silence'
                ]),
                payload: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'the floor opens downward into a 40 foot pit',
                    'from unseen slits in the wall, poisoned needles fly out',
                    'a wall opens revealing a golem to ambush the party',
                    'a large log swings down from the ceiling',
                    'the parts of the dungeon begin collapsing, blocking off areas',
                    'vents on the ceiling begin emptying noxious fumes into the room',
                    'a large blade swings horizontally across the room attempting to decapitate',
                    'the room begins filling with water after the doors slam shut',
                    'the walls slowly begin closing inwards',
                    'a large rolling boulder drops from the ceiling towards the party'
                ])
            });
            break;
        case 'arcane':
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(trap, {
                trigger: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'an arcane rune on the floor',
                    'arcane markings around a door frame',
                    'a pillar that has a low hum to it',
                    'a jeweled eye that scans the room',
                    'a stone statue that has glowing red eyes',
                    'a mysterious green fog that rolls around the base of the room',
                    'a very dimly lit candle that could be extinguished with the faintest breath',
                    'a phrase scrawled on the wall that activates when said out loud',
                    'failing to cast any spell on a dull crystal floating in the center of the room',
                    'lighting a rather inviting looking torch in the center of the room'
                ]),
                signal: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'a low hum is heard',
                    'a very unnatural light begins glowing brightly from an unknown source',
                    'any runes in the room begin glowing a bright red',
                    'the room suddenly drops drastically in temperature',
                    'the room gets uncomfortably hot',
                    'a soft hiss is heard',
                    'a fizzling sound is heard',
                    'a high pitched hum rings out',
                    'a crackling of energy is heard through the room',
                    'one can hear a deathly silence'
                ]),
                payload: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'sleep is cast on the room',
                    'victim must resist being petrified',
                    'a fireball explodes throughout the room',
                    'all surfaces of the room begin to become too hot to touch (effectively heat metal)',
                    'fumes begin materializing as if stinking cloud was cast',
                    'a wall of lightning races towards the victim and any others in its way',
                    'all people in the room have blindness cast on them',
                    'the victim is sent to the astral plane for one minute',
                    'everything in the room begins to levitate, no save',
                    'the spell confusion is cast on everyone'
                ])
            });
            break;
        case 'indirect':
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(trap, {
                trigger: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'trip wire',
                    'pressure plate',
                    'opening a door',
                    'lifting the lid on a chest',
                    'grabbing a certain rung of a ladder',
                    'removing an object from it’s resting place',
                    'touching anything in the room, including the floor',
                    'breaking the beam of a light source',
                    'disturbing a source of water in the room',
                    'pulling on a suspicious looking rope hanging from the ceiling'
                ]),
                signal: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'gears can be heard grinding from inside the walls',
                    'a low boom is heard that echoes out through the dungeon',
                    'a high pitched whirring can be heard',
                    'various ticking sounds are heard',
                    'a quick release of steam followed by a bang',
                    'a low rumbling that shakes the room for a moment',
                    'a single click emanates from the trap',
                    'the sound of chains sliding across stone',
                    'a thumping sound that starts slow and begins picking up speed',
                    'nothing. There’s just silence'
                ]),
                payload: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'a torch is lit in another room, alerting enemies',
                    'a door in another room closes, hiding a secret passage',
                    'chests in the dungeon lock up',
                    'a dangerous enemy is freed that could normally be avoided',
                    'all other traps that have already been triggered get reset',
                    'all lights are extinguished',
                    'golems begin patrolling the dungeon',
                    'all doors in the dungeon lock themselves',
                    'an alarm bell begins ringing alerting all enemies of the party',
                    'another more sinister trap is set in another room'
                ])
            });
            break;
        default:
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(trap, {
                trigger: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'trip wire',
                    'pressure plate',
                    'opening a door',
                    'lifting the lid on a chest',
                    'grabbing a certain rung of a ladder',
                    'removing an object from it’s resting place',
                    'touching anything in the room, including the floor',
                    'breaking the beam of a light source',
                    'disturbing a source of water in the room',
                    'pulling on a suspicious looking rope hanging from the ceiling'
                ]),
                signal: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'gears can be heard grinding from inside the walls',
                    'a low boom is heard that echoes out through the dungeon',
                    'a high pitched whirring can be heard',
                    'various ticking sounds are heard',
                    'a quick release of steam followed by a bang',
                    'a low rumbling that shakes the room for a moment',
                    'a single click emanates from the trap',
                    'the sound of chains sliding across stone',
                    'a thumping sound that starts slow and begins picking up speed',
                    'nothing. There’s just silence'
                ]),
                payload: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])([
                    'the floor opens downward into a 40 foot pit',
                    'from unseen slits in the wall, poisoned needles fly out',
                    'a wall opens revealing a golem to ambush the party',
                    'a large log swings down from the ceiling',
                    'the parts of the dungeon begin collapsing, blocking off areas',
                    'vents on the ceiling begin emptying noxious fumes into the room',
                    'a large blade swings horizontally across the room attempting to decapitate',
                    'the room begins filling with water after the doors slam shut',
                    'the walls slowly begin closing inwards',
                    'a large rolling boulder drops from the ceiling towards the party'
                ])
            });
    }
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(trap, {
        description: `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['This trap is activated by', 'This trap is triggered by'])} ${trap.trigger}. When activated, ${trap.signal}. ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['The trap then delivers its payload:', 'Then,', 'And then,'])} ${trap.payload}.`
    });
    return trap;
}


/***/ }),

/***/ "./lib/src/defineRollDataGetter.ts":
/*!*****************************************!*\
  !*** ./lib/src/defineRollDataGetter.ts ***!
  \*****************************************/
/*! exports provided: defineRollDataGetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineRollDataGetter", function() { return defineRollDataGetter; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");


/**
 * This handles setting up getters and setters for attributes like wealth,
 * cleanliness and such.
 *
 * It expects the `obj` (the one that is getting the attributes), and the
 * `rolls` (the one that is providing the descriptions).
 *
 * It needs the propName to be exact, unless the optional `keyName` is specified.
 * This is for when you might want to tie several properties to the same attribute,
 * i.e. cleanliness controlling bedleanliness.
 *
 * The `index` is an optional argument, which tells the function to look at
 * a different location in the array for the string. This is most useful for
 * when you have multiple descriptions tied to the same thing
 * (long and short descriptions, or cleanliness controlling bedCleanliness as well.)
 */
function defineRollDataGetter(obj, rolls, propName, keyName = propName, index = 1, rollLocation = obj.roll) {
    console.groupCollapsed('DefineRollDataGetters');
    // eslint-disable-next-line prefer-rest-params
    console.log(arguments);
    if (!obj[propName]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        obj[propName] = '';
    }
    Object.defineProperty(obj, propName, {
        get() {
            if (this.name) {
                console.log(`Fetching ${this.name} ${propName}.`);
            }
            const rollArray = rolls[keyName];
            let result = rollArray.find(desc => {
                if (rollLocation) {
                    return desc[0] <= rollLocation[keyName];
                }
                else {
                    return desc[0] <= this.roll[keyName];
                }
            });
            if (typeof result === 'undefined') {
                console.log(`Failed to get a descriptor that matched the roll of ${this.roll[propName]} for ${propName}.`);
                result = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["last"])(rollArray);
            }
            const resultValue = result[index];
            if (Array.isArray(resultValue)) {
                result[index] = Object(_random__WEBPACK_IMPORTED_MODULE_1__["random"])(resultValue);
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this[`_${propName}`] = resultValue || result;
            return this[`_${propName}`];
        },
        set(val) {
            console.log(`Setting ${this.name} ${propName}.`);
            const rollArray = rolls[keyName];
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(Array.isArray(rollArray));
            let result = rollArray.find(desc => {
                if (rollLocation) {
                    return desc[0] <= rollLocation[keyName];
                }
                else {
                    return desc[0] <= this.roll[keyName];
                }
            });
            if (result === undefined) {
                console.log(`Failed to get a descriptor that matched the roll of ${this.roll[propName]} for ${propName}.`);
                result = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["last"])(rollArray);
            }
            this[`_${propName}`] = val || result[index];
            return this[`_${propName}`];
        }
    });
    console.groupEnd();
}


/***/ }),

/***/ "./lib/src/findInArray.ts":
/*!********************************!*\
  !*** ./lib/src/findInArray.ts ***!
  \********************************/
/*! exports provided: findInArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findInArray", function() { return findInArray; });
/*
* for returning an object from an array by key value
* i.e. town.buildings keys
*/
function findInArray(array, key, value) {
    return array.find(element => {
        if (element[key] === value) {
            console.log(`Found matching key value of ${key}: ${value}!`);
            console.log(element);
            return element;
        }
    });
}


/***/ }),

/***/ "./lib/src/findInContainer.ts":
/*!************************************!*\
  !*** ./lib/src/findInContainer.ts ***!
  \************************************/
/*! exports provided: findInContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findInContainer", function() { return findInContainer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");

/**
 * Searches with a depth of one.
 */
function findInContainer(container, key, value) {
    console.log('running findInContainer...');
    console.log({ container, key, value });
    for (const object of Object(_utils__WEBPACK_IMPORTED_MODULE_0__["keys"])(container)) {
        const values = container[object][key];
        if (Array.isArray(values) && values.includes(value)) {
            console.log(`Found ${value} in ${object}`);
            return container[object];
        }
    }
}


/***/ }),

/***/ "./lib/src/firstCharacter.ts":
/*!***********************************!*\
  !*** ./lib/src/firstCharacter.ts ***!
  \***********************************/
/*! exports provided: firstCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstCharacter", function() { return firstCharacter; });
function firstCharacter(word) {
    return `<span class="first-character">${word.slice(0, 1)}</span>${word.slice(1)}`;
}


/***/ }),

/***/ "./lib/src/flora.ts":
/*!**************************!*\
  !*** ./lib/src/flora.ts ***!
  \**************************/
/*! exports provided: flora */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flora", function() { return flora; });
const flora = {
    flower: {
        // Stemmed, non-shrub flowers plural
        stemP: [
            'daisies', 'asters', 'begonias', 'bellflowers', 'bluebells', 'buttercups', 'lillies', 'daffodils', 'irises', 'marigolds', 'gardenias', 'geraniums', 'goldenrods', 'hibiscuses', 'honeysuckle', 'hydrangeas', 'poppies', 'irises', 'lavender', 'moonflowers', 'orchids', 'pansies', 'petunias', 'pointsettias', 'roses', 'snapdragon', 'tulips', 'violets'
        ],
        // Stemmed, non-shrub flowers singular
        stemS: [
            'daisy', 'aster', 'begonia', 'bellflower', 'bluebell', 'buttercup', 'lilly', 'daffodil', 'iris', 'marigold', 'gardenia', 'geranium', 'goldenrod', 'hibiscus', 'honeysuckle', 'hydrangea', 'poppy', 'iris', 'lavender', 'moonflower', 'orchid', 'pansy', 'petunia', 'pointsettia', 'rose', 'snapdragon', 'tulip', 'violet', 'peony', 'sunflower'
        ],
        // Common flowering shrubs and bushes
        bush: [
            'hydrangea', 'azalea', 'hibiscus', 'sweetshrub', 'butterfly', 'rhododendron', 'lilac', 'deutzia', 'pearl', 'spirea', 'forsythia', 'summersweet'
        ]
    },
    fruit: {
        // list of more common fruits, plural
        fruitP: [
            'apples', 'almonds', 'apricots', 'bananas', 'blackberries', 'blueberries', 'boysenberries', 'cherries', 'coconuts', 'dates', 'dragonfruits', 'elderberries', 'figs', 'gooseberries', 'grapes', 'raisins', 'honeyberries', 'juniper berries', 'kiwis', 'lemons', 'limes', 'mangos', 'honeydews', 'watermelons', 'mulberries', 'nectarines', 'oranges', 'papayas', 'peaches', 'pears', 'plums', 'prunes', 'pineapples', 'pomegranites', 'raspberries', 'star fruits', 'strawberries'
        ],
        // list of more common fruits, singular
        fruitS: [
            'apple', 'almond', 'apricot', 'banana', 'blackberry', 'blueberry', 'boysenberry', 'cherry', 'coconut', 'date', 'dragonfruit', 'elderberry', 'fig', 'gooseberry', 'grape', 'raisin', 'honneyberry', 'juniper berry', 'kiwi', 'lemon', 'lime', 'mango', 'honeydew', 'watermelon', 'mulberry', 'nectarine', 'orange', 'papaya', 'peach', 'pear', 'plum', 'prune', 'pineapple', 'pomegranite', 'raspberry', 'star fruit', 'strawberry'
        ],
        // list of more common fruit trees
        tree: [
            'apple', 'almond', 'apricot', 'cherry', 'orange', 'lemon', 'lime', 'elderberry', 'fig', 'mango', 'olive', 'mulberry', 'peach', 'plum', 'pomegranate', 'walnut', 'chestnut'
        ]
    },
    vegetable: {
        // list of common vegetables, plural
        vegetableP: [
            'potatoes', 'corn', 'carrots', 'broccoli', 'green beans', 'garlics', 'cucumbers', 'spinach', 'onions', 'sweet potatoes', 'mushrooms', 'peas', 'asparaguses', 'cauliflowers', 'bell peppers', 'heads of lettuce', 'olives', 'avocadoes', 'cabbages', 'zucchinis', 'celery', 'jalapeños', 'chives', 'okra', 'collard greens', 'sugar beets', 'beets', 'artichokes', 'tomatoes', 'radishes', 'pumpkins', 'turnips', 'rutabagas', 'eggplants', 'parsnips', 'beans', 'squashes', 'shallots'
        ],
        // list of common vegetables, singular
        vegetableS: [
            'potato', 'corn', 'carrot', 'broccoli', 'green bean', 'garlic', 'cucumber', 'spinach', 'onion', 'sweet potato', 'mushroom', 'pea', 'asparagus', 'cauliflower', 'bell pepper', 'lettuce', 'olive', 'avocado', 'cabbage', 'zucchini', 'celery', 'jalapeño', 'chive', 'okra', 'collard green', 'sugar beet', 'beet', 'artichoke', 'tomato', 'radish', 'pumpkin', 'turnip', 'rutabaga', 'eggplant', 'parsnip', 'bean', 'squash', 'shallot'
        ]
    },
    tree: {
        typeS: [
            'red maple', 'beech', 'spruce', 'ash', 'black cherry', 'oak', 'pine', 'maple', 'elm', 'fir', 'black walnut', 'birch', 'sycamore', 'alder', 'cedar', 'willow', 'red pine', 'silver birch', 'blue spruce', 'white oak', 'black spruce', 'hickory', 'cypress', 'scarlet oak', 'aspen', 'poplar', 'redwoord', 'cedar'
        ],
        // common tree types with proper articles
        typeArticle: [
            'a red maple', 'a beech', 'a spruce', 'an ash', 'a black cherry', 'an oak', 'a pine', 'a maple', 'an elm', 'a fir', 'a black walnut', 'a birch', 'a sycamore', 'an alder', 'a cedar', 'a willow', 'a red pine', 'a silver birch', 'a blue spruce', 'a white oak', 'a black spruce', 'a hickory', 'a cypress', 'a scarlet oak', 'an aspen', 'a poplar', 'a redwoord', 'a cedar'
        ]
    }
};


/***/ }),

/***/ "./lib/src/inventory.ts":
/*!******************************!*\
  !*** ./lib/src/inventory.ts ***!
  \******************************/
/*! exports provided: inventory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inventory", function() { return inventory; });
const inventory = [
    {
        name: 'Dagger',
        cost: 200,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Handaxe',
        cost: 500,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Javelin',
        cost: 50,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'weapon'
    },
    {
        name: 'Light Hammer',
        cost: 200,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Sickle',
        cost: 100,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Spear',
        cost: 100,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Battleaxe',
        cost: 1000,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'weapon'
    },
    {
        name: 'Flail',
        cost: 1000,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'weapon'
    },
    {
        name: 'Glaive',
        cost: 2000,
        availabilityLocation: ['smithy'],
        availability: 3,
        type: 'weapon'
    },
    {
        name: 'Greataxe',
        cost: 3000,
        availabilityLocation: ['smithy'],
        availability: 3,
        type: 'weapon'
    },
    {
        name: 'Greatsword',
        cost: 5000,
        availabilityLocation: ['smithy'],
        availability: 4,
        type: 'weapon'
    },
    {
        name: 'Halberd',
        cost: 2000,
        availabilityLocation: ['smithy'],
        availability: 4,
        type: 'weapon'
    },
    {
        name: 'Lance',
        cost: 1000,
        availabilityLocation: ['smithy'],
        availability: 4,
        type: 'weapon'
    },
    {
        name: 'Longsword',
        cost: 1500,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'weapon'
    },
    {
        name: 'Maul',
        cost: 1000,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'weapon'
    },
    {
        name: 'Morningstar',
        cost: 1500,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'weapon'
    },
    {
        name: 'Pike',
        cost: 500,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Rapier',
        cost: 2500,
        availabilityLocation: ['smithy'],
        availability: 3,
        type: 'weapon'
    },
    {
        name: 'Scimitar',
        cost: 2500,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'weapon'
    },
    {
        name: 'Shortsword',
        cost: 1000,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Arrows (20)',
        cost: 100,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Crossbow Bolts (20)',
        cost: 100,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'weapon'
    },
    {
        name: 'Padded Armour',
        cost: 500,
        availabilityLocation: ['generalStore'],
        availability: 2,
        type: 'armour'
    },
    {
        name: 'Hide Armour',
        cost: 500,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'armour'
    },
    {
        name: 'Leather Armor',
        cost: 2000,
        availabilityLocation: ['generalStore'],
        availability: 2,
        type: 'armour'
    },
    {
        name: 'Studded Leather Armor',
        cost: 4500,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 3,
        type: 'armour'
    },
    {
        name: 'Chain Shirt',
        cost: 5000,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'armour'
    },
    {
        name: 'Scale Mail',
        cost: 5000,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'armour'
    },
    {
        name: 'Breastplate',
        cost: 40000,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'armour'
    },
    {
        name: 'Half Plate',
        cost: 75000,
        availabilityLocation: ['smithy'],
        availability: 4,
        type: 'armour'
    },
    {
        name: 'Ring Mail',
        cost: 3000,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'armour'
    },
    {
        name: 'Chain Mail',
        cost: 7500,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'armour'
    },
    {
        name: 'Splint',
        cost: 20000,
        availabilityLocation: ['smithy'],
        availability: 3,
        type: 'armour'
    },
    {
        name: 'Plate',
        cost: 150000,
        availabilityLocation: ['smithy'],
        availability: 4,
        type: 'armour'
    },
    {
        name: 'Shield',
        cost: 1000,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'armour'
    },
    {
        name: 'Ball Bearings (1000)',
        cost: 100,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: 'Bell',
        cost: 100,
        availabilityLocation: ['smithy', 'temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Block and Tackle',
        cost: 100,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Chain (10 feet)',
        cost: 500,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Caltrops (Bag of 20)',
        cost: 100,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: 'Crowbar',
        cost: 200,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Grappling Hook',
        cost: 200,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 3,
        type: 'adventuring gear'
    },
    {
        name: 'Hammer',
        cost: 100,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Sledge Hammer',
        cost: 200,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Hunting Trap',
        cost: 500,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Lamp',
        cost: 50,
        availabilityLocation: ['smithy', 'temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Lantern, Bullseye',
        cost: 1000,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 4,
        type: 'adventuring gear'
    },
    {
        name: 'Lantern, Hooded',
        cost: 500,
        availabilityLocation: ['smithy', 'temple'],
        availability: 3,
        type: 'adventuring gear'
    },
    {
        name: 'Lock',
        cost: 1000,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Manacles',
        cost: 200,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: 'Mirror, Steel',
        cost: 500,
        availabilityLocation: ['smithy'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: "Pick, Miner's",
        cost: 200,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Piton',
        cost: 5,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Pot, Iron',
        cost: 200,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Ram, Portable',
        cost: 400,
        availabilityLocation: ['smithy'],
        availability: 4,
        type: 'adventuring gear'
    },
    {
        name: 'Spikes, Iron (10)',
        cost: 100,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: "Mason's Tools",
        cost: 1000,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 2,
        type: 'tools'
    },
    {
        name: "Smith's Tools",
        cost: 2000,
        availabilityLocation: ['smithy'],
        availability: 1,
        type: 'tools'
    },
    {
        name: "Tinker's Tools",
        cost: 5000,
        availabilityLocation: ['smithy', 'generalStore'],
        availability: 3,
        type: 'tools'
    },
    {
        name: 'Horn',
        cost: 300,
        availabilityLocation: ['smithy'],
        availability: 4,
        type: 'tools'
    },
    {
        name: 'Club',
        cost: 10,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Dagger',
        cost: 200,
        availabilityLocation: ['generalStore', 'smithy'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Greatclub',
        cost: 20,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Handaxe',
        cost: 500,
        availabilityLocation: ['generalStore', 'smithy'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Light Hammer',
        cost: 200,
        availabilityLocation: ['generalStore', 'smithy'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Quarterstaff',
        cost: 20,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Light Crossbow',
        cost: 2500,
        availabilityLocation: ['generalStore'],
        availability: 2,
        type: 'weapon'
    },
    {
        name: 'Dart',
        cost: 5,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Shortbow',
        cost: 2500,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Sling',
        cost: 10,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Whip',
        cost: 200,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Hand Crossbow',
        cost: 7500,
        availabilityLocation: ['generalStore'],
        availability: 3,
        type: 'weapon'
    },
    {
        name: 'Heavy Crossbow',
        cost: 5000,
        availabilityLocation: ['generalStore'],
        availability: 4,
        type: 'weapon'
    },
    {
        name: 'Longbow',
        cost: 5000,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'weapon'
    },
    {
        name: 'Backpack',
        cost: 200,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Bedroll',
        cost: 100,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Blanket',
        cost: 50,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Block and Tackle',
        cost: 100,
        availabilityLocation: ['generalStore', 'smithy'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Book',
        cost: 250,
        availabilityLocation: ['generalStore', 'temple'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: 'Bottle, Glass',
        cost: 200,
        availabilityLocation: ['generalStore', 'alchemist'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Bucket',
        cost: 5,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Candle',
        cost: 1,
        availabilityLocation: ['generalStore', 'temple'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: 'Case, Crossbow Bolt',
        cost: 500,
        availabilityLocation: ['generalStore'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: 'Case, Map or Scroll',
        cost: 100,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Chain, 10 feet',
        cost: 500,
        availabilityLocation: ['generalStore', 'smithy'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Chest',
        cost: 500,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Climbers Kit',
        cost: 2500,
        availabilityLocation: ['generalStore'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: "Clothes, Traveler's",
        cost: 200,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Component Pouch',
        cost: 2500,
        availabilityLocation: ['generalStore', 'alchemist'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: 'Fishing Tackle',
        cost: 100,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Flask or tankard',
        cost: 2,
        availabilityLocation: ['generalStore', 'alchemist', 'temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Hourglass',
        cost: 2500,
        availabilityLocation: ['generalStore'],
        availability: 3,
        type: 'adventuring gear'
    },
    {
        name: 'Hunting Trap',
        cost: 500,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Ink (1 ounce)',
        cost: 1000,
        availabilityLocation: ['generalStore', 'alchemist', 'temple'],
        availability: 3,
        type: 'adventuring gear'
    },
    {
        name: 'Ink Pen',
        cost: 2,
        availabilityLocation: ['generalStore', 'temple'],
        availability: 3,
        type: 'adventuring gear'
    },
    {
        name: 'Ladder, 10ft.',
        cost: 10,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Lantern, Bullseye',
        cost: 1000,
        availabilityLocation: ['generalStore', 'smithy'],
        availability: 3,
        type: 'adventuring gear'
    },
    {
        name: 'Lantern, Hooded',
        cost: 500,
        availabilityLocation: ['generalStore', 'smithy'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Magnifying Glass',
        cost: 10000,
        availabilityLocation: ['generalStore'],
        availability: 3,
        type: 'adventuring gear'
    },
    {
        name: 'Mess Kit',
        cost: 20,
        availabilityLocation: ['generalStore'],
        availability: 3,
        type: 'adventuring gear'
    },
    {
        name: 'Steel Mirror',
        cost: 500,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Oil, flask',
        cost: 10,
        availabilityLocation: ['generalStore', 'alchemist', 'temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Paper (one sheet)',
        cost: 20,
        availabilityLocation: ['generalStore', 'temple'],
        availability: 4,
        type: 'adventuring gear'
    },
    {
        name: 'Parchment (one sheet)',
        cost: 10,
        availabilityLocation: ['generalStore', 'temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Pole (10 ft.)',
        cost: 5,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Pouch',
        cost: 50,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Quiver',
        cost: 500,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Rope, Hemp (50ft)',
        cost: 100,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Rope, Silk (50ft)',
        cost: 1000,
        availabilityLocation: ['generalStore'],
        availability: 4,
        type: 'adventuring gear'
    },
    {
        name: 'Sack',
        cost: 1,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Shovel',
        cost: 200,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Signal whistle',
        cost: 5,
        availabilityLocation: ['generalStore'],
        availability: 3,
        type: 'adventuring gear'
    },
    {
        name: 'Spikes, Iron (10)',
        cost: 100,
        availabilityLocation: ['generalStore', 'smithy'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Spyglass',
        cost: 100000,
        availabilityLocation: ['generalStore'],
        availability: 4,
        type: 'adventuring gear'
    },
    {
        name: 'Two person tent',
        cost: 200,
        availabilityLocation: ['generalStore'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: 'Tinderbox',
        cost: 50,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Torch',
        cost: 1,
        availabilityLocation: ['generalStore', 'temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Vial',
        cost: 100,
        availabilityLocation: ['generalStore', 'alchemist', 'temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Waterskin',
        cost: 20,
        availabilityLocation: ['generalStore', 'temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: "Cartographer's Tools",
        cost: 1500,
        availabilityLocation: ['generalStore'],
        availability: 2,
        type: 'tools'
    },
    {
        name: "Calligrapher's Tools",
        cost: 1000,
        availabilityLocation: ['temple'],
        availability: 2,
        type: 'tools'
    },
    {
        name: 'Herbalism Kit',
        cost: 500,
        availabilityLocation: ['generalStore', 'temple'],
        availability: 2,
        type: 'tools'
    },
    {
        name: "Healer's Kit",
        cost: 500,
        availabilityLocation: ['generalStore', 'alchemist', 'temple'],
        availability: 2,
        type: 'tools'
    },
    {
        name: "Navigator's Tools",
        cost: 2500,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'tools'
    },
    {
        name: "Painter's Supplies",
        cost: 1000,
        availabilityLocation: ['generalStore'],
        availability: 3,
        type: 'tools'
    },
    {
        name: "Potter's Tools",
        cost: 1000,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'tools'
    },
    {
        name: 'Dice Set',
        cost: 10,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'tools'
    },
    {
        name: 'Playing Card Set',
        cost: 50,
        availabilityLocation: ['generalStore'],
        availability: 1,
        type: 'tools'
    },
    {
        name: 'Flute',
        cost: 200,
        availabilityLocation: ['temple'],
        availability: 3,
        type: 'tools'
    },
    {
        name: 'Lyre',
        cost: 3000,
        availabilityLocation: ['temple'],
        availability: 3,
        type: 'tools'
    },
    {
        name: 'Horn',
        cost: 300,
        availabilityLocation: ['temple'],
        availability: 3,
        type: 'tools'
    },
    {
        name: 'Poison, Basic',
        cost: 10000,
        availabilityLocation: ['alchemist'],
        availability: 1,
        type: 'consumable'
    },
    {
        name: 'Potion, Common',
        cost: 50000,
        availabilityLocation: ['alchemist'],
        availability: 1,
        type: 'consumable'
    },
    {
        name: 'Potion, Uncommon',
        cost: 250000,
        availabilityLocation: ['alchemist'],
        availability: 1,
        type: 'consumable'
    },
    {
        name: 'Potion, Rare',
        cost: 2500000,
        availabilityLocation: ['alchemist'],
        availability: 3,
        type: 'consumable'
    },
    {
        name: 'Potion of Healing',
        cost: 5000,
        availabilityLocation: ['alchemist', 'temple'],
        availability: 1,
        type: 'consumable'
    },
    {
        name: 'Potion of Poison',
        cost: 10000,
        availabilityLocation: ['alchemist'],
        availability: 2,
        type: 'consumable'
    },
    {
        name: 'Potion of Health',
        cost: 12000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Fire Breath',
        cost: 150000,
        availabilityLocation: ['alchemist'],
        availability: 3,
        type: 'consumable'
    },
    {
        name: 'Potion of Greater Healing',
        cost: 15000,
        availabilityLocation: ['alchemist'],
        availability: 2,
        type: 'consumable'
    },
    {
        name: 'Potion of Climbing',
        cost: 18000,
        availabilityLocation: ['alchemist'],
        availability: 1,
        type: 'consumable'
    },
    {
        name: 'Potion of Heroism',
        cost: 18000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Invisibility',
        cost: 18000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Mind Reading',
        cost: 18000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Water Breathing',
        cost: 18000,
        availabilityLocation: ['alchemist'],
        availability: 2,
        type: 'consumable'
    },
    {
        name: 'Potion of Animal Friendship',
        cost: 20000,
        availabilityLocation: ['alchemist'],
        availability: 3,
        type: 'consumable'
    },
    {
        name: 'Potion of Diminution',
        cost: 27000,
        availability: 4,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Growth',
        cost: 27000,
        availability: 3,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Gaseous Form',
        cost: 30000,
        availability: 4,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Resistance',
        cost: 30000,
        availability: 3,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Speed',
        cost: 40000,
        availability: 4,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Superior Healing',
        cost: 45000,
        availability: 3,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Flying',
        cost: 50000,
        availability: 4,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Clairvoyance',
        cost: 96000,
        availability: 4,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Vitality',
        cost: 96000,
        availability: 4,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Supreme Healing',
        cost: 135000,
        availability: 4,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Invulnerability',
        cost: 384000,
        availability: 4,
        availabilityLocation: ['alchemist'],
        type: 'consumable'
    },
    {
        name: 'Potion of Diminution',
        cost: 27000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Growth',
        cost: 27000,
        availabilityLocation: ['alchemist'],
        availability: 3,
        type: 'consumable'
    },
    {
        name: 'Potion of Gaseous Form',
        cost: 30000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Resistance',
        cost: 30000,
        availabilityLocation: ['alchemist'],
        availability: 3,
        type: 'consumable'
    },
    {
        name: 'Potion of Speed',
        cost: 40000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Superior Healing',
        cost: 45000,
        availabilityLocation: ['alchemist'],
        availability: 3,
        type: 'consumable'
    },
    {
        name: 'Potion of Flying',
        cost: 50000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Clairvoyance',
        cost: 96000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Vitality',
        cost: 96000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Supreme Healing',
        cost: 135000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Potion of Invulnerability',
        cost: 384000,
        availabilityLocation: ['alchemist'],
        availability: 4,
        type: 'consumable'
    },
    {
        name: 'Jug',
        cost: 2,
        availabilityLocation: ['alchemist'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Anti-toxin (vial)',
        cost: 5000,
        availabilityLocation: ['alchemist'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: "Brewer's Supplies",
        cost: 2000,
        availabilityLocation: ['alchemist'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Acid',
        cost: 2500,
        availabilityLocation: ['alchemist'],
        availability: 2,
        type: 'adventuring gear'
    },
    {
        name: "Poisoner's Kit",
        cost: 50000,
        availabilityLocation: ['alchemist'],
        availability: 2,
        type: 'tools'
    },
    {
        name: "Alchemist's Supplies",
        cost: 50000,
        availabilityLocation: ['alchemist'],
        availability: 2,
        type: 'tools'
    },
    {
        name: "Cook's Utensils",
        cost: 20,
        availabilityLocation: ['alchemist'],
        availability: 3,
        type: 'tools'
    },
    {
        name: "Alchemist's Fire (flask)",
        cost: 5000,
        availabilityLocation: ['alchemist'],
        availability: 3,
        type: 'adventuring gear'
    },
    {
        name: 'Perfume (vial)',
        cost: 500,
        availabilityLocation: ['alchemist', 'temple'],
        availability: 4,
        type: 'adventuring gear'
    },
    {
        name: "Alm's box",
        cost: 500,
        availabilityLocation: ['temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Scripture Book',
        cost: 2500,
        availabilityLocation: ['temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Censer',
        cost: 500,
        availabilityLocation: ['temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Chalk (one piece)',
        cost: 1,
        availabilityLocation: ['temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Holy symbol',
        cost: 500,
        availabilityLocation: ['temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Flask of Holy Water',
        cost: 2500,
        availabilityLocation: ['temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Incense (1 block)',
        cost: 1,
        availabilityLocation: ['temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Rations (1 day)',
        cost: 50,
        availabilityLocation: ['temple'],
        availability: 1,
        type: 'adventuring gear'
    },
    {
        name: 'Crisped Worm and Potatoes',
        cost: 3,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'omni'
    },
    {
        name: 'Frogs on Skewers',
        cost: 4,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'carni'
    },
    {
        name: 'Green Chili Stew',
        cost: 3,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Grilled Snake and Macadamia',
        cost: 3,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'carni'
    },
    {
        name: 'Humble Pie (tripe or cow heel)',
        cost: 2,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Lizard Gruel with Nutbread',
        cost: 3,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'carni'
    },
    {
        name: 'Plain porridge',
        cost: 2,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Spiced porridge',
        cost: 3,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Pot of cured meats',
        cost: 4,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'carni'
    },
    {
        name: 'Bacon and Eggs',
        cost: 6,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'carni'
    },
    {
        name: 'Bread and cheese',
        cost: 3,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Vegetable Stew',
        cost: 4,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Eggs on toast',
        cost: 5,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Honeybread',
        cost: 3,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Greenspear',
        cost: 3,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Baked potatoes',
        cost: 3,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Catch of the Day fish, served with lemon',
        availabilityLocation: ['tavern'],
        cost: 11,
        availability: 2,
        dietary: 'carni'
    },
    {
        name: 'Barbecued Gopher Legs',
        cost: 6,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'carni'
    },
    {
        name: 'Bog-Beetle Dumplings',
        cost: 4,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'carni'
    },
    {
        name: 'Bread-bowl stew',
        cost: 5,
        availabilityLocation: ['tavern'],
        availability: 2,
        dietary: 'veg'
    },
    {
        name: 'Leg of Mutton and eggs',
        cost: 6,
        availabilityLocation: ['tavern'],
        availability: 2,
        dietary: 'carni'
    },
    {
        name: 'Mushroom Stew with Bread',
        cost: 5,
        availabilityLocation: ['tavern'],
        availability: 2,
        dietary: 'veg'
    },
    {
        name: 'Rabbit and Baked Pumpkin',
        cost: 6,
        availabilityLocation: ['tavern'],
        availability: 2,
        dietary: 'omni'
    },
    {
        name: 'Roseapple pie',
        cost: 3,
        availabilityLocation: ['tavern'],
        availability: 1,
        dietary: 'veg'
    },
    {
        name: 'Squash and Fish Soup',
        cost: 8,
        availabilityLocation: ['tavern'],
        availability: 2,
        dietary: 'omni'
    },
    {
        name: 'Broiled Salmon and Potatoes',
        cost: 30,
        availabilityLocation: ['tavern'],
        availability: 2,
        dietary: 'omni'
    },
    {
        name: 'Cheese Pie and Onion Soup',
        cost: 25,
        availabilityLocation: ['tavern'],
        availability: 2,
        dietary: 'veg'
    },
    {
        name: 'Grilled Wild Boar Chops',
        cost: 35,
        availabilityLocation: ['tavern'],
        availability: 2,
        dietary: 'carni'
    },
    {
        name: 'Baked Loin of Pork with Gravy',
        cost: 56,
        availabilityLocation: ['tavern'],
        availability: 3,
        dietary: 'carni'
    },
    {
        name: 'Beef Steak and Kidney Pie',
        cost: 78,
        availabilityLocation: ['tavern'],
        availability: 3,
        dietary: 'carni'
    },
    {
        name: 'Pecan Pie',
        cost: 35,
        availabilityLocation: ['tavern'],
        availability: 3,
        dietary: 'veg'
    },
    {
        name: 'Buffaloaf and Honeyed Corn',
        cost: 70,
        availabilityLocation: ['tavern'],
        availability: 3,
        dietary: 'carni'
    },
    {
        name: 'Elven Bread',
        cost: 60,
        availabilityLocation: ['tavern'],
        availability: 3,
        dietary: 'veg'
    },
    {
        name: 'Honey Braised Boar Ribs',
        cost: 85,
        availabilityLocation: ['tavern'],
        availability: 3,
        dietary: 'carni'
    },
    {
        name: 'Pork Chop and Curds',
        cost: 92,
        availabilityLocation: ['tavern'],
        availability: 3,
        dietary: 'carni'
    },
    {
        name: 'Rack of Lamb Platter',
        cost: 95,
        availabilityLocation: ['tavern'],
        availability: 3,
        dietary: 'carni'
    },
    {
        name: 'Barbecued Tiger Fish and Papaya',
        cost: 200,
        availabilityLocation: ['tavern'],
        availability: 4,
        dietary: 'omni'
    }
];


/***/ }),

/***/ "./lib/src/lifestyleStandards.ts":
/*!***************************************!*\
  !*** ./lib/src/lifestyleStandards.ts ***!
  \***************************************/
/*! exports provided: lifestyleStandards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifestyleStandards", function() { return lifestyleStandards; });
/**
 * index 0 is the amount of money necessary for the lifestyle
 * index 1 is the description
 * index 2 is the percentage of their money taken up by lifestyle expenses (used by npc.finances.livingExpenses())
 */
const lifestyleStandards = [
    [1000, 'aristocratic', 40, 'lives large, with little care to how much money is spent, splashing out on expensive things on a whim'],
    [400, 'wealthy', 35, 'lives lavishly, with fine foods, wines, clothes, and all the comforts money can buy'],
    [200, 'comfortable', 30, 'lives a comfortable life, filled with good food and wine'],
    [100, 'modest', 25, 'lives modestly- not without creature comforts of wine and decent food thanks to frugality, though'],
    [20, 'poor', 10, 'lives a poor life, having to count copper and save for purchases'],
    [10, 'squalid', 5, 'lives a squalid existence, eating terrible food with no alcohol, and few creature comforts'],
    [0, 'wretched', 3, 'lives a wretched life of constant filth and misery. There is no respite to this poverty']
];


/***/ }),

/***/ "./lib/src/linguisticDrift.ts":
/*!************************************!*\
  !*** ./lib/src/linguisticDrift.ts ***!
  \************************************/
/*! exports provided: linguisticDrift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linguisticDrift", function() { return linguisticDrift; });
/* harmony import */ var _randomFloat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomFloat */ "./lib/src/randomFloat.ts");

function linguisticDrift(name) {
    // These rules get applied repeatedly until they cannot be applied any more
    const fix = [
        // Some vowels should never be doubled
        [1, /aa/g, 'a'],
        [1, /ii/g, 'i'],
        [1, /uu/g, 'u'],
        // Some bad vowel combos
        [1, /ae/g, 'a'],
        [1, /eu/g, 'e'],
        // Some consonants should never be doubled
        [1, /([hjkqvwxy])\1/g, '$1'],
        // No tripled letters
        [1, /([a-z])\1\1/, '$1$1'],
        // Remove a doubled consonant when it has a consonant on both? ends
        [1, /([bcdfghjklmnpqrstvwxz])([bcdfghjklmnpqrstvwxz])\2([bcdfghjklmnpqrstvwxz])/g, '$1$2$3'],
        // [1, /([bcdfghjklmnpqrstvwxz])\1([bcdfghjklmnpqrstvwxz])/g, '$1$2'],
        // No -lee at the end of a word
        [1, /([^Ff][^r])ee /g, '$1ey '],
        [1, /([^Ff][^r])ee$/, '$1ey'],
        // ror, rur, rar, etc., are hard to say
        [1, /r([aeiou])r/, '$1r'],
        // no vowel before -ington
        [1, /([aeiou])ington$/, 'ington'],
        // No -ttown
        [1, /ttown$/, 'town']
    ];
    // Simplify out some problematic combinations
    const modify = [
        // Sometimes remove a doubled consonant no matter where
        [0.50, /([bcdfghjkmnpqrstvwxyz])\1(\w)/, '$1$2'],
        // Some of the time turn a ph into f
        [0.50, /ph/, 'f'],
        // Convert y to i
        [0.50, /([bcdfghjklmnpqrstvwxyz])y([bcdfghjklmnpqrstvwxyz])/, '$1ie$2'],
        // chrim => krim?
        [0.50, /chrim/, 'krim'],
        // [^c]kr => $1
        [0.50, /([^c])kr/, '$1cr'],
        // oa => o
        [0.50, /oa/g, 'o'],
        // Randomly swap vowels
        [0.05, VOWEL_SWAP, 'a'],
        [0.05, VOWEL_SWAP, 'e'],
        [0.05, VOWEL_SWAP, 'i'],
        [0.05, VOWEL_SWAP, 'o'],
        [0.05, VOWEL_SWAP, 'u'],
        // Randomly swap consonants
        // Thu Jun 21 17:07:45 2018 -- Scott R. Turner
        // Don't swap one consonant of a pair
        [0.01, CONSONANT_SWAP, '$1b$2'],
        [0.01, CONSONANT_SWAP, '$1c$2'],
        [0.01, CONSONANT_SWAP, '$1d$2'],
        [0.01, CONSONANT_SWAP, '$1f$2'],
        [0.01, CONSONANT_SWAP, '$1g$2'],
        [0.01, CONSONANT_SWAP, '$1j$2'],
        [0.01, CONSONANT_SWAP, '$1k$2'],
        [0.01, CONSONANT_SWAP, '$1l$2'],
        [0.01, CONSONANT_SWAP, '$1m$2'],
        [0.01, CONSONANT_SWAP, '$1n$2'],
        [0.01, CONSONANT_SWAP, '$1p$2'],
        [0.01, CONSONANT_SWAP, '$1r$2'],
        [0.01, CONSONANT_SWAP, '$1s$2'],
        [0.01, CONSONANT_SWAP, '$1t$2'],
        [0.01, CONSONANT_SWAP, '$1v$2'],
        [0.01, CONSONANT_SWAP, '$1w$2'],
        [0.01, CONSONANT_SWAP, '$1y$2'],
        // Adding an superfluous e to the end...
        [0.50, /([bcdfghjklmnpqrstvwxyz])([bcdfghjklmnpqrtvwxyz])$/, '$1$2e'],
        [0.50, /oor/, 'ore'],
        [0.50, /(\w)y(\w)/, '$1i$2'],
        [0.50, /ph/, 'f'],
        [0.50, /f/, 'ph'],
        [0.50, /nge/, 'nj'],
        [0.50, /earl/, 'url'],
        [0.50, /oung/, 'ung'],
        [0.50, /ake/, 'eak']
    ];
    for (const [threshold, regExp, value] of [...fix, ...modify]) {
        if (Object(_randomFloat__WEBPACK_IMPORTED_MODULE_0__["randomFloat"])(1) <= threshold) {
            name = name.replace(regExp, value);
        }
    }
    return name;
}
const VOWEL_SWAP = /[aeiou]+/;
const CONSONANT_SWAP = /([aeiou])[bcdfghjklmnpqrstvwxyz]([aeiou])/;


/***/ }),

/***/ "./lib/src/magicData.ts":
/*!******************************!*\
  !*** ./lib/src/magicData.ts ***!
  \******************************/
/*! exports provided: magicData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magicData", function() { return magicData; });
const magicData = {
    armour: {
        type: ['Padded Armour', 'Leather Armour', 'Studded leather Armour', 'Hide Armour', 'Chain shirt', 'Scale mail', 'Breastplate', 'Half plate', 'Ring mail', 'Chain mail', 'Splint Armour', 'Plate Armour', 'Shield'],
        prefix: ["Acolyte's", 'Amethyst', 'Arboreal', 'Arid', 'Astute', 'Arctic', "Artisan's", "Barbarian's", "Bard's", 'Blessed', 'Bloodthirsty', "Burglar's", 'Cavernous', 'Cardinal', 'Cerulean', 'Channelling', 'Charitable', 'Civilized', "Climber's", 'Concealing', 'Consecrated', 'Crystalline', "Dancer's", 'Dazzling', "Debtor's", 'Defensive', 'Deflecting', "Delver's", 'Diplomatic', "Druid's", 'Ephemeral', 'Evasive', 'Fair-weather', 'Lying', 'Favored', 'Feinting', 'Fen', 'Flanked', 'First', 'Fresh', 'Forgotten', 'Furious', 'Garnet', 'Glass', 'Granite', 'Grim', 'Harmonious', 'Heroic', 'Histrionic', 'Holy', "Inquisitor's", 'Inspired', 'Invisible', 'Lightweight', 'Loquacious', "Mage Killer's", 'Malachite', 'Masquarading', "Medic's", 'Moonlit', "Mortals'", 'Mournful', 'Obsidian', 'Opal', 'Pious', 'Prairie', "Preacher's", 'Precipice', 'Primeval', 'Reflexive', 'Renaissance', 'Resonant', 'Righteous', 'Regal', 'Runic', 'Sacred', 'Sagacious', "Sage's", "Sailor's", "Scribe's", 'Shading', 'Shadow', "Shepherd's", 'Shifting', 'Silent', 'Solar', 'Spiked', 'Spiritual', 'Subtle', "Surgeon's", 'Tenacious', "Tracker's", 'Trusty', 'Turquoise', 'Twilight', "Undertaker's", 'Unyielding', 'Vanguard', 'Veiled', 'Victorious', 'Vigilant', 'Vile', 'Violent', "War Leader's", 'Warded', "Watcher's", 'Waterborne', 'Winged', "Wizard's", 'Zen', 'Zircon', 'Abyssal', 'Alarming', 'Arborean', 'Arcadian', 'Astral', 'Beastial', "Beastspeaker's", 'Benedictine', 'Blasted', 'Bold', 'Bountiful', 'Bytopian', 'Carcerian', 'Cartographic', 'Chill', 'Clockwork', 'Cloy', 'Compassionate', 'Concordant', "Conjurer's", 'Corrosive', 'Crawling', "Drunkard's", 'Elysian', 'Etherbound', 'Exalting', 'Expeditious', 'Fathoming', 'Feathered', 'Feybound', 'Forgiven', "Fortune Teller's", 'Friendly', 'Gehennan', 'Gracious', 'Hadean', 'Healing', 'Hellish', 'Desperate', 'Leaping', "Liar's", 'Limbo', 'Locating', 'Malediction', 'Manipulating', "Master's", 'Maverick', 'Messenger', 'Meteoric', 'Miraculous', 'Mocking', 'Natural', 'Neutralizing', 'Nourishing', 'Pandemonium', 'Projecting', 'Protective', 'Revealing', 'Riutal', "Sailor's", 'Secret', 'Shadowbound', 'Shielding', "Smith's", 'Sparkling', 'Striding', 'Translucent', "Trickster's", 'Accurate', 'Verdant', 'Windborne', 'Wrathful', 'Thunderous', 'Chained', "Spider's", 'Heliacal', 'Crippling', 'Lunar', "Fatespinner's", 'Rooting', 'Mirrored', 'Vulpine', 'Submerged', 'Comforting', "Brawler's", 'Eagle-eye', 'Lupine', 'Chiropteran', 'Black'],
        suffix: ['of the Acolyte', 'of Amethyst', 'of the Woodlands', 'of the Wastelands', 'of the Astute', 'of the North', 'of the Artisan', 'of the Barbarian', 'of the Bard', 'of Blessings', 'of Bloodthirst', 'of the Burglar', 'of the Underdark', 'of the Lodestone', 'of Storms', 'of Channelling', 'of Charity', 'of the Hearth', 'of the Climber', 'of Concealment', 'of Consecration', 'of Crystal', 'of the Dancer', 'of Dazzling', 'of Debts', 'of Defence', 'of Deflection', 'of the Delver', 'of Diplomacy', 'of the Druid', 'of Transience', 'of Evasion', 'of Fair-weather', 'of Falsehoods', 'of the Favored', 'of Feinting', 'of the Glade', 'of the Flanked', 'of Reflexes', 'of Cleansing', 'of the Forgotten', 'of Fury', 'of Garnet', 'of Glass', 'of the Mountain', 'of Coercion', 'of Harmony', 'of Heroes', 'of Histrionics', 'of Faith', 'of the Inquisitor', 'of Inspiration', 'of Invisibility', 'of Mobility', 'of the Silver Tongue', 'of the Mage Killer', 'of Malachite', 'of the Masquarade', 'of the Caduceus', 'of the Moon', 'of Mortals', 'of Sorrow', 'of Obsidian', 'of Opal', 'of the Pious', 'of the Plains', 'of the Preacher', 'of the Crags', 'of the Jungle', 'of Reflexes', 'of the Renaissance', 'of Resonance', 'of Righteousness', 'of Royalty', 'of Runes', 'of the Sacred', 'of Acumen', 'of the Sage', 'of the Sea', 'of the Scribe', 'of Shade', 'of Shadows', 'of the Shepherd', 'of Shifting', 'of the Night', 'of the Sun', 'of Teeth', 'of the Divine', 'of Subtleties', 'of the Surgeon', 'of the Tenacious', 'of the Tracker', 'of Resurgence', 'of Turquoise', 'of Twilight', 'of the Undertaker', 'of the Unyielding', 'of the Vanguard', 'of the Veil', 'of Victory', 'of Vigilance', 'of Villains', 'of Violence', 'of the War Leader', 'of Wards', 'of the Watcher', 'of the Sea', 'of Wings', 'of the Wizard', 'of Zen', 'of Zircon', 'of the Abyss', 'of Alarms', 'of Arborea', 'of Arcadia', 'of the Astral Sea', 'of the Beastlands', 'of Beastspeakers', 'of Benediction', 'of Blasting', 'of Boldness', 'of Bounty', 'of Bytopia', 'of Carceri', 'of Cartography', 'of Chills', 'of Gears', 'of Cloying', 'of Compassion', 'of Concordance', 'of the Conjurer', 'of Dissolving', 'of Vermin', 'of Taverns', 'of Elysium', 'of Ethereal Shores', 'of Exaltation', 'of Expedience', 'of Tongues', 'of Feathers', 'of the Fey', 'of Forgiveness', 'of the Fortune Teller', 'of Friendship', 'of Gehenna', 'of Grace', 'of Hades', 'of Healing', 'of the Nine Hells', 'of Last Chances', 'of Leaping', 'of Lies', 'of Limbo', 'of Locating', 'of Malediction', 'of Manipulation', 'of Servants', 'of the Maverick', 'of Messages', 'of Falling Stars', 'of Miracles', 'of Mockery', 'of Nature', 'of Neutrality', 'of Nourishment', 'of Pandemonium', 'of Projection', 'of Protection', 'of Revelation', 'of Rituals', 'of the Sea', 'of Secrets', 'of the Shadowfell', 'of Shielding', 'of Reparations', 'of Lights', 'of Strides', 'of Translucence', 'of Trickery', 'of Truth', 'of Druidcraft', 'of the Labyrinth Wind', 'of Ysgard', 'of the Rolling Thunder', 'of Chains', 'of the Spider', 'of the Sun', 'of Crippling', 'of the Moon', 'of the Fates', 'of Roots', 'of Mirrors', 'of the Fox', 'of the Depths', 'of Comfort', 'of Brawling', 'of the Eagle', 'of the Wolf', 'of the Bat', 'of Darkness'],
        property: [
            'The bearer gains a +1 bonus to Wisdom (Religion) checks',
            'Reduces psychic damage to the bearer by 2',
            'Treat as a +1 armor after the bearer has taken a long rest in a forest. If the bearer leaves the forest, this property becomes temporarily inert',
            'Treat as a +1 armor after the bearer has taken a long rest in a desert. If the bearer leaves the desert, this property becomes temporarily inert',
            'It takes half the time to don or doff this armor than a normal armor of this type',
            'The bearer suffers no harm in temperature as cold as -20 degrees Fahrenheit',
            "This armor is a swiss army knife of enchanted appendages that can take the form of any artisan's tools, from Alchemist's and Brewer's supplies to Weaver's and Woodcarver's tools (see p. 154 of the PHB for a complete set of artisan's tools)",
            'The bearer gains a +1 bonus to Strength (Athletics) checks',
            'The bearer gains +1 to Charisma (Performance) checks',
            'Whenever bearer of this item receives divine healing, they gain an additional 1d4 hit points',
            'The bearer can expend a hit die to turn this into a +1 armor for 1d4 turns',
            'The bearer gains +1 to Dexterity (Sleight of Hand) checks',
            'Treat as a +1 armor after the bearer has taken a long rest in a cave. If the bearer leaves the cave, this property becomes temporarily inert',
            'The wielder can use an action to learn which way is north',
            'Reduces lightning damage to the bearer by 2',
            'Once per day, the bearer may ignore the Verbal and/or Somatic components of a spell they are casting',
            'If the bearer donates 100gp or more to a temple of a goodly deity, this becomes a +1 armor for the next 24 hours. If they go longer than a month without making any such donations, they gain a -1 AC penalty until a suitable donation is made',
            'Treat as a +1 armor after the bearer has taken a long rest in an living urban environment. If the bearer leaves the city, this property becomes temporarily inert',
            'This armor is suited with harnesses, rope, and other climbing tools are readily in reach. The bearer may treat this armor as a climbing kit',
            'The bearer may spend one action assembling components of this armor into a dagger. A person searching the bearer for weapons must make a DC 20 Intelligence (Investigation) check to discover this property',
            'Treat this as a +1 armor when the bearer is being attacked by Undead',
            'Treat as +1 armor until the bearer takes a critical hit, at which point it then loses this property',
            'The bearer gains a +1 bonus to Dexterity (Acrobatics) checks',
            'Once per day, the bearer may spend an action to ignite the magic in this armor, causing it to flare brilliantly. Any creature within a 10 foot radius must use their reaction to shield their eyes or be blinded until the end of their next turn',
            'The first 1 bludgeoning, piercing, or slashing damage from any source is negated. However, the total amount of damage prevented from that day acts as a negative modifier on death saving throws. So, if the armor prevented 5 points of damage that day, the bearer has a -5 penalty on death saving throws',
            'Whenever the bearer takes a dodge action, they may move an additional 5 feet',
            'The bearer may spend their reaction to treat this as +1 armor vs. ranged weapon attacks until the beginning of their next turn',
            "While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward",
            "The bearer gains proficiency in a language of the DM's choice",
            'The bearer gains a +1 bonus to Intelligence (Nature) checks',
            'Once per day, the bearer may spend their reaction to gain their Wisdom modifier to their AC until the beginning of their next turn',
            'Whenever the wearer takes a dodge action, they gain +1 AC until the end of the turn',
            'The bearer may treat this as +1 armor if the bearer has more than half of their maximum hit points',
            'The bearer gains a +1 bonus to Charisma (Deception) checks',
            'Once per day, the bearer may roll a saving throw with advantage',
            'Whenever the bearer uses the help action in combat, they may treat this as a +1 armor until the beginning of their next turn',
            'Treat as a +1 armor after the bearer has taken a long rest in a swamp. If the bearer leaves the swamp, this property becomes temporarily inert',
            'The wearer may treat this as +1 armor if two or more enemies are adjacent to them',
            'The bearer gain a +1 bonus to initiative rolls',
            'This armor never gets dirty and remains odorless, even in the most filthy dungeon',
            'The bearer may spend an action to attempt to ignite the old magic in this armor with a DC 13 Charisma check. If successful, treat this as a +1 armor as long as the bearer maintains concentration on this effect, maximum 10 minutes',
            'Treat as a +1 armor when the bearer is raging',
            'Reduces fire damage to the bearer by 2',
            'The bearer may treat this as +1 armor as long as the bearer is at full health',
            'Any effect that would move the bearer against their will is reduced in distance by 5 feet',
            'The bearer gains a +1 bonus to Charisma (Intimidation) checks if their armor is visible',
            'Attuning to this item takes only 1 minute',
            'The bearer has advantage on saving throws vs. fear',
            'the bearer gains +1 to Charisma (Performance) checks',
            'When the bearer of this item rolls hit dice, they can choose to re-roll them and take the second result',
            'The bearer gains a +1 bonus to Intelligence (Investigation) checks',
            'The bearer regains their Constitution modifier in temporary hit points whenever they gain or use inspiration',
            'Once worn, this armor turns invisible (although not the wearer)',
            'This armor is 10% lighter than normal armor of this type. If it has a Strength requirement to use, it is reduced by 1',
            'The bearer gains +1 to Charisma (Persuasion) checks',
            'The bearer may spend their reaction to treat this as +1 armor vs. spell attacks until the beginning of their next turn',
            'Reduces poison damage to the bearer by 2',
            'The bearer has advantage on skill checks involving disguise kits',
            "Lined with pockets and compartments and stocked with medical supplies, the bearer may treat this armor as a healer's kit",
            'The bearer may treat this as +1 armor when moonlight is shining directly on this armor',
            'At the end of a turn where the bearer failed a death saving throw, the magic within this armor will attempt to stabilize the bearer. It rolls a Wisdom (Medicine) check with a +3 modifier',
            'When an ally falls unconscious in battle, the bearer gains a +1 AC bonus for the next 10 minutes. If that ally stabilizes or awakens, the bearer loses this bonus',
            'Reduces acid damage to the bearer by 2',
            'Reduces cold damage to the bearer by 2',
            'Whenever the bearer shaves their head, treat this as a +1 armor until the end of the day. They must wait a week until they have long enough hair to re-enact this ritual',
            'Treat as a +1 armor after the bearer has taken a long rest in a grassland. If the bearer leaves the grassland, this property becomes temporarily inert',
            'The bearer may extend the range of their Channel Divinity by 5 feet',
            'Treat as a +1 armor after the bearer has taken a long rest in the mountains. If the bearer leaves the mountain, this property becomes temporarily inert',
            'Treat as a +1 armor after the bearer has taken a long rest in a jungle. If the bearer leaves the jungle, this property becomes temporarily inert',
            'If the bearer is first in initiative order, treat this as +1 armor for 1 minute',
            'Once per day, the bearer may gain +1 to any skill check',
            'The bearer can spend an action and 1 ki point to treat this as +1 armor for 1 minute',
            'Treat this as +1 armor during the day when attuned to a good aligned character',
            'This armor is richly decorated and fashionable. Although it retains a hint of the ruggedness of a military garment, it could function as well in a ballroom as the battlefield. To the outside observer, you appear to be keeping an Aristocratic lifestyle expense',
            'Whenever bearer casts a spell, treat this as +1 armor until the beginning of their next turn',
            'The bearer may increase their Lay on Hands hit point pool by 5',
            'The bearer gains +1 to Wisdom (Insight) checks',
            'The bearer gains a +1 bonus to Intelligence (History) checks',
            'Treat as a +1 armor after the bearer has taken a long rest on the high seas. If the bearer leaves the ocean, this property becomes temporarily inert',
            "This armor unfolds to reveal animated appendages that are equipped with writing implements, magnifying glasses, and book stands. The armor aids the bearer in transcription tasks: it knows 3 languages of the DM's choice and halves the amount of time it takes the bearer to copy any text, including spells into spellbooks",
            'The bearer suffers no harm in temperatures as high as 120 degrees Fahrenheit',
            'Treat as a +1 armor when in dim light',
            'The bearer gains a +1 bonus to (Wisdom) Animal Handling checks',
            'The bearer may change minor aspects of the physical appearance of this item',
            'If this armor imposed disadvantage to stealth, it no longer does. Otherwise, the bearer gains a +1 bonus to Dexterity (Stealth) checks',
            'The bearer may treat this as +1 armor when in direct sunlight',
            'Whenever a creature begins their turn grappling or being grappled by the bearer, they take 1d4 piercing damage',
            "This armor is naught but a prayer written on a scrap of vellum, decorated with religious motifs of a particular god. Once per day, the bearer may spend 1 minute to read the prayer out loud, and at the end this armor will manifest and encase the bearer. The armor disappears if you act in any way that is not in accordance to the god's teachings",
            "The bearer gains proficiency in Thieves' Cant",
            'The bearer gains a +1 bonus to Wisdom (Medicine) checks',
            'When the bearer takes a long rest, they gain back one additional hit die',
            'The bearer gains a +1 to Wisdom (Survival) checks',
            'Treat this as +1 armor if the bearer has half their maximum hit points or less',
            'Reduces thunder damage to the bearer by 2',
            'Within 1 hour before or after the rising and setting of the sun, or during a solar eclipse, the armor comes alive with magic and the bearer may treat this as +1 armor',
            'Once deceased, the body wearing this armor cannot be animated or raised from the dead',
            'The bearer may treat this as +1 armor if they have taken damage since the beginning of their last turn. This effect ends at the beginning of their next turn',
            'The bearer may spend their reaction to gain a +1 AC bonus vs. melee weapon attacks until the beginning of their next turn',
            'The wearer gains a +1 bonus to Dexterity (Stealth) checks when taking a hide action',
            "Whenever the bearer kills a creature while wearing this amror, they gain temporary hit points equal to the creature's CR",
            'The bearer gains +2 to their Passive Perception',
            'Treat this as +1 armor at night when attuned to an evil aligned character',
            'The bearer may choose to treat the heavy metal gauntlets of this armor as a Mace',
            'The bearer can use an action to amplify their voice so that it clearly carries for up to 300 feet',
            'The wearer cannot be possessed while wearing this armor',
            'Treat as +1 armor during surprise rounds',
            'The item floats on water or other liquids. Its bearer has advantage on Strength (Athletics) checks to swim',
            'The bearer gains +5 speed',
            'The bearer gains a +1 to Intelligence (Arcana) checks',
            'Treat this as +1 armor for one minute after meditating with it for one minute',
            'Reduces force damage to the bearer by 2',
            'When on the plane of the Abyss, the bearer has advantage on saving throws against Abyssal Corruption. (DMG p. 62)',
            'Contains 1d4 unreplenishable charges of the Alarm spell (1st level)',
            'When on the plane of Arborea, the bearer has advantage on saving throws against the effects of Intense Yearning. (DMG p. 61)',
            'When on the plane of Arcardia, the bearer is unaffected by Planar Vitality (DMG p. 67)',
            'When travelling the Astral Sea, it takes half the number of hours to locate a Color Pool to a specific plane. You have advantage on saving throws vs. the effects of Psychic Wind (DMG p. 47-48)',
            'When on the plane of The Beastlands, the bearer has advantage on saving throws vs. Beast Transformation (DMG p. 60)',
            'Contains 1d4 unreplenishable charges of the Speak with Animals spell (1st level)',
            'Contains 1d4 unreplenishable charges of the Healing Word spell (1st level)',
            'Contains 1d4 unreplenishable charges of the Fire Bolt spell (1st level)',
            'Contains 1d4 unreplenishable charges of the Heroism spell (1st level)',
            'Contains 1d4 unreplenishable charges of the Goodberry spell (1st level)',
            'When on the plane of Bytopia, the bearer has advantage on saving throws against Pervasive Goodwill. (DMG p. 59-60)',
            'When on the plane of Carceri, the bearer knows the direction to the closest secret exit from this prison plane. (DMG p. 63)',
            'On its own volition, the item records a map of the environments that the bearer is exploring, and can magically project it for the bearer to see',
            'Contains 1d4 unreplenishable charges of the Ray of Frost spell (1st level)',
            'When on the plane of Mechanus, the bearer has advantage on saving throws against Imposing Order (DMG p. 66)',
            'The bearer may cast Friends once per day',
            'Contains 1d4 unreplenishable charges of the Cure Wounds spell (1st level)',
            'The bearer has advantage on saving throws vs. Psychic Dissonance when travelling the Outer Planes. (DMG p. 59)',
            'The bearer may cast Prestidigitation once per day',
            'Contains 1d4 unreplenishable charges of the Acid Splash spell (1st level)',
            'The crawling things of the earth, such as insects, snakes, and vermin, are attracted to this item. When placed on the ground, such creatures will scurry toward the item like moths drawn to the flame',
            'The bearer always knows the direction to the closest alcoholic beverage',
            'When on the plane of Elysium, the bearer has advantage on saving throws against the effects of Overwhelming Joy (DMG p. 60)',
            "The bearer can see creatures in the Border Ethereal that overlap with their plane as clearly as if they were fully in the bearer's plane. Such creatures appear as apparitions or ghosts",
            'Contains 1d4 unreplenishable charges of the Bless spell (1st level)',
            'Contains 1d4 unreplenishable charges of the Expeditious Retreat spell',
            'Contains 1d4 unreplenishable charges of the Comprehend Languages spell',
            'Contains 1d4 unreplenishable charges of the Feather Fall spell (1st level)',
            'The bearer knows the general direction to the closest Fey Crossing within a 60 mile radius. (DMG p. 50)',
            'When on the plane of Mount Celestia, the bearer of this item can receive the benefits of Blessed Beneficence regardless of their alignment',
            'Every time you hit by a monster, you glimpse a random image of its future or past',
            'Contains 1d4 unreplenishable charges of the Animal Friendship spell (1st level)',
            'When on the plane of Gehenna, the bearer has advantage on saving throws against Cruel Hindrance. (DMG p. 63)',
            'The bearer may cast Spare the Dying once per day',
            'When on the plane of Hades, the bearer has advantage on saving throws against Vile Transformation. (DMG p. 63)',
            'This item contains 4 weak healing nodes. As an action, a character can use one node to heal 1d4 hit points at touch range. The item regains 1d4 charges at sunrise',
            'When in the Nine Hells, the bearer has advantage on saving throws against Pervasive Evil. (DMG p. 64)',
            'The bearer has advantage on perception checks when searching for items long lost in the the Swamp of Oblivion on the Plane of Earth. (DMG p. 54)',
            'Contains 1d4 unreplenishable charges of the Jump spell (1st level)',
            'Contains 1d4 unreplenishable charges of the Silent Image spell (1st level)',
            'When on the plane of Limbo, the bearer has advantage to Intelligence checks to alter or move non-magical objects within the plane. (DMG p. 61-62)',
            'Once attuned, the bearer always knows the exact location of this item',
            'Contains 1d4 unreplenishable charges of the Bane spell(1st level)',
            'The bearer may cast Mage Hand once per day',
            'Contains 1d4 unreplenishable charges of the Unseen Servant spell (1st level)',
            'The bearer has a +1 bonus to any skill check involving gambling and games of chance (Insight, Sleight of Hand, Investigation, etc)',
            'The bearer may cast Message once per day',
            'Contains 1 unreplenishable charge of Scorching Ray cast at 2nd level',
            'The bearer may cast Thaumaturgy once per day',
            'The bearer may cast Vicious Mockery once per day',
            'Contains 1d4 unreplenishable charges of the Locate Animals or Plants spell (1st level)',
            'Contains 1d4 unreplenishable charges of the Protection from Good and Evil spell (1st level)',
            'The bearer rarely feels hungry, and only needs to consume one-fifth the usual amount of food',
            'When on the plane of Pandemonium, the bearer has advantage on saving throws against the Mad Winds. (DMG p. 62)',
            'The bearer can send messages mentally to willing characters within 30 feet. This communication is one-way only',
            'The bearer may cast Blade Ward once per day',
            'Contains 1d4 unreplenishable charges of the Detect Magic spell (1st level)',
            'Whenever the bearer is casting a spell as a ritual, they have advantage to maintain concentration during the ritual',
            'Treat as a +1 weapon after the bearer has taken a long rest at sea. If the bearer steps on dry land, this property becomes temporarily inert',
            'Contains 1d4 unreplenishable charges of the Illusory Script spell (1st level)',
            'The bearer knows the general direction to the closest Shadow Crossing within a 60 mile radius. They have advantage on saving throws vs. Shadowfell Dispair (DMG p. 51-52)',
            'This item contains 1d4 unreplenishable charges of the Shield spell',
            'The bearer may cast Mending once per day',
            'The bearer may cast Dancing Lights once per day',
            'Contains 1d4 unreplenishable charges of the Longstrider spell (1st level)',
            'The bearer gains an extra level one spell slot, which recovers only after a full moon rises',
            'The bearer may cast Minor Illusion once per day',
            'The bearer may cast True Strike once per day',
            'The bearer may cast Druidcraft once per day',
            'When in the Plane of Air, the bearer can navigate the Labyrinth Wind intuitively, and knows the path to the nearest Earth Mote within 60 miles',
            'When on the plane of Ysgard, the bearer is unaffected by Immortal Wrath. (DMG p. 61)',
            'Contains 1 unreplenishable charge of Shatter cast at 2nd level',
            'Contains 1 unreplenishable charge of Hold Person cast at 2nd level',
            'Contains 1 unreplenishable charge of Web cast at 2nd level',
            'Contains 1 unreplenishable charge of Flaming Sphere cast at 2nd level',
            'Contains 1 unreplenishable charge of Ray of Enfeeblement cast at 2nd level',
            'Contains 1 unreplenishable charge of Moonbeam cast at 2nd level',
            'Contains 1 unreplenishable charge of Augury cast at 2nd level',
            'Contains 1 unreplenishable charge of Entanglement cast at 2nd level',
            'Contains 1 unreplenishable charge of Mirror Image cast at 2nd level',
            'Characters trying to track the bearer have a -1 penalty to their skill checks',
            'Treat as a +1 armor when completely submerged in water',
            'Treat as a +1 armor if the bearer has any levels of exhaustion',
            "Whenever a bearer makes an attack with an improvised weapon, treat as a +1 armor until the beginning of the bearer's next turn",
            'The bearer can clearly see twice as far and gains advantage on Wisdom (perception) checks that use sight',
            'The bearer can detect and distinguish scents like a wolf and gains advantage on Wisdom (Perception) checks that use smell',
            'The bearer can hear a pin drop in a crowded room and gains advantage on Wisdom (Perception) checks that use hearing',
            'Contains 1 unreplenishable charge of Darkness cast at 2nd level.'
        ]
    },
    weapon: {
        type: ['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer', 'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'Crossbow, Light', 'Dart', 'Shortbow', 'Sling', 'Battleaxe', 'Flail', 'Glaive', 'Greataxe', 'Greatsword', 'Halberd', 'Lance', 'Longsword', 'Maul', 'Morningstar', 'Pike', 'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip', 'Blowgun', 'Crossbow, Hand', 'Crossbow, Heavy', 'Longbow', 'Net'],
        prefix: ["Abberant Slayer's", 'Adamantine', 'Acidic', 'Alien', 'Amorphous', 'Ancient', 'Anomalous', 'Antikytheran', 'Arcane', 'Arctic', "Artist's", "Assassin's", 'Autumn', 'Barbed', "Beast's", "Beast Slayer's", 'Binding', 'Blasted', 'Blessed', 'Blind', "Blind Man's", 'Blithe', 'Bloodthirsty', "Bogwalker's", 'Bonded', 'Booming', 'Braided', 'Brutal', 'Deep', 'Broken', 'Captivating', 'Capricious', 'Cardinal', 'Caustic', 'Celestial', 'Chained', 'Charged', 'Chill', 'Civilized', "Cobra's", 'Compassionate', 'Consecrated', 'Concentrated', 'Corrosive', "Courser's", 'Crashing', 'Crawling', 'Cruel', 'Dancing', 'Dark', 'Dead', 'Deceptive', 'Defensive', "Delver's", 'Desperate', 'Disguized', "Dissassembler's", 'Diplomatic', 'Dowsing', 'Draconic', 'Draining', "Dreamscribe's", "Drunkard's", "Dryad's", 'Eager', 'Earthen', 'Eastern', 'Effortless', 'Effulgent', 'Eidolic', 'Elemental', "Elementalist's", 'Enchanting', 'Enervating', 'Epistemological', 'Equanimeous', 'Etched', 'Expanding', 'Exuberant', 'Fabricated', 'Faceless', 'Fairweather', 'Fatespun', 'Favored', 'Feathered', 'Feeding', 'Feindish', "Feind-Slayer's", 'Final', 'First', 'Flickering', 'Focused', 'Focusing', 'Force', 'Forgotten', 'Friendly', 'Frozen', 'Furious', 'Ghost-Tipped', 'Ghost-Touched', "Giant Slayer's", 'Glorious', 'Goading', "Graverobber's", 'Guardian', "Halfling's", 'Halucinating', 'Harkening', 'Haunted', "Healer's", 'Healing', 'Heroic', 'Holy', 'Icy', 'Iconic', 'Illuminating', 'Imaginary', 'Impact', 'Indifferent', 'Indomitable', 'Inspired', 'Jagged', "Jester's", "Jumper's", 'Leaping', "Liar's", 'Lifting', 'Lightfooted', "Gambler's", "Mage Killer's", 'Malediction', 'Maligning', "Marquis'", 'Masked', "Master's", 'Meadowforged', 'Memorial', 'Merciful', 'Messaging', 'Mimicking', 'Mindscour', "Mind's Eye", "Monster Hunter's", 'Monster-Killing', 'Mortuary', "Mourner's", 'Murderous', 'Northern', 'Nourishing', 'Nullifying', "Ooze Hunter's", 'Painstrike', 'Paranoid', 'Parrying', 'Patient', 'Pernicious', 'Phantom', 'Pious', "Prospecter's", "Preacher's", "Pyromancer's", 'Quantum', 'Quicksilver', 'Rainbow', "Reader's", 'Refined', 'Reliable', 'Renaissance', 'Repairing', 'Resisting', 'Resonant', 'Restrained', 'Righteous', 'Rosen', 'Runic', 'Saving', 'Scarlet', 'Seige', 'Serrated', 'Shading', 'Shadow', 'Shamanic', 'Shaming', "Shieldmaden's", 'Shielding', 'Singing', 'Skyward', "Slayer's", 'Smoldering', "Smuggler's", "Sojourner's", 'Solemn', 'Soulbound', 'Southern', 'Spring', 'Staunch', 'Stepping', 'Strange', 'Strapping', 'Striding', 'Summer', "Surgeon's", 'Swift', 'Tenacious', 'Tithing', "Trailblazer's", 'Transient', 'Translucent', 'Trusty', 'Tsunami', "Twilight's", 'Unity', 'Victorious', 'Vigilant', 'Vile', 'Violent', 'Visionary', 'Vital', 'Voidstone', 'Voltaic', "War Leader's", 'Warded', 'Waterborne', 'Weave-touched', 'Western', 'Windy', 'Wild', 'Winged', 'Winter', "Woodsman's", "Wyrmling Hunter's", 'Wyrm-like', 'Zen'],
        suffix: ['of Aberration Slaying', 'of Adamantine', 'of Acid', 'of Lunacy', 'of Ooze Detection', 'of Old', 'of Abberation Detection', 'of Mechanisms', 'of Arcana', 'of Snow', 'of the Artist', 'of the Assassin', 'of Falling Leaves', 'of Barbs', 'of Beast Senses', 'of Beast Slaying', 'of Binding', 'of Detonation', 'of Parables', 'of Eyes', 'of Missing', 'of Mirth', 'of Bloodthirst', 'of Undead Detection', 'of Twins', 'of Thunder', 'of Knots', 'of Brutality', 'of the Deep', 'of Shards', 'of Saving Graces', 'of Chance', 'of the Lodestone', 'of Corrosion', 'of Celestial Detection', 'of Chains', 'of Lightning', 'of Chills', 'of the Capital', 'of Acid Spitting', 'of Compassion', 'of Consecration', 'of Concentration', 'of Dissolving', 'of the Hostler', 'of the Crashing Waves', 'of Vermin', 'of Cruelty', 'of Strings', 'of Darkness', 'of Rigor Mortis', 'of Deception', 'of Defense', 'of the Delver', 'of Desperation', 'of Many Appearances', 'of Dissassembly', 'of Diplomacy', 'of Dowsing', 'of Dragons', 'of Draining', 'of the Dreamscribe', 'of Taverns', 'of the Dryad', 'of Yearning', 'of Rooting', 'of the East', 'of Ease', 'of Light', 'of Apparitions', 'of Elemental Detection', 'of Elemental Slaying', 'of the Enchantress', 'of Inner Strength', 'of Truth', 'of Balance', 'of Allegories', 'of Expansion', 'of Expertise', 'of Construct Detection', 'of Many Identities', 'of Fairweather', 'of Intertwined Fates', 'of the Favored', 'of Feathers', 'of Food', 'of Fiend Detection', 'of Fiend Slaying', 'of Last Hope', 'of Speed', 'of Candlelight', 'of Focus', 'of Concentrating', 'of Force', 'of the Forgotten', 'of Friendship', 'of Ice', 'of Fury', 'of the Ranks', 'of Remembered Glory', 'of Giant Slaying', 'of Glory', 'of Duels', 'of Undead Slaying', 'of Protection', 'of Giant Detection', 'of Halucinations', 'of Eavesdropping', 'of Vengeful Spirits', 'of Health', 'of Healing', 'of Heroes', 'of Faith', 'of Icicles', 'of Symbols', 'of Illumination', 'of the Imagination', 'of Impact', 'of Indifference', 'of Surging Strength', 'of Inspiration', 'of Teeth', 'of Madness', 'of Jumping', 'of Leaping', 'of Lies', 'of Lifting', 'of Dodging', 'of Luck', 'of the Mage Killer', 'of Malediction', 'of Maligning', 'of the Maquis', 'of Still Winds', 'of Servants', 'of the Meadow', 'of Memories', 'of Mercy', 'of Sending', 'of Mimicry', 'of Countermeasures', "of the Mind's Eye", 'of Monstrosity Detection', 'of Monster Killing', 'of the Mortal Coil', 'of Last Words', 'of Slaughter', 'of the North', 'of Comfort', 'of Nullification', 'of Ooze Slaying', 'of Pain', 'of Paranoia', 'of Parrying', 'of Patience', 'of the Snake', 'of the Phantasm', 'of the Pious', 'of Gem Detection', 'of the Preacher', 'of Pyromancy', 'of Uncertainty', 'of Quicksilver', 'of Rainbows', 'of Literacy', 'of Quality', 'of Reliance', 'of the Renaissance', 'of Repairs', 'of Resistances', 'of Resonance', 'of Subdual', 'of Righteousness', 'of Roses', 'of Runes', 'of Saves', 'of Bleeding', 'of Sieges', 'of Serration', 'of Shade', 'of Shadows', 'of Rituals', 'of Disgrace', 'of the Targe', 'of Shielding', 'of Singes', 'of Unusual Gravity', 'of Slaying', 'of Flame', 'of Smuggling', 'of the Sojourner', 'of Solemnity', 'of Imprisonment', 'of the South', 'of Spring Rain', 'of Security', 'of Misty Step', 'of the Far Realm', 'of the Undaunted', 'of Strides', 'of the Scorching Sun', 'of the Surgeon', 'of Reflexes', 'of the Tenacious', 'of Tithes', 'of the Lost', 'of the Breaking Seal', 'of Translucence', 'of Resurgence', 'of Crashing Waves', 'of the Setting Sun', 'of Unity', 'of Victory', 'of Vigilance', 'of Villains', 'of Violence', 'of the Visionary', 'of Vitality', 'of the Void', 'of Conduits', 'of the War Leader', 'of Warding', 'of the Sea', 'of the Weave', 'of the West', 'of the Winds', 'of the Wilds', 'of Wings', 'of Winter Ice', 'of Felling', 'of Wyrmling Slaying', 'of Wyrm Detection', 'of Zen'],
        property: [
            'This weapon gains a +1 bonus to damage rolls against aberrations.',
            'This item is indestructible.',
            "As an action you can cast acid splash. You gain a +5 bonus to the spell's attack roll. You cannot use this ability again until you complete a short or long rest.",
            'Once attuned, the bearer constantly hears the ongoing, utterly insane mutterings of an alien intelligence trapped inside this weapon. Should this weapon be destroyed, the being will be released.',
            'The weapon sheds 30 feet of bright green light and another 30 feet of dim light after that whenever an ooze is within 100 feet of it.',
            'This worn weapon inscribed with ancient runes can be used as a Spellcasting Focus',
            'The weapon sheds 30 feet of bright purple light and another 30 feet of dim light after that whenever an aberration is within 100 feet of it.',
            'An ancient mechanism is housed within this weapon that never configures the same way twice. Once per long rest the bearer can spend one minute to attempt a DC 20 investigation check to configure the device. If successful, the weapon becomes a +1 weapon until the end of the next long rest.',
            'This weapon can project a spectral tome suspended in mid-air that the bearer can interact with like a physical book. This tome can be used as a spellbook and may contain some spells from its previous bearer.',
            'Icy wind and snowflakes bluster around this weapon, even in warm environments. The bearer can walk on the surface of the lightest snow, leaving no footprints.',
            'The bearer may use this weapon to make colored marks on any surface. The marks will fade away in 24 hours.',
            'The bearer may add 1d4 poison damage to all attacks made during surprise rounds.',
            "The weapon contains a resevoir of natural magic that can a sustain a cascade of falling leaves for up to 30 seconds. The bearer may use an action to plant this weapon in the ground and release this magic. While planted and undepleted, creatures within 10 feet of this weapon have half cover. A long rest restores 1d6 sconds of energy to the weapon's resevoir.",
            'After an attack roll, the bearer may use their reaction to add 1d4 to the damage roll and take 1d4 damage.',
            'While carrying this weapon you have advantage on Wisdom (Perception) checks that rely on smell.',
            'This weapon gains a +1 bonus to damage rolls against beasts.',
            'When you hit a creature with this weapon, the ground beneath binds to its feet, slowing its speed by 5 feet until the end of its next turn. This has no effect on creatures that are flying or swimming.',
            "The bearer may use a bonus action to activate destructive magic withing this weapon. It begins to glow with white-hot intensely, and at the beginning of the bearer's next turn, the weapon casts a level 1 Shatter spell (DC 12) centered on the weapon. The weapon then loses this property.",
            'Whenever the bearer of this item receives magical healing from a spell on the Cleric’s spell list, they gain an additional amount of hit points equal to their Wisdom (Religion) skill.',
            'Garrish eyes are painted on this weapon. The bearer can use an action to see/unsee through the eyes, even if their own senses are compromised.',
            'When an attack roll made with this weapon results in a miss, you gain 1 temporary hit point.',
            'The bearer is filled with inexplicable joy. All charisma skill and saving throw rolls gain a +1 bonus, but all wisdom skill and saving throw rolls gain a -1 penalty.',
            'The bearer of this weapon spend a bonus action and a hit die to turn this weapon into a +1 magic weapon for 1d4 turns.',
            'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever an undead is within 100 feet of it.',
            'This item is part of a pair of identical items. The bearer of either knows the location of the other at all times.',
            'The bearer may choose to deal Thunder damage with this weapon and gain a +1 bonus to damage.',
            'The bearer may use their action to cause the weapon to become a 50 ft length of hemp rope at will.',
            'Critical hits made with this weapon deal 2 extra damage of the weapon’s type.',
            'The bearer can hold their breath for 5 minutes before the onset of asphyxiation.',
            'This weapon is badly damaged. It is a testament to its former power that it is still serviceable. If reforged, it might regain its former power.',
            'While the bearer is at 0 hp, they begin to hear the most beautiful music they have ever heard. The bearer has advantage on death saving throws and cannot recall details about the music if they wake.',
            'If the weapon is attuned to a Chaotic aligned character, they may roll a die after completing a long rest. If the result was an even number, treat this as a +1 magic weapon until they finish a long rest.',
            'The bearer always knows which way is north and has advantage on Wisdom (Survival) checks for land navigation.',
            'The bearer may choose to deal Acid damage with this weapon and gain a +1 bonus to damage.',
            'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever a celestial is within 100 feet of it.',
            'The bearer can spend an action to mystically bind or unbind themselves to this weapon. While bound, the bearer can no longer be disarmed but cannot switch out or throw this weapon.',
            'The bearer may choose to deal Lightning damage with this weapon and gain a +1 bonus to damage.',
            "The air around the bearer of this weapon is always unnaturally cold. One's breath becomes visible, and frost continually forms on the surface of the bearer's hair, weapons, and armor. The bearer suffers no ill effect from being in extremely cold environments.",
            'The bearer gains +1 to intelligence saving thows.',
            'As an action you can cast poison spray (spell save DC 13). You cannot use this ability again until you complete a short or long rest.',
            'Wounds inflicted with this weapon cause no pain.',
            'Treat as a +1 magic weapon when attacking Undead. Any creature slain with this weapon cannot be raised as undead.',
            'As a action you gain advantage on your next ability check made before the end of your next turn. You cannot use this ability again until you complete a short or long rest.',
            'When the bearer hits a creature with this weapon, they may deal their proficiency bonus in acid damage to a different creature within 5 feet of the target.',
            'The bearer can placate and calm any mount not under the influence of a spell or possession.',
            'Whenever the bearer deals damage to a hostile creature, this weapon gains a charge. As a bonus action, the bearer can use any number of charges to deal that much extra lightning damage on their next attack. If a round (6 seconds) goes by and the weapon has not struck a foe, it loses all charges.',
            'The crawling things of the earth, such as insects, snakes, and vermin, are attracted to this item. When placed on the ground, such creatures will scurry toward the item like moths drawn to the flame.',
            'The bearer may re-roll damage from critical hits scored with this weapon and take the second result.',
            'The bearer may spend an action to permanently animate this weapon. Use the Flying Sword stat block from the Monster Manual p. 20. Also, the weapon retains any other magical properties. Once the animated weapon is reduced to 0 hp or unattuned, the weapon shatters like glass.',
            'The bearer may choose to deal Necrotic damage with this weapon and gain a +1 bonus to damage.',
            'If this weapon is entombed within a corpse for 8 hours, the bearer may treat it as a +1 magic weapon until the end of their next long rest',
            'When the bearer attunes this item, choose a harmless object within sight such as a tea cup, a ball of yarn, or a hairpin. If the bearer is touching the item, they may use an action to transform the weapon in or out of this form.',
            'Whenever the bearer takes a dodge or disengage action, they may move an additional 5 feet that round.',
            "While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest path leading upward.",
            'The bearer may use an action to release divine magic within, equivalent to a level 1 Cure Wounds spell being cast on all creatures (friend or foe) within 5 feet of the bearer. The weapon is destroyed and loses all magical properties.',
            'As an action you make this weapon appear to others as a similarly shaped and sized object of your choice. Anyone interacting with the weapon instantly realizes its true nature and if you make an attack with the weapon others see it for what it truly is. With another action you can make it appear to be a weapon again.',
            'This weapon gains a +1 bonus to damage rolls against constructs.',
            'The bearer gains one language proficiency chosen by the DM.',
            'As an action you command the weapon to point in the direction of the closest source of water.',
            'Treat as a +1 weapon when attacking Dragons.',
            'When the bearer makes a successful attack with this weapon, they gain 10% of the damage as temporary hit points (round down, minimum of 1).',
            'The bearer can read books they are touching while sleeping.',
            'The bearer always knows the direction to the nearest tavern in a 60 mile radius.',
            'When the bearer is outdoors, harmless creatures such as squirrels and birds flock to them when they sing songs for a minute or longer.',
            'The bearer does not require an interaction to draw or sheath this weapon',
            'The bearer of this weapon is firmly rooted to the ground. When standing on solid earth or stone, if an effect would move the bearer against his will the distance is reduced by 5 feet.',
            'The bearer gains +1 to wisdom saving throws.',
            'This weapon takes only one minute to attune.',
            'The bearer can use this item to cast the Light cantrip on itself at will. While lit, it deals radiant damage instead of its usual damage type.',
            "Dark apparitions bound to this weapon haunt the edges of the bearer's peripheral vision, becoming hideously visible to devour the bodies of beings slain by this weapon. Once 666 bodies have been devoured, the apparitions will be released to prey upon our world and the sword becomes a permanent +3 weapon. So far, the weapon has eaten 1d6 x 100 + 3d20 bodies.",
            'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever an elemental is within 100 feet of it.',
            'This weapon gains a +1 bonus to damage rolls against elementals.',
            'Treat this as a +1 weapon as long as the bearer is enchanted by a spell from the enchantment school of magic.',
            "Once per long rest, the bearer may spend one minute contemplating the patterns etched on this weapon's surface and regain 1 expended ki point.",
            'The bearer has advantage on investigation checks to see through illusions. In addition the bearer can gains advantage on an Insight check to check if someone is lying and disadvantage on all Deception checks.',
            'When attuned to neutral aligned characters, this weapon has a +1 attack bonus during the day and a +1 damage bonus at night.',
            "Ancient glyphs adorn the surface of this weapon, telling a story with a moral of the player's chosing (such as 'One good turn deserves another' or 'United we stand, divided we fall'). While attuning to this weapon, the glyphs spread across the entire skin of the bearer and the moral of the story becomes a bond trait for this character.",
            'You may add 1d10 to a damage roll made with this weapon. You cannot use this ability again until you complete a long rest.',
            'As a bonus action you may gain advantage on your next attack roll made before the end of your next turn. You cannot use this ability again until you complete a long rest.',
            'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever a construct is within 100 feet of it.',
            'As an action you can cast disguise self (spell save DC 13). You cannot use this ability again until you complete a long rest.',
            'Treat this as a +1 weapon if the bearer has more than half of their maximum hit points',
            'Once per short rest, when the bearer crits with this weapon they gain inspiration.',
            'Once per long rest, the bearer may roll a saving throw with advantage.',
            'The bearer may use their reaction to reduce fall damage by 1d6 until the end of turn. They cannot use this feature again until completing a long rest.',
            'As an action the weapon can turn a small, worthless, unattended, organic object (such as a clump of dirt) into a bland, edible substance. This substance provides enough food to feed a Small or Medium sized creature for one day. You cannot use this ability again until you complete a long rest.',
            'The weapon sheds 30 feet of bright red light and another 30 feet of dim light after that whenever a fiend is within 100 feet of it.',
            'This weapon gains a +1 bonus to damage rolls against fiends.',
            'The bearer may spend an action beseaching the spirits within this weapon. Roll a DC 20 Persuasion check or make a sufficiently impassioned plea. If successful, the spirits will sacrifice themselves so that for the next minute the next attack with this weapon will be a crit. The weapon then loses this property forever.',
            'The bearer gains a +1 bonus to initiative rolls. As long as the bearer is first in the initiative order, their speed increases by 5 feet.',
            'As an action you can make the weapon shed bright light in a 10-foot radius and dim light in another 10 feet. You can use another action to make the weapon stop shedding light.',
            'As a bonus action you gain advantage on your next ability check made before the end of your next turn. You cannot use this ability again until you complete a long rest.',
            'As a action you may gain advantage on your next attack roll made before the end of your next turn. You cannot use this ability again until you complete a short rest.',
            'The bearer may choose to deal Force damage with this weapon and gain a +1 bonus to damage.',
            'The bearer may spend an action to attempt to ignite the old magic in this weapon with a DC 13 Charisma check. If successful, treat the weapon as a +1 weapon as long as the bearer maintains concentration on this effect, maximum 10 minutes.',
            'Contains 1d4 unreplenishable charges of the Animal Friendship spell (1st level).',
            'The bearer may choose to deal Cold damage with this weapon and gain a +1 bonus to damage.',
            'Treat as a +1 magic weapon when the bearer is raging.',
            'Whenever the bearer crits with this weapon, it gains the reach property (10 ft) for 1 minute. If it already had the reach property, increase its reach by 5 ft.',
            'This weapon can be wielded by a missing limb. If so, it becomes a +1 weapon.',
            'This weapon gains a +1 bonus to damage rolls against giants.',
            'The bearer may choose to change the damage type of weapon to Radiant and its damage roll gains a +1 bonus.',
            'Once per short rest, when the bearer crits with this weapon it casts Compelled Duel on the creature it hit, DC 12.',
            'This weapon gains a +1 bonus to damage rolls against undead.',
            'When the bearer attunes this weapon they must choose a being in their mind. Henceforth, if the bearer is within 5 feet of the chosen being they may use their reaction to impose disadvantage on an attack roll against that creature. They cannot do this again until they have finished a short or long rest.',
            'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever a giant is within 100 feet of it.',
            'As an action you can cast minor illusion (spell save DC 13). You cannot use this ability again until you complete a short or long rest.',
            'As long as it is on the same plane of existence, the bearer can hear through this weapon as if they were present.',
            'Smoke rises from this weapon revealing the apparitions that haunt it. They lash out at living targets every time the bearer scores a hit, doing an additional +2 necrotic damage.',
            'As an action you can heal 1d4+1 hit points. You cannot use this ability again until you complete a long rest.',
            'This item contains a healing node. Once per long rest the bearer can use the node and an action to heal 1d4 hit points at touch range.',
            'Ancient heroes have wielded this weapon throughout the ages, and their courage still lingers. The bearer has advantage on saving throws vs. fear effects.',
            'When the bearer of this item rolls hit dice, they can choose to re-roll them and take the second result.',
            "As an action you can cast ray of frost. You gain a +5 bonus to the spell's attack roll. You cannot use this ability again until you complete a short or long rest.",
            "The weapon is inscribed with holy symbols of the God of the DM's choice. A cleric or paladin that serves that god may use this weapon as a divine focus.",
            'As an action you can cast light. You cannot use this ability again until you complete a short or long rest.',
            "Once attuned, this weapon exists only in the bearer's imagination until held with intent to do harm. It becomes imaginary again after a short rest.",
            'Once per long rest, the bearer may spend an action to activate an ancient mechanism within the weapon. Gears turn and parts shift as the weapon reconfigures itself into a more menacing version of the original. For 1 minute, attacks made with this weapon ignore resistances (but not immunities).',
            'The bearer no longer feels emotions. They have immunity to fear effects but disadvantage on Insight and Performance checks, and cannot Rage.',
            'When the bearer is grappled by multiple targets, they may choose to break the strongest grapple. If they succeed, then all grapples are broken.',
            'The bearer gains their Constitution modifier in temporary hit points whenever they gain or use inspiration.',
            'Once hit by this weapon, the victim cannot regain hit points until the beginning of their next turn.',
            'Once per short rest, when the bearer crits with this weapon it casts Crown of Madness on the creature it hit, DC 12',
            'As an action you can cast jump on yourself. You cannot use this ability again until you complete a long rest.',
            'Contains 1d4 unreplenishable charges of the Jump spell (1st level).',
            'Contains 1d4 unreplenishable charges of the Silent Image spell (1st level).',
            'As an action you can cast mage hand. You cannot use this ability again until you complete a short or long rest.',
            'As a reaction you may gain a +1 bonus to AC which lasts until the start of your next turn. You cannot use this ability again until you complete a short or long rest.',
            'You can reroll a natural 1 rolled on a d20 for an ability check, attack roll, or saving throw. You cannot use this ability again until you complete a long rest.',
            'Ignores the AC bonuses given by spells such as Mage Armor and Shield.',
            'Contains 1d4 unreplenishable charges of the Bane spell(1st level).',
            'This weapon does an additional 1d4 damage on attacks of opportunity.',
            "Once per short rest, when you crit with this weapon it casts Command on its target with the word 'grovel', DC 12",
            'The bearer and all of their posessions are completely odorless.',
            'Contains 1d4 unreplenishable charges of the Unseen Servant spell (1st level).',
            'A gentle kaleidoscope of butterflies always accompanies this weapon. The bearer has advantage on persuasion checks with Fae creatures less than CR 3.',
            'When the bearer kills a monster with this weapon, treat this weapon as a +1 weapon whenever you fight another monster of this kind. When the weapon is unattuned, it loses its memory.',
            'As an action you can cast spare the dying. You cannot use this ability again until you complete a short or long rest.',
            'As an action you can cast message. You cannot use this ability again until you complete a short or long rest.',
            "When the bearer places this weapon beside another melee weapon for 1 minute, this weapon changes weapon type, size, and physical qualities to become an exact replica of the other weapon. It does not gain any of the other weapon's magical properties.",
            'This weapon disrupts all telepathic communication within 20 feet. Psychic attacks are not affected.',
            'The bearer may choose to deal Psychic damage with this weapon and gain a +1 bonus to damage',
            'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever a monstrosity is within 100 feet of it.',
            'This weapon gains a +1 bonus to damage rolls against monstrosities.',
            "The bearer's vital signs, such as a pulse and breathing, are masked by this weapon and are undetectable by non-magical inspection.",
            'Contains one charge of the Speak With Dead spell. It regains the charge when the bearer dies.',
            'When the bearer reduces a creature to zero hit points they may use a bonus action to move half their movement speed towards another hostile creature.',
            'The bearer gains +1 to constitution saving throws',
            "Once per long rest, the bearer may lay this weapon beside a bowl of water. After a moment, the bowl of water will begin to boil and after a minute it will transform into a hot meal of special significance to the bearer (Their mother's noodle soup or father's elk stew). Eating this delicious meal is so satisfying that it counts as nourishment for an entire day and restores 1d4 hit points. To anyone other than the bearer, the bowl and its contents appears unchanged.",
            'Any spell of 1st level or lower that includes the bearer as a target has a 10% chance to fail, cast by both friendly and enemy spellcasters.',
            'This weapon gains a +1 bonus to damage rolls against oozes.',
            'Treat this as a +1 weapon for 1 minute if the bearer takes 13 or more damage in a single round of combat.',
            'As an action you can cast detect magic. You cannot use this ability again until you complete a long rest.',
            'The bearer may use their reaction to gain a +1 AC bonus until the end of the turn.',
            'Whenever the bearer readies an action, they have advantage on constitution saving throws to maintain concentration.',
            'The bearer may choose to deal Poison damage with this weapon and gain a +1 bonus to damage.',
            'Damage inflicted with this weapon leaves no physical sign of injury, such as cuts and bruises, and draws no blood.',
            'The bearer may spend ten minutes paying honor to the spirits that govern this weapon, shaving their head in tribute. Once the ceremony is finished, it becomes a +1 weapon until the end of the next long rest. They must wait 10 days until they have long enough hair to re-enact this ritual.',
            'As an action you command the weapon to point in the direction of the closest gem worth 50 gp or more.',
            "This weapon increases the bearer's Channel Divinity range by 5 feet.",
            'As an action you can control flames. You cannot use this ability again until you complete a short or long rest.',
            'Every time the bearer takes a long rest, this weapon changes in appearance and function. It retains this property but any other properties are lost. However, it gains a new random ability from this chart.',
            'The bearer may use a bonus action to change the form of the weapon to any other simple or martial melee weapon. It always counts as a silvered weapon no matter what form it takes.',
            'The bearer may change the damage type of a spell they cast once per long rest.',
            'As an action you can cast comprehend languages. You cannot use this ability again until you complete a long rest.',
            'This weapon is so finely constructed it never needs maintenance, cannot rust or tarnish, and gains a +1 to damage rolls.',
            'When attacking with this weapon, crit fails (rolling 1) on attack rolls do not automatically miss the target.',
            'Once per long rest, the bearer may gain +1 to any skill check.',
            'As an action you can cast mending. You cannot use this ability again until you complete a short or long rest.',
            'As an action you can gain resistance to all damage types until the end of your next turn. You cannot use this ability again until you complete a long rest.',
            'The bearer can spend an action and 1 ki point to treat this as a +1 weapon for 1 minute.',
            'This weapon only deals non-lethal damage to living targets',
            'Treat this as a +1 weapon during the day when attuned to a good aligned character.',
            'A ruby worth 30gp is the center stone in a rose-shaped setting on the weapon. If the bearer removes the ruby, the weapon grows a new one at the end of the month. The weapon always smells of roses while the ruby is in its setting.',
            'Whenever bearer casts a spell, treat this weapon as a +1 weapon until the beginning of their next turn.',
            'You gain advantage on a saving throw. You cannot use this ability again until you complete a long rest.',
            "This weapon perpetually drips the blood of a monstrous race, chosen by the DM. The bearer can speak that race's language and has advantage on intimidation checks against monsters of that race when the weapon is revealed.",
            'This weapon does maximum damage against man-made, inanimate objects.',
            'You may add 1d4 to a damage roll made with this weapon. You cannot use this ability again until you complete a short or long rest.',
            'The bearer suffers no harm or discomfort in temperatures as high as 120 degrees Fahrenheit.',
            'Treat as a +1 magic weapon when in dim light.',
            'Whenever the bearer is casting a spell as a ritual, they have advantage to maintain concentration during the ritual.',
            'Any humanoid creature hit with this weapon loses all of the hair on their head and face.',
            'As a reaction you may gain a +1d4 bonus to AC that lasts until the start of your next turn. You cannot use this ability again until you complete a long rest.',
            'This item contains 1d4 unreplenishable charges of the Shield spell.',
            "As an action you can cast fire bolt. You gain a +5 bonus to the spell's attack roll. You cannot use this ability again until you complete a short or long rest.",
            'This weapon falls up instead of down. Its weight does not contribute towards encumberance.',
            'Treat as a +1 weapon when attacking Demons and Devils.',
            'The bearer may choose to deal Fire damage with this weapon and gain a +1 bonus to damage.',
            'This weapon contains a small, secret compartment. A character must succeed on a DC 20 Wisdom (Perception) check to reveal the compartment when searching the bearer.',
            'A poem, story, or map that describes a long-forgotten treasure that will make this weapon more powerful is etched on the surface of the weapon.',
            'The bearer may spend an action to stabilize a dying creature within 5 feet. They cannot do so again until they have completed a long rest.',
            "A powerful malevolent being is bound within this weapon and it will be released upon the weapon's destruction.",
            'The bearer gains +1 to dexterity saving throws.',
            "The weapon contains a pool of healing energy that can restore up to 30 hp. The bearer may use an action to plant this weapon in the ground and release this energy. While planted and undepleted, creatures that end their turn within 10 feet of the weapon are showered in warm rain that restores 1 hp per round. A long rest restores 1d6 hp of energy to the weapon's pool.",
            "Anyone except the bearer must attempt a DC 10+x Charisma check to pick up this weapon, where x is the bearer's level. Any attack made with this weapon against the bearer has disadvantage.",
            'As an action you teleport 10 feet to a space you can see. You cannot use this ability again until you complete a long rest.',
            'Treat this as a +1 weapon when attacking Aboleths and other creatures from the Far Realm',
            'Whenever the bearer breaks a grapple, they may choose to push the grappler up to 10 feet away from them as a bonus action.',
            'Contains 1d4 unreplenishable charges of the Longstrider spell (1st level).',
            "The weapon contains a resevoir of scorching light that can deal up to 30 hp of radiant damage. The bearer may use an action to plant this weapon in the ground and release this energy. While planted and undepleted, creatures that end their turn within 10 feet of the weapon are brightly illuminated and seared for 1 radiant damage per round. A long rest restores 1d6 hp of energy to the weapon's resevoir.",
            'The bearer may use a bonus action to gain advantage to Wisdom (Medicine) checks for the rest of the turn.',
            'If the bearer is first in the initiative order, they may treat this as a +1 weapon.',
            'When the bearer takes a long rest, they gain back one additional hit die.',
            "The bearer may lay 10 gold coins along the surface of the weapon and pray to a God of their choice for 10 minutes. At the end of this ritual, the weapon becomes a +1 weapon until the next long rest and the 10 gold coins are permanently gone. This boon will be lost if the bearer acts in a way that is contradictory to that deity's teachings.",
            'As an action you can command the weapon to point in the direction of the closest settlement of humanoids with a population over 100.',
            'Over the course of a long rest, the bearer may transfer the other magic properties of this weapon to a melee weapon of their choosing. This weapon then loses those properties.',
            'The bearer gains an extra level one spell slot, which recovers only after a full moon rises.',
            'Treat this as a +1 weapon if the bearer has half their maximum hit points or less.',
            'Once per short rest, when the bearer crits with this weapon, all creatures other than the bearer within 5 feet of the target (including the target) must roll a DC 12 constitution saving throw or be knocked prone by a wave of concussive force.',
            "Once per short rest, when you crit with this weapon it casts Hex on the target. Roll a d6 to determine which of the target's attributes is weakened. The bearer cannot transfer the curse to another creature.",
            'Whenever the bearer of this weapon takes a help action in combat, the aided ally may treat their weapon as a +1 magic weapon until the end of their next turn.',
            "Whenever the bearer kills a creature with this weapon, they gain temporary hit points equal to the creature's CR (minimum of 1).",
            'The bearer gains +1 to their Passive Perception.',
            'Treat this as a +1 weapon at night when attuned to an evil aligned character.',
            'Everytime you crit with this weapon, it gains 1 charge. As a bonus action, use a charge to make this a +1 weapon for 1 minute. All charages are lost at the end of a long rest.',
            "The weapon does an additional 1 elemental damage based on the color of the bearer's eyes: (amber: lightning, black: necrotic, blue: cold, brown: acid, green: force, gray: thunder, hazel: poison, purple: psychic, red: fire, white: radiant)",
            "The bearer's maximum hit points increases by their constitution modifier while attuned to this item. These hit points are lost when the bearer unattunes the item.",
            "This weapon cannot be detected by the 'Detect Magic' spell unless the caster touches the weapon.",
            'Whenever the bearer deals damage to a creature, this weapon gains a charge. As a bonus action, the bearer can use any number of charges to deal that much extra lightning damage on their next attack. If a round (6 seconds) goes by and the weapon has not struck a foe, it loses all charges.',
            'The bearer can use an action to amplify their voice three times louder than normal.',
            'Once per long rest the bearer may draw a 20 foot line in the ground with this weapon that lasts for 1 minute. The Undead must succeed on a DC 12 wisdom saving throw to move across this line. If they fail, they cannot move again until their next turn.',
            'of Exuberance',
            "Whenever the bearer casts a spell, this weapon gains charges equal to the spell's level. The bearer can use a bonus action to remove 13 charges and make this a +1 weapon until the start of the next round. All charges are lost during a long rest.",
            'The bearer gains +1 to charisma saving throws.',
            'As an action you can cast gust (spell save DC 13). You cannot use this ability again until you complete a short or long rest.',
            'The bearer gains +1 to strength saving throws.',
            'Once per long rest, the bearer may use an action to transform this weapon into a magical raven that can deliver a message to anyone in a 50 mile radius, provided the bearer knows their name and face. When the raven returns, it reverts into its weapon form. If the bird should die en route, it reverts into weapon form and unattunes from the bearer.',
            "The weapon contains a resevoir of ice magic that can a freeze the ground for up to 30 seconds. The bearer may use an action to plant this weapon in the ground and release the ice magic within. While planted and undepleted, the ground in a 10 foot radius of this weapon becomes difficult terrain. A long rest restores 1d6 seconds of energy to the weapon's resevoir.",
            'This weapon does maximum damage against plant creatures.',
            'This weapon gains a +1 bonus to damage rolls against dragons.',
            'The weapon sheds 30 feet of bright light and another 30 feet of dim light after that whenever a dragon is within 100 feet of it.',
            'Treat this as a +1 weapon for 1 minute after meditating with it for 1 minute.'
        ]
    },
    trinket: {
        type: ['Belt', 'Bracers', 'Circlet', 'Gauntlets', 'Amulet', 'Boots', 'Hat', 'Helm', 'Scabbard', 'Orb', 'Cap', 'Amulet', 'Pendant', 'Medallion', 'Mask', 'Cloak', 'Ring', 'Quiver', 'Tiara', 'Collar', 'Gloves', 'Candlestick', 'Brooch', 'Decorative Dagger', 'Mirror', 'Jade Pyramid', 'Bronze Figurine', 'Dragon Fang Pendant', 'Pawn', 'Puzzlebox', 'Linen Handkerchief', 'Iron Key', 'Cloth Doll', 'Oil Lamp', 'Ale Stine', "Imp's Skull", 'Walking Stick', 'Ingot', 'Meteor Stone Fragment', 'Torch', 'Silver Bell', 'Coin', 'Leather Pouch', 'Quill Pen', 'Scales', 'Gaming Die', 'Small Brass Cage', 'Chime', 'Iron Ring', 'Amulet', 'Emblem', 'Hourglass', 'Padlock', 'Magnifying glass', 'Manacles', 'Perfume Vial', "Miner's Pick", 'Pouch', 'Robes', 'Shovel', 'Signal Whistle', 'Spyglass', 'Vial', 'Waterskin', 'Abacus', 'Crystal', 'Staff', 'Wand', 'Book', 'Glass Bottle', 'Crowbar', 'Totem', 'Flask', 'Tankard', 'Instrument', 'Playing Card Set'],
        prefix: ['Abyssal', "Acolyte's", 'Adamantine', 'Adroit', 'Alarming', 'Arborean', 'Arcadian', 'Arctic', 'Arresting', "Assassin's", 'Astral', "Barbarian's", "Bard's", 'Beastial', "Beastspeaker's", 'Benedictine', 'Blasted', 'Blessed', 'Bold', 'Bountiful', "Burglar's", 'Bytopian', 'Carcerian', 'Cardinal', 'Cartographic', 'Channelling', 'Chill', 'Clockwork', 'Cloy', 'Compassionate', 'Concordant', "Conjurer's", 'Corrosive', 'Crawling', "Dancer's", 'Defensive', "Delver's", 'Desperate', "Druid's", "Drunkard's", 'Dynamic', "Eavesdropper's", 'Elysian', 'Etherbound', 'Exalting', 'Expeditious', 'Inaccurate', 'Fathoming', 'Favored', 'Feathered', 'Feybound', 'First', 'Forgiven', "Fortune Teller's", 'Friendly', 'Gehennan', 'Gracious', 'Grim', 'Hadean', 'Harmonious', 'Healing', 'Hellish', 'Heroic', 'Histrionic', 'Holy', 'Iconic', "Inquisitor's", 'Inspired', 'Leaping', "Liar's", 'Limbo', 'Locating', 'Loquacious', 'Malediction', 'Manipulating', "Master's", 'Maverick', 'Messenger', 'Meteoric', 'Mindful', 'Miraculous', 'Mocking', 'Natural', 'Neutralizing', 'Nimble', 'Nourishing', 'Pandemonium', "Preacher's", 'Projecting', 'Protective', "Reaper's", 'Renaissance', 'Revealing', 'Riutal', 'Sacred', 'Sagacious', "Sage's", 'Secret', 'Sentinel', 'Shading', 'Shadowbound', "Shepherd's", 'Shielding', 'Shifting', 'Silent', "Smith's", "Sojourner's", 'Solemn', 'Sparkling', 'Striding', "Surgeon's", 'Tenacious', "Tracker's", 'Translucent', "Trickster's", 'Accurate', 'Unbroken', 'Verdant', 'Victorious', 'Vigilant', 'Vigorous', 'Vital', "War Leader's", 'Waterborne', 'Windborne', "Wizard's", 'Wrathful'],
        suffix: ['of the Abyss', 'of the Acolyte', 'of Adamantine', 'of Intellect', 'of Alarms', 'of Arborea', 'of Arcadia', 'of the North', 'of Safety', 'of the Assassin', 'of the Astral Sea', 'of the Barbarian', 'of the Bard', 'of the Beastlands', 'of Beastspeakers', 'of Benediction', 'of Blasting', 'of Blessings', 'of Boldness', 'of Bounty', 'of the Burglar', 'of Bytopia', 'of Carceri', 'of the Lodestone', 'of Cartography', 'of Channelling', 'of Chills', 'of Gears', 'of Cloying', 'of Compassion', 'of Concordance', 'of the Conjurer', 'of Dissolving', 'of Vermin', 'of the Dancer', 'of Defence', 'of the Delver', 'of Last Chances', 'of the Druid', 'of Taverns', 'of the Dynamo', 'of Eavesdropping', 'of Elysium', 'of Ethereal Shores', 'of Exaltation', 'of Expedience', 'of Falsehoods', 'of Tongues', 'of the Favored', 'of Feathers', 'of the Fey', 'of Speed', 'of Forgiveness', 'of the Fortune Teller', 'of Friendship', 'of Gehenna', 'of Grace', 'of Coercion', 'of Hades', 'of Harmony', 'of Healing', 'of the Nine Hells', 'of Heroes', 'of Histrionics', 'of Faith', 'of Symbols', 'of the Inquisitor', 'of Inspiration', 'of Leaping', 'of Lies', 'of Limbo', 'of Locating', 'of the Silver Tongue', 'of Malediction', 'of Manipulation', 'of Servants', 'of the Maverick', 'of Messages', 'of Falling Stars', 'of Mindfulness', 'of Miracles', 'of Mockery', 'of Nature', 'of Neutrality', 'of Agility', 'of Nourishment', 'of Pandemonium', 'of the Preacher', 'of Projection', 'of Protection', 'of the Reaper', 'of the Renaissance', 'of Revelation', 'of Rituals', 'of the Sacred', 'of Acumen', 'of the Sage', 'of Secrets', 'of the Sentinel', 'of Shade', 'of the Shadowfell', 'of the Shepherd', 'of Shielding', 'of Shifting', 'of the Night', 'of Reparations', 'of the Sojouner', 'of Solemnity', 'of Lights', 'of Strides', 'of the Surgeon', 'of the Tenacious', 'of the Tracker', 'of Translucence', 'of Trickery', 'of Truth', 'of Heart', 'of Druidcraft', 'of Victory', 'of Vigilance', 'of Vigor', 'of Vitality', 'of the War Leader', 'of the Sea', 'of the Labyrinth Wind', 'of the Wizard', 'of Ysgard'],
        property: ['When on the plane of the Abyss, the bearer has advantage on saving throws against Abyssal Corruption. (DMG p. 62)',
            'The bearer gains a +1 bonus to Wisdom (Religion) checks.',
            'The item is indestructible.',
            'The bearer gains +1 bonus to Intelligence saving throws.',
            'Contains 1d4 unreplenishable charges of the Alarm spell (1st level).',
            'When on the plane of Arborea, the bearer has advantage on saving throws against the effects of Intense Yearning. (DMG p. 61)',
            'When on the plane of Arcardia, the bearer is unaffected by Planar Vitality (DMG p. 67)',
            'The bearer suffers no harm in temperature as cold as -20 degrees Fahrenheit.',
            'Once per day, the bearer may use their reaction to reduce fall damage by 1d6 until the end of turn.',
            'The bearer may add their proficiency bonus to damage rolls dealt during surprise rounds.',
            'When travelling the Astral Sea, it takes half the number of hours to locate a Color Pool to a specific plane. You have advantage on saving throws vs. the effects of Psychic Wind (DMG p. 47-48)',
            'The bearer gains a +1 bonus to Strength (Athletics) checks.',
            'The bearer gains +1 to Charisma (Performance) checks.',
            'When on the plane of The Beastlands, the bearer has advantage on saving throws vs. Beast Transformation (DMG p. 60)',
            'Contains 1d4 unreplenishable charges of the Speak with Animals spell (1st level).',
            'Contains 1d4 unreplenishable charges of the Healing Word spell (1st level).',
            'Contains 1d4 unreplenishable charges of the Fire Bolt spell (1st level).',
            'Whenever bearer of this item receives divine healing, they gain an additional 1d4 hit points.',
            'Contains 1d4 unreplenishable charges of the Heroism spell (1st level).',
            'Contains 1d4 unreplenishable charges of the Goodberry spell (1st level).',
            'The bearer gains +1 to Dexterity (Sleight of Hand) checks.',
            'When on the plane of Bytopia, the bearer has advantage on saving throws against Pervasive Goodwill. (DMG p. 59-60)',
            'When on the plane of Carceri, the bearer knows the direction to the closest secret exit from this prison plane. (DMG p. 63)',
            'The wielder can use an action to learn which way is north.',
            'On its own volition, the item records a map of the environments that the bearer is exploring, and can magically project it for the bearer to see.',
            'Once per day, the bearer may ignore the Verbal and/or Somatic components of a spell they are casting.',
            'Contains 1d4 unreplenishable charges of the Ray of Frost spell (1st level).',
            'When on the plane of Mechanus, the bearer has advantage on saving throws against Imposing Order (DMG p. 66)',
            'The bearer may cast Friends once per day.',
            'Contains 1d4 unreplenishable charges of the Cure Wounds spell (1st level).',
            'The bearer has advantage on saving throws vs. Psychic Dissonance when travelling the Outer Planes. (DMG p. 59)',
            'The bearer may cast Prestidigitation once per day.',
            'Contains 1d4 unreplenishable charges of the Acid Splash spell (1st level).',
            'The crawling things of the earth, such as insects, snakes, and vermin, are attracted to this item. When placed on the ground, such creatures will scurry toward the item like moths drawn to the flame.',
            'The bearer gains a +1 bonus to Dexterity (Acrobatics) checks.',
            'Whenever the bearer takes a dodge action, they may move an additional 5 feet.',
            "While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward.",
            'The bearer has advantage on perception checks when searching for items long lost in the the Swamp of Oblivion on the Plane of Earth. (DMG p. 54)',
            'The bearer gains a +1 bonus to Intelligence (Nature) checks.',
            'The bearer always knows the direction to the closest alcoholic beverage.',
            'The bearer has +1 to Charisma saving throws.',
            'As long as it is on the same plane, the bearer can hear through this item as if they were present.',
            'When on the plane of Elysium, the bearer has advantage on saving throws against the effects of Overwhelming Joy (DMG p. 60)',
            "The bearer can see creatures in the Border Ethereal that overlap with their plane as clearly as if they were fully in the bearer's plane. Such creatures appear as apparitions or ghosts.",
            'Contains 1d4 unreplenishable charges of the Bless spell (1st level).',
            'Contains 1d4 unreplenishable charges of the Expeditious Retreat spell.',
            'The bearer gains a +1 bonus to Charisma (Deception) checks.',
            'Contains 1d4 unreplenishable charges of the Comprehend Languages spell.',
            'Once per day, the bearer may roll a saving throw with advantage.',
            'Contains 1d4 unreplenishable charges of the Feather Fall spell (1st level).',
            'The bearer knows the general direction to the closest Fey Crossing within a 60 mile radius. (DMG p. 50)',
            'The bearer gain a +1 bonus to initiative rolls',
            'When on the plane of Mount Celestia, the bearer of this item can receive the benefits of Blessed Beneficence regardless of their alignment.',
            'Every time you are hit by a monster, you glimpse a random image of its future or past.',
            'Contains 1d4 unreplenishable charges of the Animal Friendship spell (1st level).',
            'When on the plane of Gehenna, the bearer has advantage on saving throws against Cruel Hindrance. (DMG p. 63)',
            'The bearer may cast Spare the Dying once per day.',
            'The bearer gains a +1 bonus to Charisma (Intimidation) checks if the target can see this item.',
            'When on the plane of Hades, the bearer has advantage on saving throws against Vile Transformation. (DMG p. 63)',
            'Attuning to this item takes only 1 minute.',
            'This item contains 4 weak healing nodes. As an action, a character can use one node to heal 1d4 hit points at touch range. The item regains 1d4 charges at sunrise.',
            'When in the Nine Hells, the bearer has advantage on saving throws against Pervasive Evil. (DMG p. 64)',
            'The bearer has advantage on saving throws vs. fear.',
            'the bearer gains +1 to Charisma (Performance) checks.',
            'When the bearer of this item rolls hit dice, they can choose to re-roll them and take the second result.',
            "The item is inscribed with holy symbols of the God of the DM's choice. A cleric or paladin that serves that god may use this item as a divine focus.",
            'The bearer gains a +1 bonus to Intelligence (Investigation) checks.',
            'The bearer regains their Constitution modifier in temporary hit points whenever they gain or use inspiration.',
            'Contains 1d4 unreplenishable charges of the Jump spell (1st level).',
            'Contains 1d4 unreplenishable charges of the Silent Image spell (1st level).',
            'When on the plane of Limbo, the bearer has advantage to Intelligence checks to alter or move non-magical objects within the plane. (DMG p. 61-62)',
            'Once attuned, the bearer always knows the exact location of this item',
            'The bearer gains +1 to Charisma (Persuasion) checks.',
            'Contains 1d4 unreplenishable charges of the Bane spell(1st level).',
            'The bearer may cast Mage Hand once per day.',
            'Contains 1d4 unreplenishable charges of the Unseen Servant spell (1st level).',
            'The bearer has a +1 bonus to any skill check involving gambling and games of chance (Insight, Sleight of Hand, Investigation, etc).',
            'The bearer may cast Message once per day.',
            'Contains 1 unreplenishable charge of Scorching Ray (1st level).',
            'The bearer gains a +1 bonus to Wisdom saving throws.',
            'The bearer may cast Thaumaturgy once per day.',
            'The bearer may cast Vicious Mockery once per day.',
            'Contains 1d4 unreplenishable charges of the Locate Animals or Plants spell (1st level).',
            'Contains 1d4 unreplenishable charges of the Protection from Good and Evil spell (1st level).',
            'The bearer gains a +1 bonus to Dexterity saving throws.',
            'The bearer rarely feels hungry, and only needs to consume one-fifth the usual amount of food.',
            'When on the plane of Pandemonium, the bearer has advantage on saving throws against the Mad Winds. (DMG p. 62)',
            'The bearer may extend the range of their Channel Divinity by 5 feet.',
            'The bearer can send messages mentally to willing characters within 30 feet. This communication is one-way only.',
            'The bearer may cast Blade Ward once per day.',
            'The bearer has advantage on death saving throws.',
            'Once per day, the bearer may gain +1 to any skill check.',
            'Contains 1d4 unreplenishable charges of the Detect Magic spell (1st level).',
            'Whenever the bearer casts a spell as a ritual, they have advantage to maintain concentration during the ritual.',
            'The bearer may increase their Lay on Hands hit point pool by 5.',
            'The bearer gains +1 to Wisdom (Insight) checks.',
            'The bearer gains a +1 bonus to Intelligence (History) checks.',
            'Contains 1d4 unreplenishable charges of the Illusory Script spell (1st level).',
            'Faintly glows when creatures of a certain race (DMs choice) are within a 100 foot radius.',
            'The bearer suffers no harm in temperatures as high as 120 degrees Fahrenheit.',
            'The bearer knows the general direction to the closest Shadow Crossing within a 60 mile radius. They have advantage on saving throws vs. Shadowfell Dispair (DMG p. 51-52)',
            'The bearer gains a +1 bonus to (Wisdom) Animal Handling checks.',
            'This item contains 1d4 unreplenishable charges of the Shield spell.',
            'The bearer may change minor aspects of the physical appearance of this item.',
            'The bearer gains a +1 bonus to Dexterity (Stealth) checks.',
            'The bearer may cast Mending once per day.',
            'A poem, story, or map that describes a long-forgotten treasure is etched on the surface of the item.',
            'The bearer may spend an action removing all the failed death saving throws from a target within 5 feet of them. The target is still not stabilized.',
            'The bearer may cast Dancing Lights once per day.',
            'Contains 1d4 unreplenishable charges of the Longstrider spell (1st level).',
            'The bearer gains a +1 bonus to Wisdom (Medicine) checks.',
            'When the bearer takes a long rest, they gain back one additional hit die.',
            'The bearer gains a +1 to Wisdom (Survival) checks.',
            'The bearer gains an extra level one spell slot, which recovers only after a full moon rises.',
            'The bearer may cast Minor Illusion once per day.',
            'The bearer may cast True Strike once per day.',
            'The bearer gains a +1 bonus to Constitution saving throws.',
            'The bearer may cast Druidcraft once per day.',
            "Whenever the bearer kills a creature they gain temporary hit points equal to the creature's CR.",
            'The bearer gains +2 to their Passive Perception.',
            'The bearer gains a +1 bonus to Strength saving throws.',
            "The bearer's maximum hit points increases by their constitution modifier while attuned to this item. These hit points are lost when the bearer unattunes the item.",
            'The bearer can use an action to amplify their voice so that it clearly carries for up to 300 feet.',
            'The item floats on water or other liquids. Its bearer has advantage on Strength (Athletics) checks to swim.',
            'When in the Plane of Air, the bearer can navigate the Labyrinth Wind intuitively, and knows the path to the nearest Earth Mote within 60 miles.',
            'The bearer gains a +1 to Intelligence (Arcana) checks.',
            'When on the plane of Ysgard, the bearer is unaffected by Immortal Wrath. (DMG p. 61)'
        ]
    }
};


/***/ }),

/***/ "./lib/src/matchFirst.ts":
/*!*******************************!*\
  !*** ./lib/src/matchFirst.ts ***!
  \*******************************/
/*! exports provided: matchFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchFirst", function() { return matchFirst; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");

const matchFirst = {
    equalTo: createMatchFirst((value, key) => {
        return value === key;
    }),
    notEqualTo: createMatchFirst((value, key) => {
        return value !== key;
    }),
    largerThan: createMatchFirst((value, key) => {
        return value > key;
    }),
    largerThanOrEqualTo: createMatchFirst((value, key) => {
        return value >= key;
    }),
    smallerThan: createMatchFirst((value, key) => {
        return value < key;
    }),
    smallerThanOrEqualTo: createMatchFirst((value, key) => {
        return value <= key;
    })
};
function createMatchFirst(callback) {
    const modifier = (value, map, defaultValue) => {
        for (const key of Object(_utils__WEBPACK_IMPORTED_MODULE_0__["keys"])(map).reverse()) {
            if (callback(value, Number(key))) {
                return map[key];
            }
        }
        return defaultValue;
    };
    return modifier;
}


/***/ }),

/***/ "./lib/src/medal.ts":
/*!**************************!*\
  !*** ./lib/src/medal.ts ***!
  \**************************/
/*! exports provided: medal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "medal", function() { return medal; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");


const medal = {
    create: (base) => {
        const medal = Object.assign({ metal: Object(_random__WEBPACK_IMPORTED_MODULE_1__["random"])(data.metals), material: Object(_random__WEBPACK_IMPORTED_MODULE_1__["random"])(data.materials), emblem: Object(_random__WEBPACK_IMPORTED_MODULE_1__["random"])(data.emblems), colour: Object(_random__WEBPACK_IMPORTED_MODULE_1__["random"])(data.colours) }, base);
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(medal, {
            readout: `This medal's emblem is made of ${medal.metal} and has a ${medal.material} ribbon. The emblem is ${medal.emblem} and the ribbon is coloured ${medal.colour}.`
        });
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(medal, {
            tip: `<span class="dotted"><<tooltip "medal"${JSON.stringify(medal.readout)}>></span>`
        });
        return medal;
    }
};
const data = {
    metals: ['iron', 'steel', 'silver', 'bronze', 'gold', 'copper', 'aluminum', 'lead', 'tin', 'nickel', 'oak wood', 'pine wood', 'brass', 'marble', 'onyx', 'tempered glass'],
    materials: ['cloth', 'wool', 'fleece', 'silk', 'cotton', 'leather', 'burlap', 'horse hair', 'lion mane hair', 'dragon scales', 'braided hemp', 'snake skin'],
    emblems: ['a pair of wings', 'a downward facing sword', 'an upward facing sword', 'a skull', 'an eagle', 'an arrow', 'an embossed circle', 'an axe', 'a heart', 'a cross', 'a holy symbol', 'the symbol of a local noble', 'a lion', 'a pair of clasped hands', 'an eye', 'a pyramid', 'a key', 'a raven', 'a feather', 'a wreath', 'a sturdy tree'],
    colours: ['red', 'crimson', 'maroon', 'gold', 'yellow', 'peridot', 'peach', 'purple', 'orange', 'green', 'white', 'black', 'brown', 'blue', 'indigo', 'azure', 'mauve', 'teal', 'emerald']
};


/***/ }),

/***/ "./lib/src/newspaper.ts":
/*!******************************!*\
  !*** ./lib/src/newspaper.ts ***!
  \******************************/
/*! exports provided: newspaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newspaper", function() { return newspaper; });
const newspaper = [
    'NPC attempts to become player, ridiculed.',
    'Underground homunculi fights discovered - homunculi sales increase.',
    'Wizard house vanishes in the night, locals suspect shenanigans.',
    "Doppelganger discovered in mayor's place. Townsfolk agree he's better than the old.",
    'Tiefling, dragonborn, and hobbit visit tavern, local economy booming. (Adventures visited)',
    "Werewolf suspected to live in town, buy your silver at Jameson's general store!",
    "Goblins threaten to kill all townsfolk, distracted by 'shiny things'",
    'Dragon flies over town, local illusionist jailed.',
    'Lawyer discovered to be vampire, surprising no one.',
    'Dwarf and human proclaim love, refused wedding ceremony by cleric.',
    'Dragon rider gives birth to half dragon.',
    "Centaur's father jailed for bestially.",
    'Cultists file for rights to be called clerics.',
    "Forest gnome discovered in wood elf elementary school, been 'stealing our food for years.'",
    'Portal to elemental plane discovered, hot springs are rejuvenating says discoverer.',
    "Fey found making old man's shoes, old man to be jailed for slavery.",
    "Jack steals gold from 'giant in sky' giants pissed.",
    'Necromancer family man caught trying to raise a family.',
    'Drunken old ramblings of future discovered to be 90% accurate.',
    'Dragonborn day-care suspected to be kobold infiltration team.',
    "Local dungeon deliver finds 'artefact with a demonic presence' leaves it due to lack of modifiers.",
    'Travelling circus to visit soon.',
    'Farmer discovers wishing well works.',
    'Druid makes farm animals talk, town goes vegetarian.',
    'Druid threatens to awaken plants.',
    'House pet discovered to be archdruid.',
    "30 year old half elf sick of 'being treated like a child.'",
    'Low level adventurers causing trouble in town; seeking rat infested basement to start them on a long quest.',
    'Lost: Pet invisible stalker, if found return to Wash gust (Wizard). Poster includes a picture of the pet',
    'Small medium at large; a poster for an escaped gnomish diviner',
    'Familiars getting too familiar? Please spay or neuter your animal companions.',
    "'Blurry face of something, angel or demon? Who knows' Do you trust your sight? MADD Magicians Against Drunken Divining.",
    "St. Cuthbert's school of phrenology and trepanning",
    "'Beware of doppelgangers!'",
    "'Local wizard went missing after experimenting with a bag of holding'",
    "'You will not believe your eyes when you read what this Halfling found in a dungeon!!!'",
    "'Apprentice sorcerer blew up himself and started a forest fire'",
    "'Thieves' guild revealed to be just a rumour'",
    "'Gnome banished from town after drinking 200 potions of inappropriate yodelling'",
    "'Banshee was still alive hours before she died!'",
    "'City unsure why the sewer smells.'",
    "'City guard's raid smithy, find +1 weapons'",
    "'Goose attacked by aggressive dog, goose refused medical treatment.'",
    "'Ilitrasee an obstakul for billboards, studee finds.'",
    "'Group of adventurers mugged by a parrot.'",
    "'Guard investigation reveals suspicious gold coin to be a copper coin.'",
    "'Cows lose their jobs as milk prices drop'",
    'Seeking apprentice cook/tavern staff',
    'Seeking wizard to remove awaken from my pots and broom.',
    'Local wizard apprentice blamed for recent flood, discovered to be awakened mouse',
    "'Local merchant arrested for selling mimics disguised as furniture and appliances, scheme discovered after customer noticed his refrigerator was running.'",
    "'Rampaging beast destroys slum, townsfolk celebrate new town square.'",
    'Local instrument shop has massive blowout on Large-sized Lutes, due to a hilarious misunderstanding with local adventurers.',
    "Help! Help! I'm being held here and made to write these signs!",
    "Fourth-annual dwarf-throwing competition dissolves into chaos, bloodshed. 'We're looking forward to the fifth year!' says local dwarven merchant.",
    "Bloodknife the Deathrager, level 20 Barbarian, buys local farm. Interviewed while re-forging a sword into a ploughshare, he said 'My DM doesn't support Epic levels.'",
    "Strange ill rumours heard from those fleeing from the north. 'Probably nothing,' agrees city council.",
    "Local wizard's attempt at opening a portal to the Plane of Uncertain Outcomes has succeeded and failed.",
    "Local church erupts into violence over the usage of non-blunt weaponry among clergy. 'What's next,' cried a local priest, 'Paladins with no alignment restrictions?!'",
    'Magical cobblers continue to take heavy losses on sales of Boots of Striding and Springing. Demand continues to drop as more editions are released.',
    "Copyright permit for 11-foot pole denied by local council. 'It IS different!' cried the merchant, as he was escorted from the premises.",
    "Market share for d12 weapons at an all time low. A local blacksmith was reached for comment, 'Orcs just ain't buyin' no more.'",
    "A local village has reached a settlement to recompense a magical tailor for injury and losses sustained after the villagers ran him out of town. The elder of the village said, 'We thought t'were one of them parables! Turns out he does sell invisible cloth. We're truly sorry.'",
    "Dairy farmer to begin offering 'milk for the Khorne flakes'. In an interview, he says 'Well, I began by getting Chaotic Evil cows.'",
    "Orcs-no-eat insurance! You want not get eat, you pay us gold. Our motto are, 'Your money or you get eat.'",
    "A local scientist claims 'Humans are slowly being replaced.' He went on to state that, 'These so-called 'variant humans' look exactly like us, and it is nearly impossible to tell if someone you know is one.'",
    'The town of Westbrynn is under investigation after allegations surfaced that they are offering incentives for higher level creatures to move into the area. Authorities were tipped off after shipments of +5 weapons were intercepted on their way to the town.',
    'Steampunk genres threaten takeover. Coastal wizards decline to comment',
    'Lvl 3 familiars unionized! Necromancers at a loss for words',
    'Gravity subject to change over the next few weeks: alchemists give assurances',
    'Due to the recent rise in tectonic activity, all elemental mages are advised to avoid using materials near riverbanks and volcanoes',
    'Dragon scale market plummets as advances in metalwork create stronger materials',
    "Recent reports confirm health potions to cause loss in bone density. Heavy users of these potions argue that they usually don't live long enough to be effected",
    "Theoretical alchemists argue the universe was created in a failed transmutation event coined 'The Big Bang'",
    "'Local gangsters are putting up false notice boards to an excess.'",
    'Kobold seeks dragon wing for no particular reason.',
    'Local human scholar in need of parchment urgently.',
    'Gnome mystic requires escort to deathly swamp.',
    'Family wedding requires cooks. Will eat any one thing.',
    'The Order of the Magi requires help in procuring the whereabouts of Magus Ornathuss.',
    'Animated sword seeks better life; tired of being used in one way relationship.',
    'Half-elf Baron Faelin Merrybrook found dead at his home. An investigation is still ongoing.',
    'Finals of the annual tavern brawl to take place tomorrow!',
    'Doppelganger suffering from identity crisis trying to find purpose in life.',
    'The Wandering Troupe in town for two days only! Have the minstrels on the run from a bunch of bandits they fleeced and inadvertently involve the characters in their acts.',
    'Local farmer requires assistance. I am unable to pay you for your troubles I am afraid.',
    'Dwarf having some trouble removing a ring. The ring is actually a symbiotic ring and has fused with its new owner. It responds well to gluttony, which the dwarf is afflicted by. As the dwarf becomes more charitable, the ring loosens. If anyone wants to wear the ring, it gives 10 temporary hit points at dawn, each day.',
    'Waresloth seeking help on slow nights.',
    'Dwarf tossing championship at local tavern, bring your own dwarf.',
    'Three gnomes in long coat arrested for impersonating human.',
    "Trigeraian's Used Armour: Eh, it should serve you better than the previous wearer.",
    'Castle executioner found using illegal muscle enchantments.',
    'Local elven leader, famously against interracial breeding, found in orc brothel.',
    "Charngroc's Custom Chimeras: personalized pets for any personality.",
    "Local oracle revealed to be fraud. 'I just wanted to make a prophet' he says.",
    'A Capella singing competition finished. Winner was a buomman asking for directions.',
    "Adventurer teaches blink dog Common. 'Wow. Very language.' comments dog.",
    'Unidentified kobold mage summons sarrukh. Apocalypse scheduled for 6 PM.',
    'Evil Lich Necromancer escaped prison. Wanted dead or alive.',
    'Impersonator discovers his house is a mimic'
];


/***/ }),

/***/ "./lib/src/objectArrayFetcher.ts":
/*!***************************************!*\
  !*** ./lib/src/objectArrayFetcher.ts ***!
  \***************************************/
/*! exports provided: objectArrayFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectArrayFetcher", function() { return objectArrayFetcher; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");

/**
 * Fetches a random value from an object.
 * Used to fetch when it's not important which it fetches;
 * any random tavern, or any random Patreon character.
 */
function objectArrayFetcher(target) {
    return Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(Object.values(target));
}


/***/ }),

/***/ "./lib/src/random.ts":
/*!***************************!*\
  !*** ./lib/src/random.ts ***!
  \***************************/
/*! exports provided: setRandom, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRandom", function() { return setRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let randomFn = (...args) => {
    throw new Error('Function has not been set!');
};
function setRandom(fn) {
    randomFn = fn;
}
function random(min, max) {
    if (Array.isArray(min)) {
        return min[randomFn(0, min.length - 1)];
    }
    if (typeof max === 'undefined') {
        return randomFn(0, min);
    }
    return randomFn(min, max);
}


/***/ }),

/***/ "./lib/src/randomFloat.ts":
/*!********************************!*\
  !*** ./lib/src/randomFloat.ts ***!
  \********************************/
/*! exports provided: setRandomFloat, randomFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRandomFloat", function() { return setRandomFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomFloat", function() { return randomFloat; });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let randomFloatFn = (...args) => {
    throw new Error('Function has not been set!');
};
function setRandomFloat(fn) {
    randomFloatFn = fn;
}
function randomFloat(min, max) {
    if (typeof max === 'undefined') {
        return randomFloatFn(min);
    }
    return randomFloatFn(min, max);
}


/***/ }),

/***/ "./lib/src/rollFromTable.ts":
/*!**********************************!*\
  !*** ./lib/src/rollFromTable.ts ***!
  \**********************************/
/*! exports provided: rollFromTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollFromTable", function() { return rollFromTable; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");


/**
 * Gives a random value from a static table.
 * Designed to be less performance-intensive than weightedRandomFetcher,
 *
 * The table should contain the intended probabilities of each result
 * for example, calling rollFromTable([[1, 'a'], [2, 'b']])
 * would return 'a' 1/3 of the time, and b 2/3 of the time.
 *
 * Defining maxRoll is not strictly necessary, although I recommend
 * doing so to prevent re-computing the same total of probabilities.
 *
 * Using bias will make certain outcomes more likely. Negative biases
 * skew results toward the first entries, and positive biases skew
 * toward the last entries.
 */
function rollFromTable(table, maxRoll, bias = 0) {
    if (!maxRoll) {
        // set it to be the sum of probabilities
        maxRoll = table.reduce((a, [b]) => a + b, 0);
    }
    let roll = Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, maxRoll) + bias;
    for (const [prob, result] of table) {
        roll -= prob;
        if (roll <= 0)
            return result;
    }
    // roll too high, return last entry in table
    const [, result] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["last"])(table);
    return result;
}


/***/ }),

/***/ "./lib/src/tippy.ts":
/*!**************************!*\
  !*** ./lib/src/tippy.ts ***!
  \**************************/
/*! exports provided: createTippy, createTippyWord, createTippyFull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTippy", function() { return createTippy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTippyWord", function() { return createTippyWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTippyFull", function() { return createTippyFull; });
/**
 * To be used when you want to wrap a tippy around
 * something i.e. you know what you're doing
 *
 * **Note the lack of a closing span.**
 */
const createTippy = (readout) => {
    return `<span class="tip" title=${JSON.stringify(readout)}><<run setup.tippy("span.tip")>>`;
};
/**
 * Assumes that the first argument was created
 * using the createTippy function.
 *
 * **Note the two closing spans to accommodate this.**
 */
const createTippyWord = (tippy, word) => {
    return `${tippy}<span class="dotted">${word}</span></span>`;
};
/**
 * The function that should be used most of the time.
 */
const createTippyFull = (readout, word) => {
    return `<span class="tip dotted" title=${JSON.stringify(readout)}>${word}<<run setup.tippy("span.tip")>></span>`;
};


/***/ }),

/***/ "./lib/src/toTitleCase.ts":
/*!********************************!*\
  !*** ./lib/src/toTitleCase.ts ***!
  \********************************/
/*! exports provided: toTitleCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTitleCase", function() { return toTitleCase; });
function toTitleCase(input) {
    let str = input.replace(/([^\W_]+[^\s-]*) */g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    // Certain minor words should be left lowercase unless
    // they are the first or last words in the string
    for (const lower of LOWER_CASE_WORDS) {
        str = str.replace(new RegExp(`\\s${lower}\\s`, 'g'), (txt) => txt.toLowerCase());
    }
    // Certain words such as initialisms or acronyms should be left uppercase
    for (const upper of UPPER_CASE_WORDS) {
        str = str.replace(new RegExp(`\\b${upper}\\b`, 'g'), upper.toUpperCase());
    }
    return str;
}
const LOWER_CASE_WORDS = [
    'A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
    'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'
];
const UPPER_CASE_WORDS = ['Id', 'Tv'];


/***/ }),

/***/ "./lib/src/treasureMap.ts":
/*!********************************!*\
  !*** ./lib/src/treasureMap.ts ***!
  \********************************/
/*! exports provided: treasureMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treasureMap", function() { return treasureMap; });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./lib/src/random.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");
/* harmony import */ var _tippy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tippy */ "./lib/src/tippy.ts");



const treasureMap = {
    create: (base) => {
        const map = Object.assign({ one: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.one()), two: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.two()), three: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.three()), four: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.four()), five: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.five()), six: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.six()), seven: Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(data.seven()) }, base);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(map, {
            readout: `${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['Find the', 'Start at the'])} ${map.one} Then, ${map.two} until you find the ${map.three} Then, ${map.four} until you reach ${map.five} Then, ${map.six} You will find the treasure ${map.seven}`
        });
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(map, {
            tippy: Object(_tippy__WEBPACK_IMPORTED_MODULE_2__["createTippy"])(map.readout)
        });
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assign"])(map, {
            tippyWord: Object(_tippy__WEBPACK_IMPORTED_MODULE_2__["createTippyWord"])(map.tippy, 'map')
        });
        return map;
    }
};
const data = {
    one: () => ['big cracked boulder.', 'lightning-blasted oak tree.', 'rock shaped like a horse.', 'stone wall with a piece of volcanic glass .', 'exact center of the village/town/city.', 'statue of a famous person.', 'shipwreck of an infamous pirate ship.', 'bones of the black dragon.', 'cavern near the waterfall.', 'top of the volcano.', 'exact center of the lake.', 'abandoned temple.', 'old fort.', 'old standing circle.', 'road marker leading south.', 'exact center of the longest bridge.', "hangman's scaffold.", "king's/queens throne room.", 'crossroads.', 'largest tomb in the cemetery.', 'last waterfall on the great river', 'big well', 'yellow barn outside of town'],
    two: () => [`go north for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go south for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go east for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go west for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go northeast for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go northwest for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go southeast for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go southwest for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`],
    three: () => ['mountain shaped like a tooth.', 'hill shaped like a saddle.', 'cliffs of red stone.', 'tiny caves in a white hill.', 'old fortress ruins.', 'dried up creekbed.', 'swift-running river.', 'waterfall.', 'abandoned village.', 'tree with a large hole in it.', 'toppled statue of a deity.', 'landslide of shale and gravel.', 'steep-sided valley with blue flowers.', 'beach strewn with black seashells.', 'broken remains of a watchtower.', 'road marker pointing east.', "dilapidated hunter's shack.", 'crossroads.', 'hand-cut stairway into the hillside.', 'the canyon with natural stairs leading down.', 'white tree.', 'exposed dragon skull.', 'stone island in the center of a small lake.'],
    four: () => [`go north for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go south for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go east for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go west for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go northeast for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go northwest for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go southeast for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`, `go southwest for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles`],
    five: () => ['rock shaped like a heart.', "mountain shaped like a bird's head.", 'petrified forest.', 'salt lake.', 'dried up swampland.', 'broken bridge.', 'old abandoned mill.', 'the ruined tower of a famous mage.', 'the ancient cemetery.', 'the mossy limestone cliffs.', 'the old granite quarry.', 'the abandoned campgrounds.', 'the vandalized statue of a former ruler.', 'the crossroads.', 'the road marker pointing west.', 'shipwreck of a well-known war ship.', 'minaret.', 'quicksand.', 'hills honeycombed with caves.', "old king's forest.", 'edge of the great desert.', 'great pine tree.', 'boulder split in two.', 'enormous sacrificial altar.', 'unholy temple to a forgotten god.', 'eternally burning campfire.'],
    six: () => [`go north for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles.`, `go south for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles.`, `go east for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles.`, `go west for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles.`, `go northeast for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles.`, `go northwest for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles.`, `go southeast for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles.`, `go southwest for ${Object(_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 4)} miles.`],
    seven: () => ['buried at the foot of a cliff.', 'buried under a mighty oak tree.', 'buried under some tower ruins.', 'buried under a pile of skulls.', 'buried in the grave of a famous person.', 'hidden at the top of an old tower.', 'hidden behind an old painting.', "hidden at the bottom of an old rabbit's warren.", 'hidden in the bole of an ancient elm tree.', "hidden in a shipwreck's hold.", 'guarded by assassins.', 'guarded by monsters.', 'guarded by soldiers.', 'guarded by spirits.', 'guarded by a big monster.', 'protected by magical wards.', 'protected by astral locks.', 'protected by physical traps.', 'protected by necromantic curses.', 'protected by spiritual prayers.', 'protected by a terrible riddle.', 'locked behind a holy ward.', 'buried in an old latrine.', "mixed into a dragon's horde.", 'hidden at the bottom of the chasm.', 'locked behind arcane spells.', 'stuck at the top of a great elm tree.', 'buried in an iron chest.', 'in a wooden chest in the basement of the cabin.', 'stuffed in the crack between two boulders.', 'buried at the end of the black alleyway.']
};


/***/ }),

/***/ "./lib/src/urlData.ts":
/*!****************************!*\
  !*** ./lib/src/urlData.ts ***!
  \****************************/
/*! exports provided: urlData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlData", function() { return urlData; });
const urlData = {
    adjectives: [
        'able',
        'absolute',
        'academic',
        'acceptable',
        'acclaimed',
        'accomplished',
        'accurate',
        'aching',
        'acidic',
        'acrobatic',
        'adorable',
        'adventurous',
        'babyish',
        'back',
        'bad',
        'baggy',
        'bare',
        'barren',
        'basic',
        'beautiful',
        'belated',
        'beloved',
        'calculating',
        'calm',
        'candid',
        'canine',
        'capital',
        'carefree',
        'careful',
        'careless',
        'caring',
        'cautious',
        'cavernous',
        'celebrated',
        'charming',
        'damaged',
        'damp',
        'dangerous',
        'dapper',
        'daring',
        'dark',
        'darling',
        'dazzling',
        'dead',
        'deadly',
        'deafening',
        'dear',
        'dearest',
        'each',
        'eager',
        'early',
        'earnest',
        'easy',
        'easygoing',
        'ecstatic',
        'edible',
        'educated',
        'fabulous',
        'failing',
        'faint',
        'fair',
        'faithful',
        'fake',
        'familiar',
        'famous',
        'fancy',
        'fantastic',
        'far',
        'faraway',
        'farflung',
        'faroff',
        'gargantuan',
        'gaseous',
        'general',
        'generous',
        'gentle',
        'genuine',
        'giant',
        'giddy',
        'gigantic',
        'hairy',
        'half',
        'handmade',
        'handsome',
        'handy',
        'happy',
        'happygolucky',
        'hard',
        'icky',
        'icy',
        'ideal',
        'idealistic',
        'identical',
        'idiotic',
        'idle',
        'idolized',
        'ignorant',
        'ill',
        'illegal',
        'jaded',
        'jagged',
        'jampacked',
        'kaleidoscopic',
        'keen',
        'lame',
        'lanky',
        'large',
        'last',
        'lasting',
        'late',
        'lavish',
        'lawful',
        'mad',
        'madeup',
        'magnificent',
        'majestic',
        'major',
        'male',
        'mammoth',
        'married',
        'marvelous',
        'naive',
        'narrow',
        'nasty',
        'natural',
        'naughty',
        'obedient',
        'obese',
        'oblong',
        'oblong',
        'obvious',
        'occasional',
        'oily',
        'palatable',
        'pale',
        'paltry',
        'parallel',
        'parched',
        'partial',
        'passionate',
        'past',
        'pastel',
        'peaceful',
        'peppery',
        'perfect',
        'perfumed',
        'quaint',
        'qualified',
        'radiant',
        'ragged',
        'rapid',
        'rare',
        'rash',
        'raw',
        'recent',
        'reckless',
        'rectangular',
        'sad',
        'safe',
        'salty',
        'same',
        'sandy',
        'sane',
        'sarcastic',
        'sardonic',
        'satisfied',
        'scaly',
        'scarce',
        'scared',
        'scary',
        'scented',
        'scholarly',
        'scientific',
        'scornful',
        'scratchy',
        'scrawny',
        'second',
        'secondary',
        'secondhand',
        'secret',
        'selfassured',
        'selfish',
        'selfreliant',
        'sentimental',
        'talkative',
        'tall',
        'tame',
        'tan',
        'tangible',
        'tart',
        'tasty',
        'tattered',
        'taut',
        'tedious',
        'teeming',
        'ugly',
        'ultimate',
        'unacceptable',
        'unaware',
        'uncomfortable',
        'uncommon',
        'unconscious',
        'understated',
        'unequaled',
        'vacant',
        'vague',
        'vain',
        'valid',
        'wan',
        'warlike',
        'warm',
        'warmhearted',
        'warped',
        'wary',
        'wasteful',
        'watchful',
        'waterlogged',
        'watery',
        'wavy',
        'yawning',
        'yearly',
        'zany',
        'FALSE',
        'active',
        'actual',
        'adept',
        'admirable',
        'admired',
        'adolescent',
        'adorable',
        'adored',
        'advanced',
        'affectionate',
        'afraid',
        'aged',
        'aggravating',
        'beneficial',
        'best',
        'better',
        'bewitched',
        'big',
        'bighearted',
        'biodegradable',
        'bitesized',
        'bitter',
        'black',
        'cheap',
        'cheerful',
        'cheery',
        'chief',
        'chilly',
        'chubby',
        'circular',
        'classic',
        'clean',
        'clear',
        'clearcut',
        'clever',
        'close',
        'closed',
        'decent',
        'decimal',
        'decisive',
        'deep',
        'defenseless',
        'defensive',
        'defiant',
        'deficient',
        'definite',
        'definitive',
        'delayed',
        'delectable',
        'delicious',
        'elaborate',
        'elastic',
        'elated',
        'elderly',
        'electric',
        'elegant',
        'elementary',
        'elliptical',
        'embarrassed',
        'fast',
        'fat',
        'fatal',
        'fatherly',
        'favorable',
        'favorite',
        'fearful',
        'fearless',
        'feisty',
        'feline',
        'female',
        'feminine',
        'few',
        'fickle',
        'gifted',
        'giving',
        'glamorous',
        'glaring',
        'glass',
        'gleaming',
        'gleeful',
        'glistening',
        'glittering',
        'hardtofind',
        'harmful',
        'harmless',
        'harmonious',
        'harsh',
        'hasty',
        'hateful',
        'haunting',
        'illfated',
        'illinformed',
        'illiterate',
        'illustrious',
        'imaginary',
        'imaginative',
        'immaculate',
        'immaterial',
        'immediate',
        'immense',
        'impassioned',
        'jaunty',
        'jealous',
        'jittery',
        'key',
        'kind',
        'lazy',
        'leading',
        'leafy',
        'lean',
        'left',
        'legal',
        'legitimate',
        'light',
        'masculine',
        'massive',
        'mature',
        'meager',
        'mealy',
        'mean',
        'measly',
        'meaty',
        'medical',
        'mediocre',
        'nautical',
        'near',
        'neat',
        'necessary',
        'needy',
        'odd',
        'oddball',
        'offbeat',
        'offensive',
        'official',
        'old',
        'periodic',
        'perky',
        'personal',
        'pertinent',
        'pesky',
        'pessimistic',
        'petty',
        'phony',
        'physical',
        'piercing',
        'pink',
        'pitiful',
        'plain',
        'quarrelsome',
        'quarterly',
        'ready',
        'real',
        'realistic',
        'reasonable',
        'red',
        'reflecting',
        'regal',
        'regular',
        'separate',
        'serene',
        'serious',
        'serpentine',
        'several',
        'severe',
        'shabby',
        'shadowy',
        'shady',
        'shallow',
        'shameful',
        'shameless',
        'sharp',
        'shimmering',
        'shiny',
        'shocked',
        'shocking',
        'shoddy',
        'short',
        'shortterm',
        'showy',
        'shrill',
        'shy',
        'sick',
        'silent',
        'silky',
        'tempting',
        'tender',
        'tense',
        'tepid',
        'terrible',
        'terrific',
        'testy',
        'thankful',
        'that',
        'these',
        'uneven',
        'unfinished',
        'unfit',
        'unfolded',
        'unfortunate',
        'unhappy',
        'unhealthy',
        'uniform',
        'unimportant',
        'unique',
        'valuable',
        'vapid',
        'variable',
        'vast',
        'velvety',
        'weak',
        'wealthy',
        'weary',
        'webbed',
        'wee',
        'weekly',
        'weepy',
        'weighty',
        'weird',
        'welcome',
        'welldocumented',
        'yellow',
        'zealous',
        'aggressive',
        'agile',
        'agitated',
        'agonizing',
        'agreeable',
        'ajar',
        'alarmed',
        'alarming',
        'alert',
        'alienated',
        'alive',
        'all',
        'altruistic',
        'blackandwhite',
        'bland',
        'blank',
        'blaring',
        'bleak',
        'blind',
        'blissful',
        'blond',
        'blue',
        'blushing',
        'cloudy',
        'clueless',
        'clumsy',
        'cluttered',
        'coarse',
        'cold',
        'colorful',
        'colorless',
        'colossal',
        'comfortable',
        'common',
        'compassionate',
        'competent',
        'complete',
        'delightful',
        'delirious',
        'demanding',
        'dense',
        'dental',
        'dependable',
        'dependent',
        'descriptive',
        'deserted',
        'detailed',
        'determined',
        'devoted',
        'different',
        'embellished',
        'eminent',
        'emotional',
        'empty',
        'enchanted',
        'enchanting',
        'energetic',
        'enlightened',
        'enormous',
        'filthy',
        'fine',
        'finished',
        'firm',
        'first',
        'firsthand',
        'fitting',
        'fixed',
        'flaky',
        'flamboyant',
        'flashy',
        'flat',
        'flawed',
        'flawless',
        'flickering',
        'gloomy',
        'glorious',
        'glossy',
        'glum',
        'golden',
        'good',
        'goodnatured',
        'gorgeous',
        'graceful',
        'healthy',
        'heartfelt',
        'hearty',
        'heavenly',
        'heavy',
        'hefty',
        'helpful',
        'helpless',
        'impartial',
        'impeccable',
        'imperfect',
        'imperturbable',
        'impish',
        'impolite',
        'important',
        'impossible',
        'impractical',
        'impressionable',
        'impressive',
        'improbable',
        'joint',
        'jolly',
        'jovial',
        'kindhearted',
        'kindly',
        'lighthearted',
        'likable',
        'likely',
        'limited',
        'limp',
        'limping',
        'linear',
        'lined',
        'liquid',
        'medium',
        'meek',
        'mellow',
        'melodic',
        'memorable',
        'menacing',
        'merry',
        'messy',
        'metallic',
        'mild',
        'negative',
        'neglected',
        'negligible',
        'neighboring',
        'nervous',
        'new',
        'oldfashioned',
        'only',
        'open',
        'optimal',
        'optimistic',
        'opulent',
        'plaintive',
        'plastic',
        'playful',
        'pleasant',
        'pleased',
        'pleasing',
        'plump',
        'plush',
        'pointed',
        'pointless',
        'poised',
        'polished',
        'polite',
        'political',
        'queasy',
        'querulous',
        'reliable',
        'relieved',
        'remarkable',
        'remorseful',
        'remote',
        'repentant',
        'required',
        'respectful',
        'responsible',
        'silly',
        'silver',
        'similar',
        'simple',
        'simplistic',
        'sinful',
        'single',
        'sizzling',
        'skeletal',
        'skinny',
        'sleepy',
        'slight',
        'slim',
        'slimy',
        'slippery',
        'slow',
        'slushy',
        'small',
        'smart',
        'smoggy',
        'smooth',
        'smug',
        'snappy',
        'snarling',
        'sneaky',
        'sniveling',
        'snoopy',
        'thick',
        'thin',
        'third',
        'thirsty',
        'this',
        'thorny',
        'thorough',
        'those',
        'thoughtful',
        'threadbare',
        'united',
        'unkempt',
        'unknown',
        'unlawful',
        'unlined',
        'unlucky',
        'unnatural',
        'unpleasant',
        'unrealistic',
        'venerated',
        'vengeful',
        'verifiable',
        'vibrant',
        'vicious',
        'wellgroomed',
        'wellinformed',
        'welllit',
        'wellmade',
        'welloff',
        'welltodo',
        'wellworn',
        'wet',
        'which',
        'whimsical',
        'whirlwind',
        'whispered',
        'yellowish',
        'zesty',
        'amazing',
        'ambitious',
        'ample',
        'amused',
        'amusing',
        'anchored',
        'ancient',
        'angelic',
        'angry',
        'anguished',
        'animated',
        'annual',
        'another',
        'antique',
        'bogus',
        'boiling',
        'bold',
        'bony',
        'boring',
        'bossy',
        'both',
        'bouncy',
        'bountiful',
        'bowed',
        'complex',
        'complicated',
        'composed',
        'concerned',
        'concrete',
        'confused',
        'conscious',
        'considerate',
        'constant',
        'content',
        'conventional',
        'cooked',
        'cool',
        'cooperative',
        'difficult',
        'digital',
        'diligent',
        'dim',
        'dimpled',
        'dimwitted',
        'direct',
        'disastrous',
        'discrete',
        'disfigured',
        'disgusting',
        'disloyal',
        'dismal',
        'enraged',
        'entire',
        'envious',
        'equal',
        'equatorial',
        'essential',
        'esteemed',
        'ethical',
        'euphoric',
        'flimsy',
        'flippant',
        'flowery',
        'fluffy',
        'fluid',
        'flustered',
        'focused',
        'fond',
        'foolhardy',
        'foolish',
        'forceful',
        'forked',
        'formal',
        'forsaken',
        'gracious',
        'grand',
        'grandiose',
        'granular',
        'grateful',
        'grave',
        'gray',
        'great',
        'greedy',
        'green',
        'hidden',
        'hideous',
        'high',
        'highlevel',
        'hilarious',
        'hoarse',
        'hollow',
        'homely',
        'impure',
        'inborn',
        'incomparable',
        'incompatible',
        'incomplete',
        'inconsequential',
        'incredible',
        'indelible',
        'indolent',
        'inexperienced',
        'infamous',
        'infantile',
        'joyful',
        'joyous',
        'jubilant',
        'klutzy',
        'knobby',
        'little',
        'live',
        'lively',
        'livid',
        'loathsome',
        'lone',
        'lonely',
        'long',
        'milky',
        'mindless',
        'miniature',
        'minor',
        'minty',
        'miserable',
        'miserly',
        'misguided',
        'misty',
        'mixed',
        'next',
        'nice',
        'nifty',
        'nimble',
        'nippy',
        'orange',
        'orderly',
        'ordinary',
        'organic',
        'ornate',
        'ornery',
        'poor',
        'popular',
        'portly',
        'posh',
        'positive',
        'possible',
        'potable',
        'powerful',
        'powerless',
        'practical',
        'precious',
        'present',
        'prestigious',
        'questionable',
        'quick',
        'repulsive',
        'revolving',
        'rewarding',
        'rich',
        'right',
        'rigid',
        'ringed',
        'ripe',
        'sociable',
        'soft',
        'soggy',
        'solid',
        'somber',
        'some',
        'sophisticated',
        'sore',
        'sorrowful',
        'soulful',
        'soupy',
        'sour',
        'spanish',
        'sparkling',
        'sparse',
        'specific',
        'spectacular',
        'speedy',
        'spherical',
        'spicy',
        'spiffy',
        'spirited',
        'spiteful',
        'splendid',
        'spotless',
        'spotted',
        'spry',
        'thrifty',
        'thunderous',
        'tidy',
        'tight',
        'timely',
        'tinted',
        'tiny',
        'tired',
        'torn',
        'total',
        'unripe',
        'unruly',
        'unselfish',
        'unsightly',
        'unsteady',
        'unsung',
        'untidy',
        'untimely',
        'untried',
        'victorious',
        'vigilant',
        'vigorous',
        'villainous',
        'violet',
        'white',
        'whole',
        'whopping',
        'wicked',
        'wide',
        'wideeyed',
        'wiggly',
        'wild',
        'willing',
        'wilted',
        'winding',
        'windy',
        'young',
        'zigzag',
        'anxious',
        'any',
        'apprehensive',
        'appropriate',
        'apt',
        'arctic',
        'arid',
        'aromatic',
        'artistic',
        'ashamed',
        'assured',
        'astonishing',
        'athletic',
        'brave',
        'breakable',
        'brief',
        'bright',
        'brilliant',
        'brisk',
        'broken',
        'bronze',
        'brown',
        'bruised',
        'coordinated',
        'corny',
        'corrupt',
        'costly',
        'courageous',
        'courteous',
        'crafty',
        'crazy',
        'creamy',
        'creative',
        'creepy',
        'criminal',
        'crisp',
        'dirty',
        'disguised',
        'dishonest',
        'dismal',
        'distant',
        'distant',
        'distinct',
        'distorted',
        'dizzy',
        'dopey',
        'downright',
        'dreary',
        'even',
        'evergreen',
        'everlasting',
        'every',
        'evil',
        'exalted',
        'excellent',
        'excitable',
        'exemplary',
        'exhausted',
        'forthright',
        'fortunate',
        'fragrant',
        'frail',
        'frank',
        'frayed',
        'free',
        'french',
        'frequent',
        'fresh',
        'friendly',
        'frightened',
        'frightening',
        'frigid',
        'gregarious',
        'grim',
        'grimy',
        'gripping',
        'grizzled',
        'gross',
        'grotesque',
        'grouchy',
        'grounded',
        'honest',
        'honorable',
        'honored',
        'hopeful',
        'horrible',
        'hospitable',
        'hot',
        'huge',
        'infatuated',
        'inferior',
        'infinite',
        'informal',
        'innocent',
        'insecure',
        'insidious',
        'insignificant',
        'insistent',
        'instructive',
        'insubstantial',
        'judicious',
        'juicy',
        'jumbo',
        'knotty',
        'knowing',
        'knowledgeable',
        'longterm',
        'loose',
        'lopsided',
        'lost',
        'loud',
        'lovable',
        'lovely',
        'loving',
        'modern',
        'modest',
        'moist',
        'monstrous',
        'monthly',
        'monumental',
        'moral',
        'mortified',
        'motherly',
        'motionless',
        'nocturnal',
        'noisy',
        'nonstop',
        'normal',
        'notable',
        'noted',
        'original',
        'other',
        'our',
        'outgoing',
        'outlandish',
        'outlying',
        'precious',
        'pretty',
        'previous',
        'pricey',
        'prickly',
        'primary',
        'prime',
        'pristine',
        'private',
        'prize',
        'probable',
        'productive',
        'profitable',
        'quickwitted',
        'quiet',
        'quintessential',
        'roasted',
        'robust',
        'rosy',
        'rotating',
        'rotten',
        'rough',
        'round',
        'rowdy',
        'square',
        'squeaky',
        'squiggly',
        'stable',
        'staid',
        'stained',
        'stale',
        'standard',
        'starchy',
        'stark',
        'starry',
        'steel',
        'steep',
        'sticky',
        'stiff',
        'stimulating',
        'stingy',
        'stormy',
        'straight',
        'strange',
        'strict',
        'strident',
        'striking',
        'striped',
        'strong',
        'studious',
        'stunning',
        'tough',
        'tragic',
        'trained',
        'traumatic',
        'treasured',
        'tremendous',
        'tremendous',
        'triangular',
        'tricky',
        'trifling',
        'trim',
        'untrue',
        'unused',
        'unusual',
        'unwelcome',
        'unwieldy',
        'unwilling',
        'unwitting',
        'unwritten',
        'upbeat',
        'violent',
        'virtual',
        'virtuous',
        'visible',
        'winged',
        'wiry',
        'wise',
        'witty',
        'wobbly',
        'woeful',
        'wonderful',
        'wooden',
        'woozy',
        'wordy',
        'worldly',
        'worn',
        'youthful',
        'attached',
        'attentive',
        'attractive',
        'austere',
        'authentic',
        'authorized',
        'automatic',
        'avaricious',
        'average',
        'aware',
        'awesome',
        'awful',
        'awkward',
        'bubbly',
        'bulky',
        'bumpy',
        'buoyant',
        'burdensome',
        'burly',
        'bustling',
        'busy',
        'buttery',
        'buzzing',
        'critical',
        'crooked',
        'crowded',
        'cruel',
        'crushing',
        'cuddly',
        'cultivated',
        'cultured',
        'cumbersome',
        'curly',
        'curvy',
        'cute',
        'cylindrical',
        'doting',
        'double',
        'downright',
        'drab',
        'drafty',
        'dramatic',
        'dreary',
        'droopy',
        'dry',
        'dual',
        'dull',
        'dutiful',
        'excited',
        'exciting',
        'exotic',
        'expensive',
        'experienced',
        'expert',
        'extralarge',
        'extraneous',
        'extrasmall',
        'extroverted',
        'frilly',
        'frivolous',
        'frizzy',
        'front',
        'frosty',
        'frozen',
        'frugal',
        'fruitful',
        'full',
        'fumbling',
        'functional',
        'funny',
        'fussy',
        'fuzzy',
        'growing',
        'growling',
        'grown',
        'grubby',
        'gruesome',
        'grumpy',
        'guilty',
        'gullible',
        'gummy',
        'humble',
        'humiliating',
        'humming',
        'humongous',
        'hungry',
        'hurtful',
        'husky',
        'intelligent',
        'intent',
        'intentional',
        'interesting',
        'internal',
        'international',
        'intrepid',
        'ironclad',
        'irresponsible',
        'irritating',
        'itchy',
        'jumpy',
        'junior',
        'juvenile',
        'known',
        'kooky',
        'kosher',
        'low',
        'loyal',
        'lucky',
        'lumbering',
        'luminous',
        'lumpy',
        'lustrous',
        'luxurious',
        'mountainous',
        'muddy',
        'muffled',
        'multicolored',
        'mundane',
        'murky',
        'mushy',
        'musty',
        'muted',
        'mysterious',
        'noteworthy',
        'novel',
        'noxious',
        'numb',
        'nutritious',
        'nutty',
        'onerlooked',
        'outrageous',
        'outstanding',
        'oval',
        'overcooked',
        'overdue',
        'overjoyed',
        'profuse',
        'proper',
        'proud',
        'prudent',
        'punctual',
        'pungent',
        'puny',
        'pure',
        'purple',
        'pushy',
        'putrid',
        'puzzled',
        'puzzling',
        'quirky',
        'quixotic',
        'quizzical',
        'royal',
        'rubbery',
        'ruddy',
        'rude',
        'rundown',
        'runny',
        'rural',
        'rusty',
        'stupendous',
        'stupid',
        'sturdy',
        'stylish',
        'subdued',
        'submissive',
        'substantial',
        'subtle',
        'suburban',
        'sudden',
        'sugary',
        'sunny',
        'super',
        'superb',
        'superficial',
        'superior',
        'supportive',
        'surefooted',
        'surprised',
        'suspicious',
        'svelte',
        'sweaty',
        'sweet',
        'sweltering',
        'swift',
        'sympathetic',
        'trivial',
        'troubled',
        'trusting',
        'trustworthy',
        'trusty',
        'truthful',
        'tubby',
        'turbulent',
        'twin',
        'upright',
        'upset',
        'urban',
        'usable',
        'used',
        'useful',
        'useless',
        'utilized',
        'utter',
        'vital',
        'vivacious',
        'vivid',
        'voluminous',
        'worried',
        'worrisome',
        'worse',
        'worst',
        'worthless',
        'worthwhile',
        'worthy',
        'wrathful',
        'wretched',
        'writhing',
        'wrong',
        'wry',
        'yummy',
        'TRUE',
        'aliceblue',
        'antiquewhite',
        'aqua',
        'aquamarine',
        'azure',
        'beige',
        'bisque',
        'black',
        'blanchedalmond',
        'blue',
        'blueviolet',
        'brown',
        'burlywood',
        'cadetblue',
        'chartreuse',
        'chocolate',
        'coral',
        'cornflowerblue',
        'cornsilk',
        'crimson',
        'cyan',
        'darkblue',
        'darkcyan',
        'darkgoldenrod',
        'darkgray',
        'darkgreen',
        'darkgrey',
        'darkkhaki',
        'darkmagenta',
        'darkolivegreen',
        'darkorange',
        'darkorchid',
        'darkred',
        'darksalmon',
        'darkseagreen',
        'darkslateblue',
        'darkslategray',
        'darkslategrey',
        'darkturquoise',
        'darkviolet',
        'deeppink',
        'deepskyblue',
        'dimgray',
        'dimgrey',
        'dodgerblue',
        'firebrick',
        'floralwhite',
        'forestgreen',
        'fractal',
        'fuchsia',
        'gainsboro',
        'ghostwhite',
        'gold',
        'goldenrod',
        'gray',
        'green',
        'greenyellow',
        'honeydew',
        'hotpink',
        'indianred',
        'indigo',
        'ivory',
        'khaki',
        'lavender',
        'lavenderblush',
        'lawngreen',
        'lemonchiffon',
        'lightblue',
        'lightcoral',
        'lightcyan',
        'lightgoldenrod',
        'lightgoldenrodyellow',
        'lightgray',
        'lightgreen',
        'lightgrey',
        'lightpink',
        'lightsalmon',
        'lightseagreen',
        'lightskyblue',
        'lightslateblue',
        'lightslategray',
        'lightsteelblue',
        'lightyellow',
        'lime',
        'limegreen',
        'linen',
        'magenta',
        'maroon',
        'mediumaquamarine',
        'mediumblue',
        'mediumforestgreen',
        'mediumgoldenrod',
        'mediumorchid',
        'mediumpurple',
        'mediumseagreen',
        'mediumslateblue',
        'mediumspringgreen',
        'mediumturquoise',
        'mediumvioletred',
        'midnightblue',
        'mintcream',
        'mistyrose',
        'moccasin',
        'navajowhite',
        'navy',
        'navyblue',
        'oldlace',
        'olive',
        'olivedrab',
        'opaque',
        'orange',
        'orangered',
        'orchid',
        'palegoldenrod',
        'palegreen',
        'paleturquoise',
        'palevioletred',
        'papayawhip',
        'peachpuff',
        'peru',
        'pink',
        'plum',
        'powderblue',
        'purple',
        'red',
        'rosybrown',
        'royalblue',
        'saddlebrown',
        'salmon',
        'sandybrown',
        'seagreen',
        'seashell',
        'sienna',
        'silver',
        'skyblue',
        'slateblue',
        'slategray',
        'slategrey',
        'snow',
        'springgreen',
        'steelblue',
        'tan',
        'teal',
        'thistle',
        'tomato',
        'transparent',
        'turquoise',
        'violet',
        'violetred',
        'wheat',
        'white',
        'whitesmoke',
        'yellow',
        'yellowgreen'
    ],
    animals: [
        'aardwolf',
        'abalone',
        'abyssiniancat',
        'abyssiniangroundhornbill',
        'acaciarat',
        'achillestang',
        'acornbarnacle',
        'acornweevil',
        'acornwoodpecker',
        'acouchi',
        'adamsstaghornedbeetle',
        'addax',
        'adder',
        'adeliepenguin',
        'admiralbutterfly',
        'adouri',
        'aegeancat',
        'affenpinscher',
        'afghanhound',
        'africanaugurbuzzard',
        'africanbushviper',
        'africancivet',
        'africanclawedfrog',
        'africanelephant',
        'africanfisheagle',
        'africangoldencat',
        'africangroundhornbill',
        'africanharrierhawk',
        'africanhornbill',
        'africanjacana',
        'africanmolesnake',
        'africanparadiseflycatcher',
        'africanpiedkingfisher',
        'africanporcupine',
        'africanrockpython',
        'africanwildcat',
        'africanwilddog',
        'agama',
        'agouti',
        'aidi',
        'airedale',
        'airedaleterrier',
        'akitainu',
        'alabamamapturtle',
        'alaskajingle',
        'alaskanhusky',
        'alaskankleekai',
        'alaskanmalamute',
        'albacoretuna',
        'albatross',
        'albertosaurus',
        'albino',
        'aldabratortoise',
        'allensbigearedbat',
        'alleycat',
        'alligator',
        'alligatorgar',
        'alligatorsnappingturtle',
        'allosaurus',
        'alpaca',
        'alpinegoat',
        'alpineroadguidetigerbeetle',
        'altiplanochinchillamouse',
        'amazondolphin',
        'amazonparrot',
        'amazontreeboa',
        'amberpenshell',
        'ambushbug',
        'americanalligator',
        'americanavocet',
        'americanbadger',
        'americanbittern',
        'americanblackvulture',
        'americanbobtail',
        'americanbulldog',
        'americancicada',
        'americancrayfish',
        'americancreamdraft',
        'americancrocodile',
        'americancrow',
        'americancurl',
        'americangoldfinch',
        'americanindianhorse',
        'americankestrel',
        'americanlobster',
        'americanmarten',
        'americanpainthorse',
        'americanquarterhorse',
        'americanratsnake',
        'americanredsquirrel',
        'americanriverotter',
        'americanrobin',
        'americansaddlebred',
        'americanshorthair',
        'americantoad',
        'americanwarmblood',
        'americanwigeon',
        'americanwirehair',
        'amethystgemclam',
        'amethystinepython',
        'amethystsunbird',
        'ammonite',
        'amoeba',
        'amphibian',
        'amphiuma',
        'amurminnow',
        'amurratsnake',
        'amurstarfish',
        'anaconda',
        'anchovy',
        'andalusianhorse',
        'andeancat',
        'andeancockoftherock',
        'andeancondor',
        'anemone',
        'anemonecrab',
        'anemoneshrimp',
        'angelfish',
        'angelwingmussel',
        'anglerfish',
        'angora',
        'angwantibo',
        'anhinga',
        'ankole',
        'ankolewatusi',
        'annashummingbird',
        'annelid',
        'annelida',
        'anole',
        'anophelesmosquito',
        'ant',
        'antarcticfurseal',
        'antarcticgiantpetrel',
        'antbear',
        'anteater',
        'antelope',
        'antelopegroundsquirrel',
        'antipodesgreenparakeet',
        'antlion',
        'anura',
        'aoudad',
        'apatosaur',
        'ape',
        'aphid',
        'apisdorsatalaboriosa',
        'aplomadofalcon',
        'appaloosa',
        'aquaticleech',
        'arabianhorse',
        'arabianoryx',
        'arabianwildcat',
        'aracari',
        'arachnid',
        'arawana',
        'archaeocete',
        'archaeopteryx',
        'archerfish',
        'arcticduck',
        'arcticfox',
        'arctichare',
        'arcticseal',
        'arcticwolf',
        'argali',
        'argentinehornedfrog',
        'argentineruddyduck',
        'argusfish',
        'arieltoucan',
        'arizonaalligatorlizard',
        'arkshell',
        'armadillo',
        'armedcrab',
        'armednylonshrimp',
        'armyant',
        'armyworm',
        'arrowana',
        'arrowcrab',
        'arrowworm',
        'arthropods',
        'aruanas',
        'asianconstablebutterfly',
        'asiandamselfly',
        'asianelephant',
        'asianlion',
        'asianpiedstarling',
        'asianporcupine',
        'asiansmallclawedotter',
        'asiantrumpetfish',
        'asianwaterbuffalo',
        'asiaticgreaterfreshwaterclam',
        'asiaticlesserfreshwaterclam',
        'asiaticmouflon',
        'asiaticwildass',
        'asp',
        'ass',
        'assassinbug',
        'astarte',
        'astrangiacoral',
        'atlanticblackgoby',
        'atlanticbluetang',
        'atlanticridleyturtle',
        'atlanticsharpnosepuffer',
        'atlanticspadefish',
        'atlasmoth',
        'attwatersprairiechicken',
        'auk',
        'auklet',
        'aurochs',
        'australiancattledog',
        'australiancurlew',
        'australianfreshwatercrocodile',
        'australianfurseal',
        'australiankelpie',
        'australiankestrel',
        'australianshelduck',
        'australiansilkyterrier',
        'austrianpinscher',
        'avians',
        'avocet',
        'axisdeer',
        'axolotl',
        'ayeaye',
        'aztecant',
        'azurevase',
        'azurevasesponge',
        'azurewingedmagpie',
        'babirusa',
        'baboon',
        'backswimmer',
        'bactrian',
        'badger',
        'bagworm',
        'baiji',
        'baldeagle',
        'baleenwhale',
        'balloonfish',
        'ballpython',
        'bandicoot',
        'bangeltiger',
        'bantamrooster',
        'banteng',
        'barasinga',
        'barasingha',
        'barb',
        'barbet',
        'barebirdbat',
        'barnacle',
        'barnowl',
        'barnswallow',
        'barracuda',
        'basenji',
        'basil',
        'basilisk',
        'bass',
        'bassethound',
        'bat',
        'bats',
        'beagle',
        'bear',
        'beardedcollie',
        'beardeddragon',
        'beauceron',
        'beaver',
        'bedbug',
        'bedlingtonterrier',
        'bee',
        'beetle',
        'bellfrog',
        'bellsnake',
        'belugawhale',
        'bengaltiger',
        'bergerpicard',
        'bernesemountaindog',
        'betafish',
        'bettong',
        'bichonfrise',
        'bighorn',
        'bighornedsheep',
        'bighornsheep',
        'bigmouthbass',
        'bilby',
        'billygoat',
        'binturong',
        'bird',
        'birdofparadise',
        'bison',
        'bittern',
        'blackandtancoonhound',
        'blackbear',
        'blackbird',
        'blackbuck',
        'blackcrappie',
        'blackfish',
        'blackfly',
        'blackfootedferret',
        'blacklab',
        'blacklemur',
        'blackmamba',
        'blacknorwegianelkhound',
        'blackpanther',
        'blackrhino',
        'blackrussianterrier',
        'blackwidowspider',
        'blesbok',
        'blobfish',
        'blowfish',
        'blueandgoldmackaw',
        'bluebird',
        'bluebottle',
        'bluebottlejellyfish',
        'bluebreastedkookaburra',
        'bluefintuna',
        'bluefish',
        'bluegill',
        'bluejay',
        'bluemorphobutterfly',
        'blueshark',
        'bluet',
        'bluetickcoonhound',
        'bluetonguelizard',
        'bluewhale',
        'boa',
        'boaconstrictor',
        'boar',
        'bobcat',
        'bobolink',
        'bobwhite',
        'boilweevil',
        'bongo',
        'bonobo',
        'booby',
        'bordercollie',
        'borderterrier',
        'borer',
        'borzoi',
        'boto',
        'boubou',
        'boutu',
        'bovine',
        'brahmanbull',
        'brahmancow',
        'brant',
        'bream',
        'brocketdeer',
        'bronco',
        'brontosaurus',
        'brownbear',
        'brownbutterfly',
        'bubblefish',
        'buck',
        'buckeyebutterfly',
        'budgie',
        'bufeo',
        'buffalo',
        'bufflehead',
        'bug',
        'bull',
        'bullfrog',
        'bullmastiff',
        'bumblebee',
        'bunny',
        'bunting',
        'burro',
        'bushbaby',
        'bushsqueaker',
        'bustard',
        'butterfly',
        'buzzard',
        'caecilian',
        'caiman',
        'caimanlizard',
        'calf',
        'camel',
        'canadagoose',
        'canary',
        'canine',
        'canvasback',
        'capeghostfrog',
        'capybara',
        'caracal',
        'cardinal',
        'caribou',
        'carp',
        'carpenterant',
        'cassowary',
        'cat',
        'catbird',
        'caterpillar',
        'catfish',
        'cats',
        'cattle',
        'caudata',
        'cavy',
        'centipede',
        'cero',
        'chafer',
        'chameleon',
        'chamois',
        'chanticleer',
        'cheetah',
        'chevrotain',
        'chick',
        'chickadee',
        'chicken',
        'chihuahua',
        'chimneyswift',
        'chimpanzee',
        'chinchilla',
        'chinesecrocodilelizard',
        'chipmunk',
        'chital',
        'chrysalis',
        'chrysomelid',
        'chuckwalla',
        'chupacabra',
        'cicada',
        'cirriped',
        'civet',
        'clam',
        'cleanerwrasse',
        'clingfish',
        'clownanemonefish',
        'clumber',
        'coati',
        'cob',
        'cobra',
        'cock',
        'cockatiel',
        'cockatoo',
        'cockerspaniel',
        'cockroach',
        'cod',
        'coelacanth',
        'collardlizard',
        'collie',
        'colt',
        'comet',
        'commabutterfly',
        'commongonolek',
        'conch',
        'condor',
        'coney',
        'conure',
        'cony',
        'coot',
        'cooter',
        'copepod',
        'copperbutterfly',
        'copperhead',
        'coqui',
        'coral',
        'cormorant',
        'cornsnake',
        'corydorascatfish',
        'cottonmouth',
        'cottontail',
        'cougar',
        'cow',
        'cowbird',
        'cowrie',
        'coyote',
        'coypu',
        'crab',
        'crane',
        'cranefly',
        'crayfish',
        'creature',
        'cricket',
        'crocodile',
        'crocodileskink',
        'crossbill',
        'crow',
        'crownofthornsstarfish',
        'crustacean',
        'cub',
        'cuckoo',
        'cur',
        'curassow',
        'curlew',
        'cuscus',
        'cusimanse',
        'cuttlefish',
        'cutworm',
        'cygnet',
        'dachshund',
        'daddylonglegs',
        'dairycow',
        'dalmatian',
        'damselfly',
        'danishswedishfarmdog',
        'darklingbeetle',
        'dartfrog',
        'darwinsfox',
        'dassie',
        'dassierat',
        'davidstiger',
        'deer',
        'deermouse',
        'degu',
        'degus',
        'deinonychus',
        'desertpupfish',
        'devilfish',
        'deviltasmanian',
        'diamondbackrattlesnake',
        'dikdik',
        'dikkops',
        'dingo',
        'dinosaur',
        'diplodocus',
        'dipper',
        'discus',
        'dobermanpinscher',
        'doctorfish',
        'dodo',
        'dodobird',
        'doe',
        'dog',
        'dogfish',
        'dogwoodclubgall',
        'dogwoodtwigborer',
        'dolphin',
        'donkey',
        'dorado',
        'dore',
        'dorking',
        'dormouse',
        'dotterel',
        'douglasfirbarkbeetle',
        'dove',
        'dowitcher',
        'drafthorse',
        'dragon',
        'dragonfly',
        'drake',
        'drever',
        'dromaeosaur',
        'dromedary',
        'drongo',
        'duck',
        'duckbillcat',
        'duckbillplatypus',
        'duckling',
        'dugong',
        'duiker',
        'dungbeetle',
        'dungenesscrab',
        'dunlin',
        'dunnart',
        'dutchshepherddog',
        'dutchsmoushond',
        'dwarfmongoose',
        'dwarfrabbit',
        'eagle',
        'earthworm',
        'earwig',
        'easternglasslizard',
        'easternnewt',
        'easteuropeanshepherd',
        'eastrussiancoursinghounds',
        'eastsiberianlaika',
        'echidna',
        'eel',
        'eelelephant',
        'eeve',
        'eft',
        'egg',
        'egret',
        'eider',
        'eidolonhelvum',
        'ekaltadeta',
        'eland',
        'electriceel',
        'elephant',
        'elephantbeetle',
        'elephantseal',
        'elk',
        'elkhound',
        'elver',
        'emeraldtreeskink',
        'emperorpenguin',
        'emperorshrimp',
        'emu',
        'englishpointer',
        'englishsetter',
        'equestrian',
        'equine',
        'erin',
        'ermine',
        'erne',
        'eskimodog',
        'esok',
        'estuarinecrocodile',
        'ethiopianwolf',
        'europeanfiresalamander',
        'europeanpolecat',
        'ewe',
        'eyas',
        'eyelashpitviper',
        'eyra',
        'fairybluebird',
        'fairyfly',
        'falcon',
        'fallowdeer',
        'fantail',
        'fanworms',
        'fattaileddunnart',
        'fawn',
        'feline',
        'fennecfox',
        'ferret',
        'fiddlercrab',
        'fieldmouse',
        'fieldspaniel',
        'finch',
        'finnishspitz',
        'finwhale',
        'fireant',
        'firebelliedtoad',
        'firecrest',
        'firefly',
        'fish',
        'fishingcat',
        'flamingo',
        'flatcoatretriever',
        'flatfish',
        'flea',
        'flee',
        'flicker',
        'flickertailsquirrel',
        'flies',
        'flounder',
        'fluke',
        'fly',
        'flycatcher',
        'flyingfish',
        'flyingfox',
        'flyinglemur',
        'flyingsquirrel',
        'foal',
        'fossa',
        'fowl',
        'fox',
        'foxhound',
        'foxterrier',
        'frenchbulldog',
        'freshwatereel',
        'frigatebird',
        'frilledlizard',
        'frillneckedlizard',
        'fritillarybutterfly',
        'frog',
        'frogmouth',
        'fruitbat',
        'fruitfly',
        'fugu',
        'fulmar',
        'funnelweaverspider',
        'furseal',
        'gadwall',
        'galago',
        'galah',
        'galapagosalbatross',
        'galapagosdove',
        'galapagoshawk',
        'galapagosmockingbird',
        'galapagospenguin',
        'galapagossealion',
        'galapagostortoise',
        'gallinule',
        'gallowaycow',
        'gander',
        'gangesdolphin',
        'gannet',
        'gar',
        'gardensnake',
        'garpike',
        'gartersnake',
        'gaur',
        'gavial',
        'gazelle',
        'gecko',
        'geese',
        'gelada',
        'gelding',
        'gemsbok',
        'gemsbuck',
        'genet',
        'gentoopenguin',
        'gerbil',
        'gerenuk',
        'germanpinscher',
        'germanshepherd',
        'germanshorthairedpointer',
        'germanspaniel',
        'germanspitz',
        'germanwirehairedpointer',
        'gharial',
        'ghostshrimp',
        'giantschnauzer',
        'gibbon',
        'gilamonster',
        'giraffe',
        'glassfrog',
        'globefish',
        'glowworm',
        'gnat',
        'gnatcatcher',
        'gnu',
        'goa',
        'goat',
        'godwit',
        'goitered',
        'goldeneye',
        'goldenmantledgroundsquirrel',
        'goldenretriever',
        'goldfinch',
        'goldfish',
        'gonolek',
        'goose',
        'goosefish',
        'gopher',
        'goral',
        'gordonsetter',
        'gorilla',
        'goshawk',
        'gosling',
        'gossamerwingedbutterfly',
        'gourami',
        'grackle',
        'grasshopper',
        'grassspider',
        'grayfox',
        'grayling',
        'grayreefshark',
        'graysquirrel',
        'graywolf',
        'greatargus',
        'greatdane',
        'greathornedowl',
        'greatwhiteshark',
        'grebe',
        'greendarnerdragonfly',
        'greyhounddog',
        'grison',
        'grizzlybear',
        'grosbeak',
        'groundbeetle',
        'groundhog',
        'grouper',
        'grouse',
        'grub',
        'grunion',
        'guanaco',
        'guernseycow',
        'guillemot',
        'guineafowl',
        'guineapig',
        'gull',
        'guppy',
        'gypsymoth',
        'gyrfalcon',
        'hackee',
        'haddock',
        'hadrosaurus',
        'hagfish',
        'hairstreak',
        'hairstreakbutterfly',
        'hake',
        'halcyon',
        'halibut',
        'halicore',
        'hamadryad',
        'hamadryas',
        'hammerheadbird',
        'hammerheadshark',
        'hammerkop',
        'hamster',
        'hanumanmonkey',
        'hapuka',
        'hapuku',
        'harborporpoise',
        'harborseal',
        'hare',
        'harlequinbug',
        'harpseal',
        'harpyeagle',
        'harrier',
        'harrierhawk',
        'hart',
        'hartebeest',
        'harvestmen',
        'harvestmouse',
        'hatchetfish',
        'hawaiianmonkseal',
        'hawk',
        'hectorsdolphin',
        'hedgehog',
        'heifer',
        'hellbender',
        'hen',
        'herald',
        'herculesbeetle',
        'hermitcrab',
        'heron',
        'herring',
        'heterodontosaurus',
        'hind',
        'hippopotamus',
        'hoatzin',
        'hochstettersfrog',
        'hog',
        'hogget',
        'hoiho',
        'hoki',
        'homalocephale',
        'honeybadger',
        'honeybee',
        'honeycreeper',
        'honeyeater',
        'hookersealion',
        'hoopoe',
        'hornbill',
        'hornedtoad',
        'hornedviper',
        'hornet',
        'hornshark',
        'horse',
        'horsechestnutleafminer',
        'horsefly',
        'horsemouse',
        'horseshoebat',
        'horseshoecrab',
        'hound',
        'housefly',
        'hoverfly',
        'howlermonkey',
        'huemul',
        'huia',
        'human',
        'hummingbird',
        'humpbackwhale',
        'husky',
        'hydatidtapeworm',
        'hydra',
        'hyena',
        'hylaeosaurus',
        'hypacrosaurus',
        'hypsilophodon',
        'hyracotherium',
        'hyrax',
        'iaerismetalmark',
        'ibadanmalimbe',
        'iberianbarbel',
        'iberianchiffchaff',
        'iberianemeraldlizard',
        'iberianlynx',
        'iberianmidwifetoad',
        'iberianmole',
        'iberiannase',
        'ibex',
        'ibis',
        'ibisbill',
        'ibizanhound',
        'iceblueredtopzebra',
        'icefish',
        'icelandgull',
        'icelandichorse',
        'icelandicsheepdog',
        'ichidna',
        'ichneumonfly',
        'ichthyosaurs',
        'ichthyostega',
        'icterinewarbler',
        'iggypops',
        'iguana',
        'iguanodon',
        'illadopsis',
        'ilsamochadegu',
        'imago',
        'impala',
        'imperatorangel',
        'imperialeagle',
        'incatern',
        'inchworm',
        'indianabat',
        'indiancow',
        'indianelephant',
        'indianglassfish',
        'indianhare',
        'indianjackal',
        'indianpalmsquirrel',
        'indianpangolin',
        'indianrhinoceros',
        'indianringneckparakeet',
        'indianrockpython',
        'indianskimmer',
        'indianspinyloach',
        'indigobunting',
        'indigowingedparrot',
        'indochinahogdeer',
        'indochinesetiger',
        'indri',
        'indusriverdolphin',
        'inexpectatumpleco',
        'inganue',
        'insect',
        'intermediateegret',
        'invisiblerail',
        'iraniangroundjay',
        'iridescentshark',
        'iriomotecat',
        'irishdraughthorse',
        'irishredandwhitesetter',
        'irishsetter',
        'irishterrier',
        'irishwaterspaniel',
        'irishwolfhound',
        'irrawaddydolphin',
        'irukandjijellyfish',
        'isabellineshrike',
        'isabellinewheatear',
        'islandcanary',
        'islandwhistler',
        'isopod',
        'italianbrownbear',
        'italiangreyhound',
        'ivorybackedwoodswallow',
        'ivorybilledwoodpecker',
        'ivorygull',
        'izuthrush',
        'jabiru',
        'jackal',
        'jackrabbit',
        'jaeger',
        'jaguar',
        'jaguarundi',
        'janenschia',
        'japanesebeetle',
        'javalina',
        'jay',
        'jellyfish',
        'jenny',
        'jerboa',
        'joey',
        'johndory',
        'juliabutterfly',
        'jumpingbean',
        'junco',
        'junebug',
        'kagu',
        'kakapo',
        'kakarikis',
        'kangaroo',
        'karakul',
        'katydid',
        'kawala',
        'kentrosaurus',
        'kestrel',
        'kid',
        'killdeer',
        'killerwhale',
        'killifish',
        'kingbird',
        'kingfisher',
        'kinglet',
        'kingsnake',
        'kinkajou',
        'kiskadee',
        'kissingbug',
        'kite',
        'kitfox',
        'kitten',
        'kittiwake',
        'kitty',
        'kiwi',
        'koala',
        'koalabear',
        'kob',
        'kodiakbear',
        'koi',
        'komododragon',
        'koodoo',
        'kookaburra',
        'kouprey',
        'krill',
        'kronosaurus',
        'kudu',
        'kusimanse',
        'labradorretriever',
        'lacewing',
        'ladybird',
        'ladybug',
        'lamb',
        'lamprey',
        'langur',
        'lark',
        'larva',
        'laughingthrush',
        'lcont',
        'leafbird',
        'leafcutterant',
        'leafhopper',
        'leafwing',
        'leech',
        'lemming',
        'lemur',
        'leonberger',
        'leopard',
        'leopardseal',
        'leveret',
        'lhasaapso',
        'lice',
        'liger',
        'lightningbug',
        'limpet',
        'limpkin',
        'ling',
        'lion',
        'lionfish',
        'littlenightmonkeys',
        'lizard',
        'llama',
        'lobo',
        'lobster',
        'locust',
        'loggerheadturtle',
        'longhorn',
        'longhornbeetle',
        'longspur',
        'loon',
        'lorikeet',
        'loris',
        'louse',
        'lovebird',
        'lowchen',
        'lunamoth',
        'lungfish',
        'lynx',
        'lynxÂ ',
        'macaque',
        'macaw',
        'macropod',
        'madagascarhissingroach',
        'maggot',
        'magpie',
        'maiasaura',
        'majungatholus',
        'malamute',
        'mallard',
        'maltesedog',
        'mamba',
        'mamenchisaurus',
        'mammal',
        'mammoth',
        'manatee',
        'mandrill',
        'mangabey',
        'manta',
        'mantaray',
        'mantid',
        'mantis',
        'mantisray',
        'manxcat',
        'mara',
        'marabou',
        'marbledmurrelet',
        'mare',
        'marlin',
        'marmoset',
        'marmot',
        'marten',
        'martin',
        'massasauga',
        'massospondylus',
        'mastiff',
        'mastodon',
        'mayfly',
        'meadowhawk',
        'meadowlark',
        'mealworm',
        'meerkat',
        'megalosaurus',
        'megalotomusquinquespinosus',
        'megaraptor',
        'merganser',
        'merlin',
        'metalmarkbutterfly',
        'metamorphosis',
        'mice',
        'microvenator',
        'midge',
        'milksnake',
        'milkweedbug',
        'millipede',
        'minibeast',
        'mink',
        'minnow',
        'mite',
        'moa',
        'mockingbird',
        'mole',
        'mollies',
        'mollusk',
        'molly',
        'monarch',
        'mongoose',
        'mongrel',
        'monkey',
        'monkfishÂ ',
        'monoclonius',
        'montanoceratops',
        'moorhen',
        'moose',
        'moray',
        'morayeel',
        'morpho',
        'mosasaur',
        'mosquito',
        'moth',
        'motmot',
        'mouflon',
        'mountaincat',
        'mountainlion',
        'mouse',
        'mouse/mice',
        'mousebird',
        'mudpuppy',
        'mule',
        'mullet',
        'muntjac',
        'murrelet',
        'muskox',
        'muskrat',
        'mussaurus',
        'mussel',
        'mustang',
        'mutt',
        'myna',
        'mynah',
        'myotisÂ ',
        'nabarlek',
        'nag',
        'naga',
        'nagapies',
        'nakedmolerat',
        'nandine',
        'nandoo',
        'nandu',
        'narwhal',
        'narwhale',
        'natterjacktoad',
        'nauplius',
        'nautilus',
        'needlefish',
        'needletail',
        'nematode',
        'nene',
        'neonblueguppy',
        'neonbluehermitcrab',
        'neondwarfgourami',
        'neonrainbowfish',
        'neonredguppy',
        'neontetra',
        'nerka',
        'nettlefish',
        'newfoundlanddog',
        'newt',
        'newtnutria',
        'nightcrawler',
        'nighthawk',
        'nightheron',
        'nightingale',
        'nightjar',
        'nijssenissdwarfchihlid',
        'nilgai',
        'ninebandedarmadillo',
        'noctilio',
        'noctule',
        'noddy',
        'noolbenger',
        'northerncardinals',
        'northernelephantseal',
        'northernflyingsquirrel',
        'northernfurseal',
        'northernhairynosedwombat',
        'northernpike',
        'northernseahorse',
        'northernspottedowl',
        'norwaylobster',
        'norwayrat',
        'nubiangoat',
        'nudibranch',
        'numbat',
        'nurseshark',
        'nutcracker',
        'nuthatch',
        'nutria',
        'nyala',
        'nymph',
        'ocelot',
        'octopus',
        'okapi',
        'olingo',
        'olm',
        'opossum',
        'orangutan',
        'orca',
        'oregonsilverspotbutterfly',
        'oriole',
        'oropendola',
        'oropendula',
        'oryx',
        'osprey',
        'ostracod',
        'ostrich',
        'otter',
        'ovenbird',
        'owl',
        'owlbutterfly',
        'ox',
        'oxen',
        'oxpecker',
        'oyster',
        'ozarkbigearedbat',
        'pacaÂ ',
        'pachyderm',
        'pacificparrotlet',
        'paddlefish',
        'paintedladybutterfly',
        'panda',
        'pangolin',
        'panther',
        'paperwasp',
        'papillon',
        'parakeet',
        'parrot',
        'partridge',
        'peacock',
        'peafowl',
        'peccary',
        'pekingese',
        'pelican',
        'pelicinuspetrel',
        'penguin',
        'perch',
        'peregrinefalcon',
        'pewee',
        'phalarope',
        'pharaohhound',
        'pheasant',
        'phoebe',
        'phoenix',
        'pig',
        'pigeon',
        'piglet',
        'pika',
        'pike',
        'pikeperchÂ ',
        'pilchard',
        'pinemarten',
        'pinkriverdolphin',
        'pinniped',
        'pintail',
        'pipistrelle',
        'pipit',
        'piranha',
        'pitbull',
        'pittabird',
        'plainsqueaker',
        'plankton',
        'planthopper',
        'platypus',
        'plover',
        'polarbear',
        'polecat',
        'polliwog',
        'polyp',
        'polyturator',
        'pomeranian',
        'pondskater',
        'pony',
        'pooch',
        'poodle',
        'porcupine',
        'porpoise',
        'portuguesemanofwar',
        'possum',
        'prairiedog',
        'prawn',
        'prayingmantid',
        'prayingmantis',
        'primate',
        'pronghorn',
        'pseudodynerusquadrisectus',
        'ptarmigan',
        'pterodactyls',
        'pterosaurs',
        'puffer',
        'pufferfish',
        'puffin',
        'pug',
        'pullet',
        'puma',
        'pupa',
        'pupfish',
        'puppy',
        'purplemarten',
        'pussycat',
        'pygmy',
        'python',
        'quadrisectus',
        'quagga',
        'quahog',
        'quail',
        'queenalexandrasbirdwing',
        'queenalexandrasbirdwingbutterfly',
        'queenant',
        'queenbee',
        'queenconch',
        'queenslandgrouper',
        'queenslandheeler',
        'queensnake',
        'quelea',
        'quetzal',
        'quetzalcoatlus',
        'quillback',
        'quinquespinosus',
        'quokka',
        'quoll',
        'rabbit',
        'rabidsquirrel',
        'raccoon',
        'racer',
        'racerunner',
        'ragfish',
        'rail',
        'rainbowfish',
        'rainbowlorikeet',
        'rainbowtrout',
        'ram',
        'raptors',
        'rasbora',
        'rat',
        'ratfish',
        'rattail',
        'rattlesnake',
        'raven',
        'ray',
        'redhead',
        'redheadedwoodpecker',
        'redpoll',
        'redstart',
        'redtailedhawk',
        'reindeer',
        'reptile',
        'reynard',
        'rhea',
        'rhesusmonkey',
        'rhino',
        'rhinoceros',
        'rhinocerosbeetle',
        'rhodesianridgeback',
        'ringtailedlemur',
        'ringworm',
        'riograndeescuerzo',
        'roach',
        'roadrunner',
        'roan',
        'robberfly',
        'robin',
        'rockrat',
        'rodent',
        'roebuck',
        'roller',
        'rook',
        'rooster',
        'rottweiler',
        'sable',
        'sableantelope',
        'sablefishÂ ',
        'saiga',
        'sakimonkey',
        'salamander',
        'salmon',
        'saltwatercrocodile',
        'sambar',
        'samoyeddog',
        'sandbarshark',
        'sanddollar',
        'sanderling',
        'sandpiper',
        'sapsucker',
        'sardine',
        'sawfish',
        'scallop',
        'scarab',
        'scarletibis',
        'scaup',
        'schapendoes',
        'schipperke',
        'schnauzer',
        'scorpion',
        'scoter',
        'screamer',
        'seabird',
        'seagull',
        'seahog',
        'seahorse',
        'seal',
        'sealion',
        'seamonkey',
        'seaslug',
        'seaurchin',
        'senegalpython',
        'seriema',
        'serpent',
        'serval',
        'shark',
        'shearwater',
        'sheep',
        'sheldrake',
        'shelduck',
        'shibainu',
        'shihtzu',
        'shorebird',
        'shoveler',
        'shrew',
        'shrike',
        'shrimp',
        'siamang',
        'siamesecat',
        'siberiantiger',
        'sidewinder',
        'sifaka',
        'silkworm',
        'silverfish',
        'silverfox',
        'silversidefish',
        'siskin',
        'skimmer',
        'skink',
        'skipper',
        'skua',
        'skunk',
        'skylark',
        'sloth',
        'slothbear',
        'slug',
        'smelts',
        'smew',
        'snail',
        'snake',
        'snipe',
        'snoutbutterfly',
        'snowdog',
        'snowgeese',
        'snowleopard',
        'snowmonkey',
        'snowyowl',
        'sockeyesalmon',
        'solenodon',
        'solitaire',
        'songbird',
        'sora',
        'southernhairnosedwombat',
        'sow',
        'spadefoot',
        'sparrow',
        'sphinx',
        'spider',
        'spidermonkey',
        'spiketail',
        'spittlebug',
        'sponge',
        'spoonbill',
        'spotteddolphin',
        'spreadwing',
        'springbok',
        'springpeeper',
        'springtail',
        'squab',
        'squamata',
        'squeaker',
        'squid',
        'squirrel',
        'stag',
        'stagbeetle',
        'stallion',
        'starfish',
        'starling',
        'steed',
        'steer',
        'stegosaurus',
        'stickinsect',
        'stickleback',
        'stilt',
        'stingray',
        'stinkbug',
        'stinkpot',
        'stoat',
        'stonefly',
        'stork',
        'stud',
        'sturgeon',
        'sugarglider',
        'sulphurbutterfly',
        'sunbear',
        'sunbittern',
        'sunfish',
        'swallow',
        'swallowtail',
        'swallowtailbutterfly',
        'swan',
        'swellfish',
        'swift',
        'swordfish',
        'tadpole',
        'tahr',
        'takin',
        'tamarin',
        'tanager',
        'tapaculo',
        'tapeworm',
        'tapir',
        'tarantula',
        'tarpan',
        'tarsier',
        'taruca',
        'tasmaniandevil',
        'tasmaniantiger',
        'tattler',
        'tayra',
        'teal',
        'tegus',
        'teledu',
        'tench',
        'tenrec',
        'termite',
        'tern',
        'terrapin',
        'terrier',
        'thoroughbred',
        'thrasher',
        'thrip',
        'thrush',
        'thunderbird',
        'thylacine',
        'tick',
        'tiger',
        'tigerbeetle',
        'tigermoth',
        'tigershark',
        'tilefish',
        'tinamou',
        'titi',
        'titmouse',
        'toad',
        'toadfish',
        'tomtitÂ ',
        'topi',
        'tortoise',
        'toucan',
        'towhee',
        'tragopan',
        'treecreeper',
        'trex',
        'triceratops',
        'trogon',
        'trout',
        'trumpeterbird',
        'trumpeterswan',
        'tsetsefly',
        'tuatara',
        'tuna',
        'turaco',
        'turkey',
        'turnstone',
        'turtle',
        'turtledove',
        'uakari',
        'ugandakob',
        'uintagroundsquirrel',
        'ulyssesbutterfly',
        'umbrellabird',
        'umbrette',
        'unau',
        'ungulate',
        'unicorn',
        'upupa',
        'urchin',
        'urial',
        'uromastyxmaliensis',
        'uromastyxspinipes',
        'urson',
        'urubu',
        'urus',
        'urutu',
        'urva',
        'utahprairiedog',
        'vampirebat',
        'vaquita',
        'veery',
        'velociraptor',
        'velvetcrab',
        'velvetworm',
        'venomoussnake',
        'verdin',
        'vervet',
        'viceroybutterfly',
        'vicuna',
        'viper',
        'viperfish',
        'vipersquid',
        'vireo',
        'virginiaopossum',
        'vixen',
        'vole',
        'volvox',
        'vulpesvelox',
        'vulpesvulpes',
        'vulture',
        'walkingstick',
        'wallaby',
        'wallaroo',
        'walleye',
        'walrus',
        'warbler',
        'warthog',
        'wasp',
        'waterboatman',
        'waterbuck',
        'waterbuffalo',
        'waterbug',
        'waterdogs',
        'waterdragons',
        'watermoccasin',
        'waterstrider',
        'waterthrush',
        'wattlebird',
        'watussi',
        'waxwing',
        'weasel',
        'weaverbird',
        'weevil',
        'westafricanantelope',
        'whale',
        'whapuku',
        'whelp',
        'whimbrel',
        'whippet',
        'whippoorwill',
        'whitebeakeddolphin',
        'whiteeye',
        'whitepelican',
        'whiterhino',
        'whitetaileddeer',
        'whitetippedreefshark',
        'whooper',
        'whoopingcrane',
        'widgeon',
        'widowspider',
        'wildcat',
        'wildebeast',
        'wildebeest',
        'willet',
        'wireworm',
        'wisent',
        'wobbegongshark',
        'wolf',
        'wolfspider',
        'wolverine',
        'wombat',
        'woodborer',
        'woodchuck',
        'woodcock',
        'woodnymphbutterfly',
        'woodpecker',
        'woodstorks',
        'woollybearcaterpillar',
        'worm',
        'wrasse',
        'wreckfish',
        'wren',
        'wrenchbird',
        'wryneck',
        'wuerhosaurus',
        'wyvern',
        'xanclomys',
        'xanthareel',
        'xantus',
        'xantusmurrelet',
        'xeme',
        'xenarthra',
        'xenoposeidon',
        'xenops',
        'xenopterygii',
        'xenopus',
        'xenotarsosaurus',
        'xenurine',
        'xenurusunicinctus',
        'xerus',
        'xiaosaurus',
        'xinjiangovenator',
        'xiphias',
        'xiphiasgladius',
        'xiphosuran',
        'xoloitzcuintli',
        'xoni',
        'xrayfish',
        'xraytetra',
        'xuanhanosaurus',
        'xuanhuaceratops',
        'xuanhuasaurus',
        'yaffle',
        'yak',
        'yapok',
        'yardant',
        'yearling',
        'yellowbelliedmarmot',
        'yellowbellylizard',
        'yellowhammer',
        'yellowjacket',
        'yellowlegs',
        'yellowthroat',
        'yellowwhitebutterfly',
        'yeti',
        'ynambu',
        'yorkshireterrier',
        'yosemitetoad',
        'yucker',
        'zander',
        'zanzibardaygecko',
        'zebra',
        'zebradove',
        'zebrafinch',
        'zebrafish',
        'zebralongwingbutterfly',
        'zebraswallowtailbutterfly',
        'zebratailedlizard',
        'zebu',
        'zenaida',
        'zeren',
        'zethusspinipes',
        'zethuswasp',
        'zigzagsalamander',
        'zonetailedpigeon',
        'zooplankton',
        'zopilote',
        'zorilla'
    ]
};


/***/ }),

/***/ "./lib/src/utils.ts":
/*!**************************!*\
  !*** ./lib/src/utils.ts ***!
  \**************************/
/*! exports provided: keys, assign, AssertionError, assert, last */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionError", function() { return AssertionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/**
 * An alternative, stricter typed version of `Object.keys`.
 *
 * @example
 * const obj = { a: 0, b: 1 }
 * Object.keys(obj) // string[]
 * keys(obj) // "a" | "b"
 */
function keys(object) {
    return Object.keys(object);
}
/**
 * An alternative to `Object.assign`,
 * which asserts that the properties are added to the type.
 *
 * @example
 * const obj = { a: 0, b: 1}
 * assign(obj, { c: 2 }) // Typescript now knows that c is available.
 */
function assign(target, source) {
    Object.assign(target, source);
}
/**
 * Error class for assertion errors.
 */
class AssertionError extends Error {
}
/**
 * Asserts that a condition is true.
 * Any code after this assertion will consider the condition to be true.
 * See https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 *
 * @example
 * // Before, 'value' is of an unknown type.
 * assert(typeof value === 'string')
 * // After, 'value' is known to be a string.
 */
function assert(condition, message) {
    if (!condition) {
        throw new AssertionError(message);
    }
}
/**
 * Returns the last element of an array.
 */
function last(array) {
    return array[array.length - 1];
}


/***/ }),

/***/ "./lib/src/weightRandom.ts":
/*!*********************************!*\
  !*** ./lib/src/weightRandom.ts ***!
  \*********************************/
/*! exports provided: weightRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weightRandom", function() { return weightRandom; });
/* harmony import */ var _randomFloat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomFloat */ "./lib/src/randomFloat.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/src/utils.ts");


/**
 * @param specs Object containing elements as properties and their weight as value
 */
function weightRandom(specs) {
    let totalWeight = 0;
    for (const prop of Object(_utils__WEBPACK_IMPORTED_MODULE_1__["keys"])(specs)) {
        totalWeight += specs[prop];
    }
    const value = Object(_randomFloat__WEBPACK_IMPORTED_MODULE_0__["randomFloat"])(1);
    let sum = 0;
    for (const prop of Object(_utils__WEBPACK_IMPORTED_MODULE_1__["keys"])(specs)) {
        sum += specs[prop] / totalWeight;
        if (value <= sum)
            return prop;
    }
}


/***/ }),

/***/ "./lib/src/weightedRandomFetcher.ts":
/*!******************************************!*\
  !*** ./lib/src/weightedRandomFetcher.ts ***!
  \******************************************/
/*! exports provided: weightedRandomFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weightedRandomFetcher", function() { return weightedRandomFetcher; });
/* harmony import */ var _randomFloat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomFloat */ "./lib/src/randomFloat.ts");

/**
 * @param town Needed because everything needs town to evaluate
 *
 * @param args The object containing the objects that you're drawing from
 *
 * @param obj The optional npc, building, or whatever that is needed for functions.
 *
 * @param exclusionFunction The optional global exclusion testing function;
 * this is for things like pulling just the paper type objects from plothooks.
 * Saves on LoC. Leave exclusionFunction blank if everything in your object is
 * always going to be allowed.
 *
 * @param output What should be outputted at the end. Set to 'object' to return the whole object.
 * defaultProbability is the optional default unit. You won't usually need to supply this.
 */
const weightedRandomFetcher = (town, args, obj, exclusionFunction, output = 'function', defaultProbability = 10) => {
    console.groupCollapsed('Running a weighted random search...');
    console.log({ args, obj, exclusionFunction, output, defaultProbability });
    const pool = [];
    let totalWeight = 0;
    for (const arg of Object.values(args)) {
        let isValid;
        let fnValid;
        if (typeof arg.exclusions === 'function' && obj) {
            isValid = arg.exclusions(town, obj);
        }
        else {
            isValid = true;
        }
        if (typeof arg.probability === 'number' && arg.probability <= 0) {
            isValid = false;
        }
        if (typeof exclusionFunction === 'function') {
            fnValid = exclusionFunction(town, arg);
        }
        else {
            fnValid = true;
        }
        if (isValid === true && fnValid === true) {
            pool.push(arg);
            totalWeight += arg.probability || defaultProbability;
        }
    }
    let random = Math.floor(Object(_randomFloat__WEBPACK_IMPORTED_MODULE_0__["randomFloat"])(1) * totalWeight);
    let selected;
    for (const item of pool) {
        random -= item.probability || defaultProbability;
        if (random < 0) {
            selected = item;
            break;
        }
    }
    console.log(selected);
    console.groupEnd();
    if (typeof selected === 'undefined') {
        throw new Error('Selected is not defined.');
    }
    // If the string 'object' is passed, then it returns the object itself.
    if (output === 'object') {
        return selected;
    }
    const property = selected[output];
    if (!property) {
        throw new Error(`The randomly fetched object does not have the property ${output}.`);
    }
    if (typeof property === 'function') {
        const value = property(town, obj);
        console.log(value);
        return value;
    }
    console.log(property);
    return property;
};


/***/ }),

/***/ "./lib/tavern/createTavernName.ts":
/*!****************************************!*\
  !*** ./lib/tavern/createTavernName.ts ***!
  \****************************************/
/*! exports provided: createTavernName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTavernName", function() { return createTavernName; });
/* harmony import */ var _src_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/random */ "./lib/src/random.ts");

function createTavernName() {
    const verb = Object(_src_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['Moping', 'Drowning', 'Hanging', 'Belching', 'Running', 'Walking', 'Hunting', 'Fighting', 'Swinging', 'Breaking', 'Working', 'Fermenting', 'Flowering', 'Worrying', 'Following', 'Flowing', 'Complaining', 'Standing', 'Joking', 'Laughing', 'Panting', 'Boarding', 'Lounging', 'Cutting', 'Singing', 'Staring', 'Goading', 'Disappointing', 'Faltering', 'Binding', 'Winding', 'Sundering', 'Longing', 'Fumbling', 'Bumbling', 'Stumbling', 'Pining', 'Whining', 'Flying', 'Hoarding', 'Whoring', 'Warring', 'Winking', 'Skittering', 'Slithering', 'Snoring', 'Snorting', 'Playing', 'Practicing', 'Grappling', 'Burning', 'Flaming', 'Freezing', 'Poisoning', 'Burying', 'Throwing', 'Sparking', 'Steaming', 'Smiting', 'Chittering', 'Chattering', 'Mumbling', 'Grating', 'Plowing', 'Biting', 'Howling', 'Roaring', 'Shouting', 'Pouring', 'Squeaking', 'Stinging', 'Charging', 'Bleating', 'Stabbing', 'Goring', 'Poking', 'Swallowing', 'Sucking', 'Drinking', 'Sneaking', 'Hiding', 'Slashing', 'Limping', 'Tripping', 'Shifting', 'Sliding', 'Blinding', 'Piercing', 'Bludgeoning', 'Crushing', 'Hopping', 'Thundering', 'Hushing', 'Crying', 'Wailing', 'Mourning', 'Darkening', 'Piling', 'Digging', 'Flinging']);
    const nounA = Object(_src_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['Warhorse', 'Horseman', 'Maiden', 'Mage', 'Bachelor', 'King', 'Magistrate', 'Warchief', 'Warrior', 'Mare', 'Wolf', 'Fox', 'Lion', 'Lamb', 'Warden', 'Mule', 'Assassin', 'Swordsman', 'Lady', 'Knight', 'Soldier', 'Wizard', 'Warlock', 'Ranger', 'Bard', 'Druid', 'Monk', 'Paladin', 'Sorcerer', 'Rogue', 'Cleric', 'Bear', 'Goblin', 'Kobold', 'Gnome', 'Halfling', 'Dwarf', 'Fool', 'Virgin', 'Horde', 'Squire', 'Eagle', 'Rooster', 'Piglet', 'Thief', 'Priest', 'Friar', 'Blacksmith', 'Guard', 'Stag', 'Hag', 'Devil', 'Angel', 'Serpent', 'Snake', 'Rat', 'Mouse', 'Bandit', 'Chieftain', 'Griffon', 'Dragon', 'Lizard', 'Pony', 'Baron', 'Heifer', 'Bull', 'Hound', 'Goat', 'Toad', 'Stallion', 'Monster', 'Vermin', 'Beholder', 'Monkey', 'Elephant', 'Boar', 'Beagle', 'Bat', 'Demon', 'Imp', 'Sprite', 'Fey', 'Spirit', 'Bitch', 'Starling', 'Minotaur', 'Barbarian', 'Prophet', 'Merchant', 'Cobbler', 'Unicorn', 'Ogre', 'Nymph', 'Butcher', 'Captain', 'Angler', 'Lover', 'Mason', 'Tinker', 'Whale']);
    const nounB = Object(_src_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['Mount', 'Saddle', 'Guild', 'Fangs', 'Man', 'Pardon', 'Pleasure', 'Belt', 'Staff', 'Shield', 'Prince', 'Master', 'Servant', 'Meal', 'Prince', 'Favor', 'Love', 'Word', 'Scribe', 'Apprentice', 'Acolyte', 'Dress', 'Goddess', 'God', 'Gold', 'Purse', 'Trap', 'King', 'Son', 'Sister', 'Mother', 'Daughter', 'Cry', 'Shout', 'Cupboard', 'Pantry', 'Queen', 'Wealth', 'Star', 'Void', 'Woman', 'Man', 'Whore', 'Butcher', 'Anvil', 'Tome', 'Sacrifice', 'Armor', 'Cup', 'Pot', 'Stove', 'Stool', 'Princess', 'Chain', 'Sword', 'Pork', 'Grain', 'Tooth', 'Lance', 'Axe', 'Scabbard', 'Knife', 'Dagger', 'Spear', 'Bow', 'Crossbow', 'Quarterstaff', 'Staff', 'Fire', 'Ice', 'Wind', 'Earth', 'Water', 'Stone', 'Ladle', 'Monastery', 'Chalice', 'Goblet', 'Dungeon', 'Lust', 'Lantern', 'Bone', 'Life', 'Stone', 'Mistress', 'Mind', 'Treasure', 'Barter', 'Armorer', 'Butler', 'Page', 'Tome', 'Feather', 'Shadow', 'Friend', 'Labyrinth', 'Mountain', 'Hope', 'Boot', 'Gauntlet']);
    const adjective = Object(_src_random__WEBPACK_IMPORTED_MODULE_0__["random"])(['Wayward', 'Quiet', 'Jolly', 'Good', 'Crooked', 'White', 'Gray', 'Blackened', 'Harried', 'Crimson', 'Silver', 'Golden', 'Disturbed', 'Filthy', 'Ugly', 'Bastard', 'Faltering', 'Glorious', 'Beautiful', 'Handsome', 'Wrinkled', 'Unhappy', 'Intelligent', 'Lovely', 'Ignorant', 'Senile', 'Sour', 'Sweet', 'Lonely', 'Green', 'Blind', 'Hungry', 'Worried', 'Educated', 'Stupid', 'Emboldened', 'Honorary', 'Stinky', 'Bottomless', 'Greasy', 'Sloppy', 'Stylish', 'Distressed', 'Harrowed', 'Tormented', 'Mortified', 'Lopsided', 'Broken', 'Moldy', 'Gooey', 'Fermented', 'Blighted', 'Ornate', 'Drowned', 'Murdered', 'Widowed', 'Hanged', 'Angry', 'Lusty', 'Haunted', 'Strong', 'Withered', 'Comely', 'Pious', 'Penitent', 'Patient', 'Drunk', 'Worthy', 'Wealthy', 'Loathsome', 'Weak', 'Miniscule', 'Miniature', 'Enormous', 'Enlarged', 'Engorged', 'Lecherous', 'Despicable', 'Lewd', 'Portly', 'Violent', 'Bumbling', 'Faulty', 'Pristine', 'Cleanly', 'Cracked', 'Splintered', 'Jeweled', 'Superior', 'Flawless', 'Common', 'Exquisite', 'Elegant', 'Fine', 'Dull', 'Brittle', 'Fragile', 'Effeminate', 'Masculine', 'Supine']);
    switch (Object(_src_random__WEBPACK_IMPORTED_MODULE_0__["random"])(1, 5)) {
        case 1:
            return `The ${adjective} ${nounA}`;
        case 2:
            return `The ${nounA} and ${nounB}`;
        case 3:
            return `The ${nounA} and the ${nounB}`;
        case 4:
            return `The ${verb} ${nounA}`;
        case 5:
            return `The ${verb} ${nounA} and the ${nounB}`;
    }
    throw new Error('Roll out of bounds.');
}


/***/ }),

/***/ "./lib/tavern/tavernModifiers.ts":
/*!***************************************!*\
  !*** ./lib/tavern/tavernModifiers.ts ***!
  \***************************************/
/*! exports provided: tavernModifiers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tavernModifiers", function() { return tavernModifiers; });
function tavernModifiers(town, tavern) {
    if (town.roll.wealth > 95) {
        tavern.roll.wealth += 10;
    }
    else if (town.roll.wealth > 80) {
        tavern.roll.wealth += 7;
    }
    else if (town.roll.wealth > 70) {
        tavern.roll.wealth += 5;
    }
    else if (town.roll.wealth > 60) {
        tavern.roll.wealth += 3;
        tavern.roll.population += 1;
    }
    else if (town.roll.wealth > 50) {
        tavern.roll.wealth += 1;
        tavern.roll.population += 3;
    }
    else if (town.roll.wealth > 40) {
        tavern.roll.wealth -= 1;
        tavern.roll.population += 2;
    }
    else if (town.roll.wealth > 30) {
        tavern.roll.wealth -= 2;
    }
    else if (town.roll.wealth > 20) {
        tavern.roll.wealth -= 10;
        tavern.roll.sin += 1;
    }
    else if (town.roll.wealth <= 20) {
        tavern.roll.wealth -= 15;
        tavern.roll.sin += 5;
        tavern.roll.population -= 3;
    }
    switch (tavern.type) {
        case 'brothel':
            tavern.roll.sin += 20;
            tavern.roll.roughness += 4;
            tavern.roll.cleanliness -= 5;
            break;
        case 'gambling den':
            tavern.roll.sin += 20;
            tavern.roll.roughness += 4;
            tavern.roll.cleanliness -= 5;
            break;
        case 'quiet and low-key bar':
            tavern.roll.sin -= 15;
            tavern.roll.population -= 5;
            tavern.roll.roughness -= 10;
            tavern.roll.cleanliness += 3;
            break;
        case 'raucous dive':
            tavern.roll.sin += 5;
            tavern.roll.population += 15;
            tavern.roll.roughness += 5;
            tavern.roll.cleanliness -= 5;
            break;
        case "thieves' guild hangout":
            tavern.roll.sin += 15;
            tavern.roll.roughness += 5;
            break;
        case 'high-end dining club':
            tavern.roll.sin -= 10;
            tavern.roll.wealth += 5;
            tavern.roll.roughness -= 10;
            tavern.roll.cleanliness += 10;
            break;
        case 'members-only club':
            tavern.roll.sin -= 10;
            tavern.roll.wealth += 5;
            tavern.roll.roughness -= 10;
            tavern.roll.cleanliness += 10;
            break;
        case 'gathering place for a secret society':
            tavern.roll.sin += 5;
            tavern.roll.population -= 5;
            break;
    }
    /* ------------------------- DRAW -------------------------- */
    switch (tavern.draw) {
        case 'attractive waitstaff':
            tavern.roll.roughness += 3;
            tavern.roll.sin += 1;
            break;
        case 'crude jokes the bartender makes':
            tavern.roll.roughness += 3;
            tavern.roll.sin += 1;
            break;
        case "proximity to the thieves' guild headquarters":
            tavern.roll.roughness += 1;
            tavern.roll.sin += 3;
            break;
        case 'proximity to the brothel':
            tavern.roll.roughness += 1;
            tavern.roll.sin += 3;
            break;
        case 'witty banter with the waitstaff':
            tavern.roll.roughness -= 1;
            tavern.roll.sin -= 3;
            tavern.roll.cleanliness += 1;
            break;
        case 'incredible view':
            tavern.roll.roughness -= 1;
            tavern.roll.sin -= 3;
            tavern.roll.cleanliness += 1;
            break;
        case 'nice view':
            tavern.roll.roughness -= 1;
            tavern.roll.sin -= 3;
            tavern.roll.cleanliness += 1;
            break;
        case 'proximity to the church':
            tavern.roll.roughness -= 1;
            tavern.roll.sin -= 3;
            tavern.roll.cleanliness += 1;
            break;
        case 'warmth inside':
            tavern.roll.roughness -= 2;
            tavern.roll.sin -= 1;
            tavern.roll.cleanliness += 1;
            break;
        case 'huge fireplace':
            tavern.roll.roughness -= 2;
            tavern.roll.sin -= 1;
            tavern.roll.cleanliness += 1;
            break;
        case 'lack of bedbugs':
            tavern.roll.roughness -= 4;
            tavern.roll.sin -= 1;
            tavern.roll.cleanliness += 15;
            break;
        case 'clean beds':
            tavern.roll.roughness -= 4;
            tavern.roll.sin -= 1;
            tavern.roll.cleanliness += 15;
            break;
    }
    /* ---------------------- TAVERN STRUCTURE MATERIAL ----------------------- */
    switch (tavern.material) {
        case 'hewn rock':
            tavern.roll.roughness += 3;
            break;
        case 'chiseled stone':
            tavern.roll.roughness -= 1;
            break;
        case 'marble':
            tavern.roll.cleanliness += 5;
            tavern.roll.wealth += 6;
            break;
    }
    /* ======================= RENDERS ======================= */
    /* ------------------------- WEALTH -------------------------- */
    if (tavern.roll.wealth > 95) {
        tavern.priceModifier += 4;
        tavern.roll.size += 3;
        tavern.roll.cleanliness += 15;
        tavern.roll.roughness -= 10;
    }
    else if (tavern.roll.wealth > 80) {
        tavern.priceModifier += 3;
        tavern.roll.cleanliness += 10;
    }
    else if (tavern.roll.wealth > 70) {
        tavern.priceModifier += 2;
        tavern.roll.cleanliness += 6;
    }
    else if (tavern.roll.wealth > 60) {
        tavern.priceModifier += 1;
        tavern.roll.population += 5;
        tavern.roll.cleanliness += 4;
    }
    else if (tavern.roll.wealth > 50) {
        tavern.roll.population += 5;
        tavern.roll.reputation -= 5;
        tavern.roll.cleanliness += 2;
    }
    else if (tavern.roll.wealth > 30) {
        tavern.priceModifier -= 1;
        tavern.roll.reputation -= 7;
        tavern.roll.cleanliness -= 15;
    }
    else if (tavern.roll.wealth <= 30) {
        tavern.priceModifier -= 2;
        tavern.roll.reputation -= 10;
        tavern.roll.cleanliness -= 25;
    }
    /* ------------------------- SIZE -------------------------- */
    if (tavern.roll.size > 80) {
        tavern.roll.population += 5;
        tavern.roll.roughness += 3;
        tavern.roll.cleanliness -= 2;
    }
    else if (tavern.roll.size > 60) {
        tavern.roll.population += 4;
        tavern.roll.roughness += 1;
    }
    else if (tavern.roll.size > 40) {
        tavern.roll.population += 3;
    }
    else if (tavern.roll.size > 20) {
        tavern.roll.population -= 2;
        tavern.roll.sin -= 5;
    }
    else if (tavern.roll.size <= 20) {
        tavern.roll.sin -= 5;
        tavern.roll.population -= 5;
        tavern.roll.roughness -= 3;
    }
    /* ------------------------- ROUGHNESS -------------------------- */
    if (tavern.roll.roughness > 80) {
        tavern.roll.population += 3;
        tavern.roll.sin += 5;
        tavern.roll.cleanliness -= 4;
    }
    else if (tavern.roll.roughness > 60) {
        tavern.roll.population += 1;
        tavern.roll.sin += 3;
        tavern.roll.cleanliness -= 2;
    }
    else if (tavern.roll.roughness > 50) {
        tavern.roll.population += 1;
        tavern.roll.sin -= 1;
    }
    else if (tavern.roll.roughness > 40) {
        tavern.roll.population += 2;
        tavern.roll.sin -= 3;
    }
    else if (tavern.roll.roughness > 30) {
        tavern.roll.population -= 5;
        tavern.roll.sin -= 1;
        tavern.roll.wealth += 1;
    }
    else if (tavern.roll.roughness > 20) {
        tavern.roll.population -= 10;
        tavern.roll.sin -= 3;
        tavern.roll.wealth -= 1;
    }
    else if (tavern.roll.roughness <= 20) {
        tavern.roll.population -= 15;
        tavern.roll.sin -= 5;
        tavern.roll.wealth -= 3;
    }
    if (tavern.roll.cleanliness > 80) {
        tavern.roll.wealth += 3;
        tavern.roll.roughness -= 3;
    }
    else if (tavern.roll.cleanliness > 70) {
        tavern.roll.wealth += 2;
        tavern.roll.roughness -= 3;
    }
    else if (tavern.roll.cleanliness > 60) {
        tavern.roll.wealth += 1;
        tavern.roll.roughness -= 2;
    }
    else if (tavern.roll.cleanliness > 50) {
        tavern.roll.roughness -= 2;
    }
    else if (tavern.roll.cleanliness > 40) {
        tavern.roll.roughness -= 1;
    }
    else if (tavern.roll.cleanliness > 30) {
        tavern.roll.population -= 1;
        tavern.roll.sin += 1;
        tavern.roll.wealth -= 2;
    }
    else if (tavern.roll.cleanliness > 20) {
        tavern.roll.population -= 2;
        tavern.roll.sin += 3;
        tavern.roll.wealth -= 4;
    }
    else if (tavern.roll.cleanliness <= 20) {
        tavern.roll.population -= 3;
        tavern.roll.sin += 5;
        tavern.roll.wealth -= 8;
    }
    return tavern;
}


/***/ }),

/***/ "./lib/tavern/tavernRooms.ts":
/*!***********************************!*\
  !*** ./lib/tavern/tavernRooms.ts ***!
  \***********************************/
/*! exports provided: tavernRooms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tavernRooms", function() { return tavernRooms; });
/* harmony import */ var _src_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/random */ "./lib/src/random.ts");

function tavernRooms(tavern) {
    return getBySize(tavern.roll.size) + populationModifier(tavern.roll.population);
}
function getBySize(roll) {
    if (roll > 80)
        return Object(_src_random__WEBPACK_IMPORTED_MODULE_0__["random"])(6, 10);
    if (roll > 60)
        return Object(_src_random__WEBPACK_IMPORTED_MODULE_0__["random"])(5, 9);
    if (roll > 40)
        return Object(_src_random__WEBPACK_IMPORTED_MODULE_0__["random"])(4, 8);
    if (roll > 20)
        return Object(_src_random__WEBPACK_IMPORTED_MODULE_0__["random"])(3, 6);
    return Object(_src_random__WEBPACK_IMPORTED_MODULE_0__["random"])(2, 4);
}
function populationModifier(roll) {
    if (roll > 80)
        return -3;
    if (roll > 60)
        return -2;
    if (roll > 40)
        return -1;
    if (roll > 20)
        return 2;
    return 3;
}


/***/ })

/******/ });