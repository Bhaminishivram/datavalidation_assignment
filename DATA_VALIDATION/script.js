/*Global variable*/
let sucessfullValidationrRowCount=1;
let errorValidationRowCount=1;

function dataInitialization(){

let bankId=document.getElementById("bankId").value;
let accountId=document.getElementById("accountId").value;


/*validation of bankId and accountId*/
if(bankId.length==5){
if ( (accountId.charAt(0)=='S' || accountId.charAt(0)=='F' || accountId.charAt(0)=='C') && (accountId.length>=7 && accountId.length<=11) ) {
/*add to sucessfull message totable*/
var bankAccountTable = document.getElementById("bankAccountTable");
var rowData = bankAccountTable.insertRow(sucessfullValidationrRowCount);
            var cell0 = rowData.insertCell(0);
            var cell1 = rowData.insertCell(1);
            var cell2 = rowData.insertCell(2);
            cell0.innerHTML = bankId;
            cell2.innerHTML = accountId;
           
            switch(accountId.charAt(0)) {
            case 'S':cell1.innerHTML="Savings Account";
                    break;
            case 'F':cell1.innerHTML="Fixed Account";
                    break;
                case 'C':cell1.innerHTML="Current Account";
                    break;
            }

            sucessfullValidationrRowCount++;
}else{
/*add to UN-sucessfull message to table for wrong accountID*/
var bankAccountErrorTable = document.getElementById("bankAccountErrorTable");
var row = bankAccountErrorTable.insertRow(errorValidationRowCount);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            cell0.innerHTML = bankId;
            cell1.innerHTML = accountId;
            cell2.innerHTML = "accountId is invalid";
            errorValidationRowCount++;
}
}
else{
/*add error message to table*/
var bankAccountErrorTable = document.getElementById("bankAccountErrorTable");
var row = bankAccountErrorTable.insertRow(errorValidationRowCount);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        cell0.innerHTML = bankId;
        cell1.innerHTML = accountId;
        cell2.innerHTML = "bankId_is_invalid";
        errorValidationRowCount++;
}
}


    