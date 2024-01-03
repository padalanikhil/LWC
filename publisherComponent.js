import { MessageContext, publish } from 'lightning/messageService';
import LMS from '@salesforce/messageChannel/LightningMessageChannel__c';
import { LightningElement ,wire} from 'lwc';

export default class PublisherComponent extends LightningElement {
    name='';

    @wire (MessageContext) messageContext;
    handleChange(event){
        this.name=event.target.value;
    }
    handleClick(event){
        let payload={Name:this.name};
        publish(this.messageContext,LMS,payload);
    }
}