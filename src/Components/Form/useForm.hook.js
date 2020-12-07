import {useState, useEffect} from "react";


const useForm = () => {
    const [isValidForm, setIsValidForm] = useState(false);
    const [isValidFields, setIsValidFields] = useState(true);
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [checkedGender, setCheckedGender] = useState();
    const [linkToGithub, setLinkToGithub] = useState();
    const [isAgreeWithPolitics, setIsAgreeWithPolitics] = useState(false);
    const [isShowPolicePopUp, setIsShowPolicePopUp] = useState(false);
    const [isShowSuccessPopUp, setIsShowSuccessPopUp] = useState(false);

    const genders = ["Мужской", "Женский"];
    const textRegExp = /^[A-Za-zА-Яа-я]+$/;
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    useEffect(()=>{
        if(isValidFields && isAgreeWithPolitics && name && email && checkedGender) setIsValidForm(true)
        else setIsValidForm(false)
    },[name,email,checkedGender,isAgreeWithPolitics, isValidFields])


    return {
        isValidForm: {
            value: isValidForm,
            setValue: setIsValidForm
        },
        isValidFields: {
            value: isValidFields,
            setValue: setIsValidFields,
        },
        name: {
            value: name,
            setValue: setName
        },
        surname: {
            value: surname,
            setValue: setSurname
        },
        checkedGender: {
            value: checkedGender,
            setValue: setCheckedGender
        },
        linkToGithub: {
            value: linkToGithub,
            setValue: setLinkToGithub
        },
        email: {
            value: email,
            setValue: setEmail
        },
        isAgreeWithPolitics: {
            value: isAgreeWithPolitics,
            setValue: setIsAgreeWithPolitics
        },
        isShowPolicePopUp: {
            value: isShowPolicePopUp,
            setValue: setIsShowPolicePopUp
        },
        isShowSuccessPopUp: {
            value: isShowSuccessPopUp,
            setValue: setIsShowSuccessPopUp
        },
        regexp: {
            text: textRegExp,
            email: emailRegExp,
        },
        genders,
    }
}

export default useForm;
