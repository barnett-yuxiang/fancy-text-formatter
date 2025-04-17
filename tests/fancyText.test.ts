import { toBoldSerif, toBoldSans, toItalicSerif, toItalicSans } from '../src/app/fancyText';

describe('fancyText', () => {
  it('toBoldSerif should convert English letters and numbers', () => {
    expect(toBoldSerif('ABCxyz012')).toBe('𝐀𝐁𝐂𝐱𝐲𝐳𝟎𝟏𝟐');
  });

  it('toBoldSans should convert English letters and numbers', () => {
    expect(toBoldSans('ABCxyz012')).toBe('𝗔𝗕𝗖𝘅𝘆𝘇𝟬𝟭𝟮');
  });

  it('toItalicSerif should convert English letters, keep numbers', () => {
    expect(toItalicSerif('ABCxyz012')).toBe('𝐴𝐵𝐶𝑥𝑦𝑧012');
  });

  it('toItalicSans should convert English letters and numbers', () => {
    expect(toItalicSans('ABCxyz012')).toBe('𝘈𝘉𝘊𝘹𝘺𝘻𝟬𝟭𝟮');
  });

  it('should preserve non-transformable characters (e.g., Chinese, punctuation)', () => {
    const input = '你好, world! 123';
    expect(toBoldSerif(input)).toContain('你好,');
    expect(toBoldSans(input)).toContain('你好,');
    expect(toItalicSerif(input)).toContain('你好,');
    expect(toItalicSans(input)).toContain('你好,');
  });
});