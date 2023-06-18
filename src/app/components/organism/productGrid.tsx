import ProductsGrid from "../moleculs/productsGrid";
import { prodcutImage } from "../utility/products_image";



export default function ProductGrid() {
  return (
    <>
     <ProductsGrid props={{
            image: prodcutImage.miband, 
            title : 'Miband 5 (black)'
          }} />
          <ProductsGrid props={{ 
            image: prodcutImage.laptop_asus, 
            title : 'All Laptop Series'
          }} />
          <ProductsGrid props={{ 
            image: prodcutImage.joystick, 
            title : 'Joystick USB & Wireless'
            }} />
          <ProductsGrid props={{ 
            image: prodcutImage.phone, 
            title : 'Realme 10 Pro (Blue)'
            }} />

          <ProductsGrid props={{ 
            image: prodcutImage.smartv, 
            title : 'Smart TV' 
            }} />
          <ProductsGrid props={{ 
            image: prodcutImage.printer, 
            title : 'Printer Epson L220'
            }} />
          <ProductsGrid props={{ 
            image: prodcutImage.storage, 
            title : 'Flashdisk & Hardisk Ext-Int'
            }} />
          <ProductsGrid props={{ 
            image: prodcutImage.tempared_glass, 
            title : "Tempared Glass"
            }} />
    </>
  )
}
