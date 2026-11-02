import seeds from '../data/gems.json';
import {env} from 'cloudflare:workers';
import type {Gem} from './search';
export async function catalog(all=false):Promise<Gem[]>{
 if(!env.DB)throw new Error('Database unavailable');
 const rows=await env.DB.prepare('SELECT payload FROM resources').all<{payload:string}>();
 const merged=new Map<string,Gem>((seeds as Gem[]).map(g=>[g.id,g]));
 for(const row of rows.results) {const g=JSON.parse(row.payload) as Gem;merged.set(g.id,g)}
 return [...merged.values()].filter(g=>all||g.status==='approved');
}
