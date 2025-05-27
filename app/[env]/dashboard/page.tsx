import DisplayDemo from "@/app/components/DisplayDemo";

export default async function Dashboard({ params }: { params: { env: string } }) {
    const { env } = await params;
    return <DisplayDemo pageName="Dashboard" env={env} />;
}