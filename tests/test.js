'use strict'
import jsdom from 'jsdom'
import test from 'ava'

import {div} from '../lib/'

global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>')
global.window = document.defaultView

test('verify it works with doc-jsx\'s element', t => {
  const docDiv = div('.yo#hi', {title: 'hello'}, ['world'])

  t.is(docDiv.tagName, 'DIV')
  t.is(docDiv.getAttribute('class'), 'yo')
  t.is(docDiv.getAttribute('id'), 'hi')
  t.is(docDiv.getAttribute('title'), 'hello')
  t.is(docDiv.childNodes[0].nodeName, '#text')
  t.is(docDiv.childNodes[0].nodeValue, 'world')
})
