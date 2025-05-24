const registrationForm = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-button');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

function validateRegistrationForm() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Habilita o botão apenas se todos os campos estiverem preenchidos
 submitButton.disabled = (name.length === 1 && confirmPassword.length === 1);

 if (submitButton.disabled) {
    errorMessage.textContent = 'Deve ser imputado dados validos';
    errorMessage.style.display = 'block';
    return;
  }
  
  return { name, email, password, confirmPassword };
}

[nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
  input.addEventListener('input', validateRegistrationForm);
});

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { name, email, password, confirmPassword } = validateRegistrationForm();

  // Resetar mensagens
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  // Cenário 5: Todos os campos em branco
  if (!name && !email && !password && !confirmPassword) {
    errorMessage.textContent = 'Todos os campos em branco';
    errorMessage.style.display = 'block';
    return;
  }

  // Cenário 3: Email obrigatório
  if (!email) {
    errorMessage.textContent = 'Campo de email em branco';
    errorMessage.style.display = 'block';
    return;
  }

  // Cenário 4: Email inválido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Formato de email inválido';
    errorMessage.style.display = 'block';
    return;
  }

  // Cenário Adicional 1: Limite de caracteres para Nome e Senha
  if (name.length > 50 || password.length > 50) {
    errorMessage.textContent = 'Nome e senha inválidos, limite de caracteres é até 50 caracteres';
    errorMessage.style.display = 'block';
    return;
  }

  // Cenário Adicional 2: Caracteres especiais no nome
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
  if (!nameRegex.test(name)) {
    errorMessage.textContent = 'O nome não pode conter caracteres especiais';
    errorMessage.style.display = 'block';
    return;
  }

  // Cenário 2: Senhas diferentes
  if (password !== confirmPassword) {
    errorMessage.textContent = 'Preenchimento de senha e confirmação de senha diferentes';
    errorMessage.style.display = 'block';
    return;
  }

  // Cenário 1: Cadastro bem-sucedido
  successMessage.textContent = 'Preenchimento correto de todos os campos e envio bem-sucedido.';
  successMessage.style.display = 'block';
  registrationForm.reset();
  submitButton.disabled = true;
});