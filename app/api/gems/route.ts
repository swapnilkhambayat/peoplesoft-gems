import {env} from 'cloudflare:workers';
import {catalog} from '../../../lib/catalog';
import {validateGem} from '../../../lib/search';
export async function GET(){try{return Response.json(await catalog(true),{headers:{'Cache-Control':'no-store'}})}catch{return Response.json({error:'Catalog storage is unavailable. Please retry.'},{status:503})}}
// Owner-private V1 relies on Sites' enforced owner-only access boundary.
// Keep private. Add an explicit administrator allowlist before widening access.
export async function POST(request:Request){
 if(request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Invalid origin'},{status:403});
 if(!request.headers.get('content-type')?.includes('application/json'))return Response.json({error:'JSON required'},{status:415});
 const raw=await request.text();if(raw.length>20000)return Response.json({error:'Resource too large'},{status:413});
 let gem;try{gem=JSON.parse(raw)}catch{return Response.json({error:'Invalid JSON'},{status:400})}
 if(!validateGem(gem))return Response.json({error:'Check required fields, HTTPS URL, date and scores (0–100).'},{status:400});
 try{if(!env.DB)throw new Error('DB missing');const existing=await catalog(true);if(existing.some(g=>g.url===gem.url&&g.id!==gem.id))return Response.json({error:'This source URL already exists.'},{status:409});
 await env.DB.prepare('INSERT INTO resources (id,payload,updated_at) VALUES (?,?,?) ON CONFLICT(id) DO UPDATE SET payload=excluded.payload,updated_at=excluded.updated_at').bind(gem.id,JSON.stringify(gem),new Date().toISOString()).run();return Response.json({ok:true});}catch{return Response.json({error:'Could not save. Your changes have not been confirmed.'},{status:503})}
}
