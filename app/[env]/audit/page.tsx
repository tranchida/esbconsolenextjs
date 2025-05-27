export default async function Audit({ params }: { params: { env: string } }) {
    const { env } = await params;
    return <div>Audit {env}</div>;
}