import {browser, by, element, ElementFinder} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  clickHero(): Promise<unknown> {
    return element.all(by.css('ul.heroes li')).get(2).getWebElement().click() as Promise<unknown>;
  }

  getH2TextArr(): Promise<string[]> {
    return element.all(by.css('h2')).map(elementFinder => elementFinder.getText()) as Promise<string[]>;
  }
}
