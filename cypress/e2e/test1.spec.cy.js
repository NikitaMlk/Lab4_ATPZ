describe('Navigate through all pages on OrangeHRM', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Вводимо логін та пароль
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        // Перевіряємо, що ми успішно увійшли
        cy.url().should('include', '/dashboard')
    })

    it('Navigate through all menu items', () => {
        const menuItems = [
            { href: '/web/index.php/admin/viewAdminModule', expectedUrl: '/web/index.php/admin/viewSystemUsers' }, // Admin page
            { href: '/web/index.php/pim/viewPimModule', expectedUrl: '/web/index.php/pim/viewEmployeeList' }, // PIM page
            { href: '/web/index.php/leave/viewLeaveModule', expectedUrl: '/web/index.php/leave/viewLeaveList' }, // Leave page
            { href: '/web/index.php/time/viewTimeModule', expectedUrl: '/web/index.php/time/viewEmployeeTimesheet' }, // Time page
            { href: '/web/index.php/recruitment/viewRecruitmentModule', expectedUrl: '/web/index.php/recruitment/viewCandidates' }, // Recruitment page
            { href: '/web/index.php/performance/viewPerformanceModule', expectedUrl: '/web/index.php/performance/searchEvaluatePerformanceReview' }, // Performance page
            { href: '/web/index.php/dashboard/index', expectedUrl: '/web/index.php/dashboard/index' }, // Dashboard page
            { href: '/web/index.php/directory/viewDirectory', expectedUrl: '/web/index.php/directory/viewDirectory' }, // Directory page
            { href: '/web/index.php/buzz/viewBuzz', expectedUrl: '/web/index.php/buzz/viewBuzz' } // Buzz page
        ];

        menuItems.forEach(menu => {
            // Шукаємо елемент меню за його href атрибутом
            cy.get(`a[href="${menu.href}"]`, { timeout: 10000 }).click()

            // Перевіряємо, що URL змінився на фактичний очікуваний URL
            cy.url().should('include', menu.expectedUrl)
        });
    });
});
