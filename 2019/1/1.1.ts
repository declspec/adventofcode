import { processInputLines } from '../../utils/input';

function calculateFuel(mass: number) {
    return Math.floor(mass / 3) - 2;
}

let total = 0;

processInputLines(
    line => total += calculateFuel(parseInt(line, 10)), 
    () => console.log(total)
);