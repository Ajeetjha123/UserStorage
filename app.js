function saveInput(event){
  event.preventDefault();
  const formValues = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    phone : document.getElementById('phone').value,
  }
  localStorage.setItem('formValues', JSON.stringify(formValues));
  displayFormValues();
};

function displayFormValues(){
  const savedValues = JSON.parse(localStorage.getItem('formValues')); 
  const displayArea = document.createElement('div');
  const namePara = document.createElement('p');
  const emailPara = document.createElement('p');
  const phonePara = document.createElement('p');
  namePara.textContent = `Name: ${savedValues.name}`;
  emailPara.textContent = `Email: ${savedValues.email}`;
  phonePara.textContent = `Phone: ${savedValues.phone}`;
  displayArea.appendChild(namePara);
  displayArea.appendChild(emailPara);
  displayArea.appendChild(phonePara);
  document.body.appendChild(displayArea);
  window.onload = function(){
    if(localStorage.getItem('formValues')){
      displayFormValues();
    }
  }
}
