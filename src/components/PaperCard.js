import React from 'react';
import clsx from 'clsx';

const PaperCard = ({ className, children, ...props }) => (
  <article className={clsx('paper-card', className)} {...props}>
    {children}
  </article>
);

export default PaperCard;
