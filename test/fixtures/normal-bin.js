#!/usr/bin/env node
async function main () {
  var argv = await require('../../index.js')
    .help('help')
    .version()
    .parserConfiguration({
      'dot-notation': false,
      'boolean-negation': false
    })
    .argv
  console.log(argv)
}

main()
