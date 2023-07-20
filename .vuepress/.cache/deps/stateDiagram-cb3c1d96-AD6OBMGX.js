import {
  Ie,
  Ne,
  Re
} from "./chunk-FIHXZ46M.js";
import {
  A,
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
  Oi,
  S as S2,
  Ut,
  _f,
  jg
} from "./chunk-7M7LHZLX.js";

// node_modules/.pnpm/mermaid@10.2.4/node_modules/mermaid/dist/stateDiagram-cb3c1d96.js
var T = {};
var $ = (e, n) => {
  T[e] = n;
};
var v = (e) => T[e];
var R = () => Object.keys(T);
var I = () => R().length;
var _ = {
  get: v,
  set: $,
  keys: R,
  size: I
};
var j = (e) => e.append("circle").attr("class", "start-state").attr("r", Ut().state.sizeUnit).attr("cx", Ut().state.padding + Ut().state.sizeUnit).attr("cy", Ut().state.padding + Ut().state.sizeUnit);
var q = (e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", Ut().state.textHeight).attr("class", "divider").attr("x2", Ut().state.textHeight * 2).attr("y1", 0).attr("y2", 0);
var D = (e, n) => {
  const o = e.append("text").attr("x", 2 * Ut().state.padding).attr("y", Ut().state.textHeight + 2 * Ut().state.padding).attr("font-size", Ut().state.fontSize).attr("class", "state-title").text(n.id), d = o.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", Ut().state.padding).attr("y", Ut().state.padding).attr("width", d.width + 2 * Ut().state.padding).attr("height", d.height + 2 * Ut().state.padding).attr("rx", Ut().state.radius), o;
};
var Z = (e, n) => {
  const o = function(c, m, f) {
    const S3 = c.append("tspan").attr("x", 2 * Ut().state.padding).text(m);
    f || S3.attr("dy", Ut().state.textHeight);
  }, s = e.append("text").attr("x", 2 * Ut().state.padding).attr("y", Ut().state.textHeight + 1.3 * Ut().state.padding).attr("font-size", Ut().state.fontSize).attr("class", "state-title").text(n.descriptions[0]).node().getBBox(), g = s.height, p = e.append("text").attr("x", Ut().state.padding).attr(
    "y",
    g + Ut().state.padding * 0.4 + Ut().state.dividerMargin + Ut().state.textHeight
  ).attr("class", "state-description");
  let a = true, r = true;
  n.descriptions.forEach(function(c) {
    a || (o(p, c, r), r = false), a = false;
  });
  const w = e.append("line").attr("x1", Ut().state.padding).attr("y1", Ut().state.padding + g + Ut().state.dividerMargin / 2).attr("y2", Ut().state.padding + g + Ut().state.dividerMargin / 2).attr("class", "descr-divider"), x = p.node().getBBox(), l = Math.max(x.width, s.width);
  return w.attr("x2", l + 3 * Ut().state.padding), e.insert("rect", ":first-child").attr("x", Ut().state.padding).attr("y", Ut().state.padding).attr("width", l + 2 * Ut().state.padding).attr("height", x.height + g + 2 * Ut().state.padding).attr("rx", Ut().state.radius), e;
};
var K = (e, n, o) => {
  const d = Ut().state.padding, s = 2 * Ut().state.padding, g = e.node().getBBox(), p = g.width, a = g.x, r = e.append("text").attr("x", 0).attr("y", Ut().state.titleShift).attr("font-size", Ut().state.fontSize).attr("class", "state-title").text(n.id), x = r.node().getBBox().width + s;
  let l = Math.max(x, p);
  l === p && (l = l + s);
  let c;
  const m = e.node().getBBox();
  n.doc, c = a - d, x > p && (c = (p - l) / 2 + d), Math.abs(a - m.x) < d && x > p && (c = a - (x - p) / 2);
  const f = 1 - Ut().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", c).attr("y", f).attr("class", o ? "alt-composit" : "composit").attr("width", l).attr(
    "height",
    m.height + Ut().state.textHeight + Ut().state.titleShift + 1
  ).attr("rx", "0"), r.attr("x", c + d), x <= p && r.attr("x", a + (l - s) / 2 - x / 2 + d), e.insert("rect", ":first-child").attr("x", c).attr(
    "y",
    Ut().state.titleShift - Ut().state.textHeight - Ut().state.padding
  ).attr("width", l).attr("height", Ut().state.textHeight * 3).attr("rx", Ut().state.radius), e.insert("rect", ":first-child").attr("x", c).attr(
    "y",
    Ut().state.titleShift - Ut().state.textHeight - Ut().state.padding
  ).attr("width", l).attr("height", m.height + 3 + 2 * Ut().state.textHeight).attr("rx", Ut().state.radius), e;
};
var Q = (e) => (e.append("circle").attr("class", "end-state-outer").attr("r", Ut().state.sizeUnit + Ut().state.miniPadding).attr(
  "cx",
  Ut().state.padding + Ut().state.sizeUnit + Ut().state.miniPadding
).attr(
  "cy",
  Ut().state.padding + Ut().state.sizeUnit + Ut().state.miniPadding
), e.append("circle").attr("class", "end-state-inner").attr("r", Ut().state.sizeUnit).attr("cx", Ut().state.padding + Ut().state.sizeUnit + 2).attr("cy", Ut().state.padding + Ut().state.sizeUnit + 2));
var V = (e, n) => {
  let o = Ut().state.forkWidth, d = Ut().state.forkHeight;
  if (n.parentId) {
    let s = o;
    o = d, d = s;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", o).attr("height", d).attr("x", Ut().state.padding).attr("y", Ut().state.padding);
};
var tt = (e, n, o, d) => {
  let s = 0;
  const g = d.append("text");
  g.style("text-anchor", "start"), g.attr("class", "noteText");
  let p = e.replace(/\r\n/g, "<br/>");
  p = p.replace(/\n/g, "<br/>");
  const a = p.split(Bn.lineBreakRegex);
  let r = 1.25 * Ut().state.noteMargin;
  for (const w of a) {
    const x = w.trim();
    if (x.length > 0) {
      const l = g.append("tspan");
      if (l.text(x), r === 0) {
        const c = l.node().getBBox();
        r += c.height;
      }
      s += r, l.attr("x", n + Ut().state.noteMargin), l.attr("y", o + s + 1.25 * Ut().state.noteMargin);
    }
  }
  return { textWidth: g.node().getBBox().width, textHeight: s };
};
var et = (e, n) => {
  n.attr("class", "state-note");
  const o = n.append("rect").attr("x", 0).attr("y", Ut().state.padding), d = n.append("g"), { textWidth: s, textHeight: g } = tt(e, 0, 0, d);
  return o.attr("height", g + 2 * Ut().state.noteMargin), o.attr("width", s + Ut().state.noteMargin * 2), o;
};
var G = function(e, n) {
  const o = n.id, d = {
    id: o,
    label: n.id,
    width: 0,
    height: 0
  }, s = e.append("g").attr("id", o).attr("class", "stateGroup");
  n.type === "start" && j(s), n.type === "end" && Q(s), (n.type === "fork" || n.type === "join") && V(s, n), n.type === "note" && et(n.note.text, s), n.type === "divider" && q(s), n.type === "default" && n.descriptions.length === 0 && D(s, n), n.type === "default" && n.descriptions.length > 0 && Z(s, n);
  const g = s.node().getBBox();
  return d.width = g.width + 2 * Ut().state.padding, d.height = g.height + 2 * Ut().state.padding, _.set(o, d), d;
};
var A2 = 0;
var at = function(e, n, o) {
  const d = function(r) {
    switch (r) {
      case Ne.relationType.AGGREGATION:
        return "aggregation";
      case Ne.relationType.EXTENSION:
        return "extension";
      case Ne.relationType.COMPOSITION:
        return "composition";
      case Ne.relationType.DEPENDENCY:
        return "dependency";
    }
  };
  n.points = n.points.filter((r) => !Number.isNaN(r.y));
  const s = n.points, g = S().x(function(r) {
    return r.x;
  }).y(function(r) {
    return r.y;
  }).curve(_f), p = e.append("path").attr("d", g(s)).attr("id", "edge" + A2).attr("class", "transition");
  let a = "";
  if (Ut().state.arrowMarkerAbsolute && (a = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, a = a.replace(/\(/g, "\\("), a = a.replace(/\)/g, "\\)")), p.attr(
    "marker-end",
    "url(" + a + "#" + d(Ne.relationType.DEPENDENCY) + "End)"
  ), o.title !== void 0) {
    const r = e.append("g").attr("class", "stateLabel"), { x: w, y: x } = Oi.calcLabelPosition(n.points), l = Bn.getRows(o.title);
    let c = 0;
    const m = [];
    let f = 0, S3 = 0;
    for (let u = 0; u <= l.length; u++) {
      const h = r.append("text").attr("text-anchor", "middle").text(l[u]).attr("x", w).attr("y", x + c), y = h.node().getBBox();
      f = Math.max(f, y.width), S3 = Math.min(S3, y.x), S2.info(y.x, w, x + c), c === 0 && (c = h.node().getBBox().height, S2.info("Title height", c, x)), m.push(h);
    }
    let E = c * l.length;
    if (l.length > 1) {
      const u = (l.length - 1) * c * 0.5;
      m.forEach((h, y) => h.attr("y", x + y * c - u)), E = c * l.length;
    }
    const i = r.node().getBBox();
    r.insert("rect", ":first-child").attr("class", "box").attr("x", w - f / 2 - Ut().state.padding / 2).attr("y", x - E / 2 - Ut().state.padding / 2 - 3.5).attr("width", f + Ut().state.padding).attr("height", E + Ut().state.padding), S2.info(i);
  }
  A2++;
};
var B;
var z = {};
var nt = function() {
};
var it = function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
var st = function(e, n, o, d) {
  B = Ut().state;
  const s = Ut().securityLevel;
  let g;
  s === "sandbox" && (g = At("#i" + n));
  const p = s === "sandbox" ? At(g.nodes()[0].contentDocument.body) : At("body"), a = s === "sandbox" ? g.nodes()[0].contentDocument : document;
  S2.debug("Rendering diagram " + e);
  const r = p.select(`[id='${n}']`);
  it(r), new A({
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    rankdir: "RL"
    // ranksep: '20'
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  const x = d.db.getRootDoc();
  W(x, r, void 0, false, p, a, d);
  const l = B.padding, c = r.node().getBBox(), m = c.width + l * 2, f = c.height + l * 2, S3 = m * 1.75;
  jg(r, f, S3, B.useMaxWidth), r.attr(
    "viewBox",
    `${c.x - B.padding}  ${c.y - B.padding} ` + m + " " + f
  );
};
var rt = (e) => e ? e.length * B.fontSizeFactor : 1;
var W = (e, n, o, d, s, g, p) => {
  const a = new A({
    compound: true,
    multigraph: true
  });
  let r, w = true;
  for (r = 0; r < e.length; r++)
    if (e[r].stmt === "relation") {
      w = false;
      break;
    }
  o ? a.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    ranker: "tight-tree",
    ranksep: w ? 1 : B.edgeLengthFactor,
    nodeSep: w ? 1 : 50,
    isMultiGraph: true
    // ranksep: 5,
    // nodesep: 1
  }) : a.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    // isCompound: true,
    // acyclicer: 'greedy',
    // ranker: 'longest-path'
    ranksep: w ? 1 : B.edgeLengthFactor,
    nodeSep: w ? 1 : 50,
    ranker: "tight-tree",
    // ranker: 'network-simplex'
    isMultiGraph: true
  }), a.setDefaultEdgeLabel(function() {
    return {};
  }), p.db.extract(e);
  const x = p.db.getStates(), l = p.db.getRelations(), c = Object.keys(x);
  for (const i of c) {
    const u = x[i];
    o && (u.parentId = o);
    let h;
    if (u.doc) {
      let y = n.append("g").attr("id", u.id).attr("class", "stateGroup");
      h = W(u.doc, y, u.id, !d, s, g, p);
      {
        y = K(y, u, d);
        let k = y.node().getBBox();
        h.width = k.width, h.height = k.height + B.padding / 2, z[u.id] = { y: B.compositTitleSize };
      }
    } else
      h = G(n, u);
    if (u.note) {
      const y = {
        descriptions: [],
        id: u.id + "-note",
        note: u.note,
        type: "note"
      }, k = G(n, y);
      u.note.position === "left of" ? (a.setNode(h.id + "-note", k), a.setNode(h.id, h)) : (a.setNode(h.id, h), a.setNode(h.id + "-note", k)), a.setParent(h.id, h.id + "-group"), a.setParent(h.id + "-note", h.id + "-group");
    } else
      a.setNode(h.id, h);
  }
  S2.debug("Count=", a.nodeCount(), a);
  let m = 0;
  l.forEach(function(i) {
    m++, S2.debug("Setting edge", i), a.setEdge(
      i.id1,
      i.id2,
      {
        relation: i,
        width: rt(i.title),
        height: B.labelHeight * Bn.getRows(i.title).length,
        labelpos: "c"
      },
      "id" + m
    );
  }), zs(a), S2.debug("Graph after layout", a.nodes());
  const f = n.node();
  a.nodes().forEach(function(i) {
    i !== void 0 && a.node(i) !== void 0 ? (S2.warn("Node " + i + ": " + JSON.stringify(a.node(i))), s.select("#" + f.id + " #" + i).attr(
      "transform",
      "translate(" + (a.node(i).x - a.node(i).width / 2) + "," + (a.node(i).y + (z[i] ? z[i].y : 0) - a.node(i).height / 2) + " )"
    ), s.select("#" + f.id + " #" + i).attr("data-x-shift", a.node(i).x - a.node(i).width / 2), g.querySelectorAll("#" + f.id + " #" + i + " .divider").forEach((h) => {
      const y = h.parentElement;
      let k = 0, M = 0;
      y && (y.parentElement && (k = y.parentElement.getBBox().width), M = parseInt(y.getAttribute("data-x-shift"), 10), Number.isNaN(M) && (M = 0)), h.setAttribute("x1", 0 - M + 8), h.setAttribute("x2", k - M - 8);
    })) : S2.debug("No Node " + i + ": " + JSON.stringify(a.node(i)));
  });
  let S3 = f.getBBox();
  a.edges().forEach(function(i) {
    i !== void 0 && a.edge(i) !== void 0 && (S2.debug("Edge " + i.v + " -> " + i.w + ": " + JSON.stringify(a.edge(i))), at(n, a.edge(i), a.edge(i).relation));
  }), S3 = f.getBBox();
  const E = {
    id: o || "root",
    label: o || "root",
    width: 0,
    height: 0
  };
  return E.width = S3.width + 2 * B.padding, E.height = S3.height + 2 * B.padding, S2.debug("Doc rendered", E, a), E;
};
var ot = {
  setConf: nt,
  draw: st
};
var xt = {
  parser: Ie,
  db: Ne,
  renderer: ot,
  styles: Re,
  init: (e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute, Ne.clear();
  }
};
export {
  xt as diagram
};
//# sourceMappingURL=stateDiagram-cb3c1d96-AD6OBMGX.js.map
