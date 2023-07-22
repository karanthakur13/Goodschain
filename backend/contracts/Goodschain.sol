// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Goodschain {
    event Added(uint256 index);

    struct Locate {
        string latitude;
        string longitude;
    }

    struct State {
        address s_modifier;
        string date;
        Locate location;
        string info;
    }

    struct Product {
        address creator;
        string productName;
        string category;
        string certificate;
        uint256 productId;
        State[] states;
    }

    mapping(uint => Product) public allProducts;
    uint256 public items = 0;

    function newItem(
        address _owner,
        string memory _pname,
        string memory _category,
        string memory _certificate,
        string memory _info,
        string memory _lati,
        string memory _longi
    ) public returns (bool) {
        Product storage product = allProducts[items];
        product.creator = _owner;
        product.productName = _pname;
        product.productId = items;
        product.category = _category;
        product.certificate = _certificate;

        product.states.push(
            State({
                date: uint2str(block.timestamp),
                location: Locate({latitude: _lati, longitude: _longi}),
                info: _info,
                s_modifier: product.creator
            })
        );

        items = items + 1;
        emit Added(items - 1);
        return true;
    }

    function uint2str(uint256 _i) internal pure returns (string memory str) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        str = string(bstr);
    }

    function addState(
        uint _productId,
        string memory _info,
        string memory _lati,
        string memory _longi
    ) public returns (bool) {
        require(_productId <= items);

        Product storage product = allProducts[_productId];

        product.states.push(
            State({
                date: uint2str(block.timestamp),
                location: Locate({latitude: _lati, longitude: _longi}),
                info: _info,
                s_modifier: msg.sender
            })
        );
        return true;
    }

    function searchProduct(
        uint _productId
    ) public view returns (State[] memory) {
        require(_productId <= items);
        Product storage product = allProducts[_productId];
        return (product.states);
    }
}
