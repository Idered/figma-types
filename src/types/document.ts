import {Node} from "./node"
import {NodeType} from "./enums"

export interface Document {
  id: string
  name: string
  type: NodeType
  children: Node[]
}
