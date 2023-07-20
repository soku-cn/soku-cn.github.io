import {
  It,
  Lt,
  xt
} from "./chunk-XEV7OU6G.js";
import {
  gt
} from "./chunk-VKIV2DCC.js";
import "./chunk-6BEJJ5JU.js";
import "./chunk-JV3LYXG7.js";
import "./chunk-ZM5HLQ45.js";
import {
  A
} from "./chunk-Y4M7ZTR6.js";
import "./chunk-JIQEULOQ.js";
import "./chunk-RA3GFVPD.js";
import "./chunk-MMPFMPML.js";
import {
  At,
  Bn,
  Oi,
  S,
  S0,
  Ug,
  Ut,
  m0,
  pf
} from "./chunk-7M7LHZLX.js";

// node_modules/.pnpm/mermaid@10.2.4/node_modules/mermaid/dist/classDiagram-v2-d771589e.js
var S2 = (o) => Bn.sanitizeText(o, Ut());
var v = {
  dividerMargin: 10,
  padding: 5,
  textHeight: 10,
  curve: void 0
};
var q = function(o, t, p, n) {
  const e = Object.keys(o);
  S.info("keys:", e), S.info(o), e.forEach(function(s) {
    var y, d;
    const l = o[s], i = {
      shape: "rect",
      id: l.id,
      domId: l.domId,
      labelText: S2(l.id),
      labelStyle: "",
      style: "fill: none; stroke: black",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((y = Ut().flowchart) == null ? void 0 : y.padding) ?? ((d = Ut().class) == null ? void 0 : d.padding)
    };
    t.setNode(l.id, i), I(l.classes, t, p, n, l.id), S.info("setNode", i);
  });
};
var I = function(o, t, p, n, e) {
  const s = Object.keys(o);
  S.info("keys:", s), S.info(o), s.filter((l) => o[l].parent == e).forEach(function(l) {
    var u, m;
    const a = o[l], i = a.cssClasses.join(" "), y = { labelStyle: "", style: "" }, d = a.label ?? a.id, f = 0, h = "class_box", b = {
      labelStyle: y.labelStyle,
      shape: h,
      labelText: S2(d),
      classData: a,
      rx: f,
      ry: f,
      class: i,
      style: y.style,
      id: a.id,
      domId: a.domId,
      tooltip: n.db.getTooltip(a.id, e) || "",
      haveCallback: a.haveCallback,
      link: a.link,
      width: a.type === "group" ? 500 : void 0,
      type: a.type,
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((u = Ut().flowchart) == null ? void 0 : u.padding) ?? ((m = Ut().class) == null ? void 0 : m.padding)
    };
    t.setNode(a.id, b), e && t.setParent(a.id, e), S.info("setNode", b);
  });
};
var F = function(o, t, p, n) {
  S.info(o), o.forEach(function(e, s) {
    var m, g;
    const l = e, a = "", i = { labelStyle: "", style: "" }, y = l.text, d = 0, f = "note", h = {
      labelStyle: i.labelStyle,
      shape: f,
      labelText: S2(y),
      noteData: l,
      rx: d,
      ry: d,
      class: a,
      style: i.style,
      id: l.id,
      domId: l.id,
      tooltip: "",
      type: "note",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((m = Ut().flowchart) == null ? void 0 : m.padding) ?? ((g = Ut().class) == null ? void 0 : g.padding)
    };
    if (t.setNode(l.id, h), S.info("setNode", h), !l.class || !(l.class in n))
      return;
    const b = p + s, u = {
      id: `edgeNote${b}`,
      //Set relationship style and line type
      classes: "relation",
      pattern: "dotted",
      // Set link type for rendering
      arrowhead: "none",
      //Set edge extra labels
      startLabelRight: "",
      endLabelLeft: "",
      //Set relation arrow types
      arrowTypeStart: "none",
      arrowTypeEnd: "none",
      style: "fill:none",
      labelStyle: "",
      curve: m0(v.curve, pf)
    };
    t.setEdge(l.id, l.class, u, b);
  });
};
var H = function(o, t) {
  const p = Ut().flowchart;
  let n = 0;
  o.forEach(function(e) {
    var l;
    n++;
    const s = {
      //Set relationship style and line type
      classes: "relation",
      pattern: e.relation.lineType == 1 ? "dashed" : "solid",
      id: "id" + n,
      // Set link type for rendering
      arrowhead: e.type === "arrow_open" ? "none" : "normal",
      //Set edge extra labels
      startLabelRight: e.relationTitle1 === "none" ? "" : e.relationTitle1,
      endLabelLeft: e.relationTitle2 === "none" ? "" : e.relationTitle2,
      //Set relation arrow types
      arrowTypeStart: D(e.relation.type1),
      arrowTypeEnd: D(e.relation.type2),
      style: "fill:none",
      labelStyle: "",
      curve: m0(p == null ? void 0 : p.curve, pf)
    };
    if (S.info(s, e), e.style !== void 0) {
      const a = S0(e.style);
      s.style = a.style, s.labelStyle = a.labelStyle;
    }
    e.text = e.title, e.text === void 0 ? e.style !== void 0 && (s.arrowheadStyle = "fill: #333") : (s.arrowheadStyle = "fill: #333", s.labelpos = "c", ((l = Ut().flowchart) == null ? void 0 : l.htmlLabels) ?? Ut().htmlLabels ? (s.labelType = "html", s.label = '<span class="edgeLabel">' + e.text + "</span>") : (s.labelType = "text", s.label = e.text.replace(Bn.lineBreakRegex, `
`), e.style === void 0 && (s.style = s.style || "stroke: #333; stroke-width: 1.5px;fill:none"), s.labelStyle = s.labelStyle.replace("color:", "fill:"))), t.setEdge(e.id1, e.id2, s, n);
  });
};
var V = function(o) {
  v = {
    ...v,
    ...o
  };
};
var W = async function(o, t, p, n) {
  S.info("Drawing class - ", t);
  const e = Ut().flowchart ?? Ut().class, s = Ut().securityLevel;
  S.info("config:", e);
  const l = (e == null ? void 0 : e.nodeSpacing) ?? 50, a = (e == null ? void 0 : e.rankSpacing) ?? 50, i = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: n.db.getDirection(),
    nodesep: l,
    ranksep: a,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), y = n.db.getNamespaces(), d = n.db.getClasses(), f = n.db.getRelations(), h = n.db.getNotes();
  S.info(f), q(y, i, t, n), I(d, i, t, n), H(f, i), F(h, i, f.length + 1, d);
  let b;
  s === "sandbox" && (b = At("#i" + t));
  const u = s === "sandbox" ? At(b.nodes()[0].contentDocument.body) : At("body"), m = u.select(`[id="${t}"]`), g = u.select("#" + t + " g");
  if (await gt(
    g,
    i,
    ["aggregation", "extension", "composition", "dependency", "lollipop"],
    "classDiagram",
    t
  ), Oi.insertTitle(m, "classTitleText", (e == null ? void 0 : e.titleTopMargin) ?? 5, n.db.getDiagramTitle()), Ug(i, m, e == null ? void 0 : e.diagramPadding, e == null ? void 0 : e.useMaxWidth), !(e != null && e.htmlLabels)) {
    const T = s === "sandbox" ? b.nodes()[0].contentDocument : document, M = T.querySelectorAll('[id="' + t + '"] .edgeLabel .label');
    for (const w of M) {
      const L = w.getBBox(), x = T.createElementNS("http://www.w3.org/2000/svg", "rect");
      x.setAttribute("rx", 0), x.setAttribute("ry", 0), x.setAttribute("width", L.width), x.setAttribute("height", L.height), w.insertBefore(x, w.firstChild);
    }
  }
};
function D(o) {
  let t;
  switch (o) {
    case 0:
      t = "aggregation";
      break;
    case 1:
      t = "extension";
      break;
    case 2:
      t = "composition";
      break;
    case 3:
      t = "dependency";
      break;
    case 4:
      t = "lollipop";
      break;
    default:
      t = "none";
  }
  return t;
}
var J = {
  setConf: V,
  draw: W
};
var se = {
  parser: Lt,
  db: It,
  renderer: J,
  styles: xt,
  init: (o) => {
    o.class || (o.class = {}), o.class.arrowMarkerAbsolute = o.arrowMarkerAbsolute, It.clear();
  }
};
export {
  se as diagram
};
//# sourceMappingURL=classDiagram-v2-d771589e-AOJT4Q5D.js.map
