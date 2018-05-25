#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const download = require('download-git-repo');

program
    .version('1.0.0')
    .description('An oppionated front-end stub that eNEIGHbles rapid but sturdy development.');

program
    .version('1.0.0')
    .option('-b, --bareback', 'non-static site building version.')
    .parse(process.argv);

if (program.bareback) {
    download('mykebates/HorseStrap-Core', './', function(err) {
        console.log(err ? 'Error' : 'Success')
    });
} else {
    download('mykebates/HorseStrap-Core', './', function(err) {
        console.log(err ? 'Error' : "HorseStrap installed. Run 'npm install', 'dotnet run', then 'npm run watch'")
    });
}
