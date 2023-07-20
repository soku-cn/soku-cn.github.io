import {
  C,
  E
} from "./chunk-MMPFMPML.js";
import {
  Ax,
  Bx,
  Fx,
  Lx,
  Sx,
  Tn,
  To,
  Tx,
  bo,
  bx,
  kx,
  vx,
  wx
} from "./chunk-7M7LHZLX.js";

// node_modules/.pnpm/mermaid@10.2.4/node_modules/mermaid/dist/arc-3976c622.js
function fn(l) {
  return l.innerRadius;
}
function cn(l) {
  return l.outerRadius;
}
function yn(l) {
  return l.startAngle;
}
function gn(l) {
  return l.endAngle;
}
function mn(l) {
  return l && l.padAngle;
}
function pn(l, x, S, E2, h, v, J, a) {
  var s = S - l, n = E2 - x, m = J - h, i = a - v, r = i * s - m * n;
  if (!(r * r < bo))
    return r = (m * (x - v) - i * (l - h)) / r, [l + r * s, x + r * n];
}
function V(l, x, S, E2, h, v, J) {
  var a = l - S, s = x - E2, n = (J ? v : -v) / Bx(a * a + s * s), m = n * s, i = -n * a, r = l + m, f = x + i, c = S + m, q = E2 + i, o = (r + c) / 2, w = (f + q) / 2, p = c - r, g = q - f, A = p * p + g * g, C2 = h - v, P = r * q - c * f, F = (g < 0 ? -1 : 1) * Bx(kx(0, C2 * C2 * A - P * P)), G = (P * g - p * F) / A, d = (-P * p - g * F) / A, R = (P * g + p * F) / A, T = (-P * p + g * F) / A, e = G - o, u = d - w, K = R - o, L = T - w;
  return e * e + u * u > K * K + L * L && (G = R, d = T), {
    cx: G,
    cy: d,
    x01: -m,
    y01: -i,
    x11: G * (h / C2 - 1),
    y11: d * (h / C2 - 1)
  };
}
function hn() {
  var l = fn, x = cn, S = E(0), E2 = null, h = yn, v = gn, J = mn, a = null;
  function s() {
    var n, m, i = +l.apply(this, arguments), r = +x.apply(this, arguments), f = h.apply(this, arguments) - To, c = v.apply(this, arguments) - To, q = bx(c - f), o = c > f;
    if (a || (a = n = C()), r < i && (m = r, r = i, i = m), !(r > bo))
      a.moveTo(0, 0);
    else if (q > Fx - bo)
      a.moveTo(r * Sx(f), r * wx(f)), a.arc(0, 0, r, f, c, !o), i > bo && (a.moveTo(i * Sx(c), i * wx(c)), a.arc(0, 0, i, c, f, o));
    else {
      var w = f, p = c, g = f, A = c, C2 = q, P = q, F = J.apply(this, arguments) / 2, G = F > bo && (E2 ? +E2.apply(this, arguments) : Bx(i * i + r * r)), d = vx(bx(r - i) / 2, +S.apply(this, arguments)), R = d, T = d, e, u;
      if (G > bo) {
        var K = Ax(G / i * wx(F)), L = Ax(G / r * wx(F));
        (C2 -= K * 2) > bo ? (K *= o ? 1 : -1, g += K, A -= K) : (C2 = 0, g = A = (f + c) / 2), (P -= L * 2) > bo ? (L *= o ? 1 : -1, w += L, p -= L) : (P = 0, w = p = (f + c) / 2);
      }
      var N = r * Sx(w), O = r * wx(w), z = i * Sx(A), B = i * wx(A);
      if (d > bo) {
        var Q = r * Sx(p), U = r * wx(p), W = i * Sx(g), X = i * wx(g), I;
        if (q < Tn && (I = pn(N, O, W, X, Q, U, z, B))) {
          var Y = N - I[0], Z = O - I[1], $ = Q - I[0], k = U - I[1], _ = 1 / wx(Lx((Y * $ + Z * k) / (Bx(Y * Y + Z * Z) * Bx($ * $ + k * k))) / 2), nn = Bx(I[0] * I[0] + I[1] * I[1]);
          R = vx(d, (i - nn) / (_ - 1)), T = vx(d, (r - nn) / (_ + 1));
        }
      }
      P > bo ? T > bo ? (e = V(W, X, N, O, r, T, o), u = V(Q, U, z, B, r, T, o), a.moveTo(e.cx + e.x01, e.cy + e.y01), T < d ? a.arc(e.cx, e.cy, T, Tx(e.y01, e.x01), Tx(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, T, Tx(e.y01, e.x01), Tx(e.y11, e.x11), !o), a.arc(0, 0, r, Tx(e.cy + e.y11, e.cx + e.x11), Tx(u.cy + u.y11, u.cx + u.x11), !o), a.arc(u.cx, u.cy, T, Tx(u.y11, u.x11), Tx(u.y01, u.x01), !o))) : (a.moveTo(N, O), a.arc(0, 0, r, w, p, !o)) : a.moveTo(N, O), !(i > bo) || !(C2 > bo) ? a.lineTo(z, B) : R > bo ? (e = V(z, B, Q, U, i, -R, o), u = V(N, O, W, X, i, -R, o), a.lineTo(e.cx + e.x01, e.cy + e.y01), R < d ? a.arc(e.cx, e.cy, R, Tx(e.y01, e.x01), Tx(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, R, Tx(e.y01, e.x01), Tx(e.y11, e.x11), !o), a.arc(0, 0, i, Tx(e.cy + e.y11, e.cx + e.x11), Tx(u.cy + u.y11, u.cx + u.x11), o), a.arc(u.cx, u.cy, R, Tx(u.y11, u.x11), Tx(u.y01, u.x01), !o))) : a.arc(0, 0, i, A, g, o);
    }
    if (a.closePath(), n)
      return a = null, n + "" || null;
  }
  return s.centroid = function() {
    var n = (+l.apply(this, arguments) + +x.apply(this, arguments)) / 2, m = (+h.apply(this, arguments) + +v.apply(this, arguments)) / 2 - Tn / 2;
    return [Sx(m) * n, wx(m) * n];
  }, s.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : E(+n), s) : l;
  }, s.outerRadius = function(n) {
    return arguments.length ? (x = typeof n == "function" ? n : E(+n), s) : x;
  }, s.cornerRadius = function(n) {
    return arguments.length ? (S = typeof n == "function" ? n : E(+n), s) : S;
  }, s.padRadius = function(n) {
    return arguments.length ? (E2 = n == null ? null : typeof n == "function" ? n : E(+n), s) : E2;
  }, s.startAngle = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : E(+n), s) : h;
  }, s.endAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : E(+n), s) : v;
  }, s.padAngle = function(n) {
    return arguments.length ? (J = typeof n == "function" ? n : E(+n), s) : J;
  }, s.context = function(n) {
    return arguments.length ? (a = n ?? null, s) : a;
  }, s;
}

export {
  hn
};
//# sourceMappingURL=chunk-WO2Z7M4T.js.map
