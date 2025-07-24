document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("loggedInUser");
    if (username) {
        document.getElementById("welcomeMsg").textContent = `Greetings, ${username}!`;
    }else {
        window.location.href = "index.html";
    }
});
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html"; 
}
function transfer_tab(tab_name){
   const account_summary_tab_element=document.getElementById('account_summary');
   const transfer_fund_tab_element = document.getElementById('transfer_fund')
   const accountSummaryContent = document.getElementById("account-summary-content");
   const transferFundContent = document.getElementById("transfer_fund_content");

   if (tab_name === "account_summary") {
       accountSummaryContent.style.display = "block";
       account_summary_tab_element.classList.add('active')
       transferFundContent.style.display = "none";
       transfer_fund_tab_element.classList.remove('active')
   } else if (tab_name === "transfer_fund") {
       accountSummaryContent.style.display = "none";
       transferFundContent.style.display = "block";
       account_summary_tab_element.classList.remove('active')
       transfer_fund_tab_element.classList.add('active')
   }
}
  const viewStatement = (accountType) => {
  const statementModelElement = document.getElementById('statement');
  statementModelElement.style.display = 'flex';
};const closeStatement = ()=>{
  const statementModelElement = document.getElementById('statement')
  statementModelElement.style.display='none'
}
function money_transfer() {
    const accountTypeElement = document.getElementById("account-type");
    const beneficiaryElement = document.getElementById("beneficiary");
    const amountElement = document.getElementById("amount");
    const transferMessage = document.getElementById("transfer-message");

    const accountType = accountTypeElement.value.trim();
    const beneficiary = beneficiaryElement.value.trim();
    const amount = amountElement.value.trim();

    const acc_error = document.getElementById("account_id_error");
    const beneficiary_error = document.getElementById("beneficiary_error");
    const amount_error = document.getElementById("amount_error");

    let valid = true;

    if (accountType === "") {
        acc_error.style.display = "block";
        acc_error.textContent = "Account type is required.";
        valid = false;
    } else {
        acc_error.style.display = "none";
        acc_error.textContent = "";
    }

    if (beneficiary === "") {
        beneficiary_error.style.display = "block";
        beneficiary_error.textContent = "Beneficiary is required.";
        valid = false;
    } else {
        beneficiary_error.style.display = "none";
        beneficiary_error.textContent = "";
    }

    if (amount === "" || Number(amount) <= 0) {
        amount_error.style.display = "block";
        amount_error.textContent = "Valid amount is required.";
        valid = false;
    } else {
        amount_error.style.display = "none";
        amount_error.textContent = "";
    }

    if (valid) {
        transferMessage.textContent = `Transfer of Rs. ${amount} from your ${accountType} account to ${beneficiary} is successful!`;
        transferMessage.style.color = "green";
    } else {
        transferMessage.textContent = "";
    }
}
function resetForm() {
    document.getElementById("account-type").value = "";
    document.getElementById("beneficiary").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("remarks").value = "";

    const acc_error = document.getElementById("account_id_error");
    const beneficiary_error = document.getElementById("beneficiary_error");
    const amount_error = document.getElementById("amount_error");
    const transferMessage = document.getElementById("transfer-message");

    acc_error.textContent = "";
    acc_error.style.display = "none";

    beneficiary_error.textContent = "";
    beneficiary_error.style.display = "none";

    amount_error.textContent = "";
    amount_error.style.display = "none";

    transferMessage.textContent = "";
}
