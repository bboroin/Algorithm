function solution(prices) {
    var answer = [];
    for (let i=0; i<prices.length; i++) {
        let count = 0; // 가격이 떨어지지 않은 기간
        for (let j=i+1; j<prices.length; j++) {
            count++;
            // 현재 시점 가격이 다음 시점 가격보다 작거나 같다면
            if (prices[i] > prices[j]) break;
        }
        answer.push(count);
        
    }
    return answer;
}