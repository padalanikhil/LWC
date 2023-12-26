import { LightningElement ,api,track} from 'lwc';

export default class ChildCmp2 extends LightningElement {
    @api resultvarfromchild;
    @track text;
    handleChanges(event){
        this.text=event.target.value;
    }
    sendMessageToParent(event){
        const childToParent = new CustomEvent('addition',{detail:this.text});
        this.dispatchEvent(childToParent);
    }
}
