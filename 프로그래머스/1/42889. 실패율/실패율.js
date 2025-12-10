function solution(N, stages) {
    const challenger = new Array(N+2).fill(0);
    for (let stage of stages) {
        challenger[stage] += 1;
    }
    const fails = {};
    let total = stages.length;
    for (let i=1; i<=N; i++){
        if (challenger[i] === 0) {
            fails[i] = 0;
        }
        else fails[i] = challenger[i] / total;
        total -= challenger[i];
    }
    
    
    return Object.entries(fails).sort((a, b)=>b[1]-a[1]).map((v)=>Number(v[0]));
}