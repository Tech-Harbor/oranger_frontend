import Fasebook from '../../../public/Facebook Circled.png';
import Google from '../../../public/Google.png';
import InputOfForm from '../../components/InputOfForm/InputOfForm.jsx';
import ButtonOfForm from '../../components/ButtonOfForm/ButtonOfForm.jsx';
import {
  BlockOfForm,
  BlockOfInputs,
  ButtonOfLogIn,
  SecondButtonOfLogIn,
  Image,
  Text,
  Change,
  Forgot,
  BlockOfButtons,
  ButtonOfChoice,
  SecondButtonOfChoice,
} from './Auth.style.js';

const Auth = () => {
  return (
    <BlockOfForm>
      <ButtonOfLogIn>
        <Image src={Fasebook} alt="Fasebook" />
        <Text>Продовжити через Fasebook</Text>
      </ButtonOfLogIn>
      <SecondButtonOfLogIn>
        <Image src={Google} alt="Google" />
        <Text>Продовжити через Google</Text>
      </SecondButtonOfLogIn>
      <Change></Change>
      <BlockOfButtons>
        <ButtonOfChoice>Увійти</ButtonOfChoice>
        <SecondButtonOfChoice>Зареєструватися</SecondButtonOfChoice>
      </BlockOfButtons>
      <BlockOfInputs>
        <InputOfForm name="Електронна пошта" type="text"></InputOfForm>
        <InputOfForm name="Пароль" type="password"></InputOfForm>
      </BlockOfInputs>
      <Forgot>Забули пароль?</Forgot>
      <ButtonOfForm color="#9E9EB2">Увійти</ButtonOfForm>
    </BlockOfForm>
  );
};

export default Auth;