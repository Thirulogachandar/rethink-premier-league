import Slider from "react-slick";
import range from "lodash/range";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface ListSliderProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  direction: "column" | "row";
}

const ListSlider = (props: ListSliderProps) => {
  const { items, renderItem } = props;
  return (
    <Box>
      <Slider {...sliderSettings}>
        {range(items.length / 2).map((i) => (
          <Wrap key={i} spacing={2} direction={props.direction}>
            <WrapItem key={2 * i}>{renderItem(items[2 * i], 2 * i)}</WrapItem>
            {2 * i + 1 < items.length && (
              <WrapItem key={2 * i + 1}>
                {renderItem(items[2 * i + 1], 2 * i + 1)}
              </WrapItem>
            )}
          </Wrap>
        ))}
      </Slider>
    </Box>
  );
};

export default ListSlider;
