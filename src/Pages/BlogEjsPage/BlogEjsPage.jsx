import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";

const BlogEjsPage = () => {
  const { id } = useParams(); // Retrieve the blog ID from the URL
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`https://backend.maflam.com/maflam/get-blogs?lang=0&&_id=${id}`);
        setBlogData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching blog data");
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <LanguageProvider> 
      <div dangerouslySetInnerHTML={{ __html: blogData }} />
      </LanguageProvider>
 
    </div>

  );
};

export default BlogEjsPage;
