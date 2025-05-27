export default async function Activity({ params }: { params: { env: string } }) {
    const { env } = await params;
    return <div>Activity {env}</div>;
}