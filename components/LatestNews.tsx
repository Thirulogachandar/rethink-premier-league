import Slider from "react-slick";
import { Box, Heading, Image } from "@chakra-ui/react";
import { NewsDatas } from "../data/newsData";

const LatestNews = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box ml={8}>
      <Heading my={2}>Latest News</Heading>
      <Box w="98%">
        <Slider {...settings}>
          {NewsDatas.map((news, index) => (
            <Box pr={4} key={index}>
              <Box overflow="hidden" h="100%" w="100%" borderRadius="0.5rem">
                <Box position="relative">
                  <Box
                    transition="all 1s ease"
                    _hover={{ transform: "scale(1.3)" }}
                    overflow="hidden"
                    h="100%"
                  >
                    <Image src={news.img} />
                  </Box>
                  <Box
                    position="absolute"
                    top="50%"
                    height="100%"
                    color="#fff"
                    pl={3}
                    background="linear-gradient(to top, rgba(0, 0, 0, 1), transparent)"
                  >
                    <Heading fontSize="2xl"> {news.title}</Heading>
                    <p> {news.description}</p>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
export default LatestNews;
