import React, { useState } from 'react';
import styles from '../styles/MainContent.module.css';
import PhotoDisplay from './PhotoDisplay';

interface Props {
    text?: Text,
    sizes?: Size[],
    list?: List[],
    pictures: Picture[],
    alertText: string
}

interface Text {
    title?: string,
    paragraphs?: Paragraph[]
}

interface Paragraph {
    content?: string
}

interface Size {
    size?: number
}

interface List {
    text?: string
}

interface Picture {
    thumbSrc?: { [key: string]: string }
    src?: { [key: string]: string }
}

export default function MainContent({ text, sizes, list, pictures, alertText }: Props): React.ReactElement {
    const [imgSize, setImgSize] = useState(14);
    console.log(imgSize)
    return (
        <div className={ styles.container }>
            <div className={ styles.contentWrapper }>
                <div className={ styles.pictures }>
                    <PhotoDisplay pictures={pictures} imgSize={ imgSize }/>
                </div>

                <div className={ styles.text }>
                    
                    <h1>{ text?.title }</h1>
                    {
                        text?.paragraphs?.map(paragraph =>
                            <p>
                                { paragraph.content }
                            </p>
                        )
                    }

                    <div className={ styles.select }>
                        <label> <h3>Size</h3> </label>
                        <select onChange={(e) => { const target = e.target as HTMLDataElement; setImgSize(parseInt(target.value)) }}> 
                            {
                                sizes?.map(size => 
                                    <option value={size.size}> { size.size } </option>
                                )
                            }
                        </select>
                    </div>
                        
                    <button onClick={ () => alert(alertText) } className={ styles.buyButton}
                    > 
                        Buy now 
                    </button>
            
                    <ul className={ styles.list }>
                        {
                            list?.map(item =>
                                <li> { item.text }</li>
                            )
                        }
                    </ul>           
                </div>
            </div>
        </div>
    )
}