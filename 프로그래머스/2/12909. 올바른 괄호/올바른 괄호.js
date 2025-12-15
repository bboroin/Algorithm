function solution(s){
    var answer = false;
    let arr = [];
    
    if (s.startsWith(")")) return answer;

    for (let i of s) {
        i === "(" ? arr.push(i) : arr.pop();
    } 

    return arr.length ? answer : !answer;
}