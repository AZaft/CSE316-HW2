import React from "react";

export default class Workspace extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            itemInput: <></>,
            editItem: false,
            itemID: -1,
            itemOldText: "",
            itemNewText: "",
        }
    }

    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.updateItem(event);
        }
    }

    handleItemEdit = (event) => {
        let itemBeingEdited = event.target.id.slice(-1);
        this.setState({
            itemInput: <input autoFocus
                    id={"item-" + itemBeingEdited}
                    className='item-card'
                    type='text'
                    onBlur={this.updateItem}
                    onChange={this.updateItemText}
                    onKeyPress={this.handleKeyPress}
                    defaultValue={this.props.currentList.items[itemBeingEdited-1]}
                    style={{width: "94%"}}
            />,
            editItem: true,
            itemID: itemBeingEdited-1,
            itemOldText: this.props.currentList.items[itemBeingEdited-1],
        });
    }

    updateItemText = (event) => {
        this.setState({itemNewText: event.target.value});
    }

    updateItem = (event) => {
        console.log(this.state.itemOldText);
        console.log(event.target.value);
        this.props.renameItemCallback(this.state.itemOldText, event.target.value);
        this.setState({editItem: false});
    }

    render() {
        let items = <></>;
        if( this.props.currentList != null){
           items = <div id="edit-items">
                        <div 
                            id = "item-1" 
                            className = "top5-item"
                            onDoubleClick={this.handleItemEdit}
                        >
                            {(this.state.editItem && this.state.itemID === 0 ) ? this.state.itemInput : this.props.currentList.items[0]}
                        </div>
                        <div
                            id = "item-2" 
                            className = "top5-item" 
                            onDoubleClick={this.handleItemEdit}
                        >
                            {(this.state.editItem && this.state.itemID === 1 ) ? this.state.itemInput : this.props.currentList.items[1]}
                        </div>
                        <div
                            id = "item-3" 
                            className = "top5-item" 
                            onDoubleClick={this.handleItemEdit}
                        >
                            {(this.state.editItem && this.state.itemID === 2 ) ? this.state.itemInput : this.props.currentList.items[2]}
                        </div>
                        <div
                            id = "item-4" 
                            className = "top5-item" 
                            onDoubleClick={this.handleItemEdit}
                        >
                            {(this.state.editItem && this.state.itemID === 3 ) ? this.state.itemInput : this.props.currentList.items[3]}
                        </div>  
                        <div
                            id = "item-5" 
                            className = "top5-item" 
                            onDoubleClick={this.handleItemEdit}
                        >
                            {(this.state.editItem && this.state.itemID === 4 ) ? this.state.itemInput : this.props.currentList.items[4]}
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