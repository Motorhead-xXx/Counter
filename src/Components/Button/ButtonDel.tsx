import React from "react";
import s from "./Button.module.css"
import {Button} from "@material-ui/core";
import {Refresh} from "@material-ui/icons";

type counterType = {
    callBack: () => void
    disabled: boolean
    children: string
}

export const ButtonDel = (props: counterType) => {
    const buttonClick = () => {
        props.callBack()
    }

    return (
        <div className={s.buttonWrapper}>
            <Button disableElevation variant={"contained"} color={"success"} size={"small"} disabled={props.disabled}
                    onClick={buttonClick} endIcon={<Refresh/>}>{props.children}</Button>

        </div>
    )
}
