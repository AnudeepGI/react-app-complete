import { BrowserRouter, Routes, Route } from 'react-router-dom';

let Home = () => (<h1>Home</h1>);
let About = () => (<h1>About</h1>);

function RouterIndex() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterIndex;
