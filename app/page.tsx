import {catalog} from '../lib/catalog';
import Explorer from './explorer';
export const dynamic='force-dynamic';
export default async function Home(){try{return <Explorer gems={await catalog()}/>}catch{return <main id="main" className="shell page"><h1>Catalog temporarily unavailable</h1><p>We could not load the database. Please try again.</p><a className="primary" href="/">Retry</a></main>}}
