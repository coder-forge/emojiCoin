pragma solidity ^0.4.17;

contract FactoryEmoji{

    address public owner;

    event NewCoin(
        address _newCoin
    );

    function FactoryEmoji() public{
        owner = msg.sender;
    }

    function newCoin() public returns(address){
        EmojiCoin ec = new EmojiCoin();
        NewCoin(ec);
        return ec;
    }
}

contract EmojiCoin{

  address owner;

  function EmojiCoin() public{
    owner = msg.sender;
  }
}
