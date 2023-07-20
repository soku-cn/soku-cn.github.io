import {
  Ie,
  Ne,
  Oe,
  Re,
  Rt,
  Tt,
  re,
  xt
} from "./chunk-FIHXZ46M.js";
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
  Ut,
  jg
} from "./chunk-7M7LHZLX.js";

// node_modules/.pnpm/mermaid@10.2.4/node_modules/mermaid/dist/stateDiagram-v2-fab09385.js
var h = "rect";
var C = "rectWithTitle";
var nt = "start";
var ct = "end";
var it = "divider";
var rt = "roundedWithTitle";
var lt = "note";
var at = "noteGroup";
var u = "statediagram";
var dt = "state";
var Et = `${u}-${dt}`;
var U = "transition";
var St = "note";
var Tt2 = "note-edge";
var pt = `${U} ${Tt2}`;
var ut = `${u}-${St}`;
var _t = "cluster";
var ft = `${u}-${_t}`;
var Dt = "cluster-alt";
var bt = `${u}-${Dt}`;
var V = "parent";
var Y = "note";
var At2 = "state";
var N = "----";
var ht = `${N}${Y}`;
var v = `${N}${V}`;
var W = "fill:none";
var z = "fill: #333";
var m = "c";
var q = "text";
var K = "normal";
var y = {};
var E = 0;
var yt = function(t) {
  const n = Object.keys(t);
  for (const e of n)
    t[e];
};
var gt2 = function(t, n) {
  S.trace("Extracting classes"), n.db.clear();
  try {
    return n.parser.parse(t), n.db.extract(n.db.getRootDocV2()), n.db.getClasses();
  } catch (e) {
    return e;
  }
};
function xt2(t) {
  return t == null ? "" : t.classes ? t.classes.join(" ") : "";
}
function R(t = "", n = 0, e = "", c = N) {
  const i = e !== null && e.length > 0 ? `${c}${e}` : "";
  return `${At2}-${t}${i}-${n}`;
}
var A2 = (t, n, e, c, i, r) => {
  const s = e.id, _ = xt2(c[s]);
  if (s !== "root") {
    let T = h;
    e.start === true && (T = nt), e.start === false && (T = ct), e.type !== xt && (T = e.type), y[s] || (y[s] = {
      id: s,
      shape: T,
      description: Bn.sanitizeText(s, Ut()),
      classes: `${_} ${Et}`
    });
    const o = y[s];
    e.description && (Array.isArray(o.description) ? (o.shape = C, o.description.push(e.description)) : o.description.length > 0 ? (o.shape = C, o.description === s ? o.description = [e.description] : o.description = [o.description, e.description]) : (o.shape = h, o.description = e.description), o.description = Bn.sanitizeTextOrArray(o.description, Ut())), o.description.length === 1 && o.shape === C && (o.shape = h), !o.type && e.doc && (S.info("Setting cluster for ", s, G(e)), o.type = "group", o.dir = G(e), o.shape = e.type === re ? it : rt, o.classes = o.classes + " " + ft + " " + (r ? bt : ""));
    const p = {
      labelStyle: "",
      shape: o.shape,
      labelText: o.description,
      // typeof newNode.description === 'object'
      //   ? newNode.description[0]
      //   : newNode.description,
      classes: o.classes,
      style: "",
      //styles.style,
      id: s,
      dir: o.dir,
      domId: R(s, E),
      type: o.type,
      padding: 15
      //getConfig().flowchart.padding
    };
    if (p.centerLabel = true, e.note) {
      const a = {
        labelStyle: "",
        shape: lt,
        labelText: e.note.text,
        classes: ut,
        // useHtmlLabels: false,
        style: "",
        // styles.style,
        id: s + ht + "-" + E,
        domId: R(s, E, Y),
        type: o.type,
        padding: 15
        //getConfig().flowchart.padding
      }, d = {
        labelStyle: "",
        shape: at,
        labelText: e.note.text,
        classes: o.classes,
        style: "",
        // styles.style,
        id: s + v,
        domId: R(s, E, V),
        type: "group",
        padding: 0
        //getConfig().flowchart.padding
      };
      E++;
      const f = s + v;
      t.setNode(f, d), t.setNode(a.id, a), t.setNode(s, p), t.setParent(s, f), t.setParent(a.id, f);
      let S2 = s, D = a.id;
      e.note.position === "left of" && (S2 = a.id, D = s), t.setEdge(S2, D, {
        arrowhead: "none",
        arrowType: "",
        style: W,
        labelStyle: "",
        classes: pt,
        arrowheadStyle: z,
        labelpos: m,
        labelType: q,
        thickness: K
      });
    } else
      t.setNode(s, p);
  }
  n && n.id !== "root" && (S.trace("Setting node ", s, " to be child of its parent ", n.id), t.setParent(s, n.id)), e.doc && (S.trace("Adding nodes children "), $t(t, e, e.doc, c, i, !r));
};
var $t = (t, n, e, c, i, r) => {
  S.trace("items", e), e.forEach((s) => {
    switch (s.stmt) {
      case Tt:
        A2(t, n, s, c, i, r);
        break;
      case xt:
        A2(t, n, s, c, i, r);
        break;
      case Rt:
        {
          A2(t, n, s.state1, c, i, r), A2(t, n, s.state2, c, i, r);
          const _ = {
            id: "edge" + E,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: W,
            labelStyle: "",
            label: Bn.sanitizeText(s.description, Ut()),
            arrowheadStyle: z,
            labelpos: m,
            labelType: q,
            thickness: K,
            classes: U
          };
          t.setEdge(s.state1.id, s.state2.id, _, E), E++;
        }
        break;
    }
  });
};
var G = (t, n = Oe) => {
  let e = n;
  if (t.doc)
    for (let c = 0; c < t.doc.length; c++) {
      const i = t.doc[c];
      i.stmt === "dir" && (e = i.value);
    }
  return e;
};
var Ct = async function(t, n, e, c) {
  S.info("Drawing state diagram (v2)", n), y = {}, c.db.getDirection();
  const { securityLevel: i, state: r } = Ut(), s = r.nodeSpacing || 50, _ = r.rankSpacing || 50;
  S.info(c.db.getRootDocV2()), c.db.extract(c.db.getRootDocV2()), S.info(c.db.getRootDocV2());
  const T = c.db.getStates(), o = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: G(c.db.getRootDocV2()),
    nodesep: s,
    ranksep: _,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  A2(o, void 0, c.db.getRootDocV2(), T, c.db, true);
  let p;
  i === "sandbox" && (p = At("#i" + n));
  const a = i === "sandbox" ? At(p.nodes()[0].contentDocument.body) : At("body"), d = a.select(`[id="${n}"]`), f = a.select("#" + n + " g");
  await gt(f, o, ["barb"], u, n);
  const S2 = 8;
  Oi.insertTitle(d, "statediagramTitleText", r.titleTopMargin, c.db.getDiagramTitle());
  const D = d.node().getBBox(), L = D.width + S2 * 2, P = D.height + S2 * 2;
  d.attr("class", u);
  const k = d.node().getBBox();
  jg(d, P, L, r.useMaxWidth);
  const O = `${k.x - S2} ${k.y - S2} ${L} ${P}`;
  S.debug(`viewBox ${O}`), d.attr("viewBox", O);
  const J = document.querySelectorAll('[id="' + n + '"] .edgeLabel .label');
  for (const x of J) {
    const B = x.getBBox(), b = document.createElementNS("http://www.w3.org/2000/svg", h);
    b.setAttribute("rx", 0), b.setAttribute("ry", 0), b.setAttribute("width", B.width), b.setAttribute("height", B.height), x.insertBefore(b, x.firstChild);
  }
};
var Rt2 = {
  setConf: yt,
  getClasses: gt2,
  draw: Ct
};
var Ht = {
  parser: Ie,
  db: Ne,
  renderer: Rt2,
  styles: Re,
  init: (t) => {
    t.state || (t.state = {}), t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute, Ne.clear();
  }
};
export {
  Ht as diagram
};
//# sourceMappingURL=stateDiagram-v2-fab09385-WXFAH4KY.js.map
