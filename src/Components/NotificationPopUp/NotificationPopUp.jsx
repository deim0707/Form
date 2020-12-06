import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import "./notificationPopUp.scss"

const NotificationPopUp = ({title, mainTextElement, buttonText, isShow, setIsShow, className=""}) => {

    const renderFooter = <Button label={buttonText} className="p-col-6" onClick={() => setIsShow(false)} autoFocus/>


    return (
        <div className={`NotificationPopUpWrapper ${className}`}>
            <Dialog className="NotificationPopUp" header={title} visible={isShow} onHide={(()=>setIsShow(false))} footer={renderFooter} closeOnEscape={true} dismissableMask>
                {mainTextElement}
            </Dialog>
        </div>
    )
}

export default NotificationPopUp;
