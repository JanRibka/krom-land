import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { News } from "../../models/News";

interface NewsCardProps {
  newsItem: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem }) => {
  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString("cs-CZ", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Determine size class based on content length for a more "balanced" masonry layout
  const sizeClass = useMemo(() => {
    const contentLength = newsItem.content.replace(/<[^>]*>/g, "").length; // strip HTML for length calculation

    if (contentLength < 80) return "size-small";
    if (contentLength < 250) return "size-medium";
    return "size-large";
  }, [newsItem.content]);

  return (
    <Box className={`news-item ${sizeClass}`}>
      <Typography variant="caption" className="news-date">
        {formatDate(newsItem.createdAt)}
      </Typography>
      <Typography variant="h6" className="news-title">
        {newsItem.title}
      </Typography>
      <Box
        className="news-text"
        dangerouslySetInnerHTML={{ __html: newsItem.content }}
      />
    </Box>
  );
};

export default NewsCard;
