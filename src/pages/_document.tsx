import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pt-br">
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}