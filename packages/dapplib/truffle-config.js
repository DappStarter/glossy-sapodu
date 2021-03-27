require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name rifle magic assume good praise army gauge'; 
let testAccounts = [
"0x7a69909ca520903460c281a10ed8946bc62acbe315118156f00220b7a402dfbc",
"0x99609522db8952d33a8affad64aff2c94e589a99c061c94097cf7b9ebc54cc11",
"0x6868fec4eab66aa0f25f3398d736d0da0dc0e7d6b82833272fe352950752dec7",
"0xac842649b8f65545961c933db7847a7a9429d58f9f624dea191c1b4c0cba9cb6",
"0x765cacdb1b1a93e126908caf29903c166dc6011c5d934e0eca6b3f0ad26c597a",
"0xd320397c5a80a10f5725c0d5f2079580e125fab7e4374266b517c4bdf67cfc3f",
"0x124317d39dc22dd6814b63c2f4d5a18f7ec42b30d2a7c3ad2ac3e426254f2d0f",
"0xf92de2bc7aaba36ba0edfa9bf498887aecf7facc665314b2afb7a6e77256343e",
"0x229e528e14f2415a39a3475bb97a2f1f4a8beec8be49ad8a075cd57ffbeecdfe",
"0x1e43416234921cf2497b5c4d5c7bb761398cfba809e850e722a20e2a75d1f87c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
