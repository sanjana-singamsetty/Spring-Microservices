import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ViewMarkdown: React.FC = () => {
  const location = useLocation();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const file = params.get("file");

    if (file) {
      fetch(file)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch((err) => {
          console.error("Error loading markdown file:", err);
          setContent("# File not found");
        });
    }
  }, [location.search]);

  return (
    <section className="p-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default ViewMarkdown;
