// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DateInterface is ERC721Enumerable, Ownable {
    string private baseURI;
    constructor(string memory _name, string memory _symbol, string memory _baseUri)
    ERC721(_name, _symbol) {
        baseURI = _baseUri;
        _safeMint(msg.sender, 0); // Genesis Date NFT
    }

    function mintCommon(uint256 _yyyymmdd) public {
        _safeMint(_msgSender(), _yyyymmdd);
    }

    function setBaseURI(string memory _baseUri) external {
        baseURI = _baseUri;
    }
    
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }
} 