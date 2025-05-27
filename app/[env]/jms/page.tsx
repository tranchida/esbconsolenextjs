export default async function JMS({ params }: { params: { env: string } }) {
    const { env } = await params;
    return <div>JMS synthèse {env}</div>;
}