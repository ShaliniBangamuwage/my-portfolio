import React from 'react';
import clsx from 'clsx';

const PaperCard = ({ className, children, ...props }) => (
  <article
    className={clsx(
      'rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] shadow-[0_20px_45px_rgba(34,211,238,0.12)] transition-all duration-300 backdrop-blur-sm',
      className
    )}
    {...props}
  >
    {children}
  </article>
);

export default PaperCard;
