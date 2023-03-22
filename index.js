console.log(`1. SOAL = 
Buatlah fungsi sebagai berikut :
Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

Input Angka 8 Maka Total faktorialnya adalah : 
`)

function faktor(angka) {
  if (angka === 1) {
    return 1;
  } else {
    return angka * faktor(angka - 1);
  }
}

console.log(faktor(8));

console.log(`
2. SOAL =
Buatlah fungsi untuk reverse sebuah string
Apabila input = “abcde”, maka outputnya = “edcba”
Dilarang menggunakan function reverse, buatlah logika sendiri

Input String abcde Maka Hasilnya adalah :
`)

function reverse(kata) {
    var kataBaru = "";
    for (var i = kata.length - 1; i >= 0; i--) {
        kataBaru += kata[i];
    }
    return `kata ${kata} dibalik menjadi ${kataBaru}`;
}

console.log(reverse('abcde'));

console.log(`
3. SOAL =
Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”! 
Contoh: printDigitValue(‘9.86-A5.321’);
Hasil :
9865321
9000000
800000
60000
5000
300
20
1

Input String 9.86-A5.321 Maka Hasilnya adalah :

`)

function jumlahDigit(string) {
  string = string.replace(/\D/g, '');
  let stringBaru = "";;
  console.log(string);
  for(let i = 0; i < string.length; i++) {
    stringBaru = string.charAt(i);
    for(let j = string.length - 1; j > i; j--) {
      stringBaru = stringBaru + "0";
    }
    console.log(stringBaru);
  }

}

jumlahDigit("9.86-A5.321")

console.log(`
4. SOAL =
Ketik kode untuk swap 2 integer variables tanpa VARIABLE TAMBAHAN 
Contoh : let a = 3, let b = 7 => hasilnya a = 7, b = 3

Input 7, 3 Maka Hasilnya adalah :
`)

function swap(nilai1, nilai2) {
  nilai1 = nilai1 + nilai2;
  nilai2 = nilai1 - nilai2;
  nilai1 = nilai1 - nilai2;

  return `setelah dibalik, nilai 1 adalah ${nilai1} dan nilai 2 adalah ${nilai2}`;
}

console.log(swap(7, 3));

console.log(`
5. SOAL =
Buatlah fungsi sebagai berikut :
int : 4, maka outputnya adalah : empat
int : 20, maka outputnya adalah : dua puluh
int : 39, maka outputnya adalah : tiga puluh sembilan
int : 104, maka outputnya adalah : silahkan masukkan bilangan 1-100

Input 39 Maka Hasilnya adalah :
`);

function pembilang(nilai){
  nilai = Math.abs(nilai);
  let simpanNilaiBagi=0;
  let huruf = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
  let temp="";

  if (nilai < 12) {
    temp = " " + huruf[nilai];
  }
  else if (nilai < 20) {
    temp = pembilang(nilai - 10) + " Belas";
  }
  else if (nilai < 100) {
    simpanNilaiBagi = Math.floor(nilai / 10);
    temp = pembilang(simpanNilaiBagi) + " Puluh" + pembilang(nilai % 10);
  } else if (nilai % 100 === 0) {
    simpanNilaiBagi = Math.floor(nilai / 100);
    temp = pembilang(simpanNilaiBagi) + " Ratus";
  } else {
    temp = "Masukkan nilai dari 1 - 100"
  }

  return temp;
}

console.log(pembilang(39));

console.log(`
6. SOAL =
Apabila terdapat sebuah data : 
array data =  [1,4,7,9,12], 
int low = 2,
int high = 15,
maka akan menghasilkan ouput [4,7,9,12]

Input data array adalah [1,4,7,9,12] : 
`)

function removeMinMax(arr) {
  let minimun = 2;
  let maximum = 15;

  for (let i = 0; i < arr.length; i++) {
   if(arr[i] < minimun || arr[i] > maximum) {
     arr.splice(i, 1);
   }
  }
  return arr;
}

console.log(removeMinMax([1, 4, 7, 9, 12]));

console.log(`
7. SOAL =
Dari soal nomor 6, buatlah juga untuk menghasilkan output total ada berapa angka yg termasuk dari bagian low dan high
array data =  [1,4,7,9,12], 
int low = 2,
int high = 15,
maka akan menghasilkan ouput = 4
`)

function nomorTujuh() {
  return removeMinMax([1, 4, 7, 9, 12]).length;
}

console.log(nomorTujuh());

console.log(`
8. SOAL =
Apabila terdapat int = 15, maka akan mencetak output berikut :
1
2
Edu
4
Work
Edu
7
8
Edu
Work
11
Edu
13
14
EduWork

keterangan : string edu untuk kelipatan 3, string work untuk kelipatan 5, string eduwork untuk kelipatan 3 dan 5
Input Angka 15 output : 
`);

function kelipatan(max) {
  let arr = [];
  for (let i = 1; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('Eduwork');
    } else if (i % 3 === 0) {
      arr.push('Edu');
    } else if (i % 5 === 0) {
      arr.push('Work');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(kelipatan(15));

console.log(`
9. SOAL =
Buatlah fungsi untuk menentukan bilangan terkecil dan terbesar dari sebuah array
Contoh : array [4,2,6,88,3,11]
Maka outputnya adalah low : 2, high : 88
dilarang menggunakan built in function

input Array [4,2,6,88,3,11] : 
`)

function minMax(arr) {
  let min = arr.reduce(function (sebelum, sesudah) {
    return ( sebelum < sesudah ? sebelum : sesudah );
  });

  let max = arr.reduce(function (sebelum, sesudah) {
    return ( sebelum > sesudah ? sebelum : sesudah );
  });

  return `nilai minimum adalah ${min} dan nilai maksimum adalah ${max}`
}

console.log(minMax([4,2,6,88,3,11]));

console.log(`
10. SOAL =
Buatlah fungsi untuk mengecek tahun kabisat
input : 2021
output : 2021 bukan tahun kabisat

input : 2024
output : 2024 adalah tahun kabisat
`)

function kabisat(tahun) {
  if (tahun % 4 === 0) {
    return `${tahun} adalah tahun kabisat`;
  } else {
    return `${tahun} bukan tahun kabisat`;
  }
}

console.log(kabisat(2021));
console.log(kabisat(2024));