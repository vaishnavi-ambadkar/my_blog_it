// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPostPage from './pages/AddPostPage';
import ListPostsPage from './pages/ListPostsPage';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<AddPostPage />} /> {/* Default route */}
                    <Route path="/add-post" element={<AddPostPage />} />
                    <Route path="/list-posts" element={<ListPostsPage />} /> {/* List Blogs page */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;

