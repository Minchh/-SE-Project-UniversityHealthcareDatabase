A Software Engineering Project
=======
Tech Frontend:
- Build tool: Vite
- Language: Javascript + SWC
- Library: React
- Styling: CSS

Tech Backend:

Mọi người làm theo các bước sau để chạy web:
- Clone brach về.
- cd vào thư mục se-university-healthcare-database.
- Tiếp theo là tải dependencies về:
  - Nếu mọi người dùng npm thì gõ <code>npm install</code>.
  - Nếu mọi người dùng yarn thì gõ <code>yarn</code>.
- Cách để chạy web (thêm --host nếu mọi người muốn chạy network - phải chung mạng của local):
  - Nếu npm: chạy <code>npm run dev</code> để chạy local máy mình.
  - Nếu yarn: chạy <code>yarn dev</code> để chạy local trên máy mình.
- Rồi click vào url localhost, kèm theo /login hoặc /register trong url, index sẽ là home page.

Các buớc cần làm để chạy database (local) và backend:
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
