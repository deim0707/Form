import {Checkbox} from 'primereact/checkbox';
import style from "./checkboxInput.module.scss"

const CheckboxInput = ({value, setValue, className = ""}) => (
    <label className={`${style.wrapper} ${className}`}>
        <Checkbox onChange={e => setValue(e.checked)} checked={value} className={style.checkbox}/>

        <div>
            <span>*</span>
            <span>Я согласен с <a href="#">политикой конфиденциальности</a></span>
        </div>
    </label>
)

export default CheckboxInput;
