**Tugas Perorangan/Individu**

**Directive**

Disusun sebagai Mata Kuliah: Pemrograman Web Lanjut

![](/media/9a827908af7782c94b07f6b25f98252a.png)

Oleh:

Ahmad Musyadad Aminullah

1741720141

TI-2B

**PROGRAM STUDI D-IV TEKNIK INFORMATIKA**

**JURUSAN TEKNOLOGI INFORMASI**

**POLITEKNIK NEGERI MALANG**

**TAHUN 2019**

>   Directive adalah sebuah attribute yang biasanya berawalan dengan prefix ng-
>   dan berfungsi sebagai **marker** layaknya class dan id ataupun sebagai
>   **event driven**. Bisa dikatakan juga bahwa directive adalah tag-khususnya
>   si Angular. Directive digunakan untuk modifikasi DOM, ada 2 cara untuk
>   memodifikasi directive yaitu directive structural dan directive attribute.
>   Jika menggunakan directive structural maka yang dimodifikasi adalah struktur
>   DOM sedangkan jika directive attribute maka yang dimodifikasi adalah
>   attribute DOM. Ada beberapa macam directive yang akan kita gunakan selama
>   pembahasan ini.

ngIf
====

>   Directive ngIf digunakan untuk sebuah kondisi percabangan. Ada beberapa
>   contoh penggunaan ngIf. Contoh Pertama

-   buka file

    ![](/media/2e4604aa61d3439dc81b4a11ea292e9e.png)

-   buka file

    ![](/media/81184df30129c59484b148e5c3f4f13e.png)

-   jalankan localhost maka hasilnya seperti berikut

    ![](/media/de56f1b5b40373345cbc96ec7f06fec4.png)

-   Jika array pada **app.component.ts (courses=[];)** dikosongkan maka hasilnya
    seperti berikut

    ![](/media/bcc0fb520a921b88a1cadc13c36e1014.png)

    ![](/media/82208d598308807fe8ee8d91a46998d1.png)

>   contoh kedua menggunakan else:

-   buka file app.component.html modifikasi kodenya menjadi berikut

    ![](/media/0d813d555e54d0d4ea98fd24b37b833c.png)

-   jalankan localhost dengan kondisi array pada app.component

    -   dengan array kosong

        ![](/media/bcc0fb520a921b88a1cadc13c36e1014.png)

>   hasilnya :

![](/media/51791b76a1d68fc2209e38942ac87f19.png)

-   dengan array ada isi

    ![](/media/ea440cd0526e0aab5c80fa9fe7126c08.png)

>   Hasilnya

![](/media/804e567ee3d42ebf0916523cae958629.png)

>   cara ketiga :

-   buka file app.component.html modifikasi kodenya menjadi berikut

    ![](/media/1690c1d7e1a8c6a88f4ffb0babfa6459.png)

-   jalankan localhost dengan kondisi array pada app.component

    -   dengan array kosong

        ![](/media/f57c00cf2b58cb01f0556d058c55d198.png)

>   hasilnya:

![](/media/9906d6c7027b9f9dc8ae357c03f28988.png)

-   dengan array ada isi

    ![](/media/9ece632c2ded8faddf382edd3523c8bb.png)

>   Hasilnya

![](/media/f64dcd54e7995b28929ff5bcdd49b2a1.png)

Hidden Property
===============

>   Selain menggunakan directive ngIF kita juga dapat menggunakan property
>   Hidden untuk menampilkan salah satu data. Jika menggunakan ngIF element yang
>   bernilai salah atau false akan dihilangkan dari DOM sedangkan jika
>   menggunakan Hidden property jika element tersebut bernilai true maka element
>   tersebut yang akan dihidden. Untuk lebih jelasnya ikuti langkah berikut

-   buka app.component.html

    ![](/media/58be3be9328240effca31c5426d2cbb7.png)

-   jalankan localhost maka hasilnya seperti berikut

    ![](/media/77faae4a3decd7a827937bd6dcbc8dad.png)

-   selain contoh diatas kita juga dapat memberikan property seperti berikut

    ![](/media/f1dab86a2586d294a000b19d4756c837.png)

>   **dengan catatan pada app.component.ts pada courses terdapat array courses
>   dengan nilai 1 dan 2**

![](/media/ef412f72e9382dde60b8413d99f9aa21.png)

-   jalankan localhost (berbeda hasil jika pada array courses tidak terdapat
    isinya)

    ![](/media/2db7a0b356a5401de72497826b032af5.png)

>   Jika kita inspect element maka akan terlihat **property hidden** tidak
>   terdapat **kondisi true ataupun false**.

![](/media/5d39bfa2d18df4a223af573bbfc2de35.png)

>   berbeda jika kita menggunakan **ngIF** terdapat **bindings** dengan nilai
>   **false**

![](/media/5b681763e9f725c074a557f36ec9de7c.jpg)

ngSwitchCase
============

>   Menyediakan ekspresi switch untuk menyamakan dengan ekspresi ngSwitch yang
>   tersedia. Ketika ekspresi sama, maka template NgSwitchCase menampilkan.

>   Untuk lebih jelasnya ikuti langkah berikut :

-   buka file app.component.html modifikasi codenya menjadi seperti berikut

    ![](/media/5d626f869307539088f124e802fbe10f.png)

>   Penjelasan Code

-   line 45 terdapat **event binding (click)=”viewMode=’list’”**

-   line 47 pada tag a ditambah **class binding
    [class.active]=”viewMode==’list’”**

-   line 52 pada tag div terdapat **property binding [ngSwitch]**

-   line 53, 54, 55 pada tag div ditambah **directive ngSwitchCase**

-   buka file app.component.ts tambahkan **property viewMode (line 12)**

    ![](/media/8334f3f93cc232d7fad71ffcb622df3d.png)

-   run localhost maka hasilnya seperti berikut saat diklik list view maka akan
    muncul list view content dan jika kita pilih ListView maka akan tampil
    tulisan List View Content

![](/media/f169a62e67b408b1aa33b70fad6d7e8c.png)

ngFor
=====

>   ngFor adalah sebuah directive pada angular yang berfungsi untuk melakukan
>   looping terhadap beberapa data misal data kita adalah sebuah array, jadi
>   directive ini akan melopping array kita pada bagian template. Untuk lebih
>   jelasnya ikuti langkah-langkah berikut :

-   buka app.component.ts property CoursesFor yang berisikan array **(line 12)**

![](/media/37ee185a6cc22a100cd91cb465eef525.png)

-   buka file app.component.html tambahkan directive ngFor pada element li

    ![](/media/03ad7b5a682d011ede2a6e61b62dc4c8.png)

>   Penjelasan code

-   line 59 terdapat directive ngFor dengan let item dari property courseFor
    pada app.component.ts dan dengan index alias i

-   linr 60 adalah string interpolasi

-   jika dijalankan maka hasilnya seperti berikut

    ![](/media/790123bd912fc605d4ba046c6797b946.png)

    -   kita juga dapat memberi tanda tertentu pada index yang bernilai ganjil
        dengan menggunakan isEven <https://angular.io/api/common/NgForOf>

        ![](/media/96d24fb7b67f3f67b6ae7aab017e04bb.png)

        ![](/media/5ba03b1f25b80ac656b7b5819a07e721.png)

ngFor dan change Detection
==========================

>   Dengan memodifikasi directive ngFor kita dapat melakukan penambahan atau
>   pengurangan data. Untuk lebih jelasnya ikuti langkah berikut :

-   Pada percobaan ini kita akan menambahkan sebuah data array pada
    **coursesFor**

-   tambahkan button pada app.component.html (line 64)

    ![](/media/ebbb12b22de968ceefaa06e9504ddfd4.png)

-   tambahkan method **onAdd()**

![](/media/36ec6fc983b9ee171b73731632cd1990.png)

>   Penjelasan code

-   line 22-24 adalah sebuah method yang digunakan untuk melakukan push data
    (id:6, name:’courses6’) ke coursesFor

-   sehingga hasilnya seperti berikut (jika kita tekan button add maka akan
    ditambahkan sebuah data courses 6)

![](/media/127091284408b3b362ed4f51988b1dda.png)

![](/media/073e5b7a65a377ea20c6fba0c957ac8a.png)

-   setelah kita berhasil menambahkan sebuah data array pada courseFor maka
    untuk selanjutnya kita akan mencoba untuk melakukan penghapusan data.

-   Tambahkan sebuah method onRemove pada app.component.ts

    ![](/media/cd97459959fdd9a58352a2af17c550c8.png)

>   Penjelasan code

-   line 26 sebuah method dengan parameter item. Jika kita **console.log
    (item)** maka hasilnya pada saat kita hapus salah satu data maka hasilnya
    akan seperti berikut

    ![](/media/f346749222f568e5311b946ffe652e1d.png)

-   line 27 sebuah variabel baru dengan nama index bertipe data number. Untuk
    lebih jelasnya kita bisa tambahkan **console.log(index)** pada **method
    onRemove** dan hasilnya pada saat kita hapus salah satu data maka akan
    seperti berikut

![](/media/f346749222f568e5311b946ffe652e1d.png)

-   Buka app.component.html dan tambahkan sebuah button untuk menghapus (line69)

![](/media/1499fc410cdbda776f5a45e37574c3fa.png)

>   penjelasan code :

-   line 69 adalah sebuah button dimana terdapat event click yang memanggil
    method onRemove dengan parameter item

-   hasilnya seperti berikut (pada saat button remove diclick maka salah satu
    data akan hilang sementara)

![](/media/892159124ac2cf0f26b6dd9998fcdc50.png)

![](/media/967132093303fcd1236ed40d7e72d212.png)

-   selain itu kita juga dapat melakukan perubahan status menggunakan event
    click

-   buka file app.component.html tambahkan button (line 70)

    ![](/media/1da8118f1b4a8c35e83d817ad1de8380.png)

>   penjelasan code :

-   pada line 70 terdapat sebuah button dan event click dimana event click ini
    memanggil method onChange dengan parameter item

-   buka file app.component.ts buatlah sebuah method onChange dengan parameter
    item dan didalam method tersebut adanya perubahan string menjadi updated

![](/media/65ae4f61bfe517ac64a60b168be77fcf.png)

-   hasilnya

    ![](/media/1ab15f972504f06cb00dd91204de40eb.png)

    ![](/media/79ba2fb35bcfd5cabfa11dcfce01f78f.png)

ngFor dan trackby
=================

>   Pada studi kasus berikut ini kita akan menampilkan isi array saat button
>   diclick. Pemasalahan yang muncul jika button click tersebut diclick
>   berkali-kali, maka secara tidak langsung data akan mereload ulang. Untuk
>   lebih jelasnya ikuti langkah berikut:

-   Buka file app.component.ts buatlah sebuah method dengan nama loadCourses
    (line

>   38) tapi sebelumnya buat sebuah property dengan nama coursesForOne (line 37)

![](/media/717528faa8b7b3596cc81f1bfa87a685.png)

-   buka file app.component.html dan tambahkan code seperti pada gambar

    ![](/media/d6cea8ac9b74d39ffae34810a6e66079.png)

-   hasilnya saat button diclick

    ![](/media/74fea9c3a49647f8aacf192db3f0777c.png)

    ![](/media/f06df5f1026fa9b9086684ab3477ead5.png)

-   sekarang kita lakukan analisa buka inspect element, saat button belum
    diclick seperti pada gambar berikut

    ![](/media/f4161ffe28de24022ef185316a583e96.png)

-   dan saat button diklik maka element ul akan muncul seperti pada gambar
    berikut

    ![](/media/5462bd3b5bff19ae9775201d9f63d5ee.png)

-   jika kita lakukan klik kembali maka button akan merespon kembali dengan
    menampilkan data yang sudah ada dalam arti mengunduh ulang yang sudah ada
    (jika kita lakukan klik kembali maka pada inspect element akan muncul
    highlight warna ungu dimasing-masing element li)

    ![](/media/2ad7a99a23776f66ab7a7e2d8532f89e.png)

-   oleh karena itu kita membutuhkan **TrackBy** yang nanti digunakan untuk
    mengecek jika data sudah ada maka button tidak perlu melakukan actionnya
    kembali

-   untuk menambahkan **TrackBy** dengan cara menambahkan pada
    app.component.html pada **directive ngFor**

![](/media/6b017e957c4cfbc256bbc5adb216bbc8.png)

-   selain itu tambahkan juga sebuah method trackCourse dengan parameter index
    dan itemone pada app.component.ts

![](/media/1e378bfa28d1a1b037ad2d2e36ea8254.png)

>   Penjelasan code:

>   \- line 48 sebuah nilai kembalian jika itemone bernilai true maka itemone.id
>   akan ditampilkan dan jika itemone bernilai false maka itemone tidak
>   terdefinisi

-   jika berhasil maka pada saat button tampilkan data diklik untuk kedua
    kalinya pada inspect element tidak ada muncul highlight ungu pada
    masing-masing element li

6.1 The leading Asterik
=======================

>   leading asterik adalah tanda asterisk yang ada pada directive seperti
>   \*ngFor dsb. adapun maksud leading asterisk pada sebuah directive adalah
>   bahwa kita memberi tahu angular untuk menulis ulang markup tertentu, seperti
>   code berikut

![](/media/3a4daac24898636c5814ecc2e3c274f1.png)

>   pada gambar diatas terdapat sebuah directive \*ngIF dimana fungsi dari
>   asterisk pada ngIf adalah memberi tahu angular untuk menulis ulang markup
>   dari div tersebut menggunakan ng template dengan menggunakan property
>   binding seperti pada gambar berikut

![](/media/d4d5221a8aa955acea2dc5c5c282f94d.png)

6.1 ngClass
===========

>   jika pada percobaan sebelumnya kita membuat component favorite menggunakan 2
>   class binding yaitu class binding fa-star dan fa-star-o seperti pada gambar
>   berikut

![](/media/88aa5935748e9f649f030b881d5aa948.png)

>   selain menggunakan class binding seperti diatas kita juga dapat menggunakan
>   attribute directive class seperti berikut

![](/media/cbe4ecba630b7057614ba0f9a4ba2c5b.png)

Custom Directive
================

>   pada directive kita juga dapat membuat sebuah custom directive, sebagai
>   contoh kita ingin membuat semua inputan pada textbox secara otomatis menjadi
>   lowercase. Untuk lebih jelasnya ikuti langkah-langkah berikut :

-   pertama kita harus membuat directive dengan nama input-format terlebih
    dahulu dengan perintah seperti berikut

    ![](/media/9734a297ee91a150294f5aceccb78e6a.png)

    Penjelasan:

    ng g d input-format =\> ng generate directive nama-directivenya

-   jika directive berhasil digenerate maka kita pastikan di app.module.ts pada
    \@NgModule terdapat nama directive yang kita buat tadi

    ![](/media/4f0cacd6751f1007b45a95882f185914.png)

-   buka input-format.directive.ts dan tambahkan decorator HostListener seperti
    pada gambar berikut

    ![](/media/9ba4b4c7fafcb579e88cf8d52a828c54.png)

>   Penjelasan code :

-   line 1 kita tambahkan (mengimport) sebuah fungsi decorator HostListener agar
    dapat menggunakan event DOM yang menyediakan method untuk menangani sebuah
    event yang sedang berjalan. Untuk lebih jelasnya penggunaan HostListener
    buatlah 2 buah method dengan nama onfocus dan onblur

-   line 8 adalah sebuah method onfocus dengan menggunakan function decorator
    \@HostListener dengan parameter event windows focus
    (*https://developer.mozilla.org/en-US/docs/Web/Events/focus)*

-   line 9 sebuah method onblur dengan menggunakan function decorator
    \@HostListener dengan parameter event windows blur
    (*https://developer.mozilla.org/en-US/docs/Web/Events/focus)*

-   Buka file app.component.html dan tambahakn code berikut

    ![](/media/d1570090843b8591c712f135a4e4fa6a.png)

>   Penjelasan code

-   line 89 terdapat appInputFormat adalah selector pada **input-
    format.directive.ts**

    ![](/media/2e3627adce3cb715b7dfa538b7f40e5a.png)

-   Kita jalan localhost:4200 setelah itu lakukan percobaan click pada textbox
    dan click diluar textbox. Amati dengan menggunakan console inspect element.
    Pada saat kita click pada textbox maka pada console akan muncul onFocus
    tetapi jika click diluar textbox maka console akan keluat onBlur

-   Setelah kita memahami fungsi dari decorator \@HostListener maka untuk
    berikutnya kita akan mencoba membuat logika untuk merubah value dari textbox
    menjadi lowercase

-   buka file input-format.directive.ts dan modifikasi codenya menjadi berikut

    ![](/media/b5a269738441e64cdae314b3663ed24d.png)

>   Penjelasan code

-   line 8 kita membutuhkan sebuah reference untuk ke host element maka kita
    tambahkan (inject) pada constructor reference object ElementRef. Dengan kata
    lain ElementRef digunakan untuk mengakses DOM object

-   line 11 sebuah property dengan nama value dengan tipe data string yang
    berisi sebuah property nativeElement pada class ElementRef

-   line 12 untuk merubah inputan menjadi huruf kecil semua

-   Jalankan localhost dan berikan masukan dengan huruf besar semua setelah itu
    tekan tab, jika berhasil maka valuenya akan berubah menjadi huruf kecil
    semua

-   atau kita bisa menggunakan cara lain dengan menggunakan **property binding**

-   buka file app.component.html dan tambahkan property binding dengan nama
    format

![](/media/3f912faa3ad4b3c0136ce1834c618e5f.png)

-   buka file input-format.directive.ts tambahkan decorator input dan modifikasi
    codenya seperti pada gambar berikut

![](/media/8ccaee73f79c4d571d1603e90d937776.png)

>   Penjelasan code

-   line 7 adalah sebuah decorator input dengan nama property format

-   line 14 – 16 adalah sebuah kondisi dimana jika format sama dengan lowercase
    maka semua inputan akan dibuat menjadi huruf kecil semua sedangkan jika
    selain lowercase maka akan dibuat huruf besar

-   cat:format disini adalah kondisi di **app.component.html**

    ![](/media/6e2165cb57a9b298a216c2e1caac522c.png)

-   atau kita juga dapat menggunakan cara lain yaitu menggunakan nama selector
    sebagai property binding

-   buka app.component.hml modifikasi codenya menjadi berikut

    ![](/media/0798aaa33dad433dda02250ef19f76a9.png)

-   buka input-format.directive.ts dan tambahkan decorator input dengan
    parameter appInputFormat

    ![](/media/850cbd9a926adba1cca2862a65aaab4a.png)

-   Jika dijalankan sebagai contoh kita memasukkan kalimat dengan huruf kecil
    dan pada saat kita tab maka akan berubah menjadi huruf besar semua seperti
    berikut

![](/media/e50bc1e532841a0b4f57520d74718214.png)

![](/media/627ebd99f71e47f89977a1e77b47cf70.png)
