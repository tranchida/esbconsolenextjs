import DisplayDemo from "@/app/components/DisplayDemo";
import ApiService from "@/app/services/api.service";

export default async function Dashboard({ params }: { params: { env: string } }) {
    const { env } = await params;

    const data = await ApiService.get('/api/messages');
    console.log(data);
    
    return <DisplayDemo pageName="Dashboard" env={env} data={data} />;
}