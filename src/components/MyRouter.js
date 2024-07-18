import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Home } from "./Home";
import { Header } from "./Header";
// import { Task } from "./task/Task";
import { BuddyProfile } from "./profile/BuddyProfile";
import { UserProfile } from "./profile/UserProfile";
import { BuddyTask } from "./task/BuddyTask";
import { UserTask } from "./task/UserTask";

export const MyRouter = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route index element ={<LandingPage />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="task" element={<Task />} /> */}
          <Route path="buddy/profile" element={<BuddyProfile />} />
          <Route path="user/profile" element={<UserProfile />} />
          <Route path="buddy/task" element={<BuddyTask />} />
          <Route path="user/task" element={<UserTask />} />

        </Routes>
      </div>
    </Router>
  );
};
