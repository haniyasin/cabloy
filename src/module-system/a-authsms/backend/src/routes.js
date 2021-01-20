module.exports = app => {
  const routes = [
    // captcha
    { method: 'post', path: 'captcha/sendCode', controller: 'captcha' },
    // auth
    { method: 'post', path: 'auth/signin', controller: 'auth', middlewares: 'captchaVerify',
      meta: {
        captchaVerify: { scene: { name: 'signin' } },
      },
    },
    { method: 'post', path: 'auth/signup', controller: 'auth', middlewares: 'captchaVerify,validate',
      meta: {
        captchaVerify: {
          scenes: [
            { name: 'signupCode', dataKey: 'captchaCode', fieldKey: 'tokenCode' },
            { name: 'signup', dataKey: 'captcha', fieldKey: 'token' },
          ],
        },
        validate: { validator: 'signup' },
      },
    },
    { method: 'post', path: 'auth/mobileVerify', controller: 'auth', middlewares: 'validate,captchaVerify',
      meta: {
        validate: { validator: 'mobileVerify' },
        captchaVerify: { scene: { name: 'mobileVerify' } },
      },
    },
  ];
  return routes;
};
