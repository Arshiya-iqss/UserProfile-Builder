import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/globalStyles.scss";
import Messages from "./pages/Messages/Messages";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";
// import Notifications from "./components/Notifications/Notifications";
import OpportunityPage from "./pages/Opportunity/OpportunityPage";
import ConnectionPage from "./pages/ConnectionPage/ConnectionPage";
import LoginPage from "./pages/Login/LoginPage";
import EntryPage from "./pages/EntryPage/EntryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/opportunity" element={<OpportunityPage />} />
          <Route path="/connections" element={<ConnectionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
