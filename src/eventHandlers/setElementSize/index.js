const setElementSize = (evt, element, initFunc) => {
  const currEl = evt.target;

  element.width = currEl.innerWidth;
  element.height = currEl.innerHeight;

  initFunc();
};

export default setElementSize;