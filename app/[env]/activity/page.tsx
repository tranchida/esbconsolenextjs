import DisplayDemo from "@/app/components/DisplayDemo";

type Props = {
    params: Promise<{ env: string }>
}

export default async function Activity({ params }: Props) {
    const { env } = await params;
    return <DisplayDemo env={env} pageName="Activity" />
}