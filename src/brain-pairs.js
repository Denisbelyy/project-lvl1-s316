export const isEven = number => number % 2 === 0;

export const cons = (a, b) => (message) => {
  switch (message) {
    case 'car': {
      return a;
    }
    case 'cdr': {
      return b;
    }
    default: {
      throw new Error(`Unknown message '${message}'`);
    }
  }
};

export const car = pair => pair('car');
export const cdr = pair => pair('cdr');
