module.exports = function multiply(first, second) {
    const fst = BigInt(first);
    const snd = BigInt(second);
    const result = fst * snd;
    return result.toString();
};