import Web3 from 'web3';
let web3;
try{
     web3=new Web3(window.web3.currentProvider);
}catch{

}

export default web3;