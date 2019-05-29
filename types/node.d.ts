import {Rectangle} from "./rectangle"
import {
  NodeType,
  BlendMode,
  BooleanOperationType,
  StrokeAlignType,
  StrokeCapType,
  StrokeJoinType,
} from "./enums"
import {Paint} from "./paint"
import {Color} from "./color"
import {LayoutConstraint} from "./layout-constraint"
import {Effect} from "./effect"
import {ExportSetting} from "./export-settings"
import {LayoutGrid} from "./layout-grid"
import {Transform} from "./transform"
import {Vector} from "./vector"
import {TypeStyle} from "./type-style"

export interface Node {
  absoluteBoundingBox?: Rectangle
  background?: Paint[]
  backgroundColor?: Color
  blendMode?: BlendMode
  booleanOperation?: BooleanOperationType
  characters?: string
  characterStyleOverrides?: number[]
  children?: Node[]
  clipsContent?: boolean
  componentId?: string
  constraints?: LayoutConstraint
  cornerRadius?: number
  effects?: Effect[]
  exportSettings?: ExportSetting[]
  fills?: Paint[]
  id: string
  isMask?: boolean
  isMaskOutline?: boolean
  layoutGrids?: LayoutGrid[]
  name: string
  opacity?: number
  preserveRatio?: boolean
  prototypeStartNodeID: string | null
  rectangleCornerRadii?: number[]
  relativeTransform?: Transform
  size?: Vector
  strokeAlign?: StrokeAlignType
  strokeCap?: StrokeCapType
  strokeDashes?: number[]
  strokeJoin?: StrokeJoinType
  strokeMiterAngle?: number
  strokeWeight?: number
  strokes?: Paint[]
  style?: TypeStyle
  styleOverrideTable?: Map<string, TypeStyle>
  styles?: Map<string, string>
  type: NodeType
  visible?: boolean
}
