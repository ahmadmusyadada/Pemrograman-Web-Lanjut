**Tugas Perorangan/Individu**

**Angular Fundamental**

Disusun sebagai Mata Kuliah: Pemrograman Web Lanjut

![](media/9a827908af7782c94b07f6b25f98252a.png)

Oleh:

Ahmad Musyadad Aminullah

1741720141

TI-2B

**PROGRAM STUDI D-IV TEKNIK INFORMATIKA**

**JURUSAN TEKNOLOGI INFORMASI**

**POLITEKNIK NEGERI MALANG**

**TAHUN 2018**

*Praktikum – Bagian 1: Component Basic*
=======================================

| **Langkah** | **Keterangan**                                                                                                |
|-------------|---------------------------------------------------------------------------------------------------------------|
| 1           | Buatlah sebuah componen dengan nama **courses** dengan cara                                                   |
| 2           | Catat hasilnya (soal 1)                                                                                       |
| 3           | Buka file app.component.html, lakukan modifikasi code nya menjadi seperti berikut :                           |
| 4           | Kemudian open terminal dan jalan kan perintah ng serve, lalu perhatikan pada browser. Catat hasilnya (soal 2) |

>   **ng generate component name atau ng g c name**

![](media/1108fefbe17c52e60177dcef7fa41747.png)

![](media/50df6471c49f08f1d02e7dbf258a0654.jpg)

![](media/47b00506810fe68da6f56c5e19df5e42.png)

| 5 | Buka file app.modules.ts dan hapus coursecomponent pada declarations |
|---|----------------------------------------------------------------------|


![](media/60c4271f2a6109bba9d6351fb3f53758.jpg)

| 6 | kemudian perhatikan hasilnya pada browser. Catat hasil nya (soal 3)                                               |   |
|---|-------------------------------------------------------------------------------------------------------------------|---|
| 7 | Kemudian lakukan inspect pada halaman localhost : 4200 di browser, apa yang terlihat? Berikan penjelasan (soal 4) |   |

![](media/6820fda94a1f547a7bb5a3a1726848eb.png)

![](media/75c1a14df35af41360626d19d959fb72.png)

>   **Praktikum – Bagian 2: Templates**

| **Langkah** | **Keterangan**                                                                                       |
|-------------|------------------------------------------------------------------------------------------------------|
| 1           | Buka file courses.component.ts tambahkan property baru dengan nama title                             |
| 2           | Kemudian buka browser localhost : 4200. Catat hasilnya (soal 5)                                      |
| 3           | Tambahkan string pada binding datanya. Buka file courses.component.html. tambahkan seperti berikut : |
| 4           | Perhatikan dan catat hasil yang ditampilkan oleh browser (soal 6)                                    |

![](media/c8653a54a778b9329c635551a920062b.jpg)

![](media/0c425109c48e779cda1565f0d0fdff59.png)

![](media/a526e107eb8618fadee728cbf98f5cb9.jpg)

![](media/2f2d45fddb9e54fdf1bced9e3d9c9671.png)

| 5 | Buka file courses.component.ts dan buatlah sebuah method dengan nama getTitle seperti berikut ini : |
|---|-----------------------------------------------------------------------------------------------------|


![](media/521f9531c973dee30e9ee6e07471dc0b.jpg)

| 6 | Kemudian buka file courses.component.html, lakukan modifikasi sperti berikut : |   |
|---|--------------------------------------------------------------------------------|---|
| 7 | Perhatikan dan catat hasil yang ditampilkan pada browser (soal 7)              |   |

![](media/ee67e78796e061f2f9e265b5103bb062.jpg)

![](media/9d8a31d40d2dd6a9cb6001dca61cfa67.png)

>   **Praktikum - Bagian 3: Directive**

| **Langkah** | **Keterangan**                                                                                             |
|-------------|------------------------------------------------------------------------------------------------------------|
| 1           | Buka file courses.component.ts dan buat property dengan nama course dengan data berupa array               |
| 2           | Buka file courses.component.html lalu tambahkan directive ngFor dan string interpolation seperti berikut : |

![](media/14ab559731b310d08e9b402acf3db2d8.emf)

|   | [./media/image16.jpeg](./media/image16.jpeg)                      |
|---|-------------------------------------------------------------------|
| 3 | Perhatikan dan catat hasil yang ditampilkan pada browser (soal 8) |

![](media/99372e388335f2a0200023967acc1afd.png)

>   **Praktikum – Bagian 4: Services dan Dependency Injection**

| **Langkah** | **Keterangan**                                                                                                  |
|-------------|-----------------------------------------------------------------------------------------------------------------|
| 1           | Buatlah service baru yang bernama **courses** dengan perintah : ng generate service courses atau ng g s courses |
| 2           | Catat hasilnya (soal 9)                                                                                         |
| 3           | Buka file courses.service.ts kemudian tambahkan method getCourse seperti berikut :                              |
| 4           | Buka file courses.component.ts, kemudikan lakukan modifikasi codenya seperti berikut :                          |

![](media/dc6af055ba781d9ed3bbb73bb8a22222.png)

![](media/07959eacb4c57c1a9d42107c17895e74.jpg)

|   | [./media/image20.jpeg](./media/image20.jpeg)                       |
|---|--------------------------------------------------------------------|
| 5 | Perhatikan dan catat hasil yang ditampilkan pada browser (soal 10) |
| 6 | Tambahkan constructor seperti berikut :                            |
| 7 | Perhatikan dan catat hasil yang ditampilkan pada browser (soal 11) |

![](media/14a04725497a983a1b1d43a5c9c71e03.png)

![](media/203a89e1c8fc90830aee4e18b31e2aa4.jpg)

>   **Tugas pertama**

>   **Buatlah seperti tampilan berikut ini :**

![](media/ec2f1e02544bde098aac164413d9b974.jpg)

>   **Tugas Kedua**

>   **buatlah seperti pada gambar dibawah ini**

![](media/c827cb95c4a0ba1ed6658c40d5e1cf02.jpg)

>   **dengan ketentuan**

-   **ini tugas menggunakan binding data dan rata tengah**

-   **sunday dst menggunakan pipe , rata tengah dan menunjukkan hari bulan
    tanggal tahun**

-   **nama dan alamat menggunakan binding data**

-   **hobby menggunakan service**
