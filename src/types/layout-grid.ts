import {LayoutGridPatternType, LayoutGridAlignmentType} from "./enums"
import {Color} from "./color"

export interface LayoutGrid {
  pattern: LayoutGridPatternType
  sectionSize: number
  visible: boolean
  color: Color
  alignment: LayoutGridAlignmentType
  gutterSize: number
  offset: number
  count: number
}
