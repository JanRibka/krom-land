import React from "react";
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

  return (
    <Box className="news-item">
      <Typography variant="caption" className="news-date">
        {formatDate(newsItem.createdAt)}
      </Typography>
      <Typography variant="h6" className="news-title">
        {newsItem.title}
      </Typography>
      <Typography variant="body2" className="news-text">
        {newsItem.content}
      </Typography>
    </Box>
  );
};

export default NewsCard;
