
type AuthApiPropsType = {
  email: string,
  password: string,
}

interface AuthApiRespType {
  status: boolean,
  message: string,
}

export const SignUpApi = async (props: AuthApiPropsType): Promise<AuthApiRespType> => {
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(props),
  // };
  // const req = await fetch('url', options);

  // if (!req.ok) {
  //   const errorData = req.json();
  //   console.log(errorData);
  //   return;
  // }
  console.log(JSON.stringify(props));

  return {status: true, message: 'Signup successful'};
};

export const LoginApi = async (props: AuthApiPropsType): Promise<AuthApiRespType> => {
  console.log(props);
  return { status: true, message: 'Login successful' };
};
