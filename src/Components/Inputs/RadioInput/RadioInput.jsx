import {RadioButton} from 'primereact/radiobutton';
import style from "./radioInput.module.scss"

const RadioInput = ({value, setValue, options, className = ""}) => (
    <div className={`${style.RadioInputWrapper} ${className}`}>
        {
            options.map((item, idx) => (
                <label key={item + idx}>
                    <RadioButton
                        inputId={item}
                        name={item}
                        value={item}
                        onChange={(e) => setValue(e.value)}
                        checked={value === item}
                    />
                    <span>{item}</span>
                </label>
            ))
        }
    </div>
)

export default RadioInput;
