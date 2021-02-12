pragma solidity^0.5.16;

contract EB{
    
    struct Providers{
        string name;
        string email;
        string city;
        string number;
        string ebId;
        bool registered;
        address accountAddress;
        bool isVerified;
    }
    
    struct Consumers{
        string name;
        string email;
        string city;
        string number;
        string ebId;
        bool registered;
        address accountAddress;
        uint currentBillAmount;
        uint isBillPaid;
    }
    
    struct Transaction{
        uint watts;
        uint date;
        string ebId;
        bool isAmountPaid;
        uint amount;
    }
    
    modifier adminOnly{
        require(msg.sender==admin,"Admin rights is not given");
        _;
    }
    
    uint public wattPrice = 30;
    
    mapping(string => Providers) public providersList;
    
    mapping(string => Consumers) public consumersList;
    
    mapping(string => mapping(uint => Transaction)) public transactionList;
    
    mapping( string => Transaction ) public lastTransaction;
    
    address public admin;
    
    constructor() public payable  {
        admin = msg.sender;
    }
    
    function registerProvider(string memory name, string memory email, string memory city, string memory number, string memory ebId) public {
        Providers memory newProviders = Providers({
            name: name,
            email: email,
            city: city,
            number: number,
            ebId: ebId,
            registered:true,
            accountAddress: msg.sender,
            isVerified: false
        });
        
        providersList[ebId] = newProviders;
    }
    
    function getProviderDetails(string memory ebId) public view returns(string memory,string memory,string memory,string memory,string memory) {
        require(providersList[ebId].registered==true,"This provider is not registered");
        Providers memory provider = providersList[ebId];
        return (
            provider.name, 
            provider.email, 
            provider.city, 
            provider.number, 
            provider.ebId);
    }
    
    function sendElectricPower(uint noOfWatts,string memory ebId,uint timestamp) public {
            require(noOfWatts>=300,"300 Watts is minimum to transfer");
            uint oneWattPrice = 120000000000;
            uint amountInWei = noOfWatts * oneWattPrice;
            Transaction memory newTransaction = Transaction({
                watts: noOfWatts,
                date: timestamp,
                ebId: ebId,
                isAmountPaid: false,
                amount: amountInWei
            });
            lastTransaction[ebId] = newTransaction;
            
            transactionList[ebId][timestamp] = newTransaction;
    }
    
    function sendPaymentToProvider(string memory ebId,uint date) public adminOnly{
        
        Transaction storage payableTransaction = transactionList[ebId][date];
        address payable senderAddress = address(uint160(providersList[ebId].accountAddress));
        senderAddress.transfer( payableTransaction.amount );
        payableTransaction.isAmountPaid = true;
        lastTransaction[ebId].isAmountPaid = true;
    }
    
    function getBalance() public view returns(uint){
        return address(this).balance;
    }
    
    function() external payable{
        
    }
    
    function verifyProvider(string memory ebId) public adminOnly {
        providersList[ebId].isVerified = true;
    } 
    
    function getLastTransaction(string memory ebId) public view returns(uint, uint, string memory,bool,uint){
        Transaction memory transaction =  lastTransaction[ebId];
        return (
            transaction.watts,
            transaction.date,
            transaction.ebId,
            transaction.isAmountPaid,
            transaction.amount
            );
    }
    
    function registerConsumer(string memory name, string memory email, string memory city, string memory number, string memory ebId) public {
        // 0 indicates there is no bill
        Consumers memory newConsumer = Consumers({
            name: name,
            email: email,
            city: city,
            number: number,
            ebId: ebId,
            registered:true,
            accountAddress: msg.sender,
            currentBillAmount:0,
            isBillPaid: 0
            
        });
        
        consumersList[ebId] = newConsumer;
    }
    
    function recordCurrentBill(string memory ebId,uint amount) public adminOnly {
        consumersList[ebId].currentBillAmount += amount;
        // 1 indicates the bill is not paid
        consumersList[ebId].isBillPaid = 1;
    }
    
    function payCurrentBill(string memory ebId) public payable{
        require(consumersList[ebId].currentBillAmount==msg.value,"Bill amount is not same pay the exact amount mentioned in the bill");
        consumersList[ebId].currentBillAmount -= msg.value;
        // 2 indicates the bill is paid
        consumersList[ebId].isBillPaid = 2;
    }
    
    function isBillPaidByConsumer(string memory ebId) public view returns(uint){
        return consumersList[ebId].isBillPaid;
    }
    
    function getBillAmount(string memory ebId) public view returns(uint){
        return consumersList[ebId].currentBillAmount;
    }
    
}