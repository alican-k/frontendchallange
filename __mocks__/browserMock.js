import { JSDOM } from "jsdom"

const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
//global.window = document.defaultView


global.navigator = {
  userAgent: 'node.js'
}