import { LightningElement ,api,track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactDetailsEditCmp extends LightningElement {
    @api contactrecordids;
    @track objectApiName='Contact';
    handleSubmit(event){
        const childToParent = new CustomEvent('handle');
        this.dispatchEvent(childToParent);
}
}