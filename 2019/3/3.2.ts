import { processInputLines } from '../../utils/input';
import { processPaths, computeIntersection, taxidist, Orientation } from './3';

processPaths((path1, path2) => {
    const distances: number[] = [];
    let p1dist = 0;

    for (const l1 of path1) {
        let p2dist = 0

        for (const l2 of path2) {
            const int = computeIntersection(l1, l2);

            if (int != null) {
                const sumdist = (p1dist + taxidist(int[0] - l1[0], int[1] - l1[1]))
                    + (p2dist + taxidist(int[0] - l2[0], int[1] - l2[1]));
                    
                distances.push(sumdist);
            }

            p2dist += Math.abs(l2[2]);
        }

        p1dist += Math.abs(l1[2]);
    }

    console.log(distances.reduce((min, c) => c < min ? c : min, Number.MAX_SAFE_INTEGER));
});