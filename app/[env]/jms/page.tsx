import DisplayDemo from "@/app/components/DisplayDemo";

type Props = {
    params: Promise<{ env: string }>
}

export default async function JMS({ params }: Props) {
    const { env } = await params;
    return <DisplayDemo env={env} pageName="JMS" />
}