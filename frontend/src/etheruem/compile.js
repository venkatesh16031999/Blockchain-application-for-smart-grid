const solc=require('solc');
const fs=require('fs-extra');
const path=require('path');

const buildPath=path.resolve(__dirname,'build');

console.log(buildPath);

fs.removeSync(buildPath);

const filePath=path.resolve(__dirname,'contract','Campaign.sol');
const source=fs.readFileSync(filePath,'utf-8');

fs.ensureDirSync(buildPath);

const output=solc.compile(source,1).contracts;

for(let contract in output){
    
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(":","") + ".json"),
        output[contract]
    );

}
