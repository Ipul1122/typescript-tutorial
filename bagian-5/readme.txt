mengenai bagian 1 yaitu COMPILING TYPESCRIPT

-- SEBELUM MEMULAI TS --
buka cmd pada vscode kemudian ketik tsc namaFile.ts 
Pastikan sebelum panggil ts, perhatikan direction atau tempat file berada
jika mengalami error seperti ini = tsc-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system
Hal yang dilakukan => 
1. open window powershell
2. run as administrastor
3. lalu copy  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned di powershell
4. enter dan coba kembali di vscode
5. ketik tsc namaFile.ts dan enter di terminal vscode
6. ketika tsc namaFile.ts -w "untuk mengetahui perbedaan js dan ts"

-- STUDI KASUS --
cara menggunakan dynamis any tipe

any tipe bisa di isi value apapun, mau itu string, number, boolean hal lainnya.
any tidak mempedulikan value yang diberikan dan akan tetep mengeksekusi output yang diberikan

untuk memakai any harus berhati-hati, walaupun bisa diisi sesuka hati value yang diberikan, namun bisa menjadi ambigu
contoh : nama = 18, umur = "syaiful"
any tidak peduli jika nama = 18 dan umur = "syaiful" karena any tetap mengeksekusi output yang diberikan

-- REFERENSI -- 
YOUTUBE : https://www.youtube.com/watch?v=nm9P2vnS9_I&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=6