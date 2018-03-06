import { CosmoTemplatePage } from './app.po';

describe('Cosmo App', function() {
  let page: CosmoTemplatePage;

  beforeEach(() => {
    page = new CosmoTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
