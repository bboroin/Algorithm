function solution(num_list) {
    var answer = [];
    num_list.forEach((v)=>answer.unshift(v));
    return answer;
}