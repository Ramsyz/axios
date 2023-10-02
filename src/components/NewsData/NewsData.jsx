import axios from "axios";
import { useEffect, useState } from "react";
import NewsAllData from "../NewsAllData/NewsAllData";

const NewsData = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-creator-server.vercel.app/news-data")
      .then(function (res) {
        setNewsData(res.data);
      });
  }, []);
  console.log(newsData);
  return (
    <div className="news_data_main py-8 lg:py-20">
      <h1 className="text-3xl lg:text-left text-center lg:text-5xl font-semibold">
        All news Data
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.map((data) => (
          <NewsAllData key={data._id} data={data}></NewsAllData>
        ))}
      </div>
    </div>
  );
};

export default NewsData;
