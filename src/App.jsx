import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserPage from "./components/User/UserPage";
import { useState } from "react";

function App() {
  const [visitedLinks, setVisitedLinks] = useState([]);

  const addToVisitedLinks = (name, link) => {
    setVisitedLinks((prevLinks) => [...prevLinks, { name, link }]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<UserList addToVisitedLinks={addToVisitedLinks} />}
        />
        <Route
          path="/user/:userId"
          element={
            <UserPage
              addToVisitedLinks={addToVisitedLinks}
              visitedLinks={visitedLinks}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
