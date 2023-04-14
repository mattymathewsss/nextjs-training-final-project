import React, { type ReactNode } from 'react';

export interface IButton {
  content: ReactNode;
  buttonType: string;
  className?: string;
  handleClick?: React.MouseEventHandler;
}

const Button = ({ content, buttonType, className, handleClick }: IButton) => {
  // hover:btn-hover-transparent

  return (
    <button
      onClick={handleClick}
      className={`btn-base ${buttonType} ${className || ''}`}
    >
      {content}
    </button>
  );
};

export default Button;