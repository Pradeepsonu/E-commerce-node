const authService = require('../../services/authService');

describe('Auth Service', () => {
    it('should return undefined when username and password are Pradeepke and Pradeep@28', () => {
        const username = 'Pradeepke'
        const password = 'Pradeep@28'

        const result = authService.login(username, password)

        expect(result).toBe(undefined)
    })
    it('should throw an error when password is only wrong', () => {
        try {
            const username = 'Pradeepke'
            const password = 'wrong-password'
            authService.login(username, password)

        }
        catch (err) {
            expect(err).toEqual("Invalid Credentials")
        }
    })

    it('should throw an error when username is only wrong', () => {
        try {
            const username = 'wrong-username'
            const password = 'Pradeep@28'

            authService.login(username, password)
        }
        catch (err) {
            expect(err).toEqual("Invalid Credentials")
        }
    })

})



