import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
	return (
		<AuthProvider>
			<div style={{ margin: "2em" }}>
				{/* componentをelementに修正 */}
				{/* element内のコンポーネントに<** />を追加 */}
				{/* Routesですべてのルートをラップ */}
				{/* <Route path="/" element={<PrivateRoutes/>}>で
					認証されたユーザのみがアクセスできるすべてのルートをラップ*/}
				{/* ↑上記でもエラーが出るのでPrivate&PublicRouteを記事を参考に書き換えたら表示された！ */}
				{/* {Homeでhistory.pushが動いていないエラーが出る
				// v5
				const history = useHistory();
				history.push("/");

				// v6
				const navigate = useNavigate();
				navigate("/");} */}
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<PrivateRoute />}>
							<Route exact path="/" element={<Home />} />
						</Route>
						<Route path="/login" element={<PublicRoute />}>
							<Route path="/login" element={<Login />} />
						</Route>
						<Route path="/signup" element={<PublicRoute />}>
							<Route path="/signup" element={<SignUp />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</AuthProvider>
	);
}

export default App;
