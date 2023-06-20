import React from 'react'
import FooterGridList from '../atoms/footer_grid_list'
import { textList1, textList2, textList3, textList4 } from '../utility/listFooter'

export default function Footer() {
  return (
    <>
        <div className="grd0">
      <h3 className="text-3xl drop-shadow italic font-bold uppercase text-white ">Sinar Asih Sumedang</h3>
      <p className="py-0 px-1  text-sm font-light sm:mt-6">Eggi Reviana Ridwan. owner</p>
      <p className="py-0 px-1  text-sm font-light">Gilang Ridwan. owner</p>
      <p className="py-0 px-1  text-sm font-light">Gerin. owner</p>
      </div>
      
      <div className="grd1">
        <FooterGridList props={{text:textList1}}/>
      </div>

      <div className="grd2">
        <FooterGridList props={{text:textList2}}/>
      </div>

      <div className="grd3">
        <FooterGridList props={{text:textList3}}/>
      </div>

      <div className="grd4">
        <FooterGridList props={{text:textList4}}/>
      </div>
    </>
  )
}
