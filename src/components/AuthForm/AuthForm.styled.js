import styled from 'styled-components';

const fontStyles = `
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 500;
`;

export const FormBlock = styled.form`
  width: 360px;
  background-color: var(--color-btn-text);
  padding: 25px 16px;
`;

export const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  display: block;
  ${fontStyles};
  font-size: 24px;
  line-height: 24px;
`;

export const InputsBlock = styled.div`
  display: grid;
  gap: 16px;
`;

export const Errors = styled.div`
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: var(--color-error-input);
  margin-top: 20px;
`;

export const ChoiceBlock = styled.div`
  width: 100%;
  display: ${props => (props.$show ? 'flex' : 'none')};
  justify-content: space-between;
  margin: 37px 0 24px 0;
`;

export const RememberBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Check = styled.input`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  position: relative;
  z-index: 5;
`;

export const SwitchOff = styled.div`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  border: 1px solid var(--color-border-input);
  position: absolute;
`;

export const SwitchOn = styled.div`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  background-color: var(--color-bg-checkbox-active);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const RememberText = styled.label`
  ${fontStyles};
  font-size: 12px;
  line-height: 24px;
  margin-left: 5px;
`;

export const Forgot = styled.a`
  ${fontStyles};
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
  display: block;
  color: var(--color-primary-active);
`;

export const Account = styled.div`
  ${fontStyles};
  font-size: ${props => (props.$size ? '16px' : '13px')};
  line-height: 24px;
  text-align: center;
  margin: 20px 0 15px 0;
`;

export const CreateAccount = styled.span`
  color: var(--color-primary-active);
`;

export const SwitchButton = styled.button`
  background-color: var(--color-btn-text);
  color: var(--color-primary-active);
`;

export const DividingLine = styled.div`
  max-width: 100%;
  height: 1px;
  background-color: var(--color-bg-form_auth-dividing_line);
  display: ${props => (props.$show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  margin: 35px 23px;
`;

export const LineText = styled.span`
  ${fontStyles};
  font-size: 10px;
  line-height: 24px;
  color: var(--color-form_auth-line_text);
  padding: 0 31px;
  background-color: var(--color-btn-text);
`;

export const LogInButton = styled.button`
  width: 100%;
  height: 36px;
  background: none;
  border: 1px solid var(--color-border-button-google);
  border-radius: 10px;
  display: ${props => (props.$show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 8px 13px;
`;

export const Image = styled.img`
  width: 24px;
  aspect-ratio: 1;
  margin-right: 30px;
`;

export const Text = styled.span`
  ${fontStyles};
  font-size: 15px;
  line-height: 24px;
  color: var(--color-primary);
`;
