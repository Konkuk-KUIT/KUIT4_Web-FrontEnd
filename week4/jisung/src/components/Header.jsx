const Header = ({ location }) => {
    // 비구조화 할당
    return (
      <div className="home-header" style={{ display: 'flex' }}>
        <div className="header-location">
          <button type="button">
            <span> {location} </span>
            <img src="./assets/chevron-down.png" alt="현재위치" />
            {/* assets 폴더를 public에 넣어야 상대경로로 접근 가능 */}
          </button>
        </div>
        <div className="header-buttons">
          <button type="button">
            <img src="./assets/magnifyingglass.png" alt="검색" />
          </button>
          <button type="button">
            <img src="./assets/line-3-horizontal.png" alt="메뉴" />
          </button>
          <button type="button">
            <img src="./assets/bell.png" alt="알림" />
          </button>
        </div>
      </div>
    );
  };

  export default Header;