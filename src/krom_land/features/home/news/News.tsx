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
        <SectionTitle
          mainText="Novinky"
          mainTextVariant="h2"
          secondaryText="Aktuálně z KromLandu"
        />

        <Box className="news-main-layout">
          <Box className="news-grid-wrapper">
            <Box className="masonry-container">
              {newsItems.map((item) => (
                <NewsCard key={item.idHomeNews} newsItem={item} />
              ))}
            </Box>
          </Box>

          {/* Featured Section Image moved out of grid and to the right */}
          {newsImagePath && (
            <Box className="section-image-wrapper">
              <Box
                component="img"
                src={newsImagePath}
                alt={newsImageAlt}
                loading="lazy"
                className="section-image"
              />
            </Box>
          )}
        </Box>
      </Box>
    </NewsStyled>
  );
};

export default News;
