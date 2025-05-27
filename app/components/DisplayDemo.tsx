'use client';

import { useGlobalContext } from "@/app/providers";

export default function DisplayDemo(props: { pageName: string, env: string }) {
    const { env, envs } = useGlobalContext();
    const currentEnv = envs.find(e => e.id === env);
    return <div>{props.pageName} {props.env} {currentEnv?.label}</div>;
}