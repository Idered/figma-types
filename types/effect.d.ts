import {Color} from "./color"
import {Vector} from "./vector"
import {BlendMode, EffectType} from "./enums"

export interface Effect {
  type: EffectType
  visible: boolean
  radius: number
  color?: Color
  blendMode?: BlendMode
  offset?: Vector
}
