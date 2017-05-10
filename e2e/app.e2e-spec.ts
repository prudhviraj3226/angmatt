import { AngmatPage } from './app.po';

describe('angmat App', () => {
  let page: AngmatPage;

  beforeEach(() => {
    page = new AngmatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
