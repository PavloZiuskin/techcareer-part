import { ThreeCircles } from 'react-loader-spinner';
import styled from "styled-components";
export const Loader = () => (
  <Box>
    <ThreeCircles
      height="100"
      width="100"
      color="#5CD3A8"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </Box>
);

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;