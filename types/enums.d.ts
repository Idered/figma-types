export declare type BlendMode =
  | "PASS_THROUGH"
  | "NORMAL"
  | "DARKEN"
  | "MULTIPLY"
  | "LINEAR_BURN"
  | "COLOR_BURN"
  | "LIGHTEN"
  | "SCREEN"
  | "LINEAR_DODGE"
  | "COLOR_DODGE"
  | "OVERLAY"
  | "SOFT_LIGHT"
  | "HARD_LIGHT"
  | "DIFFERENCE"
  | "EXCLUSION"
  | "HUE"
  | "SATURATION"
  | "COLOR"
  | "LUMINOSITY";
export declare type ConstraintType = "SCALE" | "WIDTH" | "HEIGHT";
export declare type EffectType =
  | "INNER_SHADOW"
  | "DROP_SHADOW"
  | "LAYER_BLUR"
  | "BACKGROUND_BLUR";
export declare type EasingType = "EASE_IN" | "EASE_OUT" | "EASE_IN_AND_OUT";
export declare type StyleType = "FILL" | "TEXT" | "EFFECT" | "GRID";
export declare type NodeType =
  | "DOCUMENT"
  | "CANVAS"
  | "FRAME"
  | "INSTANCE"
  | "RECTANGLE"
  | "GROUP"
  | "TEXT"
  | "VECTOR"
  | "BOOLEAN_OPERATION"
  | "STAR"
  | "LINE"
  | "ELLIPSE"
  | "REGULAR_POLYGON"
  | "SLICE"
  | "COMPONENT";
export declare type ScaleModeType = "FILL" | "FIT" | "TILE" | "STRETCH";
export declare type PaintType =
  | "SOLID"
  | "GRADIENT_LINEAR"
  | "GRADIENT_RADIAL"
  | "GRADIENT_ANGULAR"
  | "GRADIENT_DIAMOND"
  | "IMAGE"
  | "EMOJI";
export declare type BooleanOperationType =
  | "UNION"
  | "INTERSECT"
  | "SUBTRACT"
  | "EXCLUDE";
export declare type StrokeAlignType = "INSIDE" | "OUTSIDE" | "CENTER";
export declare type StrokeCapType =
  | "NONE"
  | "ROUND"
  | "SQUARE"
  | "LINE_ARROW"
  | "TRIANGLE_ARROW";
export declare type StrokeJoinType = "MITTER" | "BEVEL" | "ROUND";
export declare type LayoutConstraintVerticalType =
  | "TOP"
  | "BOTTOM"
  | "CENTER"
  | "TOP_BOTTOM"
  | "SCALE";
export declare type LayoutConstraintHorizontalType =
  | "LEFT"
  | "RIGHT"
  | "CENTER"
  | "LEFT_RIGHT"
  | "SCALE";
export declare type LayoutGridPatternType = "COLUMNS" | "ROWS" | "GRID";
export declare type LayoutGridAlignmentType = "MIN" | "STRETCH" | "CENTER";
export declare type TextCaseType = "ORIGINAL" | "UPPER" | "LOWER" | "TITLE";
export declare type TextDecorationType = "NONE" | "STRIKETHROUGH" | "UNDERLINE";
export declare type TextAlignHorizontalType =
  | "LEFT"
  | "RIGHT"
  | "CENTER"
  | "JUSTIFIED";
export declare type TextAlignVerticalType = "TOP" | "CENTER" | "BOTTOM";
export declare type LineHeightUnitType =
  | "PIXELS"
  | "FONT_SIZE_%"
  | "INTRINSIC_%";
