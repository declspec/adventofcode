import { processPaths, computeIntersection, taxidist, Orientation } from './3';

processPaths((path1, path2) => {
    const distances: number[] = [];

    for (const l1 of path1)
    for (const l2 of path2) {
        if (computeIntersection(l1, l2) != null)
            distances.push(taxidist(l1[3] === Orientation.Vertical ? l1[0] : l2[0], l1[3] === Orientation.Horizontal ? l1[1] : l2[1]));
    }

    console.log(distances.reduce((min, c) => c < min ? c : min, Number.MAX_SAFE_INTEGER));
});