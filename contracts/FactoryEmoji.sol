pragma solidity ^0.4.17;

contract FactoryEmoji{

    address public owner;
    struct Emoji{
        address addr;
        bytes32 ticker;
        bytes32 name;
    }
    Emoji[] public emojis;

    event NewCoin(
        uint index,
        address _newCoin
    );

    function FactoryEmoji() public{
        owner = msg.sender;
    }

    function getEmoji(uint index) public constant returns(address, bytes32, bytes32){
        return (emojis[index].addr, emojis[index].ticker, emojis[index].name);
    }

    function newCoin() public returns(uint){

        require(msg.sender==owner);

        EmojiCoin ec = new EmojiCoin();

        emojis.length++;
        uint index = emojis.length-1;
        emojis[index].addr = ec;
        emojis[index].ticker = 'tickerTest';
        emojis[index].name = 'nameTest';

        NewCoin(index, ec);

        return index;
    }
}

contract EmojiCoin{

  address owner;

  function EmojiCoin() public{
    owner = msg.sender;
  }
}
