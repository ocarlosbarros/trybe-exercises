
function FillSelectField(){
  const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
  const fieldSelect = document.querySelector('#field-state');
  
  for (let index = 0; index < states.length; index += 1) {
    const stateOption = document.createElement('option');
    stateOption.value = states[index];
    stateOption.innerText = states[index];
    fieldSelect.appendChild(stateOption);
  }
}

FillSelectField();