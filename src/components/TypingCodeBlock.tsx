import { useEffect, useState } from 'react';

const tokens = [
  { text: 'const', className: 'text-[#0000FF] dark:text-[#569CD6]' }, // keyword
  { text: ' ', className: '' },
  { text: 'KhanhChung', className: 'text-[#001080] dark:text-[#9CDCFE]' }, // variable
  { text: ' = ', className: 'text-[#000000] dark:text-[#D4D4D4]' },
  { text: 'new', className: 'text-[#0000FF] dark:text-[#569CD6]' }, // keyword
  { text: ' ', className: '' },
  { text: 'Developer', className: 'text-[#795E26] dark:text-[#4EC9B0]' }, // constructor/class
  { text: '(', className: 'text-[#000000] dark:text-[#D4D4D4]' },
  { text: '{\n  ', className: 'text-emerald-600 dark:text-[#C586C0]' }, // brace
  { text: 'name', className: 'text-[#001080] dark:text-[#9CDCFE]' }, // property
  { text: ': ', className: 'text-[#000000] dark:text-[#D4D4D4]' },
  { text: '"Khanh Chung"', className: 'text-[#A31515] dark:text-[#CE9178]' }, // string
  { text: ',\n  ', className: 'text-[#000000] dark:text-[#D4D4D4]' },
  { text: 'job', className: 'text-[#001080] dark:text-[#9CDCFE]' },
  { text: ': ', className: 'text-[#000000] dark:text-[#D4D4D4]' },
  { text: '"Software Engineering Student"', className: 'text-[#A31515] dark:text-[#CE9178]' },
  { text: ',\n  ', className: 'text-[#000000] dark:text-[#D4D4D4]' },
  { text: 'school', className: 'text-[#001080] dark:text-[#9CDCFE]' },
  { text: ': ', className: 'text-[#000000] dark:text-[#D4D4D4]' },
  { text: '"San Jose State University"', className: 'text-[#A31515] dark:text-[#CE9178]' },
  { text: '\n}', className: 'text-emerald-600 dark:text-[#C586C0]' },
  { text: ')', className: 'text-[#000000] dark:text-[#D4D4D4]' },
  { text: ';', className: 'text-[#000000] dark:text-[#D4D4D4]' }
];

const TypingCodeBlock = () => {
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const totalLength = tokens.reduce((sum, t) => sum + t.text.length, 0);
    if (charIndex < totalLength) {
      const timeout = setTimeout(() => setCharIndex(charIndex + 1), 15);
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  // Build up visible code character by character
  let count = 0;
  const elements = [];

  for (const token of tokens) {
    const visibleCount = Math.min(token.text.length, Math.max(0, charIndex - count));
    if (visibleCount > 0) {
      elements.push(
        <span key={count} className={token.className}>
          {token.text.slice(0, visibleCount)}
        </span>
      );
    }
    count += token.text.length;
  }

  return (
    <pre className="text-sm h-28 md:text-base font-mono">
      <code>{elements}</code>
    </pre>
  );
};

export default TypingCodeBlock;
