import React from "react";
import EditToolbar from "./EditToolbar";

export default class Banner extends React.Component {
    render() {
        const {closeCallback, title} = this.props;
        return (
            <div id="top5-banner">
                {title}
                <EditToolbar 
                    closeCallback = {closeCallback}
                />
            </div>
        );
    }
}