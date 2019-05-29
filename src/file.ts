import {Style} from "./types/style"
import {Component} from "./types/component"
import {Document} from "./types/document"

export interface File {
  document: Document
  name: string
  schemaVersion: number
  components: Map<string, Component>
  styles: Map<string, Style>
  lastModified: string
  thumbnailUrl: string
  version: string
}
