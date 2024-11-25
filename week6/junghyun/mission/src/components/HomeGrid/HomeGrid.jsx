import {Link} from 'react-router-dom';
import {GridWrapper, Grid, Category} from './HomeGrid.styles';
import Pizza from '../../assets/icon-pizza.svg';
import Salad from '../../assets/icon-salad.svg';
import Hamburger from '../../assets/icon-hamburger.svg';
import Korean from '../../assets/icon-korean.svg';
import Snack from '../../assets/icon-snack.svg';
import Chicken from '../../assets/icon-chicken.svg';
import Sushi from '../../assets/icon-sushi.svg';
import Sandwich from '../../assets/icon-sandwich.svg';
import Pasta from '../../assets/icon-pasta.svg';
import Desert from '../../assets/icon-desert.svg';
import Coffee from '../../assets/icon-coffee.svg';
import ViewMore from '../../assets/icon-viewmore.svg';

const FoodButton = ({src, alt, category}) => {
  return (
    <Link to="/store" style={{textDecoration:"none", color:"#333D4B"}}>
      <Category>
        <img src={src} alt={alt} />
        <div>{category}</div>
      </Category>
    </Link>
  );
};

const HomeGrid = () => {
  return (
    <GridWrapper>
      <Grid>
        <FoodButton src={Pizza} alt="icon-pizza" category="피자" />
        <FoodButton src={Korean} alt="icon-korean" category="한식" />
        <FoodButton src={Sushi} alt="icon-sushi" category="초밥" />
        <FoodButton src={Desert} alt="icon-desert" category="디저트" />
      </Grid>
      <Grid>
        <FoodButton src={Salad} alt="icon-salad" category="샐러드" />
        <FoodButton src={Snack} alt="icon-snack" category="분식" />
        <FoodButton src={Sandwich} alt="icon-sandwich" category="샌드위치" />
        <FoodButton src={Coffee} alt="icon-coffee" category="커피" />
      </Grid>
      <Grid>
        <FoodButton src={Hamburger} alt="icon-hamburger" category="햄버거" />
        <FoodButton src={Chicken} alt="icon-chicken" category="치킨" />
        <FoodButton src={Pasta} alt="icon-pasta" category="파스타" />
        <FoodButton src={ViewMore} alt="icon-viewmore" category="더보기" />
      </Grid>
    </GridWrapper>
  );
};
export default HomeGrid;