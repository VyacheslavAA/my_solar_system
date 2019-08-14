const setElementSize = (evt, element) => {
  const currEl = evt.target;

  element.width = currEl.innerWidth;
  element.height = currEl.innerHeight;
};

export default setElementSize;