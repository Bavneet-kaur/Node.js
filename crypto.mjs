/**-------Encryption and Decryption with crypto module */
"use strict";
import crypto from "crypto";
const algo = "aes-256-cbc";
/**
 ** AES stands for Advanced Encryption Standard¹, an specification for the encryption of 
 ** electronic data used worldwide. 
 ** 256 is the number of bits in the encryption key: 256 bits = 32 bytes. 
 **  AES keys can be 128bit, 192bit, or 256bit, being the latest the most secure one.
 
 ** cbc stands for cipher block chaining, it is a mode at which encryption is running 
 */
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
function encrypt(text) {
  let cipher = crypto.createCipheriv(algo, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}
function decrypt(text) {
  let iv = Buffer.from(text.iv, "hex");
  let encryptedText = Buffer.from(text.encryptedData, "hex");
  let decipher = crypto.createDecipheriv(algo, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

let output = encrypt("test");
console.log(output);
console.log(decrypt(output));
/**----Hashing---- */
/**
 * Encryption is a two-way function where information is scrambled in such a way that it can be 
   unscrambled later. 
 
 * Hashing is a one-way function where data is mapped to a fixed-length value. 
 *todo Hashing is primarily used for authentication. 
 */
const algo2 = "sha256";
// *Sha stands for standard hashing algorithm
const key2 = crypto.randomBytes(32);

const hash = crypto.createHash(algo2, key2).update("test").digest("hex");
console.log("Hashing(the one way process): ", hash);
/**-----Web Crypto API----- */
/**
 * The Web Crypto API is an interface allowing a script to use cryptographic primitives 
 in order to build systems using cryptography. 
 */
async function encrypt(plaintext) {
  const key3 = await window.crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"]
  );
  const encoder = new TextEncoder();
  const encode = encoder.encode(plaintext);
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const cipher = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key3,
    cipher
  );
  let decoder = new TextDecoder();
  let retDe = decoder.decode(dicipher);
  return { cipher, iv, retDe };
}
console.log(await encrypt("test"));
