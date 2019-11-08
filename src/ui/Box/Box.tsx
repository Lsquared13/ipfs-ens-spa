import * as React from "react";
import StyledBox from "./StyledBox";
import { StringDictionary, FunctionDictionary, AnyDictionary } from '../shared';
import {
  concat,
  fromClassName,
  fromInlineStyle,
  identity,
  mapClassName,
  toProps
} from "./style";
import {
  union,
  bind,
  range,
  toggle,
  mapping,
  rangeWithoutZero
} from "./transform";

let styles:StringDictionary = {
  box: "box",
  xsDisplayNone: "xsDisplayNone",
  xsDisplayFlex: "xsDisplayFlex",
  xsDisplayBlock: "xsDisplayBlock",
  xsDisplayInlineBlock: "xsDisplayInlineBlock",
  xsDisplayVisuallyHidden: "xsDisplayVisuallyHidden",
  xsDirectionRow: "xsDirectionRow",
  xsDirectionColumn: "xsDirectionColumn",
  xsCol0: "xsCol0",
  xsCol1: "xsCol1",
  xsCol2: "xsCol2",
  xsCol3: "xsCol3",
  xsCol4: "xsCol4",
  xsCol5: "xsCol5",
  xsCol6: "xsCol6",
  xsCol7: "xsCol7",
  xsCol8: "xsCol8",
  xsCol9: "xsCol9",
  xsCol10: "xsCol10",
  xsCol11: "xsCol11",
  xsCol12: "xsCol12",
  smDisplayNone: "smDisplayNone",
  smDisplayFlex: "smDisplayFlex",
  smDisplayBlock: "smDisplayBlock",
  smDisplayInlineBlock: "smDisplayInlineBlock",
  smDisplayVisuallyHidden: "smDisplayVisuallyHidden",
  smDirectionRow: "smDirectionRow",
  smDirectionColumn: "smDirectionColumn",
  smCol0: "smCol0",
  smCol1: "smCol1",
  smCol2: "smCol2",
  smCol3: "smCol3",
  smCol4: "smCol4",
  smCol5: "smCol5",
  smCol6: "smCol6",
  smCol7: "smCol7",
  smCol8: "smCol8",
  smCol9: "smCol9",
  smCol10: "smCol10",
  smCol11: "smCol11",
  smCol12: "smCol12",
  mdDisplayNone: "mdDisplayNone",
  mdDisplayFlex: "mdDisplayFlex",
  mdDisplayBlock: "mdDisplayBlock",
  mdDisplayInlineBlock: "mdDisplayInlineBlock",
  mdDisplayVisuallyHidden: "mdDisplayVisuallyHidden",
  mdDirectionRow: "mdDirectionRow",
  mdDirectionColumn: "mdDirectionColumn",
  mdCol0: "mdCol0",
  mdCol1: "mdCol1",
  mdCol2: "mdCol2",
  mdCol3: "mdCol3",
  mdCol4: "mdCol4",
  mdCol5: "mdCol5",
  mdCol6: "mdCol6",
  mdCol7: "mdCol7",
  mdCol8: "mdCol8",
  mdCol9: "mdCol9",
  mdCol10: "mdCol10",
  mdCol11: "mdCol11",
  mdCol12: "mdCol12",
  lgDisplayNone: "lgDisplayNone",
  lgDisplayFlex: "lgDisplayFlex",
  lgDisplayBlock: "lgDisplayBlock",
  lgDisplayInlineBlock: "lgDisplayInlineBlock",
  lgDisplayVisuallyHidden: "lgDisplayVisuallyHidden",
  lgDirectionRow: "lgDirectionRow",
  lgDirectionColumn: "lgDirectionColumn",
  lgCol0: "lgCol0",
  lgCol1: "lgCol1",
  lgCol2: "lgCol2",
  lgCol3: "lgCol3",
  lgCol4: "lgCol4",
  lgCol5: "lgCol5",
  lgCol6: "lgCol6",
  lgCol7: "lgCol7",
  lgCol8: "lgCol8",
  lgCol9: "lgCol9",
  lgCol10: "lgCol10",
  lgCol11: "lgCol11",
  lgCol12: "lgCol12"
};

let whitespaceLegacy:StringDictionary = {
  mlAuto: "mlAuto",
  mrAuto: "mrAuto",
  m0: "m0",
  mt0: "mt0",
  mr0: "mr0",
  mb0: "mb0",
  ml0: "ml0",
  p0: "p0",
  px0: "px0",
  py0: "py0",
  m1: "m1",
  mt1: "mt1",
  mr1: "mr1",
  mb1: "mb1",
  ml1: "ml1",
  mn1: "mn1",
  mtn1: "mtn1",
  mbn1: "mbn1",
  mln1: "mln1",
  mrn1: "mrn1",
  mxn1: "mxn1",
  myn1: "myn1",
  p1: "p1",
  px1: "px1",
  py1: "py1",
  m2: "m2",
  mt2: "mt2",
  mr2: "mr2",
  mb2: "mb2",
  ml2: "ml2",
  mn2: "mn2",
  mtn2: "mtn2",
  mbn2: "mbn2",
  mln2: "mln2",
  mrn2: "mrn2",
  mxn2: "mxn2",
  myn2: "myn2",
  p2: "p2",
  px2: "px2",
  py2: "py2",
  m3: "m3",
  mt3: "mt3",
  mr3: "mr3",
  mb3: "mb3",
  ml3: "ml3",
  mn3: "mn3",
  mtn3: "mtn3",
  mbn3: "mbn3",
  mln3: "mln3",
  mrn3: "mrn3",
  mxn3: "mxn3",
  myn3: "myn3",
  p3: "p3",
  px3: "px3",
  py3: "py3",
  m4: "m4",
  mt4: "mt4",
  mr4: "mr4",
  mb4: "mb4",
  ml4: "ml4",
  mn4: "mn4",
  mtn4: "mtn4",
  mbn4: "mbn4",
  mln4: "mln4",
  mrn4: "mrn4",
  mxn4: "mxn4",
  myn4: "myn4",
  p4: "p4",
  px4: "px4",
  py4: "py4",
  m5: "m5",
  mt5: "mt5",
  mr5: "mr5",
  mb5: "mb5",
  ml5: "ml5",
  mn5: "mn5",
  mtn5: "mtn5",
  mbn5: "mbn5",
  mln5: "mln5",
  mrn5: "mrn5",
  mxn5: "mxn5",
  myn5: "myn5",
  p5: "p5",
  px5: "px5",
  py5: "py5",
  m6: "m6",
  mt6: "mt6",
  mr6: "mr6",
  mb6: "mb6",
  ml6: "ml6",
  mn6: "mn6",
  mtn6: "mtn6",
  mbn6: "mbn6",
  mln6: "mln6",
  mrn6: "mrn6",
  mxn6: "mxn6",
  myn6: "myn6",
  p6: "p6",
  px6: "px6",
  py6: "py6"
};

let layout:StringDictionary = {
  block: "block",
  inline: "inline",
  inlineBlock: "inlineBlock",
  table: "table",
  overflowHidden: "overflowHidden",
  overflowScroll: "overflowScroll",
  overflowScrollX: "overflowScrollX",
  overflowScrollY: "overflowScrollY",
  overflowAuto: "overflowAuto",
  fit: "fit",
  relative: "relative",
  fixed: "fixed",
  absolute: "absolute",
  sticky: "sticky",
  top0: "top0",
  right0: "right0",
  bottom0: "bottom0",
  left0: "left0",
  small: "small",
  medium: "medium",
  large: "large",
  borderBox: "borderBox",
  contentBox: "contentBox",
  flex: "flex",
  smFlex: "smFlex",
  mdFlex: "mdFlex",
  lgFlex: "lgFlex",
  flexColumn: "flexColumn",
  flexWrap: "flexWrap",
  itemsStart: "itemsStart",
  itemsEnd: "itemsEnd",
  itemsCenter: "itemsCenter",
  itemsBaseline: "itemsBaseline",
  itemsStretch: "itemsStretch",
  selfStart: "selfStart",
  selfEnd: "selfEnd",
  selfCenter: "selfCenter",
  selfBaseline: "selfBaseline",
  selfStretch: "selfStretch",
  justifyStart: "justifyStart",
  justifyEnd: "justifyEnd",
  justifyCenter: "justifyCenter",
  justifyBetween: "justifyBetween",
  justifyAround: "justifyAround",
  contentStart: "contentStart",
  contentEnd: "contentEnd",
  contentCenter: "contentCenter",
  contentBetween: "contentBetween",
  contentAround: "contentAround",
  contentStretch: "contentStretch",
  flexGrow: "flexGrow",
  flexNone: "flexNone",
  orderFirst: "orderFirst",
  orderLast: "orderLast"
};

let whitespace:StringDictionary = {
  marginStart1: "marginStart1",
  marginEnd1: "marginEnd1",
  marginStartN1: "marginStartN1",
  marginEndN1: "marginEndN1",
  marginTop1: "marginTop1",
  marginRight1: "marginRight1",
  marginBottom1: "marginBottom1",
  marginLeft1: "marginLeft1",
  marginTopN1: "marginTopN1",
  marginRightN1: "marginRightN1",
  marginBottomN1: "marginBottomN1",
  marginLeftN1: "marginLeftN1",
  paddingY1: "paddingY1",
  paddingX1: "paddingX1",
  marginStart2: "marginStart2",
  marginEnd2: "marginEnd2",
  marginStartN2: "marginStartN2",
  marginEndN2: "marginEndN2",
  marginTop2: "marginTop2",
  marginRight2: "marginRight2",
  marginBottom2: "marginBottom2",
  marginLeft2: "marginLeft2",
  marginTopN2: "marginTopN2",
  marginRightN2: "marginRightN2",
  marginBottomN2: "marginBottomN2",
  marginLeftN2: "marginLeftN2",
  paddingY2: "paddingY2",
  paddingX2: "paddingX2",
  marginStart3: "marginStart3",
  marginEnd3: "marginEnd3",
  marginStartN3: "marginStartN3",
  marginEndN3: "marginEndN3",
  marginTop3: "marginTop3",
  marginRight3: "marginRight3",
  marginBottom3: "marginBottom3",
  marginLeft3: "marginLeft3",
  marginTopN3: "marginTopN3",
  marginRightN3: "marginRightN3",
  marginBottomN3: "marginBottomN3",
  marginLeftN3: "marginLeftN3",
  paddingY3: "paddingY3",
  paddingX3: "paddingX3",
  marginStart4: "marginStart4",
  marginEnd4: "marginEnd4",
  marginStartN4: "marginStartN4",
  marginEndN4: "marginEndN4",
  marginTop4: "marginTop4",
  marginRight4: "marginRight4",
  marginBottom4: "marginBottom4",
  marginLeft4: "marginLeft4",
  marginTopN4: "marginTopN4",
  marginRightN4: "marginRightN4",
  marginBottomN4: "marginBottomN4",
  marginLeftN4: "marginLeftN4",
  paddingY4: "paddingY4",
  paddingX4: "paddingX4",
  marginStart5: "marginStart5",
  marginEnd5: "marginEnd5",
  marginStartN5: "marginStartN5",
  marginEndN5: "marginEndN5",
  marginTop5: "marginTop5",
  marginRight5: "marginRight5",
  marginBottom5: "marginBottom5",
  marginLeft5: "marginLeft5",
  marginTopN5: "marginTopN5",
  marginRightN5: "marginRightN5",
  marginBottomN5: "marginBottomN5",
  marginLeftN5: "marginLeftN5",
  paddingY5: "paddingY5",
  paddingX5: "paddingX5",
  marginStart6: "marginStart6",
  marginEnd6: "marginEnd6",
  marginStartN6: "marginStartN6",
  marginEndN6: "marginEndN6",
  marginTop6: "marginTop6",
  marginRight6: "marginRight6",
  marginBottom6: "marginBottom6",
  marginLeft6: "marginLeft6",
  marginTopN6: "marginTopN6",
  marginRightN6: "marginRightN6",
  marginBottomN6: "marginBottomN6",
  marginLeftN6: "marginLeftN6",
  paddingY6: "paddingY6",
  paddingX6: "paddingX6",
  marginStart7: "marginStart7",
  marginEnd7: "marginEnd7",
  marginStartN7: "marginStartN7",
  marginEndN7: "marginEndN7",
  marginTop7: "marginTop7",
  marginRight7: "marginRight7",
  marginBottom7: "marginBottom7",
  marginLeft7: "marginLeft7",
  marginTopN7: "marginTopN7",
  marginRightN7: "marginRightN7",
  marginBottomN7: "marginBottomN7",
  marginLeftN7: "marginLeftN7",
  paddingY7: "paddingY7",
  paddingX7: "paddingX7",
  marginStart8: "marginStart8",
  marginEnd8: "marginEnd8",
  marginStartN8: "marginStartN8",
  marginEndN8: "marginEndN8",
  marginTop8: "marginTop8",
  marginRight8: "marginRight8",
  marginBottom8: "marginBottom8",
  marginLeft8: "marginLeft8",
  marginTopN8: "marginTopN8",
  marginRightN8: "marginRightN8",
  marginBottomN8: "marginBottomN8",
  marginLeftN8: "marginLeftN8",
  paddingY8: "paddingY8",
  paddingX8: "paddingX8",
  marginStart9: "marginStart9",
  marginEnd9: "marginEnd9",
  marginStartN9: "marginStartN9",
  marginEndN9: "marginEndN9",
  marginTop9: "marginTop9",
  marginRight9: "marginRight9",
  marginBottom9: "marginBottom9",
  marginLeft9: "marginLeft9",
  marginTopN9: "marginTopN9",
  marginRightN9: "marginRightN9",
  marginBottomN9: "marginBottomN9",
  marginLeftN9: "marginLeftN9",
  paddingY9: "paddingY9",
  paddingX9: "paddingX9",
  marginStart10: "marginStart10",
  marginEnd10: "marginEnd10",
  marginStartN10: "marginStartN10",
  marginEndN10: "marginEndN10",
  marginTop10: "marginTop10",
  marginRight10: "marginRight10",
  marginBottom10: "marginBottom10",
  marginLeft10: "marginLeft10",
  marginTopN10: "marginTopN10",
  marginRightN10: "marginRightN10",
  marginBottomN10: "marginBottomN10",
  marginLeftN10: "marginLeftN10",
  paddingY10: "paddingY10",
  paddingX10: "paddingX10",
  marginStart11: "marginStart11",
  marginEnd11: "marginEnd11",
  marginStartN11: "marginStartN11",
  marginEndN11: "marginEndN11",
  marginTop11: "marginTop11",
  marginRight11: "marginRight11",
  marginBottom11: "marginBottom11",
  marginLeft11: "marginLeft11",
  marginTopN11: "marginTopN11",
  marginRightN11: "marginRightN11",
  marginBottomN11: "marginBottomN11",
  marginLeftN11: "marginLeftN11",
  paddingY11: "paddingY11",
  paddingX11: "paddingX11",
  marginStart12: "marginStart12",
  marginEnd12: "marginEnd12",
  marginStartN12: "marginStartN12",
  marginEndN12: "marginEndN12",
  marginTop12: "marginTop12",
  marginRight12: "marginRight12",
  marginBottom12: "marginBottom12",
  marginLeft12: "marginLeft12",
  marginTopN12: "marginTopN12",
  marginRightN12: "marginRightN12",
  marginBottomN12: "marginBottomN12",
  marginLeftN12: "marginLeftN12",
  paddingY12: "paddingY12",
  paddingX12: "paddingX12",
  smMarginStart1: "smMarginStart1",
  smMarginEnd1: "smMarginEnd1",
  smMarginStartN1: "smMarginStartN1",
  smMarginEndN1: "smMarginEndN1",
  smMarginTop1: "smMarginTop1",
  smMarginRight1: "smMarginRight1",
  smMarginBottom1: "smMarginBottom1",
  smMarginLeft1: "smMarginLeft1",
  smMarginTopN1: "smMarginTopN1",
  smMarginRightN1: "smMarginRightN1",
  smMarginBottomN1: "smMarginBottomN1",
  smMarginLeftN1: "smMarginLeftN1",
  smPaddingY1: "smPaddingY1",
  smPaddingX1: "smPaddingX1",
  smMarginStart2: "smMarginStart2",
  smMarginEnd2: "smMarginEnd2",
  smMarginStartN2: "smMarginStartN2",
  smMarginEndN2: "smMarginEndN2",
  smMarginTop2: "smMarginTop2",
  smMarginRight2: "smMarginRight2",
  smMarginBottom2: "smMarginBottom2",
  smMarginLeft2: "smMarginLeft2",
  smMarginTopN2: "smMarginTopN2",
  smMarginRightN2: "smMarginRightN2",
  smMarginBottomN2: "smMarginBottomN2",
  smMarginLeftN2: "smMarginLeftN2",
  smPaddingY2: "smPaddingY2",
  smPaddingX2: "smPaddingX2",
  smMarginStart3: "smMarginStart3",
  smMarginEnd3: "smMarginEnd3",
  smMarginStartN3: "smMarginStartN3",
  smMarginEndN3: "smMarginEndN3",
  smMarginTop3: "smMarginTop3",
  smMarginRight3: "smMarginRight3",
  smMarginBottom3: "smMarginBottom3",
  smMarginLeft3: "smMarginLeft3",
  smMarginTopN3: "smMarginTopN3",
  smMarginRightN3: "smMarginRightN3",
  smMarginBottomN3: "smMarginBottomN3",
  smMarginLeftN3: "smMarginLeftN3",
  smPaddingY3: "smPaddingY3",
  smPaddingX3: "smPaddingX3",
  smMarginStart4: "smMarginStart4",
  smMarginEnd4: "smMarginEnd4",
  smMarginStartN4: "smMarginStartN4",
  smMarginEndN4: "smMarginEndN4",
  smMarginTop4: "smMarginTop4",
  smMarginRight4: "smMarginRight4",
  smMarginBottom4: "smMarginBottom4",
  smMarginLeft4: "smMarginLeft4",
  smMarginTopN4: "smMarginTopN4",
  smMarginRightN4: "smMarginRightN4",
  smMarginBottomN4: "smMarginBottomN4",
  smMarginLeftN4: "smMarginLeftN4",
  smPaddingY4: "smPaddingY4",
  smPaddingX4: "smPaddingX4",
  smMarginStart5: "smMarginStart5",
  smMarginEnd5: "smMarginEnd5",
  smMarginStartN5: "smMarginStartN5",
  smMarginEndN5: "smMarginEndN5",
  smMarginTop5: "smMarginTop5",
  smMarginRight5: "smMarginRight5",
  smMarginBottom5: "smMarginBottom5",
  smMarginLeft5: "smMarginLeft5",
  smMarginTopN5: "smMarginTopN5",
  smMarginRightN5: "smMarginRightN5",
  smMarginBottomN5: "smMarginBottomN5",
  smMarginLeftN5: "smMarginLeftN5",
  smPaddingY5: "smPaddingY5",
  smPaddingX5: "smPaddingX5",
  smMarginStart6: "smMarginStart6",
  smMarginEnd6: "smMarginEnd6",
  smMarginStartN6: "smMarginStartN6",
  smMarginEndN6: "smMarginEndN6",
  smMarginTop6: "smMarginTop6",
  smMarginRight6: "smMarginRight6",
  smMarginBottom6: "smMarginBottom6",
  smMarginLeft6: "smMarginLeft6",
  smMarginTopN6: "smMarginTopN6",
  smMarginRightN6: "smMarginRightN6",
  smMarginBottomN6: "smMarginBottomN6",
  smMarginLeftN6: "smMarginLeftN6",
  smPaddingY6: "smPaddingY6",
  smPaddingX6: "smPaddingX6",
  smMarginStart7: "smMarginStart7",
  smMarginEnd7: "smMarginEnd7",
  smMarginStartN7: "smMarginStartN7",
  smMarginEndN7: "smMarginEndN7",
  smMarginTop7: "smMarginTop7",
  smMarginRight7: "smMarginRight7",
  smMarginBottom7: "smMarginBottom7",
  smMarginLeft7: "smMarginLeft7",
  smMarginTopN7: "smMarginTopN7",
  smMarginRightN7: "smMarginRightN7",
  smMarginBottomN7: "smMarginBottomN7",
  smMarginLeftN7: "smMarginLeftN7",
  smPaddingY7: "smPaddingY7",
  smPaddingX7: "smPaddingX7",
  smMarginStart8: "smMarginStart8",
  smMarginEnd8: "smMarginEnd8",
  smMarginStartN8: "smMarginStartN8",
  smMarginEndN8: "smMarginEndN8",
  smMarginTop8: "smMarginTop8",
  smMarginRight8: "smMarginRight8",
  smMarginBottom8: "smMarginBottom8",
  smMarginLeft8: "smMarginLeft8",
  smMarginTopN8: "smMarginTopN8",
  smMarginRightN8: "smMarginRightN8",
  smMarginBottomN8: "smMarginBottomN8",
  smMarginLeftN8: "smMarginLeftN8",
  smPaddingY8: "smPaddingY8",
  smPaddingX8: "smPaddingX8",
  smMarginStart9: "smMarginStart9",
  smMarginEnd9: "smMarginEnd9",
  smMarginStartN9: "smMarginStartN9",
  smMarginEndN9: "smMarginEndN9",
  smMarginTop9: "smMarginTop9",
  smMarginRight9: "smMarginRight9",
  smMarginBottom9: "smMarginBottom9",
  smMarginLeft9: "smMarginLeft9",
  smMarginTopN9: "smMarginTopN9",
  smMarginRightN9: "smMarginRightN9",
  smMarginBottomN9: "smMarginBottomN9",
  smMarginLeftN9: "smMarginLeftN9",
  smPaddingY9: "smPaddingY9",
  smPaddingX9: "smPaddingX9",
  smMarginStart10: "smMarginStart10",
  smMarginEnd10: "smMarginEnd10",
  smMarginStartN10: "smMarginStartN10",
  smMarginEndN10: "smMarginEndN10",
  smMarginTop10: "smMarginTop10",
  smMarginRight10: "smMarginRight10",
  smMarginBottom10: "smMarginBottom10",
  smMarginLeft10: "smMarginLeft10",
  smMarginTopN10: "smMarginTopN10",
  smMarginRightN10: "smMarginRightN10",
  smMarginBottomN10: "smMarginBottomN10",
  smMarginLeftN10: "smMarginLeftN10",
  smPaddingY10: "smPaddingY10",
  smPaddingX10: "smPaddingX10",
  smMarginStart11: "smMarginStart11",
  smMarginEnd11: "smMarginEnd11",
  smMarginStartN11: "smMarginStartN11",
  smMarginEndN11: "smMarginEndN11",
  smMarginTop11: "smMarginTop11",
  smMarginRight11: "smMarginRight11",
  smMarginBottom11: "smMarginBottom11",
  smMarginLeft11: "smMarginLeft11",
  smMarginTopN11: "smMarginTopN11",
  smMarginRightN11: "smMarginRightN11",
  smMarginBottomN11: "smMarginBottomN11",
  smMarginLeftN11: "smMarginLeftN11",
  smPaddingY11: "smPaddingY11",
  smPaddingX11: "smPaddingX11",
  smMarginStart12: "smMarginStart12",
  smMarginEnd12: "smMarginEnd12",
  smMarginStartN12: "smMarginStartN12",
  smMarginEndN12: "smMarginEndN12",
  smMarginTop12: "smMarginTop12",
  smMarginRight12: "smMarginRight12",
  smMarginBottom12: "smMarginBottom12",
  smMarginLeft12: "smMarginLeft12",
  smMarginTopN12: "smMarginTopN12",
  smMarginRightN12: "smMarginRightN12",
  smMarginBottomN12: "smMarginBottomN12",
  smMarginLeftN12: "smMarginLeftN12",
  smPaddingY12: "smPaddingY12",
  smPaddingX12: "smPaddingX12",
  mdMarginStart1: "mdMarginStart1",
  mdMarginEnd1: "mdMarginEnd1",
  mdMarginStartN1: "mdMarginStartN1",
  mdMarginEndN1: "mdMarginEndN1",
  mdMarginTop1: "mdMarginTop1",
  mdMarginRight1: "mdMarginRight1",
  mdMarginBottom1: "mdMarginBottom1",
  mdMarginLeft1: "mdMarginLeft1",
  mdMarginTopN1: "mdMarginTopN1",
  mdMarginRightN1: "mdMarginRightN1",
  mdMarginBottomN1: "mdMarginBottomN1",
  mdMarginLeftN1: "mdMarginLeftN1",
  mdPaddingY1: "mdPaddingY1",
  mdPaddingX1: "mdPaddingX1",
  mdMarginStart2: "mdMarginStart2",
  mdMarginEnd2: "mdMarginEnd2",
  mdMarginStartN2: "mdMarginStartN2",
  mdMarginEndN2: "mdMarginEndN2",
  mdMarginTop2: "mdMarginTop2",
  mdMarginRight2: "mdMarginRight2",
  mdMarginBottom2: "mdMarginBottom2",
  mdMarginLeft2: "mdMarginLeft2",
  mdMarginTopN2: "mdMarginTopN2",
  mdMarginRightN2: "mdMarginRightN2",
  mdMarginBottomN2: "mdMarginBottomN2",
  mdMarginLeftN2: "mdMarginLeftN2",
  mdPaddingY2: "mdPaddingY2",
  mdPaddingX2: "mdPaddingX2",
  mdMarginStart3: "mdMarginStart3",
  mdMarginEnd3: "mdMarginEnd3",
  mdMarginStartN3: "mdMarginStartN3",
  mdMarginEndN3: "mdMarginEndN3",
  mdMarginTop3: "mdMarginTop3",
  mdMarginRight3: "mdMarginRight3",
  mdMarginBottom3: "mdMarginBottom3",
  mdMarginLeft3: "mdMarginLeft3",
  mdMarginTopN3: "mdMarginTopN3",
  mdMarginRightN3: "mdMarginRightN3",
  mdMarginBottomN3: "mdMarginBottomN3",
  mdMarginLeftN3: "mdMarginLeftN3",
  mdPaddingY3: "mdPaddingY3",
  mdPaddingX3: "mdPaddingX3",
  mdMarginStart4: "mdMarginStart4",
  mdMarginEnd4: "mdMarginEnd4",
  mdMarginStartN4: "mdMarginStartN4",
  mdMarginEndN4: "mdMarginEndN4",
  mdMarginTop4: "mdMarginTop4",
  mdMarginRight4: "mdMarginRight4",
  mdMarginBottom4: "mdMarginBottom4",
  mdMarginLeft4: "mdMarginLeft4",
  mdMarginTopN4: "mdMarginTopN4",
  mdMarginRightN4: "mdMarginRightN4",
  mdMarginBottomN4: "mdMarginBottomN4",
  mdMarginLeftN4: "mdMarginLeftN4",
  mdPaddingY4: "mdPaddingY4",
  mdPaddingX4: "mdPaddingX4",
  mdMarginStart5: "mdMarginStart5",
  mdMarginEnd5: "mdMarginEnd5",
  mdMarginStartN5: "mdMarginStartN5",
  mdMarginEndN5: "mdMarginEndN5",
  mdMarginTop5: "mdMarginTop5",
  mdMarginRight5: "mdMarginRight5",
  mdMarginBottom5: "mdMarginBottom5",
  mdMarginLeft5: "mdMarginLeft5",
  mdMarginTopN5: "mdMarginTopN5",
  mdMarginRightN5: "mdMarginRightN5",
  mdMarginBottomN5: "mdMarginBottomN5",
  mdMarginLeftN5: "mdMarginLeftN5",
  mdPaddingY5: "mdPaddingY5",
  mdPaddingX5: "mdPaddingX5",
  mdMarginStart6: "mdMarginStart6",
  mdMarginEnd6: "mdMarginEnd6",
  mdMarginStartN6: "mdMarginStartN6",
  mdMarginEndN6: "mdMarginEndN6",
  mdMarginTop6: "mdMarginTop6",
  mdMarginRight6: "mdMarginRight6",
  mdMarginBottom6: "mdMarginBottom6",
  mdMarginLeft6: "mdMarginLeft6",
  mdMarginTopN6: "mdMarginTopN6",
  mdMarginRightN6: "mdMarginRightN6",
  mdMarginBottomN6: "mdMarginBottomN6",
  mdMarginLeftN6: "mdMarginLeftN6",
  mdPaddingY6: "mdPaddingY6",
  mdPaddingX6: "mdPaddingX6",
  mdMarginStart7: "mdMarginStart7",
  mdMarginEnd7: "mdMarginEnd7",
  mdMarginStartN7: "mdMarginStartN7",
  mdMarginEndN7: "mdMarginEndN7",
  mdMarginTop7: "mdMarginTop7",
  mdMarginRight7: "mdMarginRight7",
  mdMarginBottom7: "mdMarginBottom7",
  mdMarginLeft7: "mdMarginLeft7",
  mdMarginTopN7: "mdMarginTopN7",
  mdMarginRightN7: "mdMarginRightN7",
  mdMarginBottomN7: "mdMarginBottomN7",
  mdMarginLeftN7: "mdMarginLeftN7",
  mdPaddingY7: "mdPaddingY7",
  mdPaddingX7: "mdPaddingX7",
  mdMarginStart8: "mdMarginStart8",
  mdMarginEnd8: "mdMarginEnd8",
  mdMarginStartN8: "mdMarginStartN8",
  mdMarginEndN8: "mdMarginEndN8",
  mdMarginTop8: "mdMarginTop8",
  mdMarginRight8: "mdMarginRight8",
  mdMarginBottom8: "mdMarginBottom8",
  mdMarginLeft8: "mdMarginLeft8",
  mdMarginTopN8: "mdMarginTopN8",
  mdMarginRightN8: "mdMarginRightN8",
  mdMarginBottomN8: "mdMarginBottomN8",
  mdMarginLeftN8: "mdMarginLeftN8",
  mdPaddingY8: "mdPaddingY8",
  mdPaddingX8: "mdPaddingX8",
  mdMarginStart9: "mdMarginStart9",
  mdMarginEnd9: "mdMarginEnd9",
  mdMarginStartN9: "mdMarginStartN9",
  mdMarginEndN9: "mdMarginEndN9",
  mdMarginTop9: "mdMarginTop9",
  mdMarginRight9: "mdMarginRight9",
  mdMarginBottom9: "mdMarginBottom9",
  mdMarginLeft9: "mdMarginLeft9",
  mdMarginTopN9: "mdMarginTopN9",
  mdMarginRightN9: "mdMarginRightN9",
  mdMarginBottomN9: "mdMarginBottomN9",
  mdMarginLeftN9: "mdMarginLeftN9",
  mdPaddingY9: "mdPaddingY9",
  mdPaddingX9: "mdPaddingX9",
  mdMarginStart10: "mdMarginStart10",
  mdMarginEnd10: "mdMarginEnd10",
  mdMarginStartN10: "mdMarginStartN10",
  mdMarginEndN10: "mdMarginEndN10",
  mdMarginTop10: "mdMarginTop10",
  mdMarginRight10: "mdMarginRight10",
  mdMarginBottom10: "mdMarginBottom10",
  mdMarginLeft10: "mdMarginLeft10",
  mdMarginTopN10: "mdMarginTopN10",
  mdMarginRightN10: "mdMarginRightN10",
  mdMarginBottomN10: "mdMarginBottomN10",
  mdMarginLeftN10: "mdMarginLeftN10",
  mdPaddingY10: "mdPaddingY10",
  mdPaddingX10: "mdPaddingX10",
  mdMarginStart11: "mdMarginStart11",
  mdMarginEnd11: "mdMarginEnd11",
  mdMarginStartN11: "mdMarginStartN11",
  mdMarginEndN11: "mdMarginEndN11",
  mdMarginTop11: "mdMarginTop11",
  mdMarginRight11: "mdMarginRight11",
  mdMarginBottom11: "mdMarginBottom11",
  mdMarginLeft11: "mdMarginLeft11",
  mdMarginTopN11: "mdMarginTopN11",
  mdMarginRightN11: "mdMarginRightN11",
  mdMarginBottomN11: "mdMarginBottomN11",
  mdMarginLeftN11: "mdMarginLeftN11",
  mdPaddingY11: "mdPaddingY11",
  mdPaddingX11: "mdPaddingX11",
  mdMarginStart12: "mdMarginStart12",
  mdMarginEnd12: "mdMarginEnd12",
  mdMarginStartN12: "mdMarginStartN12",
  mdMarginEndN12: "mdMarginEndN12",
  mdMarginTop12: "mdMarginTop12",
  mdMarginRight12: "mdMarginRight12",
  mdMarginBottom12: "mdMarginBottom12",
  mdMarginLeft12: "mdMarginLeft12",
  mdMarginTopN12: "mdMarginTopN12",
  mdMarginRightN12: "mdMarginRightN12",
  mdMarginBottomN12: "mdMarginBottomN12",
  mdMarginLeftN12: "mdMarginLeftN12",
  mdPaddingY12: "mdPaddingY12",
  mdPaddingX12: "mdPaddingX12",
  lgMarginStart1: "lgMarginStart1",
  lgMarginEnd1: "lgMarginEnd1",
  lgMarginStartN1: "lgMarginStartN1",
  lgMarginEndN1: "lgMarginEndN1",
  lgMarginTop1: "lgMarginTop1",
  lgMarginRight1: "lgMarginRight1",
  lgMarginBottom1: "lgMarginBottom1",
  lgMarginLeft1: "lgMarginLeft1",
  lgMarginTopN1: "lgMarginTopN1",
  lgMarginRightN1: "lgMarginRightN1",
  lgMarginBottomN1: "lgMarginBottomN1",
  lgMarginLeftN1: "lgMarginLeftN1",
  lgPaddingY1: "lgPaddingY1",
  lgPaddingX1: "lgPaddingX1",
  lgMarginStart2: "lgMarginStart2",
  lgMarginEnd2: "lgMarginEnd2",
  lgMarginStartN2: "lgMarginStartN2",
  lgMarginEndN2: "lgMarginEndN2",
  lgMarginTop2: "lgMarginTop2",
  lgMarginRight2: "lgMarginRight2",
  lgMarginBottom2: "lgMarginBottom2",
  lgMarginLeft2: "lgMarginLeft2",
  lgMarginTopN2: "lgMarginTopN2",
  lgMarginRightN2: "lgMarginRightN2",
  lgMarginBottomN2: "lgMarginBottomN2",
  lgMarginLeftN2: "lgMarginLeftN2",
  lgPaddingY2: "lgPaddingY2",
  lgPaddingX2: "lgPaddingX2",
  lgMarginStart3: "lgMarginStart3",
  lgMarginEnd3: "lgMarginEnd3",
  lgMarginStartN3: "lgMarginStartN3",
  lgMarginEndN3: "lgMarginEndN3",
  lgMarginTop3: "lgMarginTop3",
  lgMarginRight3: "lgMarginRight3",
  lgMarginBottom3: "lgMarginBottom3",
  lgMarginLeft3: "lgMarginLeft3",
  lgMarginTopN3: "lgMarginTopN3",
  lgMarginRightN3: "lgMarginRightN3",
  lgMarginBottomN3: "lgMarginBottomN3",
  lgMarginLeftN3: "lgMarginLeftN3",
  lgPaddingY3: "lgPaddingY3",
  lgPaddingX3: "lgPaddingX3",
  lgMarginStart4: "lgMarginStart4",
  lgMarginEnd4: "lgMarginEnd4",
  lgMarginStartN4: "lgMarginStartN4",
  lgMarginEndN4: "lgMarginEndN4",
  lgMarginTop4: "lgMarginTop4",
  lgMarginRight4: "lgMarginRight4",
  lgMarginBottom4: "lgMarginBottom4",
  lgMarginLeft4: "lgMarginLeft4",
  lgMarginTopN4: "lgMarginTopN4",
  lgMarginRightN4: "lgMarginRightN4",
  lgMarginBottomN4: "lgMarginBottomN4",
  lgMarginLeftN4: "lgMarginLeftN4",
  lgPaddingY4: "lgPaddingY4",
  lgPaddingX4: "lgPaddingX4",
  lgMarginStart5: "lgMarginStart5",
  lgMarginEnd5: "lgMarginEnd5",
  lgMarginStartN5: "lgMarginStartN5",
  lgMarginEndN5: "lgMarginEndN5",
  lgMarginTop5: "lgMarginTop5",
  lgMarginRight5: "lgMarginRight5",
  lgMarginBottom5: "lgMarginBottom5",
  lgMarginLeft5: "lgMarginLeft5",
  lgMarginTopN5: "lgMarginTopN5",
  lgMarginRightN5: "lgMarginRightN5",
  lgMarginBottomN5: "lgMarginBottomN5",
  lgMarginLeftN5: "lgMarginLeftN5",
  lgPaddingY5: "lgPaddingY5",
  lgPaddingX5: "lgPaddingX5",
  lgMarginStart6: "lgMarginStart6",
  lgMarginEnd6: "lgMarginEnd6",
  lgMarginStartN6: "lgMarginStartN6",
  lgMarginEndN6: "lgMarginEndN6",
  lgMarginTop6: "lgMarginTop6",
  lgMarginRight6: "lgMarginRight6",
  lgMarginBottom6: "lgMarginBottom6",
  lgMarginLeft6: "lgMarginLeft6",
  lgMarginTopN6: "lgMarginTopN6",
  lgMarginRightN6: "lgMarginRightN6",
  lgMarginBottomN6: "lgMarginBottomN6",
  lgMarginLeftN6: "lgMarginLeftN6",
  lgPaddingY6: "lgPaddingY6",
  lgPaddingX6: "lgPaddingX6",
  lgMarginStart7: "lgMarginStart7",
  lgMarginEnd7: "lgMarginEnd7",
  lgMarginStartN7: "lgMarginStartN7",
  lgMarginEndN7: "lgMarginEndN7",
  lgMarginTop7: "lgMarginTop7",
  lgMarginRight7: "lgMarginRight7",
  lgMarginBottom7: "lgMarginBottom7",
  lgMarginLeft7: "lgMarginLeft7",
  lgMarginTopN7: "lgMarginTopN7",
  lgMarginRightN7: "lgMarginRightN7",
  lgMarginBottomN7: "lgMarginBottomN7",
  lgMarginLeftN7: "lgMarginLeftN7",
  lgPaddingY7: "lgPaddingY7",
  lgPaddingX7: "lgPaddingX7",
  lgMarginStart8: "lgMarginStart8",
  lgMarginEnd8: "lgMarginEnd8",
  lgMarginStartN8: "lgMarginStartN8",
  lgMarginEndN8: "lgMarginEndN8",
  lgMarginTop8: "lgMarginTop8",
  lgMarginRight8: "lgMarginRight8",
  lgMarginBottom8: "lgMarginBottom8",
  lgMarginLeft8: "lgMarginLeft8",
  lgMarginTopN8: "lgMarginTopN8",
  lgMarginRightN8: "lgMarginRightN8",
  lgMarginBottomN8: "lgMarginBottomN8",
  lgMarginLeftN8: "lgMarginLeftN8",
  lgPaddingY8: "lgPaddingY8",
  lgPaddingX8: "lgPaddingX8",
  lgMarginStart9: "lgMarginStart9",
  lgMarginEnd9: "lgMarginEnd9",
  lgMarginStartN9: "lgMarginStartN9",
  lgMarginEndN9: "lgMarginEndN9",
  lgMarginTop9: "lgMarginTop9",
  lgMarginRight9: "lgMarginRight9",
  lgMarginBottom9: "lgMarginBottom9",
  lgMarginLeft9: "lgMarginLeft9",
  lgMarginTopN9: "lgMarginTopN9",
  lgMarginRightN9: "lgMarginRightN9",
  lgMarginBottomN9: "lgMarginBottomN9",
  lgMarginLeftN9: "lgMarginLeftN9",
  lgPaddingY9: "lgPaddingY9",
  lgPaddingX9: "lgPaddingX9",
  lgMarginStart10: "lgMarginStart10",
  lgMarginEnd10: "lgMarginEnd10",
  lgMarginStartN10: "lgMarginStartN10",
  lgMarginEndN10: "lgMarginEndN10",
  lgMarginTop10: "lgMarginTop10",
  lgMarginRight10: "lgMarginRight10",
  lgMarginBottom10: "lgMarginBottom10",
  lgMarginLeft10: "lgMarginLeft10",
  lgMarginTopN10: "lgMarginTopN10",
  lgMarginRightN10: "lgMarginRightN10",
  lgMarginBottomN10: "lgMarginBottomN10",
  lgMarginLeftN10: "lgMarginLeftN10",
  lgPaddingY10: "lgPaddingY10",
  lgPaddingX10: "lgPaddingX10",
  lgMarginStart11: "lgMarginStart11",
  lgMarginEnd11: "lgMarginEnd11",
  lgMarginStartN11: "lgMarginStartN11",
  lgMarginEndN11: "lgMarginEndN11",
  lgMarginTop11: "lgMarginTop11",
  lgMarginRight11: "lgMarginRight11",
  lgMarginBottom11: "lgMarginBottom11",
  lgMarginLeft11: "lgMarginLeft11",
  lgMarginTopN11: "lgMarginTopN11",
  lgMarginRightN11: "lgMarginRightN11",
  lgMarginBottomN11: "lgMarginBottomN11",
  lgMarginLeftN11: "lgMarginLeftN11",
  lgPaddingY11: "lgPaddingY11",
  lgPaddingX11: "lgPaddingX11",
  lgMarginStart12: "lgMarginStart12",
  lgMarginEnd12: "lgMarginEnd12",
  lgMarginStartN12: "lgMarginStartN12",
  lgMarginEndN12: "lgMarginEndN12",
  lgMarginTop12: "lgMarginTop12",
  lgMarginRight12: "lgMarginRight12",
  lgMarginBottom12: "lgMarginBottom12",
  lgMarginLeft12: "lgMarginLeft12",
  lgMarginTopN12: "lgMarginTopN12",
  lgMarginRightN12: "lgMarginRightN12",
  lgMarginBottomN12: "lgMarginBottomN12",
  lgMarginLeftN12: "lgMarginLeftN12",
  lgPaddingY12: "lgPaddingY12",
  lgPaddingX12: "lgPaddingX12"
};

let borders:StringDictionary = {
  border: "border",
  borderTop: "borderTop",
  borderRight: "borderRight",
  borderBottom: "borderBottom",
  borderLeft: "borderLeft",
  square: "square",
  circle: "circle",
  pill: "pill",
  rounded: "rounded",
  roundedTop: "roundedTop",
  roundedRight: "roundedRight",
  roundedBottom: "roundedBottom",
  roundedLeft: "roundedLeft",
  noBorder: "noBorder"
};

let colors:StringDictionary = {
  red: "red",
  redBg: "redBg",
  white: "white",
  whiteBg: "whiteBg",
  lightGray: "lightGray",
  lightGrayBg: "lightGrayBg",
  gray: "gray",
  grayBg: "grayBg",
  darkGray: "darkGray",
  darkGrayBg: "darkGrayBg",
  green: "green",
  greenBg: "greenBg",
  pine: "pine",
  pineBg: "pineBg",
  olive: "olive",
  oliveBg: "oliveBg",
  blue: "blue",
  blueBg: "blueBg",
  navy: "navy",
  navyBg: "navyBg",
  midnight: "midnight",
  midnightBg: "midnightBg",
  purple: "purple",
  purpleBg: "purpleBg",
  orchid: "orchid",
  orchidBg: "orchidBg",
  eggplant: "eggplant",
  eggplantBg: "eggplantBg",
  maroon: "maroon",
  maroonBg: "maroonBg",
  watermelon: "watermelon",
  watermelonBg: "watermelonBg",
  orange: "orange",
  orangeBg: "orangeBg",
  transparentBg: "transparentBg",
  lightWashBg: "lightWashBg",
  darkWashBg: "darkWashBg"
};

/*
# ProTypes
Box's type definition is exhaustive. With the exception of `dangerouslySetInlineStyle`, 
values shouldn't be ambigious. That means that we have to type out things like boints, 
but that's also where Box's magic lies. Also, by putting in extra effort around type definitions here,
 we can skip extra runtime typechecks in the transformers for performance.
*/

type NatBoint = 1 | 2 | 3 | 4 | 5 | 6;
type IntBoint = -6 | -5 | -4 | -3 | -2 | -1 | NatBoint;
type Display = "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden";
type Direction = "row" | "column";
type Column = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ResponsiveProps = {
  column?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  display?: boolean | "flex" | "flexColumn" | "inlineBlock" |"block";
};
type Margin =
  | -12
  | -11
  | -10
  | -9
  | -8
  | -7
  | -6
  | -5
  | -4
  | -3
  | -2
  | -1
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;
type Padding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type BoxProps = {
  children?: React.ReactNode;
  dangerouslySetInlineStyle?: React.CSSProperties;

  xs?: ResponsiveProps;
  sm?: ResponsiveProps;
  md?: ResponsiveProps;
  lg?: ResponsiveProps;
  deprecatedPadding?: NatBoint | { x?: NatBoint; y?: NatBoint };
  deprecatedMargin?:
    | IntBoint
    | {
        top?: IntBoint;
        right?: IntBoint | "auto";
        bottom?: IntBoint;
        left?: IntBoint | "auto";
      };

  display?: Display;
  column?: Column;
  direction?: Direction;
  smDisplay?: Display;
  smColumn?: Column;
  smDirection?: Direction;
  mdDisplay?: Display;
  mdColumn?: Column;
  mdDirection?: Direction;
  lgDisplay?: Display;
  lgColumn?: Column;
  lgDirection?: Direction;
  /**
   * string, "start" | "end" | "center" | "between" | "around" | "stretch"
   * Aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
   * @default "stretch"
   **/
  alignContent?: "start" | "end" | "center" | "between" | "around" | "stretch";
  /**
   * string, "start" | "end" | "center" | "baseline" | "stretch"
   * Defines the default behaviour for how flex items are laid out along the cross-axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).
   * @default "stretch"
   **/
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  /**
   * string, "auto" | "start" | "end" | "center" | "baseline" | "stretch"
   * Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
   * @default "stretch"
   **/
  alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
  /**
   * boolean, bottom
   * @default false
   **/
  bottom?: boolean;
  /**
   * string,  "blue" | "darkGray" | "darkWash" | "eggplant" | "gray" | "green" | "lightGray" | "lightWash" | "maroon" | "midnight" | "navy" | "olive" | "orange" | "orchid" | "pine" | "purple" | "red" | "transparent" | "watermelon" | "white";
   * @default transparent
   **/
  color?:
    | "blue"
    | "darkGray"
    | "darkWash"
    | "eggplant"
    | "gray"
    | "green"
    | "lightGray"
    | "lightWash"
    | "maroon"
    | "midnight"
    | "navy"
    | "olive"
    | "orange"
    | "orchid"
    | "pine"
    | "purple"
    | "red"
    | "transparent"
    | "watermelon"
    | "white";
  /**
   * boolean, fit
   * @default false
   **/
  fit?: boolean;
  /**
   * string, "grow" | "shrink" | "none"
   * Defines how a flex item will be sized. "grow", equivalent to "flex: 1 1 auto", will size the Box relative to its parent, growing and shrinking based on available space. "shrink", equivalent to "flex: 0 1 auto" (the browser default), allows the Box to shrink if compressed but not grow if given extra space. Finally, "none", equivalent to "flex: 0 0 auto", preserves the Box's size based on child content regardless of its container's size.
   * @default shrink
   **/
  flex?: "grow" | "shrink" | "none";
  /**
   * string, number | string
   **/
  height?: number | string;
  /**
   * string, "start" | "end" | "center" | "between" | "around"
   * Defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.
   * @default start
   **/
  justifyContent?: "start" | "end" | "center" | "between" | "around";
  /**
   * boolean, left
   * @default false
   **/
  left?: boolean;

  /**
   * boolean, margin start
   * @default 0
   **/
  marginStart?: Margin;
  /**
   * boolean, margin end
   * @default 0
   **/
  marginEnd?: Margin;

  /**
   * boolean, margin
   * @default 0
   **/
  margin?: Margin;
  /**
   * boolean, margin top
   * @default 0
   **/
  marginTop?: Margin;
  /**
   * boolean, margin right
   * @default 0
   **/
  marginRight?: Margin;
  /**
   * boolean, margin button
   * @default 0
   **/
  marginBottom?: Margin;
  /**
   * boolean, margin left
   * @default 0
   **/
  marginLeft?: Margin;

  smMargin?: Margin;
  smMarginTop?: Margin;
  smMarginRight?: Margin;
  smMarginBottom?: Margin;
  smMarginLeft?: Margin;

  mdMargin?: Margin;
  mdMarginTop?: Margin;
  mdMarginRight?: Margin;
  mdMarginBottom?: Margin;
  mdMarginLeft?: Margin;

  lgMargin?: Margin;
  lgMarginTop?: Margin;
  lgMarginRight?: Margin;
  lgMarginBottom?: Margin;
  lgMarginLeft?: Margin;

  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;

  overflow?: "visible" | "hidden" | "scroll" | "scrollX" | "scrollY" | "auto";

  padding?: Padding;
  smPadding?: Padding;
  mdPadding?: Padding;
  lgPadding?: Padding;

  paddingX?: Padding;
  smPaddingX?: Padding;
  mdPaddingX?: Padding;
  lgPaddingX?: Padding;

  paddingY?: Padding;
  smPaddingY?: Padding;
  mdPaddingY?: Padding;
  lgPaddingY?: Padding;

  position?: "static" | "absolute" | "relative" | "fixed";
  right?: boolean;
  shape?:
    | "square"
    | "rounded"
    | "pill"
    | "circle"
    | "roundedTop"
    | "roundedBottom"
    | "roundedLeft"
    | "roundedRight";
  shrink?: boolean;
  top?: boolean;
  width?: number | string;
  wrap?: boolean;
};

// --

/*
# Transformers
This is where the meat and the bones of Box's transforms are. 
You can read more about the DSL in `./transforms.js`, 
but basically they are a small declarative way of specifying 
how a property (i.e. `marginTop={4}`) gets turned into a CSS class (`marginTop4`).
There's a little preamble here, but it culminates in a big object mapping the actual property names to the transformer values.
*/

const marginStart = bind(rangeWithoutZero("marginStart"), whitespace);
const marginEnd = bind(rangeWithoutZero("marginEnd"), whitespace);
const marginTop = bind(rangeWithoutZero("marginTop"), whitespace);
const marginRight = bind(rangeWithoutZero("marginRight"), whitespace);
const marginBottom = bind(rangeWithoutZero("marginBottom"), whitespace);
const marginLeft = bind(rangeWithoutZero("marginLeft"), whitespace);
const margin = union(marginTop, marginBottom, marginLeft, marginRight);

const smMarginTop = bind(rangeWithoutZero("smMarginTop"), whitespace);
const smMarginRight = bind(rangeWithoutZero("smMarginRight"), whitespace);
const smMarginBottom = bind(rangeWithoutZero("smMarginBottom"), whitespace);
const smMarginLeft = bind(rangeWithoutZero("smMarginLeft"), whitespace);
const smMargin = union(
  smMarginTop,
  smMarginBottom,
  smMarginLeft,
  smMarginRight
);

const mdMarginTop = bind(rangeWithoutZero("mdMarginTop"), whitespace);
const mdMarginRight = bind(rangeWithoutZero("mdMarginRight"), whitespace);
const mdMarginBottom = bind(rangeWithoutZero("mdMarginBottom"), whitespace);
const mdMarginLeft = bind(rangeWithoutZero("mdMarginLeft"), whitespace);
const mdMargin = union(
  mdMarginTop,
  mdMarginBottom,
  mdMarginLeft,
  mdMarginRight
);

const lgMarginTop = bind(rangeWithoutZero("lgMarginTop"), whitespace);
const lgMarginRight = bind(rangeWithoutZero("lgMarginRight"), whitespace);
const lgMarginBottom = bind(rangeWithoutZero("lgMarginBottom"), whitespace);
const lgMarginLeft = bind(rangeWithoutZero("lgMarginLeft"), whitespace);
const lgMargin = union(
  lgMarginTop,
  lgMarginBottom,
  lgMarginLeft,
  lgMarginRight
);

const paddingX = bind(rangeWithoutZero("paddingX"), whitespace);
const paddingY = bind(rangeWithoutZero("paddingY"), whitespace);
const padding = union(paddingX, paddingY);

const smPaddingX = bind(rangeWithoutZero("smPaddingX"), whitespace);
const smPaddingY = bind(rangeWithoutZero("smPaddingY"), whitespace);
const smPadding = union(smPaddingX, smPaddingY);

const mdPaddingX = bind(rangeWithoutZero("mdPaddingX"), whitespace);
const mdPaddingY = bind(rangeWithoutZero("mdPaddingY"), whitespace);
const mdPadding = union(mdPaddingX, mdPaddingY);

const lgPaddingX = bind(rangeWithoutZero("lgPaddingX"), whitespace);
const lgPaddingY = bind(rangeWithoutZero("lgPaddingY"), whitespace);
const lgPadding = union(lgPaddingX, lgPaddingY);

/*
These functions are legacy. 
I'd like to get rid of most of this file's dependency on importing `./style.js` directly once these are removed.
*/

const prefix = (pre: string) => mapClassName(name => `${pre}${name}`);
const display = (value: ResponsiveProps["display"] | BoxProps["display"]) => {
  switch (value) {
    case "flex":
      return fromClassName("DisplayFlex", "DirectionRow");
    case "flexColumn":
      return fromClassName("DisplayFlex", "DirectionColumn");
    case "inlineBlock":
      return fromClassName("DisplayInlineBlock");
    case "visuallyHidden":
      return fromClassName("DisplayVisuallyHidden");
    case false:
      return fromClassName("DisplayNone");
    default:
      return fromClassName("DisplayBlock");
  }
};
const column = range("Col");

const formatIntBoint = (x: number) =>
  x < 0 ? `n${Math.abs(x)}` : x.toString();

/*
It's preferable to put new properties into that object directly just so it's easier to read.
*/

const propToFn:FunctionDictionary = {
  xs: (value: BoxProps) => {
    if (!value) {
      return identity();
    }
    return mapClassName(c => styles[c])(
      prefix("xs")(
        concat([
          value.column ? column(value.column) : identity(),
          typeof value.display !== "undefined"
            ? display(value.display)
            : identity()
        ])
      )
    );
  },
  sm: (value: BoxProps) => {
    if (!value) {
      return identity();
    }
    return mapClassName(c => styles[c])(
      prefix("sm")(
        concat([
          value.column ? column(value.column) : identity(),
          typeof value.display !== "undefined"
            ? display(value.display)
            : identity()
        ])
      )
    );
  },
  md: (value: BoxProps) => {
    if (!value) {
      return identity();
    }
    return mapClassName(c => styles[c])(
      prefix("md")(
        concat([
          value.column ? column(value.column) : identity(),
          typeof value.display !== "undefined"
            ? display(value.display)
            : identity()
        ])
      )
    );
  },
  lg: (value: BoxProps) => {
    if (!value) {
      return identity();
    }
    return mapClassName(c => styles[c])(
      prefix("lg")(
        concat([
          value.column ? column(value.column) : identity(),
          typeof value.display !== "undefined"
            ? display(value.display)
            : identity()
        ])
      )
    );
  },

  display: mapping({
    none: styles.xsDisplayNone,
    flex: styles.xsDisplayFlex,
    block: styles.xsDisplayBlock,
    inlineBlock: styles.xsDisplayInlineBlock,
    visuallyHidden: styles.xsDisplayVisuallyHidden
  }),
  column: bind(range("xsCol"), styles),
  direction: mapping({
    row: styles.xsDirectionRow,
    column: styles.xsDirectionColumn
  }),

  smDisplay: mapping({
    none: styles.smDisplayNone,
    flex: styles.smDisplayFlex,
    block: styles.smDisplayBlock,
    inlineBlock: styles.smDisplayInlineBlock,
    visuallyHidden: styles.smDisplayVisuallyHidden
  }),
  smColumn: bind(range("smCol"), styles),
  smDirection: mapping({
    row: styles.smDirectionRow,
    column: styles.smDirectionColumn
  }),

  mdDisplay: mapping({
    none: styles.mdDisplayNone,
    flex: styles.mdDisplayFlex,
    block: styles.mdDisplayBlock,
    inlineBlock: styles.mdDisplayInlineBlock,
    visuallyHidden: styles.mdDisplayVisuallyHidden
  }),
  mdColumn: bind(range("mdCol"), styles),
  mdDirection: mapping({
    row: styles.mdDirectionRow,
    column: styles.mdDirectionColumn
  }),

  lgDisplay: mapping({
    none: styles.lgDisplayNone,
    flex: styles.lgDisplayFlex,
    block: styles.lgDisplayBlock,
    inlineBlock: styles.lgDisplayInlineBlock,
    visuallyHidden: styles.lgDisplayVisuallyHidden
  }),
  lgColumn: bind(range("lgCol"), styles),
  lgDirection: mapping({
    row: styles.lgDirectionRow,
    column: styles.lgDirectionColumn
  }),

  alignContent: mapping({
    start: layout.contentStart,
    end: layout.contentEnd,
    center: layout.contentCenter,
    between: layout.contentBetween,
    around: layout.contentAround
    // default: stretch
  }),
  alignItems: mapping({
    start: layout.itemsStart,
    end: layout.itemsEnd,
    center: layout.itemsCenter,
    baseline: layout.itemsBaseline
    // default: stretch
  }),
  alignSelf: mapping({
    start: layout.selfStart,
    end: layout.selfEnd,
    center: layout.selfCenter,
    baseline: layout.selfBaseline,
    stretch: layout.selfStretch
    // default: auto
  }),
  bottom: toggle(layout.bottom0),
  color: mapping({
    blue: colors.blueBg,
    darkGray: colors.darkGrayBg,
    pine: colors.pineBg,
    gray: colors.grayBg,
    red: colors.redBg,
    olive: colors.oliveBg,
    lightGray: colors.lightGrayBg,
    white: colors.whiteBg,
    orange: colors.orangeBg,
    green: colors.greenBg,
    navy: colors.navyBg,
    midnight: colors.midnightBg,
    purple: colors.purpleBg,
    orchid: colors.orchidBg,
    eggplant: colors.eggplantBg,
    maroon: colors.maroonBg,
    watermelon: colors.watermelonBg,
    lightWash: colors.lightWashBg,
    darkWash: colors.darkWashBg
    // default: transparent
  }),
  fit: toggle(layout.fit),
  flex: mapping({
    grow: layout.flexGrow,
    none: layout.flexNone
    // default: shrink
  }),
  height: (height: BoxProps["height"]) => fromInlineStyle({ height }),
  justifyContent: mapping({
    end: layout.justifyEnd,
    center: layout.justifyCenter,
    between: layout.justifyBetween,
    around: layout.justifyAround
    // default: start
  }),
  left: toggle(layout.left0),
  deprecatedMargin: (value: any) => {
    let mt = identity();
    let mb = identity();
    let ml = identity();
    let mr = identity();
    switch (typeof value) {
      case "number":
        return fromClassName(whitespaceLegacy[`m${formatIntBoint(value)}`]);
      case "object":
        if (value.top) {
          mt = fromClassName(
            whitespaceLegacy[`mt${formatIntBoint(value.top)}`]
          );
        }

        if (value.bottom) {
          mb = fromClassName(
            whitespaceLegacy[`mb${formatIntBoint(value.bottom)}`]
          );
        }

        if (value.left) {
          ml = fromClassName(
            value.left === "auto"
              ? whitespaceLegacy.mlAuto
              : whitespaceLegacy[`ml${formatIntBoint(value.left)}`]
          );
        }

        if (value.right) {
          mr = fromClassName(
            value.right === "auto"
              ? whitespaceLegacy.mrAuto
              : whitespaceLegacy[`mr${formatIntBoint(value.right)}`]
          );
        }
        return concat([mt, mb, ml, mr]);
      default:
        return identity();
    }
  },
  marginStart,
  marginEnd,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  smMargin,
  smMarginTop,
  smMarginRight,
  smMarginBottom,
  smMarginLeft,
  mdMargin,
  mdMarginTop,
  mdMarginRight,
  mdMarginBottom,
  mdMarginLeft,
  lgMargin,
  lgMarginTop,
  lgMarginRight,
  lgMarginBottom,
  lgMarginLeft,
  maxHeight: (maxHeight: BoxProps["maxHeight"]) =>
    fromInlineStyle({ maxHeight }),
  maxWidth: (maxWidth: BoxProps["maxWidth"]) => fromInlineStyle({ maxWidth }),
  minHeight: (minHeight: BoxProps["minHeight"]) =>
    fromInlineStyle({ minHeight }),
  minWidth: (minWidth: BoxProps["minWidth"]) => fromInlineStyle({ minWidth }),
  overflow: mapping({
    hidden: layout.overflowHidden,
    scroll: layout.overflowScroll,
    auto: layout.overflowAuto,
    scrollX: layout.overflowScrollX,
    scrollY: layout.overflowScrollY
    // default: visible
  }),
  deprecatedPadding: (value: any) => {
    switch (typeof value) {
      case "number":
        return fromClassName(whitespaceLegacy[`p${value}`]);
      case "object":
        return concat([
          value.x
            ? fromClassName(whitespaceLegacy[`px${value.x}`])
            : identity(),
          value.y ? fromClassName(whitespaceLegacy[`py${value.y}`]) : identity()
        ]);
      default:
        return identity();
    }
  },
  padding,
  paddingX,
  paddingY,
  smPadding,
  smPaddingX,
  smPaddingY,
  mdPadding,
  mdPaddingX,
  mdPaddingY,
  lgPadding,
  lgPaddingX,
  lgPaddingY,
  position: mapping({
    absolute: layout.absolute,
    relative: layout.relative,
    fixed: layout.fixed
    // default: static
  }),
  right: toggle(layout.right0),
  shape: mapping({
    circle: borders.circle,
    pill: borders.pill,
    rounded: borders.rounded,
    roundedBottom: borders.roundedBottom,
    roundedLeft: borders.roundedLeft,
    roundedRight: borders.roundedRight,
    roundedTop: borders.roundedTop
    // default: square
  }),
  top: toggle(layout.top0),
  width: (width: BoxProps["width"]) => fromInlineStyle({ width }),
  wrap: toggle(layout.flexWrap),
  dangerouslySetInlineStyle: (value: BoxProps["dangerouslySetInlineStyle"]) =>
    value ? fromInlineStyle(value) : identity()
};

/*
# The Component
*/

const contains = (key: string, arr: string[]) => arr.indexOf(key) >= 0;
const omit = (keys: string[], obj: BoxProps) =>
  Object.keys(obj).reduce((acc, k) => {
    if (contains(k, keys)) {
      return acc;
    }
    return {
      ...acc,
      [k]: obj[k]
    };
  }, {});

// $FlowIssue https://github.com/facebook/flow/issues/6103
export const Box = React.forwardRef(
  (
    { children, ...props }: BoxProps & React.HTMLAttributes<any>,
    ref: React.Ref<any>
  ) => {
    // Flow can't reason about the constant nature of Object.keys so we can't use
    // a functional (reduce) style here.

    // Box is a "pass-through" component, meaning that if you pass properties to
    // it that it doesn't know about (`aria-label` for instance) it passes
    // directly back to the underlying `<div/>`. That's generally useful, but
    // we'd also like to strip out a few naughty properties that break style
    // encapsulation (className, style).
    let blacklist = ["className", "style"];

    // All Box's are box-sized by default, so we start off building up the styles
    // to be applied with a Box base class.
    let s = fromClassName(styles.box);

    // This loops through each property and if it exists in the previously
    // defined transform map, concatentes the resulting styles to the base
    // styles. If there's a match, we also don't pass through that property. This
    // means Box's runtime is only dependent on the number of properties passed
    // to it (which is typically small) instead of the total number of possible
    // properties (~30 or so). While it may ~feel~ like Box is innefficient, its
    // biggest performance impact is on startup time because there's so much code
    // here.

    // eslint-disable-next-line no-restricted-syntax
    for (const prop in props) {
      if (Object.prototype.hasOwnProperty.call(propToFn, prop)) {
        const fn = propToFn[prop];
        const value = props[prop];
        blacklist = blacklist.concat(prop);
        s = concat([s, fn(value)]);
      }
    }

    // And... magic!
    return (
      <StyledBox {...omit(blacklist, props)} {...toProps(s)} innerRef={ref}>
        {children}
      </StyledBox>
    );
  }
);

export default Box;
