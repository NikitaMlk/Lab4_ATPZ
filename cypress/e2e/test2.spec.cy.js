describe('Forgot Password Test on OrangeHRM', () => {
    it('Should navigate to the Forgot Password page, input the username, and click Reset Password', () => {
        // Відвідуємо сторінку входу
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Шукаємо та клікаємо на лінк "Forgot your password?"
        cy.contains('Forgot your password?').click()

        // Перевіряємо, що URL змінився на сторінку відновлення пароля
        cy.url().should('include', '/auth/requestPasswordResetCode')

        // Перевіряємо наявність заголовку "Reset Password"
        cy.get('h6').should('contain.text', 'Reset Password')

        // Вводимо ім'я користувача "Admin" у поле username
        cy.get('input[placeholder="Username"]').type('Admin')

        // Перевіряємо, що текст "Admin" введено коректно
        cy.get('input[placeholder="Username"]').should('have.value', 'Admin')

        // Натискаємо кнопку "Reset Password"
        cy.get('button[type="submit"]').click()
    });
});
