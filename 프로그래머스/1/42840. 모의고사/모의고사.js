function solution(answers) {
    var answer = [];
    const pat1 = [1, 2, 3, 4, 5];
    const pat2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pat3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == pat1[i % pat1.length]) count[0]++;
        if(answers[i] == pat2[i % pat2.length]) count[1]++;
        if(answers[i] == pat3[i % pat3.length]) count[2]++;
    }

    const max = Math.max(...count);
    for(let i = 0; i < count.length; i++) {
        if(max == count[i]) answer.push(i + 1);
    }

    return answer;
}