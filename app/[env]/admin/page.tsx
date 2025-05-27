export default async function Admin({ params }: { params: { env: string } }) {
    const { env } = await params;
    return <div>Admin {env}</div>;
}