let email = document.querySelector('#email')
let password = document.querySelector('#password')
let btn = document.querySelector('.btn')

btn.onclick = () => {
    let url = "https://6489cf5e5fa58521cab04b75.mockapi.io/user"
    fetch(url)
        .then(data => data.json())
        .then(data => {
            let listUser = data
            let isLogin = false
            for (let i = 0; i < listUser.length; i++) {
                if (listUser[i].name === email.value) {
                    if (listUser[i].password === password.value) {
                        isLogin = true
                        break;
                    }
                }
            }
            if (isLogin) {
                alert('Đăng nhập thành công')
                window.location.href = "http://localhost:3000/"

            } else {
                alert('Đăng nhập thất bại')

            }
        })
}
// // Sử dụng thư viện axios để thực hiện yêu cầu HTTP
// const axios = require('axios');

// // Thông tin tài khoản để đăng nhập
// const username = 'name';
// const password = 'password';

// // URL API đăng nhập trên MockAPI
// const loginUrl = 'https://6489cf5e5fa58521cab04b75.mockapi.io/user';

// // Dữ liệu cần gửi đi để đăng nhập
// const loginData = {
//   username: username,
//   password: password
// };

// // Thực hiện yêu cầu POST đến API đăng nhập
// axios.post(loginUrl, loginData)
//   .then(response => {
//     // Xử lý phản hồi từ server
//     console.log('Đăng nhập thành công!');
//     console.log('Token: ', response.data.token);
//   })
//   .catch(error => {
//     // Xử lý lỗi
//     console.error('Đăng nhập thất bại:', error.response.data);
//   });

