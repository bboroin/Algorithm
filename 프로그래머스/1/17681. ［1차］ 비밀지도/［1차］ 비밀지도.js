function solution(n, arr1, arr2) {
    var answer = Array(n).fill("");
    const map1 = arr1.map((v)=>v.toString(2).padStart(n, "0"));
    const map2 = arr2.map((v)=>v.toString(2).padStart(n, "0"));
    for (let i=0; i<map1.length; i++){
        for (let j=0; j<n; j++) {
            if (map1[i][j] === "0" && map1[i][j] === map2[i][j]) answer[i] += " ";
            else answer[i] += "#";
        }
    }
    
    return answer;
}