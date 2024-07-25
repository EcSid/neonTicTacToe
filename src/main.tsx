import ReactDOM from 'react-dom/client'
import './styles/_global.css'
import App from './App/App'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
)
