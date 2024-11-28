import React from 'react'
import { GridContainer, GridItem, GridRow } from './GridCategory.styles'
import PizzIcon from '../../assets/pizza.svg';
const GridCategory = () => {
  return (
    <GridContainer>
        <GridRow>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
        </GridRow>
        <GridRow>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
        </GridRow>
        <GridRow>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
        </GridRow>
        <GridRow>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
            <GridItem>
                <div>
                    <img src={PizzIcon}  alt="pizza" />
                    <p>피자</p>
                </div>
            </GridItem>
        </GridRow>
    </GridContainer>
  )
}

export default GridCategory