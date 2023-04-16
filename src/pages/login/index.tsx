import Login from '@/component/pages/Login';


export async function getServerSideProps() {
    // Fetch content data based on slug parameter
    const isReadyAccount = false;

    if (!isReadyAccount) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        redirect: {
            destination: "/",
            permanent: false,
        },
    };
}

export default Login