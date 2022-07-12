import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const handleLogin = async (event) => {
		try {
			await signInWithPopup(auth, provider);
			navigate("/");
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = event.target.elements;
		try {
			await signInWithEmailAndPassword(auth, email.value, password.value);
			navigate("/");
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};
	return (
		<div>
			<div>
				<h1>グーグルアカウントでログイン</h1>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<button onClick={handleLogin}>Googleログイン</button>
			</div>
			<h1>メールアドレスでログイン</h1>
			{error && <p style={{ color: "red" }}>{error}</p>}
			<form onSubmit={handleSubmit}>
				<div>
					<label>メールアドレス</label>
					<input name="email" type="email" placeholder="email" />
				</div>
				<div>
					<label>パスワード</label>
					<input name="password" type="password" placeholder="password" />
				</div>
				<div>
					<button>ログイン</button>
				</div>
				<div>
					ユーザー登録は<Link to={"/signup"}>こちら</Link>から
				</div>
			</form>
		</div>
	);
};

export default Login;
