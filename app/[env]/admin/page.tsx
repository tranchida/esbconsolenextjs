import DisplayDemo from "@/app/components/DisplayDemo";

export default async function Admin({ params }: { params: { env: string } }) {
    const { env } = await params;
    return <DisplayDemo env={env} pageName="Admin" />
}