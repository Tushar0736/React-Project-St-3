import { useEffect, useState } from "react";
import React from "react";
import NewsItem from "./Newsitem";

function News() {
  let [articles, setArticles] = useState([]);

  let fetchData = async () => {
    let Fetch = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=f9f0c7e84ef74a24bdeee00cb8a616ff"
    );
    let data = await Fetch.json();

    setArticles(data.articles);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container-news">
        <h1 className="m-3">Daily Latest News</h1>
        <div className="row">
          {articles &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    imageUrl={element.urlToImage}
                    title={element.title}
                    description={element.description}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default News;
