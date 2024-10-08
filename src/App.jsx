import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import TeacherPages from "./pages/teachers/TeacherPage";
import CoursePage from "./pages/courses/CoursePage";
import AchievementPage from "./pages/achievement/AchievementPage";
import GalleryPage from "./pages/gallery/GalleryPage";
import BlogPage from "./pages/blogs/BlogPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import CourseSinglePage from "./pages/courses/SubjectsPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/contact/ContactPage";
import SpecificTeacher from "./components/teachers/SpecificTeacher";
import Dashboard from "./pages/Admin/Dashbord/Dashboard";
import Admin from "./pages/Admin/Admin";
import EditProfile from "./pages/Auntentication/EditProfile";
import Users from "./pages/Admin/Users";
import AddCourse from "./pages/Admin/AddCourse";
import BlogPost from "./pages/Admin/Blog/Article";
import Login from "./pages/Auntentication/Login";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Show from "./components/blogs/Show";
import SinglePage from "./components/blogs/SinglePage";
import DetailsTeacher from "./components/teacher/DetailsTeacher";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubjectsPage from "./pages/courses/SubjectsPage";
import ClassesPage from "./pages/courses/ClassesPage";
import AddTecher from "./pages/Admin/AddTecher";
import CreateSemesterPage from "./pages/Semester/CreateSemesterPage";
import SemesterListPage from "./pages/Semester/SemesterListPage";
import CreateSubjectPage from "./pages/Subject/CreateSubjectPage";
import SubjectListPage from "./pages/Subject/SubjectListPage";
import CreateVideoPage from "./pages/Video/CreateVideoPage";
import VideoListPage from "./pages/Video/VideoListPage";
import Teachers from "./pages/Admin/Dashbord/Teachers";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="teachers" element={<TeacherPages />} />
        <Route path="teacher/:id" element={<DetailsTeacher />} />
        <Route
          path="specificTeacher/:id"
          element={<SpecificTeacher></SpecificTeacher>}
        />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/courses/:semesterId" element={<CourseSinglePage />} />
        <Route
          path="/courses/:semesterId/:subjectId"
          element={<SubjectsPage />}
        />
        <Route
          path="/courses/:semesterId/:subjectId/:videos"
          element={<ClassesPage />}
        />
        <Route path="/achievements" element={<AchievementPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allBlogs" element={<BlogPage />} />
        <Route path="/article/:id" element={<SinglePage />}></Route>
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Admin />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="users" element={<Users />} />
          <Route path="addCourse" element={<AddCourse />} />
          <Route path="addBlog" element={<BlogPost />} />
          <Route path="addTecher" element={<AddTecher />} />
          <Route path="createSemester" element={<CreateSemesterPage />} />
          <Route path="semesterList" element={<SemesterListPage />} />
          <Route path="createSubject" element={<CreateSubjectPage />} />
          <Route path="subjectLsit" element={<SubjectListPage />} />
          <Route path="createVideo" element={<CreateVideoPage />} />
          <Route path="videoList" element={<VideoListPage />} />
          <Route path="teachers" element={<Teachers />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />

        {/* Login and singUp route's */}
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
