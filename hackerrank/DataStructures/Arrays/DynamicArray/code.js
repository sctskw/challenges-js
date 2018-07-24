function dynamicArray(n, queries) {

  let len = queries.length;
  let last = 0;
  let seqs = [];
  let results = [];

  for(let i = 0; i < len; i++) {

    let query = queries[i];
    let type = query[0];
    let x = query[1];
    let y = query[2];
    let seq = (x ^ last) % n;

    if(!seqs[seq]) seqs[seq] = [];

    //query 1
    if(type === 1) {
      seqs[seq].push(y);
    }

    //query 2
    if(type === 2) {
      let idx = y % seqs[seq].length;
      last = seqs[seq][idx];
      results.push(last);
    }

  }

  return results;

}
