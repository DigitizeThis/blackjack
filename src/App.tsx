import * as React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import "./Vendor";
// Application Styles
import './styles/app.scss';

class App extends React.Component {
	render() {
		const basename = process.env.NODE_ENV === 'development' ? '/' : ('/');

		return (
			<BrowserRouter basename={basename}>
				<Routes />
			</BrowserRouter>
		);

	}
}

export default App;
