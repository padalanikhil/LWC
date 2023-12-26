import { LightningElement ,track,wire} from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getContactDetails from '@salesforce/apex/ContactRecordsForDisplay.getContactDetails';


export default class ContactRecordswithAccountName extends LightningElement {

    @track ContactList=[];
    @track ContactRecordList=[];
    @track totalRecords;
    @track isShow=false;
    @track contactrecord;
    page = 1; //initialize 1st page
    startingRecord = 1; //start record position per page
    endingRecord = 5; //end record position per page
    pageSize = 5; //default value we are assigning
    totalRecordCount = 0; //total record count received from all retrieved records
    totalPage = 0; //total number of page is needed to display all records
    @track contactRecordstoShow;
    @wire(getContactDetails) conDetails(result){
        this.ContactList=result;
            if(result.data){
            //console.log(JSON.stringify(result.data));
            this.ContactRecordList=result.data;
            this.totalRecordCount=this.ContactRecordList.length;
            this.totalPage = Math.ceil(this.totalRecordCount / this.pageSize);
        //here we slice the data according page size
            this.contactRecordstoShow = this.ContactRecordList.slice(0, this.pageSize);
            if (this.page > 1) {
                this.contactRecordstoShow = this.ContactRecordList.slice(this.startingRecord-1, this.endingRecord);
            }
                
            }
            else{
                console.log('===contact error===='+result.error);
            }
    }
    previousHandler() {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.displayRecordPerPage(this.page);
        }
    }
    //press on next button this method will be called
    nextHandler() {
        if ((this.page < this.totalPage) && this.page !== this.totalPage) {
            this.page = this.page + 1;
            this.displayRecordPerPage(this.page);
        }
    }
    displayRecordPerPage(page) {
        this.startingRecord = ((page - 1) * this.pageSize);
        this.endingRecord = (this.pageSize * page);
        this.endingRecord = (this.endingRecord > this.totalRecordCount)
            ? this.totalRecordCount : this.endingRecord;
        this.contactRecordstoShow = this.ContactRecordList.slice(this.startingRecord, this.endingRecord);
        //increment by 1 to display the startingRecord count, 
        //so for 2nd page, it will show "Displaying 6 to 10 of 23 records. Page 2 of 5"
        this.startingRecord = this.startingRecord + 1;
    }
    handleEditClick(event){
        this.isShow=true;
        this.contactrecord=event.target.dataset.id;
    }
    closepopup(event){
        this.isShow=false;
        refreshApex(this.ContactList);
    }

 
    
}