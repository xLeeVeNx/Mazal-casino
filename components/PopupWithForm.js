import {Popup} from './Popup.js';

export  class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._button = this._popup.querySelector('.popup__button-submit');
        this._buttonDefaultText = this._button.textContent;
        this._inputList = Array.from(this._form.querySelectorAll('.popup__form-input'));
        this._confirmPasswordInput = this._form.querySelector('[name="confirm-password"]');
        this._numberInput = this._form.querySelector('[name="number"]');

        this._passwordInput = this._form.querySelector('[name="password"]');
        this._nameInput = this._form.querySelector('[name="name"]');
    }

    setEventListeners() {
        super.setEventListeners();
    }

    close() {
        super.close();
        this._inputList.forEach((input) => {
            input.value = '';
            if (this._form.id === 'popup-form-registration') {
            this._confirmPasswordInput.placeholder = 'qwerty123';
            this._passwordInput.placeholder = 'qwerty123';
            this._numberInput.placeholder = '9618777102';     
            this._nameInput.placeholder = 'John123';
            }
            if (this._form.id === 'popup-form-login') {
                this._numberInput.placeholder = 'Phone';   
                this._passwordInput.placeholder = 'Password'  
                }
                if(this._form.id === 'popup-form-restore-password') {
                this._numberInput.placeholder = 'Phone'; 
                }
            input.classList.remove("popup__form-input_type_error");
            const error = this._form.querySelector(`#${input.id}-error`);
            error.classList.remove("popup__form-input-error_active");
        }); 
    }

    isSaving() {
        this._button.textContent = 'Сохранение...';
    }

    isSavingReset() {
        this._button.textContent = this._buttonDefaultText;
    }
}

