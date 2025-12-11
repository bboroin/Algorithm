function solution(number, limit, power) {
    var answer = 0;
    const knights = []
    let divisorCount = 0;
    for (let i=1; i<=number; i++) {
        for (let j=1; j<=Math.sqrt(i); j++) {
            if (i % j === 0) {
                divisorCount++;
                if (j !== i / j) divisorCount++;;
            } 
        }
        knights.push(divisorCount);
        divisorCount = 0; 
    }
    for (let i=0; i<knights.length; i++) {
        if (knights[i] > limit) answer += power;
        else answer +=knights[i];
    }
    
    return answer;
}