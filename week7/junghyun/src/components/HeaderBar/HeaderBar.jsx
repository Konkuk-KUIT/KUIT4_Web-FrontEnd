import {useNavigate} from 'react-router-dom';
import HeaderBarWrapper from './HeaderBar.styles';
import ArrowBack from '../../assets/arrow-back.svg';
import useCartStore from '../../store/cartStore';

const HeaderBar = ({backTo, orderCancel}) => {
  const navigate = useNavigate();
  const handleBackToPrev = () => {
    navigate(-1);
  };

  const cancelOrder = useCartStore((state) => state.reset);
  const handdleOrderCancel = () => {
    cancelOrder();
    navigate('/');
  };

  return (
    <HeaderBarWrapper>
      {backTo && <img src={ArrowBack} alt="icon-arrow-back" onClick={handleBackToPrev} />}
      {orderCancel && <div className='cancel' onClick={handdleOrderCancel}>주문취소</div>}
    </HeaderBarWrapper>
  );
};
export default HeaderBar;