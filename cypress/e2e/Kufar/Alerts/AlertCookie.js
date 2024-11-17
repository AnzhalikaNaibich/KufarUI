export class AlertCookie {
    cookie = () => cy.get('h3').contains('Политика обработки cookie')
    acceptCookie = () => cy.get ('button[type="button"]').contains('Принять')

    clickAcceptCookie() {
        this.cookie().should('be.visible')
        this.acceptCookie().should('be.visible').click()
    }
}