// function mh(nama,energi){
//  this.nama = nama,
//  this.energi = energi,
//  this.main = function(jam){
//   this.main= this.energi -=jam;
//   console.log(`silahkan main ${this.nama}`);
//  }
// }
// let pahru = new mh('pahru',100000)
function gudang(barang,stok,harga,kas){
 this.barang = barang,
 this.stok = stok,
 this.harga = harga,
 this.kas = kas,
 this.beli = function(unit /*2*/ ,dijual/* 300000*/){
  this.stok -= unit;

  let hasilJual = dijual * unit;/*600000 */
  let hasilHarga = this.harga * unit;/*400000 */
  this.kas += hasilJual  -= hasilHarga ;
 }
}
const sepatu=new gudang('sepatu',100,200000,0);