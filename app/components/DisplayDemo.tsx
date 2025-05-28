'use client';

import { useGlobalContext } from "@/app/providers";

export default function DisplayDemo(props: { pageName: string, env: string, data?: any }) {
    const { env, envs } = useGlobalContext();
    const currentEnv = envs.find(e => e.id === env);
    return (
        <div>
            <div>{props.pageName} {props.env} {currentEnv?.label}</div>
            {props.data && props.env == 'in'? (
                props.data.map((item: any, index: number) => (
                    <div key={index}>
                        <p>{item.title} {item.language}</p>
                    </div>
                ))
            ) : (
                <div>No data</div>
            )}
        </div>
    );
}