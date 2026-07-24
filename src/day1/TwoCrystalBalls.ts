export default function two_crystal_balls(breaks: boolean[]): number {
    let sqrt_n = Math.floor(Math.sqrt(breaks.length));
    let i: number = 0;
    let linear: boolean = false;

    do {

        if (!breaks[i]) {
            let iterator: number = linear ? 1 : sqrt_n;
            i = i + iterator;
        }
        else if (breaks[i] && !linear) {
            i = i - sqrt_n;
            linear = true;
        } else {
            return i;
        }

    } while(i < breaks.length);

    // Prime's solution
    // const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    // let i = jmpAmount;
    // for (; i < breaks.length; i += jmpAmount) {
    //     if (breaks[i]) {
    //         break;
    //     }
    // }
    //
    // i -= jmpAmount;
    //
    // for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    //     if (breaks[i]) {
    //         return i;
    //     }
    // }

    return -1;
}
