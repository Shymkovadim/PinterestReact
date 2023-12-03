
import { IPin } from "../types"
import { PinModalWindow } from "./PinModalWindow"
interface PinProps {
    pin: IPin,

}
export const Pin: React.FC<PinProps> = ({ pin }) => {
    return <div className="pin__wrapper" >
        <img className="pin__img" src={pin.src} alt="pin"></img>
        <h2 className="pin__title">{pin.title}</h2>
        <PinModalWindow pin={pin}></PinModalWindow>
    </div>


}