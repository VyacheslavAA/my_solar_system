import setElementSize from './eventHandlers/setElementSize';

const initialize = () => {
  const canvasEl = document.getElementById('canvas');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = width;
  canvasEl.height = height;

  window.addEventListener('resize', (evt) => setElementSize(evt, canvasEl));

  return [ctx, canvasEl];
};

export default initialize;