import {Button} from 'primereact/button';
import WithTitleSection from "../WithTitleSection/WithTitleSection";
import Input from "../Inputs/Input/Input";
import CheckboxInput from "../Inputs/CheckboxInput/CheckboxInput";
import RadioInput from "../Inputs/RadioInput/RadioInput";
import LoadFileInput from "../Inputs/LoadFileInput/LoadFileInput";
import NotificationPopUp from "../NotificationPopUp/NotificationPopUp";
import useForm from "./useForm.hook";
import {politicsElement} from "../../shared/securityPolicy";
import style from "./form.module.scss"


const Form = () => {

    const {
        isValidForm,
        isValidFields,
        name,
        surname,
        email,
        isAgreeWithPolitics,
        linkToGithub,
        checkedGender,
        isShowPolicePopUp,
        isShowSuccessPopUp,
        genders,
        regexp,
        onSubmit,
        onCloseModalSuccess
    } = useForm();

    return (
        <article className={style.wrapper}>
            <h1>Анкета соискателя</h1>

            <WithTitleSection title="Личные данные">
                <div className="p-grid">
                    <Input
                        value={name.value}
                        setValue={name.setValue}
                        placeholder="Имя"
                        label="Имя"
                        inputType="text"
                        isRequired
                        className="p-col-12 p-md-6"
                        validateRegExp={regexp.text}
                        globalValidState={isValidFields}
                    />
                    <Input
                        value={surname.value}
                        setValue={surname.setValue}
                        placeholder="Фамилия"
                        label="Фамилия"
                        inputType="text"
                        className="p-col-12 p-md-6"
                        validateRegExp={regexp.text}
                    />
                </div>

                <div className="p-grid">
                    <Input
                        value={email.value}
                        setValue={email.setValue}
                        placeholder="Электронная почта"
                        label="Электронная почта"
                        inputType="email"
                        isRequired
                        className="p-col-12 p-md-6"
                        globalValidState={isValidFields}
                        validateRegExp={regexp.email}
                    />
                    <LoadFileInput className="p-col-12 p-md-6"/>
                </div>
            </WithTitleSection>

            <WithTitleSection title="Пол" isRequired>
                <div className="p-grid">
                    <RadioInput
                        options={genders}
                        value={checkedGender.value}
                        setValue={checkedGender.setValue}
                        className="p-col-6 p-md-4"
                    />
                </div>
            </WithTitleSection>

            <WithTitleSection title="GitHub">
                <Input
                    value={linkToGithub.value}
                    setValue={linkToGithub.setValue}
                    placeholder="Ссылка на GitHub"
                    label="Вставьте ссылку на GitHub"
                    inputType="text"
                    className="p-col-12 p-md-6"
                />
            </WithTitleSection>

            <CheckboxInput
                value={isAgreeWithPolitics.value}
                setValue={isAgreeWithPolitics.setValue}
                className={`${style.agreeWithPolitics} p-col-12 p-md-8`}
                onClickLabel={isShowPolicePopUp.setValue}
            />

            <NotificationPopUp
                title="Политика конфиденциальности"
                buttonText="Я согласен"
                mainTextElement={politicsElement}
                onConfirm={isAgreeWithPolitics.setValue}
                isShow={isShowPolicePopUp.value}
                setIsShow={isShowPolicePopUp.setValue}
                type="policy"
            />
            <NotificationPopUp
                title={`Спасибо, ${name.value}!`}
                buttonText="Понятно"
                mainTextElement={<div>Мы скоро свяжемся с вами</div>}
                isShow={isShowSuccessPopUp.value}
                onConfirm={onCloseModalSuccess}
                setIsShow={isShowSuccessPopUp.setValue}
                className={style.successPopUp}
                type="success"
            />

            <Button
                label="Отправить"
                onClick={onSubmit}
                className={`${style.buttonSendRequest} p-col-12 p-md-7`}
                disabled={!isValidForm.value}
            />
        </article>
    )
}

export default Form;



