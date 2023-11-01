import { Routes, Route } from "react-router-dom";
import { HomePage } from "../home/HomePage";
import { AboutUs } from "../about/AboutUs";
import { Contact } from "../contact/Contact";
import { BookDetail } from "../details/BookDetail";
import { MainContent } from "../components/MainContent";
import { Layout } from "../Layout/Layout";
import { Cart } from "../cart/Cart";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<MainContent />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element="404 page not found" />
      </Route>
    </Routes>
  );
};
