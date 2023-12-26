import { LightningElement ,track } from 'lwc';

export default class Parent2 extends LightningElement {
    firstNumber=0;
    SecondNumber=0;
    @track result=0;
    @track Addition
    handleChanges(event){
        if(event.target.name==="First Number"){
            this.firstNumber=event.target.value;
        }
        if(event.target.name==="Second Number"){
            this.SecondNumber=event.target.value;
        }
        this.result=parseInt(this.firstNumber)+parseFloat(this.SecondNumber);
    }
    handleaddition(event){
        alert('invoking message from child to parent');
        this.Addition= event.detail;
    }
}
