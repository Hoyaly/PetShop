// // Login.js
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   const history = useHistory();

//   const handleLogin = () => {
//     // Kiểm tra đăng nhập - Đây là nơi bạn sẽ thực hiện kiểm tra đăng nhập thực tế, có thể sử dụng API, Firebase, hoặc bất kỳ phương thức nào khác.
//     if (username === 'user' && password === 'password') {
//       setLoggedIn(true);
//       history.push('/dashboard'); // Chuyển hướng sau khi đăng nhập thành công
//     } else {
//       alert('Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
//     }
//   };

//   return (
//     <div>
//       <h2>Đăng nhập</h2>
//       <label>
//         Tên đăng nhập:
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <label>
//         Mật khẩu:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <button onClick={handleLogin}>Đăng nhập</button>
//     </div>
//   );
// };

// export default Login;
