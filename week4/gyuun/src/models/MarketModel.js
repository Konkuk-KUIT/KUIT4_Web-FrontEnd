import content1 from '../assets/content1.svg';
import content2 from '../assets/content2.svg';
import content3 from '../assets/content3.svg';
import content4 from '../assets/content4.svg';
import content5 from '../assets/content5.svg';
import content6 from '../assets/content6.svg';
import home from '../assets/home.svg';
import home2 from '../assets/home2.svg';
import home3 from '../assets/home3.svg';
import home4 from '../assets/home4.svg';
import home5 from '../assets/home5.svg';



const marketModel = {
  location: "군자동",
  home:[
    {
      image:home,
      location:"홈",
    },
    {image:home2,
      location:"동네생활",
    },
    {image:home3,location:"내 근처",},
    {image:home4,location:"채팅",},
    {image:home5,location:"나의 당근",},
  ],
  items: [
    {
      title: "에어팟 프로",
      location: "군자동",
      timeAgo: "3일 전",
      price: "220,000원",
      image: content1,
      comments: 3,
      likes: 11,
      isSold: true,
    },
    {
      title: "바이레도 블랑쉬 50ml",
      location: "광진구 구의제3동",
      timeAgo: "26초 전",
      price: "4,000원",
      image: content2,
      comments: 0,
      likes: 2,
      isSold: false,
    },
    {
      title: "샌드위치",
      location: "동대문구 휘경동",
      timeAgo: "끝물 59초 전",
      price: "8,000원",
      image: content3,
      comments: 0,
      likes: 0,
      isSold: false,
    },
    {
      title: "아이폰 13프로맥스",
      location: "군자동",
      timeAgo: "1일 전",
      price: "1,000,000원",
      image: content4,
      comments: 0,
      likes: 0,
      isSold: true,
    },
    {
      title: "커피머신",
      location: "구리시 교문1동",
      timeAgo: "1초 전",
      price: "100,000원",
      image: content5,
      comments: 0,
      likes: 0,
      isSold: true,
    },
    {
      title: "컴퓨터 구조론",
      location: "서울시 화양동",
      timeAgo: "1분전",
      price: "11,000원",
      image: content6,
      comments: 0,
      likes: 0,
      isSold: true,
    },
    {
      title: "맥북 에어 m1 13인치",
      location: "광주",
      timeAgo: "13분 전",
      price: "600,000원",
      image: content6,
      comments: 4,
      likes: 12,
      isSold: true,
    },
  ],
};

export default marketModel;
