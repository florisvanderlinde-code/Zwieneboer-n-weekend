<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hall of Fame 2026 — Zwieneboer'n Weekend</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    .podium { display:flex; align-items:flex-end; justify-content:center; gap:6px; margin:48px 0 64px; }
    .pod { display:flex; flex-direction:column; align-items:center; }
    .pod-avatar { width:70px; height:70px; border-radius:50%; background:var(--card); border:3px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:1.8rem; margin-bottom:10px; }
    .pod.p1 .pod-avatar { width:84px; height:84px; border-color:var(--gold); box-shadow:0 0 24px rgba(232,184,75,0.25); }
    .pod.p2 .pod-avatar { border-color:#999; }
    .pod.p3 .pod-avatar { border-color:#cd7f32; }
    .pod-name { font-family:'Barlow Condensed',sans-serif; font-size:0.82rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--white); margin-bottom:2px; text-align:center; }
    .pod-pts { font-family:'Bebas Neue',sans-serif; font-size:1rem; color:var(--muted); margin-bottom:8px; }
    .pod.p1 .pod-pts { color:var(--gold); font-size:1.2rem; }
    .pod-block { width:110px; display:flex; align-items:center; justify-content:center; font-family:'Bebas Neue',sans-serif; font-size:2.8rem; letter-spacing:0.06em; }
    .pod.p1 .pod-block { height:130px; background:var(--gold); color:var(--black); }
    .pod.p2 .pod-block { height:95px; background:#333; color:#bbb; }
    .pod.p3 .pod-block { height:65px; background:#252525; color:#cd7f32; }

    .sb-head { display:grid; grid-template-columns:56px 1fr 80px 80px 80px 90px; padding:10px 20px; background:var(--gold); font-family:'Barlow Condensed',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--black); }
    .sb-row { display:grid; grid-template-columns:56px 1fr 80px 80px 80px 90px; padding:15px 20px; border-bottom:1px solid var(--border); background:var(--dark); align-items:center; transition:background 0.2s; }
    .sb-row:hover { background:var(--card); }
    .sb-row.rank-1 { border-left:3px solid var(--gold); }
    .sb-row.rank-2 { border-left:3px solid #999; }
    .sb-row.rank-3 { border-left:3px solid #cd7f32; }
    .sb-row.must-org { border-left:3px solid var(--red); background:rgba(192,57,43,0.06); }
    .sb-row.must-org:hover { background:rgba(192,57,43,0.1); }

    .org-tag { display:inline-block; font-family:'Barlow Condensed',sans-serif; font-size:0.58rem; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; background:var(--red); color:#fff; padding:2px 7px; margin-top:3px; }

    .rk { font-family:'Bebas Neue',sans-serif; font-size:1.6rem; line-height:1; color:var(--muted); }
    .rk.r1 { color:var(--gold); }
    .rk.r2 { color:#999; }
    .rk.r3 { color:#cd7f32; }
    .rk.rl { color:var(--red); }

    .pn { font-family:'Barlow Condensed',sans-serif; font-size:1.05rem; font-weight:700; letter-spacing:0.04em; color:var(--white); }
    .pn small { display:block; font-size:0.68rem; font-weight:400; letter-spacing:0.1em; color:var(--muted); margin-top:1px; }

    .st { font-family:'Bebas Neue',sans-serif; font-size:1.3rem; letter-spacing:0.04em; text-align:center; color:var(--muted); }
    .st.gold { color:var(--gold); }
    .st.red  { color:var(--red); }

    .rule-box { background:rgba(192,57,43,0.08); border:1px solid rgba(192,57,43,0.3); border-left:3px solid var(--red); padding:20px 28px; display:flex; gap:16px; align-items:flex-start; margin-bottom:40px; }
    .rb-title { font-family:'Barlow Condensed',sans-serif; font-size:0.9rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#e74c3c; margin-bottom:4px; }
    .rb-text { font-size:0.85rem; color:var(--muted); margin:0; max-width:600px; }

    .pts-box { background:var(--dark); border:1px solid var(--border); border-top:3px solid var(--gold); padding:36px; margin-top:0; }

    @media (max-width:700px) {
      .sb-head, .sb-row { grid-template-columns:44px 1fr 60px 90px; }
      .sb-col-hide { display:none; }
      .pod-block { width:85px; }
      .pod.p1 .pod-block { height:100px; }
      .pod.p2 .pod-block { height:75px; }
      .pod.p3 .pod-block { height:52px; }
    }
  </style>
</head>
<body>

<nav>
  <a class="nav-logo" href="../index.html">
    <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQlqkEpRUYmpC9P4tdUUmZXkPVA-bgbgZfQki6Sqw8UGrLf811MbasRMuVLjMvxy56MKbDucxdjBTqeGS8agxxsmdIqCivmcQtaqXJFXeV9CSica60tFh0bWSug_ZemOqu6V2OTVQkCx756MYWnyP4vZ16gvTtHiwnRzQ6ZTyKTe7zmM4_iuMVkJwM=w200" alt="logo">
    <div class="nav-logo-text">Zwieneboer<span>'n</span></div>
  </a>
  <ul class="nav-links">
    <li><a href="../index.html">Home</a></li>
    <li><a href="locatie.html">Locatie</a></li>
    <li><a href="praktisch.html">Praktisch</a></li>
    <li><a href="webshop.html">Webshop</a></li>
    <li><a href="halloffame.html" class="active">Hall of Fame</a></li>
    <li><a href="gastenboek.html">Gastenboek</a></li>
  </ul>
  <div class="hamburger" id="burger"><span></span><span></span><span></span></div>
</nav>
<div class="nav-mobile" id="mobileNav">
  <a href="../index.html">Home</a><a href="locatie.html">Locatie</a><a href="praktisch.html">Praktisch</a>
  <a href="webshop.html">Webshop</a><a href="halloffame.html">Hall of Fame</a><a href="gastenboek.html">Gastenboek</a>
</div>

<div class="page-header">
  <div class="ph-bg"></div>
  <img class="ph-boar" src="https://lh3.googleusercontent.com/sitesv/APaQ0ST8RKndpCmcVi3OlsiQCDCIDbfuwsxMNcvJPp7EeGb_XsquxoZtmE8bk2z0MM__Xhd2HtcJrOXg4WXHKsLECWaSy6I7arDG1f6ED-S_yNUFzUCHXodLb1UEjpBAiNEUWnmyM4Ifl7zVfs62qk6x9s_tDb2ffkCg_zVOJxL6iTpvlLg-u30Gznfn0pc=w1280" alt="">
  <div class="ph-content">
    <span class="ph-tag">Editie 2026</span>
    <h1>Hall of Fame<br>Scorebord</h1>
    <p>De officiële eindstand — de laatste twee organiseren het volgende weekend.</p>
  </div>
</div>

<div class="section">

  <!-- REGEL -->
  <div class="rule-box reveal">
    <div style="font-size:1.5rem;flex-shrink:0;">⚠️</div>
    <div>
      <div class="rb-title">De ijzeren regel</div>
      <p class="rb-text">De <strong style="color:#e74c3c">laatste twee</strong> op het scorebord zijn verplicht het volgende Zwieneboer'n Weekend te organiseren. Geen excuses, geen uitzonderingen.</p>
    </div>
  </div>

  <!-- PODIUM -->
  <div class="reveal">
    <span class="s-tag">Podium</span>
    <h2>Top 3</h2>
    <div class="gold-bar"></div>
    <div class="podium">
      <div class="pod p2">
        <div class="pod-avatar">🥈</div>
        <div class="pod-name">Naam 2</div>
        <div class="pod-pts">340 pts</div>
        <div class="pod-block">2</div>
      </div>
      <div class="pod p1">
        <div class="pod-avatar">🏆</div>
        <div class="pod-name">Naam 1</div>
        <div class="pod-pts">420 pts</div>
        <div class="pod-block">1</div>
      </div>
      <div class="pod p3">
        <div class="pod-avatar">🥉</div>
        <div class="pod-name">Naam 3</div>
        <div class="pod-pts">290 pts</div>
        <div class="pod-block">3</div>
      </div>
    </div>
  </div>

  <!-- SCOREBORD -->
  <div class="reveal">
    <span class="s-tag">Volledige Ranglijst</span>
    <h2>Scorebord 2026</h2>
    <div class="gold-bar"></div>

    <div class="sb-head">
      <div>#</div>
      <div>Naam</div>
      <div style="text-align:center" class="sb-col-hide">Challenges</div>
      <div style="text-align:center" class="sb-col-hide">Bier</div>
      <div style="text-align:center">Stem</div>
      <div style="text-align:center">Totaal</div>
    </div>

    <div class="sb-row rank-1">
      <div class="rk r1">1</div>
      <div class="pn">🏆 Naam Deelnemer 1<small>Kampioen</small></div>
      <div class="st sb-col-hide" style="text-align:center">8</div>
      <div class="st sb-col-hide" style="text-align:center">12</div>
      <div class="st" style="text-align:center">⭐⭐⭐</div>
      <div class="st gold" style="text-align:center">420</div>
    </div>

    <div class="sb-row rank-2">
      <div class="rk r2">2</div>
      <div class="pn">🥈 Naam Deelnemer 2<small>&nbsp;</small></div>
      <div class="st sb-col-hide" style="text-align:center">7</div>
      <div class="st sb-col-hide" style="text-align:center">9</div>
      <div class="st" style="text-align:center">⭐⭐</div>
      <div class="st" style="text-align:center">340</div>
    </div>

    <div class="sb-row rank-3">
      <div class="rk r3">3</div>
      <div class="pn">🥉 Naam Deelnemer 3<small>&nbsp;</small></div>
      <div class="st sb-col-hide" style="text-align:center">6</div>
      <div class="st sb-col-hide" style="text-align:center">8</div>
      <div class="st" style="text-align:center">⭐⭐</div>
      <div class="st" style="text-align:center">290</div>
    </div>

    <div class="sb-row">
      <div class="rk">4</div>
      <div class="pn">Naam Deelnemer 4<small>&nbsp;</small></div>
      <div class="st sb-col-hide" style="text-align:center">5</div>
      <div class="st sb-col-hide" style="text-align:center">7</div>
      <div class="st" style="text-align:center">⭐</div>
      <div class="st" style="text-align:center">240</div>
    </div>

    <!-- LAATSTE 2 — ROOD -->
    <div class="sb-row must-org">
      <div class="rk rl">5</div>
      <div class="pn">
        Naam Deelnemer 5
        <div class="org-tag">🗓 Organiseert volgend jaar</div>
      </div>
      <div class="st sb-col-hide" style="text-align:center">3</div>
      <div class="st sb-col-hide" style="text-align:center">4</div>
      <div class="st" style="text-align:center">—</div>
      <div class="st red" style="text-align:center">130</div>
    </div>

    <div class="sb-row must-org">
      <div class="rk rl">6</div>
      <div class="pn">
        Naam Deelnemer 6
        <div class="org-tag">🗓 Organiseert volgend jaar</div>
      </div>
      <div class="st sb-col-hide" style="text-align:center">2</div>
      <div class="st sb-col-hide" style="text-align:center">3</div>
      <div class="st" style="text-align:center">—</div>
      <div class="st red" style="text-align:center">95</div>
    </div>

  </div>

  <!-- PUNTENSYSTEEM -->
  <div class="reveal" style="margin-top:64px;">
    <span class="s-tag">Spelregels</span>
    <h2>Hoe worden punten verdiend?</h2>
    <div class="gold-bar"></div>
    <div class="pts-box">
      <div class="info-rows">
        <div class="info-row"><span class="ir-label">Challenge winnen</span><span class="ir-val">50 punten per gewonnen challenge</span></div>
        <div class="info-row"><span class="ir-label">Bierpint bijhouden</span><span class="ir-val">10 punten per geverifieerde pint</span></div>
        <div class="info-row"><span class="ir-label">Groepsstemmen</span><span class="ir-val">Tot 100 punten via stem van de groep</span></div>
        <div class="info-row"><span class="ir-label">Episch moment</span><span class="ir-val">Wildcard punten toegekend door de organisator</span></div>
        <div class="info-row"><span class="ir-label">Nacht overleven</span><span class="ir-val">20 punten — wakker tot 03:00</span></div>
        <div class="info-row" style="border-bottom:none;">
          <span class="ir-label" style="color:var(--red)">Laatste 2</span>
          <span class="ir-val">Verplicht het <strong style="color:var(--white)">volgende weekend te organiseren</strong></span>
        </div>
      </div>
    </div>
  </div>

</div>

<div id="toast"></div>
<footer>
  <div class="foot-logo">
    <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQlqkEpRUYmpC9P4tdUUmZXkPVA-bgbgZfQki6Sqw8UGrLf811MbasRMuVLjMvxy56MKbDucxdjBTqeGS8agxxsmdIqCivmcQtaqXJFXeV9CSica60tFh0bWSug_ZemOqu6V2OTVQkCx756MYWnyP4vZ16gvTtHiwnRzQ6ZTyKTe7zmM4_iuMVkJwM=w200" alt="logo">
    <span>Zwieneboer'n Weekend</span>
  </div>
  <div class="foot-links"><a href="../index.html">Home</a><a href="gastenboek.html">Gastenboek</a></div>
  <div class="foot-copy">© 2026 Zwieneboer'n Weekend — Gemaakt met zorg voor de vrienden</div>
</footer>
<script src="../js/main.js"></script>
</body>
</html>
