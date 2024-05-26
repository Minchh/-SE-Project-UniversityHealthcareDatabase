# A Software Engineering Project - University Healthcare Database

## Introduction

<div style = "text-align: justify">
University students encounter numerous health and wellness issues, such as stress, and difficulty in obtaining preventive care. Existing resources are often scattered and underutilized. There is a need for a centralized platform that provides students with easy access to information, services, and tools to promote their overall well-being.
<br />
The University Healthcare Database website tackles student health needs by providing a one-stop shop for reliable information, self-care tools, and preventative care resources. Students can access a curated database of health topics, approach medical news, and explore healthy habits. By empowering International University’s students with knowledge and convenient tools, ultimately contributing to a successful and enriching college experience.
</div>

### Group 2 - Group Members

| Order |        Name         | Student ID  |
| :---: | :-----------------: | :---------: |
|   1   |  Ngô Lưu Tấn Hưng   | ITITIU21129 |
|   2   | Nguyễn Thị Yến Chi  | ITITIU21005 |
|   3   |   Phung Quốc Tân    | ITITIU21102 |
|   4   | Trần Nguyễn Hồng Ân | ITITIU21150 |
|   4   |    Lê Viễn Phát     | ITCSIU22213 |
|   4   |     Lê Bảo Trân     | ITCSIU21114 |
|   4   | Đỗ Nguyễn Bình Minh | ITCSIU21201 |

### How to run and installation

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
  - Chạy <code>npm install</code> (đã cài nodeJS), để tải các dependencies.
  - Chạy lệnh: <code>node index.js</code>

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

### Techniques :

Version Control

- Git & GitHub

Tech Frontend:

- Build tool: Vite
- Language: Javascript + SWC
- Library: React
- Styling: CSS

Tech Backend:
