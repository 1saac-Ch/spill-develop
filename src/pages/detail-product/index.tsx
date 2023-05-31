import Daftar from '@/component/pages/DetailProduct';

export async function getServerSideProps() {
    // Fetch content data based on slug parameter
    const isReadyAccount = false;

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

export default Daftar