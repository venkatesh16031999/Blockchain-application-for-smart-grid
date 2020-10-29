const solc=require('solc');
const fs=require('fs-extra');
const path=require('path');

const buildPath=path.resolve(__dirname,'build');

console.log(buildPath);

fs.removeSync(buildPath);

const filePath=path.resolve(__dirname,'contract','EB.sol');
const source=fs.readFileSync(filePath,'utf-8');

var input = {
    language: 'Solidity',
    sources: {
      'EB.sol': {
        content: source
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };
  
  var output = JSON.parse(solc.compile(JSON.stringify(input)));

  fs.ensureDirSync(buildPath);

  for (var contractName in output.contracts['EB.sol']) {

        fs.outputJsonSync(
        path.resolve(buildPath, contractName + ".json"),output.contracts['EB.sol'][contractName]
    );
  }



