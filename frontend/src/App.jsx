import {  Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import BookDetailPage from "./pages/BookDetailPage";
import { Toaster } from "react-hot-toast";
const App= () => {
    return (
            <div className="App">
                <Toaster position="top-center" />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/book/:id" element={<BookDetailPage />} />
                </Routes>
            </div>
        
    );
}

export default App;