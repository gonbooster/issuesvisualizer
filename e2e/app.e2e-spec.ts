import { IssuesViewerPage } from './app.po';

describe('issues-viewer App', () => {
  let page: IssuesViewerPage;

  beforeEach(() => {
    page = new IssuesViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
