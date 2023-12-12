import { event, isEmptyObject } from "jquery";
import React from "react";
import { useState } from "react";
import '../css/Login.css';

const url = "https://6489cf5e5fa58521cab04b75.mockapi.io/user"
const initFormValue = {
    email: "",
    password: "",
}

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
}

export default function Login () {
    
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});

    const validateForm = () => {
        const error = {};

        if (isEmptyValue(formValue.email)) {
            error["email"] = "Hãy nhập Email dô";
        }
        if (isEmptyValue(formValue.password)) {
            error["password"] = "Nhập cái pát quộc";
        }

        setFormError(error);

        return Object.keys(error).length === 0;
    }

    const handleChange = (event) => {
        const {value, name} = event.target;
        setFormValue ({
            ...formValue, 
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 

        if (validateForm()) {
            console.log("form value" , formValue);
        } else {
            console.log("form invalid");
        }
        
    }
    return ( 
        <div className="register-page">
            <div className="register-form-container">
                <h1 className="tittle">Đăng nhập</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-lable">
                            Email
                        </label>
                        <input
                            id="name"
                            className="form-control"
                            type="text"
                            name="email"
                            value={formValue.email}
                            onChange={handleChange}
                        />
                        {formError.email && (
                            <div className="error-feddback">{formError.email}</div>
                        )}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-lable">
                            Password
                        </label>
                        <input
                            id="password"
                            className="form-control"
                            type="password"
                            name="password"
                            value={formValue.password}
                            onChange={handleChange}
                        />
                        {formError.password && (
                            <div className="error-feddback">{formError.password}</div>
                        )}
                    </div>
                    <button>
                        <a href="http://localhost:3000">Đăng nhập</a>
                    </button>
                </form>
            </div>
        </div>
    )
}
