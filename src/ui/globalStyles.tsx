import { injectGlobal } from "styled-components";

export const breakpoints = {
  sm: "min-width: 576px",
  md: "min-width: 768px",
  lg: "min-width: 1312p"
};

export default () => injectGlobal`
:root {
   /*  ----- colors ----- */
  /* neutral */
  --color-neutral-1: #ffffff;
  --color-neutral-2: #f7f8f9;
  --color-neutral-3: #f0f2f4;
  --color-neutral-4: #e3e5e8;
  --color-neutral-5: #cfd2d7;
  --color-neutral-6: #c3c8cf;
  --color-neutral-7: #b7bec6;
  --color-neutral-8: #9ca3ae;
  --color-neutral-9: #888f9a;
  --color-neutral-10: #686f78;
  --color-neutral-11: #525762;
  --color-neutral-12: #2d323b;
  --color-neutral-13: #242a2f;
  /* blue */
  --color-blue-1: #f0f6fd;
  --color-blue-2: #e8f2fe;
  --color-blue-3: #cfe6ff;
  --color-blue-4: #b1d4f8;
  --color-blue-5: #79b4f2;
  --color-blue-6: #529bea;
  --color-blue-7: #267edc;
  --color-blue-8: #256fc7;
  --color-blue-9: #2665b0;
  --color-blue-10: #1f4a8a;
  --color-blue-11: #0f2952;
  --color-blue-12: #162b4d;
  --color-blue-13: #052244;
  /* green */
  --color-green-1: #f2fff9;
  --color-green-2: #e7fff3;
  --color-green-3: #d2fde8;
  --color-green-4: #bbfcdc;
  --color-green-5: #96f3c6;
  --color-green-6: #60e1a3;
  --color-green-7: #48cc8d;
  --color-green-8: #34b477;
  --color-green-9: #20a86f;
  --color-green-10: #0f975e;
  /* red */
  --color-red-1: #fff2f2;
  --color-red-2: #ffe9e9;
  --color-red-3: #ffd4d4;
  --color-red-4: #fcb0b0;
  --color-red-5: #fb8686;
  --color-red-6: #f37070;
  --color-red-7: #e2535d;
  --color-red-8: #cc4149;
  --color-red-9: #bd242d;
  --color-red-10: #b00c15;
  /* yellow */
  --color-yellow-1: #fffaf3;
  --color-yellow-2: #fff5e8;
  --color-yellow-3: #fff1e0;
  --color-yellow-4: #ffecd4;
  --color-yellow-5: #ffe3bf;
  --color-yellow-6: #ffd9a8;
  --color-yellow-7: #ffd196;
  --color-yellow-8: #f6be7d;
  --color-yellow-9: #f1b269;
  --color-yellow-10: #e9a454;
  /* purple */
  --color-purple-1: #fbf4fe;
  --color-purple-2: #f3e9f8;
  --color-purple-3: #efdbf8;
  --color-purple-4: #e1c5ee;
  --color-purple-5: #d3ade5;
  --color-purple-6: #bd90d2;
  --color-purple-7: #a16dba;
  --color-purple-8: #8d50aa;
  --color-purple-9: #7e429b;
  --color-purple-10: #602a7a;
  /* opacity */
  --color-opacity-1: rgba(255, 255, 255, 0.4);
  --color-opacity-2: rgba(45, 50, 59, 0.25);
  --color-opacity-3: rgba(45, 50, 59, 0.4);

  /*  ----- border radius ----- */
  --border-radius: 6px;
  --border-radius-base-modal: 12px;
  --border-radius-base-pill: 999px;
  --border-radius-base-tooltip: 8px;
  --border-radius-base-standard: 8px;
  --border-radius-btn: 6px;
  --border-radius-btn-pill: 50% /100%;
  --border-radius-label-large: 50% /100%;
  --border-radius-label-small: 6px;

  /*  ----- overalys ----- */
  --overlay-modal: rgba(45, 50, 59, 0.4);
  --overlay-tooltip: rgba(45, 50, 59, 0.25);

  /*  ----- elevations ----- */
  --elevation-1: 0px 1px 8px rgba(43, 51, 63, 0.2);
  --elevation-2: 0px 4px 12px rgba(43, 51, 63, 0.08);
  --elevation-3: 0px 2px 28px rgba(43, 51, 63, 0.18);
  --elevation-4: 0px 40px 60px rgba(43, 51, 63, 0.15);

  /*  ----- fonts ----- */
  --font-InterUI: Inter UI;
  --font-icon: "exim-icon";

  /*  ----- typography ----- */
  --typography-h1: normal 500 96px / normal var(--font-InterUI);
  --typography-h2: normal 500 60px / normal var(--font-InterUI);
  --typography-h2-bold: normal 600 60px / normal var(--font-InterUI);
  --typography-h3: normal 500 48px / normal var(--font-InterUI);
  /* --typography-h3-bold: normal 600 48px / normal var(--font-InterUI); */
  --typography-h4: normal 500 34px / normal var(--font-InterUI);
  /* --typography-h4-bold: normal 600 34px / normal var(--font-InterUI); */
  --typography-h5: normal 500 28px / normal var(--font-InterUI);
  --typography-h5-bold: normal 600 28px / normal var(--font-InterUI);
  /* --typography-h6: normal 500 20px / normal var(--font-InterUI); */
  --typography-h6-bold: normal 600 20px / normal var(--font-InterUI);
  --typography-sh-1: normal 500 17px / normal var(--font-InterUI);
  --typography-sh-2: normal 500 15px / normal var(--font-InterUI);
  --typography-sh-3: normal 500 13px / normal var(--font-InterUI);
  --typography-btn-small-primary: normal 500 15px / normal var(--font-InterUI);
  --typography-btn-small-secondary: normal normal 15px / normal
    var(--font-InterUI);
  --typography-btn-large-primary: normal 500 17px / normal var(--font-InterUI);
  --typography-btn-large-secondary: normal normal 17px / normal
    var(--font-InterUI);
  --typography-btn-status: italic 15px / normal var(--font-InterUI);

  /* primary colors */
  --red: #e60023;
  --white: #fff;
  /* 
  --lightGray: #efefef;
  --gray: #8e8e8e;
  --darkGray: #333; 
  */
  --lightGray: #F0F2F4;
  --gray: #888F9A;
  --darkGray: #2D323B;

  /* secondary colors */
  --yellow :#FFDD00;
  --green: #0fa573;
  --pine: #0a6955;
  --olive: #364a4c;
  --blue: #4a90e2;
  --navy: #004b91;
  --midnight: #133a5e;
  --purple: #b469eb;
  --orchid: #8046a5;
  --eggplant: #5b2677;
  --maroon: #6e0f3c;
  --watermelon: #f13535;
  --orange: #e3780c;

  /* borders */
  --border-width: 1px;
  --border-color: #efefef;
  --border-radius: 8px;

  /* white space */
  --hbt: 3px;
  --vbt: 3px;
  --sm-hbt: 4px;
  --sm-vbt: 4px;
  --md-hbt: 8px;
  --md-vbt: 6px;
  --lg-hbt: 8px;
  --lg-vbt: 6px;

  /* box white space */
  --bt: 4px;

  /* column */
  --ncols: 12;

  /* font size */
  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 18px;
  --font-size-5: 21px;
}

/** PRIMARY COLORS **/

/* yellow */

.yellow {
  color: var(--yellow);
}

.yellowBg {
  background-color: var(--yellow);
}

/* red */

.red {
  color: var(--red);
}

.redBg {
  background-color: var(--red);
}

/* white */

.white {
  color: var(--white);
}

.whiteBg {
  background-color: var(--white);
}

/* lightGray */

.lightGray {
  color: var(--lightGray);
}

.lightGrayBg {
  background-color: var(--lightGray);
}

/* gray */

.gray {
  color: var(--gray);
}

.grayBg {
  background-color: var(--gray);
}

/* darkGray */

.darkGray {
  color: var(--darkGray);
}

.darkGrayBg {
  background-color: var(--darkGray);
}

/** SECONDARY COLORS **/

/* green */

.green {
  color: var(--green);
}

.greenBg {
  background-color: var(--green);
}

/* pine */

.pine {
  color: var(--pine);
}

.pineBg {
  background-color: var(--pine);
}

/* olive */

.olive {
  color: var(--olive);
}

.oliveBg {
  background-color: var(--olive);
}

/* blue */

.blue {
  color: var(--blue);
}

.blueBg {
  background-color: var(--blue);
}

/* navy */

.navy {
  color: var(--navy);
}

.navyBg {
  background-color: var(--navy);
}

/* midnight */

.midnight {
  color: var(--midnight);
}

.midnightBg {
  background-color: var(--midnight);
}

/* purple */

.purple {
  color: var(--purple);
}

.purpleBg {
  background-color: var(--purple);
}

/* orchid */

.orchid {
  color: var(--orchid);
}

.orchidBg {
  background-color: var(--orchid);
}

/* eggplant */

.eggplant {
  color: var(--eggplant);
}

.eggplantBg {
  background-color: var(--eggplant);
}

/* maroon */

.maroon {
  color: var(--maroon);
}

.maroonBg {
  background-color: var(--maroon);
}

/* watermelon */

.watermelon {
  color: var(--watermelon);
}

.watermelonBg {
  background-color: var(--watermelon);
}

/* orange */

.orange {
  color: var(--orange);
}

.orangeBg {
  background-color: var(--orange);
}

/* transparent */

.transparentBg {
  background-color: transparent;
}

/* light wash */

.lightWashBg {
  background-color: #e2e2e2;
}

.darkWashBg {
  background-color: #dadada;
}

/* Border lines */

.border {
  border: var(--border-width) solid var(--border-color);
}

.borderTop {
  border-top: var(--border-width) solid var(--border-color);
}

html:not([dir="rtl"]) .borderRight {
  border-right: var(--border-width) solid var(--border-color);
}

html[dir="rtl"] .borderRight {
  border-left: var(--border-width) solid var(--border-color);
}

.borderBottom {
  border-bottom: var(--border-width) solid var(--border-color);
}

html:not([dir="rtl"]) .borderLeft {
  border-left: var(--border-width) solid var(--border-color);
}

html[dir="rtl"] .borderLeft {
  border-right: var(--border-width) solid var(--border-color);
}

/* Border radii */

.square {
  border-radius: 0;
}

.circle {
  border-radius: 50%;
}

.pill {
  border-radius: 999px;
}

.rounded {
  border-radius: var(--border-radius);
}

.roundedTop {
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

html:not([dir="rtl"]) .roundedRight {
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

html[dir="rtl"] .roundedRight {
  border-radius: var(--border-radius) 0 0 var(--border-radius);
}

.roundedBottom {
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}

html:not([dir="rtl"]) .roundedLeft {
  border-radius: var(--border-radius) 0 0 var(--border-radius);
}

html[dir="rtl"] .roundedLeft {
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.noBorder {
  border: 0;
}

/* display */

.block {
  display: block;
}

.inline {
  display: inline;
}

.inlineBlock {
  display: inline-block;
}

.table {
  display: table;
}

/* overflow */

.overflowHidden {
  overflow: hidden;
}

.overflowScroll {
  overflow: scroll;
}

.overflowScrollX {
  overflow-x: scroll;
  overflow-y: hidden;
}

.overflowScrollY {
  overflow-x: hidden;
  overflow-y: scroll;
}

.overflowAuto {
  overflow: auto;
}

.fit {
  max-width: 100%;
}

/* position */

.relative {
  position: relative;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.sticky {
  /*
    IE11 Fallback: when sticky is not supported, fall back to relative positioning.
    We do this so if there is a zIndex set on sticky, the stacking context will be correct
  */
  position: relative;
  position: sticky;
}

.top0 {
  top: 0;
}

.right0 {
  right: 0;
}

.bottom0 {
  bottom: 0;
}

.left0 {
  left: 0;
}

/* size */

.small {
  min-height: 36px;
}

.medium {
  min-height: 40px;
}

.large {
  min-height: 48px;
}

/* box model */

.borderBox {
  box-sizing: border-box;
}

.contentBox {
  box-sizing: content-box;
}

.flex {
  display: flex;
}

@media (${breakpoints.sm}) {
  .smFlex {
    display: flex;
  }
}

@media (${breakpoints.md}) {
  .mdFlex {
    display: flex;
  }
}

@media (${breakpoints.lg}) {
  .lgFlex {
    display: flex;
  }
}

.flexColumn {
  flex-direction: column;
}

.flexWrap {
  flex-wrap: wrap;
}

.itemsStart {
  align-items: flex-start;
}

.itemsEnd {
  align-items: flex-end;
}

.itemsCenter {
  align-items: center;
}

.itemsBaseline {
  align-items: baseline;
}

.itemsStretch {
  align-items: stretch;
}

.selfStart {
  align-self: flex-start;
}

.selfEnd {
  align-self: flex-end;
}

.selfCenter {
  max-width: 60%;
  margin: auto;
}

.selfBaseline {
  align-self: baseline;
}

.selfStretch {
  align-self: stretch;
}

.justifyStart {
  justify-content: flex-start;
}

.justifyEnd {
  justify-content: flex-end;
}

.justifyCenter {
  justify-content: center;
}

.justifyBetween {
  justify-content: space-between;
}

.justifyAround {
  justify-content: space-around;
}

.contentStart {
  align-content: flex-start;
}

.contentEnd {
  align-content: flex-end;
}

.contentCenter {
  align-content: center;
}

.contentBetween {
  align-content: space-between;
}

.contentAround {
  align-content: space-around;
}

.contentStretch {
  align-content: stretch;
}

/* Fix for Chrome 44 bug: https://code.google.com/p/chromium/issues/detail?id=506893 */

.flexGrow {
  flex: 1 1 auto;

  /* 1 */
  min-height: 0;
  min-width: 0;
}

.flexNone {
  flex: 0 0 auto;
}

.orderFirst {
  order: -1;
}

.orderLast {
  order: 99999;
}

.mlAuto {
  margin-left: auto;
}

.mrAuto {
  margin-right: auto;
}

.m0 {
  margin: calc(var(--vbt) * 0) calc(var(--hbt) * 0);
}

.mt0 {
  margin-top: calc(var(--vbt) * 0);
}

.mr0 {
  margin-right: calc(var(--hbt) * 0);
}

.mb0 {
  margin-bottom: calc(var(--vbt) * 0);
}

.ml0 {
  margin-left: calc(var(--hbt) * 0);
}

.p0 {
  padding: calc(var(--vbt) * 0) calc(var(--hbt) * 0);
}

.px0 {
  padding-left: calc(var(--hbt) * 0);
  padding-right: calc(var(--hbt) * 0);
}

.py0 {
  padding-bottom: calc(var(--vbt) * 0);
  padding-top: calc(var(--vbt) * 0);
}

.m1 {
  margin: calc(var(--vbt) * 1) calc(var(--hbt) * 1);
}

.mt1 {
  margin-top: calc(var(--vbt) * 1);
}

.mr1 {
  margin-right: calc(var(--hbt) * 1);
}

.mb1 {
  margin-bottom: calc(var(--vbt) * 1);
}

.ml1 {
  margin-left: calc(var(--hbt) * 1);
}

.mn1 {
  margin: calc(0 - calc(var(--vbt) * 1)) calc(0 - calc(var(--hbt) * 1));
}

.mtn1 {
  margin-top: calc(0 - calc(var(--vbt) * 1));
}

.mbn1 {
  margin-bottom: calc(0 - calc(var(--vbt) * 1));
}

.mln1 {
  margin-left: calc(0 - calc(var(--hbt) * 1));
}

.mrn1 {
  margin-right: calc(0 - calc(var(--hbt) * 1));
}

.mxn1 {
  margin-left: calc(0 - calc(var(--hbt) * 1));
  margin-right: calc(0 - calc(var(--hbt) * 1));
}

.myn1 {
  margin-bottom: calc(0 - calc(var(--vbt) * 1));
  margin-top: calc(0 - calc(var(--vbt) * 1));
}

.p1 {
  padding: calc(var(--vbt) * 1) calc(var(--hbt) * 1);
}

.px1 {
  padding-left: calc(var(--hbt) * 1);
  padding-right: calc(var(--hbt) * 1);
}

.py1 {
  padding-bottom: calc(var(--vbt) * 1);
  padding-top: calc(var(--vbt) * 1);
}

.m2 {
  margin: calc(var(--vbt) * 2) calc(var(--hbt) * 2);
}

.mt2 {
  margin-top: calc(var(--vbt) * 2);
}

.mr2 {
  margin-right: calc(var(--hbt) * 2);
}

.mb2 {
  margin-bottom: calc(var(--vbt) * 2);
}

.ml2 {
  margin-left: calc(var(--hbt) * 2);
}

.mn2 {
  margin: calc(0 - calc(var(--vbt) * 2)) calc(0 - calc(var(--hbt) * 2));
}

.mtn2 {
  margin-top: calc(0 - calc(var(--vbt) * 2));
}

.mbn2 {
  margin-bottom: calc(0 - calc(var(--vbt) * 2));
}

.mln2 {
  margin-left: calc(0 - calc(var(--hbt) * 2));
}

.mrn2 {
  margin-right: calc(0 - calc(var(--hbt) * 2));
}

.mxn2 {
  margin-left: calc(0 - calc(var(--hbt) * 2));
  margin-right: calc(0 - calc(var(--hbt) * 2));
}

.myn2 {
  margin-bottom: calc(0 - calc(var(--vbt) * 2));
  margin-top: calc(0 - calc(var(--vbt) * 2));
}

.p2 {
  padding: calc(var(--vbt) * 2) calc(var(--hbt) * 2);
}

.px2 {
  padding-left: calc(var(--hbt) * 2);
  padding-right: calc(var(--hbt) * 2);
}

.py2 {
  padding-bottom: calc(var(--vbt) * 2);
  padding-top: calc(var(--vbt) * 2);
}

.m3 {
  margin: calc(var(--vbt) * 3) calc(var(--hbt) * 3);
}

.mt3 {
  margin-top: calc(var(--vbt) * 3);
}

.mr3 {
  margin-right: calc(var(--hbt) * 3);
}

.mb3 {
  margin-bottom: calc(var(--vbt) * 3);
}

.ml3 {
  margin-left: calc(var(--hbt) * 3);
}

.mn3 {
  margin: calc(0 - calc(var(--vbt) * 3)) calc(0 - calc(var(--hbt) * 3));
}

.mtn3 {
  margin-top: calc(0 - calc(var(--vbt) * 3));
}

.mbn3 {
  margin-bottom: calc(0 - calc(var(--vbt) * 3));
}

.mln3 {
  margin-left: calc(0 - calc(var(--hbt) * 3));
}

.mrn3 {
  margin-right: calc(0 - calc(var(--hbt) * 3));
}

.mxn3 {
  margin-left: calc(0 - calc(var(--hbt) * 3));
  margin-right: calc(0 - calc(var(--hbt) * 3));
}

.myn3 {
  margin-bottom: calc(0 - calc(var(--vbt) * 3));
  margin-top: calc(0 - calc(var(--vbt) * 3));
}

.p3 {
  padding: calc(var(--vbt) * 3) calc(var(--hbt) * 3);
}

.px3 {
  padding-left: calc(var(--hbt) * 3);
  padding-right: calc(var(--hbt) * 3);
}

.py3 {
  padding-bottom: calc(var(--vbt) * 3);
  padding-top: calc(var(--vbt) * 3);
}

.m4 {
  margin: calc(var(--vbt) * 4) calc(var(--hbt) * 4);
}

.mt4 {
  margin-top: calc(var(--vbt) * 4);
}

.mr4 {
  margin-right: calc(var(--hbt) * 4);
}

.mb4 {
  margin-bottom: calc(var(--vbt) * 4);
}

.ml4 {
  margin-left: calc(var(--hbt) * 4);
}

.mn4 {
  margin: calc(0 - calc(var(--vbt) * 4)) calc(0 - calc(var(--hbt) * 4));
}

.mtn4 {
  margin-top: calc(0 - calc(var(--vbt) * 4));
}

.mbn4 {
  margin-bottom: calc(0 - calc(var(--vbt) * 4));
}

.mln4 {
  margin-left: calc(0 - calc(var(--hbt) * 4));
}

.mrn4 {
  margin-right: calc(0 - calc(var(--hbt) * 4));
}

.mxn4 {
  margin-left: calc(0 - calc(var(--hbt) * 4));
  margin-right: calc(0 - calc(var(--hbt) * 4));
}

.myn4 {
  margin-bottom: calc(0 - calc(var(--vbt) * 4));
  margin-top: calc(0 - calc(var(--vbt) * 4));
}

.p4 {
  padding: calc(var(--vbt) * 4) calc(var(--hbt) * 4);
}

.px4 {
  padding-left: calc(var(--hbt) * 4);
  padding-right: calc(var(--hbt) * 4);
}

.py4 {
  padding-bottom: calc(var(--vbt) * 4);
  padding-top: calc(var(--vbt) * 4);
}

.m5 {
  margin: calc(var(--vbt) * 5) calc(var(--hbt) * 5);
}

.mt5 {
  margin-top: calc(var(--vbt) * 5);
}

.mr5 {
  margin-right: calc(var(--hbt) * 5);
}

.mb5 {
  margin-bottom: calc(var(--vbt) * 5);
}

.ml5 {
  margin-left: calc(var(--hbt) * 5);
}

.mn5 {
  margin: calc(0 - calc(var(--vbt) * 5)) calc(0 - calc(var(--hbt) * 5));
}

.mtn5 {
  margin-top: calc(0 - calc(var(--vbt) * 5));
}

.mbn5 {
  margin-bottom: calc(0 - calc(var(--vbt) * 5));
}

.mln5 {
  margin-left: calc(0 - calc(var(--hbt) * 5));
}

.mrn5 {
  margin-right: calc(0 - calc(var(--hbt) * 5));
}

.mxn5 {
  margin-left: calc(0 - calc(var(--hbt) * 5));
  margin-right: calc(0 - calc(var(--hbt) * 5));
}

.myn5 {
  margin-bottom: calc(0 - calc(var(--vbt) * 5));
  margin-top: calc(0 - calc(var(--vbt) * 5));
}

.p5 {
  padding: calc(var(--vbt) * 5) calc(var(--hbt) * 5);
}

.px5 {
  padding-left: calc(var(--hbt) * 5);
  padding-right: calc(var(--hbt) * 5);
}

.py5 {
  padding-bottom: calc(var(--vbt) * 5);
  padding-top: calc(var(--vbt) * 5);
}

.m6 {
  margin: calc(var(--vbt) * 6) calc(var(--hbt) * 6);
}

.mt6 {
  margin-top: calc(var(--vbt) * 6);
}

.mr6 {
  margin-right: calc(var(--hbt) * 6);
}

.mb6 {
  margin-bottom: calc(var(--vbt) * 6);
}

.ml6 {
  margin-left: calc(var(--hbt) * 6);
}

.mn6 {
  margin: calc(0 - calc(var(--vbt) * 6)) calc(0 - calc(var(--hbt) * 6));
}

.mtn6 {
  margin-top: calc(0 - calc(var(--vbt) * 6));
}

.mbn6 {
  margin-bottom: calc(0 - calc(var(--vbt) * 6));
}

.mln6 {
  margin-left: calc(0 - calc(var(--hbt) * 6));
}

.mrn6 {
  margin-right: calc(0 - calc(var(--hbt) * 6));
}

.mxn6 {
  margin-left: calc(0 - calc(var(--hbt) * 6));
  margin-right: calc(0 - calc(var(--hbt) * 6));
}

.myn6 {
  margin-bottom: calc(0 - calc(var(--vbt) * 6));
  margin-top: calc(0 - calc(var(--vbt) * 6));
}

.p6 {
  padding: calc(var(--vbt) * 6) calc(var(--hbt) * 6);
}

.px6 {
  padding-left: calc(var(--hbt) * 6);
  padding-right: calc(var(--hbt) * 6);
}

.py6 {
  padding-bottom: calc(var(--vbt) * 6);
  padding-top: calc(var(--vbt) * 6);
}

@media (${breakpoints.sm}) {
  .m1 {
    margin: calc(var(--sm-vbt) * 1) calc(var(--sm-hbt) * 1);
  }

  .mt1 {
    margin-top: calc(var(--sm-vbt) * 1);
  }

  .mr1 {
    margin-right: calc(var(--sm-hbt) * 1);
  }

  .mb1 {
    margin-bottom: calc(var(--sm-vbt) * 1);
  }

  .ml1 {
    margin-left: calc(var(--sm-hbt) * 1);
  }

  .mn1 {
    margin: calc(0 - calc(var(--sm-vbt) * 1)) calc(0 - calc(var(--sm-hbt) * 1));
  }

  .mtn1 {
    margin-top: calc(0 - calc(var(--sm-vbt) * 1));
  }

  .mbn1 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 1));
  }

  .mln1 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 1));
  }

  .mrn1 {
    margin-right: calc(0 - calc(var(--sm-hbt) * 1));
  }

  .mxn1 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 1));
    margin-right: calc(0 - calc(var(--sm-hbt) * 1));
  }

  .myn1 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 1));
    margin-top: calc(0 - calc(var(--sm-vbt) * 1));
  }

  .p1 {
    padding: calc(var(--sm-vbt) * 1) calc(var(--sm-hbt) * 1);
  }

  .px1 {
    padding-left: calc(var(--sm-hbt) * 1);
    padding-right: calc(var(--sm-hbt) * 1);
  }

  .py1 {
    padding-bottom: calc(var(--sm-vbt) * 1);
    padding-top: calc(var(--sm-vbt) * 1);
  }

  .m2 {
    margin: calc(var(--sm-vbt) * 2) calc(var(--sm-hbt) * 2);
  }

  .mt2 {
    margin-top: calc(var(--sm-vbt) * 2);
  }

  .mr2 {
    margin-right: calc(var(--sm-hbt) * 2);
  }

  .mb2 {
    margin-bottom: calc(var(--sm-vbt) * 2);
  }

  .ml2 {
    margin-left: calc(var(--sm-hbt) * 2);
  }

  .mn2 {
    margin: calc(0 - calc(var(--sm-vbt) * 2)) calc(0 - calc(var(--sm-hbt) * 2));
  }

  .mtn2 {
    margin-top: calc(0 - calc(var(--sm-vbt) * 2));
  }

  .mbn2 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 2));
  }

  .mln2 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 2));
  }

  .mrn2 {
    margin-right: calc(0 - calc(var(--sm-hbt) * 2));
  }

  .mxn2 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 2));
    margin-right: calc(0 - calc(var(--sm-hbt) * 2));
  }

  .myn2 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 2));
    margin-top: calc(0 - calc(var(--sm-vbt) * 2));
  }

  .p2 {
    padding: calc(var(--sm-vbt) * 2) calc(var(--sm-hbt) * 2);
  }

  .px2 {
    padding-left: calc(var(--sm-hbt) * 2);
    padding-right: calc(var(--sm-hbt) * 2);
  }

  .py2 {
    padding-bottom: calc(var(--sm-vbt) * 2);
    padding-top: calc(var(--sm-vbt) * 2);
  }

  .m3 {
    margin: calc(var(--sm-vbt) * 3) calc(var(--sm-hbt) * 3);
  }

  .mt3 {
    margin-top: calc(var(--sm-vbt) * 3);
  }

  .mr3 {
    margin-right: calc(var(--sm-hbt) * 3);
  }

  .mb3 {
    margin-bottom: calc(var(--sm-vbt) * 3);
  }

  .ml3 {
    margin-left: calc(var(--sm-hbt) * 3);
  }

  .mn3 {
    margin: calc(0 - calc(var(--sm-vbt) * 3)) calc(0 - calc(var(--sm-hbt) * 3));
  }

  .mtn3 {
    margin-top: calc(0 - calc(var(--sm-vbt) * 3));
  }

  .mbn3 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 3));
  }

  .mln3 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 3));
  }

  .mrn3 {
    margin-right: calc(0 - calc(var(--sm-hbt) * 3));
  }

  .mxn3 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 3));
    margin-right: calc(0 - calc(var(--sm-hbt) * 3));
  }

  .myn3 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 3));
    margin-top: calc(0 - calc(var(--sm-vbt) * 3));
  }

  .p3 {
    padding: calc(var(--sm-vbt) * 3) calc(var(--sm-hbt) * 3);
  }

  .px3 {
    padding-left: calc(var(--sm-hbt) * 3);
    padding-right: calc(var(--sm-hbt) * 3);
  }

  .py3 {
    padding-bottom: calc(var(--sm-vbt) * 3);
    padding-top: calc(var(--sm-vbt) * 3);
  }

  .m4 {
    margin: calc(var(--sm-vbt) * 4) calc(var(--sm-hbt) * 4);
  }

  .mt4 {
    margin-top: calc(var(--sm-vbt) * 4);
  }

  .mr4 {
    margin-right: calc(var(--sm-hbt) * 4);
  }

  .mb4 {
    margin-bottom: calc(var(--sm-vbt) * 4);
  }

  .ml4 {
    margin-left: calc(var(--sm-hbt) * 4);
  }

  .mn4 {
    margin: calc(0 - calc(var(--sm-vbt) * 4)) calc(0 - calc(var(--sm-hbt) * 4));
  }

  .mtn4 {
    margin-top: calc(0 - calc(var(--sm-vbt) * 4));
  }

  .mbn4 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 4));
  }

  .mln4 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 4));
  }

  .mrn4 {
    margin-right: calc(0 - calc(var(--sm-hbt) * 4));
  }

  .mxn4 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 4));
    margin-right: calc(0 - calc(var(--sm-hbt) * 4));
  }

  .myn4 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 4));
    margin-top: calc(0 - calc(var(--sm-vbt) * 4));
  }

  .p4 {
    padding: calc(var(--sm-vbt) * 4) calc(var(--sm-hbt) * 4);
  }

  .px4 {
    padding-left: calc(var(--sm-hbt) * 4);
    padding-right: calc(var(--sm-hbt) * 4);
  }

  .py4 {
    padding-bottom: calc(var(--sm-vbt) * 4);
    padding-top: calc(var(--sm-vbt) * 4);
  }

  .m5 {
    margin: calc(var(--sm-vbt) * 5) calc(var(--sm-hbt) * 5);
  }

  .mt5 {
    margin-top: calc(var(--sm-vbt) * 5);
  }

  .mr5 {
    margin-right: calc(var(--sm-hbt) * 5);
  }

  .mb5 {
    margin-bottom: calc(var(--sm-vbt) * 5);
  }

  .ml5 {
    margin-left: calc(var(--sm-hbt) * 5);
  }

  .mn5 {
    margin: calc(0 - calc(var(--sm-vbt) * 5)) calc(0 - calc(var(--sm-hbt) * 5));
  }

  .mtn5 {
    margin-top: calc(0 - calc(var(--sm-vbt) * 5));
  }

  .mbn5 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 5));
  }

  .mln5 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 5));
  }

  .mrn5 {
    margin-right: calc(0 - calc(var(--sm-hbt) * 5));
  }

  .mxn5 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 5));
    margin-right: calc(0 - calc(var(--sm-hbt) * 5));
  }

  .myn5 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 5));
    margin-top: calc(0 - calc(var(--sm-vbt) * 5));
  }

  .p5 {
    padding: calc(var(--sm-vbt) * 5) calc(var(--sm-hbt) * 5);
  }

  .px5 {
    padding-left: calc(var(--sm-hbt) * 5);
    padding-right: calc(var(--sm-hbt) * 5);
  }

  .py5 {
    padding-bottom: calc(var(--sm-vbt) * 5);
    padding-top: calc(var(--sm-vbt) * 5);
  }

  .m6 {
    margin: calc(var(--sm-vbt) * 6) calc(var(--sm-hbt) * 6);
  }

  .mt6 {
    margin-top: calc(var(--sm-vbt) * 6);
  }

  .mr6 {
    margin-right: calc(var(--sm-hbt) * 6);
  }

  .mb6 {
    margin-bottom: calc(var(--sm-vbt) * 6);
  }

  .ml6 {
    margin-left: calc(var(--sm-hbt) * 6);
  }

  .mn6 {
    margin: calc(0 - calc(var(--sm-vbt) * 6)) calc(0 - calc(var(--sm-hbt) * 6));
  }

  .mtn6 {
    margin-top: calc(0 - calc(var(--sm-vbt) * 6));
  }

  .mbn6 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 6));
  }

  .mln6 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 6));
  }

  .mrn6 {
    margin-right: calc(0 - calc(var(--sm-hbt) * 6));
  }

  .mxn6 {
    margin-left: calc(0 - calc(var(--sm-hbt) * 6));
    margin-right: calc(0 - calc(var(--sm-hbt) * 6));
  }

  .myn6 {
    margin-bottom: calc(0 - calc(var(--sm-vbt) * 6));
    margin-top: calc(0 - calc(var(--sm-vbt) * 6));
  }

  .p6 {
    padding: calc(var(--sm-vbt) * 6) calc(var(--sm-hbt) * 6);
  }

  .px6 {
    padding-left: calc(var(--sm-hbt) * 6);
    padding-right: calc(var(--sm-hbt) * 6);
  }

  .py6 {
    padding-bottom: calc(var(--sm-vbt) * 6);
    padding-top: calc(var(--sm-vbt) * 6);
  }
}

@media (${breakpoints.md}) {
  .m1 {
    margin: calc(var(--md-vbt) * 1) calc(var(--md-hbt) * 1);
  }

  .mt1 {
    margin-top: calc(var(--md-vbt) * 1);
  }

  .mr1 {
    margin-right: calc(var(--md-hbt) * 1);
  }

  .mb1 {
    margin-bottom: calc(var(--md-vbt) * 1);
  }

  .ml1 {
    margin-left: calc(var(--md-hbt) * 1);
  }

  .mn1 {
    margin: calc(0 - calc(var(--md-vbt) * 1)) calc(0 - calc(var(--md-hbt) * 1));
  }

  .mtn1 {
    margin-top: calc(0 - calc(var(--md-vbt) * 1));
  }

  .mbn1 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 1));
  }

  .mln1 {
    margin-left: calc(0 - calc(var(--md-hbt) * 1));
  }

  .mrn1 {
    margin-right: calc(0 - calc(var(--md-hbt) * 1));
  }

  .mxn1 {
    margin-left: calc(0 - calc(var(--md-hbt) * 1));
    margin-right: calc(0 - calc(var(--md-hbt) * 1));
  }

  .myn1 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 1));
    margin-top: calc(0 - calc(var(--md-vbt) * 1));
  }

  .p1 {
    padding: calc(var(--md-vbt) * 1) calc(var(--md-hbt) * 1);
  }

  .px1 {
    padding-left: calc(var(--md-hbt) * 1);
    padding-right: calc(var(--md-hbt) * 1);
  }

  .py1 {
    padding-bottom: calc(var(--md-vbt) * 1);
    padding-top: calc(var(--md-vbt) * 1);
  }

  .m2 {
    margin: calc(var(--md-vbt) * 2) calc(var(--md-hbt) * 2);
  }

  .mt2 {
    margin-top: calc(var(--md-vbt) * 2);
  }

  .mr2 {
    margin-right: calc(var(--md-hbt) * 2);
  }

  .mb2 {
    margin-bottom: calc(var(--md-vbt) * 2);
  }

  .ml2 {
    margin-left: calc(var(--md-hbt) * 2);
  }

  .mn2 {
    margin: calc(0 - calc(var(--md-vbt) * 2)) calc(0 - calc(var(--md-hbt) * 2));
  }

  .mtn2 {
    margin-top: calc(0 - calc(var(--md-vbt) * 2));
  }

  .mbn2 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 2));
  }

  .mln2 {
    margin-left: calc(0 - calc(var(--md-hbt) * 2));
  }

  .mrn2 {
    margin-right: calc(0 - calc(var(--md-hbt) * 2));
  }

  .mxn2 {
    margin-left: calc(0 - calc(var(--md-hbt) * 2));
    margin-right: calc(0 - calc(var(--md-hbt) * 2));
  }

  .myn2 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 2));
    margin-top: calc(0 - calc(var(--md-vbt) * 2));
  }

  .p2 {
    padding: calc(var(--md-vbt) * 2) calc(var(--md-hbt) * 2);
  }

  .px2 {
    padding-left: calc(var(--md-hbt) * 2);
    padding-right: calc(var(--md-hbt) * 2);
  }

  .py2 {
    padding-bottom: calc(var(--md-vbt) * 2);
    padding-top: calc(var(--md-vbt) * 2);
  }

  .m3 {
    margin: calc(var(--md-vbt) * 3) calc(var(--md-hbt) * 3);
  }

  .mt3 {
    margin-top: calc(var(--md-vbt) * 3);
  }

  .mr3 {
    margin-right: calc(var(--md-hbt) * 3);
  }

  .mb3 {
    margin-bottom: calc(var(--md-vbt) * 3);
  }

  .ml3 {
    margin-left: calc(var(--md-hbt) * 3);
  }

  .mn3 {
    margin: calc(0 - calc(var(--md-vbt) * 3)) calc(0 - calc(var(--md-hbt) * 3));
  }

  .mtn3 {
    margin-top: calc(0 - calc(var(--md-vbt) * 3));
  }

  .mbn3 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 3));
  }

  .mln3 {
    margin-left: calc(0 - calc(var(--md-hbt) * 3));
  }

  .mrn3 {
    margin-right: calc(0 - calc(var(--md-hbt) * 3));
  }

  .mxn3 {
    margin-left: calc(0 - calc(var(--md-hbt) * 3));
    margin-right: calc(0 - calc(var(--md-hbt) * 3));
  }

  .myn3 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 3));
    margin-top: calc(0 - calc(var(--md-vbt) * 3));
  }

  .p3 {
    padding: calc(var(--md-vbt) * 3) calc(var(--md-hbt) * 3);
  }

  .px3 {
    padding-left: calc(var(--md-hbt) * 3);
    padding-right: calc(var(--md-hbt) * 3);
  }

  .py3 {
    padding-bottom: calc(var(--md-vbt) * 3);
    padding-top: calc(var(--md-vbt) * 3);
  }

  .m4 {
    margin: calc(var(--md-vbt) * 4) calc(var(--md-hbt) * 4);
  }

  .mt4 {
    margin-top: calc(var(--md-vbt) * 4);
  }

  .mr4 {
    margin-right: calc(var(--md-hbt) * 4);
  }

  .mb4 {
    margin-bottom: calc(var(--md-vbt) * 4);
  }

  .ml4 {
    margin-left: calc(var(--md-hbt) * 4);
  }

  .mn4 {
    margin: calc(0 - calc(var(--md-vbt) * 4)) calc(0 - calc(var(--md-hbt) * 4));
  }

  .mtn4 {
    margin-top: calc(0 - calc(var(--md-vbt) * 4));
  }

  .mbn4 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 4));
  }

  .mln4 {
    margin-left: calc(0 - calc(var(--md-hbt) * 4));
  }

  .mrn4 {
    margin-right: calc(0 - calc(var(--md-hbt) * 4));
  }

  .mxn4 {
    margin-left: calc(0 - calc(var(--md-hbt) * 4));
    margin-right: calc(0 - calc(var(--md-hbt) * 4));
  }

  .myn4 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 4));
    margin-top: calc(0 - calc(var(--md-vbt) * 4));
  }

  .p4 {
    padding: calc(var(--md-vbt) * 4) calc(var(--md-hbt) * 4);
  }

  .px4 {
    padding-left: calc(var(--md-hbt) * 4);
    padding-right: calc(var(--md-hbt) * 4);
  }

  .py4 {
    padding-bottom: calc(var(--md-vbt) * 4);
    padding-top: calc(var(--md-vbt) * 4);
  }

  .m5 {
    margin: calc(var(--md-vbt) * 5) calc(var(--md-hbt) * 5);
  }

  .mt5 {
    margin-top: calc(var(--md-vbt) * 5);
  }

  .mr5 {
    margin-right: calc(var(--md-hbt) * 5);
  }

  .mb5 {
    margin-bottom: calc(var(--md-vbt) * 5);
  }

  .ml5 {
    margin-left: calc(var(--md-hbt) * 5);
  }

  .mn5 {
    margin: calc(0 - calc(var(--md-vbt) * 5)) calc(0 - calc(var(--md-hbt) * 5));
  }

  .mtn5 {
    margin-top: calc(0 - calc(var(--md-vbt) * 5));
  }

  .mbn5 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 5));
  }

  .mln5 {
    margin-left: calc(0 - calc(var(--md-hbt) * 5));
  }

  .mrn5 {
    margin-right: calc(0 - calc(var(--md-hbt) * 5));
  }

  .mxn5 {
    margin-left: calc(0 - calc(var(--md-hbt) * 5));
    margin-right: calc(0 - calc(var(--md-hbt) * 5));
  }

  .myn5 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 5));
    margin-top: calc(0 - calc(var(--md-vbt) * 5));
  }

  .p5 {
    padding: calc(var(--md-vbt) * 5) calc(var(--md-hbt) * 5);
  }

  .px5 {
    padding-left: calc(var(--md-hbt) * 5);
    padding-right: calc(var(--md-hbt) * 5);
  }

  .py5 {
    padding-bottom: calc(var(--md-vbt) * 5);
    padding-top: calc(var(--md-vbt) * 5);
  }

  .m6 {
    margin: calc(var(--md-vbt) * 6) calc(var(--md-hbt) * 6);
  }

  .mt6 {
    margin-top: calc(var(--md-vbt) * 6);
  }

  .mr6 {
    margin-right: calc(var(--md-hbt) * 6);
  }

  .mb6 {
    margin-bottom: calc(var(--md-vbt) * 6);
  }

  .ml6 {
    margin-left: calc(var(--md-hbt) * 6);
  }

  .mn6 {
    margin: calc(0 - calc(var(--md-vbt) * 6)) calc(0 - calc(var(--md-hbt) * 6));
  }

  .mtn6 {
    margin-top: calc(0 - calc(var(--md-vbt) * 6));
  }

  .mbn6 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 6));
  }

  .mln6 {
    margin-left: calc(0 - calc(var(--md-hbt) * 6));
  }

  .mrn6 {
    margin-right: calc(0 - calc(var(--md-hbt) * 6));
  }

  .mxn6 {
    margin-left: calc(0 - calc(var(--md-hbt) * 6));
    margin-right: calc(0 - calc(var(--md-hbt) * 6));
  }

  .myn6 {
    margin-bottom: calc(0 - calc(var(--md-vbt) * 6));
    margin-top: calc(0 - calc(var(--md-vbt) * 6));
  }

  .p6 {
    padding: calc(var(--md-vbt) * 6) calc(var(--md-hbt) * 6);
  }

  .px6 {
    padding-left: calc(var(--md-hbt) * 6);
    padding-right: calc(var(--md-hbt) * 6);
  }

  .py6 {
    padding-bottom: calc(var(--md-vbt) * 6);
    padding-top: calc(var(--md-vbt) * 6);
  }
}

@media (${breakpoints.lg}) {
  .m1 {
    margin: calc(var(--lg-vbt) * 1) calc(var(--lg-hbt) * 1);
  }

  .mt1 {
    margin-top: calc(var(--lg-vbt) * 1);
  }

  .mr1 {
    margin-right: calc(var(--lg-hbt) * 1);
  }

  .mb1 {
    margin-bottom: calc(var(--lg-vbt) * 1);
  }

  .ml1 {
    margin-left: calc(var(--lg-hbt) * 1);
  }

  .mn1 {
    margin: calc(0 - calc(var(--lg-vbt) * 1)) calc(0 - calc(var(--lg-hbt) * 1));
  }

  .mtn1 {
    margin-top: calc(0 - calc(var(--lg-vbt) * 1));
  }

  .mbn1 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 1));
  }

  .mln1 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 1));
  }

  .mrn1 {
    margin-right: calc(0 - calc(var(--lg-hbt) * 1));
  }

  .mxn1 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 1));
    margin-right: calc(0 - calc(var(--lg-hbt) * 1));
  }

  .myn1 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 1));
    margin-top: calc(0 - calc(var(--lg-vbt) * 1));
  }

  .p1 {
    padding: calc(var(--lg-vbt) * 1) calc(var(--lg-hbt) * 1);
  }

  .px1 {
    padding-left: calc(var(--lg-hbt) * 1);
    padding-right: calc(var(--lg-hbt) * 1);
  }

  .py1 {
    padding-bottom: calc(var(--lg-vbt) * 1);
    padding-top: calc(var(--lg-vbt) * 1);
  }

  .m2 {
    margin: calc(var(--lg-vbt) * 2) calc(var(--lg-hbt) * 2);
  }

  .mt2 {
    margin-top: calc(var(--lg-vbt) * 2);
  }

  .mr2 {
    margin-right: calc(var(--lg-hbt) * 2);
  }

  .mb2 {
    margin-bottom: calc(var(--lg-vbt) * 2);
  }

  .ml2 {
    margin-left: calc(var(--lg-hbt) * 2);
  }

  .mn2 {
    margin: calc(0 - calc(var(--lg-vbt) * 2)) calc(0 - calc(var(--lg-hbt) * 2));
  }

  .mtn2 {
    margin-top: calc(0 - calc(var(--lg-vbt) * 2));
  }

  .mbn2 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 2));
  }

  .mln2 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 2));
  }

  .mrn2 {
    margin-right: calc(0 - calc(var(--lg-hbt) * 2));
  }

  .mxn2 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 2));
    margin-right: calc(0 - calc(var(--lg-hbt) * 2));
  }

  .myn2 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 2));
    margin-top: calc(0 - calc(var(--lg-vbt) * 2));
  }

  .p2 {
    padding: calc(var(--lg-vbt) * 2) calc(var(--lg-hbt) * 2);
  }

  .px2 {
    padding-left: calc(var(--lg-hbt) * 2);
    padding-right: calc(var(--lg-hbt) * 2);
  }

  .py2 {
    padding-bottom: calc(var(--lg-vbt) * 2);
    padding-top: calc(var(--lg-vbt) * 2);
  }

  .m3 {
    margin: calc(var(--lg-vbt) * 3) calc(var(--lg-hbt) * 3);
  }

  .mt3 {
    margin-top: calc(var(--lg-vbt) * 3);
  }

  .mr3 {
    margin-right: calc(var(--lg-hbt) * 3);
  }

  .mb3 {
    margin-bottom: calc(var(--lg-vbt) * 3);
  }

  .ml3 {
    margin-left: calc(var(--lg-hbt) * 3);
  }

  .mn3 {
    margin: calc(0 - calc(var(--lg-vbt) * 3)) calc(0 - calc(var(--lg-hbt) * 3));
  }

  .mtn3 {
    margin-top: calc(0 - calc(var(--lg-vbt) * 3));
  }

  .mbn3 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 3));
  }

  .mln3 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 3));
  }

  .mrn3 {
    margin-right: calc(0 - calc(var(--lg-hbt) * 3));
  }

  .mxn3 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 3));
    margin-right: calc(0 - calc(var(--lg-hbt) * 3));
  }

  .myn3 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 3));
    margin-top: calc(0 - calc(var(--lg-vbt) * 3));
  }

  .p3 {
    padding: calc(var(--lg-vbt) * 3) calc(var(--lg-hbt) * 3);
  }

  .px3 {
    padding-left: calc(var(--lg-hbt) * 3);
    padding-right: calc(var(--lg-hbt) * 3);
  }

  .py3 {
    padding-bottom: calc(var(--lg-vbt) * 3);
    padding-top: calc(var(--lg-vbt) * 3);
  }

  .m4 {
    margin: calc(var(--lg-vbt) * 4) calc(var(--lg-hbt) * 4);
  }

  .mt4 {
    margin-top: calc(var(--lg-vbt) * 4);
  }

  .mr4 {
    margin-right: calc(var(--lg-hbt) * 4);
  }

  .mb4 {
    margin-bottom: calc(var(--lg-vbt) * 4);
  }

  .ml4 {
    margin-left: calc(var(--lg-hbt) * 4);
  }

  .mn4 {
    margin: calc(0 - calc(var(--lg-vbt) * 4)) calc(0 - calc(var(--lg-hbt) * 4));
  }

  .mtn4 {
    margin-top: calc(0 - calc(var(--lg-vbt) * 4));
  }

  .mbn4 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 4));
  }

  .mln4 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 4));
  }

  .mrn4 {
    margin-right: calc(0 - calc(var(--lg-hbt) * 4));
  }

  .mxn4 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 4));
    margin-right: calc(0 - calc(var(--lg-hbt) * 4));
  }

  .myn4 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 4));
    margin-top: calc(0 - calc(var(--lg-vbt) * 4));
  }

  .p4 {
    padding: calc(var(--lg-vbt) * 4) calc(var(--lg-hbt) * 4);
  }

  .px4 {
    padding-left: calc(var(--lg-hbt) * 4);
    padding-right: calc(var(--lg-hbt) * 4);
  }

  .py4 {
    padding-bottom: calc(var(--lg-vbt) * 4);
    padding-top: calc(var(--lg-vbt) * 4);
  }

  .m5 {
    margin: calc(var(--lg-vbt) * 5) calc(var(--lg-hbt) * 5);
  }

  .mt5 {
    margin-top: calc(var(--lg-vbt) * 5);
  }

  .mr5 {
    margin-right: calc(var(--lg-hbt) * 5);
  }

  .mb5 {
    margin-bottom: calc(var(--lg-vbt) * 5);
  }

  .ml5 {
    margin-left: calc(var(--lg-hbt) * 5);
  }

  .mn5 {
    margin: calc(0 - calc(var(--lg-vbt) * 5)) calc(0 - calc(var(--lg-hbt) * 5));
  }

  .mtn5 {
    margin-top: calc(0 - calc(var(--lg-vbt) * 5));
  }

  .mbn5 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 5));
  }

  .mln5 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 5));
  }

  .mrn5 {
    margin-right: calc(0 - calc(var(--lg-hbt) * 5));
  }

  .mxn5 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 5));
    margin-right: calc(0 - calc(var(--lg-hbt) * 5));
  }

  .myn5 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 5));
    margin-top: calc(0 - calc(var(--lg-vbt) * 5));
  }

  .p5 {
    padding: calc(var(--lg-vbt) * 5) calc(var(--lg-hbt) * 5);
  }

  .px5 {
    padding-left: calc(var(--lg-hbt) * 5);
    padding-right: calc(var(--lg-hbt) * 5);
  }

  .py5 {
    padding-bottom: calc(var(--lg-vbt) * 5);
    padding-top: calc(var(--lg-vbt) * 5);
  }

  .m6 {
    margin: calc(var(--lg-vbt) * 6) calc(var(--lg-hbt) * 6);
  }

  .mt6 {
    margin-top: calc(var(--lg-vbt) * 6);
  }

  .mr6 {
    margin-right: calc(var(--lg-hbt) * 6);
  }

  .mb6 {
    margin-bottom: calc(var(--lg-vbt) * 6);
  }

  .ml6 {
    margin-left: calc(var(--lg-hbt) * 6);
  }

  .mn6 {
    margin: calc(0 - calc(var(--lg-vbt) * 6)) calc(0 - calc(var(--lg-hbt) * 6));
  }

  .mtn6 {
    margin-top: calc(0 - calc(var(--lg-vbt) * 6));
  }

  .mbn6 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 6));
  }

  .mln6 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 6));
  }

  .mrn6 {
    margin-right: calc(0 - calc(var(--lg-hbt) * 6));
  }

  .mxn6 {
    margin-left: calc(0 - calc(var(--lg-hbt) * 6));
    margin-right: calc(0 - calc(var(--lg-hbt) * 6));
  }

  .myn6 {
    margin-bottom: calc(0 - calc(var(--lg-vbt) * 6));
    margin-top: calc(0 - calc(var(--lg-vbt) * 6));
  }

  .p6 {
    padding: calc(var(--lg-vbt) * 6) calc(var(--lg-hbt) * 6);
  }

  .px6 {
    padding-left: calc(var(--lg-hbt) * 6);
    padding-right: calc(var(--lg-hbt) * 6);
  }

  .py6 {
    padding-bottom: calc(var(--lg-vbt) * 6);
    padding-top: calc(var(--lg-vbt) * 6);
  }
}

html:not([dir="rtl"]) .marginStart1 {
  margin-left: calc(var(--bt) * 1);
}

html:not([dir="rtl"]) .marginEnd1 {
  margin-right: calc(var(--bt) * 1);
}

html[dir="rtl"] .marginStart1 {
  margin-right: calc(var(--bt) * 1);
}

html[dir="rtl"] .marginEnd1 {
  margin-left: calc(var(--bt) * 1);
}

html:not([dir="rtl"]) .marginStartN1 {
  margin-left: calc(var(--bt) * -1);
}

html:not([dir="rtl"]) .marginEndN1 {
  margin-right: calc(var(--bt) * -1);
}

html[dir="rtl"] .marginStartN1 {
  margin-right: calc(var(--bt) * -1);
}

html[dir="rtl"] .marginEndN1 {
  margin-left: calc(var(--bt) * -1);
}

.marginTop1 {
  margin-top: calc(var(--bt) * 1);
}

.marginRight1 {
  margin-right: calc(var(--bt) * 1);
}

.marginBottom1 {
  margin-bottom: calc(var(--bt) * 1);
}

.marginLeft1 {
  margin-left: calc(var(--bt) * 1);
}

.marginTopN1 {
  margin-top: calc(var(--bt) * -1);
}

.marginRightN1 {
  margin-right: calc(var(--bt) * -1);
}

.marginBottomN1 {
  margin-bottom: calc(var(--bt) * -1);
}

.marginLeftN1 {
  margin-left: calc(var(--bt) * -1);
}

.paddingY1 {
  padding-bottom: calc(var(--bt) * 1);
  padding-top: calc(var(--bt) * 1);
}

.paddingX1 {
  padding-left: calc(var(--bt) * 1);
  padding-right: calc(var(--bt) * 1);
}

html:not([dir="rtl"]) .marginStart2 {
  margin-left: calc(var(--bt) * 2);
}

html:not([dir="rtl"]) .marginEnd2 {
  margin-right: calc(var(--bt) * 2);
}

html[dir="rtl"] .marginStart2 {
  margin-right: calc(var(--bt) * 2);
}

html[dir="rtl"] .marginEnd2 {
  margin-left: calc(var(--bt) * 2);
}

html:not([dir="rtl"]) .marginStartN2 {
  margin-left: calc(var(--bt) * -2);
}

html:not([dir="rtl"]) .marginEndN2 {
  margin-right: calc(var(--bt) * -2);
}

html[dir="rtl"] .marginStartN2 {
  margin-right: calc(var(--bt) * -2);
}

html[dir="rtl"] .marginEndN2 {
  margin-left: calc(var(--bt) * -2);
}

.marginTop2 {
  margin-top: calc(var(--bt) * 2);
}

.marginRight2 {
  margin-right: calc(var(--bt) * 2);
}

.marginBottom2 {
  margin-bottom: calc(var(--bt) * 2);
}

.marginLeft2 {
  margin-left: calc(var(--bt) * 2);
}

.marginTopN2 {
  margin-top: calc(var(--bt) * -2);
}

.marginRightN2 {
  margin-right: calc(var(--bt) * -2);
}

.marginBottomN2 {
  margin-bottom: calc(var(--bt) * -2);
}

.marginLeftN2 {
  margin-left: calc(var(--bt) * -2);
}

.paddingY2 {
  padding-bottom: calc(var(--bt) * 2);
  padding-top: calc(var(--bt) * 2);
}

.paddingX2 {
  padding-left: calc(var(--bt) * 2);
  padding-right: calc(var(--bt) * 2);
}

html:not([dir="rtl"]) .marginStart3 {
  margin-left: calc(var(--bt) * 3);
}

html:not([dir="rtl"]) .marginEnd3 {
  margin-right: calc(var(--bt) * 3);
}

html[dir="rtl"] .marginStart3 {
  margin-right: calc(var(--bt) * 3);
}

html[dir="rtl"] .marginEnd3 {
  margin-left: calc(var(--bt) * 3);
}

html:not([dir="rtl"]) .marginStartN3 {
  margin-left: calc(var(--bt) * -3);
}

html:not([dir="rtl"]) .marginEndN3 {
  margin-right: calc(var(--bt) * -3);
}

html[dir="rtl"] .marginStartN3 {
  margin-right: calc(var(--bt) * -3);
}

html[dir="rtl"] .marginEndN3 {
  margin-left: calc(var(--bt) * -3);
}

.marginTop3 {
  margin-top: calc(var(--bt) * 3);
}

.marginRight3 {
  margin-right: calc(var(--bt) * 3);
}

.marginBottom3 {
  margin-bottom: calc(var(--bt) * 3);
}

.marginLeft3 {
  margin-left: calc(var(--bt) * 3);
}

.marginTopN3 {
  margin-top: calc(var(--bt) * -3);
}

.marginRightN3 {
  margin-right: calc(var(--bt) * -3);
}

.marginBottomN3 {
  margin-bottom: calc(var(--bt) * -3);
}

.marginLeftN3 {
  margin-left: calc(var(--bt) * -3);
}

.paddingY3 {
  padding-bottom: calc(var(--bt) * 3);
  padding-top: calc(var(--bt) * 3);
}

.paddingX3 {
  padding-left: calc(var(--bt) * 3);
  padding-right: calc(var(--bt) * 3);
}

html:not([dir="rtl"]) .marginStart4 {
  margin-left: calc(var(--bt) * 4);
}

html:not([dir="rtl"]) .marginEnd4 {
  margin-right: calc(var(--bt) * 4);
}

html[dir="rtl"] .marginStart4 {
  margin-right: calc(var(--bt) * 4);
}

html[dir="rtl"] .marginEnd4 {
  margin-left: calc(var(--bt) * 4);
}

html:not([dir="rtl"]) .marginStartN4 {
  margin-left: calc(var(--bt) * -4);
}

html:not([dir="rtl"]) .marginEndN4 {
  margin-right: calc(var(--bt) * -4);
}

html[dir="rtl"] .marginStartN4 {
  margin-right: calc(var(--bt) * -4);
}

html[dir="rtl"] .marginEndN4 {
  margin-left: calc(var(--bt) * -4);
}

.marginTop4 {
  margin-top: calc(var(--bt) * 4);
}

.marginRight4 {
  margin-right: calc(var(--bt) * 4);
}

.marginBottom4 {
  margin-bottom: calc(var(--bt) * 4);
}

.marginLeft4 {
  margin-left: calc(var(--bt) * 4);
}

.marginTopN4 {
  margin-top: calc(var(--bt) * -4);
}

.marginRightN4 {
  margin-right: calc(var(--bt) * -4);
}

.marginBottomN4 {
  margin-bottom: calc(var(--bt) * -4);
}

.marginLeftN4 {
  margin-left: calc(var(--bt) * -4);
}

.paddingY4 {
  padding-bottom: calc(var(--bt) * 4);
  padding-top: calc(var(--bt) * 4);
}

.paddingX4 {
  padding-left: calc(var(--bt) * 4);
  padding-right: calc(var(--bt) * 4);
}

html:not([dir="rtl"]) .marginStart5 {
  margin-left: calc(var(--bt) * 5);
}

html:not([dir="rtl"]) .marginEnd5 {
  margin-right: calc(var(--bt) * 5);
}

html[dir="rtl"] .marginStart5 {
  margin-right: calc(var(--bt) * 5);
}

html[dir="rtl"] .marginEnd5 {
  margin-left: calc(var(--bt) * 5);
}

html:not([dir="rtl"]) .marginStartN5 {
  margin-left: calc(var(--bt) * -5);
}

html:not([dir="rtl"]) .marginEndN5 {
  margin-right: calc(var(--bt) * -5);
}

html[dir="rtl"] .marginStartN5 {
  margin-right: calc(var(--bt) * -5);
}

html[dir="rtl"] .marginEndN5 {
  margin-left: calc(var(--bt) * -5);
}

.marginTop5 {
  margin-top: calc(var(--bt) * 5);
}

.marginRight5 {
  margin-right: calc(var(--bt) * 5);
}

.marginBottom5 {
  margin-bottom: calc(var(--bt) * 5);
}

.marginLeft5 {
  margin-left: calc(var(--bt) * 5);
}

.marginTopN5 {
  margin-top: calc(var(--bt) * -5);
}

.marginRightN5 {
  margin-right: calc(var(--bt) * -5);
}

.marginBottomN5 {
  margin-bottom: calc(var(--bt) * -5);
}

.marginLeftN5 {
  margin-left: calc(var(--bt) * -5);
}

.paddingY5 {
  padding-bottom: calc(var(--bt) * 5);
  padding-top: calc(var(--bt) * 5);
}

.paddingX5 {
  padding-left: calc(var(--bt) * 5);
  padding-right: calc(var(--bt) * 5);
}

html:not([dir="rtl"]) .marginStart6 {
  margin-left: calc(var(--bt) * 6);
}

html:not([dir="rtl"]) .marginEnd6 {
  margin-right: calc(var(--bt) * 6);
}

html[dir="rtl"] .marginStart6 {
  margin-right: calc(var(--bt) * 6);
}

html[dir="rtl"] .marginEnd6 {
  margin-left: calc(var(--bt) * 6);
}

html:not([dir="rtl"]) .marginStartN6 {
  margin-left: calc(var(--bt) * -6);
}

html:not([dir="rtl"]) .marginEndN6 {
  margin-right: calc(var(--bt) * -6);
}

html[dir="rtl"] .marginStartN6 {
  margin-right: calc(var(--bt) * -6);
}

html[dir="rtl"] .marginEndN6 {
  margin-left: calc(var(--bt) * -6);
}

.marginTop6 {
  margin-top: calc(var(--bt) * 6);
}

.marginRight6 {
  margin-right: calc(var(--bt) * 6);
}

.marginBottom6 {
  margin-bottom: calc(var(--bt) * 6);
}

.marginLeft6 {
  margin-left: calc(var(--bt) * 6);
}

.marginTopN6 {
  margin-top: calc(var(--bt) * -6);
}

.marginRightN6 {
  margin-right: calc(var(--bt) * -6);
}

.marginBottomN6 {
  margin-bottom: calc(var(--bt) * -6);
}

.marginLeftN6 {
  margin-left: calc(var(--bt) * -6);
}

.paddingY6 {
  padding-bottom: calc(var(--bt) * 6);
  padding-top: calc(var(--bt) * 6);
}

.paddingX6 {
  padding-left: calc(var(--bt) * 6);
  padding-right: calc(var(--bt) * 6);
}

html:not([dir="rtl"]) .marginStart7 {
  margin-left: calc(var(--bt) * 7);
}

html:not([dir="rtl"]) .marginEnd7 {
  margin-right: calc(var(--bt) * 7);
}

html[dir="rtl"] .marginStart7 {
  margin-right: calc(var(--bt) * 7);
}

html[dir="rtl"] .marginEnd7 {
  margin-left: calc(var(--bt) * 7);
}

html:not([dir="rtl"]) .marginStartN7 {
  margin-left: calc(var(--bt) * -7);
}

html:not([dir="rtl"]) .marginEndN7 {
  margin-right: calc(var(--bt) * -7);
}

html[dir="rtl"] .marginStartN7 {
  margin-right: calc(var(--bt) * -7);
}

html[dir="rtl"] .marginEndN7 {
  margin-left: calc(var(--bt) * -7);
}

.marginTop7 {
  margin-top: calc(var(--bt) * 7);
}

.marginRight7 {
  margin-right: calc(var(--bt) * 7);
}

.marginBottom7 {
  margin-bottom: calc(var(--bt) * 7);
}

.marginLeft7 {
  margin-left: calc(var(--bt) * 7);
}

.marginTopN7 {
  margin-top: calc(var(--bt) * -7);
}

.marginRightN7 {
  margin-right: calc(var(--bt) * -7);
}

.marginBottomN7 {
  margin-bottom: calc(var(--bt) * -7);
}

.marginLeftN7 {
  margin-left: calc(var(--bt) * -7);
}

.paddingY7 {
  padding-bottom: calc(var(--bt) * 7);
  padding-top: calc(var(--bt) * 7);
}

.paddingX7 {
  padding-left: calc(var(--bt) * 7);
  padding-right: calc(var(--bt) * 7);
}

html:not([dir="rtl"]) .marginStart8 {
  margin-left: calc(var(--bt) * 8);
}

html:not([dir="rtl"]) .marginEnd8 {
  margin-right: calc(var(--bt) * 8);
}

html[dir="rtl"] .marginStart8 {
  margin-right: calc(var(--bt) * 8);
}

html[dir="rtl"] .marginEnd8 {
  margin-left: calc(var(--bt) * 8);
}

html:not([dir="rtl"]) .marginStartN8 {
  margin-left: calc(var(--bt) * -8);
}

html:not([dir="rtl"]) .marginEndN8 {
  margin-right: calc(var(--bt) * -8);
}

html[dir="rtl"] .marginStartN8 {
  margin-right: calc(var(--bt) * -8);
}

html[dir="rtl"] .marginEndN8 {
  margin-left: calc(var(--bt) * -8);
}

.marginTop8 {
  margin-top: calc(var(--bt) * 8);
}

.marginRight8 {
  margin-right: calc(var(--bt) * 8);
}

.marginBottom8 {
  margin-bottom: calc(var(--bt) * 8);
}

.marginLeft8 {
  margin-left: calc(var(--bt) * 8);
}

.marginTopN8 {
  margin-top: calc(var(--bt) * -8);
}

.marginRightN8 {
  margin-right: calc(var(--bt) * -8);
}

.marginBottomN8 {
  margin-bottom: calc(var(--bt) * -8);
}

.marginLeftN8 {
  margin-left: calc(var(--bt) * -8);
}

.paddingY8 {
  padding-bottom: calc(var(--bt) * 8);
  padding-top: calc(var(--bt) * 8);
}

.paddingX8 {
  padding-left: calc(var(--bt) * 8);
  padding-right: calc(var(--bt) * 8);
}

html:not([dir="rtl"]) .marginStart9 {
  margin-left: calc(var(--bt) * 9);
}

html:not([dir="rtl"]) .marginEnd9 {
  margin-right: calc(var(--bt) * 9);
}

html[dir="rtl"] .marginStart9 {
  margin-right: calc(var(--bt) * 9);
}

html[dir="rtl"] .marginEnd9 {
  margin-left: calc(var(--bt) * 9);
}

html:not([dir="rtl"]) .marginStartN9 {
  margin-left: calc(var(--bt) * -9);
}

html:not([dir="rtl"]) .marginEndN9 {
  margin-right: calc(var(--bt) * -9);
}

html[dir="rtl"] .marginStartN9 {
  margin-right: calc(var(--bt) * -9);
}

html[dir="rtl"] .marginEndN9 {
  margin-left: calc(var(--bt) * -9);
}

.marginTop9 {
  margin-top: calc(var(--bt) * 9);
}

.marginRight9 {
  margin-right: calc(var(--bt) * 9);
}

.marginBottom9 {
  margin-bottom: calc(var(--bt) * 9);
}

.marginLeft9 {
  margin-left: calc(var(--bt) * 9);
}

.marginTopN9 {
  margin-top: calc(var(--bt) * -9);
}

.marginRightN9 {
  margin-right: calc(var(--bt) * -9);
}

.marginBottomN9 {
  margin-bottom: calc(var(--bt) * -9);
}

.marginLeftN9 {
  margin-left: calc(var(--bt) * -9);
}

.paddingY9 {
  padding-bottom: calc(var(--bt) * 9);
  padding-top: calc(var(--bt) * 9);
}

.paddingX9 {
  padding-left: calc(var(--bt) * 9);
  padding-right: calc(var(--bt) * 9);
}

html:not([dir="rtl"]) .marginStart10 {
  margin-left: calc(var(--bt) * 10);
}

html:not([dir="rtl"]) .marginEnd10 {
  margin-right: calc(var(--bt) * 10);
}

html[dir="rtl"] .marginStart10 {
  margin-right: calc(var(--bt) * 10);
}

html[dir="rtl"] .marginEnd10 {
  margin-left: calc(var(--bt) * 10);
}

html:not([dir="rtl"]) .marginStartN10 {
  margin-left: calc(var(--bt) * -10);
}

html:not([dir="rtl"]) .marginEndN10 {
  margin-right: calc(var(--bt) * -10);
}

html[dir="rtl"] .marginStartN10 {
  margin-right: calc(var(--bt) * -10);
}

html[dir="rtl"] .marginEndN10 {
  margin-left: calc(var(--bt) * -10);
}

.marginTop10 {
  margin-top: calc(var(--bt) * 10);
}

.marginRight10 {
  margin-right: calc(var(--bt) * 10);
}

.marginBottom10 {
  margin-bottom: calc(var(--bt) * 10);
}

.marginLeft10 {
  margin-left: calc(var(--bt) * 10);
}

.marginTopN10 {
  margin-top: calc(var(--bt) * -10);
}

.marginRightN10 {
  margin-right: calc(var(--bt) * -10);
}

.marginBottomN10 {
  margin-bottom: calc(var(--bt) * -10);
}

.marginLeftN10 {
  margin-left: calc(var(--bt) * -10);
}

.paddingY10 {
  padding-bottom: calc(var(--bt) * 10);
  padding-top: calc(var(--bt) * 10);
}

.paddingX10 {
  padding-left: calc(var(--bt) * 10);
  padding-right: calc(var(--bt) * 10);
}

html:not([dir="rtl"]) .marginStart11 {
  margin-left: calc(var(--bt) * 11);
}

html:not([dir="rtl"]) .marginEnd11 {
  margin-right: calc(var(--bt) * 11);
}

html[dir="rtl"] .marginStart11 {
  margin-right: calc(var(--bt) * 11);
}

html[dir="rtl"] .marginEnd11 {
  margin-left: calc(var(--bt) * 11);
}

html:not([dir="rtl"]) .marginStartN11 {
  margin-left: calc(var(--bt) * -11);
}

html:not([dir="rtl"]) .marginEndN11 {
  margin-right: calc(var(--bt) * -11);
}

html[dir="rtl"] .marginStartN11 {
  margin-right: calc(var(--bt) * -11);
}

html[dir="rtl"] .marginEndN11 {
  margin-left: calc(var(--bt) * -11);
}

.marginTop11 {
  margin-top: calc(var(--bt) * 11);
}

.marginRight11 {
  margin-right: calc(var(--bt) * 11);
}

.marginBottom11 {
  margin-bottom: calc(var(--bt) * 11);
}

.marginLeft11 {
  margin-left: calc(var(--bt) * 11);
}

.marginTopN11 {
  margin-top: calc(var(--bt) * -11);
}

.marginRightN11 {
  margin-right: calc(var(--bt) * -11);
}

.marginBottomN11 {
  margin-bottom: calc(var(--bt) * -11);
}

.marginLeftN11 {
  margin-left: calc(var(--bt) * -11);
}

.paddingY11 {
  padding-bottom: calc(var(--bt) * 11);
  padding-top: calc(var(--bt) * 11);
}

.paddingX11 {
  padding-left: calc(var(--bt) * 11);
  padding-right: calc(var(--bt) * 11);
}

html:not([dir="rtl"]) .marginStart12 {
  margin-left: calc(var(--bt) * 12);
}

html:not([dir="rtl"]) .marginEnd12 {
  margin-right: calc(var(--bt) * 12);
}

html[dir="rtl"] .marginStart12 {
  margin-right: calc(var(--bt) * 12);
}

html[dir="rtl"] .marginEnd12 {
  margin-left: calc(var(--bt) * 12);
}

html:not([dir="rtl"]) .marginStartN12 {
  margin-left: calc(var(--bt) * -12);
}

html:not([dir="rtl"]) .marginEndN12 {
  margin-right: calc(var(--bt) * -12);
}

html[dir="rtl"] .marginStartN12 {
  margin-right: calc(var(--bt) * -12);
}

html[dir="rtl"] .marginEndN12 {
  margin-left: calc(var(--bt) * -12);
}

.marginTop12 {
  margin-top: calc(var(--bt) * 12);
}

.marginRight12 {
  margin-right: calc(var(--bt) * 12);
}

.marginBottom12 {
  margin-bottom: calc(var(--bt) * 12);
}

.marginLeft12 {
  margin-left: calc(var(--bt) * 12);
}

.marginTopN12 {
  margin-top: calc(var(--bt) * -12);
}

.marginRightN12 {
  margin-right: calc(var(--bt) * -12);
}

.marginBottomN12 {
  margin-bottom: calc(var(--bt) * -12);
}

.marginLeftN12 {
  margin-left: calc(var(--bt) * -12);
}

.paddingY12 {
  padding-bottom: calc(var(--bt) * 12);
  padding-top: calc(var(--bt) * 12);
}

.paddingX12 {
  padding-left: calc(var(--bt) * 12);
  padding-right: calc(var(--bt) * 12);
}

@media (${breakpoints.sm}) {
  html:not([dir="rtl"]) .smMarginStart1 {
    margin-left: calc(var(--bt) * 1);
  }

  html:not([dir="rtl"]) .smMarginEnd1 {
    margin-right: calc(var(--bt) * 1);
  }

  html[dir="rtl"] .smMarginStart1 {
    margin-right: calc(var(--bt) * 1);
  }

  html[dir="rtl"] .smMarginEnd1 {
    margin-left: calc(var(--bt) * 1);
  }

  html:not([dir="rtl"]) .smMarginStartN1 {
    margin-left: calc(var(--bt) * -1);
  }

  html:not([dir="rtl"]) .smMarginEndN1 {
    margin-right: calc(var(--bt) * -1);
  }

  html[dir="rtl"] .smMarginStartN1 {
    margin-right: calc(var(--bt) * -1);
  }

  html[dir="rtl"] .smMarginEndN1 {
    margin-left: calc(var(--bt) * -1);
  }

  .smMarginTop1 {
    margin-top: calc(var(--bt) * 1);
  }

  .smMarginRight1 {
    margin-right: calc(var(--bt) * 1);
  }

  .smMarginBottom1 {
    margin-bottom: calc(var(--bt) * 1);
  }

  .smMarginLeft1 {
    margin-left: calc(var(--bt) * 1);
  }

  .smMarginTopN1 {
    margin-top: calc(var(--bt) * -1);
  }

  .smMarginRightN1 {
    margin-right: calc(var(--bt) * -1);
  }

  .smMarginBottomN1 {
    margin-bottom: calc(var(--bt) * -1);
  }

  .smMarginLeftN1 {
    margin-left: calc(var(--bt) * -1);
  }

  .smPaddingY1 {
    padding-bottom: calc(var(--bt) * 1);
    padding-top: calc(var(--bt) * 1);
  }

  .smPaddingX1 {
    padding-left: calc(var(--bt) * 1);
    padding-right: calc(var(--bt) * 1);
  }

  html:not([dir="rtl"]) .smMarginStart2 {
    margin-left: calc(var(--bt) * 2);
  }

  html:not([dir="rtl"]) .smMarginEnd2 {
    margin-right: calc(var(--bt) * 2);
  }

  html[dir="rtl"] .smMarginStart2 {
    margin-right: calc(var(--bt) * 2);
  }

  html[dir="rtl"] .smMarginEnd2 {
    margin-left: calc(var(--bt) * 2);
  }

  html:not([dir="rtl"]) .smMarginStartN2 {
    margin-left: calc(var(--bt) * -2);
  }

  html:not([dir="rtl"]) .smMarginEndN2 {
    margin-right: calc(var(--bt) * -2);
  }

  html[dir="rtl"] .smMarginStartN2 {
    margin-right: calc(var(--bt) * -2);
  }

  html[dir="rtl"] .smMarginEndN2 {
    margin-left: calc(var(--bt) * -2);
  }

  .smMarginTop2 {
    margin-top: calc(var(--bt) * 2);
  }

  .smMarginRight2 {
    margin-right: calc(var(--bt) * 2);
  }

  .smMarginBottom2 {
    margin-bottom: calc(var(--bt) * 2);
  }

  .smMarginLeft2 {
    margin-left: calc(var(--bt) * 2);
  }

  .smMarginTopN2 {
    margin-top: calc(var(--bt) * -2);
  }

  .smMarginRightN2 {
    margin-right: calc(var(--bt) * -2);
  }

  .smMarginBottomN2 {
    margin-bottom: calc(var(--bt) * -2);
  }

  .smMarginLeftN2 {
    margin-left: calc(var(--bt) * -2);
  }

  .smPaddingY2 {
    padding-bottom: calc(var(--bt) * 2);
    padding-top: calc(var(--bt) * 2);
  }

  .smPaddingX2 {
    padding-left: calc(var(--bt) * 2);
    padding-right: calc(var(--bt) * 2);
  }

  html:not([dir="rtl"]) .smMarginStart3 {
    margin-left: calc(var(--bt) * 3);
  }

  html:not([dir="rtl"]) .smMarginEnd3 {
    margin-right: calc(var(--bt) * 3);
  }

  html[dir="rtl"] .smMarginStart3 {
    margin-right: calc(var(--bt) * 3);
  }

  html[dir="rtl"] .smMarginEnd3 {
    margin-left: calc(var(--bt) * 3);
  }

  html:not([dir="rtl"]) .smMarginStartN3 {
    margin-left: calc(var(--bt) * -3);
  }

  html:not([dir="rtl"]) .smMarginEndN3 {
    margin-right: calc(var(--bt) * -3);
  }

  html[dir="rtl"] .smMarginStartN3 {
    margin-right: calc(var(--bt) * -3);
  }

  html[dir="rtl"] .smMarginEndN3 {
    margin-left: calc(var(--bt) * -3);
  }

  .smMarginTop3 {
    margin-top: calc(var(--bt) * 3);
  }

  .smMarginRight3 {
    margin-right: calc(var(--bt) * 3);
  }

  .smMarginBottom3 {
    margin-bottom: calc(var(--bt) * 3);
  }

  .smMarginLeft3 {
    margin-left: calc(var(--bt) * 3);
  }

  .smMarginTopN3 {
    margin-top: calc(var(--bt) * -3);
  }

  .smMarginRightN3 {
    margin-right: calc(var(--bt) * -3);
  }

  .smMarginBottomN3 {
    margin-bottom: calc(var(--bt) * -3);
  }

  .smMarginLeftN3 {
    margin-left: calc(var(--bt) * -3);
  }

  .smPaddingY3 {
    padding-bottom: calc(var(--bt) * 3);
    padding-top: calc(var(--bt) * 3);
  }

  .smPaddingX3 {
    padding-left: calc(var(--bt) * 3);
    padding-right: calc(var(--bt) * 3);
  }

  html:not([dir="rtl"]) .smMarginStart4 {
    margin-left: calc(var(--bt) * 4);
  }

  html:not([dir="rtl"]) .smMarginEnd4 {
    margin-right: calc(var(--bt) * 4);
  }

  html[dir="rtl"] .smMarginStart4 {
    margin-right: calc(var(--bt) * 4);
  }

  html[dir="rtl"] .smMarginEnd4 {
    margin-left: calc(var(--bt) * 4);
  }

  html:not([dir="rtl"]) .smMarginStartN4 {
    margin-left: calc(var(--bt) * -4);
  }

  html:not([dir="rtl"]) .smMarginEndN4 {
    margin-right: calc(var(--bt) * -4);
  }

  html[dir="rtl"] .smMarginStartN4 {
    margin-right: calc(var(--bt) * -4);
  }

  html[dir="rtl"] .smMarginEndN4 {
    margin-left: calc(var(--bt) * -4);
  }

  .smMarginTop4 {
    margin-top: calc(var(--bt) * 4);
  }

  .smMarginRight4 {
    margin-right: calc(var(--bt) * 4);
  }

  .smMarginBottom4 {
    margin-bottom: calc(var(--bt) * 4);
  }

  .smMarginLeft4 {
    margin-left: calc(var(--bt) * 4);
  }

  .smMarginTopN4 {
    margin-top: calc(var(--bt) * -4);
  }

  .smMarginRightN4 {
    margin-right: calc(var(--bt) * -4);
  }

  .smMarginBottomN4 {
    margin-bottom: calc(var(--bt) * -4);
  }

  .smMarginLeftN4 {
    margin-left: calc(var(--bt) * -4);
  }

  .smPaddingY4 {
    padding-bottom: calc(var(--bt) * 4);
    padding-top: calc(var(--bt) * 4);
  }

  .smPaddingX4 {
    padding-left: calc(var(--bt) * 4);
    padding-right: calc(var(--bt) * 4);
  }

  html:not([dir="rtl"]) .smMarginStart5 {
    margin-left: calc(var(--bt) * 5);
  }

  html:not([dir="rtl"]) .smMarginEnd5 {
    margin-right: calc(var(--bt) * 5);
  }

  html[dir="rtl"] .smMarginStart5 {
    margin-right: calc(var(--bt) * 5);
  }

  html[dir="rtl"] .smMarginEnd5 {
    margin-left: calc(var(--bt) * 5);
  }

  html:not([dir="rtl"]) .smMarginStartN5 {
    margin-left: calc(var(--bt) * -5);
  }

  html:not([dir="rtl"]) .smMarginEndN5 {
    margin-right: calc(var(--bt) * -5);
  }

  html[dir="rtl"] .smMarginStartN5 {
    margin-right: calc(var(--bt) * -5);
  }

  html[dir="rtl"] .smMarginEndN5 {
    margin-left: calc(var(--bt) * -5);
  }

  .smMarginTop5 {
    margin-top: calc(var(--bt) * 5);
  }

  .smMarginRight5 {
    margin-right: calc(var(--bt) * 5);
  }

  .smMarginBottom5 {
    margin-bottom: calc(var(--bt) * 5);
  }

  .smMarginLeft5 {
    margin-left: calc(var(--bt) * 5);
  }

  .smMarginTopN5 {
    margin-top: calc(var(--bt) * -5);
  }

  .smMarginRightN5 {
    margin-right: calc(var(--bt) * -5);
  }

  .smMarginBottomN5 {
    margin-bottom: calc(var(--bt) * -5);
  }

  .smMarginLeftN5 {
    margin-left: calc(var(--bt) * -5);
  }

  .smPaddingY5 {
    padding-bottom: calc(var(--bt) * 5);
    padding-top: calc(var(--bt) * 5);
  }

  .smPaddingX5 {
    padding-left: calc(var(--bt) * 5);
    padding-right: calc(var(--bt) * 5);
  }

  html:not([dir="rtl"]) .smMarginStart6 {
    margin-left: calc(var(--bt) * 6);
  }

  html:not([dir="rtl"]) .smMarginEnd6 {
    margin-right: calc(var(--bt) * 6);
  }

  html[dir="rtl"] .smMarginStart6 {
    margin-right: calc(var(--bt) * 6);
  }

  html[dir="rtl"] .smMarginEnd6 {
    margin-left: calc(var(--bt) * 6);
  }

  html:not([dir="rtl"]) .smMarginStartN6 {
    margin-left: calc(var(--bt) * -6);
  }

  html:not([dir="rtl"]) .smMarginEndN6 {
    margin-right: calc(var(--bt) * -6);
  }

  html[dir="rtl"] .smMarginStartN6 {
    margin-right: calc(var(--bt) * -6);
  }

  html[dir="rtl"] .smMarginEndN6 {
    margin-left: calc(var(--bt) * -6);
  }

  .smMarginTop6 {
    margin-top: calc(var(--bt) * 6);
  }

  .smMarginRight6 {
    margin-right: calc(var(--bt) * 6);
  }

  .smMarginBottom6 {
    margin-bottom: calc(var(--bt) * 6);
  }

  .smMarginLeft6 {
    margin-left: calc(var(--bt) * 6);
  }

  .smMarginTopN6 {
    margin-top: calc(var(--bt) * -6);
  }

  .smMarginRightN6 {
    margin-right: calc(var(--bt) * -6);
  }

  .smMarginBottomN6 {
    margin-bottom: calc(var(--bt) * -6);
  }

  .smMarginLeftN6 {
    margin-left: calc(var(--bt) * -6);
  }

  .smPaddingY6 {
    padding-bottom: calc(var(--bt) * 6);
    padding-top: calc(var(--bt) * 6);
  }

  .smPaddingX6 {
    padding-left: calc(var(--bt) * 6);
    padding-right: calc(var(--bt) * 6);
  }

  html:not([dir="rtl"]) .smMarginStart7 {
    margin-left: calc(var(--bt) * 7);
  }

  html:not([dir="rtl"]) .smMarginEnd7 {
    margin-right: calc(var(--bt) * 7);
  }

  html[dir="rtl"] .smMarginStart7 {
    margin-right: calc(var(--bt) * 7);
  }

  html[dir="rtl"] .smMarginEnd7 {
    margin-left: calc(var(--bt) * 7);
  }

  html:not([dir="rtl"]) .smMarginStartN7 {
    margin-left: calc(var(--bt) * -7);
  }

  html:not([dir="rtl"]) .smMarginEndN7 {
    margin-right: calc(var(--bt) * -7);
  }

  html[dir="rtl"] .smMarginStartN7 {
    margin-right: calc(var(--bt) * -7);
  }

  html[dir="rtl"] .smMarginEndN7 {
    margin-left: calc(var(--bt) * -7);
  }

  .smMarginTop7 {
    margin-top: calc(var(--bt) * 7);
  }

  .smMarginRight7 {
    margin-right: calc(var(--bt) * 7);
  }

  .smMarginBottom7 {
    margin-bottom: calc(var(--bt) * 7);
  }

  .smMarginLeft7 {
    margin-left: calc(var(--bt) * 7);
  }

  .smMarginTopN7 {
    margin-top: calc(var(--bt) * -7);
  }

  .smMarginRightN7 {
    margin-right: calc(var(--bt) * -7);
  }

  .smMarginBottomN7 {
    margin-bottom: calc(var(--bt) * -7);
  }

  .smMarginLeftN7 {
    margin-left: calc(var(--bt) * -7);
  }

  .smPaddingY7 {
    padding-bottom: calc(var(--bt) * 7);
    padding-top: calc(var(--bt) * 7);
  }

  .smPaddingX7 {
    padding-left: calc(var(--bt) * 7);
    padding-right: calc(var(--bt) * 7);
  }

  html:not([dir="rtl"]) .smMarginStart8 {
    margin-left: calc(var(--bt) * 8);
  }

  html:not([dir="rtl"]) .smMarginEnd8 {
    margin-right: calc(var(--bt) * 8);
  }

  html[dir="rtl"] .smMarginStart8 {
    margin-right: calc(var(--bt) * 8);
  }

  html[dir="rtl"] .smMarginEnd8 {
    margin-left: calc(var(--bt) * 8);
  }

  html:not([dir="rtl"]) .smMarginStartN8 {
    margin-left: calc(var(--bt) * -8);
  }

  html:not([dir="rtl"]) .smMarginEndN8 {
    margin-right: calc(var(--bt) * -8);
  }

  html[dir="rtl"] .smMarginStartN8 {
    margin-right: calc(var(--bt) * -8);
  }

  html[dir="rtl"] .smMarginEndN8 {
    margin-left: calc(var(--bt) * -8);
  }

  .smMarginTop8 {
    margin-top: calc(var(--bt) * 8);
  }

  .smMarginRight8 {
    margin-right: calc(var(--bt) * 8);
  }

  .smMarginBottom8 {
    margin-bottom: calc(var(--bt) * 8);
  }

  .smMarginLeft8 {
    margin-left: calc(var(--bt) * 8);
  }

  .smMarginTopN8 {
    margin-top: calc(var(--bt) * -8);
  }

  .smMarginRightN8 {
    margin-right: calc(var(--bt) * -8);
  }

  .smMarginBottomN8 {
    margin-bottom: calc(var(--bt) * -8);
  }

  .smMarginLeftN8 {
    margin-left: calc(var(--bt) * -8);
  }

  .smPaddingY8 {
    padding-bottom: calc(var(--bt) * 8);
    padding-top: calc(var(--bt) * 8);
  }

  .smPaddingX8 {
    padding-left: calc(var(--bt) * 8);
    padding-right: calc(var(--bt) * 8);
  }

  html:not([dir="rtl"]) .smMarginStart9 {
    margin-left: calc(var(--bt) * 9);
  }

  html:not([dir="rtl"]) .smMarginEnd9 {
    margin-right: calc(var(--bt) * 9);
  }

  html[dir="rtl"] .smMarginStart9 {
    margin-right: calc(var(--bt) * 9);
  }

  html[dir="rtl"] .smMarginEnd9 {
    margin-left: calc(var(--bt) * 9);
  }

  html:not([dir="rtl"]) .smMarginStartN9 {
    margin-left: calc(var(--bt) * -9);
  }

  html:not([dir="rtl"]) .smMarginEndN9 {
    margin-right: calc(var(--bt) * -9);
  }

  html[dir="rtl"] .smMarginStartN9 {
    margin-right: calc(var(--bt) * -9);
  }

  html[dir="rtl"] .smMarginEndN9 {
    margin-left: calc(var(--bt) * -9);
  }

  .smMarginTop9 {
    margin-top: calc(var(--bt) * 9);
  }

  .smMarginRight9 {
    margin-right: calc(var(--bt) * 9);
  }

  .smMarginBottom9 {
    margin-bottom: calc(var(--bt) * 9);
  }

  .smMarginLeft9 {
    margin-left: calc(var(--bt) * 9);
  }

  .smMarginTopN9 {
    margin-top: calc(var(--bt) * -9);
  }

  .smMarginRightN9 {
    margin-right: calc(var(--bt) * -9);
  }

  .smMarginBottomN9 {
    margin-bottom: calc(var(--bt) * -9);
  }

  .smMarginLeftN9 {
    margin-left: calc(var(--bt) * -9);
  }

  .smPaddingY9 {
    padding-bottom: calc(var(--bt) * 9);
    padding-top: calc(var(--bt) * 9);
  }

  .smPaddingX9 {
    padding-left: calc(var(--bt) * 9);
    padding-right: calc(var(--bt) * 9);
  }

  html:not([dir="rtl"]) .smMarginStart10 {
    margin-left: calc(var(--bt) * 10);
  }

  html:not([dir="rtl"]) .smMarginEnd10 {
    margin-right: calc(var(--bt) * 10);
  }

  html[dir="rtl"] .smMarginStart10 {
    margin-right: calc(var(--bt) * 10);
  }

  html[dir="rtl"] .smMarginEnd10 {
    margin-left: calc(var(--bt) * 10);
  }

  html:not([dir="rtl"]) .smMarginStartN10 {
    margin-left: calc(var(--bt) * -10);
  }

  html:not([dir="rtl"]) .smMarginEndN10 {
    margin-right: calc(var(--bt) * -10);
  }

  html[dir="rtl"] .smMarginStartN10 {
    margin-right: calc(var(--bt) * -10);
  }

  html[dir="rtl"] .smMarginEndN10 {
    margin-left: calc(var(--bt) * -10);
  }

  .smMarginTop10 {
    margin-top: calc(var(--bt) * 10);
  }

  .smMarginRight10 {
    margin-right: calc(var(--bt) * 10);
  }

  .smMarginBottom10 {
    margin-bottom: calc(var(--bt) * 10);
  }

  .smMarginLeft10 {
    margin-left: calc(var(--bt) * 10);
  }

  .smMarginTopN10 {
    margin-top: calc(var(--bt) * -10);
  }

  .smMarginRightN10 {
    margin-right: calc(var(--bt) * -10);
  }

  .smMarginBottomN10 {
    margin-bottom: calc(var(--bt) * -10);
  }

  .smMarginLeftN10 {
    margin-left: calc(var(--bt) * -10);
  }

  .smPaddingY10 {
    padding-bottom: calc(var(--bt) * 10);
    padding-top: calc(var(--bt) * 10);
  }

  .smPaddingX10 {
    padding-left: calc(var(--bt) * 10);
    padding-right: calc(var(--bt) * 10);
  }

  html:not([dir="rtl"]) .smMarginStart11 {
    margin-left: calc(var(--bt) * 11);
  }

  html:not([dir="rtl"]) .smMarginEnd11 {
    margin-right: calc(var(--bt) * 11);
  }

  html[dir="rtl"] .smMarginStart11 {
    margin-right: calc(var(--bt) * 11);
  }

  html[dir="rtl"] .smMarginEnd11 {
    margin-left: calc(var(--bt) * 11);
  }

  html:not([dir="rtl"]) .smMarginStartN11 {
    margin-left: calc(var(--bt) * -11);
  }

  html:not([dir="rtl"]) .smMarginEndN11 {
    margin-right: calc(var(--bt) * -11);
  }

  html[dir="rtl"] .smMarginStartN11 {
    margin-right: calc(var(--bt) * -11);
  }

  html[dir="rtl"] .smMarginEndN11 {
    margin-left: calc(var(--bt) * -11);
  }

  .smMarginTop11 {
    margin-top: calc(var(--bt) * 11);
  }

  .smMarginRight11 {
    margin-right: calc(var(--bt) * 11);
  }

  .smMarginBottom11 {
    margin-bottom: calc(var(--bt) * 11);
  }

  .smMarginLeft11 {
    margin-left: calc(var(--bt) * 11);
  }

  .smMarginTopN11 {
    margin-top: calc(var(--bt) * -11);
  }

  .smMarginRightN11 {
    margin-right: calc(var(--bt) * -11);
  }

  .smMarginBottomN11 {
    margin-bottom: calc(var(--bt) * -11);
  }

  .smMarginLeftN11 {
    margin-left: calc(var(--bt) * -11);
  }

  .smPaddingY11 {
    padding-bottom: calc(var(--bt) * 11);
    padding-top: calc(var(--bt) * 11);
  }

  .smPaddingX11 {
    padding-left: calc(var(--bt) * 11);
    padding-right: calc(var(--bt) * 11);
  }

  html:not([dir="rtl"]) .smMarginStart12 {
    margin-left: calc(var(--bt) * 12);
  }

  html:not([dir="rtl"]) .smMarginEnd12 {
    margin-right: calc(var(--bt) * 12);
  }

  html[dir="rtl"] .smMarginStart12 {
    margin-right: calc(var(--bt) * 12);
  }

  html[dir="rtl"] .smMarginEnd12 {
    margin-left: calc(var(--bt) * 12);
  }

  html:not([dir="rtl"]) .smMarginStartN12 {
    margin-left: calc(var(--bt) * -12);
  }

  html:not([dir="rtl"]) .smMarginEndN12 {
    margin-right: calc(var(--bt) * -12);
  }

  html[dir="rtl"] .smMarginStartN12 {
    margin-right: calc(var(--bt) * -12);
  }

  html[dir="rtl"] .smMarginEndN12 {
    margin-left: calc(var(--bt) * -12);
  }

  .smMarginTop12 {
    margin-top: calc(var(--bt) * 12);
  }

  .smMarginRight12 {
    margin-right: calc(var(--bt) * 12);
  }

  .smMarginBottom12 {
    margin-bottom: calc(var(--bt) * 12);
  }

  .smMarginLeft12 {
    margin-left: calc(var(--bt) * 12);
  }

  .smMarginTopN12 {
    margin-top: calc(var(--bt) * -12);
  }

  .smMarginRightN12 {
    margin-right: calc(var(--bt) * -12);
  }

  .smMarginBottomN12 {
    margin-bottom: calc(var(--bt) * -12);
  }

  .smMarginLeftN12 {
    margin-left: calc(var(--bt) * -12);
  }

  .smPaddingY12 {
    padding-bottom: calc(var(--bt) * 12);
    padding-top: calc(var(--bt) * 12);
  }

  .smPaddingX12 {
    padding-left: calc(var(--bt) * 12);
    padding-right: calc(var(--bt) * 12);
  }
}

@media (${breakpoints.md}) {
  html:not([dir="rtl"]) .mdMarginStart1 {
    margin-left: calc(var(--bt) * 1);
  }

  html:not([dir="rtl"]) .mdMarginEnd1 {
    margin-right: calc(var(--bt) * 1);
  }

  html[dir="rtl"] .mdMarginStart1 {
    margin-right: calc(var(--bt) * 1);
  }

  html[dir="rtl"] .mdMarginEnd1 {
    margin-left: calc(var(--bt) * 1);
  }

  html:not([dir="rtl"]) .mdMarginStartN1 {
    margin-left: calc(var(--bt) * -1);
  }

  html:not([dir="rtl"]) .mdMarginEndN1 {
    margin-right: calc(var(--bt) * -1);
  }

  html[dir="rtl"] .mdMarginStartN1 {
    margin-right: calc(var(--bt) * -1);
  }

  html[dir="rtl"] .mdMarginEndN1 {
    margin-left: calc(var(--bt) * -1);
  }

  .mdMarginTop1 {
    margin-top: calc(var(--bt) * 1);
  }

  .mdMarginRight1 {
    margin-right: calc(var(--bt) * 1);
  }

  .mdMarginBottom1 {
    margin-bottom: calc(var(--bt) * 1);
  }

  .mdMarginLeft1 {
    margin-left: calc(var(--bt) * 1);
  }

  .mdMarginTopN1 {
    margin-top: calc(var(--bt) * -1);
  }

  .mdMarginRightN1 {
    margin-right: calc(var(--bt) * -1);
  }

  .mdMarginBottomN1 {
    margin-bottom: calc(var(--bt) * -1);
  }

  .mdMarginLeftN1 {
    margin-left: calc(var(--bt) * -1);
  }

  .mdPaddingY1 {
    padding-bottom: calc(var(--bt) * 1);
    padding-top: calc(var(--bt) * 1);
  }

  .mdPaddingX1 {
    padding-left: calc(var(--bt) * 1);
    padding-right: calc(var(--bt) * 1);
  }

  html:not([dir="rtl"]) .mdMarginStart2 {
    margin-left: calc(var(--bt) * 2);
  }

  html:not([dir="rtl"]) .mdMarginEnd2 {
    margin-right: calc(var(--bt) * 2);
  }

  html[dir="rtl"] .mdMarginStart2 {
    margin-right: calc(var(--bt) * 2);
  }

  html[dir="rtl"] .mdMarginEnd2 {
    margin-left: calc(var(--bt) * 2);
  }

  html:not([dir="rtl"]) .mdMarginStartN2 {
    margin-left: calc(var(--bt) * -2);
  }

  html:not([dir="rtl"]) .mdMarginEndN2 {
    margin-right: calc(var(--bt) * -2);
  }

  html[dir="rtl"] .mdMarginStartN2 {
    margin-right: calc(var(--bt) * -2);
  }

  html[dir="rtl"] .mdMarginEndN2 {
    margin-left: calc(var(--bt) * -2);
  }

  .mdMarginTop2 {
    margin-top: calc(var(--bt) * 2);
  }

  .mdMarginRight2 {
    margin-right: calc(var(--bt) * 2);
  }

  .mdMarginBottom2 {
    margin-bottom: calc(var(--bt) * 2);
  }

  .mdMarginLeft2 {
    margin-left: calc(var(--bt) * 2);
  }

  .mdMarginTopN2 {
    margin-top: calc(var(--bt) * -2);
  }

  .mdMarginRightN2 {
    margin-right: calc(var(--bt) * -2);
  }

  .mdMarginBottomN2 {
    margin-bottom: calc(var(--bt) * -2);
  }

  .mdMarginLeftN2 {
    margin-left: calc(var(--bt) * -2);
  }

  .mdPaddingY2 {
    padding-bottom: calc(var(--bt) * 2);
    padding-top: calc(var(--bt) * 2);
  }

  .mdPaddingX2 {
    padding-left: calc(var(--bt) * 2);
    padding-right: calc(var(--bt) * 2);
  }

  html:not([dir="rtl"]) .mdMarginStart3 {
    margin-left: calc(var(--bt) * 3);
  }

  html:not([dir="rtl"]) .mdMarginEnd3 {
    margin-right: calc(var(--bt) * 3);
  }

  html[dir="rtl"] .mdMarginStart3 {
    margin-right: calc(var(--bt) * 3);
  }

  html[dir="rtl"] .mdMarginEnd3 {
    margin-left: calc(var(--bt) * 3);
  }

  html:not([dir="rtl"]) .mdMarginStartN3 {
    margin-left: calc(var(--bt) * -3);
  }

  html:not([dir="rtl"]) .mdMarginEndN3 {
    margin-right: calc(var(--bt) * -3);
  }

  html[dir="rtl"] .mdMarginStartN3 {
    margin-right: calc(var(--bt) * -3);
  }

  html[dir="rtl"] .mdMarginEndN3 {
    margin-left: calc(var(--bt) * -3);
  }

  .mdMarginTop3 {
    margin-top: calc(var(--bt) * 3);
  }

  .mdMarginRight3 {
    margin-right: calc(var(--bt) * 3);
  }

  .mdMarginBottom3 {
    margin-bottom: calc(var(--bt) * 3);
  }

  .mdMarginLeft3 {
    margin-left: calc(var(--bt) * 3);
  }

  .mdMarginTopN3 {
    margin-top: calc(var(--bt) * -3);
  }

  .mdMarginRightN3 {
    margin-right: calc(var(--bt) * -3);
  }

  .mdMarginBottomN3 {
    margin-bottom: calc(var(--bt) * -3);
  }

  .mdMarginLeftN3 {
    margin-left: calc(var(--bt) * -3);
  }

  .mdPaddingY3 {
    padding-bottom: calc(var(--bt) * 3);
    padding-top: calc(var(--bt) * 3);
  }

  .mdPaddingX3 {
    padding-left: calc(var(--bt) * 3);
    padding-right: calc(var(--bt) * 3);
  }

  html:not([dir="rtl"]) .mdMarginStart4 {
    margin-left: calc(var(--bt) * 4);
  }

  html:not([dir="rtl"]) .mdMarginEnd4 {
    margin-right: calc(var(--bt) * 4);
  }

  html[dir="rtl"] .mdMarginStart4 {
    margin-right: calc(var(--bt) * 4);
  }

  html[dir="rtl"] .mdMarginEnd4 {
    margin-left: calc(var(--bt) * 4);
  }

  html:not([dir="rtl"]) .mdMarginStartN4 {
    margin-left: calc(var(--bt) * -4);
  }

  html:not([dir="rtl"]) .mdMarginEndN4 {
    margin-right: calc(var(--bt) * -4);
  }

  html[dir="rtl"] .mdMarginStartN4 {
    margin-right: calc(var(--bt) * -4);
  }

  html[dir="rtl"] .mdMarginEndN4 {
    margin-left: calc(var(--bt) * -4);
  }

  .mdMarginTop4 {
    margin-top: calc(var(--bt) * 4);
  }

  .mdMarginRight4 {
    margin-right: calc(var(--bt) * 4);
  }

  .mdMarginBottom4 {
    margin-bottom: calc(var(--bt) * 4);
  }

  .mdMarginLeft4 {
    margin-left: calc(var(--bt) * 4);
  }

  .mdMarginTopN4 {
    margin-top: calc(var(--bt) * -4);
  }

  .mdMarginRightN4 {
    margin-right: calc(var(--bt) * -4);
  }

  .mdMarginBottomN4 {
    margin-bottom: calc(var(--bt) * -4);
  }

  .mdMarginLeftN4 {
    margin-left: calc(var(--bt) * -4);
  }

  .mdPaddingY4 {
    padding-bottom: calc(var(--bt) * 4);
    padding-top: calc(var(--bt) * 4);
  }

  .mdPaddingX4 {
    padding-left: calc(var(--bt) * 4);
    padding-right: calc(var(--bt) * 4);
  }

  html:not([dir="rtl"]) .mdMarginStart5 {
    margin-left: calc(var(--bt) * 5);
  }

  html:not([dir="rtl"]) .mdMarginEnd5 {
    margin-right: calc(var(--bt) * 5);
  }

  html[dir="rtl"] .mdMarginStart5 {
    margin-right: calc(var(--bt) * 5);
  }

  html[dir="rtl"] .mdMarginEnd5 {
    margin-left: calc(var(--bt) * 5);
  }

  html:not([dir="rtl"]) .mdMarginStartN5 {
    margin-left: calc(var(--bt) * -5);
  }

  html:not([dir="rtl"]) .mdMarginEndN5 {
    margin-right: calc(var(--bt) * -5);
  }

  html[dir="rtl"] .mdMarginStartN5 {
    margin-right: calc(var(--bt) * -5);
  }

  html[dir="rtl"] .mdMarginEndN5 {
    margin-left: calc(var(--bt) * -5);
  }

  .mdMarginTop5 {
    margin-top: calc(var(--bt) * 5);
  }

  .mdMarginRight5 {
    margin-right: calc(var(--bt) * 5);
  }

  .mdMarginBottom5 {
    margin-bottom: calc(var(--bt) * 5);
  }

  .mdMarginLeft5 {
    margin-left: calc(var(--bt) * 5);
  }

  .mdMarginTopN5 {
    margin-top: calc(var(--bt) * -5);
  }

  .mdMarginRightN5 {
    margin-right: calc(var(--bt) * -5);
  }

  .mdMarginBottomN5 {
    margin-bottom: calc(var(--bt) * -5);
  }

  .mdMarginLeftN5 {
    margin-left: calc(var(--bt) * -5);
  }

  .mdPaddingY5 {
    padding-bottom: calc(var(--bt) * 5);
    padding-top: calc(var(--bt) * 5);
  }

  .mdPaddingX5 {
    padding-left: calc(var(--bt) * 5);
    padding-right: calc(var(--bt) * 5);
  }

  html:not([dir="rtl"]) .mdMarginStart6 {
    margin-left: calc(var(--bt) * 6);
  }

  html:not([dir="rtl"]) .mdMarginEnd6 {
    margin-right: calc(var(--bt) * 6);
  }

  html[dir="rtl"] .mdMarginStart6 {
    margin-right: calc(var(--bt) * 6);
  }

  html[dir="rtl"] .mdMarginEnd6 {
    margin-left: calc(var(--bt) * 6);
  }

  html:not([dir="rtl"]) .mdMarginStartN6 {
    margin-left: calc(var(--bt) * -6);
  }

  html:not([dir="rtl"]) .mdMarginEndN6 {
    margin-right: calc(var(--bt) * -6);
  }

  html[dir="rtl"] .mdMarginStartN6 {
    margin-right: calc(var(--bt) * -6);
  }

  html[dir="rtl"] .mdMarginEndN6 {
    margin-left: calc(var(--bt) * -6);
  }

  .mdMarginTop6 {
    margin-top: calc(var(--bt) * 6);
  }

  .mdMarginRight6 {
    margin-right: calc(var(--bt) * 6);
  }

  .mdMarginBottom6 {
    margin-bottom: calc(var(--bt) * 6);
  }

  .mdMarginLeft6 {
    margin-left: calc(var(--bt) * 6);
  }

  .mdMarginTopN6 {
    margin-top: calc(var(--bt) * -6);
  }

  .mdMarginRightN6 {
    margin-right: calc(var(--bt) * -6);
  }

  .mdMarginBottomN6 {
    margin-bottom: calc(var(--bt) * -6);
  }

  .mdMarginLeftN6 {
    margin-left: calc(var(--bt) * -6);
  }

  .mdPaddingY6 {
    padding-bottom: calc(var(--bt) * 6);
    padding-top: calc(var(--bt) * 6);
  }

  .mdPaddingX6 {
    padding-left: calc(var(--bt) * 6);
    padding-right: calc(var(--bt) * 6);
  }

  html:not([dir="rtl"]) .mdMarginStart7 {
    margin-left: calc(var(--bt) * 7);
  }

  html:not([dir="rtl"]) .mdMarginEnd7 {
    margin-right: calc(var(--bt) * 7);
  }

  html[dir="rtl"] .mdMarginStart7 {
    margin-right: calc(var(--bt) * 7);
  }

  html[dir="rtl"] .mdMarginEnd7 {
    margin-left: calc(var(--bt) * 7);
  }

  html:not([dir="rtl"]) .mdMarginStartN7 {
    margin-left: calc(var(--bt) * -7);
  }

  html:not([dir="rtl"]) .mdMarginEndN7 {
    margin-right: calc(var(--bt) * -7);
  }

  html[dir="rtl"] .mdMarginStartN7 {
    margin-right: calc(var(--bt) * -7);
  }

  html[dir="rtl"] .mdMarginEndN7 {
    margin-left: calc(var(--bt) * -7);
  }

  .mdMarginTop7 {
    margin-top: calc(var(--bt) * 7);
  }

  .mdMarginRight7 {
    margin-right: calc(var(--bt) * 7);
  }

  .mdMarginBottom7 {
    margin-bottom: calc(var(--bt) * 7);
  }

  .mdMarginLeft7 {
    margin-left: calc(var(--bt) * 7);
  }

  .mdMarginTopN7 {
    margin-top: calc(var(--bt) * -7);
  }

  .mdMarginRightN7 {
    margin-right: calc(var(--bt) * -7);
  }

  .mdMarginBottomN7 {
    margin-bottom: calc(var(--bt) * -7);
  }

  .mdMarginLeftN7 {
    margin-left: calc(var(--bt) * -7);
  }

  .mdPaddingY7 {
    padding-bottom: calc(var(--bt) * 7);
    padding-top: calc(var(--bt) * 7);
  }

  .mdPaddingX7 {
    padding-left: calc(var(--bt) * 7);
    padding-right: calc(var(--bt) * 7);
  }

  html:not([dir="rtl"]) .mdMarginStart8 {
    margin-left: calc(var(--bt) * 8);
  }

  html:not([dir="rtl"]) .mdMarginEnd8 {
    margin-right: calc(var(--bt) * 8);
  }

  html[dir="rtl"] .mdMarginStart8 {
    margin-right: calc(var(--bt) * 8);
  }

  html[dir="rtl"] .mdMarginEnd8 {
    margin-left: calc(var(--bt) * 8);
  }

  html:not([dir="rtl"]) .mdMarginStartN8 {
    margin-left: calc(var(--bt) * -8);
  }

  html:not([dir="rtl"]) .mdMarginEndN8 {
    margin-right: calc(var(--bt) * -8);
  }

  html[dir="rtl"] .mdMarginStartN8 {
    margin-right: calc(var(--bt) * -8);
  }

  html[dir="rtl"] .mdMarginEndN8 {
    margin-left: calc(var(--bt) * -8);
  }

  .mdMarginTop8 {
    margin-top: calc(var(--bt) * 8);
  }

  .mdMarginRight8 {
    margin-right: calc(var(--bt) * 8);
  }

  .mdMarginBottom8 {
    margin-bottom: calc(var(--bt) * 8);
  }

  .mdMarginLeft8 {
    margin-left: calc(var(--bt) * 8);
  }

  .mdMarginTopN8 {
    margin-top: calc(var(--bt) * -8);
  }

  .mdMarginRightN8 {
    margin-right: calc(var(--bt) * -8);
  }

  .mdMarginBottomN8 {
    margin-bottom: calc(var(--bt) * -8);
  }

  .mdMarginLeftN8 {
    margin-left: calc(var(--bt) * -8);
  }

  .mdPaddingY8 {
    padding-bottom: calc(var(--bt) * 8);
    padding-top: calc(var(--bt) * 8);
  }

  .mdPaddingX8 {
    padding-left: calc(var(--bt) * 8);
    padding-right: calc(var(--bt) * 8);
  }

  html:not([dir="rtl"]) .mdMarginStart9 {
    margin-left: calc(var(--bt) * 9);
  }

  html:not([dir="rtl"]) .mdMarginEnd9 {
    margin-right: calc(var(--bt) * 9);
  }

  html[dir="rtl"] .mdMarginStart9 {
    margin-right: calc(var(--bt) * 9);
  }

  html[dir="rtl"] .mdMarginEnd9 {
    margin-left: calc(var(--bt) * 9);
  }

  html:not([dir="rtl"]) .mdMarginStartN9 {
    margin-left: calc(var(--bt) * -9);
  }

  html:not([dir="rtl"]) .mdMarginEndN9 {
    margin-right: calc(var(--bt) * -9);
  }

  html[dir="rtl"] .mdMarginStartN9 {
    margin-right: calc(var(--bt) * -9);
  }

  html[dir="rtl"] .mdMarginEndN9 {
    margin-left: calc(var(--bt) * -9);
  }

  .mdMarginTop9 {
    margin-top: calc(var(--bt) * 9);
  }

  .mdMarginRight9 {
    margin-right: calc(var(--bt) * 9);
  }

  .mdMarginBottom9 {
    margin-bottom: calc(var(--bt) * 9);
  }

  .mdMarginLeft9 {
    margin-left: calc(var(--bt) * 9);
  }

  .mdMarginTopN9 {
    margin-top: calc(var(--bt) * -9);
  }

  .mdMarginRightN9 {
    margin-right: calc(var(--bt) * -9);
  }

  .mdMarginBottomN9 {
    margin-bottom: calc(var(--bt) * -9);
  }

  .mdMarginLeftN9 {
    margin-left: calc(var(--bt) * -9);
  }

  .mdPaddingY9 {
    padding-bottom: calc(var(--bt) * 9);
    padding-top: calc(var(--bt) * 9);
  }

  .mdPaddingX9 {
    padding-left: calc(var(--bt) * 9);
    padding-right: calc(var(--bt) * 9);
  }

  html:not([dir="rtl"]) .mdMarginStart10 {
    margin-left: calc(var(--bt) * 10);
  }

  html:not([dir="rtl"]) .mdMarginEnd10 {
    margin-right: calc(var(--bt) * 10);
  }

  html[dir="rtl"] .mdMarginStart10 {
    margin-right: calc(var(--bt) * 10);
  }

  html[dir="rtl"] .mdMarginEnd10 {
    margin-left: calc(var(--bt) * 10);
  }

  html:not([dir="rtl"]) .mdMarginStartN10 {
    margin-left: calc(var(--bt) * -10);
  }

  html:not([dir="rtl"]) .mdMarginEndN10 {
    margin-right: calc(var(--bt) * -10);
  }

  html[dir="rtl"] .mdMarginStartN10 {
    margin-right: calc(var(--bt) * -10);
  }

  html[dir="rtl"] .mdMarginEndN10 {
    margin-left: calc(var(--bt) * -10);
  }

  .mdMarginTop10 {
    margin-top: calc(var(--bt) * 10);
  }

  .mdMarginRight10 {
    margin-right: calc(var(--bt) * 10);
  }

  .mdMarginBottom10 {
    margin-bottom: calc(var(--bt) * 10);
  }

  .mdMarginLeft10 {
    margin-left: calc(var(--bt) * 10);
  }

  .mdMarginTopN10 {
    margin-top: calc(var(--bt) * -10);
  }

  .mdMarginRightN10 {
    margin-right: calc(var(--bt) * -10);
  }

  .mdMarginBottomN10 {
    margin-bottom: calc(var(--bt) * -10);
  }

  .mdMarginLeftN10 {
    margin-left: calc(var(--bt) * -10);
  }

  .mdPaddingY10 {
    padding-bottom: calc(var(--bt) * 10);
    padding-top: calc(var(--bt) * 10);
  }

  .mdPaddingX10 {
    padding-left: calc(var(--bt) * 10);
    padding-right: calc(var(--bt) * 10);
  }

  html:not([dir="rtl"]) .mdMarginStart11 {
    margin-left: calc(var(--bt) * 11);
  }

  html:not([dir="rtl"]) .mdMarginEnd11 {
    margin-right: calc(var(--bt) * 11);
  }

  html[dir="rtl"] .mdMarginStart11 {
    margin-right: calc(var(--bt) * 11);
  }

  html[dir="rtl"] .mdMarginEnd11 {
    margin-left: calc(var(--bt) * 11);
  }

  html:not([dir="rtl"]) .mdMarginStartN11 {
    margin-left: calc(var(--bt) * -11);
  }

  html:not([dir="rtl"]) .mdMarginEndN11 {
    margin-right: calc(var(--bt) * -11);
  }

  html[dir="rtl"] .mdMarginStartN11 {
    margin-right: calc(var(--bt) * -11);
  }

  html[dir="rtl"] .mdMarginEndN11 {
    margin-left: calc(var(--bt) * -11);
  }

  .mdMarginTop11 {
    margin-top: calc(var(--bt) * 11);
  }

  .mdMarginRight11 {
    margin-right: calc(var(--bt) * 11);
  }

  .mdMarginBottom11 {
    margin-bottom: calc(var(--bt) * 11);
  }

  .mdMarginLeft11 {
    margin-left: calc(var(--bt) * 11);
  }

  .mdMarginTopN11 {
    margin-top: calc(var(--bt) * -11);
  }

  .mdMarginRightN11 {
    margin-right: calc(var(--bt) * -11);
  }

  .mdMarginBottomN11 {
    margin-bottom: calc(var(--bt) * -11);
  }

  .mdMarginLeftN11 {
    margin-left: calc(var(--bt) * -11);
  }

  .mdPaddingY11 {
    padding-bottom: calc(var(--bt) * 11);
    padding-top: calc(var(--bt) * 11);
  }

  .mdPaddingX11 {
    padding-left: calc(var(--bt) * 11);
    padding-right: calc(var(--bt) * 11);
  }

  html:not([dir="rtl"]) .mdMarginStart12 {
    margin-left: calc(var(--bt) * 12);
  }

  html:not([dir="rtl"]) .mdMarginEnd12 {
    margin-right: calc(var(--bt) * 12);
  }

  html[dir="rtl"] .mdMarginStart12 {
    margin-right: calc(var(--bt) * 12);
  }

  html[dir="rtl"] .mdMarginEnd12 {
    margin-left: calc(var(--bt) * 12);
  }

  html:not([dir="rtl"]) .mdMarginStartN12 {
    margin-left: calc(var(--bt) * -12);
  }

  html:not([dir="rtl"]) .mdMarginEndN12 {
    margin-right: calc(var(--bt) * -12);
  }

  html[dir="rtl"] .mdMarginStartN12 {
    margin-right: calc(var(--bt) * -12);
  }

  html[dir="rtl"] .mdMarginEndN12 {
    margin-left: calc(var(--bt) * -12);
  }

  .mdMarginTop12 {
    margin-top: calc(var(--bt) * 12);
  }

  .mdMarginRight12 {
    margin-right: calc(var(--bt) * 12);
  }

  .mdMarginBottom12 {
    margin-bottom: calc(var(--bt) * 12);
  }

  .mdMarginLeft12 {
    margin-left: calc(var(--bt) * 12);
  }

  .mdMarginTopN12 {
    margin-top: calc(var(--bt) * -12);
  }

  .mdMarginRightN12 {
    margin-right: calc(var(--bt) * -12);
  }

  .mdMarginBottomN12 {
    margin-bottom: calc(var(--bt) * -12);
  }

  .mdMarginLeftN12 {
    margin-left: calc(var(--bt) * -12);
  }

  .mdPaddingY12 {
    padding-bottom: calc(var(--bt) * 12);
    padding-top: calc(var(--bt) * 12);
  }

  .mdPaddingX12 {
    padding-left: calc(var(--bt) * 12);
    padding-right: calc(var(--bt) * 12);
  }
}

@media (${breakpoints.lg}) {
  html:not([dir="rtl"]) .lgMarginStart1 {
    margin-left: calc(var(--bt) * 1);
  }

  html:not([dir="rtl"]) .lgMarginEnd1 {
    margin-right: calc(var(--bt) * 1);
  }

  html[dir="rtl"] .lgMarginStart1 {
    margin-right: calc(var(--bt) * 1);
  }

  html[dir="rtl"] .lgMarginEnd1 {
    margin-left: calc(var(--bt) * 1);
  }

  html:not([dir="rtl"]) .lgMarginStartN1 {
    margin-left: calc(var(--bt) * -1);
  }

  html:not([dir="rtl"]) .lgMarginEndN1 {
    margin-right: calc(var(--bt) * -1);
  }

  html[dir="rtl"] .lgMarginStartN1 {
    margin-right: calc(var(--bt) * -1);
  }

  html[dir="rtl"] .lgMarginEndN1 {
    margin-left: calc(var(--bt) * -1);
  }

  .lgMarginTop1 {
    margin-top: calc(var(--bt) * 1);
  }

  .lgMarginRight1 {
    margin-right: calc(var(--bt) * 1);
  }

  .lgMarginBottom1 {
    margin-bottom: calc(var(--bt) * 1);
  }

  .lgMarginLeft1 {
    margin-left: calc(var(--bt) * 1);
  }

  .lgMarginTopN1 {
    margin-top: calc(var(--bt) * -1);
  }

  .lgMarginRightN1 {
    margin-right: calc(var(--bt) * -1);
  }

  .lgMarginBottomN1 {
    margin-bottom: calc(var(--bt) * -1);
  }

  .lgMarginLeftN1 {
    margin-left: calc(var(--bt) * -1);
  }

  .lgPaddingY1 {
    padding-bottom: calc(var(--bt) * 1);
    padding-top: calc(var(--bt) * 1);
  }

  .lgPaddingX1 {
    padding-left: calc(var(--bt) * 1);
    padding-right: calc(var(--bt) * 1);
  }

  html:not([dir="rtl"]) .lgMarginStart2 {
    margin-left: calc(var(--bt) * 2);
  }

  html:not([dir="rtl"]) .lgMarginEnd2 {
    margin-right: calc(var(--bt) * 2);
  }

  html[dir="rtl"] .lgMarginStart2 {
    margin-right: calc(var(--bt) * 2);
  }

  html[dir="rtl"] .lgMarginEnd2 {
    margin-left: calc(var(--bt) * 2);
  }

  html:not([dir="rtl"]) .lgMarginStartN2 {
    margin-left: calc(var(--bt) * -2);
  }

  html:not([dir="rtl"]) .lgMarginEndN2 {
    margin-right: calc(var(--bt) * -2);
  }

  html[dir="rtl"] .lgMarginStartN2 {
    margin-right: calc(var(--bt) * -2);
  }

  html[dir="rtl"] .lgMarginEndN2 {
    margin-left: calc(var(--bt) * -2);
  }

  .lgMarginTop2 {
    margin-top: calc(var(--bt) * 2);
  }

  .lgMarginRight2 {
    margin-right: calc(var(--bt) * 2);
  }

  .lgMarginBottom2 {
    margin-bottom: calc(var(--bt) * 2);
  }

  .lgMarginLeft2 {
    margin-left: calc(var(--bt) * 2);
  }

  .lgMarginTopN2 {
    margin-top: calc(var(--bt) * -2);
  }

  .lgMarginRightN2 {
    margin-right: calc(var(--bt) * -2);
  }

  .lgMarginBottomN2 {
    margin-bottom: calc(var(--bt) * -2);
  }

  .lgMarginLeftN2 {
    margin-left: calc(var(--bt) * -2);
  }

  .lgPaddingY2 {
    padding-bottom: calc(var(--bt) * 2);
    padding-top: calc(var(--bt) * 2);
  }

  .lgPaddingX2 {
    padding-left: calc(var(--bt) * 2);
    padding-right: calc(var(--bt) * 2);
  }

  html:not([dir="rtl"]) .lgMarginStart3 {
    margin-left: calc(var(--bt) * 3);
  }

  html:not([dir="rtl"]) .lgMarginEnd3 {
    margin-right: calc(var(--bt) * 3);
  }

  html[dir="rtl"] .lgMarginStart3 {
    margin-right: calc(var(--bt) * 3);
  }

  html[dir="rtl"] .lgMarginEnd3 {
    margin-left: calc(var(--bt) * 3);
  }

  html:not([dir="rtl"]) .lgMarginStartN3 {
    margin-left: calc(var(--bt) * -3);
  }

  html:not([dir="rtl"]) .lgMarginEndN3 {
    margin-right: calc(var(--bt) * -3);
  }

  html[dir="rtl"] .lgMarginStartN3 {
    margin-right: calc(var(--bt) * -3);
  }

  html[dir="rtl"] .lgMarginEndN3 {
    margin-left: calc(var(--bt) * -3);
  }

  .lgMarginTop3 {
    margin-top: calc(var(--bt) * 3);
  }

  .lgMarginRight3 {
    margin-right: calc(var(--bt) * 3);
  }

  .lgMarginBottom3 {
    margin-bottom: calc(var(--bt) * 3);
  }

  .lgMarginLeft3 {
    margin-left: calc(var(--bt) * 3);
  }

  .lgMarginTopN3 {
    margin-top: calc(var(--bt) * -3);
  }

  .lgMarginRightN3 {
    margin-right: calc(var(--bt) * -3);
  }

  .lgMarginBottomN3 {
    margin-bottom: calc(var(--bt) * -3);
  }

  .lgMarginLeftN3 {
    margin-left: calc(var(--bt) * -3);
  }

  .lgPaddingY3 {
    padding-bottom: calc(var(--bt) * 3);
    padding-top: calc(var(--bt) * 3);
  }

  .lgPaddingX3 {
    padding-left: calc(var(--bt) * 3);
    padding-right: calc(var(--bt) * 3);
  }

  html:not([dir="rtl"]) .lgMarginStart4 {
    margin-left: calc(var(--bt) * 4);
  }

  html:not([dir="rtl"]) .lgMarginEnd4 {
    margin-right: calc(var(--bt) * 4);
  }

  html[dir="rtl"] .lgMarginStart4 {
    margin-right: calc(var(--bt) * 4);
  }

  html[dir="rtl"] .lgMarginEnd4 {
    margin-left: calc(var(--bt) * 4);
  }

  html:not([dir="rtl"]) .lgMarginStartN4 {
    margin-left: calc(var(--bt) * -4);
  }

  html:not([dir="rtl"]) .lgMarginEndN4 {
    margin-right: calc(var(--bt) * -4);
  }

  html[dir="rtl"] .lgMarginStartN4 {
    margin-right: calc(var(--bt) * -4);
  }

  html[dir="rtl"] .lgMarginEndN4 {
    margin-left: calc(var(--bt) * -4);
  }

  .lgMarginTop4 {
    margin-top: calc(var(--bt) * 4);
  }

  .lgMarginRight4 {
    margin-right: calc(var(--bt) * 4);
  }

  .lgMarginBottom4 {
    margin-bottom: calc(var(--bt) * 4);
  }

  .lgMarginLeft4 {
    margin-left: calc(var(--bt) * 4);
  }

  .lgMarginTopN4 {
    margin-top: calc(var(--bt) * -4);
  }

  .lgMarginRightN4 {
    margin-right: calc(var(--bt) * -4);
  }

  .lgMarginBottomN4 {
    margin-bottom: calc(var(--bt) * -4);
  }

  .lgMarginLeftN4 {
    margin-left: calc(var(--bt) * -4);
  }

  .lgPaddingY4 {
    padding-bottom: calc(var(--bt) * 4);
    padding-top: calc(var(--bt) * 4);
  }

  .lgPaddingX4 {
    padding-left: calc(var(--bt) * 4);
    padding-right: calc(var(--bt) * 4);
  }

  html:not([dir="rtl"]) .lgMarginStart5 {
    margin-left: calc(var(--bt) * 5);
  }

  html:not([dir="rtl"]) .lgMarginEnd5 {
    margin-right: calc(var(--bt) * 5);
  }

  html[dir="rtl"] .lgMarginStart5 {
    margin-right: calc(var(--bt) * 5);
  }

  html[dir="rtl"] .lgMarginEnd5 {
    margin-left: calc(var(--bt) * 5);
  }

  html:not([dir="rtl"]) .lgMarginStartN5 {
    margin-left: calc(var(--bt) * -5);
  }

  html:not([dir="rtl"]) .lgMarginEndN5 {
    margin-right: calc(var(--bt) * -5);
  }

  html[dir="rtl"] .lgMarginStartN5 {
    margin-right: calc(var(--bt) * -5);
  }

  html[dir="rtl"] .lgMarginEndN5 {
    margin-left: calc(var(--bt) * -5);
  }

  .lgMarginTop5 {
    margin-top: calc(var(--bt) * 5);
  }

  .lgMarginRight5 {
    margin-right: calc(var(--bt) * 5);
  }

  .lgMarginBottom5 {
    margin-bottom: calc(var(--bt) * 5);
  }

  .lgMarginLeft5 {
    margin-left: calc(var(--bt) * 5);
  }

  .lgMarginTopN5 {
    margin-top: calc(var(--bt) * -5);
  }

  .lgMarginRightN5 {
    margin-right: calc(var(--bt) * -5);
  }

  .lgMarginBottomN5 {
    margin-bottom: calc(var(--bt) * -5);
  }

  .lgMarginLeftN5 {
    margin-left: calc(var(--bt) * -5);
  }

  .lgPaddingY5 {
    padding-bottom: calc(var(--bt) * 5);
    padding-top: calc(var(--bt) * 5);
  }

  .lgPaddingX5 {
    padding-left: calc(var(--bt) * 5);
    padding-right: calc(var(--bt) * 5);
  }

  html:not([dir="rtl"]) .lgMarginStart6 {
    margin-left: calc(var(--bt) * 6);
  }

  html:not([dir="rtl"]) .lgMarginEnd6 {
    margin-right: calc(var(--bt) * 6);
  }

  html[dir="rtl"] .lgMarginStart6 {
    margin-right: calc(var(--bt) * 6);
  }

  html[dir="rtl"] .lgMarginEnd6 {
    margin-left: calc(var(--bt) * 6);
  }

  html:not([dir="rtl"]) .lgMarginStartN6 {
    margin-left: calc(var(--bt) * -6);
  }

  html:not([dir="rtl"]) .lgMarginEndN6 {
    margin-right: calc(var(--bt) * -6);
  }

  html[dir="rtl"] .lgMarginStartN6 {
    margin-right: calc(var(--bt) * -6);
  }

  html[dir="rtl"] .lgMarginEndN6 {
    margin-left: calc(var(--bt) * -6);
  }

  .lgMarginTop6 {
    margin-top: calc(var(--bt) * 6);
  }

  .lgMarginRight6 {
    margin-right: calc(var(--bt) * 6);
  }

  .lgMarginBottom6 {
    margin-bottom: calc(var(--bt) * 6);
  }

  .lgMarginLeft6 {
    margin-left: calc(var(--bt) * 6);
  }

  .lgMarginTopN6 {
    margin-top: calc(var(--bt) * -6);
  }

  .lgMarginRightN6 {
    margin-right: calc(var(--bt) * -6);
  }

  .lgMarginBottomN6 {
    margin-bottom: calc(var(--bt) * -6);
  }

  .lgMarginLeftN6 {
    margin-left: calc(var(--bt) * -6);
  }

  .lgPaddingY6 {
    padding-bottom: calc(var(--bt) * 6);
    padding-top: calc(var(--bt) * 6);
  }

  .lgPaddingX6 {
    padding-left: calc(var(--bt) * 6);
    padding-right: calc(var(--bt) * 6);
  }

  html:not([dir="rtl"]) .lgMarginStart7 {
    margin-left: calc(var(--bt) * 7);
  }

  html:not([dir="rtl"]) .lgMarginEnd7 {
    margin-right: calc(var(--bt) * 7);
  }

  html[dir="rtl"] .lgMarginStart7 {
    margin-right: calc(var(--bt) * 7);
  }

  html[dir="rtl"] .lgMarginEnd7 {
    margin-left: calc(var(--bt) * 7);
  }

  html:not([dir="rtl"]) .lgMarginStartN7 {
    margin-left: calc(var(--bt) * -7);
  }

  html:not([dir="rtl"]) .lgMarginEndN7 {
    margin-right: calc(var(--bt) * -7);
  }

  html[dir="rtl"] .lgMarginStartN7 {
    margin-right: calc(var(--bt) * -7);
  }

  html[dir="rtl"] .lgMarginEndN7 {
    margin-left: calc(var(--bt) * -7);
  }

  .lgMarginTop7 {
    margin-top: calc(var(--bt) * 7);
  }

  .lgMarginRight7 {
    margin-right: calc(var(--bt) * 7);
  }

  .lgMarginBottom7 {
    margin-bottom: calc(var(--bt) * 7);
  }

  .lgMarginLeft7 {
    margin-left: calc(var(--bt) * 7);
  }

  .lgMarginTopN7 {
    margin-top: calc(var(--bt) * -7);
  }

  .lgMarginRightN7 {
    margin-right: calc(var(--bt) * -7);
  }

  .lgMarginBottomN7 {
    margin-bottom: calc(var(--bt) * -7);
  }

  .lgMarginLeftN7 {
    margin-left: calc(var(--bt) * -7);
  }

  .lgPaddingY7 {
    padding-bottom: calc(var(--bt) * 7);
    padding-top: calc(var(--bt) * 7);
  }

  .lgPaddingX7 {
    padding-left: calc(var(--bt) * 7);
    padding-right: calc(var(--bt) * 7);
  }

  html:not([dir="rtl"]) .lgMarginStart8 {
    margin-left: calc(var(--bt) * 8);
  }

  html:not([dir="rtl"]) .lgMarginEnd8 {
    margin-right: calc(var(--bt) * 8);
  }

  html[dir="rtl"] .lgMarginStart8 {
    margin-right: calc(var(--bt) * 8);
  }

  html[dir="rtl"] .lgMarginEnd8 {
    margin-left: calc(var(--bt) * 8);
  }

  html:not([dir="rtl"]) .lgMarginStartN8 {
    margin-left: calc(var(--bt) * -8);
  }

  html:not([dir="rtl"]) .lgMarginEndN8 {
    margin-right: calc(var(--bt) * -8);
  }

  html[dir="rtl"] .lgMarginStartN8 {
    margin-right: calc(var(--bt) * -8);
  }

  html[dir="rtl"] .lgMarginEndN8 {
    margin-left: calc(var(--bt) * -8);
  }

  .lgMarginTop8 {
    margin-top: calc(var(--bt) * 8);
  }

  .lgMarginRight8 {
    margin-right: calc(var(--bt) * 8);
  }

  .lgMarginBottom8 {
    margin-bottom: calc(var(--bt) * 8);
  }

  .lgMarginLeft8 {
    margin-left: calc(var(--bt) * 8);
  }

  .lgMarginTopN8 {
    margin-top: calc(var(--bt) * -8);
  }

  .lgMarginRightN8 {
    margin-right: calc(var(--bt) * -8);
  }

  .lgMarginBottomN8 {
    margin-bottom: calc(var(--bt) * -8);
  }

  .lgMarginLeftN8 {
    margin-left: calc(var(--bt) * -8);
  }

  .lgPaddingY8 {
    padding-bottom: calc(var(--bt) * 8);
    padding-top: calc(var(--bt) * 8);
  }

  .lgPaddingX8 {
    padding-left: calc(var(--bt) * 8);
    padding-right: calc(var(--bt) * 8);
  }

  html:not([dir="rtl"]) .lgMarginStart9 {
    margin-left: calc(var(--bt) * 9);
  }

  html:not([dir="rtl"]) .lgMarginEnd9 {
    margin-right: calc(var(--bt) * 9);
  }

  html[dir="rtl"] .lgMarginStart9 {
    margin-right: calc(var(--bt) * 9);
  }

  html[dir="rtl"] .lgMarginEnd9 {
    margin-left: calc(var(--bt) * 9);
  }

  html:not([dir="rtl"]) .lgMarginStartN9 {
    margin-left: calc(var(--bt) * -9);
  }

  html:not([dir="rtl"]) .lgMarginEndN9 {
    margin-right: calc(var(--bt) * -9);
  }

  html[dir="rtl"] .lgMarginStartN9 {
    margin-right: calc(var(--bt) * -9);
  }

  html[dir="rtl"] .lgMarginEndN9 {
    margin-left: calc(var(--bt) * -9);
  }

  .lgMarginTop9 {
    margin-top: calc(var(--bt) * 9);
  }

  .lgMarginRight9 {
    margin-right: calc(var(--bt) * 9);
  }

  .lgMarginBottom9 {
    margin-bottom: calc(var(--bt) * 9);
  }

  .lgMarginLeft9 {
    margin-left: calc(var(--bt) * 9);
  }

  .lgMarginTopN9 {
    margin-top: calc(var(--bt) * -9);
  }

  .lgMarginRightN9 {
    margin-right: calc(var(--bt) * -9);
  }

  .lgMarginBottomN9 {
    margin-bottom: calc(var(--bt) * -9);
  }

  .lgMarginLeftN9 {
    margin-left: calc(var(--bt) * -9);
  }

  .lgPaddingY9 {
    padding-bottom: calc(var(--bt) * 9);
    padding-top: calc(var(--bt) * 9);
  }

  .lgPaddingX9 {
    padding-left: calc(var(--bt) * 9);
    padding-right: calc(var(--bt) * 9);
  }

  html:not([dir="rtl"]) .lgMarginStart10 {
    margin-left: calc(var(--bt) * 10);
  }

  html:not([dir="rtl"]) .lgMarginEnd10 {
    margin-right: calc(var(--bt) * 10);
  }

  html[dir="rtl"] .lgMarginStart10 {
    margin-right: calc(var(--bt) * 10);
  }

  html[dir="rtl"] .lgMarginEnd10 {
    margin-left: calc(var(--bt) * 10);
  }

  html:not([dir="rtl"]) .lgMarginStartN10 {
    margin-left: calc(var(--bt) * -10);
  }

  html:not([dir="rtl"]) .lgMarginEndN10 {
    margin-right: calc(var(--bt) * -10);
  }

  html[dir="rtl"] .lgMarginStartN10 {
    margin-right: calc(var(--bt) * -10);
  }

  html[dir="rtl"] .lgMarginEndN10 {
    margin-left: calc(var(--bt) * -10);
  }

  .lgMarginTop10 {
    margin-top: calc(var(--bt) * 10);
  }

  .lgMarginRight10 {
    margin-right: calc(var(--bt) * 10);
  }

  .lgMarginBottom10 {
    margin-bottom: calc(var(--bt) * 10);
  }

  .lgMarginLeft10 {
    margin-left: calc(var(--bt) * 10);
  }

  .lgMarginTopN10 {
    margin-top: calc(var(--bt) * -10);
  }

  .lgMarginRightN10 {
    margin-right: calc(var(--bt) * -10);
  }

  .lgMarginBottomN10 {
    margin-bottom: calc(var(--bt) * -10);
  }

  .lgMarginLeftN10 {
    margin-left: calc(var(--bt) * -10);
  }

  .lgPaddingY10 {
    padding-bottom: calc(var(--bt) * 10);
    padding-top: calc(var(--bt) * 10);
  }

  .lgPaddingX10 {
    padding-left: calc(var(--bt) * 10);
    padding-right: calc(var(--bt) * 10);
  }

  html:not([dir="rtl"]) .lgMarginStart11 {
    margin-left: calc(var(--bt) * 11);
  }

  html:not([dir="rtl"]) .lgMarginEnd11 {
    margin-right: calc(var(--bt) * 11);
  }

  html[dir="rtl"] .lgMarginStart11 {
    margin-right: calc(var(--bt) * 11);
  }

  html[dir="rtl"] .lgMarginEnd11 {
    margin-left: calc(var(--bt) * 11);
  }

  html:not([dir="rtl"]) .lgMarginStartN11 {
    margin-left: calc(var(--bt) * -11);
  }

  html:not([dir="rtl"]) .lgMarginEndN11 {
    margin-right: calc(var(--bt) * -11);
  }

  html[dir="rtl"] .lgMarginStartN11 {
    margin-right: calc(var(--bt) * -11);
  }

  html[dir="rtl"] .lgMarginEndN11 {
    margin-left: calc(var(--bt) * -11);
  }

  .lgMarginTop11 {
    margin-top: calc(var(--bt) * 11);
  }

  .lgMarginRight11 {
    margin-right: calc(var(--bt) * 11);
  }

  .lgMarginBottom11 {
    margin-bottom: calc(var(--bt) * 11);
  }

  .lgMarginLeft11 {
    margin-left: calc(var(--bt) * 11);
  }

  .lgMarginTopN11 {
    margin-top: calc(var(--bt) * -11);
  }

  .lgMarginRightN11 {
    margin-right: calc(var(--bt) * -11);
  }

  .lgMarginBottomN11 {
    margin-bottom: calc(var(--bt) * -11);
  }

  .lgMarginLeftN11 {
    margin-left: calc(var(--bt) * -11);
  }

  .lgPaddingY11 {
    padding-bottom: calc(var(--bt) * 11);
    padding-top: calc(var(--bt) * 11);
  }

  .lgPaddingX11 {
    padding-left: calc(var(--bt) * 11);
    padding-right: calc(var(--bt) * 11);
  }

  html:not([dir="rtl"]) .lgMarginStart12 {
    margin-left: calc(var(--bt) * 12);
  }

  html:not([dir="rtl"]) .lgMarginEnd12 {
    margin-right: calc(var(--bt) * 12);
  }

  html[dir="rtl"] .lgMarginStart12 {
    margin-right: calc(var(--bt) * 12);
  }

  html[dir="rtl"] .lgMarginEnd12 {
    margin-left: calc(var(--bt) * 12);
  }

  html:not([dir="rtl"]) .lgMarginStartN12 {
    margin-left: calc(var(--bt) * -12);
  }

  html:not([dir="rtl"]) .lgMarginEndN12 {
    margin-right: calc(var(--bt) * -12);
  }

  html[dir="rtl"] .lgMarginStartN12 {
    margin-right: calc(var(--bt) * -12);
  }

  html[dir="rtl"] .lgMarginEndN12 {
    margin-left: calc(var(--bt) * -12);
  }

  .lgMarginTop12 {
    margin-top: calc(var(--bt) * 12);
  }

  .lgMarginRight12 {
    margin-right: calc(var(--bt) * 12);
  }

  .lgMarginBottom12 {
    margin-bottom: calc(var(--bt) * 12);
  }

  .lgMarginLeft12 {
    margin-left: calc(var(--bt) * 12);
  }

  .lgMarginTopN12 {
    margin-top: calc(var(--bt) * -12);
  }

  .lgMarginRightN12 {
    margin-right: calc(var(--bt) * -12);
  }

  .lgMarginBottomN12 {
    margin-bottom: calc(var(--bt) * -12);
  }

  .lgMarginLeftN12 {
    margin-left: calc(var(--bt) * -12);
  }

  .lgPaddingY12 {
    padding-bottom: calc(var(--bt) * 12);
    padding-top: calc(var(--bt) * 12);
  }

  .lgPaddingX12 {
    padding-left: calc(var(--bt) * 12);
    padding-right: calc(var(--bt) * 12);
  }
}

/* column */

.col {
  vertical-align: top;
}

.xsCol1 {
  width: calc(1 / var(--ncols) * 100%);
}

.xsCol2 {
  width: calc(2 / var(--ncols) * 100%);
}

.xsCol3 {
  width: calc(3 / var(--ncols) * 100%);
}

.xsCol4 {
  width: calc(4 / var(--ncols) * 100%);
}

.xsCol5 {
  width: calc(5 / var(--ncols) * 100%);
}

.xsCol6 {
  width: calc(6 / var(--ncols) * 100%);
}

.xsCol7 {
  width: calc(7 / var(--ncols) * 100%);
}

.xsCol8 {
  width: calc(8 / var(--ncols) * 100%);
}

.xsCol9 {
  width: calc(9 / var(--ncols) * 100%);
}

.xsCol10 {
  width: calc(10 / var(--ncols) * 100%);
}

.xsCol11 {
  width: calc(11 / var(--ncols) * 100%);
}

.xsCol12 {
  width: calc(12 / var(--ncols) * 100%);
}

@media (${breakpoints.sm}) {
  .smCol1 {
    width: calc(1 / var(--ncols) * 100%);
  }

  .smCol2 {
    width: calc(2 / var(--ncols) * 100%);
  }

  .smCol3 {
    width: calc(3 / var(--ncols) * 100%);
  }

  .smCol4 {
    width: calc(4 / var(--ncols) * 100%);
  }

  .smCol5 {
    width: calc(5 / var(--ncols) * 100%);
  }

  .smCol6 {
    width: calc(6 / var(--ncols) * 100%);
  }

  .smCol7 {
    width: calc(7 / var(--ncols) * 100%);
  }

  .smCol8 {
    width: calc(8 / var(--ncols) * 100%);
  }

  .smCol9 {
    width: calc(9 / var(--ncols) * 100%);
  }

  .smCol10 {
    width: calc(10 / var(--ncols) * 100%);
  }

  .smCol11 {
    width: calc(11 / var(--ncols) * 100%);
  }

  .smCol12 {
    width: calc(12 / var(--ncols) * 100%);
  }
}

@media (${breakpoints.md}) {
  .mdCol1 {
    width: calc(1 / var(--ncols) * 100%);
  }

  .mdCol2 {
    width: calc(2 / var(--ncols) * 100%);
  }

  .mdCol3 {
    width: calc(3 / var(--ncols) * 100%);
  }

  .mdCol4 {
    width: calc(4 / var(--ncols) * 100%);
  }

  .mdCol5 {
    width: calc(5 / var(--ncols) * 100%);
  }

  .mdCol6 {
    width: calc(6 / var(--ncols) * 100%);
  }

  .mdCol7 {
    width: calc(7 / var(--ncols) * 100%);
  }

  .mdCol8 {
    width: calc(8 / var(--ncols) * 100%);
  }

  .mdCol9 {
    width: calc(9 / var(--ncols) * 100%);
  }

  .mdCol10 {
    width: calc(10 / var(--ncols) * 100%);
  }

  .mdCol11 {
    width: calc(11 / var(--ncols) * 100%);
  }

  .mdCol12 {
    width: calc(12 / var(--ncols) * 100%);
  }
}

@media (${breakpoints.lg}) {
  .lgCol1 {
    width: calc(1 / var(--ncols) * 100%);
  }

  .lgCol2 {
    width: calc(2 / var(--ncols) * 100%);
  }

  .lgCol3 {
    width: calc(3 / var(--ncols) * 100%);
  }

  .lgCol4 {
    width: calc(4 / var(--ncols) * 100%);
  }

  .lgCol5 {
    width: calc(5 / var(--ncols) * 100%);
  }

  .lgCol6 {
    width: calc(6 / var(--ncols) * 100%);
  }

  .lgCol7 {
    width: calc(7 / var(--ncols) * 100%);
  }

  .lgCol8 {
    width: calc(8 / var(--ncols) * 100%);
  }

  .lgCol9 {
    width: calc(9 / var(--ncols) * 100%);
  }

  .lgCol10 {
    width: calc(10 / var(--ncols) * 100%);
  }

  .lgCol11 {
    width: calc(11 / var(--ncols) * 100%);
  }

  .lgCol12 {
    width: calc(12 / var(--ncols) * 100%);
  }
}

/* Typography */

/* aliasing */

.antialiased {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

/* fonts */

.sansSerif {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto Oxygen-Sans,
    Ubuntu, Cantarell, “Fira Sans”, “Droid Sans”, "Helvetica Neue", Helvetica,
    "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo,
    "ＭＳ Ｐゴシック", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
}

:lang(ja) .sansSerif {
  font-family: "SF Pro JP", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto Oxygen-Sans, Ubuntu, Cantarell, “Fira Sans”, “Droid Sans”,
    "Helvetica Neue", Helvetica, "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  quotes: "「" "」";
}

/* kerning */

.letterSpacing {
  letter-spacing: -0.4px;
}

/* leading */

.leadingShort {
  line-height: 1.2;
}

.leadingTall {
  line-height: 1.5;
}

/* font weight */

.fontWeightNormal {
  font-weight: normal;
}

.fontWeightBold {
  font-weight: 700;
}

/* emphasis */

.fontStyleRegular {
  font-style: normal;
}

.fontStyleItalic {
  font-style: italic;
}

/* decorations */

.underline {
  text-decoration: underline;
}

.noUnderline {
  text-decoration: none;
}

/* overflow */

.breakWord {
  hyphens: auto;
  word-wrap: break-word;
}

.truncate {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* alignment */

html:not([dir="rtl"]) .alignLeft {
  text-align: left;
}

html[dir="rtl"] .alignLeft {
  text-align: right;
}

html:not([dir="rtl"]) .alignRight {
  text-align: right;
}

html[dir="rtl"] .alignRight {
  text-align: left;
}

.alignCenter {
  text-align: center;
}

.textJustify {
  text-align: justify;
}


/** Inter UI **/

@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/Inter-UI/Inter-UI-Regular.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-Regular.woff") format("woff");
}
@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 400;
  src: url("../fonts/Inter-UI/Inter-UI-Italic.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-Italic.woff") format("woff");
}

@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 500;
  src: url("../fonts/Inter-UI/Inter-UI-Medium.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-Medium.woff") format("woff");
}
@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 500;
  src: url("../fonts/Inter-UI/Inter-UI-MediumItalic.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-MediumItalic.woff") format("woff");
}

@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 600;
  src: url("../fonts/Inter-UI/Inter-UI-SemiBold.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-SemiBold.woff") format("woff");
}
@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 600;
  src: url("../fonts/Inter-UI/Inter-UI-SemiBoldItalic.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-SemiBoldItalic.woff") format("woff");
}

@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 700;
  src: url("../fonts/Inter-UI/Inter-UI-Bold.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-Bold.woff") format("woff");
}
@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 700;
  src: url("../fonts/Inter-UI/Inter-UI-BoldItalic.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-BoldItalic.woff") format("woff");
}

@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 800;
  src: url("../fonts/Inter-UI/Inter-UI-ExtraBold.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-ExtraBold.woff") format("woff");
}
@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 800;
  src: url("../fonts/Inter-UI/Inter-UI-ExtraBoldItalic.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-ExtraBoldItalic.woff") format("woff");
}

@font-face {
  font-family: "Inter UI";
  font-style: normal;
  font-weight: 900;
  src: url("../fonts/Inter-UI/Inter-UI-Black.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-Black.woff") format("woff");
}
@font-face {
  font-family: "Inter UI";
  font-style: italic;
  font-weight: 900;
  src: url("../fonts/Inter-UI/Inter-UI-BlackItalic.woff2") format("woff2"),
    url("../fonts/Inter-UI/Inter-UI-BlackItalic.woff") format("woff");
}

@font-face {
  font-family: "Inter UI var";
  font-weight: 400 900;
  font-style: oblique 0deg 10deg;
  src: url("../fonts/Inter-UI/Inter-UI.var.woff2") format("woff2-variations"),
    url("../fonts/Inter-UI/Inter-UI.var.woff2") format("woff2");
}

@font-face {
  font-family: "Inter UI var alt";
  font-weight: 400 900;
  font-style: normal;
  font-named-instance: "Regular";
  src: url("../fonts/Inter-UI/Inter-UI-upright.var.woff2")
      format("woff2 supports variations(gvar)"),
    url("../fonts/Inter-UI/Inter-UI-upright.var.woff2")
      format("woff2-variations"),
    url("../fonts/Inter-UI/Inter-UI-upright.var.woff2") format("woff2");
}
@font-face {
  font-family: "Inter UI var alt";
  font-weight: 400 900;
  font-style: italic;
  font-named-instance: "Italic";
  src: url("../fonts/Inter-UI/Inter-UI-italic.var.woff2")
      format("woff2 supports variations(gvar)"),
    url("../fonts/Inter-UI/Inter-UI-italic.var.woff2")
      format("woff2-variations"),
    url("../fonts/Inter-UI/Inter-UI-italic.var.woff2") format("woff2");
}

/** Exim icon **/

@font-face {
  font-family: "exim-icon";
  src: url("../fonts/exim-icon/exim-icon.ttf?tf5y0p") format("truetype"),
    url("../fonts/exim-icon/exim-icon.woff?tf5y0p") format("woff"),
    url("../fonts/exim-icon/exim-icon.svg?tf5y0p#exim-icon") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="i-"],
[class*=" i-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "exim-icon" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.i-duo-activity .path1:before {
  content: "\e900";
  color: rgb(255, 227, 191);
}
.i-duo-activity .path2:before {
  content: "\e901";
  margin-left: -1em;
  color: rgb(233, 164, 84);
}
.i-duo-governance .path1:before {
  content: "\e902";
  color: rgb(104, 125, 116);
}
.i-duo-governance .path2:before {
  content: "\e903";
  margin-left: -1em;
  color: rgb(199, 217, 210);
}
.i-duo-identity .path1:before {
  content: "\e904";
  color: rgb(187, 221, 241);
}
.i-duo-identity .path2:before {
  content: "\e905";
  margin-left: -1em;
  color: rgb(78, 131, 160);
}
.i-duo-members .path1:before {
  content: "\e906";
  color: rgb(244, 234, 214);
}
.i-duo-members .path2:before {
  content: "\e907";
  margin-left: -1em;
  color: rgb(110, 100, 89);
}
.i-duo-members .path3:before {
  content: "\e908";
  margin-left: -1em;
  color: rgb(217, 209, 200);
}
.i-duo-members .path4:before {
  content: "\e909";
  margin-left: -1em;
  color: rgb(204, 192, 169);
}
.i-duo-members .path5:before {
  content: "\e90a";
  margin-left: -1em;
  color: rgb(200, 181, 152);
}
.i-duo-not-tilted .path1:before {
  content: "\e90b";
  color: rgb(255, 227, 191);
}
.i-duo-not-tilted .path2:before {
  content: "\e90c";
  margin-left: -1em;
  color: rgb(233, 164, 84);
}
.i-duo-wallet .path1:before {
  content: "\e90d";
  color: rgb(214, 195, 180);
}
.i-duo-wallet .path2:before {
  content: "\e90e";
  margin-left: -1em;
  color: rgb(128, 108, 94);
}
.i-thin-fingerprint:before {
  content: "\e964";
  /* color: #888f9a; */
}
.i-thin-key:before {
  content: "\e965";
  /* color: #888f9a; */
}
.i-thin-lock:before {
  content: "\e966";
  /* color: #888f9a; */
}
.i-thin-passcode:before {
  content: "\e967";
  /* color: #888f9a; */
}
.i-thin-password-security:before {
  content: "\e968";
  /* color: #888f9a; */
}
.i-thin-shield .path1:before {
  content: "\e969";
  /* color: rgb(136, 143, 154); */
}
.i-thin-shield .path2:before {
  content: "\e96a";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-candidate:before {
  content: "\e96b";
  /* color: #888f9a; */
}
.i-thin-cycle:before {
  content: "\e96c";
  /* color: #888f9a; */
}
.i-thin-demotion:before {
  content: "\e96d";
  /* color: #888f9a; */
}
.i-thin-governance:before {
  content: "\e96e";
  /* color: #888f9a; */
}
.i-thin-kyc-validated:before {
  content: "\e96f";
  /* color: #888f9a; */
}
.i-thin-promotion:before {
  content: "\e970";
  /* color: #888f9a; */
}
.i-thin-token-claim .path1:before {
  content: "\e971";
  /* color: rgb(136, 143, 154); */
}
.i-thin-token-claim .path2:before {
  content: "\e972";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-vote:before {
  content: "\e973";
  /* color: #888f9a; */
}
.i-thin-blockmaker:before {
  content: "\e974";
  /* color: #888f9a; */
}
.i-thin-gas:before {
  content: "\e975";
  /* color: #888f9a; */
}
.i-thin-seed-phrase:before {
  content: "\e976";
  /* color: #888f9a; */
}
.i-thin-transfer:before {
  content: "\e977";
  /* color: #888f9a; */
}
.i-thin-tx-status .path1:before {
  content: "\e978";
  /* color: rgb(136, 143, 154); */
}
.i-thin-tx-status .path2:before {
  content: "\e979";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-wallet:before {
  content: "\e97a";
  /* color: #888f9a; */
}
.i-thin-avatar:before {
  content: "\e97b";
  /* color: #888f9a; */
}
.i-thin-book:before {
  content: "\e97c";
  /* color: #888f9a; */
}
.i-thin-broadcast:before {
  content: "\e97d";
  /* color: #888f9a; */
}
.i-thin-calendar:before {
  content: "\e97e";
  /* color: #888f9a; */
}
.i-thin-camera:before {
  content: "\e97f";
  /* color: #888f9a; */
}
.i-thin-check:before {
  content: "\e980";
  /* color: #888f9a; */
}
.i-thin-clipboard:before {
  content: "\e981";
  /* color: #888f9a; */
}
.i-thin-description:before {
  content: "\e982";
  /* color: #888f9a; */
}
.i-thin-email:before {
  content: "\e983";
  /* color: #888f9a; */
}
.i-thin-environment:before {
  content: "\e984";
  /* color: #888f9a; */
}
.i-thin-EXC-logo .path1:before {
  content: "\e985";
  /* color: rgb(136, 143, 154); */
}
.i-thin-EXC-logo .path2:before {
  content: "\e986";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-flag:before {
  content: "\e987";
  /* color: #888f9a; */
}
.i-thin-grid-view .path1:before {
  content: "\e988";
  /* color: rgb(136, 143, 154); */
}
.i-thin-grid-view .path2:before {
  content: "\e989";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-help:before {
  content: "\e98a";
  /* color: #888f9a; */
}
.i-thin-hidden .path1:before {
  content: "\e98b";
  /* color: rgb(136, 143, 154); */
}
.i-thin-hidden .path2:before {
  content: "\e98c";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-home:before {
  content: "\e98d";
  /* color: #888f9a; */
}
.i-thin-hourglass .path1:before {
  content: "\e98e";
  /* color: rgb(136, 143, 154); */
}
.i-thin-hourglass .path2:before {
  content: "\e98f";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-info .path1:before {
  content: "\e990";
  /* color: rgb(136, 143, 154); */
}
.i-thin-info .path2:before {
  content: "\e991";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-language:before {
  content: "\e992";
  /* color: #888f9a; */
}
.i-thin-list-view:before {
  content: "\e993";
  /* color: #888f9a; */
}
.i-thin-loading:before {
  content: "\e994";
  /* color: #888f9a; */
}
.i-thin-media:before {
  content: "\e995";
  /* color: #888f9a; */
}
.i-thin-members:before {
  content: "\e996";
  /* color: #888f9a; */
}
.i-thin-menu:before {
  content: "\e997";
  /* color: #888f9a; */
}
.i-thin-more .path1:before {
  content: "\e998";
  /* color: rgb(136, 143, 154); */
}
.i-thin-more .path2:before {
  content: "\e999";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-notification:before {
  content: "\e99a";
  /* color: #888f9a; */
}
.i-thin-organization:before {
  content: "\e99b";
  /* color: #888f9a; */
}
.i-thin-privacy-policy:before {
  content: "\e99c";
  /* color: #888f9a; */
}
.i-thin-qr-code .path1:before {
  content: "\e99d";
  /* color: rgb(136, 143, 154); */
}
.i-thin-qr-code .path2:before {
  content: "\e99e";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-receive .path1:before {
  content: "\e99f";
  /* color: rgb(136, 143, 154); */
}
.i-thin-receive .path2:before {
  content: "\e9a0";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-ruler:before {
  content: "\e9a1";
  /* color: #888f9a; */
}
.i-thin-send .path1:before {
  content: "\e9a2";
  /* color: rgb(136, 143, 154); */
}
.i-thin-send .path2:before {
  content: "\e9a3";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-settings:before {
  content: "\e9a4";
  /* color: #888f9a; */
}
.i-thin-signature .path1:before {
  content: "\e9a5";
  /* color: rgb(136, 143, 154); */
}
.i-thin-signature .path2:before {
  content: "\e9a6";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-stats:before {
  content: "\e9a7";
  /* color: #888f9a; */
}
.i-thin-tally:before {
  content: "\e9a8";
  /* color: #888f9a; */
}
.i-thin-terms-of-service:before {
  content: "\e9a9";
  /* color: #888f9a; */
}
.i-thin-time .path1:before {
  content: "\e9aa";
  /* color: rgb(136, 143, 154); */
}
.i-thin-time .path2:before {
  content: "\e9ab";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-user:before {
  content: "\e9ac";
  /* color: #888f9a; */
}
.i-thin-visible .path1:before {
  content: "\e9ad";
  /* color: rgb(136, 143, 154); */
}
.i-thin-visible .path2:before {
  content: "\e9ae";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-warning .path1:before {
  content: "\e9af";
  /* color: rgb(136, 143, 154); */
}
.i-thin-warning .path2:before {
  content: "\e9b0";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-work:before {
  content: "\e9b1";
  /* color: #888f9a; */
}
.i-thin-world:before {
  content: "\e9b2";
  /* color: #888f9a; */
}
.i-thin-back-ios:before {
  content: "\e9b3";
  /* color: #888f9a; */
}
.i-thin-downward .path1:before {
  content: "\e9b4";
  /* color: rgb(136, 143, 154); */
}
.i-thin-downward .path2:before {
  content: "\e9b5";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-drop-down:before {
  content: "\e9b6";
  /* color: #888f9a; */
}
.i-thin-drop-up:before {
  content: "\e9b7";
  /* color: #888f9a; */
}
.i-thin-forward-ios:before {
  content: "\e9b8";
  /* color: #888f9a; */
}
.i-thin-keyboard-down:before {
  content: "\e9b9";
  /* color: #888f9a; */
}
.i-thin-keyboard-left:before {
  content: "\e9ba";
  /* color: #888f9a; */
}
.i-thin-keyboard-right:before {
  content: "\e9bb";
  /* color: #888f9a; */
}
.i-thin-keyboard-up:before {
  content: "\e9bc";
  /* color: #888f9a; */
}
.i-thin-left:before {
  content: "\e9bd";
  /* color: #888f9a; */
}
.i-thin-right-alt:before {
  content: "\e9be";
  /* color: #888f9a; */
}
.i-thin-right:before {
  content: "\e9bf";
  /* color: #888f9a; */
}
.i-thin-upward .path1:before {
  content: "\e9c0";
  /* color: rgb(136, 143, 154); */
}
.i-thin-upward .path2:before {
  content: "\e9c1";
  margin-left: -1em;
  /* color: rgb(255, 255, 255); */
}
.i-thin-add:before {
  content: "\e9c2";
  /* color: #888f9a; */
}
.i-thin-backspace:before {
  content: "\e9c3";
  /* color: #888f9a; */
}
.i-thin-close:before {
  content: "\e9c4";
  /* color: #888f9a; */
}
.i-thin-copy:before {
  content: "\e9c5";
  /* color: #888f9a; */
}
.i-thin-edit:before {
  content: "\e9c6";
  /* color: #888f9a; */
}
.i-thin-filter:before {
  content: "\e9c7";
  /* color: #888f9a; */
}
.i-thin-minus:before {
  content: "\e9c8";
  /* color: #888f9a; */
}
.i-thin-search:before {
  content: "\e9c9";
  /* color: #888f9a; */
}
.i-thin-trash:before {
  content: "\e9ca";
  /* color: #888f9a; */
}
.i-fingerprint:before {
  content: "\e90f";
}
.i-key:before {
  content: "\e910";
}
.i-lock:before {
  content: "\e911";
}
.i-passcode:before {
  content: "\e912";
}
.i-password-security:before {
  content: "\e913";
}
.i-shield:before {
  content: "\e914";
}
.i-candidate:before {
  content: "\e915";
}
.i-cycle:before {
  content: "\e916";
}
.i-demotion:before {
  content: "\e917";
}
.i-governance:before {
  content: "\e918";
}
.i-kyc-validated:before {
  content: "\e919";
}
.i-promotion:before {
  content: "\e91a";
}
.i-token-claim:before {
  content: "\e91b";
}
.i-vote:before {
  content: "\e91c";
}
.i-blockmaker:before {
  content: "\e91d";
}
.i-gas:before {
  content: "\e91e";
}
.i-seed-phrase:before {
  content: "\e91f";
}
.i-transfer:before {
  content: "\e920";
}
.i-tx-status:before {
  content: "\e921";
}
.i-wallet:before {
  content: "\e922";
}
.i-avatar:before {
  content: "\e923";
}
.i-book:before {
  content: "\e924";
}
.i-broadcast:before {
  content: "\e925";
}
.i-calendar:before {
  content: "\e926";
}
.i-camera:before {
  content: "\e927";
}
.i-check:before {
  content: "\e928";
}
.i-clipboard:before {
  content: "\e929";
}
.i-description:before {
  content: "\e92a";
}
.i-email:before {
  content: "\e92b";
}
.i-environment:before {
  content: "\e92c";
}
.i-EXC-logo:before {
  content: "\e92d";
}
.i-flag:before {
  content: "\e92e";
}
.i-grid-view:before {
  content: "\e92f";
}
.i-help:before {
  content: "\e930";
}
.i-hidden:before {
  content: "\e931";
}
.i-home:before {
  content: "\e932";
}
.i-hourglass:before {
  content: "\e933";
}
.i-info:before {
  content: "\e934";
}
.i-language:before {
  content: "\e935";
}
.i-list-view:before {
  content: "\e936";
}
.i-loading:before {
  content: "\e937";
}
.i-media:before {
  content: "\e938";
}
.i-members:before {
  content: "\e939";
}
.i-menu:before {
  content: "\e93a";
}
.i-more:before {
  content: "\e93b";
}
.i-notification:before {
  content: "\e93c";
}
.i-organization:before {
  content: "\e93d";
}
.i-privacy-policy:before {
  content: "\e93e";
}
.i-qr-code:before {
  content: "\e93f";
}
.i-receive:before {
  content: "\e940";
}
.i-ruler:before {
  content: "\e941";
}
.i-send:before {
  content: "\e942";
}
.i-settings:before {
  content: "\e943";
}
.i-signature:before {
  content: "\e944";
}
.i-stats:before {
  content: "\e945";
}
.i-tally:before {
  content: "\e946";
}
.i-terms-of-service:before {
  content: "\e947";
}
.i-time:before {
  content: "\e948";
}
.i-user:before {
  content: "\e949";
}
.i-visible:before {
  content: "\e94a";
}
.i-warning:before {
  content: "\e94b";
}
.i-work:before {
  content: "\e94c";
}
.i-world:before {
  content: "\e94d";
}
.i-back-ios:before {
  content: "\e94e";
}
.i-downward:before {
  content: "\e94f";
}
.i-drop-down:before {
  content: "\e950";
}
.i-drop-up:before {
  content: "\e951";
}
.i-forward-ios:before {
  content: "\e952";
}
.i-keyboard-down:before {
  content: "\e953";
}
.i-keyboard-left:before {
  content: "\e954";
}
.i-keyboard-right:before {
  content: "\e955";
}
.i-keyboard-up:before {
  content: "\e956";
}
.i-left:before {
  content: "\e957";
}
.i-right-alt:before {
  content: "\e958";
}
.i-right:before {
  content: "\e959";
}
.i-upward:before {
  content: "\e95a";
}
.i-add:before {
  content: "\e95b";
}
.i-backspace:before {
  content: "\e95c";
}
.i-close:before {
  content: "\e95d";
}
.i-copy:before {
  content: "\e95e";
}
.i-edit:before {
  content: "\e95f";
}
.i-filter:before {
  content: "\e960";
}
.i-minus:before {
  content: "\e961";
}
.i-search:before {
  content: "\e962";
}
.i-trash:before {
  content: "\e963";
}


.Heading {
  --font-size-1: 24px;
  --font-size-2: 36px;
  --font-size-3: 48px;
  --font-size-4: 64px;
  --font-size-5: 96px;
  font-family: "Inter UI";
  margin-bottom: 0;
  margin-top: 0;
}

.fontSize1 {
  font-size: var(--font-size-1);
}

.fontSize2 {
  font-size: var(--font-size-2);
}

.fontSize3 {
  font-size: var(--font-size-3);
}

.fontSize4 {
  font-size: var(--font-size-4);
}

.fontSize5 {
  font-size: var(--font-size-5);
}

@media (${breakpoints.sm}) {
  .smFontSize1 {
    font-size: var(--font-size-1);
  }

  .smFontSize2 {
    font-size: var(--font-size-2);
  }

  .smFontSize3 {
    font-size: var(--font-size-3);
  }

  .smFontSize4 {
    font-size: var(--font-size-4);
  }

  .smFontSize5 {
    font-size: var(--font-size-5);
  }
}

@media (${breakpoints.md}) {
  .mdFontSize1 {
    font-size: var(--font-size-1);
  }

  .mdFontSize2 {
    font-size: var(--font-size-2);
  }

  .mdFontSize3 {
    font-size: var(--font-size-3);
  }

  .mdFontSize4 {
    font-size: var(--font-size-4);
  }

  .mdFontSize5 {
    font-size: var(--font-size-5);
  }
}

@media (${breakpoints.lg}) {
  .lgFontSize1 {
    font-size: var(--font-size-1);
  }

  .lgFontSize2 {
    font-size: var(--font-size-2);
  }

  .lgFontSize3 {
    font-size: var(--font-size-3);
  }

  .lgFontSize4 {
    font-size: var(--font-size-4);
  }

  .lgFontSize5 {
    font-size: var(--font-size-5);
  }
}

`;
