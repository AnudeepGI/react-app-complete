import { BrowserRouter } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

function Router() {
  return (
    <BrowserRouter>
      <PrivateRoutes/>
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default Router;
