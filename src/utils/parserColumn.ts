const parserColumn = <T>(arr: T[]): T[][] => {
  let queue1: T[] = [];
  let queue2: T[] = [];
  let queue3: T[] = [];

  arr.forEach((history, i) => {
    const extra = i % 3;
    if (extra === 0) {
      queue1.push(history);
    } else if (extra === 1) {
      queue2.push(history);
    } else {
      queue3.push(history);
    }
  });

  return [queue1, queue2, queue3];
};

export default parserColumn;
