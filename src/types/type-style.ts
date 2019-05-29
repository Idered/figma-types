import {Paint} from "./paint"
import {
  TextCaseType,
  TextDecorationType,
  TextAlignHorizontalType,
  TextAlignVerticalType,
  LineHeightUnitType,
} from "./enums"

export interface TypeStyle {
  fontFamily?: string
  fontPostScriptName: string | null
  paragraphSpacing?: number
  paragraphIndent?: number
  italic?: boolean
  fontWeight?: number
  fontSize?: number
  textCase?: TextCaseType
  textDecoration?: TextDecorationType
  textAlignHorizontal?: TextAlignHorizontalType
  textAlignVertical?: TextAlignVerticalType
  letterSpacing?: number
  fills: Paint[]
  lineHeightPx?: number
  lineHeightPercent?: number
  lineHeightPercentFontSize?: number
  lineHeightUnit?: LineHeightUnitType
}
