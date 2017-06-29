import { NoteSwiftPage } from './app.po';

describe('note-swift App', () => {
  let page: NoteSwiftPage;

  beforeEach(() => {
    page = new NoteSwiftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
