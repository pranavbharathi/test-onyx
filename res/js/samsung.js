var samsungWallet = function (t) { "use strict"; function c(t) { return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) } function U(t, e) { for (var n = 0;n < e.length;n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } function i(t, e, a, u) { return new (a = a || Promise)(function (n, r) { function i(t) { try { s(u.next(t)) } catch (e) { r(e) } } function o(t) { try { s(u["throw"](t)) } catch (e) { r(e) } } function s(t) { var e; t.done ? n(t.value) : ((e = t.value) instanceof a ? e : new a(function (t) { t(e) })).then(i, o) } s((u = u.apply(t, e || [])).next()) }) } function o(n, r) { var i, o, s, a = { label: 0, sent: function () { if (1 & s[0]) throw s[1]; return s[1] }, trys: [], ops: [] }, t = { next: e(0), "throw": e(1), "return": e(2) }; return "function" == typeof Symbol && (t[Symbol.iterator] = function () { return this }), t; function e(e) { return function (t) { return u([e, t]) } } function u(t) { if (i) throw new TypeError("Generator is already executing."); for (;a;)try { if (i = 1, o && (s = 2 & t[0] ? o["return"] : t[0] ? o["throw"] || ((s = o["return"]) && s.call(o), 0) : o.next) && !(s = s.call(o, t[1])).done) return s; switch (o = 0, (t = s ? [2 & t[0], s.value] : t)[0]) { case 0: case 1: s = t; break; case 4: return a.label++, { value: t[1], done: !1 }; case 5: a.label++, o = t[1], t = [0]; continue; case 7: t = a.ops.pop(), a.trys.pop(); continue; default: if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) { a = 0; continue } if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) { a.label = t[1]; break } if (6 === t[0] && a.label < s[1]) { a.label = s[1], s = t; break } if (s && a.label < s[2]) { a.label = s[2], a.ops.push(t); break } s[2] && a.ops.pop(), a.trys.pop(); continue }t = r.call(n, a) } catch (e) { t = [6, e], o = 0 } finally { i = s = 0 } if (5 & t[0]) throw t[1]; return { value: t[0] ? t[1] : void 0, done: !0 } } } window.process = { env: { CMN_API_EXPOSURE_MODEL: "https://api-___1___3.mpay.samsung.com/wallet/cmn/v2.0/device/available", ADD_TO_WALLET_LINK: "https://api-card.walletsvc.samsung.com/wlt/Aqz68EBXSx6Mv9jsaZxzaA/___1___#Clip?cdata=___2___", SW_DARK_SRC: "https://us-cdn-gpp.mcsvc.samsung.com/lib/image/btnSW/wallet-card-dark.png", SW_SRC: "https://us-cdn-gpp.mcsvc.samsung.com/lib/image/btnSW/wallet-card.png", SW_VER_DARK_SRC: "https://us-cdn-gpp.mcsvc.samsung.com/lib/image/btnSW/wallet-card-ver-dark.png", SW_VER_SRC: "https://us-cdn-gpp.mcsvc.samsung.com/lib/image/btnSW/wallet-card-ver.png", ATSW_DARK_SRC: "https://us-cdn-gpp.mcsvc.samsung.com/lib/image/btnATSW/add-to-samsung-wallet_dark____1___.png", ATSW_SRC: "https://us-cdn-gpp.mcsvc.samsung.com/lib/image/btnATSW/add-to-samsung-wallet____1___.png", ATSW_VER_DARK_SRC: "https://us-cdn-gpp.mcsvc.samsung.com/lib/image/btnATSW/add-to-samsung-wallet_dark_ver____1___.png", ATSW_VER_SRC: "https://us-cdn-gpp.mcsvc.samsung.com/lib/image/btnATSW/add-to-samsung-wallet_ver____1___.png" } }; var W, M, a = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== a && a, j = "URLSearchParams" in a, F = "Symbol" in a && "iterator" in Symbol, u = "FileReader" in a && "Blob" in a && function () { try { return new Blob, !0 } catch (t) { return !1 } }(), V = "FormData" in a, l = "ArrayBuffer" in a; function r(t) { if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError('Invalid character in header field name: "' + t + '"'); return t.toLowerCase() } function h(t) { return t = "string" != typeof t ? String(t) : t } function s(e) { var t = { next: function () { var t = e.shift(); return { done: t === undefined, value: t } } }; return F && (t[Symbol.iterator] = function () { return t }), t } function f(e) { this.map = {}, e instanceof f ? e.forEach(function (t, e) { this.append(e, t) }, this) : Array.isArray(e) ? e.forEach(function (t) { this.append(t[0], t[1]) }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) { this.append(t, e[t]) }, this) } function d(t) { if (t.bodyUsed) return Promise.reject(new TypeError("Already read")); t.bodyUsed = !0 } function K(n) { return new Promise(function (t, e) { n.onload = function () { t(n.result) }, n.onerror = function () { e(n.error) } }) } function H(t) { var e = new FileReader, n = K(e); return e.readAsArrayBuffer(t), n } function N(t) { var e; return t.slice ? t.slice(0) : ((e = new Uint8Array(t.byteLength)).set(new Uint8Array(t)), e.buffer) } function z() { return this.bodyUsed = !1, this._initBody = function (t) { var e; this.bodyUsed = this.bodyUsed, (this._bodyInit = t) ? "string" == typeof t ? this._bodyText = t : u && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : V && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : j && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : l && u && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = N(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : l && (ArrayBuffer.prototype.isPrototypeOf(t) || M(t)) ? this._bodyArrayBuffer = N(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : j && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, u && (this.blob = function () { var t = d(this); if (t) return t; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function () { return this._bodyArrayBuffer ? d(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(H) }), this.text = function () { var t, e, n = d(this); if (n) return n; if (this._bodyBlob) return n = this._bodyBlob, t = new FileReader, e = K(t), t.readAsText(n), e; if (this._bodyArrayBuffer) return Promise.resolve(function (t) { for (var e = new Uint8Array(t), n = new Array(e.length), r = 0;r < e.length;r++)n[r] = String.fromCharCode(e[r]); return n.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, V && (this.formData = function () { return this.text().then($) }), this.json = function () { return this.text().then(JSON.parse) }, this } l && (W = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], M = ArrayBuffer.isView || function (t) { return t && -1 < W.indexOf(Object.prototype.toString.call(t)) }), f.prototype.append = function (t, e) { t = r(t), e = h(e); var n = this.map[t]; this.map[t] = n ? n + ", " + e : e }, f.prototype["delete"] = function (t) { delete this.map[r(t)] }, f.prototype.get = function (t) { return t = r(t), this.has(t) ? this.map[t] : null }, f.prototype.has = function (t) { return this.map.hasOwnProperty(r(t)) }, f.prototype.set = function (t, e) { this.map[r(t)] = h(e) }, f.prototype.forEach = function (t, e) { for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this) }, f.prototype.keys = function () { var n = []; return this.forEach(function (t, e) { n.push(e) }), s(n) }, f.prototype.values = function () { var e = []; return this.forEach(function (t) { e.push(t) }), s(e) }, f.prototype.entries = function () { var n = []; return this.forEach(function (t, e) { n.push([e, t]) }), s(n) }, F && (f.prototype[Symbol.iterator] = f.prototype.entries); var G = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]; function p(t, e) { if (!(this instanceof p)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.'); var n, r = (e = e || {}).body; if (t instanceof p) { if (t.bodyUsed) throw new TypeError("Already read"); this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new f(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0) } else this.url = String(t); if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new f(e.headers)), this.method = (t = e.method || this.method || "GET", n = t.toUpperCase(), -1 < G.indexOf(n) ? n : t), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests"); this._initBody(r), "GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache || ((n = /([?&])_=[^&]*/).test(this.url) ? this.url = this.url.replace(n, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()) } function $(t) { var n = new FormData; return t.trim().split("&").forEach(function (t) { var e; t && (e = (t = t.split("=")).shift().replace(/\+/g, " "), t = t.join("=").replace(/\+/g, " "), n.append(decodeURIComponent(e), decodeURIComponent(t))) }), n } function y(t, e) { if (!(this instanceof y)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.'); e = e || {}, this.type = "default", this.status = e.status === undefined ? 200 : e.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = e.statusText === undefined ? "" : "" + e.statusText, this.headers = new f(e.headers), this.url = e.url || "", this._initBody(t) } p.prototype.clone = function () { return new p(this, { body: this._bodyInit }) }, z.call(p.prototype), z.call(y.prototype), y.prototype.clone = function () { return new y(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new f(this.headers), url: this.url }) }, y.error = function () { var t = new y(null, { status: 0, statusText: "" }); return t.type = "error", t }; var q = [301, 302, 303, 307, 308], g = (y.redirect = function (t, e) { if (-1 === q.indexOf(e)) throw new RangeError("Invalid status code"); return new y(null, { status: e, headers: { location: t } }) }, a.DOMException); try { new g } catch (Ct) { (g = function g(t, e) { this.message = t, this.name = e; e = Error(t); this.stack = e.stack }).prototype = Object.create(Error.prototype), g.prototype.constructor = g } function Y(r, s) { return new Promise(function (i, t) { var e = new p(r, s); if (e.signal && e.signal.aborted) return t(new g("Aborted", "AbortError")); var o = new XMLHttpRequest; function n() { o.abort() } o.onload = function () { var t, n, e = { status: o.status, statusText: o.statusText, headers: (t = o.getAllResponseHeaders() || "", n = new f, t.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function (t) { return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t }).forEach(function (t) { var t = t.split(":"), e = t.shift().trim(); e && (t = t.join(":").trim(), n.append(e, t)) }), n) }, r = (e.url = "responseURL" in o ? o.responseURL : e.headers.get("X-Request-URL"), "response" in o ? o.response : o.responseText); setTimeout(function () { i(new y(r, e)) }, 0) }, o.onerror = function () { setTimeout(function () { t(new TypeError("Network request failed")) }, 0) }, o.ontimeout = function () { setTimeout(function () { t(new TypeError("Network request failed")) }, 0) }, o.onabort = function () { setTimeout(function () { t(new g("Aborted", "AbortError")) }, 0) }, o.open(e.method, function (t) { try { return "" === t && a.location.href ? a.location.href : t } catch (e) { return t } }(e.url), !0), "include" === e.credentials ? o.withCredentials = !0 : "omit" === e.credentials && (o.withCredentials = !1), "responseType" in o && (u ? o.responseType = "blob" : l && e.headers.get("Content-Type") && -1 !== e.headers.get("Content-Type").indexOf("application/octet-stream") && (o.responseType = "arraybuffer")), !s || "object" !== c(s.headers) || s.headers instanceof f ? e.headers.forEach(function (t, e) { o.setRequestHeader(e, t) }) : Object.getOwnPropertyNames(s.headers).forEach(function (t) { o.setRequestHeader(t, h(s.headers[t])) }), e.signal && (e.signal.addEventListener("abort", n), o.onreadystatechange = function () { 4 === o.readyState && e.signal.removeEventListener("abort", n) }), o.send("undefined" == typeof e._bodyInit ? null : e._bodyInit) }) } function X(e) { var n = this.constructor; return this.then(function (t) { return n.resolve(e()).then(function () { return t }) }, function (t) { return n.resolve(e()).then(function () { return n.reject(t) }) }) } function J(n) { return new this(function (r, t) { if (!n || "undefined" == typeof n.length) return t(new TypeError(c(n) + " " + n + " is not iterable(cannot read property Symbol(Symbol.iterator))")); var i = Array.prototype.slice.call(n); if (0 === i.length) return r([]); var o = i.length; for (var e = 0;e < i.length;e++)!function s(e, t) { if (t && ("object" === c(t) || "function" == typeof t)) { var n = t.then; if ("function" == typeof n) return void n.call(t, function (t) { s(e, t) }, function (t) { i[e] = { status: "rejected", reason: t }, 0 == --o && r(i) }) } i[e] = { status: "fulfilled", value: t }, 0 == --o && r(i) }(e, i[e]) }) } Y.polyfill = !0, a.fetch || (a.fetch = Y, a.Headers = f, a.Request = p, a.Response = y); var Z = setTimeout; function Q(t) { return Boolean(t && "undefined" != typeof t.length) } function tt() { } function m(t) { if (!(this instanceof m)) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof t) throw new TypeError("not a function"); this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], rt(t, this) } function et(r, i) { for (;3 === r._state;)r = r._value; 0 === r._state ? r._deferreds.push(i) : (r._handled = !0, m._immediateFn(function () { var t, e = 1 === r._state ? i.onFulfilled : i.onRejected; if (null === e) (1 === r._state ? v : b)(i.promise, r._value); else { try { t = e(r._value) } catch (n) { return void b(i.promise, n) } v(i.promise, t) } })) } function v(t, e) { try { if (e === t) throw new TypeError("A promise cannot be resolved with itself."); if (e && ("object" === c(e) || "function" == typeof e)) { var n = e.then; if (e instanceof m) return t._state = 3, t._value = e, void _(t); if ("function" == typeof n) return void rt((r = n, i = e, function () { r.apply(i, arguments) }), t) } t._state = 1, t._value = e, _(t) } catch (o) { b(t, o) } var r, i } function b(t, e) { t._state = 2, t._value = e, _(t) } function _(t) { 2 === t._state && 0 === t._deferreds.length && m._immediateFn(function () { t._handled || m._unhandledRejectionFn(t._value) }); for (var e = 0, n = t._deferreds.length;e < n;e++)et(t, t._deferreds[e]); t._deferreds = null } function nt(t, e, n) { this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n } function rt(t, e) { var n = !1; try { t(function (t) { n || (n = !0, v(e, t)) }, function (t) { n || (n = !0, b(e, t)) }) } catch (r) { if (n) return; n = !0, b(e, r) } } m.prototype["catch"] = function (t) { return this.then(null, t) }, m.prototype.then = function (t, e) { var n = new this.constructor(tt); return et(this, new nt(t, e, n)), n }, m.prototype["finally"] = X, m.all = function (e) { return new m(function (i, o) { if (!Q(e)) return o(new TypeError("Promise.all accepts an array")); var s = Array.prototype.slice.call(e); if (0 === s.length) return i([]); var a = s.length; function u(e, t) { try { if (t && ("object" === c(t) || "function" == typeof t)) { var n = t.then; if ("function" == typeof n) return void n.call(t, function (t) { u(e, t) }, o) } s[e] = t, 0 == --a && i(s) } catch (r) { o(r) } } for (var t = 0;t < s.length;t++)u(t, s[t]) }) }, m.allSettled = J, m.resolve = function (e) { return e && "object" === c(e) && e.constructor === m ? e : new m(function (t) { t(e) }) }, m.reject = function (n) { return new m(function (t, e) { e(n) }) }, m.race = function (i) { return new m(function (t, e) { if (!Q(i)) return e(new TypeError("Promise.race accepts an array")); for (var n = 0, r = i.length;n < r;n++)m.resolve(i[n]).then(t, e) }) }, m._immediateFn = "function" == typeof setImmediate ? function (t) { setImmediate(t) } : function (t) { Z(t, 0) }, m._unhandledRejectionFn = function (t) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t) }; var e = function () { if ("undefined" != typeof self) return self; if ("undefined" != typeof window) return window; if ("undefined" != typeof global) return global; throw new Error("unable to locate global object") }(), it = ("function" != typeof e.Promise ? e.Promise = m : (e.Promise.prototype["finally"] || (e.Promise.prototype["finally"] = X), e.Promise.allSettled || (e.Promise.allSettled = J)), Element.prototype.getAttributeNames == undefined && (Element.prototype.getAttributeNames = function () { for (var t = this.attributes, e = t.length, n = new Array(e), r = 0;r < e;r++)n[r] = t[r].name; return n }), n.prototype.call = function () { var t = new Image; t.onload = this.success, t.onerror = this.error, t.src = this.addUTMQuery(this.url) }, n.prototype.addUTMQuery = function (t) { var e = location.search.match(/(\?|\&)([^=]+)\=([^&]+)/gi), n = ""; if (e) { for (var r in e) 0 === e[r].substr(1).indexOf("utm") && (n += "&" + e[r].substr(1)); n = "?" + (n = n.substr(1)) } return t + n }, n); function n(t, e, n) { this.url = t, this.success = e, this.error = n } function S(t, e) { return new ot(t).sanitize(e) } var ot = function () { function e(t) { if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function"); this.str = t, this.i = 0 } var t, n, r; return t = e, (n = [{ key: "sanitize", value: function st(t) { var e, n, r = (t = t || {}).allowedTags || S.allowedTags, i = (r && r.includes || (r = !1), t.allowedAttributes || S.allowedAttributes); for (i && i.includes || (i = !1);this.i < this.str.length;)this.isTag() ? (e = this.i, n = this.readTagName(), !1 === r || r.includes(n) ? (this.stripAttributes(n, i), this.skipSpace(), "/" == (n = this.str[this.i]) && (this.i++, this.skipSpace()), ">" != n && this.cutTag(e)) : this.cutTag(e)) : this.i++; return this.str } }, { key: "isTag", value: function () { return "<" == this.str[this.i] } }, { key: "readTagName", value: function () { "<" == this.str[this.i] && this.i++, this.skipSpace(), "/" == this.str[this.i] && (this.i++, this.skipSpace()); for (var t = "";this.i < this.str.length;) { var e = this.str[this.i]; if (/\s|>|\//.test(e)) break; t += e, this.i++ } return t.toLowerCase() } }, { key: "cutTag", value: function (t) { for (;this.i < this.str.length;) { if (">" == this.str[this.i]) break; this.i++ } this.cutSubstring(t, this.i + 1) } }, { key: "stripAttributes", value: function (t, e) { var n, r, i, o, s; this.skipSpace(), this.isAttr() && (n = this.i, r = this.readAttrName(), i = null, this.isAttrValue() && (i = this.readAttrValue()), o = this.i, s = e.includes(r), (s = "src" != r && "href" != r || i && this.isValidURL(i) ? s : !1) || this.cutSubstring(n, o), this.stripAttributes(t, e)) } }, { key: "isValidURL", value: function (t) { return !/[\x00-\x20]/g.test(t) && (!/<!--.*?-->/.test(t) && (t = t.trim(), !!/^(#|http|\/)/.test(t))) } }, { key: "readAttrValue", value: function () { this.skipSpace(); "=" == this.str[this.i] && (this.i++, this.skipSpace()); for (var t, e = !1, n = ('"' != (t = this.str[this.i]) && "'" != t && "`" != t || (e = t, this.i++), "");this.i < this.str.length;) { var r = this.str[this.i]; if (e) { if (e == r) { this.i++; break } n += r, this.i++ } else { if (/[\s>]/.test(r)) break; n += r, this.i++ } } return n } }, { key: "isAttrValue", value: function () { var t = this.str.slice(this.i); return /^\s*=\s*/.test(t) } }, { key: "skipTagName", value: function () { var t = (t = /^<\s*(\w+)[^\w]\s*/i.exec(this.str)) && t[0].length || 0; this.i = t } }, { key: "skipSpace", value: function () { for (;this.i < this.str.length;) { var t = this.str[this.i]; if (!/\s/.test(t)) break; this.i++ } } }, { key: "readAttrName", value: function () { for (var t = "";this.i < this.str.length;) { var e = this.str[this.i]; if (/\s|=|>/.test(e)) break; t += e, this.i++ } return t.toLowerCase() } }, { key: "isAttr", value: function () { var t = this.str[this.i]; return t && /[^</>\s]/.test(t) } }, { key: "cutSubstring", value: function (t, e) { this.str = this.str.slice(0, t) + this.str.slice(e), this.i -= e - t } }]) && U(t.prototype, n), r && U(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), e }(), e = (S.allowedTags = ["div", "span", "b", "u", "i", "strong", "em", "strike", "code", "p", "blockquote", "nl", "caption", "pre", "a", "br", "hr", "img", "ul", "ol", "nav", "li", "h1", "h2", "h3", "h4", "h5", "h6", "menu", "table", "td", "tr", "thead", "tbody", "tfoot", "th"], S.allowedAttributes = ["align", "alt", "bgcolor", "border", "class", "color", "colspan", "dir", "headers", "height", "hidden", "href", "size", "hreflang", "id", "lang", "rel", "reversed", "rowspan", "shape", "sizes", "spellcheck", "src", "srcset", "style", "summary", "title", "translate", "type", "width", "data", "data-*"], S), st = e, w = function (t, e, n) { var r = t.replace(e, n); return r === t ? r : w(r, e, n) }, T = function (t, e, n) { if (void 0 === n && (n = !1), !t) return ""; e = void 0 !== e && e; switch ("boolean" == typeof e ? e ? "HIGH" : "LOW" : e) { case "HIGH": return new at(t).addHIGHPolicy().build(n); case "LOW": return new at(t).addLOWPolicy().build(n); default: return "" } }, at = (A.prototype.addLOWPolicy = function () { return this.removeScript().removeEval().changeBRSlashCase().removeExpression().removeJavaVBScript().removeIframe().removeOnKeyword().removeTick() }, A.prototype.addHIGHPolicy = function () { return this.addLOWPolicy().replaceKeyword() }, A.prototype.removeScript = function () { return this.resultString = w(this.resultString, /<script(.*?)>(.*?)<\/script(.*?)>/gi, ""), this.resultString = w(this.resultString, /src[\r\n]*=[\r\n]*\\'(.*?)\\'/gi, ""), this.resultString = w(this.resultString, /src[\r\n]*=[\r\n]*\\"(.*?)\\"/gi, ""), this.resultString = w(this.resultString, /<\/?script(.*?)>/gi, ""), this.resultString = w(this.resultString, /<\/?html:(\\s)*script(.*?)>/gi, ""), this }, A.prototype.changeBRSlashCase = function () { return this.resultString = w(this.resultString, /<br\/>/gi, "<br>"), this.resultString = w(this.resultString, /<BR\/>/gi, "<BR>"), this }, A.prototype.removeEval = function () { return this.resultString = w(this.resultString, /eval\(.*\)/gi, ""), this.resultString = w(this.resultString, /eval\((.*?)\)/gi, ""), this }, A.prototype.removeExpression = function () { return this.resultString = w(this.resultString, /expression\(.*\)/gi, ""), this.resultString = w(this.resultString, /expression\((.*?)\)/gi, ""), this }, A.prototype.removeJavaVBScript = function () { return this.resultString = w(this.resultString, /javascript:/gi, ""), this.resultString = w(this.resultString, /vbscript:/gi, ""), this }, A.prototype.removeTick = function () { return this.resultString = w(this.resultString, /`/gi, ""), this }, A.prototype.removeIframe = function () { return this.resultString = w(this.resultString, /<iframe(.*?)>(.*?)<\/iframe(.*?)>/gi, ""), this.resultString = w(this.resultString, /<iframe(.*?)\/>/gi, ""), this }, A.prototype.removeOnKeyword = function () { return this.resultString = w(this.resultString, /autofocus|FSCommand(.*?)=|on(Abort|Activate|AfterPrint|afterscriptexecute|AfterUpdate|animationcancel|animationend|animationiteration|animationstart|auxclick|BeforeActivate|BeforeCopy|BeforeCut|BeforeDeactivate|BeforeEditFocus|BeforePaste|BeforePrint|beforescriptexecute|BeforeUnload|BeforeUpdate|Begin|Blur|Bounce|canplay|canplaythrough|CellChange|Change|Click|close|ContextMenu|ControlSelect|Copy|cuechange|Cut|DataAvailable|DataSetChanged|DataSetComplete|DblClick|Deactivate|Drag|DragDrop|DragEnd|DragEnter|DragLeave|DragOver|DragStart|Drop|durationchange|End|ended|Error|ErrorUpdate|FilterChange|Finish|Focus|FocusIn|FocusOut|fullscreenchange|HashChange|Help|Input|invalid|KeyDown|KeyPress|KeyUp|LayoutComplete|Load|loadeddata|loadedmetadata|loadend|loadstart|LoseCapture|MediaComplete|MediaError|Message|MouseDown|MouseEnter|MouseLeave|MouseMove|MouseOut|MouseOver|MouseUp|MouseWheel|Move|MoveEnd|MoveStart|mozfullscreenchange|Offline|OutOfSync|pagehide|pageshow|Paste|Pause|play|playing|pointerdown|pointerenter|pointerleave|pointermove|pointerout|pointerover|pointerrawupdate|pointerup|PopState|Progress|PropertyChange|ReadyStateChange|Redo|Repeat|Reset|Resize|ResizeEnd|ResizeStart|Resume|Reverse|RowDelete|RowExit|RowInserted|RowsEnter|Scroll|search|Seek|seeked|seeking|Select|selectionchange|SelectStart|show|Start|Stop|Storage|Submit|SyncRestored|TimeError|timeupdate|toggle|touchend|touchmove|touchstart|TrackChange|transitioncancel|transitionend|transitionrun|transitionstart|Undo|unhandledrejection|Unload|URLFlip|volumechange|waiting|webkitanimationend|webkitanimationiteration|webkitanimationstart|webkittransitionend|wheel)\W*?=[^=]|seekSegmentTime/gi, ""), this }, A.prototype.replaceKeyword = function () { return this.resultString = w(this.resultString, /</gi, "&lt;"), this.resultString = w(this.resultString, />/gi, "&gt;"), this.resultString = w(this.resultString, /!/gi, "&#33;"), this.resultString = w(this.resultString, /"/gi, "&#34;"), this.resultString = w(this.resultString, /'/gi, "&#39;"), this.resultString = w(this.resultString, /\+/gi, "&#43;"), this.resultString = w(this.resultString, /=/gi, "&#61;"), this }, A.prototype.sanitizeString = function () { return this.resultString = st(this.resultString), this }, A.prototype.build = function (t) { return (t ? this : this.sanitizeString()).resultString }, A); function A(t) { this.resultString = t + "" } var ut = { "default": "en-us", af: "en-us", sq: "en-us", "ar-SA": "en-us", "ar-IQ": "en-us", "ar-EG": "en-us", "ar-LY": "en-us", "ar-DZ": "en-us", "ar-MA": "en-us", "ar-TN": "en-us", "ar-OM": "en-us", "ar-YE": "en-us", "ar-SY": "en-us", "ar-JO": "en-us", "ar-LB": "en-us", "ar-KW": "en-us", "ar-AE": "en-us", "ar-BH": "en-us", "ar-QA": "en-us", eu: "en-us", bg: "en-us", be: "en-us", ca: "en-us", "zh-TW": "en-us", "zh-CN": "en-us", "zh-HK": "en-us", "zh-SG": "en-us", hr: "en-us", cs: "en-us", da: "en-us", nl: "en-us", "nl-BE": "en-us", "en-us": "en-us", "en-US": "en-us", "en-EG": "en-us", "en-AU": "en-us", "en-GB": "en-us", "en-CA": "en-us", "en-NZ": "en-us", "en-IE": "en-us", "en-ZA": "en-us", "en-JM": "en-us", "en-BZ": "en-us", "en-TT": "en-us", et: "en-us", fo: "en-us", fa: "en-us", fi: "en-us", fr: "fr-fr", "fr-BE": "fr-fr", "fr-CA": "fr-fr", "fr-CH": "fr-fr", "fr-LU": "fr-fr", gd: "en-us", "gd-IE": "en-us", de: "de-de", "de-CH": "de-de", "de-AT": "de-de", "de-LU": "de-de", "de-LI": "de-de", el: "en-us", he: "en-us", hi: "en-us", hu: "en-us", is: "en-us", id: "en-us", it: "it", "it-CH": "it", ja: "en-us", ko: "ko-kr", "ko-KR": "ko-kr", lv: "en-us", lt: "en-us", mk: "en-us", mt: "en-us", no: "en-us", pl: "en-us", "pt-BR": "en-us", pt: "en-us", rm: "en-us", ro: "en-us", "ro-MO": "en-us", ru: "en-us", "ru-MI": "en-us", sz: "en-us", sr: "en-us", sk: "en-us", sl: "en-us", sb: "en-us", es: "es-es", "es-AR": "es-es", "es-GT": "es-es", "es-CR": "es-es", "es-PA": "es-es", "es-DO": "es-es", "es-MX": "es-es", "es-VE": "es-es", "es-CO": "es-es", "es-PE": "es-es", "es-EC": "es-es", "es-CL": "es-es", "es-UY": "es-es", "es-PY": "es-es", "es-BO": "es-es", "es-SV": "es-es", "es-HN": "es-es", "es-NI": "es-es", "es-PR": "es-es", sx: "en-us", sv: "en-us", "sv-FI": "en-us", th: "en-us", ts: "en-us", tn: "en-us", tr: "en-us", uk: "en-us", ur: "en-us", ve: "en-us", vi: "en-us", xh: "en-us", ji: "en-us", zu: "en-us" }, E = { SW_DARK_SRC: process.env.SW_DARK_SRC, SW_SRC: process.env.SW_SRC, SW_VER_DARK_SRC: process.env.SW_VER_DARK_SRC, SW_VER_SRC: process.env.SW_VER_SRC, ATSW_DARK_SRC: process.env.ATSW_DARK_SRC, ATSW_SRC: process.env.ATSW_SRC, ATSW_VER_DARK_SRC: process.env.ATSW_VER_DARK_SRC, ATSW_VER_SRC: process.env.ATSW_VER_SRC, STYLE_WIDTH: { SW: "width:150px;", SW_VER: "width:150px;", ATSW: "width:150px;", ATSW_VER: "width:150px;" } }, R = "btnsw", ct = "btnatsw", C = function (t) { return t || "" }, B = (D.getImageURL = function (t, e, n, r, i, o) { void 0 === t && (t = R); var s = ""; return n = null == n || "false" !== n.toString().toLowerCase(), s = (t = t.toLowerCase() !== R && t.toLowerCase() !== ct ? R : t).toLowerCase() === R ? C(e ? n ? E.SW_DARK_SRC : E.SW_VER_DARK_SRC : n ? E.SW_SRC : E.SW_VER_SRC) : t.toLowerCase() === ct ? null == (s = C(e ? n ? E.ATSW_DARK_SRC : E.ATSW_VER_DARK_SRC : n ? E.ATSW_SRC : E.ATSW_VER_SRC)) ? void 0 : s.replace("___1___", function (t, e) { t = t || navigator.language; return e || ut[t] || ut["default"] }(r, i)) : C(E.SW_VER_SRC), s = o && "PAY" !== o.toUpperCase() ? s : s.replace("wallet", "pay") }, D.getDefaultStyle = function () { return E.STYLE_WIDTH.SW }, D); function D() { } var lt = { TEXT: "Add To Wallet", STYLE: { "background-color": "#007aff", color: "#ffffff", "font-size": "13px", "font-weight": "600", height: "49px", "line-height": "49px", "min-width": "222px", outline: "none", border: "none", "border-radius": "3px", "font-family": "SamsungSharpSans" } }, ht = "inversion", ft = "lightonly", dt = "darkonly", pt = function (t, e) { var n = t.matches; return e && (e.toLowerCase() === ht ? n = !t.matches : e.toLowerCase() === ft ? n = !1 : e.toLowerCase() === dt && (n = !0)), n }, yt = function (e, n) { var r, t, i = null; return e.id = n.buttonId, e instanceof HTMLButtonElement ? (e.innerText = n.text || lt.TEXT, i = lt.STYLE) : e instanceof HTMLImageElement && (r = window.matchMedia("(prefers-color-scheme: dark)"), t = pt(r, n.mediaTheme), e.src = t ? n.darkSrc || B.getImageURL(n.buttonType, t, n.inline, n.language, n.locale, n.target) : n.src || B.getImageURL(n.buttonType, t, n.inline, n.language, n.locale, n.target), r.addEventListener("change", function () { var t = pt(r, n.mediaTheme); e.src = t ? n.darkSrc || B.getImageURL(n.buttonType, t, n.inline, n.language, n.locale, n.target) : n.src || B.getImageURL(n.buttonType, t, n.inline, n.language, n.locale, n.target) }), i = B.getDefaultStyle()), n["class"] && (e.removeAttribute("class"), e.classList.add(n["class"])), n["class"] && e.classList.add(n["class"]), gt(e, n.style || i), e }, gt = function (t, e) { var n = ""; if ("string" == typeof e) n = e; else for (var r in e) n += "".concat(r, ":").concat(e[r], ";"); n && t.setAttribute("style", n) }, mt = (k.prototype.updateOptions = function (t) { this.options = Object.assign(this.options, t) }, k.prototype.addToTargetDOM = function () { var t, e, n = this, r = this; this.options.isDisplayed || (t = this.options, e = "button" === t.buttonType ? document.createElement("button") : document.createElement("img"), e = yt(e, t), this.options.onShowButton && ("function" == typeof this.options.onShowButton ? this.options.onShowButton(r.options) : "string" == typeof this.options.onShowButton && window[this.options.onShowButton](r.options)), this.onShow(), e.addEventListener("click", function () { return i(n, void 0, void 0, function () { var e, n; return o(this, function (t) { switch (t.label) { case 0: return (e = undefined, n = function (t) { e === undefined && t && r.onClick() }, r.options.onClickButton) ? "function" != typeof r.options.onClickButton ? [3, 2] : [4, r.options.onClickButton(r.options, n)] : [3, 5]; case 1: return e = t.sent(), [3, 4]; case 2: return "string" != typeof r.options.onClickButton ? [3, 4] : [4, window[r.options.onClickButton](r.options, n)]; case 3: e = t.sent(), t.label = 4; case 4: return !0 === e && r.onClick(), [3, 6]; case 5: r.onClick(), t.label = 6; case 6: return [2] } }) }) }), null != (t = this.options.targetElement) && t.appendChild(e), this.changeOptionsIsDisplayed()) }, k.prototype.updateToDOM = function () { this.options.isDisplayed && yt(document.getElementById(this.options.buttonId), this.options) }, k.prototype.removeFromDOM = function () { var t; this.options.isDisplayed && (null != (t = document.getElementById(this.options.buttonId)) && t.remove(), this.changeOptionsIsDisplayed()) }, k.prototype.changeOptionsIsDisplayed = function () { this.options.isDisplayed = !this.options.isDisplayed }, k.prototype.onShow = function () { this.options.RDImpressionUrl && new it(T(this.options.RDImpressionUrl), null, null).call() }, k.prototype.onClick = function () { this.options.RDClickUrl && new it(T(this.options.RDClickUrl), null, null).call(); var t = process.env.ADD_TO_WALLET_LINK; location.href = T("".concat((t || "").replace(/___1___/gi, this.options.cardId).replace(/___2___/gi, this.options.cdata))) }, k); function k(t) { this.options = t } var L = {}, vt = (bt.isShow = function (t) { return L[t] || (L[t] = Promise.all([St(t), wt(t)])), L[t] }, bt); function bt() { this.exposurePartnerList = {} } var _t = function () { var t = "", e = ""; try { (t = navigator.userAgent.split("(")[1].split(")")[0].split(";"))[2] ? "SAMSUNG" === (e = t[2].trim().split(" ")[0]).toUpperCase() && (e = t[2].trim().split(" ")[1]) : e = "" } catch (n) { e = "" } return e }, St = function (r) { return new Promise(function (n) { return i(void 0, void 0, void 0, function () { var e; return o(this, function (t) { switch (t.label) { case 0: e = ((process.env.CMN_API_EXPOSURE_MODEL || "") + "?serviceType=${2}&modelName=${3}").replace("___1___", "US".toLowerCase()).replace("${2}", "WALLET").replace("${3}", _t()), t.label = 1; case 1: return t.trys.push([1, 3, , 4]), [4, fetch(e, { method: "GET", headers: { partnerCode: r } }).then(function (t) { return t.json() })]; case 2: return t.sent().available ? n(!0) : n(!1), [3, 4]; case 3: return t.sent(), n(!1), [3, 4]; case 4: return [2] } }) }) }) }, wt = function (r) { return new Promise(function (n) { return i(void 0, void 0, void 0, function () { var e; return o(this, function (t) { switch (t.label) { case 0: e = ((process.env.CMN_API_EXPOSURE_MODEL || "") + "?countryCode=${1}&serviceType=${2}&modelName=${3}").replace("___1___", "US".toLowerCase()).replace("${1}", "KR").replace("${2}", "WALLET").replace("${3}", _t()), t.label = 1; case 1: return t.trys.push([1, 3, , 4]), [4, fetch(e, { method: "GET", headers: { partnerCode: r } }).then(function (t) { return t.json() })]; case 2: return t.sent().supportKR ? n(!0) : n(!1), [3, 4]; case 3: return t.sent(), n(!1), [3, 4]; case 4: return [2] } }) }) }) }, e = (O.getInstance = function (t) { return O.instance = O.instance ? O.instance : new O(t) }, O.prototype.setConfig = function (t) { this.config = t }, O.prototype.getConfig = function () { return this.config }, O.prototype.addButton = function (r) { return i(this, void 0, void 0, function () { var e, n; return o(this, function (t) { switch (t.label) { case 0: return this.buttonList.find(function (t) { return t.options.buttonId === r.buttonId }) ? [3, 2] : (e = new mt(r), this.buttonList.push(e), [4, vt.isShow(r.partnerCode || "")]); case 1: ((n = t.sent())[0] || e.options && e.options.showForced) && (!e.options.target && n[1] && (e.options.target = "PAY"), this.showButton(e)), t.label = 2; case 2: return [2] } }) }) }, O.prototype.updateButton = function (e, t) { var n = this.buttonList.filter(function (t) { return t.options.buttonId === e })[0]; null != n && n.updateOptions(t), null != n && n.updateToDOM() }, O.prototype.removeButton = function (e) { try { this.buttonList = this.buttonList.filter(function (t) { return t.options.buttonId !== e }); var t = document.getElementById(e); t && t.remove() } catch (n) { } }, O.prototype.getButtons = function () { return this.buttonList }, O.prototype.showButton = function (t) { t.addToTargetDOM() }, O.prototype.showButtons = function (e) { this.buttonList.forEach(function (t) { (e || !e && t.options && t.options.showForced) && t.addToTargetDOM() }) }, O.prototype.hideButtons = function () { this.buttonList.forEach(function (t) { t.removeFromDOM() }) }, O); function O(t) { this.buttonList = [], this.config = t } var Tt, P = !1, At = (window.addEventListener("DOMContentLoaded", function () { P = !0 }), function () { return new Promise(function (e) { return i(void 0, void 0, void 0, function () { return o(this, function (t) { return P ? e({}) : window.addEventListener("DOMContentLoaded", function () { P = !0, e({}) }), [2] }) }) }) }), Et = function (e) { return i(void 0, void 0, void 0, function () { return o(this, function (t) { switch (t.label) { case 0: return [4, Promise.all([At()])]; case 1: return (t.sent(), e) ? [4, e()] : [3, 3]; case 2: t.sent(), t.label = 3; case 3: return [2] } }) }) }, I = function (e, n) { var r = ""; return e.getAttributeNames().forEach(function (t) { t.replace(/-/gi, "").replace(/_/gi, "").toLowerCase() === n && (r = e.getAttribute(t) || "") }), T(r) }, x = e.getInstance(), Rt = function (buttonOptions) { return i(void 0, void 0, void 0, function () { return o(this, function (t) { return buttonOptions.targetId && (buttonOptions.targetElement = document.getElementById(buttonOptions.targetId)), buttonOptions.targetElement && x.addButton(buttonOptions), [2] }) }) }, e = (Tt = function (t) { Rt(t) }, i(void 0, void 0, void 0, function () { return o(this, function (t) { switch (t.label) { case 0: return [4, Et(function () { var t = document.getElementsByTagName("samsung:wallet"); if (0 < t.length) for (var e = 0;e < t.length;e++) { var n = I(t[e], "inline"), r = I(t[e], "showforced"), n = { targetElement: t[e], buttonId: I(t[e], "buttonid"), cardId: I(t[e], "cardid"), cdata: I(t[e], "cdata"), src: I(t[e], "src"), text: I(t[e], "text"), RDImpressionUrl: I(t[e], "rdimpressionurl"), RDClickUrl: I(t[e], "rdclickurl"), onShowButton: I(t[e], "onshowbutton"), onClickButton: I(t[e], "onclickbutton"), language: I(t[e], "language"), locale: I(t[e], "locale"), mediaTheme: I(t[e], "mediatheme"), target: I(t[e], "target"), style: T(t[e].style.cssText), isDisplayed: !1, buttonType: I(t[e], "buttontype") || "image", inline: "false" !== n.toString().toLowerCase(), showForced: "true" === r.toString().toLowerCase(), partnerCode: I(t[e], "partnercode") }; Tt(n) } })]; case 1: return t.sent(), [2, new Promise(function (t) { t({}) })] } }) }), { setConfig: function (configOptions) { return i(void 0, void 0, void 0, function () { return o(this, function (t) { switch (t.label) { case 0: return configOptions ? (x.setConfig(configOptions), [4, Et()]) : [3, 2]; case 1: t.sent(), t.label = 2; case 2: return [2] } }) }) }, getButtons: function () { return x.getButtons() } }); return t._ = e, t.addButton = Rt, t.removeButton = function (buttonId) { return i(void 0, void 0, void 0, function () { return o(this, function (t) { return x.removeButton(buttonId), [2] }) }) }, t.updateButton = function (buttonId, buttonOptions) { return i(void 0, void 0, void 0, function () { return o(this, function (t) { return x.updateButton(buttonId, buttonOptions), [2] }) }) }, Object.defineProperty(t, "__esModule", { value: !0 }), t }({})