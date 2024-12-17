import React, { useState } from "react";
import { DNA } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { usersRef } from "./firebase/Firebase";
import Swal from "sweetalert2";
import { addDoc } from "firebase/firestore";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Signup.css";

export default function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        user: "",
        mobile: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    const uploadData = async () => {
        try {
            setLoading(true);
            await addDoc(usersRef, {
                user: form.user,
                password: form.password,
                mobile: form.mobile
            });
            setLoading(false);
            Swal.fire({
                text: "Successfully Registered",
                icon: "success",
                buttons: false,
                timer: 3000,
            });
            navigate("/login");
        } catch (err) {
            console.error("Error uploading data: ", err);
            setLoading(false);
            Swal.fire({
                text: "Error uploading data",
                icon: "error",
                buttons: false,
                timer: 3000,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handlePhoneChange = (value) => {
        setForm({ ...form, mobile: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        uploadData();
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <h2 className="signup-header">Sign Up</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="signup-form-group">
                        <label>Name</label>
                        <input
                            id="user"
                            name="user"
                            className="signup-input"
                            type="text"
                            value={form.user}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="signup-form-group">
                        <label>Mobile Number</label>
                        <PhoneInput
                            country={"in"}
                            value={form.mobile}
                            onChange={handlePhoneChange}
                            inputClass="phone-input"
                            required
                        />
                    </div>
                    <div className="signup-form-group">
                        <label>Password</label>
                        <input
                            className="signup-input"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="signup-button" type="submit">
                        {loading ? <DNA height={30} /> : "Sign Up"}
                    </button>
                    <p className="signup-footer">
                        <b>Already have an account???</b>{" "}
                        <Link to="/login">
                            <span>Login</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
