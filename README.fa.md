[Uploading README.fa.md…]()
<div align="center">

<img src="docs/banner.png" alt="NexusNet Sub" width="100%">

# NexusNet Sub

**صفحه‌ی اشتراک شیک، سریع و بدون CDN برای [3x-ui (ثنایی)](https://github.com/MHSanaei/3x-ui) و [PasarGuard (پاسارگارد)](https://github.com/PasarGuard/panel)**

![version](https://img.shields.io/badge/version-3.5.0-22d3ee?style=for-the-badge&labelColor=0b1220)
![panels](https://img.shields.io/badge/3x--ui%20%C2%B7%20PasarGuard-supported-2563eb?style=for-the-badge&labelColor=0b1220)
![cdn](https://img.shields.io/badge/CDN-none-10b981?style=for-the-badge&labelColor=0b1220)
![size](https://img.shields.io/badge/single%20file-~100%20KB-f59e0b?style=for-the-badge&labelColor=0b1220)
![lang](https://img.shields.io/badge/fa%20%C2%B7%20en-RTL%20ready-a855f7?style=for-the-badge&labelColor=0b1220)

[English](README.md) · **فارسی**

</div>

<div dir="rtl">

---

## ✨ امکانات

| | |
|---|---|
| 🫧 **کره‌ی شیشه‌ای با آب زنده** | سطح آب = حجم باقی‌مانده. گوشی رو کج کن (یا موس رو حرکت بده) تا شیشه کج بشه؛ روش بزن تا موج بخوره. حجم نامحدود = شیشه‌ی پر که از لبه بیرون می‌زنه و برمی‌گرده. |
| 🚦 **وضعیت رو حس می‌کنی** | همه‌چیز خوب باشه صفحه آبیه. وقتی سرویس غیرفعال بشه، حجم تموم بشه یا زمان تموم بشه، **کل صفحه قرمز می‌شه** (پس‌زمینه، دکمه‌ها، کره). |
| ⏱ **شمارش معکوس زنده** | روز · ساعت · دقیقه · ثانیه، همین الان در حال شمارش. تاریخ شمسی. و یک جمله‌ی ساده مثل «فقط ۵ روز تا پایان اشتراک» یا «۷۵٪ از حجمت باقی مانده». |
| ⚡ **افزودن با یک لمس** | پلتفرم (اندروید، iOS، ویندوز، مک، لینوکس) رو تشخیص می‌ده و برنامه‌ی مناسب (Happ، Hiddify، V2Box، v2rayNG) رو اول نشون می‌ده. برای هر برنامه دکمه‌ی **نصب** و **افزودن** داره. |
| 📱 **اول موبایل** | تم روشن / تیره / خودکار، فارسی و انگلیسی، رعایت reduced-motion، زوم باز، دکمه‌های آیکونی برچسب دارن. از عرض ۳۶۰ پیکسل به بالا تست شده. |
| 🔌 **کاملاً آفلاین** | بدون گوگل‌فونت، بدون Font Awesome از CDN، بدون QR از CDN. آیکون‌ها SVG داخل فایل، سازنده‌ی QR داخل فایل، فونت سیستم. هیچ درخواست شخص ثالثی ارسال نمی‌شه (فقط آدرس لوگویی که خودت بذاری). |
| 🖥 **مدیر ترمینال** | با `nxt-sub` نصب، آپدیت، برگشت به نسخه‌ی قبل و برندینگ (عنوان، بات، پشتیبانی، تمدید، کانال، اطلاعیه، رنگ، لوگو…) بدون دست زدن به فایل. |
| 🔒 **امن** | همه‌ی متن‌ها escape می‌شن، آدرس‌ها اعتبارسنجی می‌شن، تنظیمات با JSON تزریق می‌شن (هیچ‌وقت به‌عنوان کد اجرا نمی‌شن)، دانلودها با checksum چک می‌شن و هر تغییر بکاپ می‌گیره. |

---

## 📸 اسکرین‌شات‌ها

<div align="center">

| عادی | نامحدود | مشکل ← قرمز |
|:--:|:--:|:--:|
| <img src="docs/xui_blue.png" width="250"> | <img src="docs/xui_unlimited.png" width="250"> | <img src="docs/xui_red.png" width="250"> |
| **پاسارگارد** | **تم روشن** | **برنامه‌ها** |
| <img src="docs/pg.png" width="250"> | <img src="docs/light.png" width="250"> | <img src="docs/apps.png" width="250"> |

</div>

---

## 🚀 نصب

> پیش‌نیاز: لینوکس، دسترسی **root**، `bash`، `curl` یا `wget`، و پنل 3x-ui و/یا PasarGuard که از قبل نصب و در حال اجراست.

</div>

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SiNaKeEn/NexusNet-Sub/Themes/install.sh)
```

<div dir="rtl">

این دستور `nxt-sub` رو نصب می‌کنه و منوش رو باز می‌کنه. دفعه‌ی بعد فقط بزن:

</div>

```bash
sudo nxt-sub
```

<div dir="rtl">

بدون منو:

</div>

```bash
sudo nxt-sub install xui      # 3x-ui (ثنایی)
sudo nxt-sub install pg       # پاسارگارد
sudo nxt-sub install both     # هر دو
```

<div dir="rtl">

<details>
<summary><b>3x-ui: یک مرحله‌ی دستی</b></summary>

بعد از نصب، توی پنل برو **Settings ← Subscription** و **Sub Theme Directory** رو روی `/etc/x-ui/sub/` بذار و ریستارت کن (`x-ui restart`). `nxt-sub` خودش هم پیشنهاد ریستارت می‌ده.
</details>

<details>
<summary><b>پاسارگارد: نصب‌کننده چی کار می‌کنه؟</b></summary>

فایل `subscription/index.html` رو توی `CUSTOM_TEMPLATES_DIRECTORY` (پیش‌فرض `/var/lib/pasarguard/templates`) می‌نویسه، اگه این متغیر توی `/opt/pasarguard/.env` نباشه اضافه‌اش می‌کنه، **پوشه‌ی قالبی که از قبل استفاده می‌کنی رو هیچ‌وقت عوض نمی‌کنه**، و اگه `SUBSCRIPTION_PAGE_TEMPLATE` جای دیگه‌ای اشاره کنه پیشنهاد می‌ده درستش کنه.
</details>

</div>

<details dir="rtl">
<summary><b>آفلاین / آینه / نسخه‌ی ثابت</b></summary>

```bash
sudo nxt-sub install xui --file ./xui-nexusnet.html     # بدون نیاز به اینترنت
NXT_BASE=https://your-mirror.example/NexusNet-Sub sudo -E nxt-sub install both
sudo nxt-sub install both --ref v3.5.0                   # ثابت کردن تگ/کامیت
```

</details>

<div dir="rtl">

---

## 🖥 `nxt-sub` — مدیر ترمینال

</div>

<div align="center">

<img src="docs/terminal_menu.png" width="49%"> <img src="docs/terminal_settings.png" width="49%">

</div>

<div dir="rtl">

هر چیزی که توی صفحه می‌بینی رو می‌تونی از ترمینال عوض کنی و **هر تغییر همون لحظه روی قالب‌های نصب‌شده اعمال می‌شه**.

| دستور | کارش |
|---|---|
| `sudo nxt-sub` | منوی تعاملی: نصب، برند و متن‌ها، بکاپ، دکتر، حذف، آپدیت |
| `nxt-sub install xui\|pg\|both` | نصب یا آپدیت قالب (`--file` و `--ref` هم داره) |
| `nxt-sub set <key> <value>` | تغییر یک تنظیم (اعتبارسنجی و اعمال فوری) |
| `nxt-sub get <key>` · `nxt-sub config` | خوندن یک تنظیم / همه |
| `nxt-sub apply` | تزریق دوباره‌ی تنظیمات به قالب‌های نصب‌شده |
| `nxt-sub restore xui\|pg` | برگشت به آخرین بکاپ |
| `nxt-sub doctor` | عیب‌یابی مجوزها، `.env`، مسیر قالب، نسخه‌ها و اتصال |
| `nxt-sub fix` | رفع خودکار مشکلات رایجی که دکتر پیدا می‌کنه |
| `nxt-sub status` · `update` · `version` | وضعیت · آپدیت خود CLI (با checksum) · نسخه |

### چی رو می‌شه شخصی‌سازی کرد؟

| کلید | مثال | کجا نشون داده می‌شه |
|---|---|---|
| `title` | `NexusNet VIP` | بالای صفحه و تب مرورگر (خالی = اسم پنل) |
| `bot` | `@MyBot` | اگه تمدید و پشتیبانی خالی باشن از این استفاده می‌شه |
| `renew` | `https://t.me/MyBot` | دکمه‌ی بزرگ **تمدید** وقتی سرویس رو به پایانه |
| `support` | `https://t.me/MySupport` | دکمه‌ی **پشتیبانی** توی تب پروفایل |
| `channel` | `https://t.me/MyChannel` | دکمه‌ی اختیاری **کانال** |
| `notice` | `امشب ساعت ۲ تعمیرات` | بنر بالای همه‌ی صفحه‌ها |
| `footer` | `© MyBrand` | یک خط کوچک پایین صفحه |
| `accent` | `#22d3ee` | رنگ برند (وقتی مشکل باشه صفحه باز هم قرمز می‌شه) |
| `logo` | `https://…/logo.png` | لوگوی مربعی کنار عنوان |
| `lang` | `fa` · `en` | زبان پیش‌فرض برای بازدیدکننده‌ی جدید |
| `theme` | `auto` · `dark` · `light` | تم پیش‌فرض برای بازدیدکننده‌ی جدید |
| `pgcells` | `xui` · `simple` | کادرهای آمار پاسارگارد (پایین‌تر) |

</div>

```bash
sudo nxt-sub set title "NexusNet VIP"
sudo nxt-sub set bot @MyBot
sudo nxt-sub set accent "#a855f7"
```

<div dir="rtl">

---

## 🧩 ثنایی در برابر پاسارگارد

چیدمان هر دو یکیه. فقط داده‌ای که پنل به صفحه می‌ده فرق داره:

| | 3x-ui (ثنایی) | PasarGuard (پاسارگارد) |
|---|---|---|
| دانلود / آپلود | ✅ جدا | ❌ فقط یک عدد کل |
| کادرهای آمار | دانلود شده · آپلود شده · مصرف‌شده · باقی‌مانده | همون چهار برچسب (`pgcells=xui` پیش‌فرض): «دانلود شده» کل مصرف رو نشون می‌ده و «آپلود شده» `—` |
| حالت دیگه | – | `pgcells=simple`: مصرف‌شده · باقی‌مانده · ٪ مصرف · ٪ مانده |
| وضعیت | فعال / انقضا / حجم | وضعیت واقعی (`active`، `limited`، `expired`، `disabled`، `on_hold`) |

> **عددها توی پاسارگارد درست نیستن؟** آخر لینک اشتراک `#debug` بذار (`https://host/sub/TOKEN#debug`) تا مقادیر خامی که پاسارگارد فرستاده رو ببینی.

---

## 🛠 ساخت از روی سورس

سورس‌ها توی `src/` هستن و هر دو قالب از یک فایل‌ها ساخته می‌شن:

</div>

```bash
python3 build.py        # ← out/xui-nexusnet.html, out/pasarguard-nexusnet.html
```

<div dir="rtl">

لوگوی برنامه‌ها: فایل‌های `happ.png`، `hiddify.png`، `v2rayng.png`، `v2box.png` و… رو بذار توی `src/appicons/` و دوباره بساز؛ به ۷۲ پیکسل کوچک می‌شن و داخل خود HTML قرار می‌گیرن (بدون درخواست بیرونی). برنامه‌ای که لوگو نداشته باشه مربع رنگی با حرف اولش رو نگه می‌داره.

---

## ❓ سوالات متداول

<details><summary><b>صفحه هنوز طرح قدیمی رو نشون می‌ده.</b></summary>
پنل رو ریستارت کن (<code>x-ui restart</code> / <code>pasarguard restart</code>) و مرورگر رو hard-refresh کن. با <code>sudo nxt-sub doctor</code> مسیرها و مجوزها رو چک کن.
</details>

<details><summary><b>دکمه‌های تمدید و پشتیبانی نمیاد.</b></summary>
با <code>nxt-sub set renew …</code> و <code>set support …</code> بذارشون یا یک <code>bot</code> تنظیم کن. فقط لینک‌های <code>https://</code>، <code>http://</code> و <code>tg://</code> قبول می‌شن.
</details>

<details><summary><b>می‌شه حذفش کرد؟</b></summary>
بله: <code>sudo nxt-sub</code> ← <b>Uninstall</b>. پیشنهاد می‌ده فایل قبلی‌ات رو برگردونه به‌جای اینکه فقط حذف کنه.
</details>

---

## 📦 تغییرات

[CHANGELOG.md](CHANGELOG.md)

## 🙏 منابع

- آیکون‌ها: [Font Awesome Free](https://fontawesome.com/license/free) (CC BY 4.0) به‌صورت SVG داخل فایل.
- سازنده‌ی QR: © Kazuhiko Arase، MIT — <http://www.d-project.com/>.

</div>
