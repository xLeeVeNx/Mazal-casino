import { PopupWithForm } from '../components/PopupWithForm.js';
import { LoginFormValidation } from '../components/LoginFormValidation.js'
import { RegistrationFormValidation } from '../components/RegistrationFormValidation.js';
import { RestoreFormValidation } from '../components/RestoreFormValidation.js';
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


// Попапы
const popupSignIn = new PopupWithForm('#popup-login');
popupSignIn.setEventListeners();

const popupSignUp = new PopupWithForm('#popup-registration');
popupSignUp.setEventListeners();

const popupRestore = new PopupWithForm('#popup-restore-password');
popupRestore.setEventListeners();
// Попапы

// Валидация
const formRegister = new RegistrationFormValidation(allSelectors, registerForm);
formRegister.enableValidation();

const formLogin = new LoginFormValidation(allSelectors, loginForm);
formLogin.enableValidation();

const formRestore = new RestoreFormValidation(allSelectors, restoreForm);
formRestore.enableValidation();

// const formPassword = new FormValidator(allSelectors, passwordForm);
// formPassword.enableValidation();

// const formValidation = new FormValidator(allSelectors, validationForm);
// formValidation.enableValidation();
// Валидация

headerSignInButton.addEventListener('click', () => {
  popupSignIn.open();
});

headerSignUpButton.addEventListener('click', () => {
  popupSignUp.open();
});

popupButtonSignin.addEventListener('click', () => {
  if (!(formLogin.hasInvalidNomerOfInput())) {
    formLogin.showNumberInputErrorOfNomer(loginForm);
  }
});

popupButtonSignup.addEventListener('click', () => {
  if (!(formRegister.hasInvalidNomerOfInput())) {
    formRegister.showNumberInputErrorOfNomer(registerForm);
  }
  formRegister.checkPasswordAndConfirmPassword(registerForm);
});

popupForgotPassword.addEventListener('click', () => {
  popupSignIn.close();
  popupRestore.open();
});

popupButtonRestore.addEventListener('click', () => {
  if(!(formRestore.hasInvalidNomerOfInput())) {
    formRestore.showNumberInputErrorOfNomer(restoreForm);
  }
});

gameButtonSignUp.addEventListener('click', () => {
  popupSignUp.open();
});