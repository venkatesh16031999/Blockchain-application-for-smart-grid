import web3 from './web3';
import  EB from './build/EB.json';

let EBContract;

try{
     EBContract = new web3.eth.Contract( EB.abi , '0x035F5f1e113B3D373Fb6e0898ECDB20dAED367b4' );
}catch{

}

export default EBContract;