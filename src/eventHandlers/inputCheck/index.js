const inputCheck = (evt, planetsInit) => {
  const currEl = evt.target;
  const parameterName = currEl.name;
  const value = parameterName === 'is3d' || parameterName === 'path' ? currEl.checked : +currEl.value;

  if (parameterName === 'is3d') {
    const customCheckboxEl = document.querySelector('#path + .customCheckbox');
    const checkboxEl = document.querySelector('#path');

    checkboxEl.disabled = value;
    customCheckboxEl.classList.toggle('customCheckbox--disabled');
  }

  planetsInit({[parameterName]: value});
};

export default inputCheck;