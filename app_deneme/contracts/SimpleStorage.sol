// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract SimpleStorage {
  string storedData;

  function set(string x) public {
    storedData = x;
  }

  function get() public view returns (string) {
    return storedData;
  }
}
