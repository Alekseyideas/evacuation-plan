/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const generateID2 = (callback) => {
  if (process.env.NODE_ENV === 'development') {
    const testKey = '25c9d5a2-bcaa-11a0-427c-2d012c117e0d';
    localStorage.setItem('token', testKey);
    return callback(testKey);
  }
  const publication_code = '';
  const aktion = [];
  (function () {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//m.action-media.ru/js/all.2.js';
    const es = document.getElementsByTagName('script')[0];
    es.parentNode.insertBefore(s, es);
  })();
  window.AsyncInit = function () {
    // console.log(aktionid);
    // setToken(aktionid.token);

    //
    aktionid.init({
      appid: '10559',
      emid: publication_code,
      rater: false,
      clientcallback: '',
      loginblock: 'login',
      style: 'light',
      lang: 'ua',
      supportlink: 'https://id.mcfr.ua/Feedback',
      reglink: 'https://id.mcfr.ua/Account/Registration',
    });
    aktionid.subscribe('status.auth', callbackAuth);
    aktionid.subscribe('token.change', callbackChange);
    aktionid.subscribe('status.noauth', callbackNoauth);
  };

  function runTargetAction(user_id) {
    console.log('start');
    if (user_id > 0) {
      console.log('ok', 2874, 3680);
      aktion.push([
        'saveaction',
        user_id,
        'target',
        'https://service.mcfr.ua/ua/dish/',
        2874,
        3680,
        '',
      ]);
    }
  }

  async function callbackAuth(o) {
    if (o.status.token) {
      const tk = await localStorage.getItem('token');
      if (!tk) {
        if (o.status.token !== '') {
          console.log('callbackAuth created');
          if (o.user.id) runTargetAction(+o.user.id);
          await localStorage.setItem('token', o.status.token);
          callback(aktionid.token);
          // self.location = `/ua/calc_debts/none/?token=${o.status.token}${utm_parameters_string}`;
        } else {
          callback('');
          localStorage.clear();
        }
      } else {
        console.log('token already exist !');
      }
    }
  }

  async function callbackChange(o) {
    if (o.status.token) {
      if (o.status.token !== '') {
        console.log('callbackChange update');
        // self.location = `/ua/calc_debts/none/?token=${o.status.token}${utm_parameters_string}`;
        if (o.user.id) runTargetAction(+o.user.id);
        await localStorage.setItem('token', o.status.token);
        callback(o.status.token);
      } else {
        callback('');
        localStorage.clear();
      }
    } else {
      callback('');
      localStorage.clear();
    }
  }

  async function callbackNoauth(o) {
    console.log(o, 'callbackNoauth');
    callback('');
    localStorage.clear();
  }

  return null;
};

export default generateID2;
