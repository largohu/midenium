(() => {
  "use strict";
  const e = {};
  let t = (e, t = 500, s = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = s ? `${s}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !s),
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(
              new CustomEvent("slideUpDone", { detail: { target: e } }),
            );
        }, t));
    },
    s = (e, t = 500, s = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          s && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideDownDone", { detail: { target: e } }),
              );
          }, t);
      }
    },
    i = !0,
    r = (e = 500) => {
      let t = document.querySelector("body");
      if (i) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, e);
      }
    },
    n = (e = 500) => {
      let t = document.querySelector("body");
      if (i) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, e);
      }
    };
  function a(e) {
    return e.filter(function (e, t, s) {
      return s.indexOf(e) === t;
    });
  }
  function l(e, t) {
    const s = Array.from(e).filter(function (e, s, i) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (s.length) {
      const e = [];
      s.forEach((s) => {
        const i = {},
          r = s.dataset[t].split(",");
        (i.value = r[0]),
          (i.type = r[1] ? r[1].trim() : "max"),
          (i.item = s),
          e.push(i);
      });
      let i = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      i = a(i);
      const r = [];
      if (i.length)
        return (
          i.forEach((t) => {
            const s = t.split(","),
              i = s[1],
              n = s[2],
              a = window.matchMedia(s[0]),
              l = e.filter(function (e) {
                if (e.value === i && e.type === n) return !0;
              });
            r.push({ itemsArray: l, matchMedia: a });
          }),
          r
        );
    }
  }
  function o(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function d(e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = {}),
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : o(t[s]) && o(e[s]) && Object.keys(t[s]).length > 0 && d(e[s], t[s]);
      });
  }
  const c = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function p() {
    const e = "undefined" != typeof document ? document : {};
    return d(e, c), e;
  }
  const u = {
    document: c,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function h() {
    const e = "undefined" != typeof window ? window : {};
    return d(e, u), e;
  }
  function m(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function f() {
    return Date.now();
  }
  function g(e, t) {
    void 0 === t && (t = "x");
    const s = h();
    let i, r, n;
    const a = (function (e) {
      const t = h();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((r = a.transform || a.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (n = new s.WebKitCSSMatrix("none" === r ? "" : r)))
        : ((n =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = n.toString().split(","))),
      "x" === t &&
        (r = s.WebKitCSSMatrix
          ? n.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (r = s.WebKitCSSMatrix
          ? n.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      r || 0
    );
  }
  function v(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function w() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (
        null != r &&
        ((s = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? s instanceof HTMLElement
          : s && (1 === s.nodeType || 11 === s.nodeType)))
      ) {
        const s = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, i = s.length; t < i; t += 1) {
          const i = s[t],
            n = Object.getOwnPropertyDescriptor(r, i);
          void 0 !== n &&
            n.enumerable &&
            (v(e[i]) && v(r[i])
              ? r[i].__swiper__
                ? (e[i] = r[i])
                : w(e[i], r[i])
              : !v(e[i]) && v(r[i])
              ? ((e[i] = {}), r[i].__swiper__ ? (e[i] = r[i]) : w(e[i], r[i]))
              : (e[i] = r[i]));
        }
      }
    }
    var s;
    return e;
  }
  function b(e, t, s) {
    e.style.setProperty(t, s);
  }
  function y(e) {
    let { swiper: t, targetPosition: s, side: i } = e;
    const r = h(),
      n = -t.translate;
    let a,
      l = null;
    const o = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(t.cssModeFrameID);
    const d = s > n ? "next" : "prev",
      c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      p = () => {
        (a = new Date().getTime()), null === l && (l = a);
        const e = Math.max(Math.min((a - l) / o, 1), 0),
          d = 0.5 - Math.cos(e * Math.PI) / 2;
        let u = n + d * (s - n);
        if ((c(u, s) && (u = s), t.wrapperEl.scrollTo({ [i]: u }), c(u, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [i]: u });
            }),
            void r.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = r.requestAnimationFrame(p);
      };
    p();
  }
  function S(e, t) {
    return (
      void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
    );
  }
  function T(e) {
    try {
      return void console.warn(e);
    } catch (e) {}
  }
  function x(e, t) {
    void 0 === t && (t = []);
    const s = document.createElement(e);
    return (
      s.classList.add(
        ...(Array.isArray(t)
          ? t
          : (function (e) {
              return (
                void 0 === e && (e = ""),
                e
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())
              );
            })(t)),
      ),
      s
    );
  }
  function E(e, t) {
    return h().getComputedStyle(e, null).getPropertyValue(t);
  }
  function C(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling); )
        1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function L(e, t) {
    const s = [];
    let i = e.parentElement;
    for (; i; )
      t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
    return s;
  }
  function M(e, t, s) {
    const i = h();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top"),
          ) +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue(
                "width" === t ? "margin-left" : "margin-bottom",
              ),
          )
      : e.offsetWidth;
  }
  let P, A, k;
  function I() {
    return (
      P ||
        (P = (function () {
          const e = h(),
            t = p();
          return {
            smoothScroll:
              t.documentElement &&
              t.documentElement.style &&
              "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      P
    );
  }
  function O(e) {
    return (
      void 0 === e && (e = {}),
      A ||
        (A = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = I(),
            i = h(),
            r = i.navigator.platform,
            n = t || i.navigator.userAgent,
            a = { ios: !1, android: !1 },
            l = i.screen.width,
            o = i.screen.height,
            d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = n.match(/(iPad).*OS\s([\d_]+)/);
          const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === r;
          let f = "MacIntel" === r;
          return (
            !c &&
              f &&
              s.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${l}x${o}`) >= 0 &&
              ((c = n.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (f = !1)),
            d && !m && ((a.os = "android"), (a.android = !0)),
            (c || u || p) && ((a.os = "ios"), (a.ios = !0)),
            a
          );
        })(e)),
      A
    );
  }
  function _() {
    return (
      k ||
        (k = (function () {
          const e = h();
          let t = !1;
          function s() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (s()) {
            const s = String(e.navigator.userAgent);
            if (s.includes("Version/")) {
              const [e, i] = s
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && i < 2);
            }
          }
          return {
            isSafari: t || s(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent,
            ),
          };
        })()),
      k
    );
  }
  var z = {
    on(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      const r = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][r](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      function r() {
        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
        for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
          n[a] = arguments[a];
        t.apply(i, n);
      }
      return (r.__emitterProxy = t), i.on(e, r, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, r) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(r, 1);
                });
          }),
          s)
        : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, i;
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      "string" == typeof n[0] || Array.isArray(n[0])
        ? ((t = n[0]), (s = n.slice(1, n.length)), (i = e))
        : ((t = n[0].events), (s = n[0].data), (i = n[0].context || e)),
        s.unshift(i);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(i, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(i, s);
              });
        }),
        e
      );
    },
  };
  const D = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
      );
      if (s) {
        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t &&
          e.isElement &&
          (s.shadowRoot
            ? (t = s.shadowRoot.querySelector(
                `.${e.params.lazyPreloaderClass}`,
              ))
            : requestAnimationFrame(() => {
                s.shadowRoot &&
                  ((t = s.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`,
                  )),
                  t && t.remove());
              })),
          t && t.remove();
      }
    },
    G = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    $ = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const i =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        r = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = r,
          n = [s - t];
        return (
          n.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
          void e.slides.forEach((t, s) => {
            n.includes(t.column) && G(e, s);
          })
        );
      }
      const n = r + i - 1;
      if (e.params.rewind || e.params.loop)
        for (let i = r - t; i <= n + t; i += 1) {
          const t = ((i % s) + s) % s;
          (t < r || t > n) && G(e, t);
        }
      else
        for (let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1)
          i !== r && (i > n || i < r) && G(e, i);
    };
  var B = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i.clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(E(i, "padding-left") || 0, 10) -
            parseInt(E(i, "padding-right") || 0, 10)),
          (s =
            s -
            parseInt(E(i, "padding-top") || 0, 10) -
            parseInt(E(i, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t, s) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
      }
      const s = e.params,
        {
          wrapperEl: i,
          slidesEl: r,
          size: n,
          rtlTranslate: a,
          wrongRTL: l,
        } = e,
        o = e.virtual && s.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = S(r, `.${e.params.slideClass}, swiper-slide`),
        p = o ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [],
        m = [];
      let f = s.slidesOffsetBefore;
      "function" == typeof f && (f = s.slidesOffsetBefore.call(e));
      let g = s.slidesOffsetAfter;
      "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        w = e.slidesGrid.length;
      let y = s.spaceBetween,
        T = -f,
        x = 0,
        C = 0;
      if (void 0 === n) return;
      "string" == typeof y && y.indexOf("%") >= 0
        ? (y = (parseFloat(y.replace("%", "")) / 100) * n)
        : "string" == typeof y && (y = parseFloat(y)),
        (e.virtualSize = -y),
        c.forEach((e) => {
          a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        s.centeredSlides &&
          s.cssMode &&
          (b(i, "--swiper-centered-offset-before", ""),
          b(i, "--swiper-centered-offset-after", ""));
      const L = s.grid && s.grid.rows > 1 && e.grid;
      let P;
      L ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
      const A =
        "auto" === s.slidesPerView &&
        s.breakpoints &&
        Object.keys(s.breakpoints).filter(
          (e) => void 0 !== s.breakpoints[e].slidesPerView,
        ).length > 0;
      for (let i = 0; i < p; i += 1) {
        let r;
        if (
          ((P = 0),
          c[i] && (r = c[i]),
          L && e.grid.updateSlide(i, r, c),
          !c[i] || "none" !== E(r, "display"))
        ) {
          if ("auto" === s.slidesPerView) {
            A && (c[i].style[e.getDirectionLabel("width")] = "");
            const n = getComputedStyle(r),
              a = r.style.transform,
              l = r.style.webkitTransform;
            if (
              (a && (r.style.transform = "none"),
              l && (r.style.webkitTransform = "none"),
              s.roundLengths)
            )
              P = e.isHorizontal() ? M(r, "width", !0) : M(r, "height", !0);
            else {
              const e = t(n, "width"),
                s = t(n, "padding-left"),
                i = t(n, "padding-right"),
                a = t(n, "margin-left"),
                l = t(n, "margin-right"),
                o = n.getPropertyValue("box-sizing");
              if (o && "border-box" === o) P = e + a + l;
              else {
                const { clientWidth: t, offsetWidth: n } = r;
                P = e + s + i + a + l + (n - t);
              }
            }
            a && (r.style.transform = a),
              l && (r.style.webkitTransform = l),
              s.roundLengths && (P = Math.floor(P));
          } else
            (P = (n - (s.slidesPerView - 1) * y) / s.slidesPerView),
              s.roundLengths && (P = Math.floor(P)),
              c[i] && (c[i].style[e.getDirectionLabel("width")] = `${P}px`);
          c[i] && (c[i].swiperSlideSize = P),
            m.push(P),
            s.centeredSlides
              ? ((T = T + P / 2 + x / 2 + y),
                0 === x && 0 !== i && (T = T - n / 2 - y),
                0 === i && (T = T - n / 2 - y),
                Math.abs(T) < 0.001 && (T = 0),
                s.roundLengths && (T = Math.floor(T)),
                C % s.slidesPerGroup == 0 && u.push(T),
                h.push(T))
              : (s.roundLengths && (T = Math.floor(T)),
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(T),
                h.push(T),
                (T = T + P + y)),
            (e.virtualSize += P + y),
            (x = P),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, n) + g),
        a &&
          l &&
          ("slide" === s.effect || "coverflow" === s.effect) &&
          (i.style.width = `${e.virtualSize + y}px`),
        s.setWrapperSize &&
          (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + y}px`),
        L && e.grid.updateWrapperSize(P, u),
        !s.centeredSlides)
      ) {
        const t = [];
        for (let i = 0; i < u.length; i += 1) {
          let r = u[i];
          s.roundLengths && (r = Math.floor(r)),
            u[i] <= e.virtualSize - n && t.push(r);
        }
        (u = t),
          Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - n);
      }
      if (o && s.loop) {
        const t = m[0] + y;
        if (s.slidesPerGroup > 1) {
          const i = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                s.slidesPerGroup,
            ),
            r = t * s.slidesPerGroup;
          for (let e = 0; e < i; e += 1) u.push(u[u.length - 1] + r);
        }
        for (
          let i = 0;
          i < e.virtual.slidesBefore + e.virtual.slidesAfter;
          i += 1
        )
          1 === s.slidesPerGroup && u.push(u[u.length - 1] + t),
            h.push(h[h.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === u.length && (u = [0]), 0 !== y)) {
        const t =
          e.isHorizontal() && a
            ? "marginLeft"
            : e.getDirectionLabel("marginRight");
        c.filter(
          (e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1,
        ).forEach((e) => {
          e.style[t] = `${y}px`;
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t) => {
          e += t + (y || 0);
        }),
          (e -= y);
        const t = e - n;
        u = u.map((e) => (e <= 0 ? -f : e > t ? t + g : e));
      }
      if (s.centerInsufficientSlides) {
        let e = 0;
        if (
          (m.forEach((t) => {
            e += t + (y || 0);
          }),
          (e -= y),
          e < n)
        ) {
          const t = (n - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: m,
        }),
        s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
      ) {
        b(i, "--swiper-centered-offset-before", -u[0] + "px"),
          b(
            i,
            "--swiper-centered-offset-after",
            e.size / 2 - m[m.length - 1] / 2 + "px",
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (p !== d && e.emit("slidesLengthChange"),
        u.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== w && e.emit("slidesGridLengthChange"),
        s.watchSlidesProgress && e.updateSlidesOffset(),
        !(o || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
      ) {
        const t = `${s.containerModifierClass}backface-hidden`,
          i = e.el.classList.contains(t);
        p <= s.maxBackfaceHiddenSlides
          ? i || e.el.classList.add(t)
          : i && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let r,
        n = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const a = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
            const e = t.activeIndex + r;
            if (e > t.slides.length && !i) break;
            s.push(a(e));
          }
      else s.push(a(t.activeIndex));
      for (r = 0; r < s.length; r += 1)
        if (void 0 !== s[r]) {
          const e = s[r].offsetHeight;
          n = e > n ? e : n;
        }
      (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset =
          (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
          s -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: r, snapGrid: n } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let a = -e;
      r && (a = e),
        i.forEach((e) => {
          e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      let l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0
        ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
        : "string" == typeof l && (l = parseFloat(l));
      for (let e = 0; e < i.length; e += 1) {
        const o = i[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
        const c =
            (a + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (o.swiperSlideSize + l),
          p =
            (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (o.swiperSlideSize + l),
          u = -(a - d),
          h = u + t.slidesSizesGrid[e],
          m = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
        ((u >= 0 && u < t.size - 1) ||
          (h > 1 && h <= t.size) ||
          (u <= 0 && h >= t.size)) &&
          (t.visibleSlides.push(o),
          t.visibleSlidesIndexes.push(e),
          i[e].classList.add(s.slideVisibleClass)),
          m && i[e].classList.add(s.slideFullyVisibleClass),
          (o.progress = r ? -c : c),
          (o.originalProgress = r ? -p : p);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: r, isBeginning: n, isEnd: a, progressLoop: l } = t;
      const o = n,
        d = a;
      if (0 === i) (r = 0), (n = !0), (a = !0);
      else {
        r = (e - t.minTranslate()) / i;
        const s = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        (n = s || r <= 0), (a = l || r >= 1), s && (r = 0), l && (r = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          i = t.getSlideIndexByData(t.slides.length - 1),
          r = t.slidesGrid[s],
          n = t.slidesGrid[i],
          a = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        (l = o >= r ? (o - r) / a : (o + a - n) / a), l > 1 && (l -= 1);
      }
      Object.assign(t, {
        progress: r,
        progressLoop: l,
        isBeginning: n,
        isEnd: a,
      }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        n && !o && t.emit("reachBeginning toEdge"),
        a && !d && t.emit("reachEnd toEdge"),
        ((o && !n) || (d && !a)) && t.emit("fromEdge"),
        t.emit("progress", r);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: i, activeIndex: r } = e,
        n = e.virtual && s.virtual.enabled,
        a = e.grid && s.grid && s.grid.rows > 1,
        l = (e) => S(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let o, d, c;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            s.slideActiveClass,
            s.slideNextClass,
            s.slidePrevClass,
          );
        }),
        n)
      )
        if (s.loop) {
          let t = r - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (o = l(`[data-swiper-slide-index="${t}"]`));
        } else o = l(`[data-swiper-slide-index="${r}"]`);
      else
        a
          ? ((o = t.filter((e) => e.column === r)[0]),
            (c = t.filter((e) => e.column === r + 1)[0]),
            (d = t.filter((e) => e.column === r - 1)[0]))
          : (o = t[r]);
      o &&
        (o.classList.add(s.slideActiveClass),
        a
          ? (c && c.classList.add(s.slideNextClass),
            d && d.classList.add(s.slidePrevClass))
          : ((c = (function (e, t) {
              const s = [];
              for (; e.nextElementSibling; ) {
                const i = e.nextElementSibling;
                t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
              }
              return s;
            })(o, `.${s.slideClass}, swiper-slide`)[0]),
            s.loop && !c && (c = t[0]),
            c && c.classList.add(s.slideNextClass),
            (d = (function (e, t) {
              const s = [];
              for (; e.previousElementSibling; ) {
                const i = e.previousElementSibling;
                t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
              }
              return s;
            })(o, `.${s.slideClass}, swiper-slide`)[0]),
            s.loop && 0 === !d && (d = t[t.length - 1]),
            d && d.classList.add(s.slidePrevClass))),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: i,
          params: r,
          activeIndex: n,
          realIndex: a,
          snapIndex: l,
        } = t;
      let o,
        d = e;
      const c = (e) => {
        let s = e - t.virtual.slidesBefore;
        return (
          s < 0 && (s = t.virtual.slides.length + s),
          s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
          s
        );
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: s } = e,
              i = e.rtlTranslate ? e.translate : -e.translate;
            let r;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (r = e)
                  : i >= t[e] && i < t[e + 1] && (r = e + 1)
                : i >= t[e] && (r = e);
            return (
              s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
            );
          })(t)),
        i.indexOf(s) >= 0)
      )
        o = i.indexOf(s);
      else {
        const e = Math.min(r.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / r.slidesPerGroup);
      }
      if ((o >= i.length && (o = i.length - 1), d === n && !t.params.loop))
        return void (o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")));
      if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled)
        return void (t.realIndex = c(d));
      const p = t.grid && r.grid && r.grid.rows > 1;
      let u;
      if (t.virtual && r.virtual.enabled && r.loop) u = c(d);
      else if (p) {
        const e = t.slides.filter((e) => e.column === d)[0];
        let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
          (u = Math.floor(s / r.grid.rows));
      } else if (t.slides[d]) {
        const e = t.slides[d].getAttribute("data-swiper-slide-index");
        u = e ? parseInt(e, 10) : d;
      } else u = d;
      Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: o,
        previousRealIndex: a,
        realIndex: u,
        previousIndex: n,
        activeIndex: d,
      }),
        t.initialized && $(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) &&
          (a !== u && t.emit("realIndexChange"), t.emit("slideChange"));
    },
    updateClickedSlide: function (e, t) {
      const s = this,
        i = s.params;
      let r = e.closest(`.${i.slideClass}, swiper-slide`);
      !r &&
        s.isElement &&
        t &&
        t.length > 1 &&
        t.includes(e) &&
        [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
          !r &&
            e.matches &&
            e.matches(`.${i.slideClass}, swiper-slide`) &&
            (r = e);
        });
      let n,
        a = !1;
      if (r)
        for (let e = 0; e < s.slides.length; e += 1)
          if (s.slides[e] === r) {
            (a = !0), (n = e);
            break;
          }
      if (!r || !a)
        return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
      (s.clickedSlide = r),
        s.virtual && s.params.virtual.enabled
          ? (s.clickedIndex = parseInt(
              r.getAttribute("data-swiper-slide-index"),
              10,
            ))
          : (s.clickedIndex = n),
        i.slideToClickedSlide &&
          void 0 !== s.clickedIndex &&
          s.clickedIndex !== s.activeIndex &&
          s.slideToClickedSlide();
    },
  };
  var V = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: i, wrapperEl: r } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let n = g(r, e);
      return (n += this.cssOverflowAdjustment()), s && (n = -n), n || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = s;
      let l,
        o = 0,
        d = 0;
      s.isHorizontal() ? (o = i ? -e : e) : (d = e),
        r.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? o : d),
        r.cssMode
          ? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -o
              : -d)
          : r.virtualTranslate ||
            (s.isHorizontal()
              ? (o -= s.cssOverflowAdjustment())
              : (d -= s.cssOverflowAdjustment()),
            (n.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
      const c = s.maxTranslate() - s.minTranslate();
      (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
        l !== a && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, i, r) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === i && (i = !0);
      const n = this,
        { params: a, wrapperEl: l } = n;
      if (n.animating && a.preventInteractionOnTransition) return !1;
      const o = n.minTranslate(),
        d = n.maxTranslate();
      let c;
      if (
        ((c = i && e > o ? o : i && e < d ? d : e),
        n.updateProgress(c),
        a.cssMode)
      ) {
        const e = n.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!n.support.smoothScroll)
            return (
              y({ swiper: n, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (n.setTransition(0),
            n.setTranslate(c),
            s &&
              (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd")))
          : (n.setTransition(t),
            n.setTranslate(c),
            s &&
              (n.emit("beforeTransitionStart", t, r),
              n.emit("transitionStart")),
            n.animating ||
              ((n.animating = !0),
              n.onTranslateToWrapperTransitionEnd ||
                (n.onTranslateToWrapperTransitionEnd = function (e) {
                  n &&
                    !n.destroyed &&
                    e.target === this &&
                    (n.wrapperEl.removeEventListener(
                      "transitionend",
                      n.onTranslateToWrapperTransitionEnd,
                    ),
                    (n.onTranslateToWrapperTransitionEnd = null),
                    delete n.onTranslateToWrapperTransitionEnd,
                    s && n.emit("transitionEnd"));
                }),
              n.wrapperEl.addEventListener(
                "transitionend",
                n.onTranslateToWrapperTransitionEnd,
              ))),
        !0
      );
    },
  };
  function F(e) {
    let { swiper: t, runCallbacks: s, direction: i, step: r } = e;
    const { activeIndex: n, previousIndex: a } = t;
    let l = i;
    if (
      (l || (l = n > a ? "next" : n < a ? "prev" : "reset"),
      t.emit(`transition${r}`),
      s && n !== a)
    ) {
      if ("reset" === l) return void t.emit(`slideResetTransition${r}`);
      t.emit(`slideChangeTransition${r}`),
        "next" === l
          ? t.emit(`slideNextTransition${r}`)
          : t.emit(`slidePrevTransition${r}`);
    }
  }
  var W = {
    slideTo: function (e, t, s, i, r) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "string" == typeof e && (e = parseInt(e, 10));
      const n = this;
      let a = e;
      a < 0 && (a = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: m,
      } = n;
      if ((n.animating && l.preventInteractionOnTransition) || (!m && !i && !r))
        return !1;
      const f = Math.min(n.params.slidesPerGroupSkip, a);
      let g = f + Math.floor((a - f) / n.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1);
      const v = -o[g];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * d[e]),
            i = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (a = e)
              : t >= s && t < i && (a = e + 1)
            : t >= s && (a = e);
        }
      if (n.initialized && a !== p) {
        if (
          !n.allowSlideNext &&
          (u
            ? v > n.translate && v > n.minTranslate()
            : v < n.translate && v < n.minTranslate())
        )
          return !1;
        if (
          !n.allowSlidePrev &&
          v > n.translate &&
          v > n.maxTranslate() &&
          (p || 0) !== a
        )
          return !1;
      }
      let w;
      if (
        (a !== (c || 0) && s && n.emit("beforeSlideChangeStart"),
        n.updateProgress(v),
        (w = a > p ? "next" : a < p ? "prev" : "reset"),
        (u && -v === n.translate) || (!u && v === n.translate))
      )
        return (
          n.updateActiveIndex(a),
          l.autoHeight && n.updateAutoHeight(),
          n.updateSlidesClasses(),
          "slide" !== l.effect && n.setTranslate(v),
          "reset" !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)),
          !1
        );
      if (l.cssMode) {
        const e = n.isHorizontal(),
          s = u ? v : -v;
        if (0 === t) {
          const t = n.virtual && n.params.virtual.enabled;
          t &&
            ((n.wrapperEl.style.scrollSnapType = "none"),
            (n._immediateVirtual = !0)),
            t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
              ? ((n._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (n.wrapperEl.style.scrollSnapType = ""),
                  (n._immediateVirtual = !1);
              });
        } else {
          if (!n.support.smoothScroll)
            return (
              y({ swiper: n, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        n.setTransition(t),
        n.setTranslate(v),
        n.updateActiveIndex(a),
        n.updateSlidesClasses(),
        n.emit("beforeTransitionStart", t, i),
        n.transitionStart(s, w),
        0 === t
          ? n.transitionEnd(s, w)
          : n.animating ||
            ((n.animating = !0),
            n.onSlideToWrapperTransitionEnd ||
              (n.onSlideToWrapperTransitionEnd = function (e) {
                n &&
                  !n.destroyed &&
                  e.target === this &&
                  (n.wrapperEl.removeEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd,
                  ),
                  (n.onSlideToWrapperTransitionEnd = null),
                  delete n.onSlideToWrapperTransitionEnd,
                  n.transitionEnd(s, w));
              }),
            n.wrapperEl.addEventListener(
              "transitionend",
              n.onSlideToWrapperTransitionEnd,
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, i) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "string" == typeof e)
      ) {
        e = parseInt(e, 10);
      }
      const r = this,
        n = r.grid && r.params.grid && r.params.grid.rows > 1;
      let a = e;
      if (r.params.loop)
        if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;
        else {
          let e;
          if (n) {
            const t = a * r.params.grid.rows;
            e = r.slides.filter(
              (e) => 1 * e.getAttribute("data-swiper-slide-index") === t,
            )[0].column;
          } else e = r.getSlideIndexByData(a);
          const t = n
              ? Math.ceil(r.slides.length / r.params.grid.rows)
              : r.slides.length,
            { centeredSlides: s } = r.params;
          let i = r.params.slidesPerView;
          "auto" === i
            ? (i = r.slidesPerViewDynamic())
            : ((i = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
              s && i % 2 == 0 && (i += 1));
          let l = t - e < i;
          if ((s && (l = l || e < Math.ceil(i / 2)), l)) {
            const i = s
              ? e < r.activeIndex
                ? "prev"
                : "next"
              : e - r.activeIndex - 1 < r.params.slidesPerView
              ? "next"
              : "prev";
            r.loopFix({
              direction: i,
              slideTo: !0,
              activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
              slideRealIndex: "next" === i ? r.realIndex : void 0,
            });
          }
          if (n) {
            const e = a * r.params.grid.rows;
            a = r.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
            )[0].column;
          } else a = r.getSlideIndexByData(a);
        }
      return (
        requestAnimationFrame(() => {
          r.slideTo(a, t, s, i);
        }),
        r
      );
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        { enabled: r, params: n, animating: a } = i;
      if (!r) return i;
      let l = n.slidesPerGroup;
      "auto" === n.slidesPerView &&
        1 === n.slidesPerGroup &&
        n.slidesPerGroupAuto &&
        (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l,
        d = i.virtual && n.virtual.enabled;
      if (n.loop) {
        if (a && !d && n.loopPreventsSliding) return !1;
        if (
          (i.loopFix({ direction: "next" }),
          (i._clientLeft = i.wrapperEl.clientLeft),
          i.activeIndex === i.slides.length - 1 && n.cssMode)
        )
          return (
            requestAnimationFrame(() => {
              i.slideTo(i.activeIndex + o, e, t, s);
            }),
            !0
          );
      }
      return n.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        {
          params: r,
          snapGrid: n,
          slidesGrid: a,
          rtlTranslate: l,
          enabled: o,
          animating: d,
        } = i;
      if (!o) return i;
      const c = i.virtual && r.virtual.enabled;
      if (r.loop) {
        if (d && !c && r.loopPreventsSliding) return !1;
        i.loopFix({ direction: "prev" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(l ? i.translate : -i.translate),
        h = n.map((e) => p(e));
      let m = n[h.indexOf(u) - 1];
      if (void 0 === m && r.cssMode) {
        let e;
        n.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (m = n[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (
        (void 0 !== m &&
          ((f = a.indexOf(m)),
          f < 0 && (f = i.activeIndex - 1),
          "auto" === r.slidesPerView &&
            1 === r.slidesPerGroup &&
            r.slidesPerGroupAuto &&
            ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        r.rewind && i.isBeginning)
      ) {
        const r =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(r, e, t, s);
      }
      return r.loop && 0 === i.activeIndex && r.cssMode
        ? (requestAnimationFrame(() => {
            i.slideTo(f, e, t, s);
          }),
          !0)
        : i.slideTo(f, e, t, s);
    },
    slideReset: function (e, t, s) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, s)
      );
    },
    slideToClosest: function (e, t, s, i) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === i && (i = 0.5);
      const r = this;
      let n = r.activeIndex;
      const a = Math.min(r.params.slidesPerGroupSkip, n),
        l = a + Math.floor((n - a) / r.params.slidesPerGroup),
        o = r.rtlTranslate ? r.translate : -r.translate;
      if (o >= r.snapGrid[l]) {
        const e = r.snapGrid[l];
        o - e > (r.snapGrid[l + 1] - e) * i && (n += r.params.slidesPerGroup);
      } else {
        const e = r.snapGrid[l - 1];
        o - e <= (r.snapGrid[l] - e) * i && (n -= r.params.slidesPerGroup);
      }
      return (
        (n = Math.max(n, 0)),
        (n = Math.min(n, r.slidesGrid.length - 1)),
        r.slideTo(n, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let r,
        n = e.clickedIndex;
      const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (r = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10,
        )),
          t.centeredSlides
            ? n < e.loopedSlides - i / 2 ||
              n > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (n = e.getSlideIndex(
                  S(s, `${a}[data-swiper-slide-index="${r}"]`)[0],
                )),
                m(() => {
                  e.slideTo(n);
                }))
              : e.slideTo(n)
            : n > e.slides.length - i
            ? (e.loopFix(),
              (n = e.getSlideIndex(
                S(s, `${a}[data-swiper-slide-index="${r}"]`)[0],
              )),
              m(() => {
                e.slideTo(n);
              }))
            : e.slideTo(n);
      } else e.slideTo(n);
    },
  };
  var N = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: i } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      const r = () => {
          S(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
            e.setAttribute("data-swiper-slide-index", t);
          });
        },
        n = t.grid && s.grid && s.grid.rows > 1,
        a = s.slidesPerGroup * (n ? s.grid.rows : 1),
        l = t.slides.length % a != 0,
        o = n && t.slides.length % s.grid.rows != 0,
        d = (e) => {
          for (let i = 0; i < e; i += 1) {
            const e = t.isElement
              ? x("swiper-slide", [s.slideBlankClass])
              : x("div", [s.slideClass, s.slideBlankClass]);
            t.slidesEl.append(e);
          }
        };
      if (l) {
        if (s.loopAddBlankSlides) {
          d(a - (t.slides.length % a)), t.recalcSlides(), t.updateSlides();
        } else
          T(
            "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
          );
        r();
      } else if (o) {
        if (s.loopAddBlankSlides) {
          d(s.grid.rows - (t.slides.length % s.grid.rows)),
            t.recalcSlides(),
            t.updateSlides();
        } else
          T(
            "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
          );
        r();
      } else r();
      t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next",
      });
    },
    loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: i,
        setTranslate: r,
        activeSlideIndex: n,
        byController: a,
        byMousewheel: l,
      } = void 0 === e ? {} : e;
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
          slides: d,
          allowSlidePrev: c,
          allowSlideNext: p,
          slidesEl: u,
          params: h,
        } = o,
        { centeredSlides: m } = h;
      if (
        ((o.allowSlidePrev = !0),
        (o.allowSlideNext = !0),
        o.virtual && h.virtual.enabled)
      )
        return (
          s &&
            (h.centeredSlides || 0 !== o.snapIndex
              ? h.centeredSlides && o.snapIndex < h.slidesPerView
                ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                : o.snapIndex === o.snapGrid.length - 1 &&
                  o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
              : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
          (o.allowSlidePrev = c),
          (o.allowSlideNext = p),
          void o.emit("loopFix")
        );
      let f = h.slidesPerView;
      "auto" === f
        ? (f = o.slidesPerViewDynamic())
        : ((f = Math.ceil(parseFloat(h.slidesPerView, 10))),
          m && f % 2 == 0 && (f += 1));
      const g = h.slidesPerGroupAuto ? f : h.slidesPerGroup;
      let v = g;
      v % g != 0 && (v += g - (v % g)),
        (v += h.loopAdditionalSlides),
        (o.loopedSlides = v);
      const w = o.grid && h.grid && h.grid.rows > 1;
      d.length < f + v
        ? T(
            "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
          )
        : w &&
          "row" === h.grid.fill &&
          T(
            "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
          );
      const b = [],
        y = [];
      let S = o.activeIndex;
      void 0 === n
        ? (n = o.getSlideIndex(
            d.filter((e) => e.classList.contains(h.slideActiveClass))[0],
          ))
        : (S = n);
      const x = "next" === i || !i,
        E = "prev" === i || !i;
      let C = 0,
        L = 0;
      const M = w ? Math.ceil(d.length / h.grid.rows) : d.length,
        P = (w ? d[n].column : n) + (m && void 0 === r ? -f / 2 + 0.5 : 0);
      if (P < v) {
        C = Math.max(v - P, g);
        for (let e = 0; e < v - P; e += 1) {
          const t = e - Math.floor(e / M) * M;
          if (w) {
            const e = M - t - 1;
            for (let t = d.length - 1; t >= 0; t -= 1)
              d[t].column === e && b.push(t);
          } else b.push(M - t - 1);
        }
      } else if (P + f > M - v) {
        L = Math.max(P - (M - 2 * v), g);
        for (let e = 0; e < L; e += 1) {
          const t = e - Math.floor(e / M) * M;
          w
            ? d.forEach((e, s) => {
                e.column === t && y.push(s);
              })
            : y.push(t);
        }
      }
      if (
        ((o.__preventObserver__ = !0),
        requestAnimationFrame(() => {
          o.__preventObserver__ = !1;
        }),
        E &&
          b.forEach((e) => {
            (d[e].swiperLoopMoveDOM = !0),
              u.prepend(d[e]),
              (d[e].swiperLoopMoveDOM = !1);
          }),
        x &&
          y.forEach((e) => {
            (d[e].swiperLoopMoveDOM = !0),
              u.append(d[e]),
              (d[e].swiperLoopMoveDOM = !1);
          }),
        o.recalcSlides(),
        "auto" === h.slidesPerView
          ? o.updateSlides()
          : w &&
            ((b.length > 0 && E) || (y.length > 0 && x)) &&
            o.slides.forEach((e, t) => {
              o.grid.updateSlide(t, e, o.slides);
            }),
        h.watchSlidesProgress && o.updateSlidesOffset(),
        s)
      )
        if (b.length > 0 && E) {
          if (void 0 === t) {
            const e = o.slidesGrid[S],
              t = o.slidesGrid[S + C] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(S + C, 0, !1, !0),
                r &&
                  ((o.touchEventsData.startTranslate =
                    o.touchEventsData.startTranslate - t),
                  (o.touchEventsData.currentTranslate =
                    o.touchEventsData.currentTranslate - t)));
          } else if (r) {
            const e = w ? b.length / h.grid.rows : b.length;
            o.slideTo(o.activeIndex + e, 0, !1, !0),
              (o.touchEventsData.currentTranslate = o.translate);
          }
        } else if (y.length > 0 && x)
          if (void 0 === t) {
            const e = o.slidesGrid[S],
              t = o.slidesGrid[S - L] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(S - L, 0, !1, !0),
                r &&
                  ((o.touchEventsData.startTranslate =
                    o.touchEventsData.startTranslate - t),
                  (o.touchEventsData.currentTranslate =
                    o.touchEventsData.currentTranslate - t)));
          } else {
            const e = w ? y.length / h.grid.rows : y.length;
            o.slideTo(o.activeIndex - e, 0, !1, !0);
          }
      if (
        ((o.allowSlidePrev = c),
        (o.allowSlideNext = p),
        o.controller && o.controller.control && !a)
      ) {
        const e = {
          slideRealIndex: t,
          direction: i,
          setTranslate: r,
          activeSlideIndex: n,
          byController: !0,
        };
        Array.isArray(o.controller.control)
          ? o.controller.control.forEach((t) => {
              !t.destroyed &&
                t.params.loop &&
                t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === h.slidesPerView && s,
                });
            })
          : o.controller.control instanceof o.constructor &&
            o.controller.control.params.loop &&
            o.controller.control.loopFix({
              ...e,
              slideTo:
                o.controller.control.params.slidesPerView === h.slidesPerView &&
                s,
            });
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: s } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const i = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        i[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        i.forEach((e) => {
          s.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function q(e, t, s) {
    const i = h(),
      { params: r } = e,
      n = r.edgeSwipeDetection,
      a = r.edgeSwipeThreshold;
    return (
      !n ||
      !(s <= a || s >= i.innerWidth - a) ||
      ("prevent" === n && (t.preventDefault(), !0))
    );
  }
  function H(e) {
    const t = this,
      s = p();
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const r = t.touchEventsData;
    if ("pointerdown" === i.type) {
      if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
      r.pointerId = i.pointerId;
    } else
      "touchstart" === i.type &&
        1 === i.targetTouches.length &&
        (r.touchId = i.targetTouches[0].identifier);
    if ("touchstart" === i.type) return void q(t, i, i.targetTouches[0].pageX);
    const { params: n, touches: a, enabled: l } = t;
    if (!l) return;
    if (!n.simulateTouch && "mouse" === i.pointerType) return;
    if (t.animating && n.preventInteractionOnTransition) return;
    !t.animating && n.cssMode && n.loop && t.loopFix();
    let o = i.target;
    if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(o)) return;
    if ("which" in i && 3 === i.which) return;
    if ("button" in i && i.button > 0) return;
    if (r.isTouched && r.isMoved) return;
    const d = !!n.noSwipingClass && "" !== n.noSwipingClass,
      c = i.composedPath ? i.composedPath() : i.path;
    d && i.target && i.target.shadowRoot && c && (o = c[0]);
    const u = n.noSwipingSelector
        ? n.noSwipingSelector
        : `.${n.noSwipingClass}`,
      m = !(!i.target || !i.target.shadowRoot);
    if (
      n.noSwiping &&
      (m
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                if (!s || s === p() || s === h()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t)
            );
          })(u, o)
        : o.closest(u))
    )
      return void (t.allowClick = !0);
    if (n.swipeHandler && !o.closest(n.swipeHandler)) return;
    (a.currentX = i.pageX), (a.currentY = i.pageY);
    const g = a.currentX,
      v = a.currentY;
    if (!q(t, i, g)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = g),
      (a.startY = v),
      (r.touchStartTime = f()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      n.threshold > 0 && (r.allowThresholdMove = !1);
    let w = !0;
    o.matches(r.focusableElements) &&
      ((w = !1), "SELECT" === o.nodeName && (r.isTouched = !1)),
      s.activeElement &&
        s.activeElement.matches(r.focusableElements) &&
        s.activeElement !== o &&
        s.activeElement.blur();
    const b = w && t.allowTouchMove && n.touchStartPreventDefault;
    (!n.touchStartForcePreventDefault && !b) ||
      o.isContentEditable ||
      i.preventDefault(),
      n.freeMode &&
        n.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !n.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", i);
  }
  function R(e) {
    const t = p(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: a, enabled: l } = s;
    if (!l) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let o,
      d = e;
    if ((d.originalEvent && (d = d.originalEvent), "pointermove" === d.type)) {
      if (null !== i.touchId) return;
      if (d.pointerId !== i.pointerId) return;
    }
    if ("touchmove" === d.type) {
      if (
        ((o = [...d.changedTouches].filter(
          (e) => e.identifier === i.touchId,
        )[0]),
        !o || o.identifier !== i.touchId)
      )
        return;
    } else o = d;
    if (!i.isTouched)
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", d)
      );
    const c = o.pageX,
      u = o.pageY;
    if (d.preventedByNestedSwiper) return (n.startX = c), void (n.startY = u);
    if (!s.allowTouchMove)
      return (
        d.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(n, { startX: c, startY: u, currentX: c, currentY: u }),
          (i.touchStartTime = f()))
        )
      );
    if (r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (u < n.startY && s.translate <= s.maxTranslate()) ||
          (u > n.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (c < n.startX && s.translate <= s.maxTranslate()) ||
        (c > n.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      d.target === t.activeElement &&
      d.target.matches(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    i.allowTouchCallbacks && s.emit("touchMove", d),
      (n.previousX = n.currentX),
      (n.previousY = n.currentY),
      (n.currentX = c),
      (n.currentY = u);
    const h = n.currentX - n.startX,
      m = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) ||
      (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : h * h + m * m >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", d),
      void 0 === i.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && d.cancelable && d.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && d.stopPropagation();
    let g = s.isHorizontal() ? h : m,
      v = s.isHorizontal()
        ? n.currentX - n.previousX
        : n.currentY - n.previousY;
    r.oneWayMovement &&
      ((g = Math.abs(g) * (a ? 1 : -1)), (v = Math.abs(v) * (a ? 1 : -1))),
      (n.diff = g),
      (g *= r.touchRatio),
      a && ((g = -g), (v = -v));
    const w = s.touchesDirection;
    (s.swipeDirection = g > 0 ? "prev" : "next"),
      (s.touchesDirection = v > 0 ? "prev" : "next");
    const b = s.params.loop && !r.cssMode,
      y =
        ("next" === s.touchesDirection && s.allowSlideNext) ||
        ("prev" === s.touchesDirection && s.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (b && y && s.loopFix({ direction: s.swipeDirection }),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        s.wrapperEl.dispatchEvent(e);
      }
      (i.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", d);
    }
    if (
      (new Date().getTime(),
      i.isMoved &&
        i.allowThresholdMove &&
        w !== s.touchesDirection &&
        b &&
        y &&
        Math.abs(g) >= 1)
    )
      return (
        Object.assign(n, {
          startX: c,
          startY: u,
          currentX: c,
          currentY: u,
          startTranslate: i.currentTranslate,
        }),
        (i.loopSwapReset = !0),
        void (i.startTranslate = i.currentTranslate)
      );
    s.emit("sliderMove", d),
      (i.isMoved = !0),
      (i.currentTranslate = g + i.startTranslate);
    let S = !0,
      T = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (T = 0),
      g > 0
        ? (b &&
            y &&
            i.allowThresholdMove &&
            i.currentTranslate >
              (r.centeredSlides
                ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1]
                : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > s.minTranslate() &&
            ((S = !1),
            r.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + g) ** T)))
        : g < 0 &&
          (b &&
            y &&
            i.allowThresholdMove &&
            i.currentTranslate <
              (r.centeredSlides
                ? s.maxTranslate() +
                  s.slidesSizesGrid[s.slidesSizesGrid.length - 1]
                : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ("auto" === r.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          i.currentTranslate < s.maxTranslate() &&
            ((S = !1),
            r.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - g) ** T))),
      S && (d.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      r.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function j(e) {
    const t = this,
      s = t.touchEventsData;
    let i,
      r = e;
    r.originalEvent && (r = r.originalEvent);
    if ("touchend" === r.type || "touchcancel" === r.type) {
      if (
        ((i = [...r.changedTouches].filter(
          (e) => e.identifier === s.touchId,
        )[0]),
        !i || i.identifier !== s.touchId)
      )
        return;
    } else {
      if (null !== s.touchId) return;
      if (r.pointerId !== s.pointerId) return;
      i = r;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        r.type,
      )
    ) {
      if (
        !(
          ["pointercancel", "contextmenu"].includes(r.type) &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    (s.pointerId = null), (s.touchId = null);
    const {
      params: n,
      touches: a,
      rtlTranslate: l,
      slidesGrid: o,
      enabled: d,
    } = t;
    if (!d) return;
    if (!n.simulateTouch && "mouse" === r.pointerType) return;
    if (
      (s.allowTouchCallbacks && t.emit("touchEnd", r),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && n.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    n.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = f(),
      p = c - s.touchStartTime;
    if (t.allowClick) {
      const e = r.path || (r.composedPath && r.composedPath());
      t.updateClickedSlide((e && e[0]) || r.target, e),
        t.emit("tap click", r),
        p < 300 &&
          c - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", r);
    }
    if (
      ((s.lastClickTime = f()),
      m(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        (0 === a.diff && !s.loopSwapReset) ||
        (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let u;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (u = n.followFinger
        ? l
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      n.cssMode)
    )
      return;
    if (n.freeMode && n.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: u });
    let h = 0,
      g = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
    ) {
      const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      void 0 !== o[e + t]
        ? u >= o[e] && u < o[e + t] && ((h = e), (g = o[e + t] - o[e]))
        : u >= o[e] && ((h = e), (g = o[o.length - 1] - o[o.length - 2]));
    }
    let v = null,
      w = null;
    n.rewind &&
      (t.isBeginning
        ? (w =
            n.virtual && n.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (v = 0));
    const b = (u - o[h]) / g,
      y = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (p > n.longSwipesMs) {
      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (b >= n.longSwipesRatio
          ? t.slideTo(n.rewind && t.isEnd ? v : h + y)
          : t.slideTo(h)),
        "prev" === t.swipeDirection &&
          (b > 1 - n.longSwipesRatio
            ? t.slideTo(h + y)
            : null !== w && b < 0 && Math.abs(b) > n.longSwipesRatio
            ? t.slideTo(w)
            : t.slideTo(h));
    } else {
      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
        ? r.target === t.navigation.nextEl
          ? t.slideTo(h + y)
          : t.slideTo(h)
        : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + y),
          "prev" === t.swipeDirection && t.slideTo(null !== w ? w : h));
    }
  }
  function Y() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = e,
      a = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const l = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    l
      ? e.params.loop && !a
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = r),
      (e.allowSlideNext = i),
      e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
  }
  function X(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function U() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let r;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const n = e.maxTranslate() - e.minTranslate();
    (r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
      r !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function Q(e) {
    const t = this;
    D(t, e.target),
      t.params.cssMode ||
        ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
        t.update();
  }
  function K() {
    const e = this;
    e.documentTouchHandlerProceeded ||
      ((e.documentTouchHandlerProceeded = !0),
      e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  const Z = (e, t) => {
    const s = p(),
      { params: i, el: r, wrapperEl: n, device: a } = e,
      l = !!i.nested,
      o = "on" === t ? "addEventListener" : "removeEventListener",
      d = t;
    s[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
      r[o]("touchstart", e.onTouchStart, { passive: !1 }),
      r[o]("pointerdown", e.onTouchStart, { passive: !1 }),
      s[o]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
      s[o]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
      s[o]("touchend", e.onTouchEnd, { passive: !0 }),
      s[o]("pointerup", e.onTouchEnd, { passive: !0 }),
      s[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
      s[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
      s[o]("pointerout", e.onTouchEnd, { passive: !0 }),
      s[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
      s[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[o]("click", e.onClick, !0),
      i.cssMode && n[o]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[d](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Y,
            !0,
          )
        : e[d]("observerUpdate", Y, !0),
      r[o]("load", e.onLoad, { capture: !0 });
  };
  const J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var ee = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function te(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const i = Object.keys(s)[0],
        r = s[i];
      "object" == typeof r && null !== r
        ? (!0 === e[i] && (e[i] = { enabled: !0 }),
          "navigation" === i &&
            e[i] &&
            e[i].enabled &&
            !e[i].prevEl &&
            !e[i].nextEl &&
            (e[i].auto = !0),
          ["pagination", "scrollbar"].indexOf(i) >= 0 &&
            e[i] &&
            e[i].enabled &&
            !e[i].el &&
            (e[i].auto = !0),
          i in e && "enabled" in r
            ? ("object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              w(t, s))
            : w(t, s))
        : w(t, s);
    };
  }
  const se = {
      eventsEmitter: z,
      update: B,
      translate: V,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode ||
            ((s.wrapperEl.style.transitionDuration = `${e}ms`),
            (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            F({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              F({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: W,
      loop: N,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (s.style.cursor = "move"),
            (s.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            { params: t } = e;
          (e.onTouchStart = H.bind(e)),
            (e.onTouchMove = R.bind(e)),
            (e.onTouchEnd = j.bind(e)),
            (e.onDocumentTouchStart = K.bind(e)),
            t.cssMode && (e.onScroll = U.bind(e)),
            (e.onClick = X.bind(e)),
            (e.onLoad = Q.bind(e)),
            Z(e, "on");
        },
        detachEvents: function () {
          Z(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: s, params: i, el: r } = e,
            n = i.breakpoints;
          if (!n || (n && 0 === Object.keys(n).length)) return;
          const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in n ? n[a] : void 0) || e.originalParams,
            o = J(e, i),
            d = J(e, l),
            c = i.enabled;
          o && !d
            ? (r.classList.remove(
                `${i.containerModifierClass}grid`,
                `${i.containerModifierClass}grid-column`,
              ),
              e.emitContainerClasses())
            : !o &&
              d &&
              (r.classList.add(`${i.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === i.grid.fill)) &&
                r.classList.add(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              if (void 0 === l[t]) return;
              const s = i[t] && i[t].enabled,
                r = l[t] && l[t].enabled;
              s && !r && e[t].disable(), !s && r && e[t].enable();
            });
          const p = l.direction && l.direction !== i.direction,
            u = i.loop && (l.slidesPerView !== i.slidesPerView || p),
            h = i.loop;
          p && s && e.changeDirection(), w(e.params, l);
          const m = e.params.enabled,
            f = e.params.loop;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            c && !m ? e.disable() : !c && m && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            s &&
              (u
                ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                : !h && f
                ? (e.loopCreate(t), e.updateSlides())
                : h && !f && e.loopDestroy()),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, s) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
            return;
          let i = !1;
          const r = h(),
            n = "window" === t ? r.innerHeight : s.clientHeight,
            a = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < a.length; e += 1) {
            const { point: n, value: l } = a[e];
            "window" === t
              ? r.matchMedia(`(min-width: ${l}px)`).matches && (i = n)
              : l <= s.clientWidth && (i = n);
          }
          return i || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: s, rtl: i, el: r, device: n } = e,
            a = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && s.push(t + i);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: i },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: n.android },
                { ios: n.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass,
            );
          t.push(...a), r.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    ie = {};
  class re {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
        i[r] = arguments[r];
      1 === i.length &&
      i[0].constructor &&
      "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
        ? (t = i[0])
        : ([e, t] = i),
        t || (t = {}),
        (t = w({}, t)),
        e && !t.el && (t.el = e);
      const n = p();
      if (
        t.el &&
        "string" == typeof t.el &&
        n.querySelectorAll(t.el).length > 1
      ) {
        const e = [];
        return (
          n.querySelectorAll(t.el).forEach((s) => {
            const i = w({}, t, { el: s });
            e.push(new re(i));
          }),
          e
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = I()),
        (a.device = O({ userAgent: t.userAgent })),
        (a.browser = _()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const l = {};
      a.modules.forEach((e) => {
        e({
          params: t,
          swiper: a,
          extendParams: te(t, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const o = w({}, ee, l);
      return (
        (a.params = w({}, o, ie, t)),
        (a.originalParams = w({}, a.params)),
        (a.passedParams = w({}, t)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((e) => {
            a.on(e, a.params.on[e]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === a.params.direction,
          isVertical: () => "vertical" === a.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        i = C(S(t, `.${s.slideClass}, swiper-slide`)[0]);
      return C(e) - i;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
        )[0],
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = S(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        r = (s.maxTranslate() - i) * e + i;
      s.translateTo(r, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass),
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass),
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: i,
        slidesGrid: r,
        slidesSizesGrid: n,
        size: a,
        activeIndex: l,
      } = this;
      let o = 1;
      if ("number" == typeof s.slidesPerView) return s.slidesPerView;
      if (s.centeredSlides) {
        let e,
          t = i[l] ? i[l].swiperSlideSize : 0;
        for (let s = l + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < i.length; e += 1) {
          (t ? r[e] + n[e] - r[l] < a : r[e] - r[l] < a) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          r[l] - r[e] < a && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let r;
      if (
        (s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && D(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        s.freeMode && s.freeMode.enabled && !s.cssMode)
      )
        i(), s.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
          e.isEnd &&
          !s.centeredSlides
        ) {
          const t =
            e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          r = e.slideTo(t.length - 1, 0, !1, !0);
        } else r = e.slideTo(e.activeIndex, 0, !1, !0);
        r || i();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t),
        s.parentNode &&
          s.parentNode.host &&
          "SWIPER-CONTAINER" === s.parentNode.host.nodeName &&
          (t.isElement = !0);
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(i());
        }
        return S(s, i())[0];
      })();
      return (
        !r &&
          t.params.createElements &&
          ((r = x("div", t.params.wrapperClass)),
          s.append(r),
          S(s, `.${t.params.slideClass}`).forEach((e) => {
            r.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: r,
          slidesEl:
            t.isElement && !s.parentNode.host.slideSlots
              ? s.parentNode.host
              : r,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === E(s, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === s.dir.toLowerCase() || "rtl" === E(s, "direction")),
          wrongRTL: "-webkit-box" === E(r, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      if (!1 === t.mount(e)) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0,
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0,
            ),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
      const s = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach((e) => {
          e.complete
            ? D(t, e)
            : e.addEventListener("load", (e) => {
                D(t, e.target);
              });
        }),
        $(t),
        (t.initialized = !0),
        $(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: i, el: r, wrapperEl: n, slides: a } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            r.removeAttribute("style"),
            n.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((e) => {
                e.classList.remove(
                  i.slideVisibleClass,
                  i.slideFullyVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass,
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      w(ie, e);
    }
    static get extendedDefaults() {
      return ie;
    }
    static get defaults() {
      return ee;
    }
    static installModule(e) {
      re.prototype.__modules__ || (re.prototype.__modules__ = []);
      const t = re.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => re.installModule(e)), re)
        : (re.installModule(e), re);
    }
  }
  function ne(e, t, s, i) {
    return (
      e.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!s[r] && !0 === s.auto) {
            let n = S(e.el, `.${i[r]}`)[0];
            n || ((n = x("div", i[r])), (n.className = i[r]), e.el.append(n)),
              (s[r] = n),
              (t[r] = n);
          }
        }),
      s
    );
  }
  function ae(e) {
    let { swiper: t, extendParams: s, on: i, emit: r } = e;
    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (t.navigation = { nextEl: null, prevEl: null });
    const n = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
    function a(e) {
      let s;
      return e &&
        "string" == typeof e &&
        t.isElement &&
        ((s = t.el.querySelector(e)), s)
        ? s
        : (e &&
            ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              s.length > 1 &&
              1 === t.el.querySelectorAll(e).length &&
              (s = t.el.querySelector(e))),
          e && !s ? e : s);
    }
    function l(e, s) {
      const i = t.params.navigation;
      (e = n(e)).forEach((e) => {
        e &&
          (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
          "BUTTON" === e.tagName && (e.disabled = s),
          t.params.watchOverflow &&
            t.enabled &&
            e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
      });
    }
    function o() {
      const { nextEl: e, prevEl: s } = t.navigation;
      if (t.params.loop) return l(s, !1), void l(e, !1);
      l(s, t.isBeginning && !t.params.rewind),
        l(e, t.isEnd && !t.params.rewind);
    }
    function d(e) {
      e.preventDefault(),
        (!t.isBeginning || t.params.loop || t.params.rewind) &&
          (t.slidePrev(), r("navigationPrev"));
    }
    function c(e) {
      e.preventDefault(),
        (!t.isEnd || t.params.loop || t.params.rewind) &&
          (t.slideNext(), r("navigationNext"));
    }
    function p() {
      const e = t.params.navigation;
      if (
        ((t.params.navigation = ne(
          t,
          t.originalParams.navigation,
          t.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
        )),
        !e.nextEl && !e.prevEl)
      )
        return;
      let s = a(e.nextEl),
        i = a(e.prevEl);
      Object.assign(t.navigation, { nextEl: s, prevEl: i }),
        (s = n(s)),
        (i = n(i));
      const r = (s, i) => {
        s && s.addEventListener("click", "next" === i ? c : d),
          !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
      };
      s.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
    }
    function u() {
      let { nextEl: e, prevEl: s } = t.navigation;
      (e = n(e)), (s = n(s));
      const i = (e, s) => {
        e.removeEventListener("click", "next" === s ? c : d),
          e.classList.remove(...t.params.navigation.disabledClass.split(" "));
      };
      e.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
    }
    i("init", () => {
      !1 === t.params.navigation.enabled ? h() : (p(), o());
    }),
      i("toEdge fromEdge lock unlock", () => {
        o();
      }),
      i("destroy", () => {
        u();
      }),
      i("enable disable", () => {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = n(e)),
          (s = n(s)),
          t.enabled
            ? o()
            : [...e, ...s]
                .filter((e) => !!e)
                .forEach((e) => e.classList.add(t.params.navigation.lockClass));
      }),
      i("click", (e, s) => {
        let { nextEl: i, prevEl: a } = t.navigation;
        (i = n(i)), (a = n(a));
        const l = s.target;
        if (
          t.params.navigation.hideOnClick &&
          !a.includes(l) &&
          !i.includes(l)
        ) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === l || t.pagination.el.contains(l))
          )
            return;
          let e;
          i.length
            ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
            : a.length &&
              (e = a[0].classList.contains(t.params.navigation.hiddenClass)),
            r(!0 === e ? "navigationShow" : "navigationHide"),
            [...i, ...a]
              .filter((e) => !!e)
              .forEach((e) =>
                e.classList.toggle(t.params.navigation.hiddenClass),
              );
        }
      });
    const h = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        u();
    };
    Object.assign(t.navigation, {
      enable: () => {
        t.el.classList.remove(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          p(),
          o();
      },
      disable: h,
      update: o,
      init: p,
      destroy: u,
    });
  }
  function le(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function oe(e) {
    let { swiper: t, extendParams: s, on: i, emit: r } = e;
    const n = "swiper-pagination";
    let a;
    s({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (e) => e,
        formatFractionTotal: (e) => e,
        bulletClass: `${n}-bullet`,
        bulletActiveClass: `${n}-bullet-active`,
        modifierClass: `${n}-`,
        currentClass: `${n}-current`,
        totalClass: `${n}-total`,
        hiddenClass: `${n}-hidden`,
        progressbarFillClass: `${n}-progressbar-fill`,
        progressbarOppositeClass: `${n}-progressbar-opposite`,
        clickableClass: `${n}-clickable`,
        lockClass: `${n}-lock`,
        horizontalClass: `${n}-horizontal`,
        verticalClass: `${n}-vertical`,
        paginationDisabledClass: `${n}-disabled`,
      },
    }),
      (t.pagination = { el: null, bullets: [] });
    let l = 0;
    const o = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
    function d() {
      return (
        !t.params.pagination.el ||
        !t.pagination.el ||
        (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
      );
    }
    function c(e, s) {
      const { bulletActiveClass: i } = t.params.pagination;
      e &&
        (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
        (e.classList.add(`${i}-${s}`),
        (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          e.classList.add(`${i}-${s}-${s}`));
    }
    function p(e) {
      const s = e.target.closest(le(t.params.pagination.bulletClass));
      if (!s) return;
      e.preventDefault();
      const i = C(s) * t.params.slidesPerGroup;
      if (t.params.loop) {
        if (t.realIndex === i) return;
        t.slideToLoop(i);
      } else t.slideTo(i);
    }
    function u() {
      const e = t.rtl,
        s = t.params.pagination;
      if (d()) return;
      let i,
        n,
        p = t.pagination.el;
      p = o(p);
      const u =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        h = t.params.loop
          ? Math.ceil(u / t.params.slidesPerGroup)
          : t.snapGrid.length;
      if (
        (t.params.loop
          ? ((n = t.previousRealIndex || 0),
            (i =
              t.params.slidesPerGroup > 1
                ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                : t.realIndex))
          : void 0 !== t.snapIndex
          ? ((i = t.snapIndex), (n = t.previousSnapIndex))
          : ((n = t.previousIndex || 0), (i = t.activeIndex || 0)),
        "bullets" === s.type &&
          t.pagination.bullets &&
          t.pagination.bullets.length > 0)
      ) {
        const r = t.pagination.bullets;
        let o, d, u;
        if (
          (s.dynamicBullets &&
            ((a = M(r[0], t.isHorizontal() ? "width" : "height", !0)),
            p.forEach((e) => {
              e.style[t.isHorizontal() ? "width" : "height"] =
                a * (s.dynamicMainBullets + 4) + "px";
            }),
            s.dynamicMainBullets > 1 &&
              void 0 !== n &&
              ((l += i - (n || 0)),
              l > s.dynamicMainBullets - 1
                ? (l = s.dynamicMainBullets - 1)
                : l < 0 && (l = 0)),
            (o = Math.max(i - l, 0)),
            (d = o + (Math.min(r.length, s.dynamicMainBullets) - 1)),
            (u = (d + o) / 2)),
          r.forEach((e) => {
            const t = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((e) => `${s.bulletActiveClass}${e}`),
            ]
              .map((e) =>
                "string" == typeof e && e.includes(" ") ? e.split(" ") : e,
              )
              .flat();
            e.classList.remove(...t);
          }),
          p.length > 1)
        )
          r.forEach((e) => {
            const r = C(e);
            r === i
              ? e.classList.add(...s.bulletActiveClass.split(" "))
              : t.isElement && e.setAttribute("part", "bullet"),
              s.dynamicBullets &&
                (r >= o &&
                  r <= d &&
                  e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),
                r === o && c(e, "prev"),
                r === d && c(e, "next"));
          });
        else {
          const e = r[i];
          if (
            (e && e.classList.add(...s.bulletActiveClass.split(" ")),
            t.isElement &&
              r.forEach((e, t) => {
                e.setAttribute("part", t === i ? "bullet-active" : "bullet");
              }),
            s.dynamicBullets)
          ) {
            const e = r[o],
              t = r[d];
            for (let e = o; e <= d; e += 1)
              r[e] &&
                r[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
            c(e, "prev"), c(t, "next");
          }
        }
        if (s.dynamicBullets) {
          const i = Math.min(r.length, s.dynamicMainBullets + 4),
            n = (a * i - a) / 2 - u * a,
            l = e ? "right" : "left";
          r.forEach((e) => {
            e.style[t.isHorizontal() ? l : "top"] = `${n}px`;
          });
        }
      }
      p.forEach((e, n) => {
        if (
          ("fraction" === s.type &&
            (e.querySelectorAll(le(s.currentClass)).forEach((e) => {
              e.textContent = s.formatFractionCurrent(i + 1);
            }),
            e.querySelectorAll(le(s.totalClass)).forEach((e) => {
              e.textContent = s.formatFractionTotal(h);
            })),
          "progressbar" === s.type)
        ) {
          let r;
          r = s.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const n = (i + 1) / h;
          let a = 1,
            l = 1;
          "horizontal" === r ? (a = n) : (l = n),
            e.querySelectorAll(le(s.progressbarFillClass)).forEach((e) => {
              (e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${l})`),
                (e.style.transitionDuration = `${t.params.speed}ms`);
            });
        }
        "custom" === s.type && s.renderCustom
          ? ((e.innerHTML = s.renderCustom(t, i + 1, h)),
            0 === n && r("paginationRender", e))
          : (0 === n && r("paginationRender", e), r("paginationUpdate", e)),
          t.params.watchOverflow &&
            t.enabled &&
            e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
      });
    }
    function h() {
      const e = t.params.pagination;
      if (d()) return;
      const s =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.grid && t.params.grid.rows > 1
          ? t.slides.length / Math.ceil(t.params.grid.rows)
          : t.slides.length;
      let i = t.pagination.el;
      i = o(i);
      let n = "";
      if ("bullets" === e.type) {
        let i = t.params.loop
          ? Math.ceil(s / t.params.slidesPerGroup)
          : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
        for (let s = 0; s < i; s += 1)
          e.renderBullet
            ? (n += e.renderBullet.call(t, s, e.bulletClass))
            : (n += `<${e.bulletElement} ${
                t.isElement ? 'part="bullet"' : ""
              } class="${e.bulletClass}"></${e.bulletElement}>`);
      }
      "fraction" === e.type &&
        (n = e.renderFraction
          ? e.renderFraction.call(t, e.currentClass, e.totalClass)
          : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
        "progressbar" === e.type &&
          (n = e.renderProgressbar
            ? e.renderProgressbar.call(t, e.progressbarFillClass)
            : `<span class="${e.progressbarFillClass}"></span>`),
        (t.pagination.bullets = []),
        i.forEach((s) => {
          "custom" !== e.type && (s.innerHTML = n || ""),
            "bullets" === e.type &&
              t.pagination.bullets.push(
                ...s.querySelectorAll(le(e.bulletClass)),
              );
        }),
        "custom" !== e.type && r("paginationRender", i[0]);
    }
    function m() {
      t.params.pagination = ne(
        t,
        t.originalParams.pagination,
        t.params.pagination,
        { el: "swiper-pagination" },
      );
      const e = t.params.pagination;
      if (!e.el) return;
      let s;
      "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)),
        s ||
          "string" != typeof e.el ||
          (s = [...document.querySelectorAll(e.el)]),
        s || (s = e.el),
        s &&
          0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            Array.isArray(s) &&
            s.length > 1 &&
            ((s = [...t.el.querySelectorAll(e.el)]),
            s.length > 1 &&
              (s = s.filter((e) => L(e, ".swiper")[0] === t.el)[0])),
          Array.isArray(s) && 1 === s.length && (s = s[0]),
          Object.assign(t.pagination, { el: s }),
          (s = o(s)),
          s.forEach((s) => {
            "bullets" === e.type &&
              e.clickable &&
              s.classList.add(...(e.clickableClass || "").split(" ")),
              s.classList.add(e.modifierClass + e.type),
              s.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass,
              ),
              "bullets" === e.type &&
                e.dynamicBullets &&
                (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                (l = 0),
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
              "progressbar" === e.type &&
                e.progressbarOpposite &&
                s.classList.add(e.progressbarOppositeClass),
              e.clickable && s.addEventListener("click", p),
              t.enabled || s.classList.add(e.lockClass);
          }));
    }
    function f() {
      const e = t.params.pagination;
      if (d()) return;
      let s = t.pagination.el;
      s &&
        ((s = o(s)),
        s.forEach((s) => {
          s.classList.remove(e.hiddenClass),
            s.classList.remove(e.modifierClass + e.type),
            s.classList.remove(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass,
            ),
            e.clickable &&
              (s.classList.remove(...(e.clickableClass || "").split(" ")),
              s.removeEventListener("click", p));
        })),
        t.pagination.bullets &&
          t.pagination.bullets.forEach((t) =>
            t.classList.remove(...e.bulletActiveClass.split(" ")),
          );
    }
    i("changeDirection", () => {
      if (!t.pagination || !t.pagination.el) return;
      const e = t.params.pagination;
      let { el: s } = t.pagination;
      (s = o(s)),
        s.forEach((s) => {
          s.classList.remove(e.horizontalClass, e.verticalClass),
            s.classList.add(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass,
            );
        });
    }),
      i("init", () => {
        !1 === t.params.pagination.enabled ? g() : (m(), h(), u());
      }),
      i("activeIndexChange", () => {
        void 0 === t.snapIndex && u();
      }),
      i("snapIndexChange", () => {
        u();
      }),
      i("snapGridLengthChange", () => {
        h(), u();
      }),
      i("destroy", () => {
        f();
      }),
      i("enable disable", () => {
        let { el: e } = t.pagination;
        e &&
          ((e = o(e)),
          e.forEach((e) =>
            e.classList[t.enabled ? "remove" : "add"](
              t.params.pagination.lockClass,
            ),
          ));
      }),
      i("lock unlock", () => {
        u();
      }),
      i("click", (e, s) => {
        const i = s.target,
          n = o(t.pagination.el);
        if (
          t.params.pagination.el &&
          t.params.pagination.hideOnClick &&
          n &&
          n.length > 0 &&
          !i.classList.contains(t.params.pagination.bulletClass)
        ) {
          if (
            t.navigation &&
            ((t.navigation.nextEl && i === t.navigation.nextEl) ||
              (t.navigation.prevEl && i === t.navigation.prevEl))
          )
            return;
          const e = n[0].classList.contains(t.params.pagination.hiddenClass);
          r(!0 === e ? "paginationShow" : "paginationHide"),
            n.forEach((e) =>
              e.classList.toggle(t.params.pagination.hiddenClass),
            );
        }
      });
    const g = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: e } = t.pagination;
      e &&
        ((e = o(e)),
        e.forEach((e) =>
          e.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        f();
    };
    Object.assign(t.pagination, {
      enable: () => {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = o(e)),
          e.forEach((e) =>
            e.classList.remove(t.params.pagination.paginationDisabledClass),
          )),
          m(),
          h(),
          u();
      },
      disable: g,
      render: h,
      update: u,
      init: m,
      destroy: f,
    });
  }
  function de() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)',
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  Object.keys(se).forEach((e) => {
    Object.keys(se[e]).forEach((t) => {
      re.prototype[t] = se[e][t];
    });
  }),
    re.use([
      function (e) {
        let { swiper: t, on: s, emit: i } = e;
        const r = h();
        let n = null,
          a = null;
        const l = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (i("beforeResize"), i("resize"));
          },
          o = () => {
            t && !t.destroyed && t.initialized && i("orientationchange");
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== r.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((n = new ResizeObserver((e) => {
                a = r.requestAnimationFrame(() => {
                  const { width: s, height: i } = t;
                  let r = s,
                    n = i;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: i, target: a } = e;
                    (a && a !== t.el) ||
                      ((r = i ? i.width : (s[0] || s).inlineSize),
                      (n = i ? i.height : (s[0] || s).blockSize));
                  }),
                    (r === s && n === i) || l();
                });
              })),
              n.observe(t.el))
            : (r.addEventListener("resize", l),
              r.addEventListener("orientationchange", o));
        }),
          s("destroy", () => {
            a && r.cancelAnimationFrame(a),
              n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
              r.removeEventListener("resize", l),
              r.removeEventListener("orientationchange", o);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: i, emit: r } = e;
        const n = [],
          a = h(),
          l = function (e, s) {
            void 0 === s && (s = {});
            const i = new (a.MutationObserver || a.WebkitMutationObserver)(
              (e) => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void r("observerUpdate", e[0]);
                const s = function () {
                  r("observerUpdate", e[0]);
                };
                a.requestAnimationFrame
                  ? a.requestAnimationFrame(s)
                  : a.setTimeout(s, 0);
              },
            );
            i.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              n.push(i);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          i("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = L(t.hostEl);
                for (let t = 0; t < e.length; t += 1) l(e[t]);
              }
              l(t.hostEl, { childList: t.params.observeSlideChildren }),
                l(t.wrapperEl, { attributes: !1 });
            }
          }),
          i("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]),
    window.addEventListener("load", function (e) {
      de(),
        document.querySelector(".certificates__slider") &&
          new re(".certificates__slider", {
            modules: [oe],
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: !0,
            speed: 800,
            pagination: { el: ".certificates__dotts", clickable: !0 },
            on: {},
          }),
        document.querySelector(".favorites__slider") &&
          new re(".favorites__slider", {
            modules: [ae],
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: !0,
            speed: 800,
            navigation: {
              nextEl: ".favorites__right",
              prevEl: ".favorites__left",
            },
            on: {},
          });
    });
  e.watcher = new (class {
    constructor(e) {
      (this.config = Object.assign({ logging: !0 }, e)),
        this.observer,
        !document.documentElement.classList.contains("watcher") &&
          this.scrollWatcherRun();
    }
    scrollWatcherUpdate() {
      this.scrollWatcherRun();
    }
    scrollWatcherRun() {
      document.documentElement.classList.add("watcher"),
        this.scrollWatcherConstructor(
          document.querySelectorAll("[data-watch]"),
        );
    }
    scrollWatcherConstructor(e) {
      if (e.length) {
        this.scrollWatcherLogging(
          `Проснулся, слежу за объектами (${e.length})...`,
        ),
          a(
            Array.from(e).map(function (e) {
              return `${e.dataset.watchRoot ? e.dataset.watchRoot : null}|${
                e.dataset.watchMargin ? e.dataset.watchMargin : "0px"
              }|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
            }),
          ).forEach((t) => {
            let s = t.split("|"),
              i = { root: s[0], margin: s[1], threshold: s[2] },
              r = Array.from(e).filter(function (e) {
                let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                  s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                  r = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                if (
                  String(t) === i.root &&
                  String(s) === i.margin &&
                  String(r) === i.threshold
                )
                  return e;
              }),
              n = this.getScrollWatcherConfig(i);
            this.scrollWatcherInit(r, n);
          });
      } else
        this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
    }
    getScrollWatcherConfig(e) {
      let t = {};
      if (
        (document.querySelector(e.root)
          ? (t.root = document.querySelector(e.root))
          : "null" !== e.root &&
            this.scrollWatcherLogging(
              `Эмм... родительского объекта ${e.root} нет на странице`,
            ),
        (t.rootMargin = e.margin),
        !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
      ) {
        if ("prx" === e.threshold) {
          e.threshold = [];
          for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
        } else e.threshold = e.threshold.split(",");
        return (t.threshold = e.threshold), t;
      }
      this.scrollWatcherLogging(
        "Ой ой, настройку data-watch-margin нужно задавать в PX или %",
      );
    }
    scrollWatcherCreate(e) {
      this.observer = new IntersectionObserver((e, t) => {
        e.forEach((e) => {
          this.scrollWatcherCallback(e, t);
        });
      }, e);
    }
    scrollWatcherInit(e, t) {
      this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
    }
    scrollWatcherIntersecting(e, t) {
      e.isIntersecting
        ? (!t.classList.contains("_watcher-view") &&
            t.classList.add("_watcher-view"),
          this.scrollWatcherLogging(
            `Я вижу ${t.classList}, добавил класс _watcher-view`,
          ))
        : (t.classList.contains("_watcher-view") &&
            t.classList.remove("_watcher-view"),
          this.scrollWatcherLogging(
            `Я не вижу ${t.classList}, убрал класс _watcher-view`,
          ));
    }
    scrollWatcherOff(e, t) {
      t.unobserve(e),
        this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
    }
    scrollWatcherLogging(e) {
      this.config.logging &&
        (function (e) {
          setTimeout(() => {
            window.FLS && console.log(e);
          }, 0);
        })(`[Наблюдатель]: ${e}`);
    }
    scrollWatcherCallback(e, t) {
      const s = e.target;
      this.scrollWatcherIntersecting(e, s),
        s.hasAttribute("data-watch-once") &&
          e.isIntersecting &&
          this.scrollWatcherOff(s, t),
        document.dispatchEvent(
          new CustomEvent("watcherCallback", { detail: { entry: e } }),
        );
    }
  })({});
  let ce = !1;
  function pe(e) {
    this.type = e;
  }
  setTimeout(() => {
    if (ce) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (pe.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this,
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          },
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          r = window.matchMedia(i[0]),
          n = i[1],
          a = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === n;
          });
        r.addListener(function () {
          e.mediaHandler(r, a);
        }),
          this.mediaHandler(r, a);
      }
    }),
    (pe.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          (s.index = this.indexInParent(s.parent, s.element)),
            this.moveTo(s.place, s.element, s.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const s = t[e];
          s.element.classList.contains(this.daClassname) &&
            this.moveBack(s.parent, s.element, s.index);
        }
    }),
    (pe.prototype.moveTo = function (e, t, s) {
      t.classList.add(this.daClassname),
        "last" === e || e >= s.children.length
          ? s.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? s.children[e].insertAdjacentElement("beforebegin", t)
          : s.insertAdjacentElement("afterbegin", t);
    }),
    (pe.prototype.moveBack = function (e, t, s) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[s]
          ? e.children[s].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (pe.prototype.indexInParent = function (e, t) {
      const s = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(s, t);
    }),
    (pe.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new pe("max").init(),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      const e = document.querySelector(".icon-menu"),
        t = document.querySelector(".burger-menu"),
        s = document.querySelector("header"),
        a = document.querySelector(".burger__close"),
        l = [t, s, document.querySelector(".icon-item-3")];
      function o() {
        r(), l.forEach((e) => e.classList.remove("menu-open"));
      }
      e &&
        e.addEventListener("click", function () {
          i &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? r(e) : n(e);
            })(),
            l.forEach((e) => e.classList.toggle("menu-open")));
        }),
        a && a.addEventListener("click", o),
        window.addEventListener("resize", function () {
          window.innerWidth > 768 && o();
        });
    })(),
    (function () {
      const e = document.querySelectorAll("[data-spollers]");
      if (e.length > 0) {
        const i = Array.from(e).filter(function (e) {
          return !e.dataset.spollers.split(",")[0];
        });
        i.length && n(i);
        let r = l(e, "spollers");
        function n(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  a(e),
                  e.addEventListener("click", o))
                : (e.classList.remove("_spoller-init"),
                  a(e, !1),
                  e.removeEventListener("click", o));
          });
        }
        function a(e, t = !0) {
          let s = e.querySelectorAll("[data-spoller]");
          s.length &&
            ((s = Array.from(s).filter(
              (t) => t.closest("[data-spollers]") === e,
            )),
            s.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            }));
        }
        function o(e) {
          const i = e.target;
          if (i.closest("[data-spoller]")) {
            const r = i.closest("[data-spoller]"),
              n = r.closest("[data-spollers]"),
              a = n.hasAttribute("data-one-spoller");
            if (!n.querySelectorAll("._slide").length) {
              a && !r.classList.contains("_spoller-active") && d(n),
                r.classList.toggle("_spoller-active");
              const e = r.closest(".spollers__item"),
                i = r.nextElementSibling?.nextElementSibling.nextElementSibling;
              i &&
                ((e, i = 500) => {
                  e.hidden ? s(e, i) : t(e, i);
                })(i, 500),
                r.classList.contains("_spoller-active")
                  ? (e.style.height = "")
                  : (e.style.height = "713px");
              const l = n.querySelector(".spollers__arrow");
              l &&
                l.classList.toggle(
                  "_spoller-active",
                  r.classList.contains("_spoller-active"),
                );
            }
            e.preventDefault();
          }
        }
        function d(e) {
          const s = e.querySelector("[data-spoller]._spoller-active");
          if (s) {
            s.classList.remove("_spoller-active");
            const i = e.querySelector(".spollers__arrow");
            i && i.classList.remove("_spoller-active");
            const r = s.nextElementSibling?.nextElementSibling,
              n = s.closest(".spollers__item");
            r && t(r, 500), (n.style.height = "");
          }
        }
        r &&
          r.length &&
          r.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              n(e.itemsArray, e.matchMedia);
            }),
              n(e.itemsArray, e.matchMedia);
          });
      }
    })();
})();
