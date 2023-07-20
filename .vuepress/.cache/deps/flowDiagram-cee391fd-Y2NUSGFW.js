import {
  O,
  be,
  ee,
  he,
  pe,
  ue,
  we,
  ye
} from "./chunk-B4UNVIZQ.js";
import {
  r
} from "./chunk-TS6BJ7OZ.js";
import "./chunk-VKIV2DCC.js";
import {
  Je,
  et
} from "./chunk-2KNQ7GZT.js";
import "./chunk-6BEJJ5JU.js";
import "./chunk-JV3LYXG7.js";
import "./chunk-ZM5HLQ45.js";
import {
  A,
  b,
  bo,
  c,
  gn,
  k,
  te,
  zs
} from "./chunk-Y4M7ZTR6.js";
import {
  S
} from "./chunk-JIQEULOQ.js";
import "./chunk-RA3GFVPD.js";
import "./chunk-MMPFMPML.js";
import {
  At,
  Bn,
  S as S2,
  S0,
  Ug,
  Ut,
  ia,
  m0,
  pf
} from "./chunk-7M7LHZLX.js";

// node_modules/.pnpm/mermaid@10.2.4/node_modules/mermaid/dist/flowDiagram-cee391fd.js
function Dt(r2) {
  if (!r2.ok)
    throw new Error(r2.status + " " + r2.statusText);
  return r2.text();
}
function Pt(r2, e) {
  return fetch(r2, e).then(Dt);
}
function Rt(r2) {
  return (e, t) => Pt(e, t).then((n) => new DOMParser().parseFromString(n, r2));
}
var Gt = Rt("image/svg+xml");
var Y = {
  normal: Wt,
  vee: $t,
  undirected: Vt
};
function Ut2(r2) {
  Y = r2;
}
function Wt(r2, e, t, n) {
  var a = r2.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), s = a.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  O(s, t[n + "Style"]), t[n + "Class"] && s.attr("class", t[n + "Class"]);
}
function $t(r2, e, t, n) {
  var a = r2.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), s = a.append("path").attr("d", "M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  O(s, t[n + "Style"]), t[n + "Class"] && s.attr("class", t[n + "Class"]);
}
function Vt(r2, e, t, n) {
  var a = r2.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), s = a.append("path").attr("d", "M 0 5 L 10 5").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  O(s, t[n + "Style"]), t[n + "Class"] && s.attr("class", t[n + "Class"]);
}
function zt(r2, e) {
  var t = r2;
  return t.node().appendChild(e.label), O(t, e.labelStyle), t;
}
function Yt(r2, e) {
  for (var t = r2.append("text"), n = Ht(e.label).split(`
`), a = 0; a < n.length; a++)
    t.append("tspan").attr("xml:space", "preserve").attr("dy", "1em").attr("x", "1").text(n[a]);
  return O(t, e.labelStyle), t;
}
function Ht(r2) {
  for (var e = "", t = false, n, a = 0; a < r2.length; ++a)
    if (n = r2[a], t) {
      switch (n) {
        case "n":
          e += `
`;
          break;
        default:
          e += n;
      }
      t = false;
    } else
      n === "\\" ? t = true : e += n;
  return e;
}
function K(r2, e, t) {
  var n = e.label, a = r2.append("g");
  e.labelType === "svg" ? zt(a, e) : typeof n != "string" || e.labelType === "html" ? ee(a, e) : Yt(a, e);
  var s = a.node().getBBox(), i;
  switch (t) {
    case "top":
      i = -e.height / 2;
      break;
    case "bottom":
      i = e.height / 2 - s.height;
      break;
    default:
      i = -s.height / 2;
  }
  return a.attr("transform", "translate(" + -s.width / 2 + "," + i + ")"), a;
}
var H = function(r2, e) {
  var t = e.nodes().filter(function(s) {
    return pe(e, s);
  }), n = r2.selectAll("g.cluster").data(t, function(s) {
    return s;
  });
  we(n.exit(), e).style("opacity", 0).remove();
  var a = n.enter().append("g").attr("class", "cluster").attr("id", function(s) {
    var i = e.node(s);
    return i.id;
  }).style("opacity", 0).each(function(s) {
    var i = e.node(s), o = At(this);
    At(this).append("rect");
    var c2 = o.append("g").attr("class", "label");
    K(c2, i, i.clusterLabelPos);
  });
  return n = n.merge(a), n = we(n, e).style("opacity", 1), n.selectAll("rect").each(function(s) {
    var i = e.node(s), o = At(this);
    O(o, i.style);
  }), n;
};
function Xt(r2) {
  H = r2;
}
var X = function(r2, e) {
  var t = r2.selectAll("g.edgeLabel").data(e.edges(), function(a) {
    return be(a);
  }).classed("update", true);
  t.exit().remove(), t.enter().append("g").classed("edgeLabel", true).style("opacity", 0), t = r2.selectAll("g.edgeLabel"), t.each(function(a) {
    var s = At(this);
    s.select(".label").remove();
    var i = e.edge(a), o = K(s, e.edge(a), 0).classed("label", true), c2 = o.node().getBBox();
    i.labelId && o.attr("id", i.labelId), b(i, "width") || (i.width = c2.width), b(i, "height") || (i.height = c2.height);
  });
  var n;
  return t.exit ? n = t.exit() : n = t.selectAll(null), we(n, e).style("opacity", 0).remove(), t;
};
function Ft(r2) {
  X = r2;
}
function O2(r2, e) {
  return r2.intersect(e);
}
var F = function(r2, e, t) {
  var n = r2.selectAll("g.edgePath").data(e.edges(), function(i) {
    return be(i);
  }).classed("update", true), a = Zt(n, e);
  Ot(n, e);
  var s = n.merge !== void 0 ? n.merge(a) : n;
  return we(s, e).style("opacity", 1), s.each(function(i) {
    var o = At(this), c2 = e.edge(i);
    c2.elem = this, c2.id && o.attr("id", c2.id), ue(
      o,
      c2.class,
      (o.classed("update") ? "update " : "") + "edgePath"
    );
  }), s.selectAll("path.path").each(function(i) {
    var o = e.edge(i);
    o.arrowheadId = te("arrowhead");
    var c2 = At(this).attr("marker-end", function() {
      return "url(" + Qt(location.href, o.arrowheadId) + ")";
    }).style("fill", "none");
    we(c2, e).attr("d", function(d) {
      return Jt(e, d);
    }), O(c2, o.style);
  }), s.selectAll("defs *").remove(), s.selectAll("defs").each(function(i) {
    var o = e.edge(i), c2 = t[o.arrowhead];
    c2(At(this), o.arrowheadId, o, "arrowhead");
  }), s;
};
function qt(r2) {
  F = r2;
}
function Qt(r2, e) {
  var t = r2.split("#")[0];
  return t + "#" + e;
}
function Jt(r2, e) {
  var t = r2.edge(e), n = r2.node(e.v), a = r2.node(e.w), s = t.points.slice(1, t.points.length - 1);
  return s.unshift(O2(n, s[0])), s.push(O2(a, s[s.length - 1])), ot(t, s);
}
function ot(r2, e) {
  var t = (S || Gt.line)().x(function(n) {
    return n.x;
  }).y(function(n) {
    return n.y;
  });
  return (t.curve || t.interpolate)(r2.curve), t(e);
}
function Kt(r2) {
  var e = r2.getBBox(), t = r2.ownerSVGElement.getScreenCTM().inverse().multiply(r2.getScreenCTM()).translate(e.width / 2, e.height / 2);
  return { x: t.e, y: t.f };
}
function Zt(r2, e) {
  var t = r2.enter().append("g").attr("class", "edgePath").style("opacity", 0);
  return t.append("path").attr("class", "path").attr("d", function(n) {
    var a = e.edge(n), s = e.node(n.v).elem, i = k(a.points.length).map(function() {
      return Kt(s);
    });
    return ot(a, i);
  }), t.append("defs"), t;
}
function Ot(r2, e) {
  var t = r2.exit();
  we(t, e).style("opacity", 0).remove();
}
var q = function(r2, e, t) {
  var n = e.nodes().filter(function(i) {
    return !pe(e, i);
  }), a = r2.selectAll("g.node").data(n, function(i) {
    return i;
  }).classed("update", true);
  a.exit().remove(), a.enter().append("g").attr("class", "node").style("opacity", 0), a = r2.selectAll("g.node"), a.each(function(i) {
    var o = e.node(i), c2 = At(this);
    ue(
      c2,
      o.class,
      (c2.classed("update") ? "update " : "") + "node"
    ), c2.select("g.label").remove();
    var d = c2.append("g").attr("class", "label"), l = K(d, o), y = t[o.shape], h = gn(l.node().getBBox(), "width", "height");
    o.elem = this, o.id && c2.attr("id", o.id), o.labelId && d.attr("id", o.labelId), b(o, "width") && (h.width = o.width), b(o, "height") && (h.height = o.height), h.width += o.paddingLeft + o.paddingRight, h.height += o.paddingTop + o.paddingBottom, d.attr(
      "transform",
      "translate(" + (o.paddingLeft - o.paddingRight) / 2 + "," + (o.paddingTop - o.paddingBottom) / 2 + ")"
    );
    var u = At(this);
    u.select(".label-container").remove();
    var p = y(u, h, o).classed("label-container", true);
    O(p, o.style);
    var m = p.node().getBBox();
    o.width = m.width, o.height = m.height;
  });
  var s;
  return a.exit ? s = a.exit() : s = a.selectAll(null), we(s, e).style("opacity", 0).remove(), a;
};
function jt(r2) {
  q = r2;
}
function te2(r2, e) {
  var t = r2.filter(function() {
    return !At(this).classed("update");
  });
  function n(a) {
    var s = e.node(a);
    return "translate(" + s.x + "," + s.y + ")";
  }
  t.attr("transform", n), we(r2, e).style("opacity", 1).attr("transform", n), we(t.selectAll("rect"), e).attr("width", function(a) {
    return e.node(a).width;
  }).attr("height", function(a) {
    return e.node(a).height;
  }).attr("x", function(a) {
    var s = e.node(a);
    return -s.width / 2;
  }).attr("y", function(a) {
    var s = e.node(a);
    return -s.height / 2;
  });
}
function ee2(r2, e) {
  var t = r2.filter(function() {
    return !At(this).classed("update");
  });
  function n(a) {
    var s = e.edge(a);
    return b(s, "x") ? "translate(" + s.x + "," + s.y + ")" : "";
  }
  t.attr("transform", n), we(r2, e).style("opacity", 1).attr("transform", n);
}
function re(r2, e) {
  var t = r2.filter(function() {
    return !At(this).classed("update");
  });
  function n(a) {
    var s = e.node(a);
    return "translate(" + s.x + "," + s.y + ")";
  }
  t.attr("transform", n), we(r2, e).style("opacity", 1).attr("transform", n);
}
function lt(r2, e, t, n) {
  var a = r2.x, s = r2.y, i = a - n.x, o = s - n.y, c2 = Math.sqrt(e * e * o * o + t * t * i * i), d = Math.abs(e * t * i / c2);
  n.x < a && (d = -d);
  var l = Math.abs(e * t * o / c2);
  return n.y < s && (l = -l), { x: a + d, y: s + l };
}
function ae(r2, e, t) {
  return lt(r2, e, e, t);
}
function ne(r2, e, t, n) {
  var a, s, i, o, c2, d, l, y, h, u, p, m, f, v, k2;
  if (a = e.y - r2.y, i = r2.x - e.x, c2 = e.x * r2.y - r2.x * e.y, h = a * t.x + i * t.y + c2, u = a * n.x + i * n.y + c2, !(h !== 0 && u !== 0 && j(h, u)) && (s = n.y - t.y, o = t.x - n.x, d = n.x * t.y - t.x * n.y, l = s * r2.x + o * r2.y + d, y = s * e.x + o * e.y + d, !(l !== 0 && y !== 0 && j(l, y)) && (p = a * o - s * i, p !== 0)))
    return m = Math.abs(p / 2), f = i * d - o * c2, v = f < 0 ? (f - m) / p : (f + m) / p, f = s * c2 - a * d, k2 = f < 0 ? (f - m) / p : (f + m) / p, { x: v, y: k2 };
}
function j(r2, e) {
  return r2 * e > 0;
}
function T(r2, e, t) {
  var n = r2.x, a = r2.y, s = [], i = Number.POSITIVE_INFINITY, o = Number.POSITIVE_INFINITY;
  e.forEach(function(p) {
    i = Math.min(i, p.x), o = Math.min(o, p.y);
  });
  for (var c2 = n - r2.width / 2 - i, d = a - r2.height / 2 - o, l = 0; l < e.length; l++) {
    var y = e[l], h = e[l < e.length - 1 ? l + 1 : 0], u = ne(
      r2,
      t,
      { x: c2 + y.x, y: d + y.y },
      { x: c2 + h.x, y: d + h.y }
    );
    u && s.push(u);
  }
  return s.length ? (s.length > 1 && s.sort(function(p, m) {
    var f = p.x - t.x, v = p.y - t.y, k2 = Math.sqrt(f * f + v * v), B = m.x - t.x, E = m.y - t.y, U = Math.sqrt(B * B + E * E);
    return k2 < U ? -1 : k2 === U ? 0 : 1;
  }), s[0]) : (console.log("NO INTERSECTION FOUND, RETURN NODE CENTER", r2), r2);
}
function Z(r2, e) {
  var t = r2.x, n = r2.y, a = e.x - t, s = e.y - n, i = r2.width / 2, o = r2.height / 2, c2, d;
  return Math.abs(s) * i > Math.abs(a) * o ? (s < 0 && (o = -o), c2 = s === 0 ? 0 : o * a / s, d = o) : (a < 0 && (i = -i), c2 = i, d = a === 0 ? 0 : i * s / a), { x: t + c2, y: n + d };
}
var Q = {
  rect: ie,
  ellipse: oe,
  circle: le,
  diamond: ce
};
function se(r2) {
  Q = r2;
}
function ie(r2, e, t) {
  var n = r2.insert("rect", ":first-child").attr("rx", t.rx).attr("ry", t.ry).attr("x", -e.width / 2).attr("y", -e.height / 2).attr("width", e.width).attr("height", e.height);
  return t.intersect = function(a) {
    return Z(t, a);
  }, n;
}
function oe(r2, e, t) {
  var n = e.width / 2, a = e.height / 2, s = r2.insert("ellipse", ":first-child").attr("x", -e.width / 2).attr("y", -e.height / 2).attr("rx", n).attr("ry", a);
  return t.intersect = function(i) {
    return lt(t, n, a, i);
  }, s;
}
function le(r2, e, t) {
  var n = Math.max(e.width, e.height) / 2, a = r2.insert("circle", ":first-child").attr("x", -e.width / 2).attr("y", -e.height / 2).attr("r", n);
  return t.intersect = function(s) {
    return ae(t, n, s);
  }, a;
}
function ce(r2, e, t) {
  var n = e.width * Math.SQRT2 / 2, a = e.height * Math.SQRT2 / 2, s = [
    { x: 0, y: -a },
    { x: -n, y: 0 },
    { x: 0, y: a },
    { x: n, y: 0 }
  ], i = r2.insert("polygon", ":first-child").attr(
    "points",
    s.map(function(o) {
      return o.x + "," + o.y;
    }).join(" ")
  );
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function de() {
  var r2 = function(e, t) {
    fe(t);
    var n = P(e, "output"), a = P(n, "clusters"), s = P(n, "edgePaths"), i = X(P(n, "edgeLabels"), t), o = q(P(n, "nodes"), t, Q);
    zs(t), re(o, t), ee2(i, t), F(s, t, Y);
    var c2 = H(a, t);
    te2(c2, t), pe2(t);
  };
  return r2.createNodes = function(e) {
    return arguments.length ? (jt(e), r2) : q;
  }, r2.createClusters = function(e) {
    return arguments.length ? (Xt(e), r2) : H;
  }, r2.createEdgeLabels = function(e) {
    return arguments.length ? (Ft(e), r2) : X;
  }, r2.createEdgePaths = function(e) {
    return arguments.length ? (qt(e), r2) : F;
  }, r2.shapes = function(e) {
    return arguments.length ? (se(e), r2) : Q;
  }, r2.arrows = function(e) {
    return arguments.length ? (Ut2(e), r2) : Y;
  }, r2;
}
var he2 = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: "rect"
};
var ue2 = {
  arrowhead: "normal",
  curve: pf
};
function fe(r2) {
  r2.nodes().forEach(function(e) {
    var t = r2.node(e);
    !b(t, "label") && !r2.children(e).length && (t.label = e), b(t, "paddingX") && bo(t, {
      paddingLeft: t.paddingX,
      paddingRight: t.paddingX
    }), b(t, "paddingY") && bo(t, {
      paddingTop: t.paddingY,
      paddingBottom: t.paddingY
    }), b(t, "padding") && bo(t, {
      paddingLeft: t.padding,
      paddingRight: t.padding,
      paddingTop: t.padding,
      paddingBottom: t.padding
    }), bo(t, he2), c(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"], function(n) {
      t[n] = Number(t[n]);
    }), b(t, "width") && (t._prevWidth = t.width), b(t, "height") && (t._prevHeight = t.height);
  }), r2.edges().forEach(function(e) {
    var t = r2.edge(e);
    b(t, "label") || (t.label = ""), bo(t, ue2);
  });
}
function pe2(r2) {
  c(r2.nodes(), function(e) {
    var t = r2.node(e);
    b(t, "_prevWidth") ? t.width = t._prevWidth : delete t.width, b(t, "_prevHeight") ? t.height = t._prevHeight : delete t.height, delete t._prevWidth, delete t._prevHeight;
  });
}
function P(r2, e) {
  var t = r2.select("g." + e);
  return t.empty() && (t = r2.append("g").attr("class", e)), t;
}
function ct(r2, e, t) {
  const n = e.width, a = e.height, s = (n + a) * 0.9, i = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ], o = A2(r2, s, s, i);
  return t.intersect = function(c2) {
    return T(t, i, c2);
  }, o;
}
function dt(r2, e, t) {
  const a = e.height, s = a / 4, i = e.width + 2 * s, o = [
    { x: s, y: 0 },
    { x: i - s, y: 0 },
    { x: i, y: -a / 2 },
    { x: i - s, y: -a },
    { x: s, y: -a },
    { x: 0, y: -a / 2 }
  ], c2 = A2(r2, i, a, o);
  return t.intersect = function(d) {
    return T(t, o, d);
  }, c2;
}
function ht(r2, e, t) {
  const n = e.width, a = e.height, s = [
    { x: -a / 2, y: 0 },
    { x: n, y: 0 },
    { x: n, y: -a },
    { x: -a / 2, y: -a },
    { x: 0, y: -a / 2 }
  ], i = A2(r2, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function ut(r2, e, t) {
  const n = e.width, a = e.height, s = [
    { x: -2 * a / 6, y: 0 },
    { x: n - a / 6, y: 0 },
    { x: n + 2 * a / 6, y: -a },
    { x: a / 6, y: -a }
  ], i = A2(r2, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function ft(r2, e, t) {
  const n = e.width, a = e.height, s = [
    { x: 2 * a / 6, y: 0 },
    { x: n + a / 6, y: 0 },
    { x: n - 2 * a / 6, y: -a },
    { x: -a / 6, y: -a }
  ], i = A2(r2, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function pt(r2, e, t) {
  const n = e.width, a = e.height, s = [
    { x: -2 * a / 6, y: 0 },
    { x: n + 2 * a / 6, y: 0 },
    { x: n - a / 6, y: -a },
    { x: a / 6, y: -a }
  ], i = A2(r2, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function yt(r2, e, t) {
  const n = e.width, a = e.height, s = [
    { x: a / 6, y: 0 },
    { x: n - a / 6, y: 0 },
    { x: n + 2 * a / 6, y: -a },
    { x: -2 * a / 6, y: -a }
  ], i = A2(r2, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function vt(r2, e, t) {
  const n = e.width, a = e.height, s = [
    { x: 0, y: 0 },
    { x: n + a / 2, y: 0 },
    { x: n, y: -a / 2 },
    { x: n + a / 2, y: -a },
    { x: 0, y: -a }
  ], i = A2(r2, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function gt(r2, e, t) {
  const n = e.height, a = e.width + n / 4, s = r2.insert("rect", ":first-child").attr("rx", n / 2).attr("ry", n / 2).attr("x", -a / 2).attr("y", -n / 2).attr("width", a).attr("height", n);
  return t.intersect = function(i) {
    return Z(t, i);
  }, s;
}
function mt(r2, e, t) {
  const n = e.width, a = e.height, s = [
    { x: 0, y: 0 },
    { x: n, y: 0 },
    { x: n, y: -a },
    { x: 0, y: -a },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: n + 8, y: 0 },
    { x: n + 8, y: -a },
    { x: -8, y: -a },
    { x: -8, y: 0 }
  ], i = A2(r2, n, a, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function wt(r2, e, t) {
  const n = e.width, a = n / 2, s = a / (2.5 + n / 50), i = e.height + s, o = "M 0," + s + " a " + a + "," + s + " 0,0,0 " + n + " 0 a " + a + "," + s + " 0,0,0 " + -n + " 0 l 0," + i + " a " + a + "," + s + " 0,0,0 " + n + " 0 l 0," + -i, c2 = r2.attr("label-offset-y", s).insert("path", ":first-child").attr("d", o).attr("transform", "translate(" + -n / 2 + "," + -(i / 2 + s) + ")");
  return t.intersect = function(d) {
    const l = Z(t, d), y = l.x - t.x;
    if (a != 0 && (Math.abs(y) < t.width / 2 || Math.abs(y) == t.width / 2 && Math.abs(l.y - t.y) > t.height / 2 - s)) {
      let h = s * s * (1 - y * y / (a * a));
      h != 0 && (h = Math.sqrt(h)), h = s - h, d.y - t.y > 0 && (h = -h), l.y += h;
    }
    return l;
  }, c2;
}
function ye2(r2) {
  r2.shapes().question = ct, r2.shapes().hexagon = dt, r2.shapes().stadium = gt, r2.shapes().subroutine = mt, r2.shapes().cylinder = wt, r2.shapes().rect_left_inv_arrow = ht, r2.shapes().lean_right = ut, r2.shapes().lean_left = ft, r2.shapes().trapezoid = pt, r2.shapes().inv_trapezoid = yt, r2.shapes().rect_right_inv_arrow = vt;
}
function ve(r2) {
  r2({ question: ct }), r2({ hexagon: dt }), r2({ stadium: gt }), r2({ subroutine: mt }), r2({ cylinder: wt }), r2({ rect_left_inv_arrow: ht }), r2({ lean_right: ut }), r2({ lean_left: ft }), r2({ trapezoid: pt }), r2({ inv_trapezoid: yt }), r2({ rect_right_inv_arrow: vt });
}
function A2(r2, e, t, n) {
  return r2.insert("polygon", ":first-child").attr(
    "points",
    n.map(function(a) {
      return a.x + "," + a.y;
    }).join(" ")
  ).attr("transform", "translate(" + -e / 2 + "," + t / 2 + ")");
}
var ge = {
  addToRender: ye2,
  addToRenderV2: ve
};
var xt = {};
var me = function(r2) {
  const e = Object.keys(r2);
  for (const t of e)
    xt[t] = r2[t];
};
var bt = function(r2, e, t, n, a, s) {
  const i = n ? n.select(`[id="${t}"]`) : At(`[id="${t}"]`), o = a || document;
  Object.keys(r2).forEach(function(d) {
    const l = r2[d];
    let y = "default";
    l.classes.length > 0 && (y = l.classes.join(" "));
    const h = S0(l.styles);
    let u = l.text !== void 0 ? l.text : l.id, p;
    if (ia(Ut().flowchart.htmlLabels)) {
      const v = {
        label: u.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (k2) => `<i class='${k2.replace(":", " ")}'></i>`
        )
      };
      p = ee(i, v).node(), p.parentNode.removeChild(p);
    } else {
      const v = o.createElementNS("http://www.w3.org/2000/svg", "text");
      v.setAttribute("style", h.labelStyle.replace("color:", "fill:"));
      const k2 = u.split(Bn.lineBreakRegex);
      for (const B of k2) {
        const E = o.createElementNS("http://www.w3.org/2000/svg", "tspan");
        E.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), E.setAttribute("dy", "1em"), E.setAttribute("x", "1"), E.textContent = B, v.appendChild(E);
      }
      p = v;
    }
    let m = 0, f = "";
    switch (l.type) {
      case "round":
        m = 5, f = "rect";
        break;
      case "square":
        f = "rect";
        break;
      case "diamond":
        f = "question";
        break;
      case "hexagon":
        f = "hexagon";
        break;
      case "odd":
        f = "rect_left_inv_arrow";
        break;
      case "lean_right":
        f = "lean_right";
        break;
      case "lean_left":
        f = "lean_left";
        break;
      case "trapezoid":
        f = "trapezoid";
        break;
      case "inv_trapezoid":
        f = "inv_trapezoid";
        break;
      case "odd_right":
        f = "rect_left_inv_arrow";
        break;
      case "circle":
        f = "circle";
        break;
      case "ellipse":
        f = "ellipse";
        break;
      case "stadium":
        f = "stadium";
        break;
      case "subroutine":
        f = "subroutine";
        break;
      case "cylinder":
        f = "cylinder";
        break;
      case "group":
        f = "rect";
        break;
      default:
        f = "rect";
    }
    S2.warn("Adding node", l.id, l.domId), e.setNode(s.db.lookUpDomId(l.id), {
      labelType: "svg",
      labelStyle: h.labelStyle,
      shape: f,
      label: p,
      rx: m,
      ry: m,
      class: y,
      style: h.style,
      id: s.db.lookUpDomId(l.id)
    });
  });
};
var kt = function(r2, e, t) {
  let n = 0, a, s;
  if (r2.defaultStyle !== void 0) {
    const i = S0(r2.defaultStyle);
    a = i.style, s = i.labelStyle;
  }
  r2.forEach(function(i) {
    n++;
    const o = "L-" + i.start + "-" + i.end, c2 = "LS-" + i.start, d = "LE-" + i.end, l = {};
    i.type === "arrow_open" ? l.arrowhead = "none" : l.arrowhead = "normal";
    let y = "", h = "";
    if (i.style !== void 0) {
      const u = S0(i.style);
      y = u.style, h = u.labelStyle;
    } else
      switch (i.stroke) {
        case "normal":
          y = "fill:none", a !== void 0 && (y = a), s !== void 0 && (h = s);
          break;
        case "dotted":
          y = "fill:none;stroke-width:2px;stroke-dasharray:3;";
          break;
        case "thick":
          y = " stroke-width: 3.5px;fill:none";
          break;
      }
    l.style = y, l.labelStyle = h, i.interpolate !== void 0 ? l.curve = m0(i.interpolate, pf) : r2.defaultInterpolate !== void 0 ? l.curve = m0(r2.defaultInterpolate, pf) : l.curve = m0(xt.curve, pf), i.text === void 0 ? i.style !== void 0 && (l.arrowheadStyle = "fill: #333") : (l.arrowheadStyle = "fill: #333", l.labelpos = "c", ia(Ut().flowchart.htmlLabels) ? (l.labelType = "html", l.label = `<span id="L-${o}" class="edgeLabel L-${c2}' L-${d}" style="${l.labelStyle}">${i.text.replace(
      /fa[blrs]?:fa-[\w-]+/g,
      (u) => `<i class='${u.replace(":", " ")}'></i>`
    )}</span>`) : (l.labelType = "text", l.label = i.text.replace(Bn.lineBreakRegex, `
`), i.style === void 0 && (l.style = l.style || "stroke: #333; stroke-width: 1.5px;fill:none"), l.labelStyle = l.labelStyle.replace("color:", "fill:"))), l.id = o, l.class = c2 + " " + d, l.minlen = i.length || 1, e.setEdge(t.db.lookUpDomId(i.start), t.db.lookUpDomId(i.end), l, n);
  });
};
var we2 = function(r2, e) {
  S2.info("Extracting classes"), e.db.clear();
  try {
    return e.parse(r2), e.db.getClasses();
  } catch (t) {
    return S2.error(t), {};
  }
};
var xe = function(r2, e, t, n) {
  S2.info("Drawing flowchart"), n.db.clear();
  const { securityLevel: a, flowchart: s } = Ut();
  let i;
  a === "sandbox" && (i = At("#i" + e));
  const o = a === "sandbox" ? At(i.nodes()[0].contentDocument.body) : At("body"), c2 = a === "sandbox" ? i.nodes()[0].contentDocument : document;
  try {
    n.parser.parse(r2);
  } catch {
    S2.debug("Parsing failed");
  }
  let d = n.db.getDirection();
  d === void 0 && (d = "TD");
  const l = s.nodeSpacing || 50, y = s.rankSpacing || 50, h = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: d,
    nodesep: l,
    ranksep: y,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let u;
  const p = n.db.getSubGraphs();
  for (let g = p.length - 1; g >= 0; g--)
    u = p[g], n.db.addVertex(u.id, u.title, "group", void 0, u.classes);
  const m = n.db.getVertices();
  S2.warn("Get vertices", m);
  const f = n.db.getEdges();
  let v = 0;
  for (v = p.length - 1; v >= 0; v--) {
    u = p[v], r("cluster").append("text");
    for (let g = 0; g < u.nodes.length; g++)
      S2.warn(
        "Setting subgraph",
        u.nodes[g],
        n.db.lookUpDomId(u.nodes[g]),
        n.db.lookUpDomId(u.id)
      ), h.setParent(n.db.lookUpDomId(u.nodes[g]), n.db.lookUpDomId(u.id));
  }
  bt(m, h, e, o, c2, n), kt(f, h, n);
  const k2 = new de();
  ge.addToRender(k2), k2.arrows().none = function(b2, L, w, M) {
    const C = b2.append("marker").attr("id", L).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M 0 0 L 0 0 L 0 0 z");
    O(C, w[M + "Style"]);
  }, k2.arrows().normal = function(b2, L) {
    b2.append("marker").attr("id", L).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowheadPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  };
  const B = o.select(`[id="${e}"]`), E = o.select("#" + e + " g");
  for (k2(E, h), E.selectAll("g.node").attr("title", function() {
    return n.db.getTooltip(this.id);
  }), n.db.indexNodes("subGraph" + v), v = 0; v < p.length; v++)
    if (u = p[v], u.title !== "undefined") {
      const g = c2.querySelectorAll(
        "#" + e + ' [id="' + n.db.lookUpDomId(u.id) + '"] rect'
      ), b2 = c2.querySelectorAll(
        "#" + e + ' [id="' + n.db.lookUpDomId(u.id) + '"]'
      ), L = g[0].x.baseVal.value, w = g[0].y.baseVal.value, M = g[0].width.baseVal.value, C = At(b2[0]).select(".label");
      C.attr("transform", `translate(${L + M / 2}, ${w + 14})`), C.attr("id", e + "Text");
      for (let W = 0; W < u.classes.length; W++)
        b2[0].classList.add(u.classes[W]);
    }
  if (!s.htmlLabels) {
    const g = c2.querySelectorAll('[id="' + e + '"] .edgeLabel .label');
    for (const b2 of g) {
      const L = b2.getBBox(), w = c2.createElementNS("http://www.w3.org/2000/svg", "rect");
      w.setAttribute("rx", 0), w.setAttribute("ry", 0), w.setAttribute("width", L.width), w.setAttribute("height", L.height), b2.insertBefore(w, b2.firstChild);
    }
  }
  Ug(h, B, s.diagramPadding, s.useMaxWidth), Object.keys(m).forEach(function(g) {
    const b2 = m[g];
    if (b2.link) {
      const L = o.select("#" + e + ' [id="' + n.db.lookUpDomId(g) + '"]');
      if (L) {
        const w = c2.createElementNS("http://www.w3.org/2000/svg", "a");
        w.setAttributeNS("http://www.w3.org/2000/svg", "class", b2.classes.join(" ")), w.setAttributeNS("http://www.w3.org/2000/svg", "href", b2.link), w.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), a === "sandbox" ? w.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : b2.linkTarget && w.setAttributeNS("http://www.w3.org/2000/svg", "target", b2.linkTarget);
        const M = L.insert(function() {
          return w;
        }, ":first-child"), R = L.select(".label-container");
        R && M.append(function() {
          return R.node();
        });
        const C = L.select(".label");
        C && M.append(function() {
          return C.node();
        });
      }
    }
  });
};
var be2 = {
  setConf: me,
  addVertices: bt,
  addEdges: kt,
  getClasses: we2,
  draw: xe
};
var De = {
  parser: et,
  db: Je,
  renderer: he,
  styles: ye,
  init: (r2) => {
    r2.flowchart || (r2.flowchart = {}), r2.flowchart.arrowMarkerAbsolute = r2.arrowMarkerAbsolute, be2.setConf(r2.flowchart), Je.clear(), Je.setGen("gen-1");
  }
};
export {
  De as diagram
};
//# sourceMappingURL=flowDiagram-cee391fd-Y2NUSGFW.js.map
