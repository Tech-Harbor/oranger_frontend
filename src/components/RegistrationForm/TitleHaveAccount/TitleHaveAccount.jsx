import { NavLink } from 'react-router-dom';
import { StyledText } from './TitleHaveAccount.styled.js';

const TitleHaveAccount = () => {
  return (
    <StyledText className="text">
      Вже маєте акаунт?
      <NavLink to={'/login'} className="text">
        Увійти
      </NavLink>
    </StyledText>
  );
};

export default TitleHaveAccount;