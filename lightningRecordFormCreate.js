import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import BillingCity from '@salesforce/schema/Account.BillingCity';

export default class LightningRecordFormCreate extends NavigationMixin(LightningElement) {
    fields = [NAME_FIELD,BillingCity];
    @api objectApiName='Account';
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:event.detail.id,
                objectApiName:'Account',
                actionName:'view'
            }
        });

    }

    
}