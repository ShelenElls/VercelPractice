export default async function FormDetails({
    params,
}: {
    params: Promise<{ formId: string}>;
}){
    const formId = (await params).formId;
    return <h1> Form Components Passed in Here </h1>;
}

