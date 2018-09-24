import { WorldPage } from './app.po';

describe('world App', () => {
  let page: WorldPage;

  beforeEach(() => {
    page = new WorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
