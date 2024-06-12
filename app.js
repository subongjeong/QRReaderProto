function onScanSuccess(decodedText, decodedResult) {
    const prefix = "https://qr.seobukr.kr/";
    if (decodedText.startsWith(prefix)) {
        const meaningfulPart = decodedText.substring(prefix.length);
        document.getElementById('output').innerText = meaningfulPart;
    } else {
        document.getElementById('output').innerText = "인증할 수 없는 QR 코드";
    }
}

function onScanFailure(error) {
    console.error(`QR Code no detected, error: ${error}`);
}

window.onload = function () {
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 });
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
};
