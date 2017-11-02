// @link https://github.com/OpenZeppelin/zeppelin-solidity/tree/master/test/helpers
module.exports = {

  assertJump: function(error) {
    assert.isAbove(error.message.search('invalid opcode'), -1, error);
  }
}
