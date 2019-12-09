import { processInputLines } from '../../utils/input';
import { executeIntCode } from './2';

processInputLines(line => {
    const program = line.split(',').map(op => parseInt(op, 10));
    
    for (let n = 0; n <= 99; ++n) 
    for (let v = 0; v <= 99; ++v) {
        const ram = program.slice();
        ram[1] = n;
        ram[2] = v;

        if (executeIntCode(ram) === 19690720)
            console.log(100 * n + v);
    }
});