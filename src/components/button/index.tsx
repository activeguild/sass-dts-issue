/* eslint-disable @typescript-eslint/no-unused-vars */
import { FunctionComponent } from 'react';

import classes from './index.module.scss';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
};

export const Button: FunctionComponent<ButtonProps> = ({
  secondary = false,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${classes.btn} ${
        secondary ? 'btn--secondary' : 'btn--primary'
      }`}
    >
      {children}
    </button>
  );
};
