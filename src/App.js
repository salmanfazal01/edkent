import React from "react";
import Layout from "./containers/Layout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
};

export default App;
