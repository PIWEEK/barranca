import styles from '@/sections/home/Home.module.css';

export default function HomeComponent() {
  return (
    <main className='h-dvh bg-slate-900'>
      <div className={styles.home}>
        <div className='absolute bottom-1/8 start-1/8 text-white max-w-3/4 md:max-w-lg'>
          <h1 className="text-5xl font-bold font-title">La barrancà</h1>
          <div className='ps-4 border-s border-s-white mt-2'>
            <p>A finals d'octubre de 2024, una DANA va provocar una pluja torrencial que va deixar <strong>229 morts</strong>.</p>
            <p>Aquesta línia de temps interactiva mostra pas a pas les decisions i errades que van transformar una simple previsió en una de les pitjors tragèdies del País Valencià.</p>
          </div>  
        </div>
      </div>
    </main>
  );
}
