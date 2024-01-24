import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

import styles from './ProductCardListItem.module.css';

const ProductCardListItem = ({ image, description, price }) => {
  return (
    <>
      <NavLink className={styles.prodCardItem}>
        <div className={styles.prodCardItem__wraper}>
          <img className={styles.prodCardItem__img} src={image} alt={'product card'} />
        </div>

        <div className={styles.prodCardItem__content}>
          <p className={styles.prodCardItem__discription}>{description}</p>
          <p className={styles.prodCardItem__price}>{price} ₴</p>
        </div>
        <div className={styles.prodCardItem__nav}>
          <NavLink className={styles.prodCardItem__btn}>ПЕРЕГЛЯНУТИ</NavLink>
          <div className={styles.prodCardItem__linkIcon}>
            <NavLink className={styles.prodCardItem__basket}>
              <SvgIcon sx={{ width: 30, height: 30 }}>
                <ShoppingCartOutlinedIcon />
              </SvgIcon>
            </NavLink>
            <NavLink className={styles.prodCardItem__balance}>
              <SvgIcon sx={{ width: 30, height: 30 }}>
                <BalanceOutlinedIcon />
              </SvgIcon>
            </NavLink>
          </div>
        </div>
      </NavLink>
    </>
  );
};

ProductCardListItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default ProductCardListItem;
