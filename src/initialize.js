const initialize = () => {
  const canvasEl = document.getElementById('canvas');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = width;
  canvasEl.height = height;

  return [ctx, canvasEl];
};

export default initialize;