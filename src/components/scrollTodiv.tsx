import { scroller } from "react-scroll";

const scrollToDiv = (divName: string) => {
  scroller.scrollTo(divName, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

export default scrollToDiv;
