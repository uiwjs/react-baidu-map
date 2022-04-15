import { createRoot } from 'react-dom/client';
import '@uiw/reset.css';
import './index.less';
import App from './pages/root/App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
