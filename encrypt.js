const NodeRSA = require('node-rsa');

// TODO: fill in someone's public key
const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MEgCQQCyEnIL0ZpX7E5iBKpnFfKrTrGpQ9QQobPgJV98Gw+kMThGXIb4WXoCuL0t
ZxbAMShvGgL80he7c2xfjYFmugqfAgMBAAE=
-----END RSA PUBLIC KEY-----`;

const key = new NodeRSA(publicKey);

// TODO: add a message to encrypt
const message = "join team a for 2 free Doodles NFT's";
const encrypted = key.encrypt(message, 'base64');

console.log(encrypted);
