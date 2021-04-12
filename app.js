var loginArea = document.querySelector('#login-area');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var loginButton = document.querySelector('#login-btn');
var transactionArea = document.querySelector('#transaction-area');
var result = document.querySelector('#result');
var currentDepositAmount = document.querySelector('#curr-deposit');
var currentWithdrawAmount = document.querySelector('#curr-withdraw');
var totalBalance = document.querySelector('#total-balance');
var inputDepositAmount = document.querySelector('#deposit-amt');
var inputWithdrawAmount = document.querySelector('#withdraw-amt');
var depositButton = document.querySelector('#deposit-btn');
var withdrawButton = document.querySelector('#withdraw-btn');


loginButton.addEventListener('click', function(){
    if (username.value !== ""  && password.value !== "") {
        if(result.classList.contains("alert-danger")){
            result.classList.remove("alert-danger");
            result.classList.add("alert-success");
        } else {
            result.classList.add("alert", "alert-success");
        }
        result.innerHTML = "May your transaction be successful...";
        setTimeout(function(){
            loginArea.style.display = 'none';
            transactionArea.style.display = 'block';
        },800)
    } else {
        result.classList.add("alert", "alert-danger")
        result.innerHTML = "Username or Password can't be blanked";
    }
})

depositButton.addEventListener("click", function(){
    let inputAmount = inputDepositAmount.value;
    inputAmount = parseInt(inputAmount)
    let currentAmount = currentDepositAmount.innerHTML;
    currentAmount = parseInt(currentAmount);

    currentDepositAmount.innerHTML = currentAmount + inputAmount;

    let totalAmount = totalBalance.innerHTML;
    totalAmount = parseInt(totalAmount)

    totalBalance.innerHTML = totalAmount + inputAmount;

    inputDepositAmount.value = "";
})

withdrawButton.addEventListener("click", function(){
    let inputAmount = inputWithdrawAmount.value;
    inputAmount = parseInt(inputAmount)
    let currentAmount = currentWithdrawAmount.innerHTML;
    currentAmount = parseInt(currentAmount);

    currentWithdrawAmount.innerHTML = currentAmount + inputAmount;

    let totalAmount = totalBalance.innerHTML;
    totalAmount = parseInt(totalAmount)
    
    totalBalance.innerHTML = totalAmount - inputAmount;

    inputWithdrawAmount.value = "";
})