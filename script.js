function generateQR() {
  const ssid = document.getElementById("ssid").value;
  const pass = document.getElementById("password").value;

  if (!ssid || !pass) {
    alert("WiFi name နဲ့ password ထည့်ပါ");
    return;
  }

  const data = `WIFI:T:WPA;S:${ssid};P:${pass};;`;
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;

  document.getElementById("qrImage").src = url;
}