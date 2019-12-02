import { NewsModule } from './news.module';

describe('newsModule', () => {
  let news: NewsModule;

  beforeEach(() => {
    news = new NewsModule();
  });

  it('should create an instance', () => {
    expect(news).toBeTruthy();
  });
});
