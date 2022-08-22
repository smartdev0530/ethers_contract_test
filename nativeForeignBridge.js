function strip0x(input) {
  return input.replace(/^0x/, "");
}


function createMessage({
  recipient,
  value,
  transactionHash,
  bridgeAddress,
  expectedMessageLength,
}) {
  recipient = strip0x(recipient);
//   assert.strictEqual(recipient.length, 20 * 2);

  value = numberToHex(value);
  value = padLeft(value, 32 * 2);

  value = strip0x(value);
//   assert.strictEqual(value.length, 64);

  transactionHash = strip0x(transactionHash);
//   assert.strictEqual(transactionHash.length, 32 * 2);

  bridgeAddress = strip0x(bridgeAddress);
//   assert.strictEqual(bridgeAddress.length, 20 * 2);

  const message = `0x${recipient}${value}${transactionHash}${bridgeAddress}`;
//   assert.strictEqual(message.length, 2 + 2 * expectedMessageLength);
  return message;
}
