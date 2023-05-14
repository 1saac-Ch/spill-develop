import MainLayout from '@/component/layouts/MainLayout';
import React from 'react'

const ReviewProduct = () => {
    return (
        <div className='h-screen'>ReviewProduct</div>
    )
}

ReviewProduct.getLayout = (page: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) =>
    <MainLayout>{page}</MainLayout>;

export default ReviewProduct