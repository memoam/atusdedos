import endpoint from './endpoint';

export function postSigninService({ email, password }) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const body = {
    email,
    password,
  };
  const reqOption = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
  };
  return fetch(`${endpoint}/auth/signin`, reqOption);
}

export function postSignupService({
  username,
  name,
  lastName,
  email,
  password,
  birthDay,
  birthMonth,
  birthYear,
}) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const body = {
    username,
    name,
    lastName,
    email,
    password,
    birthDay,
    birthMonth,
    birthYear,
  };
  const reqOption = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
  };
  return fetch(`${endpoint}/auth/signup`, reqOption);
}
