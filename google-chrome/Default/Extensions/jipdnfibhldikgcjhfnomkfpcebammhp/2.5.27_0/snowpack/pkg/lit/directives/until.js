import { T } from "../../common/lit-html-5c9cde68.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = (o2) => o2 === null || typeof o2 != "object" && typeof o2 != "function", e = (o2) => o2.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e$1 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i$1 {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = (i2, t2) => {
  var e2, o2;
  const r2 = i2._$AN;
  if (r2 === void 0)
    return false;
  for (const i3 of r2)
    (o2 = (e2 = i3)._$AO) === null || o2 === void 0 || o2.call(e2, t2, false), s(i3, t2);
  return true;
}, o = (i2) => {
  let t2, e2;
  do {
    if ((t2 = i2._$AM) === void 0)
      break;
    e2 = t2._$AN, e2.delete(i2), i2 = t2;
  } while ((e2 == null ? void 0 : e2.size) === 0);
}, r = (i2) => {
  for (let t2; t2 = i2._$AM; i2 = t2) {
    let e2 = t2._$AN;
    if (e2 === void 0)
      t2._$AN = e2 = /* @__PURE__ */ new Set();
    else if (e2.has(i2))
      break;
    e2.add(i2), l(t2);
  }
};
function n(i2) {
  this._$AN !== void 0 ? (o(this), this._$AM = i2, r(this)) : this._$AM = i2;
}
function h(i2, t2 = false, e2 = 0) {
  const r2 = this._$AH, n2 = this._$AN;
  if (n2 !== void 0 && n2.size !== 0)
    if (t2)
      if (Array.isArray(r2))
        for (let i3 = e2; i3 < r2.length; i3++)
          s(r2[i3], false), o(r2[i3]);
      else
        r2 != null && (s(r2, false), o(r2));
    else
      s(this, i2);
}
const l = (i2) => {
  var t$1, s2, o2, r2;
  i2.type == t.CHILD && ((t$1 = (o2 = i2)._$AP) !== null && t$1 !== void 0 || (o2._$AP = h), (s2 = (r2 = i2)._$AQ) !== null && s2 !== void 0 || (r2._$AQ = n));
};
class c extends i$1 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i2, t2, e2) {
    super._$AT(i2, t2, e2), r(this), this.isConnected = i2._$AU;
  }
  _$AO(i2, t2 = true) {
    var e2, r2;
    i2 !== this.isConnected && (this.isConnected = i2, i2 ? (e2 = this.reconnected) === null || e2 === void 0 || e2.call(this) : (r2 = this.disconnected) === null || r2 === void 0 || r2.call(this)), t2 && (s(this, i2), o(this));
  }
  setValue(t2) {
    if (e(this._$Ct))
      this._$Ct._$AI(t2, this);
    else {
      const i2 = [...this._$Ct._$AH];
      i2[this._$Ci] = t2, this._$Ct._$AI(i2, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s$1 {
  constructor(t2) {
    this.G = t2;
  }
  disconnect() {
    this.G = void 0;
  }
  reconnect(t2) {
    this.G = t2;
  }
  deref() {
    return this.G;
  }
}
class i$2 {
  constructor() {
    this.Y = void 0, this.Z = void 0;
  }
  get() {
    return this.Y;
  }
  pause() {
    var t2;
    (t2 = this.Y) !== null && t2 !== void 0 || (this.Y = new Promise((t3) => this.Z = t3));
  }
  resume() {
    var t2;
    (t2 = this.Z) === null || t2 === void 0 || t2.call(this), this.Y = this.Z = void 0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1 = (t2) => !i(t2) && typeof t2.then == "function", h$1 = 1073741823;
class c$1 extends c {
  constructor() {
    super(...arguments), this._$C_t = h$1, this._$Cwt = [], this._$Cq = new s$1(this), this._$CK = new i$2();
  }
  render(...s2) {
    var i2;
    return (i2 = s2.find((t2) => !n$1(t2))) !== null && i2 !== void 0 ? i2 : T;
  }
  update(s2, i2) {
    const r2 = this._$Cwt;
    let e2 = r2.length;
    this._$Cwt = i2;
    const o2 = this._$Cq, c2 = this._$CK;
    this.isConnected || this.disconnected();
    for (let t2 = 0; t2 < i2.length && !(t2 > this._$C_t); t2++) {
      const s3 = i2[t2];
      if (!n$1(s3))
        return this._$C_t = t2, s3;
      t2 < e2 && s3 === r2[t2] || (this._$C_t = h$1, e2 = 0, Promise.resolve(s3).then(async (t3) => {
        for (; c2.get(); )
          await c2.get();
        const i3 = o2.deref();
        if (i3 !== void 0) {
          const r3 = i3._$Cwt.indexOf(s3);
          r3 > -1 && r3 < i3._$C_t && (i3._$C_t = r3, i3.setValue(t3));
        }
      }));
    }
    return T;
  }
  disconnected() {
    this._$Cq.disconnect(), this._$CK.pause();
  }
  reconnected() {
    this._$Cq.reconnect(this), this._$CK.resume();
  }
}
const m = e$1(c$1);
export { m as until };
