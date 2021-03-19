/*
Example of a functional implementation such as we'd expect the candidate to provide.

It works, but the use ot regex can be debatable
https://xkcd.com/1171/
 */

function compressNumbers(num) {
    if (num === undefined || num === null || typeof num !== 'number') {
        return 'wrong input';
    }
    const asString = String(num);
    if (!asString) {
        return;
    }
    return (asString as any)
        .match(/(\d)\1*/g)
        .map((group) => group.length + group[0])
        .join('');
}

module.exports = compressNumbers;
