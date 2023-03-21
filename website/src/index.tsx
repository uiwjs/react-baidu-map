import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { routesConfig } from './data';
import './index.less';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<RouterProvider router={createHashRouter(routesConfig as any)} fallbackElement={<div>xxx</div>} />);
