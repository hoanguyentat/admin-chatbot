import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { Product } from '../../../../core/models/product';

const MOCK_DATA: Product[] = [
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-17-1-trang-nga-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'name': 'Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-nemeziz-tango-17-3-non-chuoi-van-den-tf',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  },
  {
    'brand': 'adidas',
    'colors': [
      'xanh',
      'Ngọc',
      'Đỏ',
      'Đen'
    ],
    'count': 5,
    'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
    'id': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
    'price': 200000,
    'price_unit': 'VND',
    'sizes': [
      40,
      41,
      42
    ],
    'url': 'https://www.becksport.vn/giay-bong-da-tq-adidas-predator-18-3-bhm-pha-mau-fg',
    'url_images': [
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-109-d468bdc2-d83c-4a92-bfd0-634726c71bee.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-112-10785ab0-58c2-4a7e-a47f-fa61c5c46d50.jpg?v=1528427933927',
      'https://bizweb.dktcdn.net/100/108/842/products/giay-bong-da-111.jpg?v=1528427933927'
    ]
  }
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
