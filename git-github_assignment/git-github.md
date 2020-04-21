----------------------------GIT--------------------------------
§NEDIR?
    -Linux tarafindan glistirilen bir versiyon kontrol sistemidir.
§NEDEN KULLANILIR?
    -Projelerin güvenli bir sekilde saklanmasi icin,
        -projelerde birden fazla kisinin es zamanli calisabilmesi icin,
        -offline calisilabildigi icin,
        -hizli ve az yer kapladigi icin kullanilir.
§NASIL KURULUR?
-Linux icin,

    -Fedora (veya RHEL veya CentOS gibi yakından ilişkili RPM tabanlı dağıtım) kullanıyorsanız, şunları kullanabilirsiniz dnf:

    $ sudo dnf install git-all

    -Ubuntu gibi Debian tabanlı bir dağıtımdaysanız aptşunları deneyin :

    $ sudo apt install git-all

    -Farkli Unix kurulum talimatlari icin https://git-scm.com/download/linux adresine gidilebilir.

-MacOs icin,

    -https://git-scm.com/download/mac adresinden indirilebilir ya da,
    -gitHub'in bir parcasi olarakta yüklenebilir https://desktop.github.com adresinden bulunabilir.

-Windows icin,

    -https://git-scm.com/download/win adresinden indirilebilir.
-Kurulumu ise söyledir:
    -Tüm ayarlarınızı ve nereden geldiklerini kullanarak aşağıdakileri görüntüleyebilirsiniz:

        $ git config --list --show-origin

    -Git'i yüklediginizde yapmaniz gerekn ilk sey kullanici adinizi ve e-posta adresinizi yazmaktir.

        $ git config --global user.name "John Doe"
        $ git config --global user.email johndoe@example.com   
        --global secenegini secerseniz sadece bir kere yapmaniz yeterli olur.
    
    -Kodlarinizi yazmak istediginiz bir metin düzenleyicisi varsa sunu yapmalisiniz.
    -Iki tirnak arasina calismak istediginiz metin düzenleyicisinin komutunu yazmalisiniz.

        $ git config --global core.editor ""

    -Ayarlanizi kontrol edebileceginiz bir liste icin sunu yazmalisiniz.

        $ git config --list

----------------------------GITHUB-----------------------------
§NEDIR?
    -GitHub, git yazılımı ile entegre olmuş bir depolama alanıdır.

§GTEMEL CALISMA AKISI NASILDIR?
    -Öncelikler bir proje icin bir dal olusturulur.
    -Proje icin commitler yapilir.
    -Commitler hakkinda tartisma baslatmak icin cekme istekleri acilir.
    -Kod tartisilir ve incelenir.
    -Proje, yan dallar ile ana dal birlesmeden önce test icin dagitilir.
    -Son olarak birlestirilir.

§10 TEMEL GIT KOMUTU
    -$ git init => yeni bir Git deposunu başlatır ve mevcut bir dizini izlemeye başlar. Sürüm denetimi için gereken dahili veri yapısını barındıran mevcut dizine gizli bir alt klasör ekler.
    -$ git clone => uzaktan varolan bir projenin yerel bir kopyasını oluşturur. Klon, projenin tüm dosyalarını, geçmişini ve dallarını içerir.
    -$ git add => katki yapilacak olan dosyalari ekler.
    -$ git commit => projeye yapilan katkilari ekler.
    -$ git status => değişikliklerin durumunu izlenmemiş, değiştirilmiş veya aşamalı olarak gösterir.
    -$ git checkout => dallar arasi gecisleri saglar.
    -$ git branch => yerel olarak çalışılan şubeleri gösterir.
    -$ git merge => kaynasma çizgilerini birleştirir. Bu komut genellikle iki ayrı dalda yapılan değişiklikleri birleştirmek için kullanılır.
    -$ git pull => Geliştiriciler bu komutu, bir takım arkadaşı uzaktan kumandadaki bir şubeye taahhütte bulunduysa ve bu değişiklikleri yerel ortamlarında yansıtmak istiyorlarsa kullanırlar.
    -$ git push => uzak depoyu bir şubeye yerel olarak yapılan tüm taahhütlerle günceller.

§BILGISAYARDA YENI BIR REPOSITORY OLUSTURMA VE GITHUB'A YÜKLEME
    -$ git init ile bilgisayarda bulunana bir klasörü github'a baglayin.
    -$ git add ile klasör bulunan dosyalari commit sirasina ekleyin.
    -$ git status ile dosyalar eklenmis mi görebilirsiniz. Eklenmisse yesil eklenmemisse kirmizi renktedir.
    -$ git commit ile dosyalari githubda ana dala eklenecek hale getirebilirsiniz. $ git commit -m "" ile tirnak icine yorum ekleyebilirsiniz.
    -$ git push ile dosyalarimizi githuba gönderebiliriz.

§GITHUB'DA BULUNAN BIR REPOSITORY'I BILGISAYARA KAYDETME VE YENI DOSYALARLA GITHUB'A TEKRAR YÜKLEME
    -Bunun iki farkli yolu vardir. Deponun bulundugu sayfada klonla veya indir butonuna basip;
        1. Depoyu indirebilirsiniz.
        2. HTTPS'yi kullanarak indirebilirsiniz.
            -Terminale $ git clone yazip URL'yi ekleriz ve enter'a bastiginizda yerel klon olusturulacak.
        -Degisiklikler $ git add, $ git commit ve $ git push komutlariyla gönderilir.
            