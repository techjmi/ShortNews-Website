import { Box, Button, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const CardStyle = styled(Card)({
  margin: ".5rem",
  display: "flex",
  // position:"absolute"
});
const Component = styled(CardContent)({
  display: "flex",
  gap: ".8rem",
});
const BoxLeft = styled(Box)({
  position: "relative",
  width: "80%",
  backgroundColor: "gray",
  alignSelf: "start",
});
const ImgStyled = styled("img")({
  aspectRatio: "3/2",
  objectFit: "cover",
  // maxWidth: "200px",
  width:"100%",
  // maxHeight:"200px",
  height: "auto",
  // position:'static'
});
const BoxRight = styled(Box)({
  //   backgroundColor: "azure",
  //   padding:".5rem .8rem"
});
const BoxAut = styled(Box)({
  fontSize: "10px",
  opacity: ".9",
  display: "flex",
  flexWrap:"wrap"
});
const ButtonStyle= styled(Button)({
  float:"right",
  marginTop:"1rem",
  textTransform:"capitalize",
  // padding:"8px",
  borderRadius:"2px"
})
const Description = ({ data }) => {
  const url = data.urlToImage;
  const heading = data.title;
  return (
    <div>
      <CardStyle>
        <Component>
          <BoxLeft>
            <ImgStyled
              src={
                !url
                  ? "https://m.media-amazon.com/images/I/81UMeWQ6xWL._AC_UY327_FMwebp_QL65_.jpg"
                  : url
              }
              alt="xyz"
            />
          </BoxLeft>
          <BoxRight>
            <Typography style={{ wordBreak: "break-word" }}>
              {heading}
            </Typography>

            <BoxAut>
              <Typography variant="caption">
                <strong>short</strong> &nbsp;By{" "}
                {!data.author ? "Unknown" : data.author}
              </Typography>
              <Typography variant="caption">
                &nbsp;{new Date(data.publishedAt).toGMTString()}
              </Typography>
              <Typography variant="caption">
                &nbsp; <strong>source</strong> {data.source.name}
              </Typography>
            </BoxAut>
            <Typography style={{marginTop:".5rem"}}>{data.description}</Typography>
            <Link to={data.url} target="_blank" rel="noopener noreferrer">
            <ButtonStyle variant="contained">Read More</ButtonStyle>
              {/* {data.url} */}
            </Link>
          </BoxRight>
        </Component>
      </CardStyle>
    </div>
  );
};

export default Description;
