#!/usr/bin/env node

/**
 * Command line interface (CLI) for generator.
 *
 * @package angular2-swagger-apiclient-generator
 * @author Michal Krchnavy <michal@krchnavy.sk>
 */

// requirements
var optimist = require('optimist')
    .usage('Usage: a2apigen -s path/to/your/swagger.json')
    .alias('h', 'help')
    .alias('s', 'swaggerfile')
    .alias('o', 'outputpath')
    .describe('s', 'Path to your swagger.json file')
    .describe('o', 'Path where to store generated files');

var fs = require('fs');

var genRef = require('./generator');

var argv = optimist.argv;

function stderr(err) {
    console.log('Error: ' + err);
    process.exit(1);
}

/**
 * Execute
 */
if (argv.help) {
    optimist.showHelp();
    process.exit(0);
}

// Check requirements
if (typeof argv.swaggerfile === 'undefined' || argv.swaggerfile === true) {
    stderr('Swagger.json file (-s) must be specified. See --help');
    process.exit(1);
}

var outputdir = argv.outputpath || './output';

if (!fs.existsSync(outputdir))
    fs.mkdirSync(outputdir);

//Do Job
var g = new genRef.Generator(argv.swaggerfile, outputdir);
g.Debug = true;
g.generateAPIClient();

