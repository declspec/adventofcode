export function executeIntCode(ram: number[]) {
    let eip = 0;

    while (eip < ram.length) {
        switch(ram[eip]) {
            case 1:
                ram[ram[eip + 3]] = ram[ram[eip + 1]] + ram[ram[eip + 2]];
                eip += 4;
                break;
            case 2:
                ram[ram[eip + 3]] = ram[ram[eip + 1]] * ram[ram[eip + 2]];
                eip += 4;
                break;
            case 99:
                return ram[0];
            default:
                throw new Error(`invalid opcode encountered: ${ram[eip]}`);
        }
    }

    throw new Error('execution continued outside addressable memory');
}