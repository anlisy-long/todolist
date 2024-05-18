/**
 * 
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
export const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
      return timer;
  };
}
/**
 * 
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
export const throttle = (fn, delay) => {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
};