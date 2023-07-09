'use client'
import GlobalState from "@/app/utility/global_state/admin"
import { getAdmin } from "@/app/utility/redux/feature/adminSlice"
import Image from "next/image"
import { ChangeEvent, FormEvent, Key, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import ilustator_profile from '@/app/assets/ilustrator/undraw_personal_info_re_ur1n.svg'
import Button_Edit from "../moleculs/button_editprof"
import { useRouter } from "next/navigation"
import { URL_HOST_API } from "@/app/config/url_host"
import EditIcon from "@/app/assets/icons/edit"
import EditProfiles from "@/app/assets/icons/editProfile"
import Button from "../atoms/button"
import axios from "axios"
import { NavigasiAdmin } from "../moleculs/navigasi_admin"
import DeleteAdmin from "@/app/pages/admin/API/deleteAdmin"
import LoadingPage from "../moleculs/loading"
import CloudinaryUploadWidget from "./cloudinary"


// Component Input Edit Profile
export const EditProfile = ({ setEditProfile }: any) => {
    const dispatch = useDispatch<any>()
    const { responseState } = GlobalState() // UseSelector Global
    const [input, setInput] = useState({
        nama: "",
        deskripsi: "",
        posisi: "",
        ig: "",
        id: ""
    })
    const getImageProfileId = typeof window !== 'undefined' && sessionStorage.getItem('asset_id')


    // Masukan data default ke useState Input
    useEffect(() => {
        if (responseState) {
            responseState.map((m: any, i: any) => {
                // @ts-ignore
                setInput({
                    nama: m.nama,
                    deskripsi: m.deskripsi,
                    posisi: m.posisi,
                    ig: m.ig,
                    id: m.id

                })
            })
        }

    }, [responseState])

    // Handle Input
    function handleInput(e: ChangeEvent) {
        e.preventDefault()
        const name = (e.target as any).name;

        setInput({
            ...input,
            [name]: (e.target as any).value
        })
    }


    // Update Profile Submit
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        axios(`${URL_HOST_API}/updateKaryawan`, {
            method: "PUT",
            data: {
                nama: input.nama,
                deskripsi: input.deskripsi,
                posisi: input.posisi,
                ig: input.ig,
                id: input.id,
                CloudinaryID: getImageProfileId
            }
        }).then((res) => {
            alert(res.data && res.data.message)
            setEditProfile(false)
            dispatch(getAdmin())
            setTimeout(() => {
                sessionStorage.clear()
            }, 1500)
        }).catch((err) => {
            alert(err.response && err.response.data.message)
        })
    }

    // Button Upload
    useEffect(()=>{
        // @ts-ignore
        document.querySelector('#upload_widget').style.cssText = `background-color:transparent;color:transaparent`
    },[])


    // Handle Edit Image
    function HandleEditImageCancel() {

        if (getImageProfileId) {
            alert('Image profile telah di ubah silahkan klik Update Profile')
            setEditProfile(true)
        } else {
            setEditProfile(false)
        }

    }

    return (
        <form className="my-6 px-1 sm:px-5" onSubmit={(e) => handleSubmit(e)}>
            {responseState && responseState.map((m: any, i: Key) => {
                return <section key={i} className="key_doank">
                    <h1 className="font-bold text-center text-xl py-4">Form Update</h1>
                    <div className="flex sm:flex-row p-2 flex-col items-center">
                        <label htmlFor="nama" className="w-full sm:w-32">Nama</label>
                        <input className="w-full py-2 px-2 border-b" type="text" placeholder={m.nama} id='nama' name="nama" onChange={(e) => handleInput(e)} min={3} minLength={3} maxLength={35} ></input>
                    </div>


                    <div className="flex sm:flex-row p-2 flex-col items-center">
                        <label htmlFor="ig" className="w-full sm:w-32 ">Instagram</label>
                        <input className="w-full py-2 px-2 border-b" type="text" placeholder={m.ig} id='ig' name="ig" onChange={(e) => handleInput(e)} min={3} minLength={3} maxLength={35} ></input>
                    </div>

                    <div className="flex sm:flex-row p-2 flex-col ">
                        <label className="w-32" htmlFor="deskripsi">Deskripsi</label>
                        <input className="w-full pb-32 py-2 px-2 border-b" type="textarea" placeholder={m.deskripsi} id='deskripsi' min={3} minLength={3} maxLength={150} name="deskripsi" onChange={(e) => handleInput(e)} ></input>
                    </div>



                    <div className="flex sm:flex-row p-2 flex-col ">
                        <label htmlFor="posisi" className="w-32">Posisi</label>
                        <select id="posisi" name="posisi" onChange={(e) => handleInput(e)}>
                            <optgroup label="Position" >
                                <option value="OPPO" >OPPO</option>
                                <option value="Realme" >Realme</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Vivo">Vivo</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Infix">Infinix</option>
                                <option value="FrontLiner">FrontLiner</option>
                            </optgroup>
                        </select>
                    </div>
                </section>
            })}


            {/* Submit Component */}
            <div className="w-full text-right flex justify-end" >

                {/* Cancel Button */}
                <div className="w-fulf flex-shrink-0 text-right" onClick={() => HandleEditImageCancel()}><div className="text-right inline-flex items-center  bg-white font-semibold p-2 px-3 hover:bg-base capitalize gap-2 active:opacity-50"><p className=" text-dark cursor-pointer ">Cancel</p></div></div>

                {/* Submit Button */}
                <div className="text-right inline-flex items-center  bg-white text-dark font-semibold p-2 px-3 hover:bg-base capitalize gap-2 active:opacity-50"><EditIcon props={{ w: 22, h: 22, fill: "#333" }} /><Button props={{ text: "Update Profile", style: "" }}></Button></div>
            </div>

        </form>
    )
}

export default function AdminPage() {
    const router = useRouter()

    const [editProfile, setEditProfile] = useState(false)
    const dispatch = useDispatch<any>()
    const { loadingState, responseState, rejectState } = GlobalState() // UseSelector Global

    // Validasi Page Redirect Jika Tidak Ada token login dan request api gagal atau reject request    
    // useEffect(() => {
    //     if (rejectState) router.push('/pages/admin/login')
    // }, [rejectState])

    // Get API Via Redux dispatch
    useEffect(() => {
        dispatch(getAdmin())

    }, [dispatch])




    return (
        <>
            {/* {loadingState ? <div className="bg-base h-screen w-full grid place-content-center"><LoadingPage/></div>:  */}
            <>
                <NavigasiAdmin />
                <div className="my-12 sm:mx-32">
                    {responseState && responseState.map((m: any, i: Key) => {
                        return (
                            <main key={i}>
                                <h1 className='text-4xl p-6 sm:text-center'>Hello, <span className='font-bold text-dark inline-block sm:inline'>{m.nama}</span></h1>
                                <section className='bg-white font-light capitalize shadow rounde-md p-4 mx-6 flex md:flex-row items-center justify-center flex-wrap-reverse sm:justify-between gap-4'>
                                    <div className="table_profile mx-0 xl:mx-auto w-full lg:w-auto" >
                                        {editProfile || <h1 className="font-bold text-center text-xl py-4">Profile</h1>}

                                        {editProfile ? <EditProfile setEditProfile={setEditProfile} /> :
                                            <>
                                                <div className='flex'>
                                                    <p className='rw-lf p-2 w-[120px] lg:w-[200px] border-b border-b-gray-300 '>id</p>
                                                    <p className='rw-rg p-2 w-full lg:w-[260px] border-b border-b-gray-300 '>{loadingState ? "loading" : m.id}</p>
                                                </div>

                                                <div className='flex '>
                                                    <p className='rw-lf p-2 w-[120px] lg:w-[200px] border-b border-b-gray-300'>nama</p>
                                                    <p className='rw-rg p-2 w-full lg:w-[260px] border-b  border-b-gray-300'>{loadingState ? "loading" : m.nama}</p>
                                                </div>
                                                <div className='flex '>
                                                    <p className='rw-lf p-2 w-[120px] lg:w-[200px] border-b border-b-gray-300'>deskripsi</p>
                                                    <p className='rw-rg p-2 w-full lg:w-[260px] border-b border-b-gray-300 lowercase '>{loadingState ? "loading" : m.deskripsi}</p>
                                                </div>
                                                <div className='flex '>
                                                    <p className='rw-lf p-2 w-[120px] lg:w-[200px] border-b border-b-gray-300'>Instagram</p>
                                                    <p className='rw-rg p-2 w-full lg:w-[260px] border-b border-b-gray-300'>{loadingState ? "loading" : m.ig}</p>
                                                </div>
                                                <div className='flex '>
                                                    <p className='rw-lf p-2 w-[120px] lg:w-[200px] border-b border-b-gray-300'>posisi</p>
                                                    <p className='rw-rg p-2 w-full lg:w-[260px] border-b border-b-gray-300'>{loadingState ? "loading" : m.posisi}</p>
                                                </div>

                                                <div className="my-3 flex justify-end gap-4">
                                                    <button className="active:opacity-50 cursor-pointer text-right inline-flex items-center  bg-white text-dark font-semibold p-2 px-3 hover:bg-base capitalize gap-2" onClick={(e) => DeleteAdmin(e, m.id, router, m.nama)}>Delete Profile</button>
                                                    <div className="flex-shrink-0"><Button_Edit props={{ setEditProfile }} /></div>
                                                </div>

                                            </>
                                        }

                                    </div>
                                    <div className="ilustrator_profile  mx-0 sm:mx-auto my-6 " >
                                        <figure>
                                            {/* @ts-ignore */}
                                            <div className="z-50 relative"  >
                                                {editProfile && <CloudinaryUploadWidget />}
                                                <Image src={editProfile ? m.image ||  ilustator_profile : ilustator_profile} id="uploadedimage" alt={editProfile ? m.image ||  ilustator_profile : ilustator_profile} width={280} height={280} className={`${editProfile ? 'rounded-full w-[280px] h-[280px]' : 'rounded-none'}   object-cover mt-2`} />
                                            </div>
                                            {editProfile && <div className="flex items-center gap-2 justify-center mt-3 font-bold"><EditProfiles props={{ fill: "#222", w: 32, h: 32 }} />Ubah Foto <span className="font-light text-sm">(klik foto)</span></div>}
                                        </figure>
                                    </div>
                                </section>
                            </main>
                        )
                    })}
                </div>
            </>
         {/* }   */}
        </>
    )
}


