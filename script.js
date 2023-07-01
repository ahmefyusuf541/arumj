let datecontent = document.getElementById('datecontent');
let kitabcontent = document.getElementById('kitabcontent');
let date = new Date();
let day = date.getDay();
switch(day){
    case 6:
        day = "Saturday";
    case 0:
        day = "Sunday";
        schedule("Qur'an for Females","Muzzayan"," - ");
        schedule("Qur'an for Males","Hassen Beze<br>Hassen Degu<br>Abdu Siraj"," - ");
        schedule("Aqidetul-wasitiyah","Mohmmed Ahmed","Afaan Oromo");
        schedule("Al-wajibat","Hussein Khedir","Amharic");
        break;
    case 1:
        day = "Monday";
    case 2:
        day = "Tuesday";
    case 3:
        day = "Wednsday";
        schedule("Qur'an for Females","Muzzayan"," - ");
        schedule("Qur'an for Males","Hassen Beze<br>Hassen Degu<br>Abdu Siraj"," - ");
        schedule("Aqidetul-wasitiyah","Mohmmed Ahmed","Afaan Oromo");
        schedule("Al-wajibat","Hussein Khedir","Amharic");
        schedule("Hilyatu Talibel-Ilm","Mohammed Ali","Amharic");
        schedule("Kitabu Tewhid","Ahmed Yusuf","Amharic");
        break;
    case 4:
        day = "Thursday";
        schedule("Qur'an for Females","Muzzayan"," - ");
        schedule("Qur'an for Males","Hassen Beze<br>Hassen Degu<br>Abdu Siraj"," - ");
        schedule("Aqidetul-wasitiyah","Mohmmed Ahmed","Afaan Oromo");
        schedule("Al-wajibat","Hussein Khedir","Amharic");
        schedule("Kitabu Tewhid","Ahmed Yusuf","Amharic");
        break;
    case 5: 
    day = "Friday";
    schedule("Da'ewa ","Random"," Amh/Oro ");
    break;
}
function schedule(kitab,ustaz,lang){
    datecontent.innerHTML = day;
    let div = document.createElement('div');
    let qirat = `
    <div class="row bg-secondary mb-3 ">
        <div class="col-8">
            <h2><i class="fa fa-book"></i> ${kitab} </h2>
            <h4><i class="fa fa-microphone-alt"></i> ${ustaz} </h4></div>
        <div class="col-4 text-right">
            <h5><i class="fa fa-language"></i> ${lang} </h5>
        </div>
    </div>
    `;
    div.innerHTML=qirat;
    kitabcontent.appendChild(div);
}
