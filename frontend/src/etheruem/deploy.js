const HDWallet=require("truffle-hdwallet-provider");
const Web3=require("web3");

const provider=new HDWallet(
    'celery repair prize hole fruit predict stick weekend loyal dog tray riot',
    'https://rinkeby.infura.io/v3/a7e6e56559af4bb6ab25894eca9b86a8'
);

const factory=require('./build/CampaignFactory.json');

const web3=new Web3(provider);

const deployContract=async()=>{
    const accounts=await web3.eth.getAccounts();

    console.log("The Contract is deployed by ",accounts[0]);

    const campaign=await new web3.eth.Contract(JSON.parse(factory.interface))
    .deploy({data:factory.bytecode})
    .send({from:accounts[0],gas:'1000000'});

    const address=await campaign.options.address;

    console.log("The Contract is deployed at ",address);

}

deployContract();