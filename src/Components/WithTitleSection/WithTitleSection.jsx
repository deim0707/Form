import style from "./withTitleSection.module.scss"

const WithTitleSection = ({title, children, isRequired = false, className = ""}) => (
    <section className={`${style.wrapper} ${className}`}>
        <h2>
            <span>{title}</span>
            {isRequired && <span className={style.required}>*</span>}
        </h2>
        <div>
            {children}
        </div>
    </section>
)

export default WithTitleSection;
