import {
  Gn,
  Un,
  Vn,
  nn,
  wn
} from "./chunk-7B3ZHBG3.js";
import {
  t
} from "./chunk-H22ADNHD.js";
import {
  Aa,
  At,
  Bn,
  Ea,
  Fa,
  Fs,
  Hc,
  Hl,
  Ia,
  La,
  Ma,
  Oa,
  Oi,
  Pl,
  S,
  Ut,
  _n,
  de,
  ft,
  jg,
  oi,
  us,
  vs,
  xx,
  zl
} from "./chunk-7M7LHZLX.js";

// node_modules/.pnpm/mermaid@10.2.4/node_modules/mermaid/dist/ganttDiagram-770f21fb.js
function Rn(t2, e) {
  let n;
  if (e === void 0)
    for (const r of t2)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t2)
      (i = e(i, ++r, t2)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Bn2(t2, e) {
  let n;
  if (e === void 0)
    for (const r of t2)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t2)
      (i = e(i, ++r, t2)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Zn(t2) {
  return t2;
}
var Ot = 1;
var Qt = 2;
var oe = 3;
var Wt = 4;
var _e = 1e-6;
function Xn(t2) {
  return "translate(" + t2 + ",0)";
}
function qn(t2) {
  return "translate(0," + t2 + ")";
}
function jn(t2) {
  return (e) => +t2(e);
}
function Gn2(t2, e) {
  return e = Math.max(0, t2.bandwidth() - e * 2) / 2, t2.round() && (e = Math.round(e)), (n) => +t2(n) + e;
}
function Qn() {
  return !this.__axis;
}
function Be(t2, e) {
  var n = [], r = null, i = null, s = 6, o = 6, y = 3, M = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, p = t2 === Ot || t2 === Wt ? -1 : 1, C = t2 === Wt || t2 === Qt ? "x" : "y", S2 = t2 === Ot || t2 === oe ? Xn : qn;
  function w(b) {
    var P = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), g = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : Zn), F = Math.max(s, 0) + y, z = e.range(), O = +z[0] + M, H = +z[z.length - 1] + M, V = (e.bandwidth ? Gn2 : jn)(e.copy(), M), j = b.selection ? b.selection() : b, x = j.selectAll(".domain").data([null]), E = j.selectAll(".tick").data(P, e).order(), v = E.exit(), u = E.enter().append("g").attr("class", "tick"), f = E.select("line"), d = E.select("text");
    x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), E = E.merge(u), f = f.merge(u.append("line").attr("stroke", "currentColor").attr(C + "2", p * s)), d = d.merge(u.append("text").attr("fill", "currentColor").attr(C, p * F).attr("dy", t2 === Ot ? "0em" : t2 === oe ? "0.71em" : "0.32em")), b !== j && (x = x.transition(b), E = E.transition(b), f = f.transition(b), d = d.transition(b), v = v.transition(b).attr("opacity", _e).attr("transform", function(c) {
      return isFinite(c = V(c)) ? S2(c + M) : this.getAttribute("transform");
    }), u.attr("opacity", _e).attr("transform", function(c) {
      var T = this.parentNode.__axis;
      return S2((T && isFinite(T = T(c)) ? T : V(c)) + M);
    })), v.remove(), x.attr("d", t2 === Wt || t2 === Qt ? o ? "M" + p * o + "," + O + "H" + M + "V" + H + "H" + p * o : "M" + M + "," + O + "V" + H : o ? "M" + O + "," + p * o + "V" + M + "H" + H + "V" + p * o : "M" + O + "," + M + "H" + H), E.attr("opacity", 1).attr("transform", function(c) {
      return S2(V(c) + M);
    }), f.attr(C + "2", p * s), d.attr(C, p * F).text(g), j.filter(Qn).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === Qt ? "start" : t2 === Wt ? "end" : "middle"), j.each(function() {
      this.__axis = V;
    });
  }
  return w.scale = function(b) {
    return arguments.length ? (e = b, w) : e;
  }, w.ticks = function() {
    return n = Array.from(arguments), w;
  }, w.tickArguments = function(b) {
    return arguments.length ? (n = b == null ? [] : Array.from(b), w) : n.slice();
  }, w.tickValues = function(b) {
    return arguments.length ? (r = b == null ? null : Array.from(b), w) : r && r.slice();
  }, w.tickFormat = function(b) {
    return arguments.length ? (i = b, w) : i;
  }, w.tickSize = function(b) {
    return arguments.length ? (s = o = +b, w) : s;
  }, w.tickSizeInner = function(b) {
    return arguments.length ? (s = +b, w) : s;
  }, w.tickSizeOuter = function(b) {
    return arguments.length ? (o = +b, w) : o;
  }, w.tickPadding = function(b) {
    return arguments.length ? (y = +b, w) : y;
  }, w.offset = function(b) {
    return arguments.length ? (M = +b, w) : M;
  }, w;
}
function Jn(t2) {
  return Be(Ot, t2);
}
function Kn(t2) {
  return Be(oe, t2);
}
var $n = Math.PI / 180;
var tr = 180 / Math.PI;
var Ht = 18;
var Ze = 0.96422;
var Xe = 1;
var qe = 0.82521;
var je = 4 / 29;
var vt = 6 / 29;
var Ge = 3 * vt * vt;
var er = vt * vt * vt;
function Qe(t2) {
  if (t2 instanceof ot)
    return new ot(t2.l, t2.a, t2.b, t2.opacity);
  if (t2 instanceof ut)
    return Je(t2);
  t2 instanceof ft || (t2 = Hc(t2));
  var e = te(t2.r), n = te(t2.g), r = te(t2.b), i = Jt((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / Xe), s, o;
  return e === n && n === r ? s = o = i : (s = Jt((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / Ze), o = Jt((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / qe)), new ot(116 * i - 16, 500 * (s - i), 200 * (i - o), t2.opacity);
}
function nr(t2, e, n, r) {
  return arguments.length === 1 ? Qe(t2) : new ot(t2, e, n, r ?? 1);
}
function ot(t2, e, n, r) {
  this.l = +t2, this.a = +e, this.b = +n, this.opacity = +r;
}
_n(ot, nr, vs(oi, {
  brighter(t2) {
    return new ot(this.l + Ht * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  darker(t2) {
    return new ot(this.l - Ht * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t2 = (this.l + 16) / 116, e = isNaN(this.a) ? t2 : t2 + this.a / 500, n = isNaN(this.b) ? t2 : t2 - this.b / 200;
    return e = Ze * Kt(e), t2 = Xe * Kt(t2), n = qe * Kt(n), new ft(
      $t(3.1338561 * e - 1.6168667 * t2 - 0.4906146 * n),
      $t(-0.9787684 * e + 1.9161415 * t2 + 0.033454 * n),
      $t(0.0719453 * e - 0.2289914 * t2 + 1.4052427 * n),
      this.opacity
    );
  }
}));
function Jt(t2) {
  return t2 > er ? Math.pow(t2, 1 / 3) : t2 / Ge + je;
}
function Kt(t2) {
  return t2 > vt ? t2 * t2 * t2 : Ge * (t2 - je);
}
function $t(t2) {
  return 255 * (t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055);
}
function te(t2) {
  return (t2 /= 255) <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
}
function rr(t2) {
  if (t2 instanceof ut)
    return new ut(t2.h, t2.c, t2.l, t2.opacity);
  if (t2 instanceof ot || (t2 = Qe(t2)), t2.a === 0 && t2.b === 0)
    return new ut(NaN, 0 < t2.l && t2.l < 100 ? 0 : NaN, t2.l, t2.opacity);
  var e = Math.atan2(t2.b, t2.a) * tr;
  return new ut(e < 0 ? e + 360 : e, Math.sqrt(t2.a * t2.a + t2.b * t2.b), t2.l, t2.opacity);
}
function ce(t2, e, n, r) {
  return arguments.length === 1 ? rr(t2) : new ut(t2, e, n, r ?? 1);
}
function ut(t2, e, n, r) {
  this.h = +t2, this.c = +e, this.l = +n, this.opacity = +r;
}
function Je(t2) {
  if (isNaN(t2.h))
    return new ot(t2.l, 0, 0, t2.opacity);
  var e = t2.h * $n;
  return new ot(t2.l, Math.cos(e) * t2.c, Math.sin(e) * t2.c, t2.opacity);
}
_n(ut, ce, vs(oi, {
  brighter(t2) {
    return new ut(this.h, this.c, this.l + Ht * (t2 ?? 1), this.opacity);
  },
  darker(t2) {
    return new ut(this.h, this.c, this.l - Ht * (t2 ?? 1), this.opacity);
  },
  rgb() {
    return Je(this).rgb();
  }
}));
function ir(t2) {
  return function(e, n) {
    var r = t2((e = ce(e)).h, (n = ce(n)).h), i = Fs(e.c, n.c), s = Fs(e.l, n.l), o = Fs(e.opacity, n.opacity);
    return function(y) {
      return e.h = r(y), e.c = i(y), e.l = s(y), e.opacity = o(y), e + "";
    };
  };
}
var sr = ir(xx);
function ar(t2, e) {
  t2 = t2.slice();
  var n = 0, r = t2.length - 1, i = t2[n], s = t2[r], o;
  return s < i && (o = n, n = r, r = o, o = i, i = s, s = o), t2[n] = e.floor(i), t2[r] = e.ceil(s), t2;
}
var ee = /* @__PURE__ */ new Date();
var ne = /* @__PURE__ */ new Date();
function et(t2, e, n, r) {
  function i(s) {
    return t2(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return i.floor = function(s) {
    return t2(s = /* @__PURE__ */ new Date(+s)), s;
  }, i.ceil = function(s) {
    return t2(s = new Date(s - 1)), e(s, 1), t2(s), s;
  }, i.round = function(s) {
    var o = i(s), y = i.ceil(s);
    return s - o < y - s ? o : y;
  }, i.offset = function(s, o) {
    return e(s = /* @__PURE__ */ new Date(+s), o == null ? 1 : Math.floor(o)), s;
  }, i.range = function(s, o, y) {
    var M = [], p;
    if (s = i.ceil(s), y = y == null ? 1 : Math.floor(y), !(s < o) || !(y > 0))
      return M;
    do
      M.push(p = /* @__PURE__ */ new Date(+s)), e(s, y), t2(s);
    while (p < s && s < o);
    return M;
  }, i.filter = function(s) {
    return et(function(o) {
      if (o >= o)
        for (; t2(o), !s(o); )
          o.setTime(o - 1);
    }, function(o, y) {
      if (o >= o)
        if (y < 0)
          for (; ++y <= 0; )
            for (; e(o, -1), !s(o); )
              ;
        else
          for (; --y >= 0; )
            for (; e(o, 1), !s(o); )
              ;
    });
  }, n && (i.count = function(s, o) {
    return ee.setTime(+s), ne.setTime(+o), t2(ee), t2(ne), Math.floor(n(ee, ne));
  }, i.every = function(s) {
    return s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? i.filter(r ? function(o) {
      return r(o) % s === 0;
    } : function(o) {
      return i.count(0, o) % s === 0;
    }) : i;
  }), i;
}
var Vt = et(function() {
}, function(t2, e) {
  t2.setTime(+t2 + e);
}, function(t2, e) {
  return e - t2;
});
Vt.every = function(t2) {
  return t2 = Math.floor(t2), !isFinite(t2) || !(t2 > 0) ? null : t2 > 1 ? et(function(e) {
    e.setTime(Math.floor(e / t2) * t2);
  }, function(e, n) {
    e.setTime(+e + n * t2);
  }, function(e, n) {
    return (n - e) / t2;
  }) : Vt;
};
var or = Vt;
Vt.range;
var lt = 1e3;
var st = lt * 60;
var ht = st * 60;
var dt = ht * 24;
var ge = dt * 7;
var Se = dt * 30;
var re = dt * 365;
var Ke = et(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds());
}, function(t2, e) {
  t2.setTime(+t2 + e * lt);
}, function(t2, e) {
  return (e - t2) / lt;
}, function(t2) {
  return t2.getUTCSeconds();
});
var Ft = Ke;
Ke.range;
var $e = et(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * lt);
}, function(t2, e) {
  t2.setTime(+t2 + e * st);
}, function(t2, e) {
  return (e - t2) / st;
}, function(t2) {
  return t2.getMinutes();
});
var Pt = $e;
$e.range;
var tn = et(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * lt - t2.getMinutes() * st);
}, function(t2, e) {
  t2.setTime(+t2 + e * ht);
}, function(t2, e) {
  return (e - t2) / ht;
}, function(t2) {
  return t2.getHours();
});
var Rt = tn;
tn.range;
var en = et(
  (t2) => t2.setHours(0, 0, 0, 0),
  (t2, e) => t2.setDate(t2.getDate() + e),
  (t2, e) => (e - t2 - (e.getTimezoneOffset() - t2.getTimezoneOffset()) * st) / dt,
  (t2) => t2.getDate() - 1
);
var xt = en;
en.range;
function gt(t2) {
  return et(function(e) {
    e.setDate(e.getDate() - (e.getDay() + 7 - t2) % 7), e.setHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setDate(e.getDate() + n * 7);
  }, function(e, n) {
    return (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * st) / ge;
  });
}
var bt = gt(0);
var Bt = gt(1);
var cr = gt(2);
var ur = gt(3);
var wt = gt(4);
var lr = gt(5);
var fr = gt(6);
bt.range;
Bt.range;
cr.range;
ur.range;
wt.range;
lr.range;
fr.range;
var nn2 = et(function(t2) {
  t2.setDate(1), t2.setHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setMonth(t2.getMonth() + e);
}, function(t2, e) {
  return e.getMonth() - t2.getMonth() + (e.getFullYear() - t2.getFullYear()) * 12;
}, function(t2) {
  return t2.getMonth();
});
var Zt = nn2;
nn2.range;
var ye = et(function(t2) {
  t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setFullYear(t2.getFullYear() + e);
}, function(t2, e) {
  return e.getFullYear() - t2.getFullYear();
}, function(t2) {
  return t2.getFullYear();
});
ye.every = function(t2) {
  return !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : et(function(e) {
    e.setFullYear(Math.floor(e.getFullYear() / t2) * t2), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setFullYear(e.getFullYear() + n * t2);
  });
};
var mt = ye;
ye.range;
var rn = et(function(t2) {
  t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCDate(t2.getUTCDate() + e);
}, function(t2, e) {
  return (e - t2) / dt;
}, function(t2) {
  return t2.getUTCDate() - 1;
});
var sn = rn;
rn.range;
function yt(t2) {
  return et(function(e) {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t2) % 7), e.setUTCHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, function(e, n) {
    return (n - e) / ge;
  });
}
var an = yt(0);
var Xt = yt(1);
var hr = yt(2);
var dr = yt(3);
var Dt = yt(4);
var mr = yt(5);
var gr = yt(6);
an.range;
Xt.range;
hr.range;
dr.range;
Dt.range;
mr.range;
gr.range;
var ke = et(function(t2) {
  t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCFullYear(t2.getUTCFullYear() + e);
}, function(t2, e) {
  return e.getUTCFullYear() - t2.getUTCFullYear();
}, function(t2) {
  return t2.getUTCFullYear();
});
ke.every = function(t2) {
  return !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : et(function(e) {
    e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t2) * t2), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setUTCFullYear(e.getUTCFullYear() + n * t2);
  });
};
var Ut2 = ke;
ke.range;
function yr(t2, e, n, r, i, s) {
  const o = [
    [Ft, 1, lt],
    [Ft, 5, 5 * lt],
    [Ft, 15, 15 * lt],
    [Ft, 30, 30 * lt],
    [s, 1, st],
    [s, 5, 5 * st],
    [s, 15, 15 * st],
    [s, 30, 30 * st],
    [i, 1, ht],
    [i, 3, 3 * ht],
    [i, 6, 6 * ht],
    [i, 12, 12 * ht],
    [r, 1, dt],
    [r, 2, 2 * dt],
    [n, 1, ge],
    [e, 1, Se],
    [e, 3, 3 * Se],
    [t2, 1, re]
  ];
  function y(p, C, S2) {
    const w = C < p;
    w && ([p, C] = [C, p]);
    const b = S2 && typeof S2.range == "function" ? S2 : M(p, C, S2), P = b ? b.range(p, +C + 1) : [];
    return w ? P.reverse() : P;
  }
  function M(p, C, S2) {
    const w = Math.abs(C - p) / S2, b = nn(([, , F]) => F).right(o, w);
    if (b === o.length)
      return t2.every(wn(p / re, C / re, S2));
    if (b === 0)
      return or.every(Math.max(wn(p, C, S2), 1));
    const [P, g] = o[w / o[b - 1][2] < o[b][2] / w ? b - 1 : b];
    return P.every(g);
  }
  return [y, M];
}
var [kr, pr] = yr(mt, Zt, bt, xt, Rt, Pt);
function ie(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
    return e.setFullYear(t2.y), e;
  }
  return new Date(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
}
function se(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(Date.UTC(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
    return e.setUTCFullYear(t2.y), e;
  }
  return new Date(Date.UTC(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
}
function _t(t2, e, n) {
  return { y: t2, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function vr(t2) {
  var e = t2.dateTime, n = t2.date, r = t2.time, i = t2.periods, s = t2.days, o = t2.shortDays, y = t2.months, M = t2.shortMonths, p = St(i), C = Yt(i), S2 = St(s), w = Yt(s), b = St(o), P = Yt(o), g = St(y), F = Yt(y), z = St(M), O = Yt(M), H = {
    a: B,
    A: Z,
    b: J,
    B: m,
    c: null,
    d: Ae,
    e: Ae,
    f: Pr,
    g: Kr,
    G: ti,
    H: Nr,
    I: Hr,
    j: Vr,
    L: on,
    m: Rr,
    M: Br,
    p: _,
    q: Y,
    Q: Oe,
    s: ze,
    S: Zr,
    u: Xr,
    U: qr,
    V: jr,
    w: Gr,
    W: Qr,
    x: null,
    X: null,
    y: Jr,
    Y: $r,
    Z: ei,
    "%": We
  }, V = {
    a: U,
    A: W,
    b: G,
    B: R,
    c: null,
    d: Ie,
    e: Ie,
    f: si,
    g: gi,
    G: ki,
    H: ni,
    I: ri,
    j: ii,
    L: un,
    m: ai,
    M: oi2,
    p: ft2,
    q,
    Q: Oe,
    s: ze,
    S: ci,
    u: ui,
    U: li,
    V: fi,
    w: hi,
    W: di,
    x: null,
    X: null,
    y: mi,
    Y: yi,
    Z: pi,
    "%": We
  }, j = {
    a: f,
    A: d,
    b: c,
    B: T,
    c: a,
    d: Le,
    e: Le,
    f: Ir,
    g: Ue,
    G: Fe,
    H: Ee,
    I: Ee,
    j: Ur,
    L: Ar,
    m: Fr,
    M: Lr,
    p: u,
    q: Yr,
    Q: Or,
    s: zr,
    S: Er,
    u: Dr,
    U: Cr,
    V: Mr,
    w: wr,
    W: _r,
    x: A,
    X: h,
    y: Ue,
    Y: Fe,
    Z: Sr,
    "%": Wr
  };
  H.x = x(n, H), H.X = x(r, H), H.c = x(e, H), V.x = x(n, V), V.X = x(r, V), V.c = x(e, V);
  function x(k, D) {
    return function(L) {
      var l = [], X = -1, I = 0, Q = k.length, K, it, rt;
      for (L instanceof Date || (L = /* @__PURE__ */ new Date(+L)); ++X < Q; )
        k.charCodeAt(X) === 37 && (l.push(k.slice(I, X)), (it = Ye[K = k.charAt(++X)]) != null ? K = k.charAt(++X) : it = K === "e" ? " " : "0", (rt = D[K]) && (K = rt(L, it)), l.push(K), I = X + 1);
      return l.push(k.slice(I, X)), l.join("");
    };
  }
  function E(k, D) {
    return function(L) {
      var l = _t(1900, void 0, 1), X = v(l, k, L += "", 0), I, Q;
      if (X != L.length)
        return null;
      if ("Q" in l)
        return new Date(l.Q);
      if ("s" in l)
        return new Date(l.s * 1e3 + ("L" in l ? l.L : 0));
      if (D && !("Z" in l) && (l.Z = 0), "p" in l && (l.H = l.H % 12 + l.p * 12), l.m === void 0 && (l.m = "q" in l ? l.q : 0), "V" in l) {
        if (l.V < 1 || l.V > 53)
          return null;
        "w" in l || (l.w = 1), "Z" in l ? (I = se(_t(l.y, 0, 1)), Q = I.getUTCDay(), I = Q > 4 || Q === 0 ? Xt.ceil(I) : Xt(I), I = sn.offset(I, (l.V - 1) * 7), l.y = I.getUTCFullYear(), l.m = I.getUTCMonth(), l.d = I.getUTCDate() + (l.w + 6) % 7) : (I = ie(_t(l.y, 0, 1)), Q = I.getDay(), I = Q > 4 || Q === 0 ? Bt.ceil(I) : Bt(I), I = xt.offset(I, (l.V - 1) * 7), l.y = I.getFullYear(), l.m = I.getMonth(), l.d = I.getDate() + (l.w + 6) % 7);
      } else
        ("W" in l || "U" in l) && ("w" in l || (l.w = "u" in l ? l.u % 7 : "W" in l ? 1 : 0), Q = "Z" in l ? se(_t(l.y, 0, 1)).getUTCDay() : ie(_t(l.y, 0, 1)).getDay(), l.m = 0, l.d = "W" in l ? (l.w + 6) % 7 + l.W * 7 - (Q + 5) % 7 : l.w + l.U * 7 - (Q + 6) % 7);
      return "Z" in l ? (l.H += l.Z / 100 | 0, l.M += l.Z % 100, se(l)) : ie(l);
    };
  }
  function v(k, D, L, l) {
    for (var X = 0, I = D.length, Q = L.length, K, it; X < I; ) {
      if (l >= Q)
        return -1;
      if (K = D.charCodeAt(X++), K === 37) {
        if (K = D.charAt(X++), it = j[K in Ye ? D.charAt(X++) : K], !it || (l = it(k, L, l)) < 0)
          return -1;
      } else if (K != L.charCodeAt(l++))
        return -1;
    }
    return l;
  }
  function u(k, D, L) {
    var l = p.exec(D.slice(L));
    return l ? (k.p = C.get(l[0].toLowerCase()), L + l[0].length) : -1;
  }
  function f(k, D, L) {
    var l = b.exec(D.slice(L));
    return l ? (k.w = P.get(l[0].toLowerCase()), L + l[0].length) : -1;
  }
  function d(k, D, L) {
    var l = S2.exec(D.slice(L));
    return l ? (k.w = w.get(l[0].toLowerCase()), L + l[0].length) : -1;
  }
  function c(k, D, L) {
    var l = z.exec(D.slice(L));
    return l ? (k.m = O.get(l[0].toLowerCase()), L + l[0].length) : -1;
  }
  function T(k, D, L) {
    var l = g.exec(D.slice(L));
    return l ? (k.m = F.get(l[0].toLowerCase()), L + l[0].length) : -1;
  }
  function a(k, D, L) {
    return v(k, e, D, L);
  }
  function A(k, D, L) {
    return v(k, n, D, L);
  }
  function h(k, D, L) {
    return v(k, r, D, L);
  }
  function B(k) {
    return o[k.getDay()];
  }
  function Z(k) {
    return s[k.getDay()];
  }
  function J(k) {
    return M[k.getMonth()];
  }
  function m(k) {
    return y[k.getMonth()];
  }
  function _(k) {
    return i[+(k.getHours() >= 12)];
  }
  function Y(k) {
    return 1 + ~~(k.getMonth() / 3);
  }
  function U(k) {
    return o[k.getUTCDay()];
  }
  function W(k) {
    return s[k.getUTCDay()];
  }
  function G(k) {
    return M[k.getUTCMonth()];
  }
  function R(k) {
    return y[k.getUTCMonth()];
  }
  function ft2(k) {
    return i[+(k.getUTCHours() >= 12)];
  }
  function q(k) {
    return 1 + ~~(k.getUTCMonth() / 3);
  }
  return {
    format: function(k) {
      var D = x(k += "", H);
      return D.toString = function() {
        return k;
      }, D;
    },
    parse: function(k) {
      var D = E(k += "", false);
      return D.toString = function() {
        return k;
      }, D;
    },
    utcFormat: function(k) {
      var D = x(k += "", V);
      return D.toString = function() {
        return k;
      }, D;
    },
    utcParse: function(k) {
      var D = E(k += "", true);
      return D.toString = function() {
        return k;
      }, D;
    }
  };
}
var Ye = { "-": "", _: " ", 0: "0" };
var tt = /^\s*\d+/;
var Tr = /^%/;
var xr = /[\\^$*+?|[\]().{}]/g;
function N(t2, e, n) {
  var r = t2 < 0 ? "-" : "", i = (r ? -t2 : t2) + "", s = i.length;
  return r + (s < n ? new Array(n - s + 1).join(e) + i : i);
}
function br(t2) {
  return t2.replace(xr, "\\$&");
}
function St(t2) {
  return new RegExp("^(?:" + t2.map(br).join("|") + ")", "i");
}
function Yt(t2) {
  return new Map(t2.map((e, n) => [e.toLowerCase(), n]));
}
function wr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 1));
  return r ? (t2.w = +r[0], n + r[0].length) : -1;
}
function Dr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 1));
  return r ? (t2.u = +r[0], n + r[0].length) : -1;
}
function Cr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.U = +r[0], n + r[0].length) : -1;
}
function Mr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.V = +r[0], n + r[0].length) : -1;
}
function _r(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.W = +r[0], n + r[0].length) : -1;
}
function Fe(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 4));
  return r ? (t2.y = +r[0], n + r[0].length) : -1;
}
function Ue(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Sr(t2, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t2.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Yr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 1));
  return r ? (t2.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Fr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.m = r[0] - 1, n + r[0].length) : -1;
}
function Le(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.d = +r[0], n + r[0].length) : -1;
}
function Ur(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 3));
  return r ? (t2.m = 0, t2.d = +r[0], n + r[0].length) : -1;
}
function Ee(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.H = +r[0], n + r[0].length) : -1;
}
function Lr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.M = +r[0], n + r[0].length) : -1;
}
function Er(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.S = +r[0], n + r[0].length) : -1;
}
function Ar(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 3));
  return r ? (t2.L = +r[0], n + r[0].length) : -1;
}
function Ir(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 6));
  return r ? (t2.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Wr(t2, e, n) {
  var r = Tr.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Or(t2, e, n) {
  var r = tt.exec(e.slice(n));
  return r ? (t2.Q = +r[0], n + r[0].length) : -1;
}
function zr(t2, e, n) {
  var r = tt.exec(e.slice(n));
  return r ? (t2.s = +r[0], n + r[0].length) : -1;
}
function Ae(t2, e) {
  return N(t2.getDate(), e, 2);
}
function Nr(t2, e) {
  return N(t2.getHours(), e, 2);
}
function Hr(t2, e) {
  return N(t2.getHours() % 12 || 12, e, 2);
}
function Vr(t2, e) {
  return N(1 + xt.count(mt(t2), t2), e, 3);
}
function on(t2, e) {
  return N(t2.getMilliseconds(), e, 3);
}
function Pr(t2, e) {
  return on(t2, e) + "000";
}
function Rr(t2, e) {
  return N(t2.getMonth() + 1, e, 2);
}
function Br(t2, e) {
  return N(t2.getMinutes(), e, 2);
}
function Zr(t2, e) {
  return N(t2.getSeconds(), e, 2);
}
function Xr(t2) {
  var e = t2.getDay();
  return e === 0 ? 7 : e;
}
function qr(t2, e) {
  return N(bt.count(mt(t2) - 1, t2), e, 2);
}
function cn(t2) {
  var e = t2.getDay();
  return e >= 4 || e === 0 ? wt(t2) : wt.ceil(t2);
}
function jr(t2, e) {
  return t2 = cn(t2), N(wt.count(mt(t2), t2) + (mt(t2).getDay() === 4), e, 2);
}
function Gr(t2) {
  return t2.getDay();
}
function Qr(t2, e) {
  return N(Bt.count(mt(t2) - 1, t2), e, 2);
}
function Jr(t2, e) {
  return N(t2.getFullYear() % 100, e, 2);
}
function Kr(t2, e) {
  return t2 = cn(t2), N(t2.getFullYear() % 100, e, 2);
}
function $r(t2, e) {
  return N(t2.getFullYear() % 1e4, e, 4);
}
function ti(t2, e) {
  var n = t2.getDay();
  return t2 = n >= 4 || n === 0 ? wt(t2) : wt.ceil(t2), N(t2.getFullYear() % 1e4, e, 4);
}
function ei(t2) {
  var e = t2.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + N(e / 60 | 0, "0", 2) + N(e % 60, "0", 2);
}
function Ie(t2, e) {
  return N(t2.getUTCDate(), e, 2);
}
function ni(t2, e) {
  return N(t2.getUTCHours(), e, 2);
}
function ri(t2, e) {
  return N(t2.getUTCHours() % 12 || 12, e, 2);
}
function ii(t2, e) {
  return N(1 + sn.count(Ut2(t2), t2), e, 3);
}
function un(t2, e) {
  return N(t2.getUTCMilliseconds(), e, 3);
}
function si(t2, e) {
  return un(t2, e) + "000";
}
function ai(t2, e) {
  return N(t2.getUTCMonth() + 1, e, 2);
}
function oi2(t2, e) {
  return N(t2.getUTCMinutes(), e, 2);
}
function ci(t2, e) {
  return N(t2.getUTCSeconds(), e, 2);
}
function ui(t2) {
  var e = t2.getUTCDay();
  return e === 0 ? 7 : e;
}
function li(t2, e) {
  return N(an.count(Ut2(t2) - 1, t2), e, 2);
}
function ln(t2) {
  var e = t2.getUTCDay();
  return e >= 4 || e === 0 ? Dt(t2) : Dt.ceil(t2);
}
function fi(t2, e) {
  return t2 = ln(t2), N(Dt.count(Ut2(t2), t2) + (Ut2(t2).getUTCDay() === 4), e, 2);
}
function hi(t2) {
  return t2.getUTCDay();
}
function di(t2, e) {
  return N(Xt.count(Ut2(t2) - 1, t2), e, 2);
}
function mi(t2, e) {
  return N(t2.getUTCFullYear() % 100, e, 2);
}
function gi(t2, e) {
  return t2 = ln(t2), N(t2.getUTCFullYear() % 100, e, 2);
}
function yi(t2, e) {
  return N(t2.getUTCFullYear() % 1e4, e, 4);
}
function ki(t2, e) {
  var n = t2.getUTCDay();
  return t2 = n >= 4 || n === 0 ? Dt(t2) : Dt.ceil(t2), N(t2.getUTCFullYear() % 1e4, e, 4);
}
function pi() {
  return "+0000";
}
function We() {
  return "%";
}
function Oe(t2) {
  return +t2;
}
function ze(t2) {
  return Math.floor(+t2 / 1e3);
}
var kt;
var qt;
vi({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function vi(t2) {
  return kt = vr(t2), qt = kt.format, kt.parse, kt.utcFormat, kt.utcParse, kt;
}
function Ti(t2) {
  return new Date(t2);
}
function xi(t2) {
  return t2 instanceof Date ? +t2 : +/* @__PURE__ */ new Date(+t2);
}
function fn(t2, e, n, r, i, s, o, y, M, p) {
  var C = Vn(), S2 = C.invert, w = C.domain, b = p(".%L"), P = p(":%S"), g = p("%I:%M"), F = p("%I %p"), z = p("%a %d"), O = p("%b %d"), H = p("%B"), V = p("%Y");
  function j(x) {
    return (M(x) < x ? b : y(x) < x ? P : o(x) < x ? g : s(x) < x ? F : r(x) < x ? i(x) < x ? z : O : n(x) < x ? H : V)(x);
  }
  return C.invert = function(x) {
    return new Date(S2(x));
  }, C.domain = function(x) {
    return arguments.length ? w(Array.from(x, xi)) : w().map(Ti);
  }, C.ticks = function(x) {
    var E = w();
    return t2(E[0], E[E.length - 1], x ?? 10);
  }, C.tickFormat = function(x, E) {
    return E == null ? j : p(E);
  }, C.nice = function(x) {
    var E = w();
    return (!x || typeof x.range != "function") && (x = e(E[0], E[E.length - 1], x ?? 10)), x ? w(ar(E, x)) : C;
  }, C.copy = function() {
    return Gn(C, fn(t2, e, n, r, i, s, o, y, M, p));
  }, C;
}
function bi() {
  return t.apply(fn(kr, pr, mt, Zt, bt, xt, Rt, Pt, Ft, qt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var ue = function() {
  var t2 = function(v, u, f, d) {
    for (f = f || {}, d = v.length; d--; f[v[d]] = u)
      ;
    return f;
  }, e = [1, 3], n = [1, 5], r = [7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 28, 35, 40], i = [1, 15], s = [1, 16], o = [1, 17], y = [1, 18], M = [1, 19], p = [1, 20], C = [1, 21], S2 = [1, 22], w = [1, 23], b = [1, 24], P = [1, 25], g = [1, 26], F = [1, 27], z = [1, 29], O = [1, 31], H = [1, 34], V = [5, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 28, 35, 40], j = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, directive: 4, gantt: 5, document: 6, EOF: 7, line: 8, SPACE: 9, statement: 10, NL: 11, dateFormat: 12, inclusiveEndDates: 13, topAxis: 14, axisFormat: 15, tickInterval: 16, excludes: 17, includes: 18, todayMarker: 19, title: 20, acc_title: 21, acc_title_value: 22, acc_descr: 23, acc_descr_value: 24, acc_descr_multiline_value: 25, section: 26, clickStatement: 27, taskTxt: 28, taskData: 29, openDirective: 30, typeDirective: 31, closeDirective: 32, ":": 33, argDirective: 34, click: 35, callbackname: 36, callbackargs: 37, href: 38, clickStatementDebug: 39, open_directive: 40, type_directive: 41, arg_directive: 42, close_directive: 43, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "gantt", 7: "EOF", 9: "SPACE", 11: "NL", 12: "dateFormat", 13: "inclusiveEndDates", 14: "topAxis", 15: "axisFormat", 16: "tickInterval", 17: "excludes", 18: "includes", 19: "todayMarker", 20: "title", 21: "acc_title", 22: "acc_title_value", 23: "acc_descr", 24: "acc_descr_value", 25: "acc_descr_multiline_value", 26: "section", 28: "taskTxt", 29: "taskData", 33: ":", 35: "click", 36: "callbackname", 37: "callbackargs", 38: "href", 40: "open_directive", 41: "type_directive", 42: "arg_directive", 43: "close_directive" },
    productions_: [0, [3, 2], [3, 3], [6, 0], [6, 2], [8, 2], [8, 1], [8, 1], [8, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [10, 2], [10, 1], [4, 4], [4, 6], [27, 2], [27, 3], [27, 3], [27, 4], [27, 3], [27, 4], [27, 2], [39, 2], [39, 3], [39, 3], [39, 4], [39, 3], [39, 4], [39, 2], [30, 1], [31, 1], [34, 1], [32, 1]],
    performAction: function(u, f, d, c, T, a, A) {
      var h = a.length - 1;
      switch (T) {
        case 2:
          return a[h - 1];
        case 3:
          this.$ = [];
          break;
        case 4:
          a[h - 1].push(a[h]), this.$ = a[h - 1];
          break;
        case 5:
        case 6:
          this.$ = a[h];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 9:
          c.setDateFormat(a[h].substr(11)), this.$ = a[h].substr(11);
          break;
        case 10:
          c.enableInclusiveEndDates(), this.$ = a[h].substr(18);
          break;
        case 11:
          c.TopAxis(), this.$ = a[h].substr(8);
          break;
        case 12:
          c.setAxisFormat(a[h].substr(11)), this.$ = a[h].substr(11);
          break;
        case 13:
          c.setTickInterval(a[h].substr(13)), this.$ = a[h].substr(13);
          break;
        case 14:
          c.setExcludes(a[h].substr(9)), this.$ = a[h].substr(9);
          break;
        case 15:
          c.setIncludes(a[h].substr(9)), this.$ = a[h].substr(9);
          break;
        case 16:
          c.setTodayMarker(a[h].substr(12)), this.$ = a[h].substr(12);
          break;
        case 17:
          c.setDiagramTitle(a[h].substr(6)), this.$ = a[h].substr(6);
          break;
        case 18:
          this.$ = a[h].trim(), c.setAccTitle(this.$);
          break;
        case 19:
        case 20:
          this.$ = a[h].trim(), c.setAccDescription(this.$);
          break;
        case 21:
          c.addSection(a[h].substr(8)), this.$ = a[h].substr(8);
          break;
        case 23:
          c.addTask(a[h - 1], a[h]), this.$ = "task";
          break;
        case 27:
          this.$ = a[h - 1], c.setClickEvent(a[h - 1], a[h], null);
          break;
        case 28:
          this.$ = a[h - 2], c.setClickEvent(a[h - 2], a[h - 1], a[h]);
          break;
        case 29:
          this.$ = a[h - 2], c.setClickEvent(a[h - 2], a[h - 1], null), c.setLink(a[h - 2], a[h]);
          break;
        case 30:
          this.$ = a[h - 3], c.setClickEvent(a[h - 3], a[h - 2], a[h - 1]), c.setLink(a[h - 3], a[h]);
          break;
        case 31:
          this.$ = a[h - 2], c.setClickEvent(a[h - 2], a[h], null), c.setLink(a[h - 2], a[h - 1]);
          break;
        case 32:
          this.$ = a[h - 3], c.setClickEvent(a[h - 3], a[h - 1], a[h]), c.setLink(a[h - 3], a[h - 2]);
          break;
        case 33:
          this.$ = a[h - 1], c.setLink(a[h - 1], a[h]);
          break;
        case 34:
        case 40:
          this.$ = a[h - 1] + " " + a[h];
          break;
        case 35:
        case 36:
        case 38:
          this.$ = a[h - 2] + " " + a[h - 1] + " " + a[h];
          break;
        case 37:
        case 39:
          this.$ = a[h - 3] + " " + a[h - 2] + " " + a[h - 1] + " " + a[h];
          break;
        case 41:
          c.parseDirective("%%{", "open_directive");
          break;
        case 42:
          c.parseDirective(a[h], "type_directive");
          break;
        case 43:
          a[h] = a[h].trim().replace(/'/g, '"'), c.parseDirective(a[h], "arg_directive");
          break;
        case 44:
          c.parseDirective("}%%", "close_directive", "gantt");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: e, 30: 4, 40: n }, { 1: [3] }, { 3: 6, 4: 2, 5: e, 30: 4, 40: n }, t2(r, [2, 3], { 6: 7 }), { 31: 8, 41: [1, 9] }, { 41: [2, 41] }, { 1: [2, 1] }, { 4: 30, 7: [1, 10], 8: 11, 9: [1, 12], 10: 13, 11: [1, 14], 12: i, 13: s, 14: o, 15: y, 16: M, 17: p, 18: C, 19: S2, 20: w, 21: b, 23: P, 25: g, 26: F, 27: 28, 28: z, 30: 4, 35: O, 40: n }, { 32: 32, 33: [1, 33], 43: H }, t2([33, 43], [2, 42]), t2(r, [2, 8], { 1: [2, 2] }), t2(r, [2, 4]), { 4: 30, 10: 35, 12: i, 13: s, 14: o, 15: y, 16: M, 17: p, 18: C, 19: S2, 20: w, 21: b, 23: P, 25: g, 26: F, 27: 28, 28: z, 30: 4, 35: O, 40: n }, t2(r, [2, 6]), t2(r, [2, 7]), t2(r, [2, 9]), t2(r, [2, 10]), t2(r, [2, 11]), t2(r, [2, 12]), t2(r, [2, 13]), t2(r, [2, 14]), t2(r, [2, 15]), t2(r, [2, 16]), t2(r, [2, 17]), { 22: [1, 36] }, { 24: [1, 37] }, t2(r, [2, 20]), t2(r, [2, 21]), t2(r, [2, 22]), { 29: [1, 38] }, t2(r, [2, 24]), { 36: [1, 39], 38: [1, 40] }, { 11: [1, 41] }, { 34: 42, 42: [1, 43] }, { 11: [2, 44] }, t2(r, [2, 5]), t2(r, [2, 18]), t2(r, [2, 19]), t2(r, [2, 23]), t2(r, [2, 27], { 37: [1, 44], 38: [1, 45] }), t2(r, [2, 33], { 36: [1, 46] }), t2(V, [2, 25]), { 32: 47, 43: H }, { 43: [2, 43] }, t2(r, [2, 28], { 38: [1, 48] }), t2(r, [2, 29]), t2(r, [2, 31], { 37: [1, 49] }), { 11: [1, 50] }, t2(r, [2, 30]), t2(r, [2, 32]), t2(V, [2, 26])],
    defaultActions: { 5: [2, 41], 6: [2, 1], 34: [2, 44], 43: [2, 43] },
    parseError: function(u, f) {
      if (f.recoverable)
        this.trace(u);
      else {
        var d = new Error(u);
        throw d.hash = f, d;
      }
    },
    parse: function(u) {
      var f = this, d = [0], c = [], T = [null], a = [], A = this.table, h = "", B = 0, Z = 0, J = 2, m = 1, _ = a.slice.call(arguments, 1), Y = Object.create(this.lexer), U = { yy: {} };
      for (var W in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, W) && (U.yy[W] = this.yy[W]);
      Y.setInput(u, U.yy), U.yy.lexer = Y, U.yy.parser = this, typeof Y.yylloc > "u" && (Y.yylloc = {});
      var G = Y.yylloc;
      a.push(G);
      var R = Y.options && Y.options.ranges;
      typeof U.yy.parseError == "function" ? this.parseError = U.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ft2() {
        var rt;
        return rt = c.pop() || Y.lex() || m, typeof rt != "number" && (rt instanceof Array && (c = rt, rt = c.pop()), rt = f.symbols_[rt] || rt), rt;
      }
      for (var q, k, D, L, l = {}, X, I, Q, K; ; ) {
        if (k = d[d.length - 1], this.defaultActions[k] ? D = this.defaultActions[k] : ((q === null || typeof q > "u") && (q = ft2()), D = A[k] && A[k][q]), typeof D > "u" || !D.length || !D[0]) {
          var it = "";
          K = [];
          for (X in A[k])
            this.terminals_[X] && X > J && K.push("'" + this.terminals_[X] + "'");
          Y.showPosition ? it = "Parse error on line " + (B + 1) + `:
` + Y.showPosition() + `
Expecting ` + K.join(", ") + ", got '" + (this.terminals_[q] || q) + "'" : it = "Parse error on line " + (B + 1) + ": Unexpected " + (q == m ? "end of input" : "'" + (this.terminals_[q] || q) + "'"), this.parseError(it, {
            text: Y.match,
            token: this.terminals_[q] || q,
            line: Y.yylineno,
            loc: G,
            expected: K
          });
        }
        if (D[0] instanceof Array && D.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + k + ", token: " + q);
        switch (D[0]) {
          case 1:
            d.push(q), T.push(Y.yytext), a.push(Y.yylloc), d.push(D[1]), q = null, Z = Y.yyleng, h = Y.yytext, B = Y.yylineno, G = Y.yylloc;
            break;
          case 2:
            if (I = this.productions_[D[1]][1], l.$ = T[T.length - I], l._$ = {
              first_line: a[a.length - (I || 1)].first_line,
              last_line: a[a.length - 1].last_line,
              first_column: a[a.length - (I || 1)].first_column,
              last_column: a[a.length - 1].last_column
            }, R && (l._$.range = [
              a[a.length - (I || 1)].range[0],
              a[a.length - 1].range[1]
            ]), L = this.performAction.apply(l, [
              h,
              Z,
              B,
              U.yy,
              D[1],
              T,
              a
            ].concat(_)), typeof L < "u")
              return L;
            I && (d = d.slice(0, -1 * I * 2), T = T.slice(0, -1 * I), a = a.slice(0, -1 * I)), d.push(this.productions_[D[1]][0]), T.push(l.$), a.push(l._$), Q = A[d[d.length - 2]][d[d.length - 1]], d.push(Q);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, x = function() {
    var v = {
      EOF: 1,
      parseError: function(f, d) {
        if (this.yy.parser)
          this.yy.parser.parseError(f, d);
        else
          throw new Error(f);
      },
      // resets the lexer, sets new input
      setInput: function(u, f) {
        return this.yy = f || this.yy || {}, this._input = u, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var u = this._input[0];
        this.yytext += u, this.yyleng++, this.offset++, this.match += u, this.matched += u;
        var f = u.match(/(?:\r\n?|\n).*/g);
        return f ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), u;
      },
      // unshifts one char (or a string) into the input
      unput: function(u) {
        var f = u.length, d = u.split(/(?:\r\n?|\n)/g);
        this._input = u + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - f), this.offset -= f;
        var c = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), d.length - 1 && (this.yylineno -= d.length - 1);
        var T = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: d ? (d.length === c.length ? this.yylloc.first_column : 0) + c[c.length - d.length].length - d[0].length : this.yylloc.first_column - f
        }, this.options.ranges && (this.yylloc.range = [T[0], T[0] + this.yyleng - f]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = true, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(u) {
        this.unput(this.match.slice(u));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var u = this.matched.substr(0, this.matched.length - this.match.length);
        return (u.length > 20 ? "..." : "") + u.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var u = this.match;
        return u.length < 20 && (u += this._input.substr(0, 20 - u.length)), (u.substr(0, 20) + (u.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var u = this.pastInput(), f = new Array(u.length + 1).join("-");
        return u + this.upcomingInput() + `
` + f + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(u, f) {
        var d, c, T;
        if (this.options.backtrack_lexer && (T = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (T.yylloc.range = this.yylloc.range.slice(0))), c = u[0].match(/(?:\r\n?|\n).*/g), c && (this.yylineno += c.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: c ? c[c.length - 1].length - c[c.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + u[0].length
        }, this.yytext += u[0], this.match += u[0], this.matches = u, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(u[0].length), this.matched += u[0], d = this.performAction.call(this, this.yy, this, f, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), d)
          return d;
        if (this._backtrack) {
          for (var a in T)
            this[a] = T[a];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var u, f, d, c;
        this._more || (this.yytext = "", this.match = "");
        for (var T = this._currentRules(), a = 0; a < T.length; a++)
          if (d = this._input.match(this.rules[T[a]]), d && (!f || d[0].length > f[0].length)) {
            if (f = d, c = a, this.options.backtrack_lexer) {
              if (u = this.test_match(d, T[a]), u !== false)
                return u;
              if (this._backtrack) {
                f = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return f ? (u = this.test_match(f, T[c]), u !== false ? u : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var f = this.next();
        return f || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(f) {
        this.conditionStack.push(f);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var f = this.conditionStack.length - 1;
        return f > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(f) {
        return f = this.conditionStack.length - 1 - Math.abs(f || 0), f >= 0 ? this.conditionStack[f] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(f) {
        this.begin(f);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(f, d, c, T) {
        switch (c) {
          case 0:
            return this.begin("open_directive"), 40;
          case 1:
            return this.begin("type_directive"), 41;
          case 2:
            return this.popState(), this.begin("arg_directive"), 33;
          case 3:
            return this.popState(), this.popState(), 43;
          case 4:
            return 42;
          case 5:
            return this.begin("acc_title"), 21;
          case 6:
            return this.popState(), "acc_title_value";
          case 7:
            return this.begin("acc_descr"), 23;
          case 8:
            return this.popState(), "acc_descr_value";
          case 9:
            this.begin("acc_descr_multiline");
            break;
          case 10:
            this.popState();
            break;
          case 11:
            return "acc_descr_multiline_value";
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            return 11;
          case 16:
            break;
          case 17:
            break;
          case 18:
            break;
          case 19:
            this.begin("href");
            break;
          case 20:
            this.popState();
            break;
          case 21:
            return 38;
          case 22:
            this.begin("callbackname");
            break;
          case 23:
            this.popState();
            break;
          case 24:
            this.popState(), this.begin("callbackargs");
            break;
          case 25:
            return 36;
          case 26:
            this.popState();
            break;
          case 27:
            return 37;
          case 28:
            this.begin("click");
            break;
          case 29:
            this.popState();
            break;
          case 30:
            return 35;
          case 31:
            return 5;
          case 32:
            return 12;
          case 33:
            return 13;
          case 34:
            return 14;
          case 35:
            return 15;
          case 36:
            return 16;
          case 37:
            return 18;
          case 38:
            return 17;
          case 39:
            return 19;
          case 40:
            return "date";
          case 41:
            return 20;
          case 42:
            return "accDescription";
          case 43:
            return 26;
          case 44:
            return 28;
          case 45:
            return 29;
          case 46:
            return 33;
          case 47:
            return 7;
          case 48:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [10, 11], inclusive: false }, acc_descr: { rules: [8], inclusive: false }, acc_title: { rules: [6], inclusive: false }, close_directive: { rules: [], inclusive: false }, arg_directive: { rules: [3, 4], inclusive: false }, type_directive: { rules: [2, 3], inclusive: false }, open_directive: { rules: [1], inclusive: false }, callbackargs: { rules: [26, 27], inclusive: false }, callbackname: { rules: [23, 24, 25], inclusive: false }, href: { rules: [20, 21], inclusive: false }, click: { rules: [29, 30], inclusive: false }, INITIAL: { rules: [0, 5, 7, 9, 12, 13, 14, 15, 16, 17, 18, 19, 22, 28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], inclusive: true } }
    };
    return v;
  }();
  j.lexer = x;
  function E() {
    this.yy = {};
  }
  return E.prototype = j, j.Parser = E, new E();
}();
ue.parser = ue;
var wi = ue;
var hn = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(Pl, function() {
    var n = "day";
    return function(r, i, s) {
      var o = function(p) {
        return p.add(4 - p.isoWeekday(), n);
      }, y = i.prototype;
      y.isoWeekYear = function() {
        return o(this).year();
      }, y.isoWeek = function(p) {
        if (!this.$utils().u(p))
          return this.add(7 * (p - this.isoWeek()), n);
        var C, S2, w, b, P = o(this), g = (C = this.isoWeekYear(), S2 = this.$u, w = (S2 ? s.utc : s)().year(C).startOf("year"), b = 4 - w.isoWeekday(), w.isoWeekday() > 4 && (b += 7), w.add(b, n));
        return P.diff(g, "week") + 1;
      }, y.isoWeekday = function(p) {
        return this.$utils().u(p) ? this.day() || 7 : this.day(this.day() % 7 ? p : p - 7);
      };
      var M = y.startOf;
      y.startOf = function(p, C) {
        var S2 = this.$utils(), w = !!S2.u(C) || C;
        return S2.p(p) === "isoweek" ? w ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : M.bind(this)(p, C);
      };
    };
  });
})(hn);
var Di = hn.exports;
var Ci = zl(Di);
var dn = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(Pl, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, s = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, y = {}, M = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, p = function(g) {
      return function(F) {
        this[g] = +F;
      };
    }, C = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(F) {
        if (!F || F === "Z")
          return 0;
        var z = F.match(/([+-]|\d\d)/g), O = 60 * z[1] + (+z[2] || 0);
        return O === 0 ? 0 : z[0] === "+" ? -O : O;
      }(g);
    }], S2 = function(g) {
      var F = y[g];
      return F && (F.indexOf ? F : F.s.concat(F.f));
    }, w = function(g, F) {
      var z, O = y.meridiem;
      if (O) {
        for (var H = 1; H <= 24; H += 1)
          if (g.indexOf(O(H, 0, F)) > -1) {
            z = H > 12;
            break;
          }
      } else
        z = g === (F ? "pm" : "PM");
      return z;
    }, b = { A: [o, function(g) {
      this.afternoon = w(g, false);
    }], a: [o, function(g) {
      this.afternoon = w(g, true);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [i, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [s, p("seconds")], ss: [s, p("seconds")], m: [s, p("minutes")], mm: [s, p("minutes")], H: [s, p("hours")], h: [s, p("hours")], HH: [s, p("hours")], hh: [s, p("hours")], D: [s, p("day")], DD: [i, p("day")], Do: [o, function(g) {
      var F = y.ordinal, z = g.match(/\d+/);
      if (this.day = z[0], F)
        for (var O = 1; O <= 31; O += 1)
          F(O).replace(/\[|\]/g, "") === g && (this.day = O);
    }], M: [s, p("month")], MM: [i, p("month")], MMM: [o, function(g) {
      var F = S2("months"), z = (S2("monthsShort") || F.map(function(O) {
        return O.slice(0, 3);
      })).indexOf(g) + 1;
      if (z < 1)
        throw new Error();
      this.month = z % 12 || z;
    }], MMMM: [o, function(g) {
      var F = S2("months").indexOf(g) + 1;
      if (F < 1)
        throw new Error();
      this.month = F % 12 || F;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(g) {
      this.year = M(g);
    }], YYYY: [/\d{4}/, p("year")], Z: C, ZZ: C };
    function P(g) {
      var F, z;
      F = g, z = y && y.formats;
      for (var O = (g = F.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(u, f, d) {
        var c = d && d.toUpperCase();
        return f || z[d] || n[d] || z[c].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(T, a, A) {
          return a || A.slice(1);
        });
      })).match(r), H = O.length, V = 0; V < H; V += 1) {
        var j = O[V], x = b[j], E = x && x[0], v = x && x[1];
        O[V] = v ? { regex: E, parser: v } : j.replace(/^\[|\]$/g, "");
      }
      return function(u) {
        for (var f = {}, d = 0, c = 0; d < H; d += 1) {
          var T = O[d];
          if (typeof T == "string")
            c += T.length;
          else {
            var a = T.regex, A = T.parser, h = u.slice(c), B = a.exec(h)[0];
            A.call(f, B), u = u.replace(B, "");
          }
        }
        return function(Z) {
          var J = Z.afternoon;
          if (J !== void 0) {
            var m = Z.hours;
            J ? m < 12 && (Z.hours += 12) : m === 12 && (Z.hours = 0), delete Z.afternoon;
          }
        }(f), f;
      };
    }
    return function(g, F, z) {
      z.p.customParseFormat = true, g && g.parseTwoDigitYear && (M = g.parseTwoDigitYear);
      var O = F.prototype, H = O.parse;
      O.parse = function(V) {
        var j = V.date, x = V.utc, E = V.args;
        this.$u = x;
        var v = E[1];
        if (typeof v == "string") {
          var u = E[2] === true, f = E[3] === true, d = u || f, c = E[2];
          f && (c = E[2]), y = this.$locale(), !u && c && (y = z.Ls[c]), this.$d = function(h, B, Z) {
            try {
              if (["x", "X"].indexOf(B) > -1)
                return new Date((B === "X" ? 1e3 : 1) * h);
              var J = P(B)(h), m = J.year, _ = J.month, Y = J.day, U = J.hours, W = J.minutes, G = J.seconds, R = J.milliseconds, ft2 = J.zone, q = /* @__PURE__ */ new Date(), k = Y || (m || _ ? 1 : q.getDate()), D = m || q.getFullYear(), L = 0;
              m && !_ || (L = _ > 0 ? _ - 1 : q.getMonth());
              var l = U || 0, X = W || 0, I = G || 0, Q = R || 0;
              return ft2 ? new Date(Date.UTC(D, L, k, l, X, I, Q + 60 * ft2.offset * 1e3)) : Z ? new Date(Date.UTC(D, L, k, l, X, I, Q)) : new Date(D, L, k, l, X, I, Q);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(j, v, x), this.init(), c && c !== true && (this.$L = this.locale(c).$L), d && j != this.format(v) && (this.$d = /* @__PURE__ */ new Date("")), y = {};
        } else if (v instanceof Array)
          for (var T = v.length, a = 1; a <= T; a += 1) {
            E[1] = v[a - 1];
            var A = z.apply(this, E);
            if (A.isValid()) {
              this.$d = A.$d, this.$L = A.$L, this.init();
              break;
            }
            a === T && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          H.call(this, V);
      };
    };
  });
})(dn);
var Mi = dn.exports;
var _i = zl(Mi);
var mn = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(Pl, function() {
    return function(n, r) {
      var i = r.prototype, s = i.format;
      i.format = function(o) {
        var y = this, M = this.$locale();
        if (!this.isValid())
          return s.bind(this)(o);
        var p = this.$utils(), C = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(S2) {
          switch (S2) {
            case "Q":
              return Math.ceil((y.$M + 1) / 3);
            case "Do":
              return M.ordinal(y.$D);
            case "gggg":
              return y.weekYear();
            case "GGGG":
              return y.isoWeekYear();
            case "wo":
              return M.ordinal(y.week(), "W");
            case "w":
            case "ww":
              return p.s(y.week(), S2 === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return p.s(y.isoWeek(), S2 === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return p.s(String(y.$H === 0 ? 24 : y.$H), S2 === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(y.$d.getTime() / 1e3);
            case "x":
              return y.$d.getTime();
            case "z":
              return "[" + y.offsetName() + "]";
            case "zzz":
              return "[" + y.offsetName("long") + "]";
            default:
              return S2;
          }
        });
        return s.bind(this)(C);
      };
    };
  });
})(mn);
var Si = mn.exports;
var Yi = zl(Si);
Hl.extend(Ci);
Hl.extend(_i);
Hl.extend(Yi);
var at = "";
var pe = "";
var ve;
var Te = "";
var Lt = [];
var Et = [];
var xe = {};
var be = [];
var jt = [];
var Ct = "";
var we = "";
var gn = ["active", "done", "crit", "milestone"];
var De = [];
var At2 = false;
var Ce = false;
var le = 0;
var Fi = function(t2, e, n) {
  de.parseDirective(this, t2, e, n);
};
var Ui = function() {
  be = [], jt = [], Ct = "", De = [], zt = 0, he = void 0, Nt = void 0, $ = [], at = "", pe = "", we = "", ve = void 0, Te = "", Lt = [], Et = [], At2 = false, Ce = false, le = 0, xe = {}, Fa();
};
var Li = function(t2) {
  pe = t2;
};
var Ei = function() {
  return pe;
};
var Ai = function(t2) {
  ve = t2;
};
var Ii = function() {
  return ve;
};
var Wi = function(t2) {
  Te = t2;
};
var Oi2 = function() {
  return Te;
};
var zi = function(t2) {
  at = t2;
};
var Ni = function() {
  At2 = true;
};
var Hi = function() {
  return At2;
};
var Vi = function() {
  Ce = true;
};
var Pi = function() {
  return Ce;
};
var Ri = function(t2) {
  we = t2;
};
var Bi = function() {
  return we;
};
var Zi = function() {
  return at;
};
var Xi = function(t2) {
  Lt = t2.toLowerCase().split(/[\s,]+/);
};
var qi = function() {
  return Lt;
};
var ji = function(t2) {
  Et = t2.toLowerCase().split(/[\s,]+/);
};
var Gi = function() {
  return Et;
};
var Qi = function() {
  return xe;
};
var Ji = function(t2) {
  Ct = t2, be.push(t2);
};
var Ki = function() {
  return be;
};
var $i = function() {
  let t2 = Ne();
  const e = 10;
  let n = 0;
  for (; !t2 && n < e; )
    t2 = Ne(), n++;
  return jt = $, jt;
};
var yn = function(t2, e, n, r) {
  return r.includes(t2.format(e.trim())) ? false : t2.isoWeekday() >= 6 && n.includes("weekends") || n.includes(t2.format("dddd").toLowerCase()) ? true : n.includes(t2.format(e.trim()));
};
var kn = function(t2, e, n, r) {
  if (!n.length || t2.manualEndTime)
    return;
  let i;
  t2.startTime instanceof Date ? i = Hl(t2.startTime) : i = Hl(t2.startTime, e, true), i = i.add(1, "d");
  let s;
  t2.endTime instanceof Date ? s = Hl(t2.endTime) : s = Hl(t2.endTime, e, true);
  const [o, y] = ts(
    i,
    s,
    e,
    n,
    r
  );
  t2.endTime = o.toDate(), t2.renderEndTime = y;
};
var ts = function(t2, e, n, r, i) {
  let s = false, o = null;
  for (; t2 <= e; )
    s || (o = e.toDate()), s = yn(t2, n, r, i), s && (e = e.add(1, "d")), t2 = t2.add(1, "d");
  return [e, o];
};
var fe = function(t2, e, n) {
  n = n.trim();
  const i = /^after\s+([\d\w- ]+)/.exec(n.trim());
  if (i !== null) {
    let o = null;
    if (i[1].split(" ").forEach(function(y) {
      let M = Mt(y);
      M !== void 0 && (o ? M.endTime > o.endTime && (o = M) : o = M);
    }), o)
      return o.endTime;
    {
      const y = /* @__PURE__ */ new Date();
      return y.setHours(0, 0, 0, 0), y;
    }
  }
  let s = Hl(n, e.trim(), true);
  if (s.isValid())
    return s.toDate();
  {
    S.debug("Invalid date:" + n), S.debug("With date format:" + e.trim());
    const o = new Date(n);
    if (o === void 0 || isNaN(o.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    o.getFullYear() < -1e4 || o.getFullYear() > 1e4)
      throw new Error("Invalid date:" + n);
    return o;
  }
};
var pn = function(t2) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t2.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
};
var vn = function(t2, e, n, r = false) {
  n = n.trim();
  let i = Hl(n, e.trim(), true);
  if (i.isValid())
    return r && (i = i.add(1, "d")), i.toDate();
  let s = Hl(t2);
  const [o, y] = pn(n);
  if (!Number.isNaN(o)) {
    const M = s.add(o, y);
    M.isValid() && (s = M);
  }
  return s.toDate();
};
var zt = 0;
var Tt = function(t2) {
  return t2 === void 0 ? (zt = zt + 1, "task" + zt) : t2;
};
var es = function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  wn2(r, i, gn);
  for (let o = 0; o < r.length; o++)
    r[o] = r[o].trim();
  let s = "";
  switch (r.length) {
    case 1:
      i.id = Tt(), i.startTime = t2.endTime, s = r[0];
      break;
    case 2:
      i.id = Tt(), i.startTime = fe(void 0, at, r[0]), s = r[1];
      break;
    case 3:
      i.id = Tt(r[0]), i.startTime = fe(void 0, at, r[1]), s = r[2];
      break;
  }
  return s && (i.endTime = vn(i.startTime, at, s, At2), i.manualEndTime = Hl(s, "YYYY-MM-DD", true).isValid(), kn(i, at, Et, Lt)), i;
};
var ns = function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  wn2(r, i, gn);
  for (let s = 0; s < r.length; s++)
    r[s] = r[s].trim();
  switch (r.length) {
    case 1:
      i.id = Tt(), i.startTime = {
        type: "prevTaskEnd",
        id: t2
      }, i.endTime = {
        data: r[0]
      };
      break;
    case 2:
      i.id = Tt(), i.startTime = {
        type: "getStartDate",
        startData: r[0]
      }, i.endTime = {
        data: r[1]
      };
      break;
    case 3:
      i.id = Tt(r[0]), i.startTime = {
        type: "getStartDate",
        startData: r[1]
      }, i.endTime = {
        data: r[2]
      };
      break;
  }
  return i;
};
var he;
var Nt;
var $ = [];
var Tn = {};
var rs = function(t2, e) {
  const n = {
    section: Ct,
    type: Ct,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: { data: e },
    task: t2,
    classes: []
  }, r = ns(Nt, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = Nt, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.order = le, le++;
  const i = $.push(n);
  Nt = n.id, Tn[n.id] = i - 1;
};
var Mt = function(t2) {
  const e = Tn[t2];
  return $[e];
};
var is = function(t2, e) {
  const n = {
    section: Ct,
    type: Ct,
    description: t2,
    task: t2,
    classes: []
  }, r = es(he, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, he = n, jt.push(n);
};
var Ne = function() {
  const t2 = function(n) {
    const r = $[n];
    let i = "";
    switch ($[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const s = Mt(r.prevTaskId);
        r.startTime = s.endTime;
        break;
      }
      case "getStartDate":
        i = fe(void 0, at, $[n].raw.startTime.startData), i && ($[n].startTime = i);
        break;
    }
    return $[n].startTime && ($[n].endTime = vn(
      $[n].startTime,
      at,
      $[n].raw.endTime.data,
      At2
    ), $[n].endTime && ($[n].processed = true, $[n].manualEndTime = Hl(
      $[n].raw.endTime.data,
      "YYYY-MM-DD",
      true
    ).isValid(), kn($[n], at, Et, Lt))), $[n].processed;
  };
  let e = true;
  for (const [n, r] of $.entries())
    t2(n), e = e && r.processed;
  return e;
};
var ss = function(t2, e) {
  let n = e;
  Ut().securityLevel !== "loose" && (n = us(e)), t2.split(",").forEach(function(r) {
    Mt(r) !== void 0 && (bn(r, () => {
      window.open(n, "_self");
    }), xe[r] = n);
  }), xn(t2, "clickable");
};
var xn = function(t2, e) {
  t2.split(",").forEach(function(n) {
    let r = Mt(n);
    r !== void 0 && r.classes.push(e);
  });
};
var as = function(t2, e, n) {
  if (Ut().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].trim();
      o.charAt(0) === '"' && o.charAt(o.length - 1) === '"' && (o = o.substr(1, o.length - 2)), r[s] = o;
    }
  }
  r.length === 0 && r.push(t2), Mt(t2) !== void 0 && bn(t2, () => {
    Oi.runFunc(e, ...r);
  });
};
var bn = function(t2, e) {
  De.push(
    function() {
      const n = document.querySelector(`[id="${t2}"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const n = document.querySelector(`[id="${t2}-text"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    }
  );
};
var os = function(t2, e, n) {
  t2.split(",").forEach(function(r) {
    as(r, e, n);
  }), xn(t2, "clickable");
};
var cs = function(t2) {
  De.forEach(function(e) {
    e(t2);
  });
};
var us2 = {
  parseDirective: Fi,
  getConfig: () => Ut().gantt,
  clear: Ui,
  setDateFormat: zi,
  getDateFormat: Zi,
  enableInclusiveEndDates: Ni,
  endDatesAreInclusive: Hi,
  enableTopAxis: Vi,
  topAxisEnabled: Pi,
  setAxisFormat: Li,
  getAxisFormat: Ei,
  setTickInterval: Ai,
  getTickInterval: Ii,
  setTodayMarker: Wi,
  getTodayMarker: Oi2,
  setAccTitle: La,
  getAccTitle: Aa,
  setDiagramTitle: Oa,
  getDiagramTitle: Ia,
  setDisplayMode: Ri,
  getDisplayMode: Bi,
  setAccDescription: Ea,
  getAccDescription: Ma,
  addSection: Ji,
  getSections: Ki,
  getTasks: $i,
  addTask: rs,
  findTaskById: Mt,
  addTaskOrg: is,
  setIncludes: Xi,
  getIncludes: qi,
  setExcludes: ji,
  getExcludes: Gi,
  setClickEvent: os,
  setLink: ss,
  getLinks: Qi,
  bindFunctions: cs,
  parseDuration: pn,
  isInvalidDate: yn
};
function wn2(t2, e, n) {
  let r = true;
  for (; r; )
    r = false, n.forEach(function(i) {
      const s = "^\\s*" + i + "\\s*$", o = new RegExp(s);
      t2[0].match(o) && (e[i] = true, t2.shift(1), r = true);
    });
}
var ls = function() {
  S.debug("Something is calling, setConf, remove the call");
};
var fs = (t2, e) => {
  let n = [...t2].map(() => -1 / 0), r = [...t2].sort((s, o) => s.startTime - o.startTime || s.order - o.order), i = 0;
  for (const s of r)
    for (let o = 0; o < n.length; o++)
      if (s.startTime >= n[o]) {
        n[o] = s.endTime, s.order = o + e, o > i && (i = o);
        break;
      }
  return i;
};
var ct;
var hs = function(t2, e, n, r) {
  const i = Ut().gantt, s = Ut().securityLevel;
  let o;
  s === "sandbox" && (o = At("#i" + e));
  const y = s === "sandbox" ? At(o.nodes()[0].contentDocument.body) : At("body"), M = s === "sandbox" ? o.nodes()[0].contentDocument : document, p = M.getElementById(e);
  ct = p.parentElement.offsetWidth, ct === void 0 && (ct = 1200), i.useWidth !== void 0 && (ct = i.useWidth);
  const C = r.db.getTasks();
  let S2 = [];
  for (const v of C)
    S2.push(v.type);
  S2 = E(S2);
  const w = {};
  let b = 2 * i.topPadding;
  if (r.db.getDisplayMode() === "compact" || i.displayMode === "compact") {
    const v = {};
    for (const f of C)
      v[f.section] === void 0 ? v[f.section] = [f] : v[f.section].push(f);
    let u = 0;
    for (const f of Object.keys(v)) {
      const d = fs(v[f], u) + 1;
      u += d, b += d * (i.barHeight + i.barGap), w[f] = d;
    }
  } else {
    b += C.length * (i.barHeight + i.barGap);
    for (const v of S2)
      w[v] = C.filter((u) => u.type === v).length;
  }
  p.setAttribute("viewBox", "0 0 " + ct + " " + b);
  const P = y.select(`[id="${e}"]`), g = bi().domain([
    Bn2(C, function(v) {
      return v.startTime;
    }),
    Rn(C, function(v) {
      return v.endTime;
    })
  ]).rangeRound([0, ct - i.leftPadding - i.rightPadding]);
  function F(v, u) {
    const f = v.startTime, d = u.startTime;
    let c = 0;
    return f > d ? c = 1 : f < d && (c = -1), c;
  }
  C.sort(F), z(C, ct, b), jg(P, b, ct, i.useMaxWidth), P.append("text").text(r.db.getDiagramTitle()).attr("x", ct / 2).attr("y", i.titleTopMargin).attr("class", "titleText");
  function z(v, u, f) {
    const d = i.barHeight, c = d + i.barGap, T = i.topPadding, a = i.leftPadding, A = Un().domain([0, S2.length]).range(["#00B9FA", "#F95002"]).interpolate(sr);
    H(
      c,
      T,
      a,
      u,
      f,
      v,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), V(a, T, u, f), O(v, c, T, a, d, A, u), j(c, T), x(a, T, u, f);
  }
  function O(v, u, f, d, c, T, a) {
    const h = [...new Set(v.map((m) => m.order))].map((m) => v.find((_) => _.order === m));
    P.append("g").selectAll("rect").data(h).enter().append("rect").attr("x", 0).attr("y", function(m, _) {
      return _ = m.order, _ * u + f - 2;
    }).attr("width", function() {
      return a - i.rightPadding / 2;
    }).attr("height", u).attr("class", function(m) {
      for (const [_, Y] of S2.entries())
        if (m.type === Y)
          return "section section" + _ % i.numberSectionStyles;
      return "section section0";
    });
    const B = P.append("g").selectAll("rect").data(v).enter(), Z = r.db.getLinks();
    if (B.append("rect").attr("id", function(m) {
      return m.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(m) {
      return m.milestone ? g(m.startTime) + d + 0.5 * (g(m.endTime) - g(m.startTime)) - 0.5 * c : g(m.startTime) + d;
    }).attr("y", function(m, _) {
      return _ = m.order, _ * u + f;
    }).attr("width", function(m) {
      return m.milestone ? c : g(m.renderEndTime || m.endTime) - g(m.startTime);
    }).attr("height", c).attr("transform-origin", function(m, _) {
      return _ = m.order, (g(m.startTime) + d + 0.5 * (g(m.endTime) - g(m.startTime))).toString() + "px " + (_ * u + f + 0.5 * c).toString() + "px";
    }).attr("class", function(m) {
      const _ = "task";
      let Y = "";
      m.classes.length > 0 && (Y = m.classes.join(" "));
      let U = 0;
      for (const [G, R] of S2.entries())
        m.type === R && (U = G % i.numberSectionStyles);
      let W = "";
      return m.active ? m.crit ? W += " activeCrit" : W = " active" : m.done ? m.crit ? W = " doneCrit" : W = " done" : m.crit && (W += " crit"), W.length === 0 && (W = " task"), m.milestone && (W = " milestone " + W), W += U, W += " " + Y, _ + W;
    }), B.append("text").attr("id", function(m) {
      return m.id + "-text";
    }).text(function(m) {
      return m.task;
    }).attr("font-size", i.fontSize).attr("x", function(m) {
      let _ = g(m.startTime), Y = g(m.renderEndTime || m.endTime);
      m.milestone && (_ += 0.5 * (g(m.endTime) - g(m.startTime)) - 0.5 * c), m.milestone && (Y = _ + c);
      const U = this.getBBox().width;
      return U > Y - _ ? Y + U + 1.5 * i.leftPadding > a ? _ + d - 5 : Y + d + 5 : (Y - _) / 2 + _ + d;
    }).attr("y", function(m, _) {
      return _ = m.order, _ * u + i.barHeight / 2 + (i.fontSize / 2 - 2) + f;
    }).attr("text-height", c).attr("class", function(m) {
      const _ = g(m.startTime);
      let Y = g(m.endTime);
      m.milestone && (Y = _ + c);
      const U = this.getBBox().width;
      let W = "";
      m.classes.length > 0 && (W = m.classes.join(" "));
      let G = 0;
      for (const [ft2, q] of S2.entries())
        m.type === q && (G = ft2 % i.numberSectionStyles);
      let R = "";
      return m.active && (m.crit ? R = "activeCritText" + G : R = "activeText" + G), m.done ? m.crit ? R = R + " doneCritText" + G : R = R + " doneText" + G : m.crit && (R = R + " critText" + G), m.milestone && (R += " milestoneText"), U > Y - _ ? Y + U + 1.5 * i.leftPadding > a ? W + " taskTextOutsideLeft taskTextOutside" + G + " " + R : W + " taskTextOutsideRight taskTextOutside" + G + " " + R + " width-" + U : W + " taskText taskText" + G + " " + R + " width-" + U;
    }), Ut().securityLevel === "sandbox") {
      let m;
      m = At("#i" + e);
      const _ = m.nodes()[0].contentDocument;
      B.filter(function(Y) {
        return Z[Y.id] !== void 0;
      }).each(function(Y) {
        var U = _.querySelector("#" + Y.id), W = _.querySelector("#" + Y.id + "-text");
        const G = U.parentNode;
        var R = _.createElement("a");
        R.setAttribute("xlink:href", Z[Y.id]), R.setAttribute("target", "_top"), G.appendChild(R), R.appendChild(U), R.appendChild(W);
      });
    }
  }
  function H(v, u, f, d, c, T, a, A) {
    const h = T.reduce(
      (U, { startTime: W }) => U ? Math.min(U, W) : W,
      0
    ), B = T.reduce((U, { endTime: W }) => U ? Math.max(U, W) : W, 0), Z = r.db.getDateFormat();
    if (!h || !B)
      return;
    const J = [];
    let m = null, _ = Hl(h);
    for (; _.valueOf() <= B; )
      r.db.isInvalidDate(_, Z, a, A) ? m ? m.end = _ : m = {
        start: _,
        end: _
      } : m && (J.push(m), m = null), _ = _.add(1, "d");
    P.append("g").selectAll("rect").data(J).enter().append("rect").attr("id", function(U) {
      return "exclude-" + U.start.format("YYYY-MM-DD");
    }).attr("x", function(U) {
      return g(U.start) + f;
    }).attr("y", i.gridLineStartPadding).attr("width", function(U) {
      const W = U.end.add(1, "day");
      return g(W) - g(U.start);
    }).attr("height", c - u - i.gridLineStartPadding).attr("transform-origin", function(U, W) {
      return (g(U.start) + f + 0.5 * (g(U.end) - g(U.start))).toString() + "px " + (W * v + 0.5 * c).toString() + "px";
    }).attr("class", "exclude-range");
  }
  function V(v, u, f, d) {
    let c = Kn(g).tickSize(-d + u + i.gridLineStartPadding).tickFormat(qt(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
    const a = /^([1-9]\d*)(minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || i.tickInterval
    );
    if (a !== null) {
      const A = a[1];
      switch (a[2]) {
        case "minute":
          c.ticks(Pt.every(A));
          break;
        case "hour":
          c.ticks(Rt.every(A));
          break;
        case "day":
          c.ticks(xt.every(A));
          break;
        case "week":
          c.ticks(bt.every(A));
          break;
        case "month":
          c.ticks(Zt.every(A));
          break;
      }
    }
    if (P.append("g").attr("class", "grid").attr("transform", "translate(" + v + ", " + (d - 50) + ")").call(c).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || i.topAxis) {
      let A = Jn(g).tickSize(-d + u + i.gridLineStartPadding).tickFormat(qt(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
      if (a !== null) {
        const h = a[1];
        switch (a[2]) {
          case "minute":
            A.ticks(Pt.every(h));
            break;
          case "hour":
            A.ticks(Rt.every(h));
            break;
          case "day":
            A.ticks(xt.every(h));
            break;
          case "week":
            A.ticks(bt.every(h));
            break;
          case "month":
            A.ticks(Zt.every(h));
            break;
        }
      }
      P.append("g").attr("class", "grid").attr("transform", "translate(" + v + ", " + u + ")").call(A).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  function j(v, u) {
    let f = 0;
    const d = Object.keys(w).map((c) => [c, w[c]]);
    P.append("g").selectAll("text").data(d).enter().append(function(c) {
      const T = c[0].split(Bn.lineBreakRegex), a = -(T.length - 1) / 2, A = M.createElementNS("http://www.w3.org/2000/svg", "text");
      A.setAttribute("dy", a + "em");
      for (const [h, B] of T.entries()) {
        const Z = M.createElementNS("http://www.w3.org/2000/svg", "tspan");
        Z.setAttribute("alignment-baseline", "central"), Z.setAttribute("x", "10"), h > 0 && Z.setAttribute("dy", "1em"), Z.textContent = B, A.appendChild(Z);
      }
      return A;
    }).attr("x", 10).attr("y", function(c, T) {
      if (T > 0)
        for (let a = 0; a < T; a++)
          return f += d[T - 1][1], c[1] * v / 2 + f * v + u;
      else
        return c[1] * v / 2 + u;
    }).attr("font-size", i.sectionFontSize).attr("class", function(c) {
      for (const [T, a] of S2.entries())
        if (c[0] === a)
          return "sectionTitle sectionTitle" + T % i.numberSectionStyles;
      return "sectionTitle";
    });
  }
  function x(v, u, f, d) {
    const c = r.db.getTodayMarker();
    if (c === "off")
      return;
    const T = P.append("g").attr("class", "today"), a = /* @__PURE__ */ new Date(), A = T.append("line");
    A.attr("x1", g(a) + v).attr("x2", g(a) + v).attr("y1", i.titleTopMargin).attr("y2", d - i.titleTopMargin).attr("class", "today"), c !== "" && A.attr("style", c.replace(/,/g, ";"));
  }
  function E(v) {
    const u = {}, f = [];
    for (let d = 0, c = v.length; d < c; ++d)
      Object.prototype.hasOwnProperty.call(u, v[d]) || (u[v[d]] = true, f.push(v[d]));
    return f;
  }
};
var ds = {
  setConf: ls,
  draw: hs
};
var ms = (t2) => `
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t2.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t2.sectionBkgColor};
  }

  .section2 {
    fill: ${t2.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t2.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t2.titleColor};
  }

  .sectionTitle1 {
    fill: ${t2.titleColor};
  }

  .sectionTitle2 {
    fill: ${t2.titleColor};
  }

  .sectionTitle3 {
    fill: ${t2.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t2.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t2.fontFamily};
      fill: ${t2.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t2.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t2.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t2.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t2.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t2.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t2.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t2.taskBkgColor};
    stroke: ${t2.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t2.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t2.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t2.activeTaskBkgColor};
    stroke: ${t2.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t2.doneTaskBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t2.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`;
var gs = ms;
var vs2 = {
  parser: wi,
  db: us2,
  renderer: ds,
  styles: gs
};
export {
  vs2 as diagram
};
//# sourceMappingURL=ganttDiagram-770f21fb-ZCUD5KK6.js.map
