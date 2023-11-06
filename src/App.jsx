import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./pages/header/HeaderPage";
import BannarPage from "./pages/bannar/BannarPage";
import AboutPage from "./pages/about/AboutPage";
import TeacherPages from "./pages/teachers/TeacherPages";
import CoursePage from "./pages/courses/CoursePage";
import AchievementPage from "./pages/achievement/AchievementPage";
import GalleryPage from "./pages/gallery/GalleryPage";
import BlogPage from "./pages/blogs/BlogPage";
import FooterPage from "./pages/footer/FooterPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderPage />}>
          <Route index element={<BannarPage />} />
          <Route path="abouts" element={<AboutPage />} />
          <Route path="teacher" element={<TeacherPages  />} />
          <Route path="course" element={<CoursePage  />} />
          <Route path="achievement" element={<AchievementPage  />} />
          <Route path="gallery" element={<GalleryPage  />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="footer" element={<FooterPage  />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
