const btn=document.createElement('button');
const btnAcak=document.createElement('button');
const h4=document.createElement('h4');
const acakValue=document.createElement('span');
const textBtn=document.createTextNode('Ganti warna');
const textBtnAcak=document.createTextNode('Acak warna'); 
const textH4=document.createTextNode('text H4');
const textAcakValue=document.createTextNode('Nilai RGB dari warna Acak');
const judul=document.getElementById('judul'); 
const mera=document.getElementById('merah');
const hijau=document.getElementById('hijau');
const biru=document.getElementById('biru');
const vmerah=document.getElementsByClassName('vmerah')[0];
const vhijau=document.getElementsByClassName('vhijau')[0];
const vbiru=document.getElementsByClassName('vbiru')[0];
const lama=document.getElementsByClassName('elementLama')[0];
btn.appendChild(textBtn);
btn.setAttribute('type','submit')
btn.style.background='deepSkyBlue';
btn.style.border='none';
btn.style.padding='10px 15px';
btn.style.borderRadius='9px';
btn.style.color='white';
btn.style.marginTop='20px'
btn.style.fontWeight='bold';
btn.onclick=ubahWarna;
btnAcak.appendChild(textBtnAcak);
judul.after(btn); 
// document.body.appendChild(btnAcak);
btn.before(btnAcak)
btnAcak.style.padding='10px 15px';
btnAcak.setAttribute('type','submit')
btnAcak.style.border='none';
btnAcak.style.display='block';
btnAcak.style.margin='auto';
btnAcak.style.background='orangeRed';
btnAcak.style.borderRadius='9px';
btnAcak.style.color='white';
btnAcak.style.fontWeight='bold';
btnAcak.addEventListener('click',function() {
 const r=Math.round(Math.random()*255+1);
 const g=Math.round(Math.random()*255+1);
 const b=Math.round(Math.random()*255+1);
 document.body.style.background='rgb('+r+','+g+','+b+')';
 
 acakValue.innerHTML='rgb('+r+', '+g+', '+b+');';
});

h4.appendChild(textH4);
lama.replaceWith(h4);

acakValue.appendChild(textAcakValue);
acakValue.style.display='block';
acakValue.style.width='140px';
acakValue.style.color='white';
acakValue.style.margin='2px auto'
acakValue.style.padding='5px';
// acakValue.style.textAlign='left';
acakValue.style.background='orangered';
btnAcak.after(acakValue);

merah.addEventListener('input',function() {
 const r=merah.value;
 const g=hijau.value;
 const b=biru.value;
 document.body.style.background='rgb('+r+','+g+','+b+')';
 vmerah.innerHTML=merah.value;
});
hijau.addEventListener('input',function() {
 const r=merah.value;
 const g=hijau.value;
 const b=biru.value;
 vhijau.innerHTML=hijau.value;
 document.body.style.background='rgb('+r+','+g+','+b+')';
});
biru.addEventListener('input',function() {
 const r=merah.value;
 const g=hijau.value;
 const b=biru.value;
 vbiru.innerHTML=biru.value;
 document.body.style.background='rgb('+r+','+g+','+b+')';
});
// document.body.style.fondtFamily='sant-serif'; 
function ubahWarna() {
 // btn.style.background='white';
 document.body.classList.toggle('maroon');
}


document.body.addEventListener('mousemeve',function(event){
 // posisis mouse
 console.log(event.clientX);
});
