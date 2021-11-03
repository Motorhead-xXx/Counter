import {Fab} from "@material-ui/core";
import {Refresh} from "@material-ui/icons";

type ButtonType = {
    callback: () => void
    disabled: boolean
}


export const ButtonReset = ({callback,...props}: ButtonType) => {
    const callbackButton = () => {
        callback()
    }
    return(
        <div>
            <Fab size={"small"} color={"primary"} disabled={props.disabled} onClick={callbackButton}>
                <Refresh/>
            </Fab>
        </div>
    )

}