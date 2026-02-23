import BlogDetailLayout from "../../BlogDetailLayout";
import { BlogDetailProvider } from "../../context/BlogDetailContext";


export default function PreviewLayout({ children }) {
  return (
    <BlogDetailProvider>
      <BlogDetailLayout>{children}</BlogDetailLayout>
    </BlogDetailProvider>
  );
}
