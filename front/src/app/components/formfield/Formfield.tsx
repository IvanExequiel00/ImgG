
const FormField = ({labelName ,typ ,name , placehodler, value, handlechange, isSupriseMe, handleSupriseMe}) => {
    return(
        <div>
            <div className="flex items-center gap-2 mb-2"></div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-900">
                {labelName}
            </label>
            {isSupriseMe &&(
                <button></button>
            )}

        </div>
    )
}

export default FormField;