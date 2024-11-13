import React from "react";
import { InView } from "react-intersection-observer";

const LazyImage = ({ src, alt, className }) => {
  return (
    <InView triggerOnce threshold={0.1}>
      {({ inView, ref }) => (
        <div ref={ref}>
          {inView ? <img src={src} alt={alt} className={className} /> : <div>Loading...</div>}
        </div>
      )}
    </InView>
  );
};

export default LazyImage;
