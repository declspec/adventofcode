import { processInputLines } from '../../utils/input';
import { executeIntCode } from './2';

processInputLines(line => {
    const program = line.split(',').map(op => parseInt(op, 10));
    console.log(executeIntCode(program));
});