import {useState} from "react";

const useForm = () => {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const genders = ["Мужской", "Женский"];
    const [checkedGender, setCheckedGender] = useState();
    const [linkToGithub, setLinkToGithub] = useState();
    const [isAgreeWithPolitics, setIsAgreeWithPolitics] = useState(false)

    return {
        name: {
            value: name,
            setValue: setName,
        },
        surname: {
            value: surname,
            setValue: setSurname,
        },
        email: {
            value: email,
            setValue: setEmail,
        },
        checkedGender: {
            value: checkedGender,
            setValue: setCheckedGender,
        },
        linkToGithub: {
            value: linkToGithub,
            setValue: setLinkToGithub,
        },
        isAgreeWithPolitics: {
            value: isAgreeWithPolitics,
            setValue: setIsAgreeWithPolitics,
        },
        genders: genders,
    }
}

export default useForm;
