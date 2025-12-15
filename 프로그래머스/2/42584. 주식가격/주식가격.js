function solution(prices) {
    var answer = [];
    for (let i=0; i<prices.length; i++) {
        let count = 0; // 가격이 떨어지지 않은 기간
        for (let j=i+1; j<prices.length; j++) {
            count++;
            // 가격이 떨어졌다면 반복문 종료
            if (prices[i] > prices[j]) break;
        }
        answer.push(count);
        
    }
    return answer;
}