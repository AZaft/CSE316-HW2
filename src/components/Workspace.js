import React from "react";

export default class Workspace extends React.Component {
    render() {
        let items = <></>;
        if( this.props.currentList != null){
           items = <div id="edit-items">
                        <div id = "item-1" class = "top5-item">
                            <text> {this.props.currentList.items[0]} </text>
                        </div>
                        <div id = "item-2" class = "top5-item">
                            <text> {this.props.currentList.items[1]} </text>
                        </div>
                        <div id = "item-3" class = "top5-item">
                            <text> {this.props.currentList.items[2]} </text>
                        </div>
                        <div id = "item-4" class = "top5-item">
                            <text> {this.props.currentList.items[3]} </text>
                        </div>
                        <div id = "item-5" class = "top5-item">
                            <text> {this.props.currentList.items[4]} </text>
                        </div>
            </div>;
        }
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    {items}
                </div>
            </div>
        )
    }
}