import { jsTPS_Transaction } from "../../common/jsTPS";
/**
 * MoveItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class ChangeItem_Transaction extends jsTPS_Transaction{
    constructor(renameItemCallback, itemID, newName, OldName) {
        super();
        this.renameItem = renameItemCallback;
        this.itemID = itemID;
        this.OldName = OldName;
        this.newName = newName;
        
    }

    doTransaction() {
        this.renameItem(this.itemID, this.newName);
        
    }
    
    undoTransaction() {
        this.renameItem(this.itemID, this.OldName);
    }
}