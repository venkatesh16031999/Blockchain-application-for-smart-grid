import web3 from './web3';
import  EB from './build/EB.json';

let EBContract;

try{
     EBContract = new web3.eth.Contract( EB.abi , '0xC7bDD2613E7086Fc373e76121A4316Da623E61aD' );
}catch{

}

export default EBContract;