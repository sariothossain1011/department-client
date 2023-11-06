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

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
