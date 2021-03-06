import {Checkbox} from 'primereact/checkbox';
import style from "./checkboxInput.module.scss"

const CheckboxInput = ({value, setValue, className = "", onClickLabel}) => (
    <label className={`${style.wrapper} ${className}`}>
        <Checkbox onChange={e => setValue(e.checked)} checked={value} className={style.checkbox}/>

        <div>
            <span>*</span>
            <span>Я согласен с </span>
            <span className={style.politics} onClick={() => onClickLabel(true)}>политикой конфиденциальности</span>
        </div>
    </label>
)

export default CheckboxInput;
