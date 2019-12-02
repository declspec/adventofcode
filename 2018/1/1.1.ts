import { processInputLines } from '../../utils/input';

let freq = 0;

processInputLines(
    line => freq += parseInt(line, 10),
    () => console.log(freq)
);