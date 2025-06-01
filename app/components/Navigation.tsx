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
    <nav className="bg-gray-100 border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-4">
          <ul className="flex space-x-6">
            <li><Link href={`/${env}/dashboard`} className="hover:text-blue-600 dark:text-black">Dashboard</Link></li>
            <li><Link href={`/${env}/audit`} className="hover:text-blue-600 dark:text-black">Audit</Link></li>
            <li><Link href={`/${env}/jms`} className="hover:text-blue-600 dark:text-black">JMS Synthèse</Link></li>
            <li><Link href={`/${env}/bundle`} className="hover:text-blue-600 dark:text-black">Composants</Link></li>
            <li><Link href={`/${env}/activity`} className="hover:text-blue-600 dark:text-black">Logs d'activité</Link></li>
            <li><Link href={`/${env}/admin`} className="hover:text-blue-600 dark:text-black">Admin</Link></li>
          </ul>
          <select 
            value={env} 
            onChange={(e) => handleEnvChange(e.target.value)}
            className="ml-4 px-2 py-1 border rounded dark:text-black"
          >
            {envs.map((e) => (
              <option key={e.id} value={e.id}>{e.label}</option>
            ))}
          </select>
        </div>
      </div>
    </nav>  
  );
} 