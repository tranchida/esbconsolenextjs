import DisplayDemo from "@/app/components/DisplayDemo";

export default async function Bundle({ params }: { params: { env: string } }) {
    const { env } = await params;
    return <DisplayDemo env={env} pageName="Bundle" />
}