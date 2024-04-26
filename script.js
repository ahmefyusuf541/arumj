let datecontent = document.getElementById('datecontent');
let kitabcontent = document.getElementById('kitabcontent');
let date = new Date();
let day = date.getDay();
switch (day) {
    case 6:
        day = "Saturday";
    case 0:
        day = "Sunday";
    case 1:
        day = "Monday";
        schedule("Qur'an for Females", "Muzzayan<br>Musteqim", " Both ", "Al-aqsa");
        schedule("Qur'an for Males", "<br>", "Both", " Al-aqsa");
        schedule("Kitabu at-tewhid", "Sa'ad", "Afan oromo", "Al-aqsa");
        schedule("Kashfu ash-shubuhat", "Ahmed", "Amharic", "Al-aqsa");
        schedule("Omdatul ahkam", "Mohammed Miftah", "Amharic", "Othman ibnu Affan");
        schedule("Qur'an for Males", "Hassen B.<br>MOhammed<br>Mohammed husein<br>Husen", "Both", " Othman ibnu Affan");
        break;
    case 2:
        day = "Tuesday";
    case 3:
        day = "Wednsday";
        break;
    case 4:
        day = "Thursday";
        schedule("Qur'an for Females", "Muzzayan<br>Musteqim", " Both ", "Al-aqsa");
        schedule("Qur'an for Males", "<br>", "Both", " Al-aqsa");
        schedule("Omdatul ahkam", "Abdulfettah", "Afan oromoo", "Al-aqsa");
        schedule("Khulasotu nur al-yeqin", "Mohammed miftah", "Amharic", "Al-aqsa");
        schedule("Usul as-selasah", "Abdullah", "Amharic", "Al-aqsa");
        schedule("Tajwid", "Sa'ad", "Both", "Al-aqsa");
        break;
    case 5:
        day = "Friday";
        schedule("Da'ewa ", "Random", " Amh/Oro ", "Othman ibnu Affan/Al-aqsa");
        break;
}

function schedule(kitab, ustaz, lang, masjid) {
    datecontent.innerHTML = day;
    let div = document.createElement('div');
    let qirat = `
    <div class="row bg-secondary mb-3 ">
        <div class="col-8">
            <h2><i class="fa fa-book"></i> ${kitab} </h2>
            <h4><i class="fa fa-microphone-alt"></i> ${ustaz} </h4></div>
            <h4><i class="fa fa-mosque"></i> ${masjid}</h4>
        <div class="col-4 text-right">
            <h5><i class="fa fa-language"></i> ${lang} </h5>
        </div>
    </div>
    `;
    div.innerHTML = qirat;
    kitabcontent.appendChild(div);
}