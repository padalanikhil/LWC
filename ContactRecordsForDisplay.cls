public with sharing class ContactRecordsForDisplay {
    @AuraEnabled(cacheable=true)
    public static list<contact> getContactDetails(){
        list<contact> contacts=[select id,Firstname,Phone,Lastname,Email,Account.Name from contact where Email!=null and Email!='' and Account.Name!='' and Account.Name!=null];
        return contacts;
    } 
}