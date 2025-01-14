// Copyright 2019 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import classnames from 'classnames';

import * as styles from './Button.scss';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  pill?: boolean;
  primary?: boolean;
};

const getClassName = ({ primary, pill }: Props) => {
  if (pill && primary) {
    return styles.pillPrimary;
  }

  if (pill) {
    return styles.pill;
  }

  if (primary) {
    return styles.primary;
  }

  return styles.base;
};

export function Button({
  className,
  children,
  ...otherProps
}: React.PropsWithChildren<Props>): JSX.Element {
  return (
    <button
      type="button"
      className={classnames(getClassName(otherProps), className)}
      {...otherProps}
    >
      {children}
    </button>
  );
}
