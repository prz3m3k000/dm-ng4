import { DmNg4Page } from './app.po';

describe('dm-ng4 App', () => {
  let page: DmNg4Page;

  beforeEach(() => {
    page = new DmNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
