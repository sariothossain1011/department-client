import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import BannarPage from "./pages/bannar/BannarPage";
import AboutPage from "./pages/about/AboutPage";
import TeacherPages from "./pages/teachers/TeacherPage";
import CoursePage from "./pages/courses/CoursePage";
import AchievementPage from "./pages/achievement/AchievementPage";
import GalleryPage from "./pages/gallery/GalleryPage";
import BlogPage from "./pages/blogs/BlogPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import CourseSinglePage from "./pages/courses/CourseSinglePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/contact/ContactPage";
import SpecificTeacher from "./components/teachers/SpecificTeacher";
function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
       
        <Route index path="/" element={<HomePage />} />
        <Route  path="/about" element={<AboutPage />} />
        <Route path="teachers" element={<TeacherPages />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/course-single" element={<CourseSinglePage />} />
        <Route path="/achievements" element={<AchievementPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/specificTeacher/:id" element={<SpecificTeacher></SpecificTeacher>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
