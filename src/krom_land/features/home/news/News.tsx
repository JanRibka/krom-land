import React from "react";
import Box from "@mui/material/Box";

import NewsStyled from "./styledComponents/NewsStyled";
import SectionTitle from "../../../../shared/components/sectionTitle/SectionTitle";
import { useNews } from "./hooks/useNews";
import NewsCard from "./components/NewsCard";

const News = () => {
  const { newsItems, newsImagePath, newsImageAlt, hasNews } = useNews();

  if (!hasNews) return null;

  return (
    <NewsStyled>
      <Box className="news-content-wrapper">
        <Box className="news-grid-wrapper">
          <SectionTitle
            mainText="Novinky"
            mainTextVariant="h2"
            secondaryText="Aktuálně z KromLandu"
          />

          <Box className="masonry-container">
            {/* Featured Section Image integrated into grid */}
            {newsImagePath && (
              <Box className="section-image-wrapper">
                <img src={newsImagePath} alt={newsImageAlt} loading="lazy" />
              </Box>
            )}

            {newsItems.map((item) => (
              <NewsCard key={item.idHomeNews} newsItem={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </NewsStyled>
  );
};

export default News;
