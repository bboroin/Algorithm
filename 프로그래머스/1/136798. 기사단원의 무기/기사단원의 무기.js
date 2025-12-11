function solution(number, limit, power) {
    var answer = 0;
    
    for (let i=1; i<=number; i++) {
        let divisorCount = 0;
        for (let j=1; j<=Math.sqrt(i); j++) {
            if (i % j === 0) {
                divisorCount++;
                if (j !== i / j) divisorCount++;
            } 
        }
        divisorCount > limit ? answer += power : answer += divisorCount;
    }    
    return answer;
}