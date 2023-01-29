import "./Image.css"
import Logo from "../assets/User.png"


export const Image = () => {
    return (
        <div className="User-img">
            <img src={Logo} alt="User image" className="User_img"/>
        </div>
    )
}