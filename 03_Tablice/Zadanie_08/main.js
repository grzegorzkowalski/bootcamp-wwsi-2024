function distFromAverage(tab) {
    const avg = tab.reduce((prev, cur) => prev + cur)/tab.length;
    const dist = tab.map(el => Math.abs(el-avg));
    console.log(dist);
    return dist;
}

distFromAverage([1,2,3,4,5]);
distFromAverage([1,2,3,4,5,6,7]) //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)