// import React from "react";
// import { ThemeProvider } from "styled-components";
// import GlobalStyle from "./styles/GlobalStyle";
// import theme from "./styles/theme";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import About from "./pages/About";
// import { AuthLayout, DefaultLayout } from "./components/layout/PageLayout";

const App: React.FC = () => (
  <div style={{ width: "100%", height: "100%", backgroundColor: "aqua" }}>
    <h1>Hello World</h1>
  </div>
  //   <ThemeProvider theme={theme}>
  //     <GlobalStyle />
  //     <BrowserRouter>
  //       <Routes>
  //         <Route
  //           path="/"
  //           element={
  //             <DefaultLayout>
  //               <Home />
  //             </DefaultLayout>
  //           }
  //         />
  //         <Route
  //           path="/about"
  //           element={
  //             <DefaultLayout>
  //               <About />
  //             </DefaultLayout>
  //           }
  //         />

  //         {/* Auth Layout 적용 */}
  //         <Route
  //           path="/login"
  //           element={
  //             <AuthLayout>
  //               <div>Login</div>
  //             </AuthLayout>
  //           }
  //         />

  //         <Route
  //           path="*"
  //           element={
  //             <DefaultLayout>
  //               <NotFound />
  //             </DefaultLayout>
  //           }
  //         />
  //       </Routes>
  //     </BrowserRouter>
  //   </ThemeProvider>
);

export default App;
