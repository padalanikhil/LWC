import { LightningElement, wire,api,track} from 'lwc';
import custrec from '@salesforce/apex/Trail1.custrec';

export default class NewComp extends LightningElement {
    @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Contact', fieldName: 'Phone' },
        { label: 'Id', fieldName: 'Id' }
    ];
    @track aaaa;
    @track bbbbb;
  /*  @wire (custrec) customerRecords({data,error}){
        if(data){
            console.log(JSON.stringify(data));
            this.aaaa=data;
        }
        else{
            this.bbbbb=error;
        }
    }*/
    connectedCallback(){
        custrec()
          .then(result => { 
            console.log(JSON.stringify(result));
            this.aaaa = result;
           })
          .catch(error => {
            console.log(JSON.stringify(error));
            this.bbbbb=error;
           });
 }
 
}
