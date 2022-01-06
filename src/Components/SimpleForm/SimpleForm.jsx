import { useSimpleForm } from "./useSimpleForm"

export const SimpleForm = (props) => {
    const state = useSimpleForm();

    return (
        <div>{props.render(state)}</div>
    )
}