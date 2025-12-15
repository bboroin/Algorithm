function solution(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (isValid(s, i)) count++;
    }
    return count;
}

function isValid(s, start) {
    const stack = [];
    const pair = { ')': '(', ']': '[', '}': '{' };

    for (let i = 0; i < s.length; i++) {
        const ch = s[(start + i) % s.length];

        if (['(', '[', '{'].includes(ch)) {
            stack.push(ch);
        } else {
            if (stack.pop() !== pair[ch]) return false;
        }
    }
    return stack.length === 0;
}