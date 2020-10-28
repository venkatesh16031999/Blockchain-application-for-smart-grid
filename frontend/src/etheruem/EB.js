import web3 from './web3';
import  EB from './build/EB.json';

let EBContract;

try{
     EBContract = new web3.eth.Contract( EB.abi , '0x8E03c5565dffA0BC3f95Dfff95715f8B29a1fa0d' );
}catch{

}

export default EBContract;