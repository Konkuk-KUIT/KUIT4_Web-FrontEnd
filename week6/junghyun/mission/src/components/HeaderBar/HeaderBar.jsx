import {useNavigate} from 'react-router-dom';
import HeaderBarWrapper from './HeaderBar.styles';
import ArrowBack from '../../assets/arrow-back.svg';

const HeaderBar = ({backTo, orderCancel}) => {
  const navigate = useNavigate();
  const handleBackToPrev = () => {
    navigate(-1);
  }

  return (
    <HeaderBarWrapper>
      {backTo && <img src={ArrowBack} alt="icon-arrow-back" onClick={handleBackToPrev} />}
      {orderCancel && <div className='cancel'>주문취소</div>}
    </HeaderBarWrapper>
  );
};
export default HeaderBar;