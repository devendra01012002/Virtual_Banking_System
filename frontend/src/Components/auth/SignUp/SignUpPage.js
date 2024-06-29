import React, { useState } from 'react';
import './SignUpPage.css';
import axios from 'axios';

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        // Create a FormData object to send the data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('mobileNo', mobileNo);
        formData.append('profilePhoto', profilePhoto);

        // Make an axios request to the server
        // axios.post('/api/signup', formData)
        //     .then((response) => {
        //         // Handle success response
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         // Handle error response
        //         console.error(error);
        //     });
    };

    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="name-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="username-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="email-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="password-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNo">Mobile No</label>
                    <input
                        type="tel"
                        id="mobileNo"
                        className="mobileNo-input"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="profilePhoto">Profile Photo</label>
                    <input
                        type="file"
                        id="profilePhoto"
                        className="profilePhoto-input"
                        onChange={(e) => setProfilePhoto(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;