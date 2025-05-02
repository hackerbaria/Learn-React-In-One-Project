import React from "react";
import "../css/PageContainer.css"; // Create this file for styles

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className="page-container">{children}</div>;
};

export default PageContainer;