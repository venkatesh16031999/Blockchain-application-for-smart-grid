import web3 from '../etheruem/web3';
import CampaignContract from '../etheruem/build/Campaign.json';

const Instance = (address)=>{

    const Campaign=new web3.eth.Contract(JSON.parse(CampaignContract.interface),address);

    return Campaign;

}

export default Instance;