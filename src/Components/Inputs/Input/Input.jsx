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
                   validateRegExp,
                   globalValidState = null,
               }) => {

    const [isValidInput, setIsValidInput] = useState(true);

    useEffect(() => {
        if (globalValidState) globalValidState.setValue(isValidInput)
    }, [isValidInput])

    useEffect(() => {
        if (value && validateRegExp && !isValidInput) setIsValidInput(validateRegExp.test(value))
        if (!value && validateRegExp) setIsValidInput(true);
    }, [value])

    const checkValid = () => {
        if (value.trim() && validateRegExp && !validateRegExp.test(value)) {
            setIsValidInput(false)
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
