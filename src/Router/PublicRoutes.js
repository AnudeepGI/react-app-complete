
import { Routes, Route } from 'react-router-dom';
import { LoginLayout } from '../Layout';

let Home = () => (<h1>Home1</h1>);

function PublicRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginLayout />} >
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default PublicRoutes