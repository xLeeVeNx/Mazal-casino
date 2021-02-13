import { PopupWithForm } from '../components/PopupWithForm.js';
import { 
    gameButtonSignUp, registerForm, popupButtonSignup, headerSignInButton, headerSignUpButton, loginForm,
    popupButtonSignin, restoreForm, popupForgotPassword } from '../scripts/constans.js';
import { RegistrationFormValidation } from '../components/RegistrationFormValidation.js';
import { LoginFormValidation } from '../components/LoginFormValidation.js'
import { RestoreFormValidation } from '../components/RestoreFormValidation.js';

const allSelectors = {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__button-submit",
    inactiveButtonClass: "popup__button-submit_inactive",
    inputErrorClass: "popup__form-input_type_error",
    errorClass: "popup__form-input-error_active",
    fieldsetClass: ".popup__form-set",
  };

const formRegister = new RegistrationFormValidation(allSelectors, registerForm);
formRegister.enableValidation();

const popupSignUp = new PopupWithForm('#popup-registration');
popupSignUp.setEventListeners();

  gameButtonSignUp.addEventListener('click', () => {
    popupSignUp.open();
  });

  headerSignUpButton.addEventListener('click', () => {
      popupSignUp.open();
  })

  popupButtonSignup.addEventListener('click', () => {
    if (!(formRegister.hasInvalidNomerOfInput())) {
      formRegister.showNumberInputErrorOfNomer(registerForm);
    }
    formRegister.checkPasswordAndConfirmPassword(registerForm);
  });
  
  const formLogin = new LoginFormValidation(allSelectors, loginForm);
  formLogin.enableValidation();
  
  const popupSignIn = new PopupWithForm('#popup-login');
  popupSignIn.setEventListeners();

  headerSignInButton.addEventListener('click', () => {
      popupSignIn.open();
  });

  popupButtonSignin.addEventListener('click', () => {
    if (!(formLogin.hasInvalidNomerOfInput())) {
      formLogin.showNumberInputErrorOfNomer(loginForm);
    }
  });

  const popupRestore = new PopupWithForm('#popup-restore-password');
    popupRestore.setEventListeners();

    const formRestore = new RestoreFormValidation(allSelectors, restoreForm);
    formRestore.enableValidation();

    popupForgotPassword.addEventListener('click', () => {
        popupSignIn.close();
        popupRestore.open();
      });

      popupButtonRestore.addEventListener('click', () => {
        if(!(formRestore.hasInvalidNomerOfInput())) {
          formRestore.showNumberInputErrorOfNomer(restoreForm);
        }
      });