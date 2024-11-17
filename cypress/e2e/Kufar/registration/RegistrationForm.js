export class RegistrationForm {
    #profile = () => cy.get('span').contains("Профиль")
    #mainPage = () => cy.get('div[class="styles_wrapper__yDu37"]')
    #modalPreForm = () => cy.get('span').contains('Чтобы пользоваться всеми возможностями Куфара, ')
    #loginButton = () => cy.get('button[type="button"]').contains('Войти или зарегистрироваться')
    #modalRegForm = () => cy.get('div[data-type="registration"]').contains('Регистрация')
    #emailField = () => cy.get('input[id="email"]')
    #password = () => cy.get('input[id="password"]')
    #confirmPassword = () => cy.get('input[id="confirmPassword"]')
    #agreeCheckbox = () => cy.get('label[for="registration_privacyCheckbox"]')
    #gmail = () => cy.get('li').contains('gmail.com')
    #createProfileButton = () => cy.get('button[type="submit"]').contains('Создать профиль')

    profileClick() {
        this.#profile().should('be.visible').click()
    }

    registrationFormIsOpen() {
        this.#modalPreForm().should('be.visible')
        this.#loginButton().should('be.visible').click()
        this.#modalRegForm().should('be.visible').click()
    }

    registrationWithCredentials(email, pass, confirmPass) {
        this.#modalRegForm().should('be.visible').click()

        this.#emailField().should('be.visible')
        if (email === '' || email === null) email = '{backspace}'
        this.#emailField().clear().type(email)

        this.#gmail().should('be.visible').click() //описать метод отдельный на получение списка и выбора рандомного значения

        this.#password().should('be.visible')
        if (pass === '' || pass === null) pass = '{backspace}'
        this.#password().clear().type(pass)

        this.#confirmPassword().should('be.visible')
        if (confirmPass === '' || confirmPass === null) confirmPass = '{backspace}'
        this.#confirmPassword().clear().type(confirmPass)

        this.#agreeCheckbox().should('be.visible').click()

        this.#createProfileButton().should('be.visible')
        this.#createProfileButton().should('be.disabled')
    }

    siteIsOpen() {
        this.#mainPage().should('be.visible')
    }
}