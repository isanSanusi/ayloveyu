// script body
const body = document.querySelector("body");

function createHeart() {
  const heart = document.createElement("div"); 
  heart.className = "fas fa-heart"; 
  heart.style.left = (Math.random() * 90)+"vw"; 
  heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);
} 
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart"); 
    if (heartArr.length > 100) {heartArr[0].remove()}},100);
    
// 

  function nonFo() {
    document.getElementById('idfoto').style.display = "none";
  } 
  
  function showFo() {
    document.getElementById('idfoto').style.display = "block";
  }
  
  function nonDiv() {
    document.getElementById('Content').style = "opacity:0;visibility:hidden;margin-top:30vh;";
  } 
  function showDiv() {
    setTimeout(kpemb,100);
    document.getElementById('Content').style = "opacity:1;margin-top:4vh;animation:kont 3s infinite;";
    document.getElementById("katakata").innerHTML = kata1;
    document.getElementById("katabawah").innerHTML = katab1;}
    
  function showAkhir() {
    setInterval(createHeart,200);
    document.getElementById('k2').style = "opacity:1;transform:scale(1);margin:0;";
    document.getElementById('ftdua').style = "transform:scale(1);";
    document.getElementById('final1').style = "transform:scale(1);";
    document.getElementById('Content').style.display = "none";
  }
  
  function mulaiakhir() {
    nonDiv();
    setTimeout(showAkhir,1400);
    setTimeout(finalis,2400);}
    
  function showTom() {
    document.getElementById('idkirim').style = "opacity:1;visibility:visible;margin-top:140px;";
  } 
  
  function tombol(){
    contTom.style="display:flex";
  } 
  
  function akhiran(){
    document.getElementById("akhiran").style = "display:inline-flex";
  }
  
  function befanimkata(){
    katakata.style="transform:scale(.4);";
    katabawah.style="transform:scale(.4);";
  } 
  
  function animkata() {
    katakata.style="transform:scale(1);";
    katabawah.style="transform:scale(1);";
  }
  
  function animakhir() {
    akhiran.style="display:block;";
  }
  
  async function tolakteks(){
    await swalst.fire('' + teksnolak);
  }
  
  var aa=0,pemb;
      pemb = "";
  var i=0,halo;
      halo = "";
  var u=0,text2;
      text2 = "";
  var o=0,text3;
      text3 = "";
  var a=0,final1;
      final1 = "";
  var ab=0,final2;
      final2 = "";
  
  function kpemb() {
    if(aa<pemb.length){
      document.getElementById("idgeser").innerHTML += pemb.charAt(aa);
      
      aa++;
      setTimeout(kpemb,70);
    }
    if(aa==pemb.length){
      setTimeout(tombol,800);
      document.getElementById("idgeser").style = "display:none";
      document.getElementById("bq").style = "opacity:1;visibility:visible;margin-top:0";
      document.getElementById('bodyblur').style = "opacity:1;";
    }
  }
  
  flag=1;
  flagg=1;
  function tolak(){
  	if(fungsi==1){
  	if(flagg==1){
  	  Bn.style="margin-left:90px;transform: rotate(90deg)";
    	buttonv2.style="opacity:1;";
    	By.style="opacity:0";
    	document.getElementById("buttonv2").innerHTML = tekstolak1;
    	flagg=2
  	} else if(flagg==2){
  	  Bn.style="margin-left:90px;transform: rotate(180deg)";
  	  document.getElementById("buttonv2").innerHTML = tekstolak2;
  	  flagg=3
  	} else if(flagg==3){
  	  Bn.style="margin:12px 8px 12px 0;transform: rotate(360deg)";
  	  buttonv2.style="opacity:0;";
  	  By.style="opacity:1";
  	  flagg=1
  	}
  } else if(fungsi==2){
      	if(flag==1){
      	  Bn.style="margin-left:90px;";
      	  buttonv2.style="opacity:1;";
      	  By.style="opacity:0";
      	  document.getElementById("buttonv2").innerHTML = tekstolak11;
      	  flag=2
      	} else if(flag==2){
      	  Bn.style="margin-left:90px;transform: rotate(90deg)";
      	  document.getElementById("buttonv2").innerHTML = tekstolak22;
      	  flag=3
      	} else if(flag==3){
      	  Bn.style="margin:12px 8px 12px 0";
      	  buttonv2.style="opacity:0;";
      	  By.style="opacity:1";
      	  tolakteks();
      	  flag=1}
        }
   }
        
    tekstolak1 = "Eits &#128541;";
    tekstolak11 = "Yakin?";
    tekstolak2 = "Gabisa &#128541;";
    tekstolak22 = "Eits &#128541;";
    
    fungsi=1;
    async function terima(){
    if(fungsi==1){
      document.getElementById("katakata").innerHTML = kata2;
      document.getElementById("katabawah").innerHTML = katab2;
      document.getElementById("By").innerHTML = "Mau";
      
      befanimkata();
      setTimeout(animkata,300);
      contTom.style="display:none";
      setTimeout(tombol,900);
      foto1.style="display:none";
      foto2.style="display:inline-flex";
      fungsi=2
    } else if(fungsi==2){
      document.getElementById("katakata").innerHTML = kata3;
      document.getElementById("katabawah").innerHTML = katab3;
      
      befanimkata();
      setTimeout(animkata,300);
      foto1.style="display:none";
      foto2.style="display:none";
      foto3.style="display:inline-flex";
      contTom.style="display:none";
      setTimeout(akhiran,3300);
      setInterval(createHeart,200);
    }
  }


// SWEETALERT V2
      const swals = Swal.mixin({
        allowOutsideClick: false, 
        cancelButtonColor: '#FF0040',
      }); 
      
      const swalsy = Swal.mixin({
        confirmButtonText: 'Iya', 
        allowOutsideClick: false,
      }); 
      
      const swalst = Swal.mixin({
        allowOutsideClick: false, 
        showConfirmButton: false, 
        timer: 1500, 
        timerProgressBar: true,
      });
            
            // TANGGAL JADIAN
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();
      const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
			today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;
			
      function play() {
        var audio = new Audio('' + linkmp3);
        audio.play();
      }
			async function menuju(){
			  if(fungsi==2){
			    await swals.fire('Kirim pesan ke WhatsApp aku, ya!');
			    window.location = "https://api.whatsapp.com/send?phone=6283126163403&text=iya20%aku20%mau20%jadi20%pacar20%kamu&type=phone_number&app_absent=0";
			  }}

      async function mulaitanya(){
            var { isConfirmed: tanyawal } = await swals.fire({
              title: `Mau isi nama dulu atau langsung aja?`, 
              imageUrl: 'https://i.postimg.cc/0j2LDLxP/heart-happy.gif', 
              imageWidth: 120, 
              imageHeight: 120, 
              confirmButtonText: 'Isi Nama', 
              cancelButtonText: 'Langsung Aja', 
              allowOutsideClick: false, 
              showCancelButton: true,
              });
                if(tanyawal){
                mulai();
                } else {
                nama = 'Kamu';
                lanjut();
                play();}
            }

            async function mulai(){
                var { value: nama } = await swals.fire({
                    title: 'hai, aku indra, nama kamu siapa ?', 
                    input: 'text',
                    imageUrl: 'assets/img/khotib.png', 
                    imageWidth: 150, 
                    imageHeight: 150, 
                    allowOutsideClick: false, 
                    showCancelButton: false,
                });
                
                if(nama && nama.length < 11){
                	window.nama = nama;
                	lanjut();
                	play();
                } else {
                    await swals.fire('Ups!', 'Nama tidak boleh kosong atau lebih dari 10 karakter, ya!');mulai();
                }
            }
            
            async function tanpanama(){
                nama = "Kamu";
                window.nama = nama;
                lanjut();
             }
            
            //GANTI SEMUA TEKS, PESAN WHATSAPP, DAN AUDIO DI SINI

             async function lanjut() {
             	pemb = "Hai, " + nama + "! ... Jawab pertanyaan ini dengan jujur ya hehe      ";
             	kata1 = nama + " sayang gak sama Aku? &#129325;";
 			        katab1 = "";
 			        kata2 = "Kalau " + nama + " sayang sama aku, jadian yuk ? &#129392;";
              katab2 = "";
              kata3 = "Yeay! Akhirnya kita jadian &#128518;&#128157;";
              katab3 = "Tanggal jadian kita adalah: " + today + "!";
              teksnolak = "Harus mau!!! &#128541;";
              pesanwhatsapp = "Iya aku mau jadi pacar kamu ";
                // linkmp3 = 'https://Foryou.feeldream.repl.co/faudio.mp3';
                 
                 showDiv();
             }
             
             mulai();