# shinny-dvor

## Сборка сайта и блога

Сайт и блог используют серверный рендеринг по запросу. Сборка образов не должна
зависеть от доступности WordPress: layouts задают штатный для Next.js 14
`dynamic = 'force-dynamic'`, а динамические маршруты не перечисляют записи CMS
через `generateStaticParams` во время сборки.

Адрес `https://wp.shdvor.pro/graphql`, запросы данных, URL страниц и metadata
сохраняются. В работающем приложении WordPress остаётся обязательной
зависимостью: успешная сборка образа не подтверждает исправность GraphQL и не
заменяет проверку страниц с реальным содержимым. Ошибки CMS не подменяются
пустыми или вымышленными данными.

[//]: # 'VERSIONS'

<img src="https://img.shields.io/static/v1?style=for-the-badge&label=%40atls%2Fcode-service&message=0.0.16&labelColor=ECEEF5&color=D7DCEB"> <img src="https://img.shields.io/static/v1?style=for-the-badge&label=%40atls-ui-generators%2Fbutton&message=0.0.10&labelColor=097CEB&color=0B6DCC"> <img src="https://img.shields.io/static/v1?style=for-the-badge&label=%40atls-ui-generators%2Ficons&message=0.0.2&labelColor=097CEB&color=0B6DCC">

[//]: # 'VERSIONS'
