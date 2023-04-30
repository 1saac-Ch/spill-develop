import SpillLogo from "@/component/elements/SpillLogo";
import React from "react"
import styles from "./styles.module.scss";

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from "@/component/elements/Button/component";
const Footer = () => {
  const list = [
    {
      title: "Spill",
      label: [
        { sub: "Feature", path: "/" },
        { sub: "Tentang Kami", path: "/" },
        { sub: "Artikel", path: "/" },
        { sub: "Syarat dan Ketentuan", path: "/" },
      ]
    },
    {
      title: "Product",
      label: [
        { sub: "Tulis Review", path: "/" },
        { sub: "Sarankan Product", path: "/" },
        { sub: "Product Trending", path: "/" },
      ]
    }

  ]
  return (
    <div className={styles.footer}>
      <div className={styles.maxContainer}>
        <div className={styles.stack}>
          {list.map((item, index) => (
            <div key={index} className={styles.leftStack}>
              <h1>{item.title}</h1>
              <div>
                {item.label.map((label, index) => (
                  <span key={index}>{label.sub}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="flex w-full flex-1 items-center">
            <div className="w-full">
              <div className="font-semibold text-lg">Tulis Emailmu untuk dapatkan Informasi Terbaru</div>
              <p>We’ll share brewery news and events</p>
              <div className="mt-4 flex gap-3">
                <input className="border-none flex-[1.5] rounded-md p-2 w-full text-black" type="text" placeholder="Your Email here" />
                <Button className="flex-[0.5]">Submit</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5 py-5">
          <div>
            <SpillLogo multiplySize={0.3} isDark={true} />
          </div>
          <div className="text-gray-500">
            <p>© 2023 Spill. All Rights Reserved.</p>
          </div>
          <div className="flex gap-6">
            <div><InstagramIcon /></div>
            <div><LinkedInIcon /></div>
            <div><WhatsAppIcon /></div>
            <div><TwitterIcon /></div>
            <div><FacebookIcon /></div>
            <div><YouTubeIcon /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer