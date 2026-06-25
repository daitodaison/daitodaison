path = r'src\pages\[lang]\checkout.astro'
content = open(path, encoding='utf-8').read()

old = "import { Check, User, ArrowRight, CreditCard, Lock, Loader2 } from 'lucide-react';"
new = old + chr(10) + "import { languages } from '~/i18n/ui';" + chr(10) + chr(10) + "export async function getStaticPaths() {" + chr(10) + "  return Object.keys(languages).map((lang) => ({ params: { lang } }));" + chr(10) + "}"

count = content.count(old)
print('Found occurrences:', count)

if count == 1:
    content = content.replace(old, new, 1)
    open(path, 'w', encoding='utf-8', newline='').write(content)
    print('OK')
else:
    print('WARNING: not exactly 1 match')
