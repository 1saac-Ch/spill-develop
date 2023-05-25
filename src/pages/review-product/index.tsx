import ReviewProduct from '@/component/pages/ReviewProduct';

export async function getServerSideProps() {
    // Fetch content data based on slug parameter
    const isReadyAccount = true;

    if (isReadyAccount) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {}
    };
}

export default ReviewProduct