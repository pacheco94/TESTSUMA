
module.exports = async function main (callback) {
    try{
     const accounts = await web3.eth.getAccounts();
     console.log(accounts);

     //instanciando el contrato
     const TestSuma = artifacts.require('TestSuma.sol');
     const testsuma = await TestSuma.deployed();

     //usando la funcion de setSuma
     await testsuma.setNumbers(8, 8, {from:'0x0c99f7F1035a7441E2a5D589Cf5388482467a924'});

     //llamando las funciones del contrato
     const _sumaResult = await testsuma.getNumbers();
     console.log('TestSuma is: ', _sumaResult.toString());

    callback(0);
    }catch(error){
        console.error(error);
        callback(1);
    }

};