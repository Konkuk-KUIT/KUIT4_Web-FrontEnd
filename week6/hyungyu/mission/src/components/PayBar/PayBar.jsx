import Button from "../Button";
import styles from "./PayBar.module.css";

const handleAddMenu = () => {}

const PayBar = () => {
  return (
    <div className={styles.container}>
      <p className={styles.minDeliveryPrice}>최소 주문금액 13,000원</p>
      <Button onClick={handleAddMenu} type="button" size="xl" disabled={true}>
        12,600원 결제하기
      </Button>
    </div>
  )
}

export default PayBar
