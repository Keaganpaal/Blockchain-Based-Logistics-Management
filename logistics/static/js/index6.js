!function(e) {
    var t = {};
    function a(l) {
      if (t[l]) return t[l].exports;
      var n = t[l] = {
        i: l,
        l: !1,
        exports: {}
      };
      return e[l].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, l) {
      a.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: l
      })
    }, a.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, a.t = function(e, t) {
      if (1 & t && (e = a(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var l = Object.create(null);
      if (a.r(l), Object.defineProperty(l, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var n in e) a.d(l, n, function(t) {
          return e[t]
        }.bind(null, n));
      return l
    }, a.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return a.d(t, "a", t), t
    }, a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 148)
  }({
    148: function(e, t, a) {
      a(149), e.exports = a(150)
    },
    149: function(e, t, a) {
      "use strict";
      a.r(t);
      var l = function(e, t) {
        return React.createElement("div", {
          className: "footer"
        }, React.createElement("div", {
          className: "footer-inner"
        }, React.createElement("div", {
          className: "footer-qrcode"
        }, React.createElement("p", null, "区块链手机版"), React.createElement("img", {
          src: "https://i.postimg.cc/g0f2xyrL/QRcode.png"
        })), React.createElement("ul", {
          className: "footer-menu"
        }, React.createElement("li", null, React.createElement("i", {
          className: "iconfont"
        }, ""), React.createElement("a", {
          href: "http://47.113.229.131:9080/jeewms",
          target: "_blank"
        }, "WMS仓储管理")), React.createElement("li", null, React.createElement("i", {
          className: "iconfont"
        }, ""), React.createElement("a", {
          href: "http://139.159.158.116:9528/",
          target: "_blank"
        }, "溯源管理")), React.createElement("li", null, React.createElement("i", {
          className: "iconfont"
        }, ""), React.createElement("a", {
          href: ""
        }, "供应链金融（待开发）"))), React.createElement("div", {
          className: "footer-links"
        }, React.createElement("ol", {
          className: "footer-links-content footer-cn"
        }, React.createElement("li", null, React.createElement("a", {
          href: "https://t.ccsc58.com/#/login?redirect=%2Findex",
          target: "_blank"
        }, "智慧物联网物流跟踪（中集）")), React.createElement("li", null, React.createElement("a", {
          href: "//https://t.ccsc58.com/#/login?redirect=%2Findex",
          target: "_blank"
        }, "")), React.createElement("li", null, React.createElement("a", {
          href: "www.cainiao.com/chn-guoguo.html?spm=a2d524.28498246.header.5.484bbe50CtYc5q",
          target: "_blank"
        }, "")), React.createElement("li", null, React.createElement("a", {
          href: "//cloud.cainiao.com/",
          target: "_blank"
        }, "")), React.createElement("li", null, React.createElement("a", {
          href: "//global.cainiao.com/",
          target: "_blank"
        }, ""))), React.createElement("ol", {
          className: "footer-links-content footer-friendly"
      
        }, React.createElement("span", null, "©"), React.createElement("span", null, "2024"), React.createElement("span", null, "区块链服务"), React.createElement("span", null, ""), React.createElement("span", {
          class: "ccf-recnum"
        }, "", React.createElement("a", {
          href: "//www.miitbeian.gov.cn",
          target: "_blank"
        }, "")), React.createElement("a", {
          class: "ccf-recnum",
          href: "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010002000117"
        }, React.createElement("img", {
          src: "",
          alt: ""
        }), " ")))))
      };
      window.CN.Footer = l, t.default = l
    },
    150: function(e, t, a) {}
  });