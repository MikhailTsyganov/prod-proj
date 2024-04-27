import s from "./{{pascalCase}}.module.scss";
import { memo } from "react";
import { classNames } from "@/shared/lib/helpers/classNames/classNames";

interface I{{pascalCase}}Props {
	className?: string;
}

export const {{pascalCase}} = memo((props: I{{pascalCase}}Props) => {
	const { className } = props;

	return (
	<div className={classNames(s.{{pascalCase}}, {}, [className])}>
		
	</div >
  )
});

