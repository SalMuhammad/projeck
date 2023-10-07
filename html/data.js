const orang = document.getElementsByClassName('orang')[0]
let data = [
 {
  link : 'wa_pesan.html',
  profil : '../profil/foto profil wa 14.jpg',
  username : 'Ust Maulana',
  pesanTerakhir : 'hatur nuhun tazd',
  waktu : '01/04/2022',
  jumlahPesan : 'i'
 },
 {
  link : 'wa_pesan.html',
  profil : '../profil/foto profil wa 14.jpg',
  username : 'Ust Maulana',
  pesanTerakhir : 'hatur nuhun tazd',
  waktu : '01/04/2022',
  jumlahPesan : '3'
 },
 {
  link : 'wa_pesan.html',
  profil : '../profil/foto profil wa 14.jpg',
  username : 'Ust Maulana',
  pesanTerakhir : 'hatur nuhun tazd',
  waktu : '01/04/2022',
  jumlahPesan : '3'
 },
 {
  link : 'wa_pesan.html',
  profil :' ../profil/grup.png',
  username : 'Ust Maulana',
  pesanTerakhir : 'hatur nuhun tazd',
  waktu : '01/04/2022',
  jumlahPesan : '3'
 },
 {
  link : 'wa_pesan.html',
  profil : '../profil/yuzni.jpg',
  username : 'diniani yuzni',
  pesanTerakhir : 'jangan lupa ya..!',
  waktu : '14:44',
  jumlahPesan : NaN
 }
]

let el = `
${data.map(e => 
  `
    <a href="${e.link}" class="section flex">
  <div class="profil">
    <img src="${e.profil}" width="100%" alt="">
  </div>
  <div class="nama flex">
    <span>${e.username}</span>
    <p><i class="bi bi-check2"></i> ${e.pesanTerakhir}</p>
  </div>
  <div class="notif-chat flex waktu-dibaca">
    <p>${e.waktu}</p>
    <span>${e.jumlahPesan}</span>
  </div>
</a> 
  `
 ).join('')
}
`
orang.innerHTML = el
 
const arr =['saru','dua','tiga']

alert(arr)