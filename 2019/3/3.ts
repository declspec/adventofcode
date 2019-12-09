import { processInputLines } from '../../utils/input';

export const enum Orientation {
    Horizontal = 0,
    Vertical = 1
};

// [ origin x, origin y, magnitude ]
export type Line = [ number, number, number, Orientation ];

export function taxidist(x: number, y: number) {
    return Math.abs(x) + Math.abs(y);
}

export function computeIntersection(l1: Line, l2: Line) {
    if (l1[3] === l2[3])
        return null;

    const h = l1[3] === Orientation.Horizontal ? l1 : l2;
    const v = h === l1 ? l2 : l1;

    return (isBetween(v[0], h[0], h[0] + h[2]) && isBetween(h[1], v[1], v[1] + v[2]))
        ? [ v[0], h[1] ]
        : null;
}

export function processPaths(processor: (path1: Line[], path2: Line[]) => void) {
    const paths: string[] = [];

    processInputLines(path => paths.push(path), () => {
        const pathLines = paths.map(computePathLines);
        processor(pathLines[0], pathLines[1]);
    });
}

function isBetween(value: number, p1: number, p2: number) {
    return p1 > p2 
        ? (value > p2 && value < p1) 
        : (value > p1 && value < p2);
}

function computePathLines(path: string) {
    const steps = path.split(',');
    const lines: Line[] = [];

    let x = 0, y = 0;

    for (let i = 0, j = steps.length; i < j; ++i) {
        const step = steps[i];
        const value = parseInt(step.substring(1), 10)

        switch(step[0]) {
            case 'U':
            case 'D':
                const mV = (value * (step[0] === 'U' ? 1 : -1));
                lines.push([ x, y, mV, Orientation.Vertical ]);
                y += mV;
                break;
            case 'L':
            case 'R':
                const mH = (value * (step[0] === 'R' ? 1 : -1));
                lines.push([ x, y, mH, Orientation.Horizontal ]);
                x += mH;
                break;
        }
    }

    return lines;
}