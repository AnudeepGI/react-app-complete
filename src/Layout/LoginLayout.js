import React from 'react';
import { Outlet } from "react-router-dom";

let Footer = () => <h1>------Header------</h1>

export default function LoginLayout() {
  return (
    <div>
      <h1>Login</h1>
      <Outlet />
      <Footer />
    </div>
  );
}
