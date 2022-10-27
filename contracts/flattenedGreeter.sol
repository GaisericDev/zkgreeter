yarn run v1.22.19
$ /home/sebas/Desktop/dev/zkgreeter/node_modules/.bin/hardhat flatten
// Sources flattened with hardhat v2.12.0 https://hardhat.org

// File contracts/Greeter.sol

//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
Done in 0.94s.
