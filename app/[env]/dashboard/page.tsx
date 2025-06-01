import DisplayDemo from "@/app/components/DisplayDemo";
import { getAllMessages } from "@/app/services/message.service";

type Props = {
    params: Promise<{ env: string }>
}

export default async function Dashboard({ params }: Props) {
    const { env } = await params;

    const data = getAllMessages();
    
    return <DisplayDemo pageName="Dashboard" env={env} data={data} />;
}