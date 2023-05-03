import React from "react";

export default function Login() {
    return (
        <div className="login-section">
            <h1 className="login-title">Sign in to your account</h1>
            <input className="login-field" type="text" placeholder="Email address" />
            <input className="login-field" type="password" placeholder="Password" />

            <button className="login-btn">Sign in</button>
            <p className="login-text">Don't have an account? <a href="#">Create one now</a></p>
        </div>
    )
}