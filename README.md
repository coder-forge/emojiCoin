Just because...

    once there was spunk
    then there was a fishy reality
    next came squirrels
    afterwards they developed spider limbs (monkeys, rats with spider limbs)
    then the end goal. Blockchain.

q[-_-]p


## Running

Requires two frameworks written in NodeJS.

 1. trufflejs - this is for building and testing our contracts
   `npm install -g truffle`
 2. testrpc - this is a mock blockchain that runs locally
   `npm install -g ethereumjs-testrpc`

Once the above two are installed, then run:

```bash
truffle compile
truffle migrate --reset
truffle test
```

## Important files

The `solidity` contracts are in `/contracts` folder, and the test files are in
`/test` folder.
