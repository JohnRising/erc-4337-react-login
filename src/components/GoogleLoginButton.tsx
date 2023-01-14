import React from 'react'

type Props = {
    clientId?: string,
    callbackFunction?: string
}

const GoogleLoginButton = ({clientId, callbackFunction}: Props) => {
    return (
        <div>
            <div id="g_id_onload"
                data-client_id={clientId}
                data-context="signin"
                data-ux_mode="popup"
                data-callback={callbackFunction}
                data-auto_prompt="false">
            </div>

            <div className="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="continue_with"
                data-size="large"
                data-logo_alignment="left">
            </div>
        </div>
    )
}

export default GoogleLoginButton