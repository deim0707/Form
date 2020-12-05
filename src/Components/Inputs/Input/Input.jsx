import {useEffect, useState} from "react";
import {InputText} from "primereact/inputtext";
import style from "./input.module.scss"

const Input = ({
                   value = "",
                   setValue,
                   placeholder,
                   label,
                   inputType = "text",
                   isRequired = false,
                   className = "",
                   validateRegExp
               }) => {

    const [isValidInput, setIsValidInput] = useState(true)

    useEffect(() => {
        if (value && validateRegExp && !isValidInput) setIsValidInput(validateRegExp.test(value))
        if (!value) setIsValidInput(true);
    }, [value])

    const checkValid = () => {
        if (value.trim() && validateRegExp) {
            const isValidNewValue = validateRegExp.test(value);
            setIsValidInput(isValidNewValue)
            validateRegExp.test(value)

            setValue(value.trim())
        }
    }
    return (
        <div className={`${style.wrapper} ${className}`}>
            <label>
                <span>
                    {label}
                    {isRequired && <span className={style.required}>*</span>}
                </span>
                <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={checkValid}
                    type={inputType}
                    placeholder={placeholder}
                    className={!isValidInput && style.warning}
                />
            </label>
        </div>
    )
}

export default Input;
