function solution(arr1, arr2) {
    const arr = new Array(arr1.length).fill(0).map(() => new Array(arr2[0].length).fill(0));
    var answer = [[]];
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr2[0].length; j++) {
            for (let k=0; k<arr2.length; k++) {
                arr[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return arr;
}