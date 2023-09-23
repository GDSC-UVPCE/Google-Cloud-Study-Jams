import React, { useState } from 'react'
import { Roboto_Mono } from 'next/font/google'
const roboto = Roboto_Mono({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

import html2canvas from 'html2canvas'
import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script';
const DownloadBadge = ({ Imgdata, setImgdata, setProgress, Username, setUsername }) => {
    const [Adjustment, setAdjustment] = useState(false);
    const [Download, setDownload] = useState(false);
    const [ChangePhoto, setChangePhoto] = useState(false);



    return (
        <div className='relative w-full'>
            {Download && <div className="absolute z-30 w-full h-screen bg-gray-700 text-center pt-20 text-white text-3xl"> Downloading ...</div>}

            <div className="photo w-fit relative m-auto mt-5">
                <div className="relative">
                    {!Adjustment && <p className={`absolute ${roboto.className} text-2xl tracking-tight bottom-16 pl-5 z-20 w-full text-left text-[#4283F3]`}>{Username}</p>}
                    <div className=" w-fit max-w-[300px] h-[300px] overflow-scroll">
                        <img src={Imgdata} alt="your Image" className='w-max h-max' />
                    </div>
                    {!Adjustment && <img
                        className='absolute top-0'
                        src="/assets/template.png"
                        width={300}
                        height={300}
                        alt="template"
                    />}

                </div>
            </div>


            <div className="w-fit relative m-auto mt-5 flex flex-col items-center justify-center flex-wrap gap-3  p-5">
                <div >
                    <input
                        onChange={(e) => {
                            console.log(e.target.checked);
                            setAdjustment((val) => {
                                return !val;
                            });

                        }}
                        className='hidden peer/adjust' type="checkbox" name="option" id="adjust" />
                    <label htmlFor="adjust" className="adjust peer-checked/adjust:bg-blue-500 peer-checked/adjust:text-white flex flex-wrap items-center justify-center space-x-2 px-3 py-2 border border-blue-600 rounded-full text-blue-600">Adjust Image</label>
                </div>
                <div >
                    <input
                        onChange={(e) => {
                            console.log(e.target.checked);

                            setChangePhoto((val) => {
                                return !val;
                            });

                            window.location.reload();

                        }}
                        className="hidden peer/changePhoto" type="checkbox" name="option" id="changePhoto" />
                    <label htmlFor="changePhoto" className='className="changePhoto text-blue-500 peer-checked/changePhoto:bg-blue-500 peer-checked/changePhoto:text-white   flex flex-wrap items-center justify-center space-x-2 px-3 py-2 border border-blue-600 rounded-full text-blue-600"'> Change Photo</label>
                </div>
                <div >
                    <input
                        onChange={(e) => {
                            setAdjustment(false);
                            setDownload(true);
                            setTimeout(() => {
                                const cvs = document.querySelector('.photo');

                                html2canvas(cvs).then(function (canvas) {
                                    // document.body.appendChild(canvas);
                                    const downloadLink = document.createElement('a');
                                    downloadLink.href = canvas.toDataURL('image/jpg');
                                    downloadLink.download = `GdscUvpceCommunity.png`;
                                    downloadLink.click();
                                    setDownload(false);
                                }).catch((err) => {
                                    console.log(err)
                                    setDownload(false);

                                });

                            }, 1000);

                        }}
                        className="hidden peer/download" type="checkbox" name="option" id="download" />
                    <label htmlFor="download" className='className="download text-blue-500 peer-checked/download:bg-blue-500 peer-checked/download:text-white flex flex-wrap items-center justify-center space-x-2 px-3 py-2 border border-blue-600 rounded-full text-blue-600"'> Download Photo</label>
                </div>
            </div>



            {/* <p className="text-center w-full text-violet-600">Choose Your Badge</p>
            <div className="w-fit relative m-auto mt-5 flex flex-wrap">

                <label className="w-fit h-fit bg-yellow-300 border-2 border-blue-500 m-2 p-1">
                    <input type="radio" name="badge" id="badge1" />
                    <Image
                        className=''
                        src="/assets/template.png"
                        width={100}
                        height={100}
                        alt="template"
                    />
                </label>

            </div> */}


        </div>
    )
}

export default DownloadBadge