import web3 from './web3';
import  FactoryCampaign from './build/CampaignFactory.json';

let Factory;

try{
     Factory = new web3.eth.Contract( JSON.parse(FactoryCampaign.interface) , '0x924375924f6EE5963cEF44DefE7729D87B9520Ab' );
}catch{

}

export default Factory;