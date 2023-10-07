var a=document.getElementsByTagName('a')[0];
const input=document.createElement('input');
const judul=document.getElementById('judul');
const link=document.createElement('a');
const isiLink=document.createTextNode('link youtube');
// const br=document.createElement('br');
const sectionA=document.getElementById('a');
const i=document.createElement('i');
const p1=document.querySelector('p');
const textI=document.createTextNode('element baru');
const p2=document.getElementsByClassName('p2')[0];
const sectionB=document.getElementById('b');
const p3=sectionA.querySelector('.p3');
const p4=sectionB.querySelector('p');
const pBaru=document.createElement('p');
const textPBaru=document.createTextNode('paragrap baru');
const u=document.createElement('u');
const textU=document.createTextNode('p2 sudah diganti');
const b=document.createElement('b');
const textB=document.createTextNode('li baru');
const li1=document.querySelector('#b ul li');
const ul=sectionB.querySelector('ul');

// const p1=document.querySelector('#sectionA.p');
// p1.style.color='yellow';

judul.appendChild(input);
link.appendChild(isiLink);
judul.appendChild(link);
i.appendChild(textI);
u.appendChild(textU);
// sectionA.replaceChild(p2,u);
sectionA.insertBefore(i,a);
i.style.display='block';
link.setAttribute('href','ucing.html');
link.style.textDecoration='none';
input.setAttribute('placeholder','masukan nama anda..');
input.style.outline='none';
input.setAttribute('type','search');
pBaru.appendChild(textPBaru);
sectionA.insertBefore(pBaru,p3);
sectionA.removeChild(p1);
sectionA.replaceChild(u,p2);

function ubah() {
 judul.classList.toggle('background');
}
judul.onclick=ubah;

i.addEventListener('click',function() {
 p3.style.display='none';
});

b.appendChild(textB);
ul.replaceChild(b,li1);
// for(e=5;e<100;e++){
//  console.log(e);
// }
p4.innerHTML='UJANG';
for(e=5;e<100;e++){
}
 p4.addEventListener('click',function() {
  const ul=sectionB.querySelector('ul');
  const liBaru=document.createElement('li');
  const textLiBaru=document.createTextNode('item '+e);
  liBaru.appendChild(textLiBaru);
  ul.appendChild(liBaru);
 });``
 

