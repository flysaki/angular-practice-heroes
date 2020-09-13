import {AppPage} from './app.po';
import {browser, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('angular-tour-of-heroes app is running!');
  });


  it('should not contain details on init', () => {
    page.navigateTo();
    const arr = page.getH2TextArr();
    arr.then(h2TextArr => {
      console.log('--------------------------------000000000------------');
      console.log(h2TextArr);
      h2TextArr.forEach(str => {
        expect(str).not.toContain('Details');
      });
    });
  });

  it('should contain details after click a hero', () => {
    page.navigateTo();
    page.clickHero();
    const arr = page.getH2TextArr();
    arr.then(h2TextArr => {
      console.log('--------------------------------1111111------------');
      console.log(h2TextArr);
      expect(h2TextArr.join()).toContain('Details');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
