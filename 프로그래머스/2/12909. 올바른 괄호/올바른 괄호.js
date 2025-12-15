function solution(s){
    var answer = 0;
    
    for (let i of s) {
        answer += i === "(" ? 1 : -1;
        if (answer < 0) return false;
    } 

    return answer ? false : true;
}