
const path = require('path');

export async function getStaticProps() {
    const fs = require('fs');
    const fileContent = fs.readFileSync(path.join(process.cwd(), 'public/text.txt'), 'utf8'); 
    return {
        revalidate: 10,
        props: {
            name: fileContent
        }
    }
}

export default function StaticPage(props) {

    return (
        <div>
            <h2>{props.name}</h2>
        </div>
    )
}