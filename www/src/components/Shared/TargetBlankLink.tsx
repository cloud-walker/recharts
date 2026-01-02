import React from 'react';
import styles from './TargetBlankLink.module.css';

type TargetBlankLinkProps = React.ComponentPropsWithRef<'a'>;

export function TargetBlankLink({ children, ...props }: TargetBlankLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer" className={styles.anchor}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.25em"
        height="1.25em"
        viewBox="0 0 32 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  );
}
