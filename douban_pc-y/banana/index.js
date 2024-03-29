
/**
 * 
 * @param {number[]} piles
 * @param {number} H 
 * @param {number} mid 
 * @return {bolean}
 */
function canEatAllBananas(piles, H, mid) {
    // 一定是H 小时
    let h = 0;
    // 吃
    for (let pile of piles) {
        h += Math.ceil(pile / mid);
    }
    return h <= H;
}
/**
 * 
 * @param {number} piles 
 * @param {number} H 
 */
function minEatingSpeed(piles, H) {
    let lo = 1;
    let hi = Math.max(...piles);
    console.log(hi);
    while (lo <= hi) {
        // lo试试
        let mid = lo + ((hi - lo) >> 1);
        console.log('-----', mid);
        // m正好可以
        if (canEatAllBananas(piles, H, m)) {
            hi = mid - 1;//将中间值改为中间值-1；
        } else {
            lo = mid + 1;//将最小值改为中间值+1
        }
    }
    return lo;
}
// console.log(canEatAllBananas([3,7,6,11],8,4));
console.log(minEatingSpeed([3, 6, 7, 11], 2));