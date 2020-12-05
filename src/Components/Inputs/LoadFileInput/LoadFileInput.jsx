import {useState, useEffect} from "react";
import {Button} from 'primereact/button';
import style from "./LoadFileInput.module.scss"

const LoadFileInput = ({className = ""}) => {

    const [file, setFile] = useState(null);
    const [isBigSize, setIsBigSize] = useState(false);
    const getSizeFile = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setFile(file)
        }
        reader.readAsDataURL(file)
    }

    useEffect(() => {
        if (file?.size) {
            // если файл больше 16мегабайт, меняем isBigSize
            setIsBigSize((file.size / 1000) > 16000)
        }
    }, [file])

    const withoutFile = <Button
        className={`${style.LoadFileInputWrapper} ${className}`}
        label="Загрузить резюме"
        icon="pi pi-plus"
    >
        <input type="file" onChange={getSizeFile}/>
    </Button>

    const withFile =
        <div
            className={`${style.withFileWrapper} ${isBigSize && style.isBigSize}`}
            onClick={() => setFile(null)} /*не понятно, удалять по нажатию на имя файла или на крестик*/
        >
            <div className={style.withFileWrapper_success}>
                <div className={style.icoFile}>
                    <i className="pi pi-paperclip"/>
                </div>
                <div className={style.nameFile}>{file?.name}</div>
                <div
                    className={style.deleteFile}
                    onClick={() => setFile(null)}
                >
                    <i className="pi pi-times"/>
                </div>
            </div>

            {isBigSize && <div className={style.withFileWrapper_warning}>загружайте файл размером не больше 16 mb</div>}
        </div>

    return (
        <div className={`${style.Wrapper} ${className}`}>
            {file ? withFile : withoutFile}
        </div>
    )
}

export default LoadFileInput;
