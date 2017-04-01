import { GodashPage } from './app.po';

describe('godash App', () => {
  let page: GodashPage;

  beforeEach(() => {
    page = new GodashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
