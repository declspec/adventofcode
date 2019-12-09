import { processInputLines } from '../../utils/input';

const diffs: number[] = [];

// Brute force
processInputLines(line => diffs.push(parseInt(line, 10)), () => {
    const freqs: Set<number> = new Set<number>();
    let freq = 0, pos = 0;

    while (true) {
        freq += diffs[pos++];

        if (!freqs.has(freq))
            freqs.add(freq)
        else {
            console.log(freq);
            break;
        }            

        if (pos >= diffs.length)
            pos = 0;
    }
});
