# dscript-doc
[![NPM version](https://badge.fury.io/js/dscript-doc.svg)](https://badge.fury.io/js/dscript-doc) [![Build Status](https://travis-ci.org/dustinspecker/dscript-doc.svg)](https://travis-ci.org/dustinspecker/dscript-doc) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/dscript-doc.svg)](https://coveralls.io/r/dustinspecker/dscript-doc?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/dscript-doc/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/dscript-doc) [![Dependencies](https://david-dm.org/dustinspecker/dscript-doc.svg)](https://david-dm.org/dustinspecker/dscript-doc/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/dscript-doc/dev-status.svg)](https://david-dm.org/dustinspecker/dscript-doc/#info=devDependencies&view=table)

> [dscript](https://github.com/dustinspecker/dscript) with [doc-jsx](https://github.com/dustinspecker/doc-jsx) setup done for you

**Check out [dscript](https://github.com/dustinspecker/dscript) for documentation on more advanced usage.**

## Install
```
npm install --save dscript-doc
```

## Usage
```javascript
import {div, li, ul} from 'dscript-doc'

const handleClick = () => alert('hi')

const component = (
  div('.list-container', {onClick: handleClick}, [
    ul([
      li(['task 1']),
      li(['task 2']),
      li(['task 3'])
    ])
  ])
)
```


## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
