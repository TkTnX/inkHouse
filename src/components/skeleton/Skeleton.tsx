import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={4}
    width={350}
    height={730}
    viewBox="0 0 350 730"
    backgroundColor="#c0bfbf"
    foregroundColor="#ecebeb"
  >
    <rect x="180" y="297" rx="0" ry="0" width="3" height="1" />
    <rect x="0" y="0" rx="0" ry="0" width="350" height="730" />
  </ContentLoader>
);

export default Skeleton;
