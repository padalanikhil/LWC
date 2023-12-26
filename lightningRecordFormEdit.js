import { LightningElement ,api,track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import NAME_FIELD from '@salesforce/schema/Account.Name';
    import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
    import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class LightningRecordFormEdit extends NavigationMixin(LightningElement) {
        // The record page provides recordId and objectApiName
        @track recordId;
        @api objectApiName='Account';
    
        fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];
        handlechange(event){
            this.recordId=event.target.value;
        }
        handleSubmit(event) {
            //event.preventDefault(); // stop the form from submitting
            const fields = event.detail.fields;
            //fields.LastName = 'My Custom Last Name'; // modify a field
            this.template.querySelector('lightning-record-form').submit(fields);
            const evt = new ShowToastEvent({
                title: 'Account edited',
                message: 'Record ID: ' + this.recordId,
                variant: 'success',
            });
            this.dispatchEvent(evt);
            this[NavigationMixin.Navigate]({
                type:'standard__recordPage',
                attributes:{
                    recordId:this.recordId,
                    objectApiName:'Account',
                    actionName:'view'
                }
            });
            
        }
       

}