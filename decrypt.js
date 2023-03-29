const NodeRSA = require('node-rsa');

// TODO: fill in the private key
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAI+MsUcvATBLh9IRh9SS+ZzsFWPyaYLKG5GvlJCP/GqTsDJBtRHt
v0rwFPNSN+NhBUonEjKqd1soZr3F2iXSkDkCAwEAAQJAPxSFRpGaRR27xo0bkkcv
10xLLgt1YBruOHvenhQXyMEKt4UbCdc733DNCTU2vVJxieT7FAV/ciXbrHgKS9sl
jQIhAM1o9B1f0WXmGp/ySNN6Jr5ujtzm7t+e0m31GylHoD5HAiEAsud08u9Yk3hL
kEap3o/HSZDk3m46BQXLH8chqDg9fX8CIQCPwYYnEKoR8IptqjkBmBmJaQKe4xgG
dLa8sa+ColgpfQIgBiJHcTjhmZTLSnQRyO63D3+nSTUQSjHLqBhEwCbFfPMCIFyt
QB5tM0eOYlaECVNpHLHR1Vl2k+DvAabya5B7n8vs
-----END RSA PRIVATE KEY-----`;

const key = new NodeRSA(privateKey);

// TODO: fill in the encrypted message
const message = "RWw4M38brB7IGRhV1REj3HJXdIkOFptP/Y9TqNo2rxhNAjex7nsu0tEV8c+uGQv+aiYQoH+tlIzO/KVm5/U4NhjaDJkw/5zjT2345H890MEFeic29OOrLOUNqLU5FS8ZrzsIS7uEWuVdxmOTYH+lIQf4iyfpWVzTSkO4yKpDndM=";

const decrypted = key.decrypt(message, 'utf8');

console.log(decrypted);
