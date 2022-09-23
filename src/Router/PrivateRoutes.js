import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../Layout';
import ProtectedRoutes from './ProtectedRoutes';
let Home = () => (<h1>Home1</h1>);
let About = () => (<h1>About</h1>);

function PrivateRoutes() {
  return (
    <Routes>
        <Route path="/" element={
          <ProtectedRoutes isLogin={true}>
            <SharedLayout />
          </ProtectedRoutes>
        }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
    </Routes>
  )
}

export default PrivateRoutes;