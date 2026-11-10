import { useState } from "react";

import Welcome from "./components/Welcome.jsx";
import Header from "./components/Header.js";
import ProfileCard from "./components/ProfileCard.js";
import Counter from "./components/Counter.js";
import Like from "./components/LikeButton.js";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.js";
import TermPage from "./pages/TermPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
import ProductListPage from "./pages/ProductListPage.js";
import { Form } from "lucide-react";
import FormPage from "./pages/FormPage.js";
import RHFPage from "./pages/RHFPage.js";
import EmployeesPage from "./pages/ChannelsPage.js";
import ChannelsPage from "./pages/ChannelsPage.js";

// type Teacher = {
//   name: string;
//   job: string;
//   year: number;
//   id: number;
// };

// const teachers: Teacher[] = [
//   {
//     job: "Dosen",
//     name: "pak dhika",
//     year: 1995,
//     id: 1,
//   },
//   {
//     job: "AI Engineer",
//     name: "Jeki",
//     year: 2006,
//     id: 2,
//   },
//   {
//     job: "Content Creator",
//     name: "Theo",
//     year: 2000,
//     id: 3,
//   },
// ];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/term" element={<TermPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* FORM & INPUT HANDLING LESSON */}
        <Route path="/form" element={<FormPage />} />
        <Route path="/rhf-form" element={<RHFPage />} />

        {/* Dynamic Routing */}

        <Route path="/product/:productslug" element={<ProductDetailPage />} />

        {/* Data Fetching */}
        <Route path="/channels-page" element={<ChannelsPage />} />
      </Routes>
    </>
  );
}

export default App;
