import React, { ChangeEvent, DragEvent, useRef, useState } from 'react'
import MainLayout from '@/component/layouts/MainLayout';
import ProdctReviewImage from "@/assets/images/product-review.png";
import Image from "@/component/elements/NextImage";
import TextInput from "@/component/elements/TextInput";
import StarIcon from '@/component/elements/StarIcon';
import Button from '@/component/elements/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ReviewProduct = () => {
    const [ratingValue, setRatingValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(0);
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [errorMsg, setErrorMsg] = useState('');

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];

        if (droppedFile.type.startsWith('image/') || droppedFile.type.startsWith('video/')) {
            setFile(droppedFile);
            setErrorMsg('');
        } else {
            setErrorMsg('Only image and video files are allowed.');
        }
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleFileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];

        if (selectedFile) {
            if (selectedFile.type.startsWith('image/') || selectedFile.type.startsWith('video/')) {
                setFile(selectedFile);
                setErrorMsg('');
            } else {
                setErrorMsg('Only image and video files are allowed.');
            }
        }
    };



    const handleClick = (val: number) => {
        setRatingValue(val);
    };

    const handleMouseEnter = (val: number) => {
        setHoverValue(val);
    };

    const handleMouseLeave = () => {
        setHoverValue(0);
    };
    return (
        <div className='bg-[#F8F8F8]'>
            <div className='container mx-auto py-5 flex flex-col gap-10'>
                <div className=' cursor-pointer flex gap-2 items-center w-max pr-2'>
                   <KeyboardBackspaceIcon fontSize="large"/>
                    <h1 className='font-bold text-2xl'>Review Produk</h1>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='m-5 md:m-0 h-max rounded-xl overflow-hidden'>
                        <Image src={ProdctReviewImage} width={300}
                            height={3.1}
                            alt="Picture of the author depdep"
                            placeholder="blur"
                            className="hover:scale-105 ease-in duration-300 object-cover w-96 h-96 opacity-90" />
                    </div>
                    <div className='flex flex-col flex-[1.2] rounded-2xl shadow-[0px_4px_16px_rgba(77,77,77,0.12)] p-9 gap-5'>
                        <h1 className='text-medium leading-[24px] font-semibold font-satoshi text-dark'>Sony WM-1000X</h1>
                        <div className='flex flex-col gap-2'>
                            <h3>Rating</h3>
                            <div className='flex gap-3'>
                                {new Array(5).fill('').map((_, index) => (
                                    <div key={index} className="cursor-pointer" onClick={() => handleClick(index + 1)}
                                        onMouseEnter={() => handleMouseEnter(index + 1)}
                                        onMouseLeave={handleMouseLeave}>
                                        <StarIcon color={
                                            (hoverValue || ratingValue) > index
                                                ? '#F26E21'
                                                : '#A6A6A6'
                                        } size={41} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <TextInput label="Judul Review" variant="normal" placeholder="Tulis Judul Review" id="title-review" />
                        <TextInput label="Deskripsi" variant="textarea" placeholder="Tulis Deskripsi" id="description-review" />
                        <div className=" flex flex-col items-center justify-center w-full">
                            <div
                                className="p-8 border-2  bg-[#e8f6fc] border-dashed border-gray-400 rounded-lg w-full flex justify-center gap-1"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}


                            >
                                <div >Tarik dan Lepaskan kesini atau </div>
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={handleFileInput}
                                />
                                <div className='underline font-semibold cursor-pointer' onClick={handleFileClick}>Pilih File</div>
                            </div>
                            {errorMsg && <p className="mt-4 text-red-500">{errorMsg}</p>}
                            {file && (
                                <div className='mt-3 overflow-hidden w-full '>
                                    {file.type.startsWith('image/') ? (
                                        <div className='w-max rounded-md overflow-hidden'>
                                            <Image src={URL.createObjectURL(file)} alt="Dropped Image" width={80} height={80} className="hover:scale-105 ease-in duration-300 object-cover w-[80px] h-[80px] opacity-90" />
                                        </div>
                                    ) : (
                                        <video src={URL.createObjectURL(file)} className="max-w-xs" controls />
                                    )}
                                </div>
                            )}
                        </div>
                        <Button>Kirim Review</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReviewProduct.getLayout = (page: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) =>
    <MainLayout isNormal={true}>{page}</MainLayout>;

export default ReviewProduct