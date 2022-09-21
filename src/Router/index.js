import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout, { LoginLayout } from '../Layout';
let Home = () => (<h1>Home1</h1>);
let About = () => (<h1>About</h1>);

function Router() {
  return (  
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<SharedLayout/>} >
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />  
        </Route>  
        <Route path="/login" element={<LoginLayout/>} >
          <Route index element={<Home/>} />
        </Route>          
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
