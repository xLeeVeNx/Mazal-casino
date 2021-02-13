import { PopupWithForm } from '../components/PopupWithForm.js';
import { RegistrationFormValidation } from '../components/RegistrationFormValidation.js';
import 
 { 
  registerForm, loginForm, passwordForm, validationForm, headerSignInButton, headerSignUpButton, 
  popupButtonSignin, popupButtonSignup, popupForgotPassword, restoreForm, popupButtonRestore, gameButtonSignUp
 } from '../scripts/constans.js';

 const allSelectors = {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__button-submit",
    inactiveButtonClass: "popup__button-submit_inactive",
    inputErrorClass: "popup__form-input_type_error",
    errorClass: "popup__form-input-error_active",
    fieldsetClass: ".popup__form-set",
  };

 const popupSignUp = new PopupWithForm('#popup-registration');
popupSignUp.setEventListeners();

const formRegister = new RegistrationFormValidation(allSelectors, registerForm);
formRegister.enableValidation();

gameButtonSignUp.addEventListener('click', () => {
    popupSignUp.open();
  });

  popupButtonSignup.addEventListener('click', () => {
    if (!(formRegister.hasInvalidNomerOfInput())) {
      formRegister.showNumberInputErrorOfNomer(registerForm);
    }
    formRegister.checkPasswordAndConfirmPassword(registerForm);
  });