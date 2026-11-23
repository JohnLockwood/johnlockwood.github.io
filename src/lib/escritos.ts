import { getCollection, type CollectionEntry } from 'astro:content';

type Entry = CollectionEntry<'escritos'>;
const labels: Record<string, string> = {
  index: 'Texto', borrador: 'Borrador', final: 'Versión final', comentarios: 'Comentarios',
};
const order = ['index', 'borrador', 'final', 'comentarios'];

export async function getEscritos() {
  const groups = new Map<string, Entry[]>();
  for (const entry of await getCollection('escritos')) {
    const parts = entry.id.split('/');
    parts.pop();
    const slug = parts.join('/');
    if (!slug) throw new Error(`Put ${entry.id}.md inside a writing directory.`);
    const entries = groups.get(slug) ?? [];
    entries.push(entry);
    groups.set(slug, entries);
  }
  return [...groups].map(([slug, entries]) => {
    const kind = (entry: Entry) => entry.id.split('/').at(-1)!;
    const primary = ['final', 'borrador', 'index']
      .map(name => entries.find(entry => kind(entry) === name)).find(Boolean)
      ?? [...entries].sort((a, b) => a.id.localeCompare(b.id))[0];
    const title = primary.data.title ?? slug.split('/').at(-1)!.replace(/[-_]/g, ' ');
    const sections = entries.map(entry => {
      const id = kind(entry);
      return { entry, id, label: labels[id] ?? entry.data.title ?? id.replace(/[-_]/g, ' ') };
    }).sort((a, b) => {
      const rank = (id: string) => order.includes(id) ? order.indexOf(id) : order.length;
      return rank(a.id) - rank(b.id) || a.id.localeCompare(b.id);
    });
    return { slug, title, metadata: primary.data, sections };
  }).sort((a, b) => a.slug.localeCompare(b.slug));
}
