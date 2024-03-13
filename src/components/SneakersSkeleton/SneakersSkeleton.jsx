import React from 'react';
import ContentLoader from 'react-content-loader';

const SneakersSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={390}
    viewBox="0 0 280 390"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="15" y="264" rx="10" ry="10" width="180" height="14" />
    <rect x="112" y="287" rx="0" ry="0" width="14" height="1" />
    <rect x="13" y="332" rx="10" ry="10" width="76" height="25" />
    <rect x="140" y="327" rx="20" ry="20" width="54" height="35" />
    <rect x="157" y="83" rx="0" ry="0" width="0" height="1" />
    <rect x="75" y="77" rx="0" ry="0" width="1" height="0" />
    <circle cx="18" cy="18" r="18" />
    <rect x="8" y="53" rx="15" ry="15" width="186" height="189" />
    <rect x="10" y="288" rx="10" ry="10" width="199" height="14" />
  </ContentLoader>
);

export default SneakersSkeleton;
