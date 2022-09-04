const Password_Generator = (len) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const special_char = ['!', '@', '#', '$', '%', '^', '&', '*',"~","/"];
    const small_alpthabets = 'abcdefghijklpnopqrstupwxyz';
    const capital_alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const split_small_alpha = small_alpthabets.split('');
    const split_capi_alpha = capital_alpha.split('');
    let newPass = [];
    let indizual_char = '';
    for (let i = 0; i <= len - 1; i++) {
      indizual_char =
        split_small_alpha[parseInt(Math.random() * 26)] +
        numbers[parseInt(Math.random() * 10)] +
        special_char[parseInt(Math.random() * 10)] +
        split_capi_alpha[parseInt(Math.random() * 26)] +
        newPass.push(indizual_char);
    }
  
    const newPassword = newPass.join('').substring(1, len + 1);
    return newPassword;
  };
  export default Password_Generator;
  