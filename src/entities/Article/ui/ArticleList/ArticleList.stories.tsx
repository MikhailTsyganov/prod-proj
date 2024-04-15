import type { Meta, StoryObj } from '@storybook/react';

import { ArticleList } from './ArticleList';
import { EArticleBlockType, EArticleType, EArticleView, type IArticle } from '../../model/types/article';
import { StoreDecorator } from 'shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})]
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const article: IArticle =
    {
      id: '1',
      title: 'Javascript newsdwadwadawdwdadaawd',
      subtitle: 'Что нового в JS за 2022 год?',
      img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      views: 1022,
      createdAt: '26.02.2022',
      user: {
        id: '1',
        username: 'adm',
        avatar: 'https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg'
      },
      type: [
        EArticleType.IT,
        EArticleType.SCIENCE,
        EArticleType.ECONOMICS
      ],
      blocks: [
        {
          id: '1',
          type: EArticleBlockType.TEXT,
          title: 'Заголовок этого блока',
          paragraphs: [
            'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
            'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
          ]
        },
        {
          id: '4',
          type: EArticleBlockType.CODE,
          code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
        },
        {
          id: '5',
          type: EArticleBlockType.TEXT,
          title: 'Заголовок этого блока',
          paragraphs: [
            'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
            'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
          ]
        }
      ]
    }

const articles = new Array(9).fill(article)

export const Tile: Story = {
  args: { articles, view: EArticleView.TILE, virtualized: false }
};

export const List: Story = {
  args: { articles, view: EArticleView.LIST, virtualized: false }
  // decorators: [ThemeDecorator(ETheme.DARK)]
};

export const TileIsLoading: Story = {
  args: { articles, view: EArticleView.TILE, isLoading: true, virtualized: false }
};

export const ListIsLoading: Story = {
  args: { articles, view: EArticleView.LIST, isLoading: true, virtualized: false }
};
