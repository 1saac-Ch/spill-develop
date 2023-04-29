import React from "react"
import styles from "./styles.module.scss";
const Footer = () => {
  const list =[
    { title:"Spill",
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
        <div className="flex gap-[10]">
          <div className="flex w-[50%] justify-between">
            {list.map((item, index) => (
              <div key={index}>
                <h1 className="font-bold">{item.title}</h1>
                <div className="flex flex-col gap-[10]">
                  {item.label.map((label, index) => (
                    <span key={index}>{label.sub}</span>
                  ))}
                </div>
              </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default Footer