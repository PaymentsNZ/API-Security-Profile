var fs = require('fs');
var Ajv = require('ajv');
var chalk = require('chalk');

const optionDefinitions = [
    { name: "src", type: String, multiple: false, defaultOption: true },
    { name: "schema", type: String, multiple: false, defaultValue: false}
];
const commandLineArgs = require("command-line-args");
const options = commandLineArgs(optionDefinitions);

// object file
const objectFileName = options.src ? options.src : "../examples/authentication-request.json";

// schema file
const schemaFileName = options.schema ? options.schema : "../hybrid-flow/authentication-request-schema.json";

var schema = JSON.parse(fs.readFileSync(schemaFileName, 'utf-8'));
var data = JSON.parse(fs.readFileSync(objectFileName,'utf-8'));

// debug: check file read
//console.log(data);

var ajv = new Ajv({allErrors: true}); // options can be passed, e.g. {allErrors: true}
var validate = ajv.compile(schema);

// Pass validation
console.log(chalk.blue("Validating data..."));
console.log(chalk.green(JSON.stringify(data)));
var valid = validate(data);

if (!valid) { 
    console.log(chalk.red("FAILED!"));
    console.log(validate.errors); 
} else {
    console.log(chalk.blue("Validated OK!"));
}


