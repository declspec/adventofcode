import { processInputLines } from '../../utils/input';

const diffs: number[] = [];

// Brute force
processInputLines(line => diffs.push(parseInt(line, 10)), () => {
    const freqs: number[] = [0];
    let freq = 0, pos = 0;

    while (true) {
        freq += diffs[pos++];

        if (freqs.indexOf(freq) < 0)
            freqs.push(freq)
        else {
            console.log(freq);
            break;
        }            

        if (pos >= diffs.length)
            pos = 0;
    }
});
