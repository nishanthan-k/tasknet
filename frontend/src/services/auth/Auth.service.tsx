
type SignUpType = {
  email: string,
  password: string,
}

interface SignUp {
  status: boolean,
  message: string,
}

export const SignUpApi = (props: SignUpType): SignUp => {
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

  return {status: true, message: 'Signup successful'};
};