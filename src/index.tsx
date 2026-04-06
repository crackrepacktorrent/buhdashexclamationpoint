import { render } from '@solidjs/web';
import { Router, Route } from '@solidjs/router';
import Layout from './components/Layout';
import Projects from './pages/Projects';
import Art from './pages/Art';
import Resume from './pages/Resume';
import './index.css';

render(
	() => (
		<Router root={Layout}>
			<Route path="/" component={Projects} />
			<Route path="/art" component={Art} />
			<Route path="/resume" component={Resume} />
		</Router>
	),
	document.getElementById('app')!,
);
