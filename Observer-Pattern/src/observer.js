const createSubject = () => {
  let observers = [];

  return {
    subscribe: (observerFn) => observers.push(observerFn),
    unsubscribe: (observerFn) =>
      observers = observers.filter(fn => fn !== observerFn),
    notify: (data) => observers.forEach(fn => fn(data)),
  };
};

export const countSubject = createSubject();
