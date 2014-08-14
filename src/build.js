#!/usr/bin/env node

/*

   .x+=:.                  _            _                      
  z`    ^%                u            u            ..         
     .   <k              88Nu.   u.   88Nu.   u.   @L          
   .@8Ned8"       u     '88888.o888c '88888.o888c 9888i   .dL  
 .@^%8888"     us888u.   ^8888  8888  ^8888  8888 `Y888k:*888. 
x88:  `)8b. .@88 "8888"   8888  8888   8888  8888   888E  888I 
8888N=*8888 9888  9888    8888  8888   8888  8888   888E  888I 
 %8"    R88 9888  9888    8888  8888   8888  8888   888E  888I 
  @8Wou 9%  9888  9888   .8888b.888P  .8888b.888P   888E  888I 
.888888P`   9888  9888    ^Y8888*""    ^Y8888*""   x888N><888' 
`   ^"F     "888*""888"     `Y"          `Y"        "88"  888  
             ^Y"   ^Y'                                    88F  
                                                         98"   
                                                       ./"     
                                                      ~`       

   Copyright 2014 Oliver Moran

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

var fs = require("fs");
var path = require("path");
var sys = require("sys");
var exec = require("child_process").exec;
var package = require("../package.json");

var done;
var dir;

exports.build = function(dir, cb) {
    done = cb;
    location = dir;
    typescript();
}

function typescript() {
	console.log("Compiling framework using TypeScript...");
    exec("tsc --declaration --target ES5 --out " + location + "/savvy.js ./src/typescript/card.ts ./src/typescript/jxon.ts ./src/typescript/application.ts ./src/typescript/init.ts ./src/typescript/main.ts ./src/typescript/transitions.ts ./src/typescript/eval.ts", function (error, stdout, stderr) {
        if (error) sys.puts(stderr);
        else sass();
    });
}

function sass() {
	console.log("Compiling framework using Sass...");
    exec("sass ./src/sass/savvy.scss " + location + "/savvy.min.css --style compressed", function (error, stdout, stderr) {
        if (error) sys.puts(stderr);
        else closure();
    });
}

function closure() {
	console.log("Optomising framework using Google Closure...");
    // NB: Java 7 required: https://code.google.com/p/closure-compiler/wiki/FAQ#The_compiler_crashes_with_UnsupportedClassVersionError_or_Unsupp
    // Download from: http://java.com
    exec("java -jar ./src/bin/closure/compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS --language_in ECMASCRIPT5_STRICT --create_source_map " + location + "/savvy.min.js.map --js " + location + "/savvy.js --js_output_file " + location + "/savvy.min.js",
         function (error, stdout, stderr) {
             if (error) sys.puts(stderr);
             else {
                 fs.unlinkSync("" + location + "/savvy.js");
                 license();
             }
    });
}

function license() {
	console.log("Concatenating license and framework release files...");
    
    var banner = fs.readFileSync("./banner.txt");
    var license = fs.readFileSync("./src/license.txt");
    var header = "/*\n" + banner + "\n   Version: " + package.version + "\n" + license + "*/\n\n";
    
    prepend("" + location + "/savvy.min.js", header);
    prepend("" + location + "/savvy.min.css", header);
    
    done();
}

function prepend(file, src) {
    var content = fs.readFileSync(file);
    fs.writeFileSync(file, src);
    fs.appendFileSync(file, content);
}