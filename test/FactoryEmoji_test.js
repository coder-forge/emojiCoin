var FactoryEmoji = artifacts.require("FactoryEmoji");

contract('FactoryEmoji', function(accounts){

  it('will set the owner', function(done){

    FactoryEmoji.deployed()
      .then(function(instance){
        return instance.owner();
      })
      .then(function(owner){
        assert.equal(owner, accounts[0]);
        done();
      });
  });

  it('will create EmojiCoin', function(done){

    var watcher;

    FactoryEmoji.deployed()
      .then(function(instance){
        watcher = instance.NewCoin();
        return instance.newCoin({from: accounts[0]})
          .then(function(tx){
            return watcher.get();
          })
      })
      .then(function(events){
        assert.equal(events[0].args._newCoin.length, 42);
        done();
      });
  });

  it.skip('will register EmojiCoin (update struct[])', function(done){

  });
});
