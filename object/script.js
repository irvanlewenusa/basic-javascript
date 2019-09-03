var matkul = new Object();

/*matkul.title = "PHP javascript";
matkul.dosen ="irvan";
matkul.kelas="A";
matkul.jurusan="Teknik informatika";
*/

var matkul ={
	title:"PHP Javascript",
	dosen:"irvan",
	kelas:"A",
	jurusan:"Teknik Informatika",
	dilihat: 0,
	updateDilihat:function(){
	return ++matkul.dilihat;	
	}
	}
	
	console.log(matkul.dilihat);
	matkul.updateDilihat();
	console.log(matkul.dilihat);
	