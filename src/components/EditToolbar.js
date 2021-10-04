import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        return (
            <div id="edit-toolbar">
                <div 
                    id='undo-button' 
                    className="top5-button-disabled"
                    onClick={this.props.undoCallback}>
                        &#x21B6;
                </div>
                <div
                    id='redo-button'
                    className="top5-button-disabled"
                    onClick={this.props.redoCallback}>
                        &#x21B7;
                </div>
                <div
                    id='close-button'
                    className="top5-button-disabled"
                    onClick={this.props.closeCallback}>
                        &#x24E7;
                </div>
            </div>
        )
    }
}