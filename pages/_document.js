

import Document, { Head, Html, NextScript, Main } from 'next/document';

export default class CustomDocument extends Document {
    
    render() {
        console.log('Run only server side')
        return (
            <Html>
                <Head>
                    <meta name="naveen" content="width=device-width"></meta>
                </Head>
                <body>
                    <Main></Main>
                </body>
                <NextScript></NextScript>
            </Html>
        )
    }
}