const HDWallet=require("truffle-hdwallet-provider");
const Web3=require("web3");

const provider=new HDWallet(
    'celery repair prize hole fruit predict stick weekend loyal dog tray riot',
    "https://rinkeby.infura.io/v3/0e1bd4a8d4b248c6a8e6b2c86d9369a6"
);

const EB=require('./build/EB.json');

const web3=new Web3(provider);

const deployContract=async()=>{
    const accounts=await web3.eth.getAccounts();

    console.log("The Contract is deployed by ",accounts[0]);

    const campaign=await new web3.eth.Contract(EB.abi)
    .deploy({data:EB.evm.bytecode.object})
    .send({from:accounts[0],gas:'5000000'});

    const address=await campaign.options.address;

    console.log("The Contract is deployed at ",address);

}

deployContract();