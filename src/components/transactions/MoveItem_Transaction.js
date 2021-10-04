import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * MoveItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class MoveItem_Transaction extends jsTPS_Transaction {
    constructor(moveItemCallback, items, itemDraggedIndex, DroppedIndex) {
        super();
        this.moveItem = moveItemCallback;
        this.items = items
        this.itemDraggedIndex = itemDraggedIndex;
        this.DroppedIndex = DroppedIndex;
    }

    doTransaction() {
        this.moveItem(this.items,this.itemDraggedIndex, this.DroppedIndex);
    }
    
    undoTransaction() {
        this.moveItem(this.items, this.DroppedIndex,this.itemDraggedIndex);
    }

}