import React from 'react'

function Uploadpage({ Progress, setProgress, PhotoDetails, setPhotoDetails, Imgdata, setImgdata, Username, setUsername }) {

    const animateprogressbar = () => {
        const start = setInterval(() => {
            setProgress((val) => {
                if (val >= 100) {
                    clearInterval(start)
                    return 100;
                }
                return val + 25;
            })
        }, 500);
    }
    function printFile(file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
            setImgdata(evt.target.result);
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    }

    const getPhotoDetails = (e) => {
        console.log(e.target.files[0]);
        const details = {
            name: e.target.files[0].name,
            size: e.target.files[0].size,
        }
        printFile(e.target.files[0]);

        setPhotoDetails(details);
        animateprogressbar();
    }

    return (
        <>
            <div className="px-5 block ">
                <div className="title font-medium py-10 m-auto w-fit">
                    <p className='text-gray-600 text-7xl text-center p-3'>Create</p>
                    <p className='text-blue-400 text-5xl text-center'><span className="text-green-500 text-3xl">Profile</span> Badge</p>
                </div>

                <input onChange={(e) => {
                    console.log(e.target.value);
                    setUsername(e.target.value);
                }}
                    className='relative block m-auto w-full max-w-md px-4 py-2 bg-blue-50 placeholder:text-blue-300 outline-none rounded-full' type="text" name="user" id="user" placeholder='Enter Your Name' />
                {(Username == '') && <p className="text-red-400 block m-auto w-full max-w-md  text-xs p-2">Please Enter Your Name</p>}
                <label id="btn" htmlFor='upload' className="uploadSec relative px-5  mt-8 m-auto w-full max-w-2xl 
                flex flex-col items-center bg-violet-50/50 border-2 border-blue-500/20 space-y-8 pt-10 pb-16 rounded-lg
                 ">
                    <div className="photoIcon flex justify-center items-center">
                        <svg width="52" height="43" viewBox="0 0 52 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_83_284)">
                                <path d="M5 4.23077C5 3.37392 5.34038 2.55216 5.94627 1.94627C6.55216 1.34038 7.37392 1 8.23077 1H17.6194C18.5172 0.999969 19.3926 1.28047 20.1232 1.80231L25.4152 5.58231C26.1458 6.10414 27.0212 6.38465 27.9191 6.38462H43.7692C44.6261 6.38462 45.4478 6.725 46.0537 7.33088C46.6596 7.93677 47 8.75853 47 9.61538V31.1538C47 32.0107 46.6596 32.8325 46.0537 33.4383C45.4478 34.0442 44.6261 34.3846 43.7692 34.3846H8.23077C7.37392 34.3846 6.55216 34.0442 5.94627 33.4383C5.34038 32.8325 5 32.0107 5 31.1538V4.23077Z" fill="#E94436" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24.3633 27.9855H13.4131C13.2076 27.9854 13.0064 27.9264 12.8332 27.8156C12.6601 27.7048 12.5223 27.5467 12.4361 27.3601C12.3499 27.1734 12.319 26.966 12.3469 26.7624C12.3748 26.5587 12.4604 26.3673 12.5936 26.2107L17.2481 20.7453C17.4503 20.5078 17.7017 20.317 17.9848 20.1862C18.268 20.0553 18.5763 19.9875 18.8882 19.9875C19.2002 19.9875 19.5084 20.0553 19.7916 20.1862C20.0748 20.317 20.3262 20.5078 20.5284 20.7453L25.1828 26.2107C25.316 26.3672 25.4016 26.5586 25.4295 26.7621C25.4575 26.9657 25.4266 27.173 25.3406 27.3596C25.2545 27.5462 25.1169 27.7042 24.9439 27.8151C24.7709 27.9261 24.5688 27.9852 24.3633 27.9855Z" fill="#E94436" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22.4434 22.9868L27.912 16.5651C28.1142 16.3278 28.3655 16.1371 28.6486 16.0064C28.9317 15.8757 29.2398 15.808 29.5516 15.808C29.8634 15.808 30.1715 15.8757 30.4546 16.0064C30.7377 16.1371 30.989 16.3278 31.1912 16.5651L39.4081 26.2111C39.5414 26.3678 39.627 26.5593 39.6549 26.7631C39.6828 26.9668 39.6517 27.1743 39.5654 27.361C39.4791 27.5476 39.3411 27.7057 39.1678 27.8164C38.9945 27.9272 38.7932 27.986 38.5875 27.9859H24.37" fill="#E94436" />
                                <path d="M22.4434 22.9868L27.912 16.5651C28.1142 16.3278 28.3655 16.1371 28.6486 16.0064C28.9317 15.8757 29.2398 15.808 29.5516 15.808C29.8634 15.808 30.1715 15.8757 30.4546 16.0064C30.7377 16.1371 30.989 16.3278 31.1912 16.5651L39.4081 26.2111C39.5414 26.3678 39.627 26.5593 39.6549 26.7631C39.6828 26.9668 39.6517 27.1743 39.5654 27.361C39.4791 27.5476 39.3411 27.7057 39.1678 27.8164C38.9945 27.9272 38.7932 27.986 38.5875 27.9859H24.37" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.4358 17.6922C17.7912 17.6922 18.8901 16.5934 18.8901 15.2379C18.8901 13.8824 17.7912 12.7836 16.4358 12.7836C15.0803 12.7836 13.9814 13.8824 13.9814 15.2379C13.9814 16.5934 15.0803 17.6922 16.4358 17.6922Z" fill="#E94436" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <filter id="filter0_d_83_284" x="0.5" y="0.5" width="51" height="42.3846" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_83_284" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_83_284" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        <p className="photofilename text-xs text-gray-500 p-2">{PhotoDetails.name}</p>


                    </div>
                    <button onClick={() => { document.getElementById("btn").click() }} className="uploadBtn bg-blue-500 flex items-center justify-evenly px-5 py-2 space-x-3 rounded-lg drop-shadow-[0_0px_12px_#578EFA]">
                        <span className="text-white"> Upload Photo </span>
                        <span className="">
                            <svg width="15" height="15" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.8125 8.63464V3.03152L3.025 4.81902L2.0625 3.82214L5.5 0.384644L8.9375 3.82214L7.975 4.81902L6.1875 3.03152V8.63464H4.8125ZM1.375 11.3846C0.996876 11.3846 0.673064 11.2499 0.403564 10.9804C0.134064 10.7109 -0.000457166 10.3873 1.16723e-06 10.0096V7.94714H1.375V10.0096H9.625V7.94714H11V10.0096C11 10.3878 10.8653 10.7116 10.5958 10.9811C10.3263 11.2506 10.0027 11.3851 9.625 11.3846H1.375Z" fill="white" />
                            </svg>

                        </span>
                    </button>

                    {PhotoDetails.name &&
                        <div className="m-auto relative w-full max-w-lg">
                            <div className="progressBar w-full  h-2 bg-blue-800/20 rounded-full">
                                <div className={`completion w-[0%] h-2 bg-blue-500  rounded-full`}></div>
                            </div>
                            <div className="progressBar text-gray-400 p-2">Uploading... <span className="report">{Progress}</span>%</div>
                        </div>
                    }
                </label>

            </div>


            <input
                onChange={(e) => {
                    console.log("first");
                    if (Username != '') {
                        getPhotoDetails(e);
                    }else{
                        alert("Please Enter Your Name");
                    }
                }}
                className='hidden' type="file" name="upload" id="upload" accept=".png, .jpg, .jpeg" />


        </>
    )
}

export default Uploadpage