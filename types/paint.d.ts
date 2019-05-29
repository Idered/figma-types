import {Color} from "./color"
import {Vector} from "./vector"
import {ColorStop} from "./color-stop"
import {Transform} from "./transform"
import {PaintType, ScaleModeType, BlendMode} from "./enums"

export interface Paint {
  type: PaintType
  visible?: boolean
  opacity?: number
  color?: Color
  blendMode: BlendMode
  gradientHandlePositions: Vector[]
  gradientStops: ColorStop[]
  scaleMode?: ScaleModeType
  imageTransform: Transform
  scalingFactor?: number
  imageRef?: string
}
