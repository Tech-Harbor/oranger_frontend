import { useForm } from 'react-hook-form';

import { useRegisterSubmit } from '../../../hooks/apiRequests.js';

import RegisterTerms from './RegisterTerms/RegisterTerms.jsx';
import { FormField, FormFieldPassword } from './fields/index.js';
import { StyledForm, StyledButton } from './Form.styled';
import { isPasswordValid } from '../../../utils/validatePasswordPatterns.js';
import { FormFieldPhone } from './fields/FormFieldPhone.jsx';

const fieldsPattern = {
  firstname: '',
  lastname: '',
  phone: /^\+?\d{12}$/i,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/i,
};

const makeFirstLetterUpperCase = string => {
  const letterArray = string.split('');
  return letterArray[0].toUpperCase() + letterArray.splice(1).join('');
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const { sendData } = useRegisterSubmit();
  const passwordValue = watch('password');
  const isPswValid = isPasswordValid(passwordValue, isValid);

  const handleSubmitForm = async data => {
    await sendData({
      ...data,
      firstname: makeFirstLetterUpperCase(data.firstname),
      lastname: makeFirstLetterUpperCase(data.lastname),
    });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
      <FormField
        name="firstname"
        text="Ім’я"
        validation={register('firstname', {
          required: 'Заповніть поле',
          minLength: {
            value: 2,
            message: 'Має бути від 2 до 35 символів',
          },
          maxLength: {
            value: 35,
            message: 'Має бути від 2 до 35 символів',
          },
        })}
        fieldError={errors.firstname}
      />

      <FormField
        name="lastname"
        text="Прізвище"
        validation={register('lastname', {
          required: 'Заповніть поле',
          minLength: {
            value: 2,
            message: 'Має бути від 2 до 35 символів',
          },
          maxLength: {
            value: 35,
            message: 'Має бути від 2 до 35 символів',
          },
        })}
        fieldError={errors.lastname}
      />

      <FormFieldPhone
        name="phone"
        text="Номер телефону"
        validation={register('phone', {
          required: 'Заповніть поле',
          pattern: {
            value: fieldsPattern.phone,
            message: 'Має відповідати формату +380501234567',
          },
        })}
        fieldError={errors.phone}
      />

      <FormField
        name="email"
        text="Ел. пошта"
        validation={register('email', {
          required: 'Заповніть поле',
          pattern: {
            value: fieldsPattern.email,
            message: 'Не відповідає формату *@*.*',
          },
        })}
        fieldError={errors.email}
      />

      <FormFieldPassword
        name="password"
        text="Пароль"
        validation={register('password', {
          required: 'Заповніть поле',
        })}
        fieldError={errors.password}
        passwordValue={passwordValue}
      />

      <RegisterTerms />
      <StyledButton $isPswValid={isPswValid}>Зареєструватися</StyledButton>
    </StyledForm>
  );
};
