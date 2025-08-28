export default function TextInput({ inputModel }) {

    return (
        <div
            style={{
                display: "flex",
                flexFlow: "column",
            }}
        >
            <div
                style={{
                    paddingLeft: "1.5rem",
                    paddingBottom: "0.3rem"
                }}
            >
                <label htmlFor="">{inputModel?.label}</label>
            </div>
            <input
                type={inputModel?.type}
                placeholder={inputModel?.placeholder}
                min={inputModel?.min}
                max={inputModel?.max}
                step={inputModel?.step}
                style={{
                    border: "2px solid #555",
                    // border: "1px solid blue",
                    // backgroundColor: "rgba(0, 0, 0, 0.05)",
                    fontSize: "1rem",
                    padding: "0.7rem",
                    borderRadius: "2rem",
                    color: "#333",
                    boxShadow: "0px 0px 8px 0px rgba(255, 255, 255, 0.5)"
                }}
                value={inputModel?.value || ""}
                checked={inputModel?.checked}
                onChange={event => {
                    let value = event.target.value
                    
                    if (inputModel?.type === "number") value = Number(value)
                    else if (inputModel?.type === "checkbox") value = event.target.checked
                    else if (inputModel?.type === "date") value = new Date(value)
                    else if (inputModel?.type === "datetime-local") value = new Date(value)

                    if (inputModel?.updateValue) inputModel?.updateValue(value, event.target, inputModel)
                }}
                onKeyDown={event => {
                    if (event.key === "Enter") {
                        if (inputModel?.onEnter) inputModel?.onEnter(event, event.target, inputModel)
                    }
                }}
                onKeyUp={event => {
                    if (event.key === "Escape") {
                        if (inputModel?.onEscape) inputModel?.onEscape(event, event.target, inputModel)
                    }
                }}
            />
            <div
                style={{
                    paddingLeft: "1.5rem"
                }}
            >
                <span
                    style={{
                        fontSize: "0.6rem",
                        color: "red"
                    }}
                >
                    {inputModel?.error}
                </span>
            </div>
        </div>
    )

}