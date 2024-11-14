mengenai bagian 2 yaitu TYPE BASIC / Tipe Dasar di TS

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

mencoba tipe dasar yang digunakan di TYPESCRIPT
yaitu string, int/float, boolean 

Dan mencoba menggunakan arrow function untuk mengukur diamater lingkaran menggunakan metode Math.PI

-- REFERENSI -- 
YOUTUBE : https://www.youtube.com/watch?v=0DzDqtcxnz0&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=3