const inputCheck = (evt, planetsInit) => {
  const currEl = evt.target;
  const parameterName = currEl.name;
  const value = parameterName === 'is3d' || parameterName === 'path' ? currEl.checked : +currEl.value;

  if (parameterName === 'is3d' && value === false) {
    const customCheckboxEl = document.querySelector('#path + .customCheckbox');
    const checkboxEl = document.querySelector('#path');

    checkboxEl.disabled = false;
    customCheckboxEl.classList.remove('customCheckbox--disabled');
  } else if (parameterName === 'is3d' && value === true) {
    const customCheckboxEl = document.querySelector('#path + .customCheckbox');
    const checkboxEl = document.querySelector('#path');

    checkboxEl.disabled = true;
    customCheckboxEl.classList.add('customCheckbox--disabled');
  }

  planetsInit({[parameterName]: value});
};

export default inputCheck;