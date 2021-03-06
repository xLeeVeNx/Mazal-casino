export class LoginFormValidation {
    constructor(selectors, formElement) {
      this._selectors = selectors;
      this._formElement = formElement;  
      this._button = formElement.querySelector('.popup__button-submit');
      this._numberInput = formElement.querySelector('[name="number"]');
      this._passwordInput = formElement.querySelector('[name="password"]');
    }

    // Номер
    hasInvalidNumberInput() {
        return this._numberInput.validity.valid;
      }

    hasInvalidNomerOfInput() {
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        return regex.test(this._numberInput.value);
      }

    showNumberInputErrorOfNomer(formElement) {
        const errorElement = formElement.querySelector(`#${this._numberInput.id}-error`);
        this._numberInput.value = '';
        this._numberInput.classList.add(this._selectors.inputErrorClass);
        errorElement.textContent = 'Incorrect number';
        this._numberInput.placeholder = '';
        errorElement.classList.add(this._selectors.errorClass);
      }

      showNumberInputError(formElement) {
        const errorElement = formElement.querySelector(`#${this._numberInput.id}-error`);
        this._numberInput.value = '';
        this._numberInput.classList.add(this._selectors.inputErrorClass);
        errorElement.textContent = 'Enter a phone';
        this._numberInput.placeholder = '';
        errorElement.classList.add(this._selectors.errorClass);
      }
    
      _hideNumberInputError(formElement) {
        const errorElement = formElement.querySelector(`#${this._numberInput.id}-error`);
        this._numberInput.classList.remove(this._selectors.inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._selectors.errorClass);
      }

      _checkNumberInputValidity(formElement) {
        if (!this._numberInput.validity.valid) {
          this.showNumberInputError(formElement);
        } else {
          this._hideNumberInputError(formElement);
        }
      }
        // Номер

        // Пароль
        hasInvalidPasswordInput() {
            return this._passwordInput.validity.valid;
          }

        showPasswordInputError(formElement) {
            const errorElement = formElement.querySelector(`#${this._passwordInput.id}-error`);
            this._passwordInput.value = '';
            this._passwordInput.classList.add(this._selectors.inputErrorClass);
            errorElement.textContent = 'Enter a password';
            this._passwordInput.placeholder = '';
            errorElement.classList.add(this._selectors.errorClass);
          }
        
          _hidePasswordInputError(formElement) {
            const errorElement = formElement.querySelector(`#${this._passwordInput.id}-error`);
            this._passwordInput.classList.remove(this._selectors.inputErrorClass);
            errorElement.textContent = "";
            errorElement.classList.remove(this._selectors.errorClass);
          }
    
          _checkPasswordInputValidity(formElement) {
            if (!this._passwordInput.validity.valid) {
              this.showPasswordInputError(formElement);
            } else {
              this._hidePasswordInputError(formElement);
            }
        }

        // Пароль

      _toggleButtonState(buttonElement) {
        if (!(this.hasInvalidNumberInput() && this.hasInvalidPasswordInput())) {
          buttonElement.classList.add(this._selectors.inactiveButtonClass);
          buttonElement.disabled = true;
        } else {
          buttonElement.classList.remove(this._selectors.inactiveButtonClass);
          buttonElement.disabled = false;
        }
      }
    
      _setEventListeners(formElement) {
        const buttonElement = formElement.querySelector(
          this._selectors.submitButtonSelector
        );
    
        this._toggleButtonState(buttonElement);

            this._numberInput.addEventListener("input", () => {
            this._checkNumberInputValidity(formElement);
            this._toggleButtonState(buttonElement);
          });

          this._passwordInput.addEventListener("input", () => {
            this._checkPasswordInputValidity(formElement);
            this._toggleButtonState(buttonElement);
          })
      }
    
      enableValidation() {
        this._formElement.addEventListener("submit", function (evt) {
          evt.preventDefault();
        });
        this._setEventListeners(this._formElement);
      }
    
      disableButton() {
        this._button.classList.add(this._selectors.inactiveButtonClass);
        this._button.disabled = 'true';
      }
}