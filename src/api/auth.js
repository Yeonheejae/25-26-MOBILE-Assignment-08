const USER = {
    name: 'heejae',
    email: 'test@test.kr'
}

export const LoginAsync = ((email, password) => {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            if(email === 'test@test.kr' && password === '1234'){
                resolve(USER);
            } else {
                reject('로그인 실패ㅠㅠ');
            }
        }, 1000);
    });
});
