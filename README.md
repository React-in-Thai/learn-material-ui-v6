# คอร์สฟรี Material UI v6 จากผู้พัฒนา

สอนโดย ศิริวัชร์ คุณาพร (จุ้น) Software Engineer @MUI

## Intro

- คอร์สนี้คืออะไร? สอนการใช้งาน React Material UI v6 สำหรับสร้าง web interface
- เหมาะกับใคร? นักพัฒนาที่มีประสบการณ์ React เบื้องต้นมาแล้ว และยังไม่เคยใช้ Material UI หรือเคยใช้ในเวอร์ชั่นก่อนๆ
- เรียนจบแล้วได้อะไร?
  - วิธีการเรียกใช้งาน Material UI component
  - เข้าใจการ custom styles ใน Material UI component
  - สามารถสร้าง theme ของตัวเองได้ จัดการ font, สี
  - ทำให้ app รองรับ light & dark mode ได้
  - สร้าง login form ตามมาตรฐานของเว็บได้
  - ประยุกต์สร้าง custom component เพื่อใช้งานกับ Material UI ได้
- คอร์สนี้ไม่ครอบคลุมอะไร?
  - คอร์สนี้เป็นการทำ mockup UI เท่านั้น ไม่มี application logic
  - ไม่มี server เข้ามาเกี่ยวข้อง เป็น client-side และ local ทั้งหมด

## Lessons

ผลลัพธ์สุดท้ายคือหน้า Login Form ที่ผ่านการ theme แล้ว:

![image](https://github.com/user-attachments/assets/d11d844f-f95b-4c0d-92d6-9ddd32215d93)

Checkout commit ["Start from scratch"](https://github.com/React-in-Thai/learn-material-ui-v6/commit/0416c96135b887607cffd9d4d14e6177c70138f3) แล้วสร้าง branch ใหม่ (ใช้ชื่อตัวเอง เพราะหลังจากจบคอร์ส อยากให้เปิด PR มาให้ตรวจครับ)

ควรเปรียบเทียบ Solution ที่ได้กับ solution ในแต่ละ lesson. เรื่องของการเขียน CSS อาจไม่เหมือนกัน ไม่เป็นไร สำคัญที่ได้เรียนรู้วิธีการใช้ Material UI และ theme ในการสร้าง UI.

### L1 - render Button component

**Requirement**: render Button component ของ Material UI ให้ได้

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/94ca9d7d1fe825b3da834dcf73ef58e272ae5a34), [Docs](https://mui.com/material-ui/getting-started/installation/), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/aaa3c66fbfc8a218ea242244e354f0ee11ed2355)

> Note: `yarn.lock` เกิดขึ้นจากการใช้ yarn ในการ install package แทน npm ถ้าใช้ npm จะเกิด `package-lock.json` แทน

### L2 - CSS Reset

Browser จะมีการเซ็ต CSS default ที่ไม่เหมือนกัน CSS reset เลยเป็นที่นิยมเพราะว่าทำให้สไตล์เป็นมาตรฐานเดียวกันระหว่างเบราว์เซอร์ต่างๆ Material UI ก็มี CSS reset เป็นของตัวเองในชื่อ component CssBaseline.

**Requirement**: render CssBaseline ไว้บนสุดของ app

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/e779c2fb3387e3855355b234084ca73a3b67b6cb), [Docs](https://mui.com/material-ui/react-css-baseline/), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/e8c64a8cb651f2e9999a6ec8b92a4d34809fb1a5)

### L3 - Email input

สำหรับ email input ให้ใช้ TextField component เนื่องจากครอบคลุม parameters ต่างๆในการทำ input

**Requirement**: render TextField พร้อมทั้งใส่ props ที่เหมาะสมสำหรับ email input

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/5b7f0c0a9ac21d7aae1d652220f364c30e4e9185), [Docs](https://mui.com/material-ui/react-text-field/), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/b6e492c71588dac478f9691ebcc484e02aadf81f)

### L4 - Password input

เพิ่ม password input

**Requirement**: render TextField พร้อมทั้งใส่ props ที่เหมาะสมสำหรับ password input

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/c002dd32255a508d757d7c8754e0769c1b819744), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/39845fbfe457bc985807938ee09eb00c3e1c0f5c)

### L5 - Stack

จะเห็นว่าทั้งสอง input มันติดกันอยู่ เราจะมาจัด layout ให้ดูเป็นระเบียบ น่าใช้งานมากขึ้น ด้วย Stack component. มันจะสร้าง spacing ระหว่าง children ของมันตามที่เราต้องการ

**Requirement**: render Stack เหนือทั้งสอง fields และใส่ spacing ตามต้องการ

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/b28e26c0140b2aa9f09edde7c371a40340b629eb), [Docs](https://mui.com/material-ui/react-stack/), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/6c648216996e79b610497b71795b0d0c61c310df)

### L6 - `sx` prop

มาจัด layout ของ form ให้อยู่ตรงกลางของหน้าจอ. ใน Material UI เวลาเราต้องการเขียน CSS เพิ่ม ขั้นตอนแรกคือให้ใช้ sx prop. sx prop เป็นคุณสมบัติพิเศษใน Material UI ที่ช่วยให้คุณสามารถเพิ่มสไตล์แบบใช้ครั้งเดียวให้กับคอมโพเนนต์ได้อย่างรวดเร็ว โดย Material UI component ทุกตัวรองรับ sx prop. (ลองใส่ sx ให้กับ Stack)

ในกรณีนี้จะขอแนะนำ component อีกหนึ่งตัวซึ่งหน้าที่ของมันมีแค่ให้เราเขียน sx ได้เท่านั้น component นี้ชื่อ Box, มันจะ render div ออกมาให้ แต่เราสามารถเปลี่ยน element ให้กับมันได้

**Requirement**: ใช้ Box และ sx prop จัด layout ให้ได้แบบในรูป

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/df81c855577e920a4264aa3fb8f9aa08b872c953), [Docs](https://mui.com/material-ui/customization/how-to-customize/#the-sx-prop), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/5e1cf3df5faad91e64b9e8865945b8adf1b58fc8)

### L7 - Checkbox

**Requirement**: เพิ่ม Remember me checkbox

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/07291a2f14d105a9150ba9e6cb649c9cee71b954), [Docs](https://mui.com/material-ui/react-checkbox/), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/24a393d417aff1d2358dd4d62a98c2c5a91ade25)

### L8 - Sign up link

**Requirement**: เพิ่ม Sign up link โดยใช้ Typography และ Link components ตาม design

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/5c80a2112fa415bdb65442dac1a8c5a4a7212c79), [Typography docs](https://mui.com/material-ui/react-typography/), [Link docs](https://mui.com/material-ui/react-link/), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/89e29e6e1db5fa33217db4087c31b1716c048495)

### L9 - 3rd party icon

ต่อมาจะเป็นการนำ icon ทั่วๆไปมาใช้กับ Material UI ใน social login

**Requirement**: สร้าง component GoogleIcon และ FacebookIcon ด้วย svg ที่ให้ และนำไปใช้งานกับ Button เพื่อสร้าง social login buttons

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/bb9764c94a9d7fd1a6804318970e0cb9708d08d7), [Button + icon demo](https://mui.com/material-ui/react-button/#buttons-with-icons-and-label), [SvgIcon docs](https://mui.com/material-ui/icons/#svgicon), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/c1a15cbc6f165403de4f937b01b407fdf05c48ae)

### L10 - Title

เพิ่มไตเติ้ล “Sign in” ด้วย Typography (h1)

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/0d717124925d7e5900cb25247cecc86bbaf1aa84), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/0eabce0ffd420370ac8e13cbe5c0303cc2d6ba7d)

### L11 - Theme

เราได้ login form ที่พร้อมใช้งานแล้ว ทีนี้เราจะมาปรับ design ให้มันดู minimal มากขึ้น มีความโค้งมนดูสบายตาด้วยการสร้าง theme โดยขั้นตอนแรกเราจะเปลี่ยน สีพื้นหลัง กันก่อน

**Requirement**: สร้าง file ใหม่ชื่อ AppTheme.tsx โดย export component ชื่อ AppTheme ที่ render ThemeProvider กับ children, จากนั้นสร้าง theme ด้วย createTheme โดยใช้สีพื้นหลังเป็น #f5f5f5

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/115b7cc0b6866ff3bc26cf913020e68951c4e2be), [Theming docs](https://mui.com/material-ui/customization/theming/), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/0495ce33d5c2e0d3be4c35466a7efaf0314118a7)

> ต้อง update Material UI เป็น `6.0.1` หรือมากกว่า

### L12 - Theme font

Theme font ด้วย Inter. อย่าลืมว่าต้อง install font ด้วย เนื่องจาก Material UI ไม่ได้จัดการเรื่องการโหลด font ให้

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/b592921b2760bafbe63d4ac6331ba70bd174bf6a), [Theme font docs](https://mui.com/material-ui/customization/typography/#font-family), [Inter fontsource](https://fontsource.org/fonts/inter/install), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/df5c3a27e7660c3ead3ec5f59d23a7edc150319c)

### L13 - Theme border radius

**Requirement**: ปรับค่าของ `shape.borderRadius` ให้เป็น 12

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/77c6c55ab59db1c28cb7327c305f89cab3efd355), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/24e01db8f13f4c8f557f3c1c6da6588379b66e75)

### L14 - Using theme values

**Requirement**: ปรับ Box `sx` prop ให้ใช้ค่า `borderRadius` จาก theme ด้วย callback

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/c8507326ba74afbe9286c2b2983e6eca1b4b36c8), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/5ef864bd4d026113cae6c2fcd23500f766a953b3)

### L15 - Theme palette primary

**Requirement**: เลือกสีที่ชอบจาก [Tailwind CSS color](https://tailwindcss.com/docs/customizing-colors) ใส่ใน `palette.primary.main` ของ theme

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/efbbc1ebfc6b22272dbc1f0d4555896fcd2e4084), [Theme palette docs](https://mui.com/material-ui/customization/palette/), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/5f2510cad3ecb30bc9f2cdd75200b126112d0ed7)

### L16 - Theme Button

หลังจากที่จัดการ theme tokens แล้ว เราสามารถที่จะทำ theme ให้กับ component ได้ด้วย เวลาเราเรียกใช้ component ก็จะมีสไตล์ตาม theme ที่เรากำหนดทันที

**Requirement**: เพิ่ม theme ให้กับ Button ที่มี variant=”contained” และ color=“primary”

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/67b79e9436ee4b0c6c3b3560a42501ba9d2b9620), [Docs](https://mui.com/material-ui/customization/theme-components/#variants), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/67222749971b0277dc601a01d8dcf408cc83eb14)

### L17 - Theme Button (outlined)

**Requirement**: เพิ่ม theme ให้กับ Button ที่มี variant=”outlined” ให้มี border color ที่อ่อนลง

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/f44da15b79d238d87e080cd3daffac49807091b5), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/9a77535a67115796af6b033221fafda120fcef76)

### L18 - Theme TextField

Theme TextField ให้มี border color ที่อ่อนลง โดยการใช้ CSS selector target ไปที่ fieldset

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/8045c48cc53c3681e580f56a449aad4dbaa86c41), [Docs](https://mui.com/material-ui/customization/theme-components/#theme-default-props), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/97058c465d27538dbe3b00b731002c2060cc50b1)

### L19 - Theme Checkbox

Theme checkbox ด้วยการแทนที่ icon และปรับให้มี border color ที่อ่อนลง

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/8a0bf9e454382c4e27a848887b8e2811c540b65e), [Docs](https://mui.com/material-ui/customization/theme-components/#theme-default-props), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/a1267b42203d67b692d8853bd67e57fe34667ff6)

### L20 - Dark mode

เพิ่ม dark mode ให้กับเว็บ วิธีนี้จะทำให้เว็บเราปรับสีให้เข้ากับ system preference ที่ผู้ใช้งานตั้งค่าไว้, Debugging using Chrome devtool (emulate prefers-color-scheme)

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/5e81901dc452a9ab21e48f198ca6e7754754eb1a), [Docs](https://mui.com/material-ui/customization/dark-mode/#system-preference), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/709ecb9c6fb7265733df7764d3276a202e36ed0e)

### L21 - Apply dark styles

ปัญหาจะเกิดขึ้นที่ Box เนื่องจากยังไม่ได้รองรับ dark mode ให้แก้โดยการใช้ theme.applyStyles เมื่อต้องการเพิ่ม styles ในแต่ละ mode

> Note: ต้อง update Material UI เป็น `6.0.2` หรือมากกว่า

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/8f778866214f6181c5609cdac09a78a2d674a9e2), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/71194f4f03c5df753dd222f6e9950b2adc98ce8d)

### L22 - Color mode toggle

ในหลายๆเว็บไซต์จะมี control ให้ผู้ใช้งานสามารถปรับ mode ได้เอง ให้เพิ่ม Select โดยมี options คือ “System”, “Light”, “Dark” และใช้ useColorScheme hook ในการอ่านค่า mode, setMode

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/e38c8d1fb8993da1427e710075fde5d112d5817a), [Docs](https://mui.com/material-ui/customization/dark-mode/#toggling-color-mode), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/249164bbc1d9e952ac4abeb8349f8306fd20f383)

### L23 - CSS Variables

สามารถทำให้การพัฒนาเว็บไซต์ง่ายขึ้นด้วยการใช้ CSS variables ซึ่งปัจจุบันเป็นมาตราฐานของการทำเว็บไซต์ก็ว่าได้

[Lesson solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/a0af8afe2e80526807e39cb22c11dfd3af0bd886), [Docs](https://mui.com/material-ui/customization/css-theme-variables/usage/#getting-started), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/eb25050498f5f9942c10d1983084887d953951d6)

### L24 - MUI Treasury

ใช้ predefined UI จาก MUI treasury. การพัฒนาเว็บไซต์จะเร็วขึ้นถ้าเราสามารถ copy โค้ดมาใช้งานในโปรเจคของเราได้

**Requirement**: เปลี่ยน ColorModeToggle ไปใช้ https://mui-treasury.com/?path=/story/color-scheme-select-icon--icon

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/567375df61eeef9663e9109436c230a8c1713617), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/755ef6c61949ee8578a26fd1ecf711bf9100b71e)

### L25 - Breakpoints

เมื่อย่อหน้าจอไปที่ mobile viewport เราต้องการให้พื้นหลังของ Box นั้นหายไป ดังนั้นเราต้องใช้ media query เข้ามาช่วย ลองเขียน media query ตรงๆ แล้วค่อยขยับไปใช้ theme.breakpoints

[Lesson guide](https://github.com/React-in-Thai/learn-material-ui-v6/commit/e9810ab3a281d8090fa795571f7b7ec429f10fc5), [Docs](https://mui.com/material-ui/customization/breakpoints/), [Solution](https://github.com/React-in-Thai/learn-material-ui-v6/commit/61175ab320648cf2636313eeebdd295284b5d02a)
