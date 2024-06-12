function onScanSuccess(decodedText, decodedResult) {
    // "https://qr.seobukr.kr/"로 시작하는지 확인
    const prefix = "https://qr.seobukr.kr/";
    if (decodedText.startsWith(prefix)) {
        // prefix 이후의 내용을 화면에 표시
        const meaningfulPart = decodedText.substring(prefix.length);
        document.getElementById('output').innerText = meaningfulPart;
    } else {
        // QR 코드가 지정된 형식과 일치하지 않는 경우
        document.getElementById('output').innerText = "인증할 수 없는 QR 코드";
    }
    console.log(`QR Code detected: ${decodedText}`);
}

function onScanFailure(error) {
    // 스캔 실패 시, 오류 메시지를 콘솔에 출력
    console.error(`QR Code no detected, error: ${error}`);
}

window.onload = function () {
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 });
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
};
