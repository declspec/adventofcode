import { processInputLines } from '../../utils/input';

function calculateFuel(mass: number) {
    let fuel = 0;

    while (mass > 0) {
        mass = Math.floor(mass / 3) - 2;

        if (mass > 0)
            fuel += mass;
    }

    return fuel;
}

let total = 0;

processInputLines(
    line => total += calculateFuel(parseInt(line, 10)), 
    () => console.log(total)
);