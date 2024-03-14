import { useTranslation } from "react-i18next";
import s from "./ArticleEditPage.module.scss";
import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { Page } from "widgets/Page/Page";

interface IArticleEditPageProps {
	className?: string;
}

const ArticleEditPage: FC<IArticleEditPageProps> = memo((props) => {
	const { className, children } = props;
	const { t } = useTranslation()
	const { id } = useParams<{ id: string }>();
	const isEdit = Boolean(id);

	return (
		<Page className={classNames(s.ArticleEditPage, {}, [className])}>
			{isEdit
				? t('Редактирование статьи с ID = ') + id
				: t('Создание новой статьи')}
		</Page>
	)
});

export default ArticleEditPage