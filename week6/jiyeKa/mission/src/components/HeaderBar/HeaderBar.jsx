import {useNavigate} from 'react-router-dom';
import HeaderBarWrapper from './HeaderBar.styles';
import backArrow from '../../assets/back-arrow.svg';

const HeaderBar = ({backTo, orderCancel}) => {
  const navigate = useNavigate();
  const handleBackToPrev = () => {
    navigate(-1);
  }

  return (
    <HeaderBarWrapper>
      {backTo && <img src={backArrow}  onClick={handleBackToPrev} />}
      {orderCancel && <div className='cancel'>주문취소</div>}
    </HeaderBarWrapper>
  );
};

export default HeaderBar;