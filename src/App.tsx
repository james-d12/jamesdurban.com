import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Pages from "Pages"

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<Pages.NotFoundPage />} />
                <Route path="/" element={<Pages.HomePage />} />
            </Routes>
        </Router>
    )
}

export default App;