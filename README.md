[README.md](https://github.com/user-attachments/files/32826346/README.md)
# تم اشتراک NexusNet

تم‌های مدرن صفحه اشتراک برای پنل‌های **3x-ui (سنایی)** و **پاسارگارد (PasarGuard)**.

دو نسخه تم موجود است:

| تم | توضیح |
|----|--------|
| **Default** | تم عمومی و تمیز – مناسب استفاده عمومی |
| **NexusNet** | تم اختصاصی با رنگ نئون آبی/فیروزه‌ای |

---

## نصب سریع

با دسترسی root این دستور را اجرا کنید:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes/install.sh)
```

نصب‌کننده از شما می‌پرسد:

1. **پنل** → `3x-ui / Sanaei` یا `PasarGuard`
2. **تم** → `Default` یا `NexusNet`

سپس فایل مناسب را به صورت خودکار نصب می‌کند.

---

## نصب دستی

### 3x-ui / سنایی

```bash
mkdir -p /etc/x-ui/sub
curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes/themes/xui/nexusnet/sub.html \
  -o /etc/x-ui/sub/sub.html
```

> اگر تم عمومی می‌خواهید، به جای `nexusnet` بنویسید `default`.

### پاسارگارد (PasarGuard)

```bash
mkdir -p /var/lib/pasarguard/templates/subscription

curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes/themes/pasarguard/nexusnet/index.html \
  -o /var/lib/pasarguard/templates/subscription/index.html
```

این دو خط را در فایل `/opt/pasarguard/.env` قرار دهید:

```env
CUSTOM_TEMPLATES_DIRECTORY="/var/lib/pasarguard/templates/"
SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"
```

سپس سرویس را ری‌استارت کنید:

```bash
pasarguard restart
```

---

## ویژگی‌ها

- طراحی واکنش‌گرا و بهینه برای موبایل
- پشتیبانی از تم تاریک و روشن
- نمایش مصرف ترافیک و آمار
- کپی یک‌کلیکی و نمایش QR Code
- نوار ناوبری پایین صفحه
- نصب‌کننده کاملاً انگلیسی (بدون کاراکتر فارسی در ترمینال)

---

## ساختار پروژه

```
themes/
  xui/
    default/sub.html
    nexusnet/sub.html
  pasarguard/
    default/index.html
    nexusnet/index.html
install.sh
README.md
```

---

## لایسنس

MIT
