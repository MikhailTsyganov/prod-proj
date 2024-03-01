import s from "./{{pascalCase}}.module.scss";
import { FC, memo } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

interface I{{pascalCase}}Props {
	className ?: string;
}

export const {{pascalCase}}: FC<I{{pascalCase}}Props> = memo((props) => {
	const { className, children } = props;

	return (
	<div className={classNames(s.{{pascalCase}}, {}, [className])}>
		{children}
	</div >
  )
});

