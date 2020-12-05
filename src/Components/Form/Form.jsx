import {useState} from "react";
import {Button} from 'primereact/button';
import WithTitleSection from "../WithTitleSection/WithTitleSection";
import Input from "../Inputs/Input/Input";
import CheckboxInput from "../Inputs/CheckboxInput/CheckboxInput";
import RadioInput from "../Inputs/RadioInput/RadioInput";
import LoadFileInput from "../Inputs/LoadFileInput/LoadFileInput";
import useForm from "./useForm.hook"; // TODO убрать, если не использую
import style from "./form.module.scss"


const Form = () => {

    const [isValidForm, setIsValidForm] = useState(true);
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const genders = ["Мужской", "Женский"];
    const [checkedGender, setCheckedGender] = useState();
    const [linkToGithub, setLinkToGithub] = useState();
    const [isAgreeWithPolitics, setIsAgreeWithPolitics] = useState(false)
    // const onlyTextRegExp = /^([A-Za-zА-Яа-я]+)$/gm;
    const onlyTextRegExp = /^[A-Za-zА-Яа-я]+$/gm;
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;

    // const {name, surname, email, genders, checkedGender, linkToGithub, isAgreeWithPolitics} = useForm() // TODO убрать, если не использую

    return (
        <article className={style.wrapper}>
            <h1>Анкета соискателя</h1>

            <WithTitleSection title="Личные данные">
                <div className="p-grid">
                    <Input value={name} setValue={setName} placeholder="Имя" label="Имя" inputType="text" isRequired
                           className="p-col-6" validateRegExp={onlyTextRegExp}/>
                    <Input value={surname} setValue={setSurname} placeholder="Фамилия" label="Фамилия" inputType="text"
                           className="p-col-6" validateRegExp={onlyTextRegExp}/>
                </div>

                <div className="p-grid">
                    <Input value={email} setValue={setEmail} placeholder="Электронная почта" label="Электронная почта"
                           inputType="email" isRequired className="p-col-6" validateRegExp={emailRegExp}/>
                    <LoadFileInput className="p-col-6"/>
                </div>
            </WithTitleSection>

            <WithTitleSection title="Пол" isRequired>
                <RadioInput options={genders} value={checkedGender} setValue={setCheckedGender} className="p-col-4"/>
            </WithTitleSection>

            <WithTitleSection title="GitHub">
                <Input value={linkToGithub} setValue={setLinkToGithub} placeholder="Ссылка на GitHub"
                       label="Вставьте ссылку на GitHub" inputType="text" className="p-col-6"/>
            </WithTitleSection>

            <CheckboxInput value={isAgreeWithPolitics} setValue={setIsAgreeWithPolitics}
                           className={`${style.agreeWithPolitics} p-col-8`}/>


            <Button label="Отправить" onClick={() => console.log("Отправили данные")}
                    className={`${style.buttonSendRequest} p-col-7`} disabled={!isValidForm}/>

        </article>


//         <article className={style.wrapper}>
//     <h1>Анкета соискателя</h1>
//
//     <WithTitleSection title="Личные данные">
//         <div className="p-grid">
//             <Input value={name.value} setValue={name.setValue} placeholder="Имя" label="Имя" inputType="text" isRequired className="p-col-6" />
//             <Input value={surname.value} setValue={surname.setValue} placeholder="Фамилия" label="Фамилия" inputType="text" className="p-col-6" />
//         </div>
//
//         <div className="p-grid">
//             <Input value={email.value} setValue={email.setValue()} placeholder="Электронная почта" label="Электронная почта" inputType="email" isRequired className="p-col-6" />
//             <LoadFileInput className="p-col-6" />
//         </div>
//     </WithTitleSection>
//
//     <WithTitleSection title="Пол" isRequired>
//         <RadioInput options={genders} value={checkedGender.value} setValue={checkedGender.setValue} className="p-col-4"/>
//     </WithTitleSection>
//
//     <WithTitleSection title="GitHub">
//         <Input value={linkToGithub.value} setValue={linkToGithub.setValue} placeholder="Ссылка на GitHub" label="Вставьте ссылку на GitHub" inputType="text" className="p-col-6" />
//     </WithTitleSection>
//
//     <CheckboxInput value={isAgreeWithPolitics.value} setValue={isAgreeWithPolitics.setValue} className={`${style.agreeWithPolitics} p-col-8`} />
//
//
//     <Button label="Отправить" onClick={()=>console.log("Отправили данные")} className={`${style.buttonSendRequest} p-col-7`} />
//
// </article>
    )
}

export default Form;



