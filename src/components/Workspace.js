import React from "react";

import ChangeItem_Transaction from "./transactions/ChangeItem_Transaction.js";
import MoveItem_Transaction from "./transactions/MoveItem_Transaction.js";

export default class Workspace extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            itemInput: <></>,
            editItem: false,
            itemID: -1,
            itemDragged: -1,
        }
    }

    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.updateItemTransaction(event);
        }
    }

    handleItemEdit = (event, index) => {
        this.setState({
            itemInput: <input autoFocus
                    key={index}
                    id={"item-" + index+1}
                    className='top5-item'
                    type='text'
                    onBlur={this.updateItemTransaction}
                    onChange={this.updateItemText}
                    onKeyPress={this.handleKeyPress}
                    defaultValue={this.props.currentList.items[index]}
                    style={{outlineColor: "#000000",outlineStyle: "solid"}}
                    
            />,
            editItem: true,
            itemID: index,
            itemOldText: this.props.currentList.items[index],
        });
    }

    updateItemText = (event) => {
        this.setState({itemNewText: event.target.value});
    }

    updateItemTransaction = (event) => {
        let OldName = this.props.currentList.items[this.state.itemID];
        let transaction = new ChangeItem_Transaction(this.props.renameItemCallback, this.state.itemID, event.target.value,OldName);
        this.props.tps.addTransaction(transaction);
        this.props.updateUndoRedo();
        this.setState({editItem: false});
    }

    handleDragStart = (index) => {
        this.setState({itemDragged: index});
    }

    handleDragEnter = (event) => {
        event.target.className = "top5-item-dragged-to";
    }

    handleDragLeave = (event) => {
        event.target.className = "top5-item";
    }

    handleDrop = (event, index) => {
        event.target.className = "top5-item";

        if(this.state.itemDragged !== index){
            let transaction = new MoveItem_Transaction(this.props.moveItemCallback, this.props.currentList.items,this.state.itemDragged, index);
            this.props.tps.addTransaction(transaction);
            this.props.updateUndoRedo();
            this.forceUpdate();
        }

    }



    render() {
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
                    
                    <div id="edit-items"
                    style ={{backgroundColor: "#669966"}}>
                    {
                        ((this.props.currentList != null) ? (this.props.currentList.items.map((item, index) => (
                            (this.state.editItem && this.state.itemID === index)  ? this.state.itemInput :
                            <div
                                draggable
                                key = {index}
                                id = {"item-" + (index+1)}
                                className = "top5-item"
                                onDoubleClick={(e) => this.handleItemEdit(e, index)}
                                onDragStart={() => this.handleDragStart(index)}
                                onDragEnter={(e) => this.handleDragEnter(e)}
                                onDragLeave={(e) => this.handleDragLeave(e)}
                                onDrop={(e) => this.handleDrop(e,index)}
                                onDragOver={(e) => e.preventDefault()}
                            >
                            {item}
                            </div> 
                        
                        ))) : <></>)
                    }
                    </div>
                    
                </div>
            </div>
        )
    }
}