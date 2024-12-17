import React, { useContext, useState } from "react";
import { DNA } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { query, where, getDocs } from "firebase/firestore";
import { usersRef } from "./firebase/Firebase";
import { Appstate } from "./App";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Login.css";

export default function Login() {
    const navigate = useNavigate();
    const useAppstate = useContext(Appstate);
    const [form, setForm] = useState({
        mobile: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setLoading(true);
        try {
            const quer = query(usersRef, where("mobile", "==", form.mobile));
            const querySnapshot = await getDocs(quer);
            let userFound = false;
            let correctPassword = false;

            querySnapshot.forEach((doc) => {
                const _data = doc.data();
                userFound = true;
                if (form.password === _data.password) {
                    correctPassword = true;
                    useAppstate.setLogin(true);
                    useAppstate.setUserName(_data.user); // Adjust based on your field
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Logged In",
                        showConfirmButton: false,
                        timer: 3000
                    });
                    navigate("/");
                }
            });

            if (!userFound) {
                Swal.fire({
                    title: "User not found",
                    icon: "error",
                    buttons: false,
                    timer: 3000
                });
            } else if (!correctPassword) {
                Swal.fire({
                    title: "Wrong Password",
                    icon: "error",
                    buttons: false,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error logging in: ", error);
            Swal.fire({
                title: "Error logging in",
                icon: "error",
                buttons: false,
                timer: 3000
            });
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handlePhoneChange = (value) => {
        setForm({ ...form, mobile: value });
    };

    return (
        <div className="login">
            <div className="login-container">
                <h2 className="login-header">Login</h2>
                <div className="login-form-group">
                    <label>Mobile Number</label>
                    <PhoneInput
                        country={"in"}
                        value={form.mobile}
                        onChange={handlePhoneChange}
                        inputClass="phone-input"
                        required
                    />
                </div>
                <div className="login-form-group">
                    <label>Password</label>
                    <input
                        className="login-input"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="login-button" onClick={login}>
                    {loading ? <DNA height={30} /> : "Login"}
                </button>
                <p className="login-footer">
                    <b>Don't have an account?</b>{" "}
                    <Link to="/signup">
                        <span>Sign Up</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}
