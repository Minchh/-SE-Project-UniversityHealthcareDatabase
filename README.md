Tech:
- Build tool: Vite
- Library: React
- CSS framework: Tailwindcss

Mọi người làm theo các bước sau để chạy web:
- Clone brach về.
- cd vào thư mục se-university-healthcare-database.
- chạy npm install (đã cài nodeJS), để tải các dependencies.
- chạy npm run dev để chạy local (thêm --host nếu mọi người muốn chạy network).
- Rồi click vào url localhost, kèm theo /login hoặc /register trong url, hiện chưa có index page.

Các buớc cần làm đê chạy database (local) và backend:
- Tạo database (local) bằng XAMPP 
  - Tải XAMPP
  - Start Apache Web Server và MySQL Database
  - Vào http://localhost/phpmyadmin để tạo và quản lí database
- Các chú ý khi tạo database:
  - Chọn Default cho các cột là NULL, trừ cột email và cột password
  - Chọn AI (Auto Increment) cho mục extra của cột user_ID
- Chạy backend:
  - Mở terminal tại dicrectory **backend**, hoặc cd vào folder **backend**
  - Chạy npm install (đã cài nodeJS), để tải các dependencies.
  - Chạy lệnh: node index.js

Các package cần tải thêm:
- frontend:
  - axios

``` 
npm install axios
```

- backend:
  - cors
  - bcrypt

``` 
npm install cors
npm install bcrypt
```