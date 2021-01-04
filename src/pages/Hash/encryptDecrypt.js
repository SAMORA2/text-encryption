const crypto = require('crypto');


export const encrypt = (text, algorithm, key, iv) => {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    console.log(`this is algorithm- ${algorithm}`);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

export const decrypt = (text, algorithm, key,textIv,encryptedData) => {
    let iv = Buffer.from(textIv, 'hex');
    let encryptedText = Buffer.from(encryptedData, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
