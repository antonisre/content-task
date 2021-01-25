import MainContent from '../components/MainContent';
import { text, sizes, list, pictures, alertText } from '../config/data.json';

export default function Home() {
    return (
        <div>
            <MainContent text={text} sizes={sizes} list={list} pictures={pictures} alertText={alertText}/>
        </div>
    )
}