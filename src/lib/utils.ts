import type { CnFunction } from 'cn';
import { createCn } from 'cn/config';

export const typeScale = ['display', 'title', 'heading', 'subhead', 'body', 'meta'] as const;

export const cn: CnFunction = createCn({
  extend: {
    theme: {
      text: [...typeScale],
    },
  },
});
