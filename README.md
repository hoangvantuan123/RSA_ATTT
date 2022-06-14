# GIẢI THUẬT MÃ HÓA RSA
## Mô tả sơ lược

Thuật toán RSA có hai khóa: khóa công khai (hay khóa công cộng) và khóa bí mật (hay khóa cá nhân). Mỗi khóa là những số cố định sử dụng trong quá trình mã hóa và giải mã. Khóa công khai được công bố rộng rãi cho mọi người và được dùng để mã hóa. Những thông tin được mã hóa bằng khóa công khai chỉ có thể được giải mã bằng khóa bí mật tương ứng. Nói cách khác, mọi người đều có thể mã hóa nhưng chỉ có người biết khóa cá nhân (bí mật) mới có thể giải mã được.

## Tạo khóa

1. Chọn 2 số nguyên tố lớn p và q với q != q, lựa chọn ngẫu nhiên và độc lập.
2. Tính n = p * q
3. Tính giá trị hàm số Euler &#216;(n)=(p-1)(q-1).
4. Chọn một số tự nhiên tự nhiên e sao cho 1 < e <&#216;(n) và là số nguyên tố cùng nhau với &#216;(n).
5. Tính: d sao cho de &#926; 1 . ([Đồng dư](https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93ng_d%C6%B0?tableofcontents=1))

### Khóa công khai
    n , modun
    e, số mũ công khai

### Khóa bí mật
    n , modun, xuất hiện cả trong khóa công khai và khóa bí mật
    d, số mũ bí mật

## Mã hóa

## Giải mã

