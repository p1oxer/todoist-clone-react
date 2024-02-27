import { Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import { TodayPage } from "./pages/TodayPage";
import { UpcomingPage } from "./pages/UpcomingPage";
import { Layout } from "./components/Layout";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/today" element={<TodayPage />} />
                <Route path="/upcoming" element={<UpcomingPage />} />
            </Route>
        </Routes>
    );
}

export default App;
