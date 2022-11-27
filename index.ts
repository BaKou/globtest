export const foo = (interval: Array<number[]>): Array<number[]> => {
    if (interval.length > 0) {
      interval.sort((a, b) => {
        return a[0] - b[0];
      });
  
      const result: Array<number[]> = [];
  
      const inInterval = (initialArr: number[], newArr: number[]): boolean => {
        return (newArr[0] >= initialArr[0] && newArr[0] <= initialArr[1]) || (newArr[1] >= initialArr[0] && newArr[0] <= initialArr[1]);
      };
  
      interval.forEach((intervalArr, index) => {
        if (intervalArr.length !== 2) {
          throw new Error('interval with wrong number of data');
        }
  
        if (intervalArr[0] > intervalArr[1]) {
          throw new Error('element 0 of interval can\'t be superior of element 1 of interval');
        }
  
        if (index === 0) {
          result.push(intervalArr);
        } else {
          result.forEach((currentResultArray, i) => {
            if (inInterval(currentResultArray, intervalArr)) {
              result[i] = [
                intervalArr[0] <= currentResultArray[0] ? intervalArr[0] : currentResultArray[0],
                intervalArr[1] >= currentResultArray[1] ? intervalArr[1] : currentResultArray[1]
              ];
            }
            const isInOneInterval = result.some(elm => inInterval(elm, intervalArr));
            !isInOneInterval ? result.push(intervalArr) : null;
          });
        }
      });
  
      return result;
    }
  
    throw new Error('interval array empty');
  };
  