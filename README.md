
# تم اشتراک NexusNet

تم‌های مدرن صفحه اشتراک برای پنل‌های **3x-ui (سنایی)** و **پاسارگارد (PasarGuard)**.

**نسخه فعلی: v1**

---

## نصب سریع

با دسترسی root این دستور را اجرا کنید:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes/install.sh)
```

نصب‌کننده از شما می‌پرسد:

1. **پنل** → `3x-ui / Sanaei` یا `PasarGuard`
2. سپس فایل مناسب را به‌صورت خودکار نصب می‌کند.

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

- طراحی واکنش‌گرا (موبایل و دسکتاپ)
- پشتیبانی از تم تاریک و روشن
- نمایش مصرف ترافیک با رینگ مایع و آمار
- تایمر انقضا (روز / ساعت / دقیقه) و تاریخ شمسی
- تأخیر زنده سرورها با حالت‌های TCP / HTTP / Real
- نقشه پس‌زمینه با موقعیت واقعی کشورها و مسیر اتصال
- کپی یک‌کلیکی و نمایش QR Code
- افزودن سریع به کلاینت‌ها (Happ، Hiddify، v2rayNG و …)
- نوار ناوبری پایین صفحه
- نصب‌کننده انگلیسی در ترمینال

---

## تغییرات نسخه v10

- بازه مصرف (24h / 7d / 30d / کل) به‌صورت کارت جدا در خانه
- رفع گیر کردن اسکرول قبل از انتهای صفحه (فاصله بیشتر از نوار پایین)
- مرتب‌سازی UI و فاصله‌ها

## تغییرات نسخه v9

- حذف «تعداد سرور» از پروفایل
- آخرین اتصال به صورت `۱۴۰۵/۰۷/۰۸ - ۰۳:۴۳` (شمسی + ساعت)
- تاریخ انقضا در پروفایل: تاریخ شمسی یا نامحدود
- خانه: نمایش حجم کل / دانلود / آپلود / مصرف / باقی‌مانده
- انتخاب بازه مصرف: ۲۴ ساعت، ۷ روز، ۳۰ روز، کل (نمونهٔ محلی مرورگر)
- تایمر دقیق زمان باقی‌مانده در خانه (روز / ساعت / دقیقه)

## تغییرات نسخه v8

- بک‌گراند نقشه جدا برای موبایل و دسکتاپ (زوم مناسب هر دستگاه)
- حذف برچسب اسم کشور از روی نقشه (فقط نقطه و مسیر)
- رفع گیر کردن اسکرول هنگام تعویض تب
- شفافیت بخش برنامه‌ها هم‌سبک با تأخیر زنده
- README به‌روز برای گیت‌هاب

### نسخه‌های قبلی (خلاصه)

| نسخه | خلاصه |
|------|--------|
| v7 | نقشه نقطه‌ای واقعی‌تر، بدون لیبل کشور |
| v6 | موقعیت جغرافیایی سرورها + تایمر انقضا + لایه‌اوت ثابت ویندوز |
| v5 | تاریخ شمسی آخرین آنلاین، نامحدود بودن حجم/انقضا |
| v4 | حالت‌های TCP / HTTP / Real برای پینگ |

---

## ساختار پروژه

```
themes/
  xui/
    default/sub.html
    nexusnet/sub.html          ← معادل xui-nexusnet.html
  pasarguard/
    default/index.html
    nexusnet/index.html        ← معادل pasarguard-nexusnet.html
install.sh
README.md
```

### فایل‌های این پکیج

| فایل محلی | مسیر پیشنهادی در ریپو |
|-----------|------------------------|
| `xui-nexusnet.html` | `themes/xui/nexusnet/sub.html` |
| `pasarguard-nexusnet.html` | `themes/pasarguard/nexusnet/index.html` |
| `install.sh` | `install.sh` |
| `README.md` | `README.md` |

---

## نکات

- پینگ مرورگر ICMP واقعی نیست؛ حالت‌های TCP / HTTP / Real تقریبی هستند.
- روی نقشه فقط اینباندهایی نمایش داده می‌شوند که در نام/ریمارک پرچم یا کد کشور دارند (مثل `🇩🇪` یا `DE`).
- در صورت نبود سقف حجم یا تاریخ انقضا، مقدار **نامحدود** نشان داده می‌شود.
