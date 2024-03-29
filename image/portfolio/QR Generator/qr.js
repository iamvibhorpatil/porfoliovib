const container = document.querySelector(".container"),
qrInput = container.querySelector(".form input"),
generateBtn = container.querySelector(".form .btn-info"),
qrImg = container.querySelector(".qr-code img");

generateBtn.addEventListener("click",() =>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",() => {
        container.classList.add("active");
        generateBtn.innerText = "Generate OR Code";
    });
});


qrInput.addEventListener("keyup",() =>{
    if(!qrInput.value){
        container.classList.remove("active");
    }
});