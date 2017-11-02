const FactoryEmoji = artifacts.require("FactoryEmoji"),
  assertJump = require('./helper').assertJump;

contract('FactoryEmoji', function(accounts){

  let factory;

  beforeEach(async function(){
    factory = await FactoryEmoji.deployed();
  })

  it('will set the owner', async function(){

    let owner = await factory.owner();
    assert.equal(owner, accounts[0]);
  });

  it('will create EmojiCoin', async function(){

    let watcher = factory.NewCoin(),
      tx = await factory.newCoin({from: accounts[0]}),
      events = await watcher.get();

    assert.equal(events[0].args._newCoin.length, 42);
  });

  it('will fail creating EmojiCoin (not owner)', async function(){

    try{
      await factory.newCoin({from: accounts[1]});
      assert.fail('should have been thrown');
    }catch(error){
      assertJump(error);
    }
  });

  it('will register EmojiCoin (update struct[])', async function(){

    let watcher = factory.NewCoin(),
      tx = await factory.newCoin(),
      events = await watcher.get(),
      index = events[0].args.index.toNumber(),
      actual = await factory.getEmoji(index);

    assert.equal(web3.toUtf8(actual[1]), 'tickerTest');
    assert.equal(web3.toUtf8(actual[2]), 'nameTest');
  });

});
