import { useState } from "react";
import { supabase } from "./supabaseClient";

const Auth = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();

		setLoading(true);
		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			alert(error.message);
		} else {
			console.log("success");
		}
		setLoading(false);
	};

	return (
		<div className="row flex-center flex">
			<div className="col-6 form-widget">
				<h1 className="header">Supabase + React</h1>
				<p className="description">Sign in via your email & password below</p>
				<form className="form-widget" onSubmit={handleLogin}>
					<div>
						<input
							className="inputField"
							type="email"
							placeholder="Your email"
							value={email}
							required={true}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<input
							className="inputField"
							type="password"
							placeholder="Your Passowrd"
							value={password}
							required={true}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<button className={"button block"} disabled={loading}>
							{loading ? <span>Loading</span> : <span>Sign In</span>}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Auth;
