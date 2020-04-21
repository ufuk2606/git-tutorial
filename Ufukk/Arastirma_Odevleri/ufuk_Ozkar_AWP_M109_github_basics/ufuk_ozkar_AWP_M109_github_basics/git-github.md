                Git nedir, neden kullanilir, nasil kurulur?

Yazılım dünyasında bir takım halinde geliştirilen bu projelerin senkronize bir şekilde gitmesi gerekiyor. İşte bu noktada Git bir versiyon kontrol sistemi olarak karşımıza çıkıyor. Git hem projenin güvenli bir şekilde yedeklenmesi hem senkronize geliştirilmesi hem de ne zaman ne geliştirildi bilgilerine sahip olunması için kullanılması elzem bir araçtır.

https://gitforwindows.org/ windows için

Git kullanmak için projenizi tutabileceğiniz bir uzak sunucu depolamasına ihtiyacınız vardır. Bu public de olabilir private da. Github adında bir versiyon kontrol sistemi sitesi var. Projelerinizin kaynak kodları açık olacak şekilde depolama yapmak isteyince Github size ücretsiz imkan sunuyor. Private yani kodları kapalı projeleriniz olacaksa da paralı sistemi var. Github tabanda Git sistemini kullanarak çalışıyor. 

                Github nedir, temel calisma akisi (Github flow) nasildir?

GitHub, proje yönetim ve versiyon kontrol sistemi olmakla birlikte, ayrıca geliştiriciler için yapılmış bir sosyal ağ platformudur. Başka insanlarla işbirliği içinde çalışmanıza, projelerinizi planlamanıza ve izlemenize olanak sağlar.

        Repository (Depo)
Repository veya repo, projelerinizin dosyalarının depolandığı bir dizindir. GitHub’ın alanında veya bilgisayardaki yerel bir depoda bulunabilir. Dosyalar, fotoğraflar, sesler veya projenize alakalı her şeyi repository de depolanbilir.

        Branch (Dal)
Branch deponun bir kopyasıdır. Branch’i diğerlerinden ayrı bir geliştirme yapmak istediğiniz zaman kullanabilirsiniz. Branch üzerinde çalışmak merkezi repository’i veya öbür branchleri etkilemez. İş bittiğinde, pull request’i kullanarak branch’inizi öbür branchlerle ve merkezi repository ile birleştirebilirsiniz.

        Pull Request
Pull request, projenizde birlikte çalıştığınız kişileri bir branch’de yaptığınız değişikliği ana repository’e ittiğinize dair bilgilendirdiğiniz anlamına gelmektedir. Bu repository’nin diğer katkıda bulunanları pull request’i kabul veya ret edebilir. Pull request açıldığında, çalışmanızı birlikte çalıştığınız kişilerle tartışılabilir ve gözden geçirilebilir.

        Bir Repository’i Çatallamak(Forking)
Bir repository’i çatallamak, var olan repository’i kopyalayıp, ihtiyacınız olan değişiklikleri yapıp yeni versiyonu yeni bir repository olarak depolamanız oluyor.
Bu, tamamiyle yeni bir proje olmakla birlikte, merkezi repository’i etkilememektir.

            10 temel Git komutu ve aciklamalari, Bilgisayarda yeni bir repository olusturma ve Github'a yukleme adimlari
            
        git config
        
‘git config’ kullanıcı adı, mail, dosya formatları gibi genel yapılandırma ayarlarını yapılan komuttur.

$ git config --global user.name "ufuk"
$ git config --global user.email ufuk@gmail.com

Bütün Git projelerinde bu kullanıcı adı ve mail adresi kullanılır.
            
        git init

Komut ekranını açın ve komut ekranından proje klasörünüze ilerleyin. Projenizin ana klasöründe olduğunuzdan emin olduktan sonra ‘git init’ komutunu girin.

        git clone
        
Bu komutla local’de ya da uzak bir sunucuda yer alan bir repository’nin çalışan kopyasını bulunduğunuz dizine kopyalar.

git clone /path/to/repository 
git clone username@host:/path/to/repository

ilk satır bilgisayarınızda var olan bir repository‘yi, ikinci satır ise uzak bir sunucudaki repository‘yi bulunduğunuz dizine kopyalar.

        git add
        
Belirttiğiniz bir dosyayı ya da tüm projeyi çalışma dizinine ekler. Yani commit‘lenmeye hazır hale getirir.

git add Readme.txt
git add *

ilk satır ile ‘Readme.txt‘ isimli dosyayı, ikinci satır ile de proje içerisindeki tüm dosyaları çalışma dizinine eklemiş oluyoruz.

        git rm
        
Belirtilen bir dosyayı çalışma dizininden siler.
	
git rm Readme.txt

        git commit
        
Çalışma dizinine eklenen dosyaları .git klasörü içindeki kısıma ekler. Commit işlemi yerelde gerçekleşen bir işlemdir. Uzak sunucudaki repository‘de bir değişiklik yapmaz.

git commit -m "Projede X işlemi yapıldı."

Tırnak içerisinde yazan kısım commit mesajıdır ve bu alanı boş bırakmamak gerekir. Buraya hangi kısımlarda değişiklik yaptıysak onu mesaj halinde yazmak daha sonrası için kolaylık olacaktır.

        git push
        
Commit‘lenmiş değişiklikleri uzak sunucudaki repository‘ye göndermemizi sağlar.

        git status
        
Repository‘nin o anki durumu hakkında bilgi verir. Değişiklik yapılmış veya yeni eklenmiş fakat add ya da commit işlemi uygulanmamış dosyalar varsa bunları liste halinde gösterir.
        
        git pull
        
Uzak sunucudaki repository‘de değişikliğe uğramış ya da yeni eklenmiş dosyalar varsa bunları indirir ve yereldeki repository ile birleştirir.
