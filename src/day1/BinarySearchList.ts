export default function bs_list(haystack: number[], needle: number): boolean {
    let lo: number = 0;
    let hi: number = haystack.length;
    do {
        let midpoint = Math.floor(lo + (hi - lo) / 2);

        if (haystack[midpoint] === needle)
            return true;
        else if (haystack[midpoint] < needle) {
            lo = midpoint + 1;
        } else {
            hi = midpoint;
        }
        // 1, 2, 3, 4, 45, 69, 89, 90, 101, 1337, 69420
    } while (lo < hi);

    return false;
}