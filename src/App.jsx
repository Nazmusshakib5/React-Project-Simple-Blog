import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/details/postID' element={<DetailsPage/>} />
                <Route path='/postlist/:categoryID' element={<BlogListPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;