import React from 'react'
import { HomeTitleStyles } from './HomeTitle.styles';

const HomeTitle = () => {
  return (
    <HomeTitleStyles>
      <div className="group">
        <p className="main-title">오늘은 무엇을 먹을까요?</p>
        <p className="sub-title">한남중앙로 40길 (한남 빌리지)(으)로 배달 ›</p>
      </div>
    </HomeTitleStyles>
  );
};

export default HomeTitle;