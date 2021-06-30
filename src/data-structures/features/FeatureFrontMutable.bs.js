// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Exceptions = require("../../Exceptions.bs.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");
var FeatureFrontCommon = require("./FeatureFrontCommon.bs.js");

var Default_fastGetFirst = FeatureFrontCommon.Default.fastGetFirst;

var Default_fastDropFirst = FeatureFrontCommon.Default.fastDropFirst;

var Default = {
  fastGetFirst: Default_fastGetFirst,
  fastDropFirst: Default_fastDropFirst
};

function Add(Config) {
  var include = FeatureFrontCommon.Add(Config);
  var getFirstExn = include.getFirstExn;
  var addFirst = Config.addFirst;
  var removeFirstExn = Config.removeFirstExn;
  var removeFirstNExn = function (count, ds) {
    for(var _i = 0; _i < count; ++_i){
      Curry._1(removeFirstExn, ds);
    }
    
  };
  var removeFirstN = function (count, ds) {
    try {
      return {
              TAG: /* Ok */0,
              _0: removeFirstNExn(count, ds)
            };
    }
    catch (raw_e){
      var e = Caml_js_exceptions.internalToOCamlException(raw_e);
      return {
              TAG: /* Error */1,
              _0: e
            };
    }
  };
  var removeFirst = function (ds) {
    try {
      return {
              TAG: /* Ok */0,
              _0: Curry._1(removeFirstExn, ds)
            };
    }
    catch (raw_e){
      var e = Caml_js_exceptions.internalToOCamlException(raw_e);
      return {
              TAG: /* Error */1,
              _0: e
            };
    }
  };
  var updateFirstExn = function (fn, ds) {
    if (Curry._1(Config.isEmpty, ds)) {
      throw {
            RE_EXN_ID: Exceptions.Empty,
            _1: "FeatureFront.updateFirstExn",
            Error: new Error()
          };
    }
    var first = Curry._1(getFirstExn, ds);
    Curry._1(removeFirstExn, ds);
    var newFirst = Curry._1(fn, first);
    return Curry._2(addFirst, newFirst, ds);
  };
  var updateFirst = function (fn, ds) {
    try {
      return {
              TAG: /* Ok */0,
              _0: updateFirstExn(fn, ds)
            };
    }
    catch (raw_e){
      var e = Caml_js_exceptions.internalToOCamlException(raw_e);
      return {
              TAG: /* Error */1,
              _0: e
            };
    }
  };
  return {
          getFirst: include.getFirst,
          getFirstExn: getFirstExn,
          getFirstN: include.getFirstN,
          getFirstNExn: include.getFirstNExn,
          dropFirst: include.dropFirst,
          dropFirstExn: include.dropFirstExn,
          dropFirstN: include.dropFirstN,
          dropFirstNExn: include.dropFirstNExn,
          match1Exn: include.match1Exn,
          match2Exn: include.match2Exn,
          match3Exn: include.match3Exn,
          match4Exn: include.match4Exn,
          match5Exn: include.match5Exn,
          match6Exn: include.match6Exn,
          match7Exn: include.match7Exn,
          match1: include.match1,
          match2: include.match2,
          match3: include.match3,
          match4: include.match4,
          match5: include.match5,
          match6: include.match6,
          match7: include.match7,
          addFirst: addFirst,
          removeFirst: removeFirst,
          removeFirstExn: removeFirstExn,
          removeFirstN: removeFirstN,
          removeFirstNExn: removeFirstNExn,
          updateFirst: updateFirst,
          updateFirstExn: updateFirstExn
        };
}

exports.Default = Default;
exports.Add = Add;
/* No side effect */
