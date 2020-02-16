const initialize = () => {
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;

  return [ctx, canvasEl];
};

export default initialize;