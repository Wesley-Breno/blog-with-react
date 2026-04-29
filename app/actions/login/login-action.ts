'use server';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Dados inválidos',
    };
  }

  // Dados que o usuário digitou no form
  const username = formData.get('username')?.toString() || '';
  const password = formData.get('password')?.toString() || '';

  // Aqui eu checaria se o usuário existe na base de dados
  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = '';

  return {
    username: '',
    error: '',
  };
}