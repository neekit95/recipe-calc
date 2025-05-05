import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './components/app/app.tsx'
import Header from "./components/header/header.tsx";
import style from './main.module.scss'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<div className={style.container}>
					<Header/>
					<App/>
				</div>
			</BrowserRouter>
		</Provider>
	</StrictMode>,
)
