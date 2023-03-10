import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Login from 'views/auth/login';
import Register from 'views/auth/register';
import { pb } from 'api';

import Chat from 'views/app/chat';
import { AuthLayout } from 'components/layouts';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						pb.authStore.isValid ? (
							<Navigate to="/chat" state={{from:'/root'}} />
						) : (
								<Navigate to="/login" state={{ from:'/root'}} />
						)
					}
				/>
				<Route path="/chat" element={<Chat />} />
				<Route element={<AuthLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
