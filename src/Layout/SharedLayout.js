import React from 'react';
import { Outlet } from "react-router-dom";

let Header = () => <h1>------Header------</h1>
let Footer = () => <h1>------Header------</h1>

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
