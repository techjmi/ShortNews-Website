import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Description from "./Description";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
const BoxStyled = styled(Box)({
  width: "60%",
  margin: ".5rem auto",
  boxSizing: "border-box",
  padding: ".5rem",
});

const Articles = (props) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    setLoading(true);
    const URL = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}`;
    let data = await fetch(URL);
    let parsedData = await data.json();
    console.log(parsedData);
    setNews(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  const fetchMoreData = async () => {
    const URL = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}`;
    // setPage(page+1)
    let data = await fetch(URL);
    let parsedData = await data.json();
    setNews(news.concat(parsedData.articles));
    // setTotalResults(parsedData.totalResults)
  };
  useEffect(() => {
    setNews([]);
    updateNews();
    // fetchMoreData()
    // document.title=`${props.category}`
    document.title = `${capitalizeFirstLetter(props.category)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]);

  return (
    <>
      <BoxStyled>
        {loading && (
          <Typography style={{ textAlign: "center", fontSize: "20px" }}>
            Loading Your Data Please Wait
          </Typography>
        )}
        <InfiniteScroll
          dataLength={news.length}
          next={fetchMoreData}
          hasMore={news.length !== totalResults}
        >
          {news.map((data) => (
            <Description key={data.title} data={data} />
          ))}
        </InfiniteScroll>
      </BoxStyled>
    </>
  );
};

Articles.defaultProps = {
  category: "general",
};

Articles.propTypes = {
  category: PropTypes.string,
};

export default Articles;
