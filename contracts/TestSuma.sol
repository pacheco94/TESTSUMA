//SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TestSuma is Ownable {


 uint256 private _sumaResult;

 event SumaValor(uint256 _sumaResult);

 function setNumbers(uint256 _valor1, uint256 _valor2) onlyOwner public {
    _sumaResult = _valor1 + _valor2;
    emit SumaValor(_sumaResult);
 }

 function getNumbers() public view returns(uint256) {
    return _sumaResult;
 }

}