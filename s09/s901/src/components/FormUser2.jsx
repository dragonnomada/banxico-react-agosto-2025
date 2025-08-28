import { Controller, useForm } from "react-hook-form"

export default function FormUser2() {

    const { control, handleSubmit, setError, clearErrors } = useForm({
        defaultValues: {
            nombre: "Ana",
            correo: "ana@empresa.com"
        },
    })

    return (
        <form
            onSubmit={handleSubmit(data => {
                console.log({ data })
            })}
        >
            <Controller 
                name="nombre"
                control={control}
                render={({ field, fieldState, formState }) => (
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input 
                            type="text"
                            value={field.value}
                            onChange={event => {
                                const value = event.target.value

                                clearErrors(field.name)
                                if (value === "ERROR") {
                                    setError(field.name, {
                                        type: "value",
                                        message: "El nombre no es válido"
                                    })
                                    console.log("error")
                                }

                                field.onChange(event)

                            }}
                        />
                        <span>{fieldState.error?.message}</span>
                    </div>
                )}
            />
        </form>
    )

}