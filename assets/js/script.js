const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const gender = getInputSelectValue('gender');
    const age = getInputNumberValue('age');
    const weight = getInputNumberValue('weight');
    const height = getInputNumberValue('height');
    const activity_level = getInputSelectValue('activity_level');

    const tmb = Math.round(
        gender === 'female'
            ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
            : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
    );

    const maintenance = Math.round(tmb * Number(activity_level));

    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;

    const layout = `
    <h2>Here is the result:</h2>

    <div class="result-content">
      <ul>
        <li>
          Your basal metabolism is of <strong>${tmb} calories</strong>.
        </li>
        <li>
          To keep your weight you need to consume an average of <strong>${maintenance} calories</strong>.
        </li>
        <li>
          To lose weight you need to consume an average of <strong>${loseWeight} calories</strong>.
        </li>
        <li>
          To gain weight you need to consume an average of <strong>${gainWeight} calories</strong>.
        </li>
      </ul>
    </div>
  `;

    const result = document.getElementById('result');

    result.innerHTML = layout;

};

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}

function getInputSelectValue(id) {
    const select = document.getElementById(id);

    return select.options[select.selectedIndex].value;
}