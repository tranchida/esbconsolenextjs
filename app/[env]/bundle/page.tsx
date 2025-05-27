export default async function Bundle({ params }: { params: { env: string } }) {
    const { env } = await params;
    return <div>Bundle {env}</div>;
}