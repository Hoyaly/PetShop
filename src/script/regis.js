let email = document.querySelector('#email')
let password = document.querySelector('#password')
let btn = document.querySelector('.btn')
btn.onclick = () => {
    let url = "https://6489cf5e5fa58521cab04b75.mockapi.io/user"
    const userData = {
        name: email.value,
        password: password.value
    }
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      alert('Đăng kí thành công')
    })
    .catch(error => {
        alert('Đăng kí không thành công')

      });
}