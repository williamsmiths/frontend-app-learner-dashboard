# Custom Header Component

Đây là một Header component tùy chỉnh được tạo ra để thay thế `@edx/frontend-component-header`, cung cấp tất cả các tính năng tương tự mà không phụ thuộc vào MFE.

## Tính năng

### ✨ Tính năng chính

- **Responsive Design**: Tự động thích ứng trên mọi kích thước màn hình
- **Navigation Menu**: Menu chính, menu phụ và menu người dùng đầy đủ
- **Mobile Menu**: Menu di động với hamburger button
- **User Authentication**: Hiển thị thông tin và avatar người dùng
- **Accessibility**: Hỗ trợ đầy đủ các tiêu chuẩn accessibility (WCAG)
- **Keyboard Navigation**: Điều hướng bằng bàn phím (Tab, Enter, Escape)
- **Click Outside**: Đóng menu khi click bên ngoài
- **Animations**: Hiệu ứng mượt mà khi mở/đóng menu

### 🎨 UI/UX Features

- Logo/Site name hiển thị
- Active state cho menu items
- Hover effects
- Smooth transitions
- High contrast mode support
- Reduced motion support

## Cách sử dụng

### 1. Import component

```jsx
import CustomHeader from "components/CustomHeader";
```

### 2. Sử dụng trong component

```jsx
<CustomHeader mainMenuItems={mainMenu} secondaryMenuItems={secondaryMenu} userMenuItems={userMenu} />
```

## Props

### mainMenuItems (array)

Menu chính của header

```jsx
const mainMenuItems = [
  {
    type: "item",
    href: "/",
    content: "Courses",
    isActive: true, // Optional: đánh dấu item active
    onClick: () => {}, // Optional: custom click handler
  },
  {
    type: "item",
    href: "/programs",
    content: "Programs",
  },
];
```

### secondaryMenuItems (array)

Menu phụ (thường là Help, Support...)

```jsx
const secondaryMenuItems = [
  {
    type: "item",
    href: "/support",
    content: "Help",
  },
];
```

### userMenuItems (array)

Menu người dùng (Profile, Account, Sign Out...)

```jsx
const userMenuItems = [
  {
    heading: "", // Optional: tiêu đề section
    items: [
      {
        type: "item",
        href: "/profile",
        content: "Profile",
      },
      {
        type: "item",
        href: "/account",
        content: "Account",
      },
    ],
  },
  {
    heading: "",
    items: [
      {
        type: "item",
        href: "/logout",
        content: "Sign Out",
      },
    ],
  },
];
```

## Cấu hình

Component sử dụng các configuration từ `@edx/frontend-platform`:

- `LOGO_URL`: URL của logo
- `SITE_NAME`: Tên trang web (fallback nếu không có logo)

## Styling

Component sử dụng SCSS với các biến CSS tùy chỉnh. Bạn có thể override styles bằng cách:

```scss
// Override header height
.custom-header {
  &__container {
    height: 70px; // thay vì 60px mặc định
  }
}

// Override colors
.custom-header {
  background-color: #f8f9fa; // thay vì white mặc định

  &__menu-link {
    color: #212529; // thay vì #333 mặc định

    &:hover {
      color: #007bff; // thay vì #0073e6 mặc định
    }
  }
}
```

## Accessibility Features

- **ARIA Labels**: Đầy đủ aria-label, aria-expanded, aria-haspopup
- **Keyboard Navigation**: Hỗ trợ Tab, Enter, Escape
- **Focus Management**: Focus states rõ ràng
- **Screen Reader**: Tương thích với screen readers
- **Semantic HTML**: Sử dụng đúng semantic elements (header, nav, role)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (với polyfills)

## Migration từ @edx/frontend-component-header

Để migrate từ MFE header sang CustomHeader:

1. **Thay thế import**:

   ```jsx
   // Cũ
   import Header from "@edx/frontend-component-header";

   // Mới
   import CustomHeader from "components/CustomHeader";
   ```

2. **Props tương thích 100%**: Không cần thay đổi props, CustomHeader nhận đúng format props như MFE header

3. **Xóa dependency**: Có thể xóa `@edx/frontend-component-header` khỏi package.json

## Tùy chỉnh

### Theme Colors

```scss
:root {
  --header-bg: #ffffff;
  --header-border: #e5e5e5;
  --header-text: #333333;
  --header-primary: #0073e6;
  --header-hover: #f8f9fa;
}
```

### Breakpoints

```scss
$mobile: 767px;
$tablet: 768px;
$desktop: 1200px;
```

## Performance

- **Lazy Loading**: Component chỉ render khi cần thiết
- **Optimized Re-renders**: Sử dụng React.memo và useCallback
- **CSS-in-JS**: Không sử dụng runtime CSS generation
- **Bundle Size**: Nhỏ hơn đáng kể so với MFE header

## Troubleshooting

### Logo không hiển thị

- Kiểm tra `LOGO_URL` trong config
- Kiểm tra network request đến URL logo
- Fallback sẽ hiển thị `SITE_NAME`

### Menu không hoạt động trên mobile

- Kiểm tra CSS breakpoints
- Kiểm tra JavaScript events
- Kiểm tra z-index conflicts

### Styles bị override

- Kiểm tra CSS specificity
- Sử dụng `!important` nếu cần thiết
- Kiểm tra CSS order loading

## Contributing

Khi có bug hoặc feature request, vui lòng tạo issue với:

- Mô tả chi tiết
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (nếu có)
