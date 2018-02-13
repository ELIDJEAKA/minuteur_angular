import { MinuteurPage } from './app.po';

describe('minuteur App', () => {
  let page: MinuteurPage;

  beforeEach(() => {
    page = new MinuteurPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
