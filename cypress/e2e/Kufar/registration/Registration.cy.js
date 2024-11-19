import {RegistrationForm} from "./RegistrationForm";
import {AlertCookie} from "../Alerts/AlertCookie";

describe('Registration form test', () => {

    const registrationForm = new RegistrationForm()
    const alertCookie = new AlertCookie()

    const email = 'www' + '@gmail.com'
    const password = 'Lika123456789'
    const confPass = 'Lika123456789'

    beforeEach('Open site', () => {
        cy.visit('https://www.kufar.by/l')
        cy.viewport(1280, 720)

        alertCookie.clickAcceptCookie()

        registrationForm.siteIsOpen()
    })

    it('Click registration form', () => {
        registrationForm.profileClick()

        registrationForm.registrationFormIsOpen()

        registrationForm.registrationWithCredentials(email, password, confPass)
    })
})