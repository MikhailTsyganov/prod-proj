import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./{{pascalCase}}.module.scss";

interface I{{pascalCase}}Props {
	className ?: string;
}

export const {{pascalCase}}: FC <I{{pascalCase}}Props> = (props) => {
	const { className, children } = props;

	return (
	<div className={classNames(s.{{pascalCase}}, {}, [className])}>
		{children}
	</div >
  )
};

