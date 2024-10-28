import { BaseButtonPropsType } from "./type";

const BaseButton = ({ children, filled, click }: BaseButtonPropsType) => {
    return (
        <button
            type="button"
            onClick={click}
            className={`flex items-center py-2 px-3 font-bold gap-2 ${filled && 'bg-gray-300'} hover:bg-gray-300 transition-colors ease-in-out rounded-lg`}>
            {children}
        </button>
    )
}

export default BaseButton;