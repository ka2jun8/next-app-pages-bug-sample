import { useRouter } from "next/router";

const SamplePage = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>Sample: {id}</div>
    )
};

export default SamplePage;
