import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import LMS from '@salesforce/messageChannel/LightningMessageChannel__c';
import { LightningElement ,wire} from 'lwc';

export default class SubscriberComponent extends LightningElement {
    name='';
    subscription=null;
    @wire(MessageContext) messageContext;

    connectedCallback(){
        this.handleSubscribe();
    }
    disconnectedCallback(){
        this.handleUnsubscribe();
    }
    handleSubscribe(){
        if(!this.subscription){
            this.subscription=subscribe(this.messageContext, LMS,
                (parameter)=>{
                    this.name=parameter.Name;
                });
        }
    }
    handleUnsubscribe(){
           unsubscribe(this.subscription);
           this.subscription=null;
    }
}