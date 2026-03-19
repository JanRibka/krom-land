import { useSelector } from "react-redux";
import { selectHomeNews } from "shared/infrastructure/store/home/homeSlice";

export const useNews = () => {
  const homeNews = useSelector(selectHomeNews);

  // Determine grid columns class based on item count
  const getGridClass = (count: number) => {
    if (count === 1) return "cols-1";
    if (count === 2) return "cols-2";
    if (count === 3) return "cols-3";
    if (count === 4) return "cols-4";
    return "cols-5"; // Fallback for 5 or more
  };

  const newsItems = homeNews.newsItems || [];
  const gridClass = getGridClass(newsItems.length);

  return {
    newsItems,
    newsImagePath: homeNews.newsImagePath,
    newsImageAlt: homeNews.newsImageAlt,
    gridClass,
    hasNews: newsItems.length > 0,
  };
};
