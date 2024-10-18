const { Builder, By, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const math = require('mathjs');

(async function example() {
    let options = new edge.Options();
    options.addArguments('headless'); // Додає безголовий режим
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-extensions');
    options.addArguments('--disable-gpu');
    options.addArguments('--no-sandbox');
    let driver = await new Builder().forBrowser('MicrosoftEdge').setChromeOptions(options).build();

    try {
        // Відкриваємо сторінку
        await driver.get('http://suninjuly.github.io/math.html');

        // Знаходимо значення x
        await driver.wait(until.elementLocated(By.id('input_value')), 10000);
        let xElement = await driver.findElement(By.id('input_value'));
        let x = await xElement.getText();

        // Обчислюємо значення функції
        let y = math.log(math.abs(12 * math.sin(parseInt(x)))).toString();

        // Вводимо відповідь в текстове поле
        await driver.findElement(By.id('answer')).sendKeys(y);

        // Вибираємо checkbox "I'm the robot"
        await driver.findElement(By.id('robotCheckbox')).click();

        // Вибираємо radiobutton "Robots rule!"
        await driver.findElement(By.id('robotsRule')).click();

        // Натискаємо кнопку Submit
        await driver.findElement(By.css('button.btn')).click();
    } finally {
        // Закриваємо браузер
        //await driver.quit();
    }
})();
