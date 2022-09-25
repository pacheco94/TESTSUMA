//Load dependens
const { expect } = require('chai');

//Import utilities from test-helpers
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { inTransaction } = require('@openzeppelin/test-helpers/src/expectEvent');

//Load compile artifacts
const TestSuma = artifacts.require('TestSuma.sol');

//start test block
contract('TestSuma', function([owner, others]) {
    //use integers ('big numbers')
    const _sumaResult = new BN('50');
    const valor1 = new BN('20');
    const valor2 = new BN('30');
     
    beforeEach(async function () {
        this.testsuma = await TestSuma.new({from: owner});
    });

    //Comparing result should be aquia to value contened in _sumaResult
    it('Return the value contein in _sumaResult', async function () {
        await this.testsuma.setNumbers(valor1, valor2, { from: owner});
        expect(await this.testsuma.getNumbers()).to.be.bignumber.equal(_sumaResult);
    });
     
    //teting the event
    it('Emit event when setNumbers its called', async function () {
        const receipt = await this.testsuma.setNumbers(valor1, valor2, {from: owner})
        expectEvent(receipt, 'SumaValor', { _sumaResult});
    });

    // test de onlyOwner
    it('Only oner can do add', async function () {
      await expectRevert(this.testsuma.setNumbers(valor1, valor2, {from: others}),'Ownable: caller is not the owner');
    });
});
