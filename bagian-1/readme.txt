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

-- STUDI KASUS --
menggubah variabel isi value pada TYPESCRIPT maka
contohnya 
di JS
const character = "mario"

di TS
const character = "luigi"

Maka ketika di inspect dan dilihat melalui console, outputnya adalah "luigi" 
dan di javascript value dari const character = "luigi"

-- REFERENSI -- 
YOUTUBE : https://www.youtube.com/watch?v=iTZ1-85I77c&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=2
