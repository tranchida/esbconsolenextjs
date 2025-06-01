'use client';

import Link from 'next/link';
import { useGlobalContext } from '../providers';
import { useRouter } from 'next/navigation';

export function Navigation() {
  const { env, envs, setEnv } = useGlobalContext();
  const router = useRouter();

  const handleEnvChange = (newEnv: string) => {
    setEnv?.(newEnv);
    router.push(`/${newEnv}/dashboard`);
  };

  return (
    <nav className="space-x-4">
      <Link href={`/${env}/dashboard`} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors">Dashboard</Link>
      <Link href={`/${env}/audit`} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors">Audit</Link>
      <Link href={`/${env}/jms`} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors">JMS Synthèse</Link>
      <Link href={`/${env}/bundle`} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors">Composants</Link>
      <Link href={`/${env}/activity`} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors">Logs d'activité</Link>
      <Link href={`/${env}/admin`} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors">Admin</Link>
      <select 
        value={env} 
        onChange={(e) => handleEnvChange(e.target.value)}
        className="ml-4 px-2 py-1 border rounded bg-blue-300 text-white"
      >
        {envs.map((e) => (
          <option key={e.id} value={e.id}>{e.label}</option>
        ))}
      </select>
    </nav>  
  );
} 