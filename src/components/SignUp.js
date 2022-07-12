import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = event.target.elements;
		try {
			await createUserWithEmailAndPassword(auth, email.value, password.value);
			navigate("/");
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	return (
		<>
			<h1>ユーザー登録</h1>
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
					<button>登録</button>
				</div>
				<div>
					ユーザ登録済の場合は<Link to={"/login"}>こちら</Link>から
				</div>
			</form>
		</>
	);
};

export default SignUp;
